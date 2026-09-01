# ShelfMaster Auto-Updater Implementation Plan — Tauri 2.x + Next.js

> **Project:** ShelfMaster (Next-Gen Library Management System) inside VibePressStudio  
> **Stack:** Tauri 2.x, Rust, React 19, Next.js 16.3.2, TypeScript, Tailwind  
> **Plugin:** `@tauri-apps/plugin-updater` (v2)  
> **Status:** Approved 2026-09-01 — Proceeding to Execution  
> **Verification Date:** 2026-09-01 — Workdir `/Users/abusaeedmohammadsayem/VibePressStudio`

---

## 0. Context & Precondition (Verified)

**Finding — No Tauri scaffolding exists** (`bash: ls src-tauri` → `No such file`). Current codebase is web-only marketing site:
- `package.json:1` → `vibepress-studio@0.3.0`, scripts only `dev/build/start/lint`
- `next.config.ts:3` → no `output: 'export'`, no `tauri` config
- `src/components:3` → only `layout/` + `ui/`; `src/components/SettingsPage.tsx` missing
- `src/app/layout.tsx:58` → RootLayout web-only, no Tauri integration

**Decision:** Scaffold in-place `src-tauri/` inside existing repo (recommended) to reuse `src/app`, `src/components`, `tailwind`. Alternative (rejected) sibling crate would duplicate UI.

**Tauri + Next.js constraint:** Tauri 2 expects a static bundle. Either `next build` must emit `out/` via `output: 'export'` or dev server via `devUrl`. Plan adds conditional export to avoid breaking Vercel (`vercel.json:1`).

---

## 1. Security & Signatures (CLI)

### 1.1 Key Generation (One-Time, Secure Machine)

```bash
# Ensure Rust 1.77+ and Node 18+
rustc --version && cargo --version && node --version

# Install Tauri CLI v2 (pin minor)
npm install -D @tauri-apps/cli@^2

# Generate ECDSA (Ed25519) keypair — DO NOT commit private key
npx tauri signer generate -w ~/.tauri/shelfmaster.key
# Prompts password → outputs:
#   Private Key: ~/.tauri/shelfmaster.key
#   Public Key:  dW50cnVzdGVkIGNvbW1lbnQ6... (base64, copy to tauri.conf.json)
#   Example output path: ~/.tauri/shelfmaster.key.pub

# Alternative if `tauri` binary not in PATH:
npx @tauri-apps/cli signer generate --write-keys ~/.tauri/shelfmaster.key
```

**Outputs to capture:**
- `TAURI_SIGNING_PRIVATE_KEY` — contents of `~/.tauri/shelfmaster.key` (base64)
- `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` — password you entered
- `pubkey` — single-line public key string

**Legacy note:** `npx tauri signer generate` is the Tauri 2 canonical command. Do NOT use `tauri signer sign` manually for normal builds; `tauri build` auto-signs when env vars present.

### 1.2 Public Key Embedding

Copy `pubkey` into `src-tauri/tauri.conf.json:plugins.updater.pubkey` (see §2.3). This is the sole verifier; mismatch → update rejected (`signature invalid`).

### 1.3 Private Key Management

| Environment | Variable | Source |
|-------------|----------|--------|
| Local dev | `TAURI_SIGNING_PRIVATE_KEY` | `cat ~/.tauri/shelfmaster.key` |
| Local dev (password) | `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` | prompt value |
| CI (GitHub Actions) | Secrets `TAURI_SIGNING_PRIVATE_KEY` + `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` | repo Settings → Secrets |
| CI alternative | `TAURI_PRIVATE_KEY` (legacy v1) | avoid, use v2 names |

`.gitignore` must include `*.key`, `*.key.pub`, `.tauri/`.

### 1.4 Rotation

Pubkey change requires full reinstall (no self-update can change verifier). Backup private key in 1Password/Vault. Test signing with `npx tauri signer sign <file>` against pubkey.

---

## 2. Backend Configuration (Rust & Config)

### 2.1 Dependency — `src-tauri/Cargo.toml`

```toml
[package]
name = "shelfmaster"
version = "0.3.0"
description = "ShelfMaster - Next-Gen Library Management System"
authors = ["VibePress Studio"]
edition = "2021"

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-updater = "2"
tauri-plugin-process = "2"
tauri-plugin-dialog = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"

[features]
default = ["custom-protocol"]
custom-protocol = ["tauri/custom-protocol"]
```

Align version with `package.json:3` (`0.3.0` → bump to `0.4.0` on first updater release).

### 2.2 Registration — `src-tauri/src/lib.rs`

```rust
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_dialog::init())
        .run(tauri::generate_context!())
        .expect("error while running ShelfMaster");
}
```

If `lib.rs` missing, use `src-tauri/src/main.rs:15`:

```rust
fn main() { shelfmaster_lib::run() }
```

### 2.3 Configuration — `src-tauri/tauri.conf.json`

```json
{
  "productName": "ShelfMaster",
  "version": "0.3.0",
  "identifier": "com.vibepress.shelfmaster",
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devUrl": "http://localhost:3001",
    "frontendDist": "../out"
  },
  "app": {
    "security": { "csp": null },
    "windows": [{ "title": "ShelfMaster", "width": 1280, "height": 800 }]
  },
  "bundle": {
    "active": true,
    "targets": ["app", "updater"],
    "createUpdaterArtifacts": true,
    "icon": ["icons/32x32.png", "icons/128x128.png", "icons/128x128@2x.png", "icons/icon.icns", "icons/icon.ico"]
  },
  "plugins": {
    "updater": {
      "pubkey": "REPLACE_WITH_GENERATED_PUBKEY",
      "endpoints": [
        "https://github.com/<org>/shelfmaster/releases/latest/download/latest.json",
        "https://vibepressstudio.vercel.app/api/updater/latest.json"
      ],
      "windows": { "installMode": "passive" }
    }
  }
}
```

**Endpoints strategy:** GitHub Releases primary (generated by `tauri-action`), Vercel fallback for custom domain. Both must serve same `latest.json` schema.

### 2.4 Capabilities — `src-tauri/capabilities/default.json`

```json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Default capabilities for ShelfMaster",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "core:app:allow-version",
    "updater:default",
    "updater:allow-check",
    "updater:allow-download-and-install",
    "process:allow-restart",
    "dialog:default",
    "dialog:allow-message"
  ]
}
```

Referenced via `tauri.conf.json:app.security.capabilities`.

### 2.5 `latest.json` Schema (Hosted)

```json
{
  "version": "0.4.0",
  "notes": "See changelog - https://vibepressstudio.vercel.app/changelog",
  "pub_date": "2026-09-01T00:00:00Z",
  "platforms": {
    "darwin-x86_64": { "signature": "<sig>", "url": "https://github.com/org/shelfmaster/releases/download/v0.4.0/ShelfMaster_0.4.0_x64.app.tar.gz" },
    "darwin-aarch64": { "signature": "<sig>", "url": "https://github.com/org/shelfmaster/releases/download/v0.4.0/ShelfMaster_0.4.0_aarch64.app.tar.gz" },
    "windows-x86_64": { "signature": "<sig>", "url": "https://github.com/org/shelfmaster/releases/download/v0.4.0/ShelfMaster_0.4.0_x64-setup.nsis.zip" },
    "linux-x86_64": { "signature": "<sig>", "url": "https://github.com/org/shelfmaster/releases/download/v0.4.0/ShelfMaster_0.4.0_amd64.AppImage.tar.gz" }
  }
}
```

Auto-generated when `createUpdaterArtifacts: true` + signing env vars present.

---

## 3. Frontend Integration & UX (React/TS)

### 3.1 NPM Install

```bash
npm install @tauri-apps/plugin-updater @tauri-apps/plugin-process @tauri-apps/plugin-dialog @tauri-apps/api@^2
# @tauri-apps/api provides `getVersion()` etc.
```

### 3.2 Permissions Verification

Ensure `src-tauri/capabilities/default.json:permissions` includes updater + process (see §2.4). Tauri 2 will block IPC if missing (error: `not allowed to use updater.check`).

### 3.3 Hook — `src/hooks/useAutoUpdater.ts` (New)

**Responsibilities:** Silent background check on mount, manual check, download with progress, error handling.

**State machine:** `idle | checking | available | downloading | downloaded | error | upToDate`

```ts
// src/hooks/useAutoUpdater.ts
"use client";
import { useState, useEffect, useCallback } from "react";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

type UpdaterStatus = "idle" | "checking" | "available" | "downloading" | "downloaded" | "error" | "upToDate";

export function useAutoUpdater() {
  const [status, setStatus] = useState<UpdaterStatus>("idle");
  const [updateInfo, setUpdateInfo] = useState<{ version: string; body?: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const checkForUpdates = useCallback(async (notifyIfUptodate = false) => {
    try {
      setStatus("checking"); setError(null);
      const update = await check();
      if (update) {
        setUpdateInfo({ version: update.version, body: update.body });
        setStatus("available");
      } else {
        setStatus("upToDate");
        if (notifyIfUptodate) { /* toast handled by caller */ }
      }
    } catch (e) {
      setError(String(e)); setStatus("error");
    }
  }, []);

  const downloadAndInstall = useCallback(async () => {
    try {
      const update = await check();
      if (!update) return;
      setStatus("downloading"); setProgress(0);
      let downloaded = 0, contentLength = 0;
      await update.downloadAndInstall((event) => {
        switch (event.event) {
          case "Started": contentLength = event.data.contentLength ?? 0; break;
          case "Progress": downloaded += event.data.chunkLength; setProgress(Math.round((downloaded / contentLength) * 100)); break;
          case "Finished": setStatus("downloaded"); break;
        }
      });
      await relaunch();
    } catch (e) {
      setError(String(e)); setStatus("error");
    }
  }, []);

  useEffect(() => { checkForUpdates(false); }, [checkForUpdates]); // silent on launch

  return { status, updateInfo, progress, error, checkForUpdates, downloadAndInstall, dismiss: () => setStatus("idle") };
}
```

**Key design:** `checkForUpdates(false)` runs quietly on `useEffect`; manual button passes `true` to show toast. Download progress via `downloadAndInstall` event callbacks.

### 3.4 UI Component — `src/components/updater/UpdateModal.tsx` (New)

- Uses `src/components/ui/dialog.tsx:1` (`Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`) + `src/components/ui/button.tsx:1`.
- Tailwind + `lucide-react` (`Download`, `RefreshCw`, `Sparkles`).
- Props: derived from hook; `open={status === 'available' || status === 'downloading' || status === 'downloaded'}`.

**Layout:**
- Header: icon + `Update Available — v{version}`
- Body: release notes (`updateInfo.body` sanitized, simple markdown), progress bar when `downloading`
- Footer: `Later` (ghost, dismiss) + `Install & Restart` (primary, disabled when downloading, spinner)
- A11y: `role="alertdialog"`, focus trap via Radix Dialog.

```tsx
// src/components/updater/UpdateModal.tsx
"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Sparkles } from "lucide-react";

export function UpdateModal({ status, updateInfo, progress, onInstall, onDismiss }: Props) {
  const open = status === "available" || status === "downloading" || status === "downloaded";
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onDismiss()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> Update Available — v{updateInfo?.version}</DialogTitle>
          <DialogDescription>A new version of ShelfMaster is ready to install.</DialogDescription>
        </DialogHeader>
        {updateInfo?.body && <div className="prose prose-sm max-h-48 overflow-y-auto text-sm text-muted-foreground">{updateInfo.body}</div>}
        {status === "downloading" && (
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} /></div>
            <p className="text-xs text-muted-foreground text-center">{progress}% downloading...</p>
          </div>
        )}
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onDismiss} disabled={status === "downloading"}>Later</Button>
          <Button onClick={onInstall} disabled={status === "downloading"}>
            {status === "downloading" ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Downloading...</> : <><Download className="mr-2 h-4 w-4" /> Install & Restart</>}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### 3.5 Global Integration — `src/components/updater/AutoUpdater.tsx` + `src/app/layout.tsx:58`

```tsx
// src/components/updater/AutoUpdater.tsx
"use client";
import { useAutoUpdater } from "@/hooks/useAutoUpdater";
import { UpdateModal } from "./UpdateModal";
import { useToast } from "@/hooks/useToast"; // or sonner

export function AutoUpdater() {
  const { status, updateInfo, progress, error, downloadAndInstall, dismiss } = useAutoUpdater();
  // toast side-effects for upToDate / error
  return <UpdateModal status={status} updateInfo={updateInfo} progress={progress} onInstall={downloadAndInstall} onDismiss={dismiss} />;
}
```

Inject in `src/app/layout.tsx:73` inside `ThemeProvider`:

```tsx
import { AutoUpdater } from "@/components/updater/AutoUpdater";
// ...
<ThemeProvider ...>
  <Navbar />
  <main>...</main>
  <Footer />
  <AutoUpdater /> {/* client component handles its own dynamic import guard */}
</ThemeProvider>
```

**SSR guard:** Wrap `check` import or component with `typeof window !== 'undefined' && '__TAURI__' in window` to avoid Next.js SSR errors when running as web.

---

## 4. Settings Page Integration

### 4.1 Target — `src/components/SettingsPage.tsx` (To Create)

Spec requested `src/components/SettingsPage.tsx:1`. Repo currently has no settings page; will create it and integrate into `src/app/lab/page.tsx:1` or standalone settings route.

### 4.2 Implementation — `src/components/SettingsPage.tsx`

```tsx
"use client";
import { useAutoUpdater } from "@/hooks/useAutoUpdater";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RefreshCw, Download, CheckCircle2, AlertCircle } from "lucide-react";

export function SettingsPage() {
  const { status, updateInfo, progress, error, checkForUpdates, downloadAndInstall } = useAutoUpdater();

  return (
    <Card className="max-w-2xl">
      <CardHeader><CardTitle>Application Updates</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Check for the latest ShelfMaster updates. Updates are signed and verified.</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => checkForUpdates(true)} disabled={status === "checking" || status === "downloading"} variant="outline">
            <RefreshCw className={`mr-2 h-4 w-4 ${status === "checking" ? "animate-spin" : ""}`} />
            {status === "checking" ? "Checking..." : "Check for Updates"}
          </Button>
          {status === "available" && (
            <Button onClick={downloadAndInstall}><Download className="mr-2 h-4 w-4" /> Download v{updateInfo?.version}</Button>
          )}
          {status === "downloading" && (
            <div className="flex-1 min-w-[200px]">
              <div className="h-2 bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${progress}%` }} /></div>
              <p className="text-xs text-muted-foreground mt-1">{progress}%</p>
            </div>
          )}
        </div>
        {status === "upToDate" && <p className="text-sm flex items-center gap-2 text-emerald-600"><CheckCircle2 className="h-4 w-4" /> You are up to date.</p>}
        {status === "error" && <p className="text-sm flex items-center gap-2 text-destructive"><AlertCircle className="h-4 w-4" /> {error}</p>}
        {status === "available" && updateInfo?.body && <pre className="text-xs bg-muted p-3 rounded whitespace-pre-wrap">{updateInfo.body}</pre>}
      </CardContent>
    </Card>
  );
}
```

Add to `src/app/lab/page.tsx:1` or create `src/app/settings/page.tsx:1`.

---

## 5. Build & Release Pipeline

1. Developer bumps `package.json:3` + `tauri.conf.json:version` (keep synced).
2. `git tag v0.4.0 && git push --tags`
3. GitHub Action `tauri-apps/tauri-action@v0` (or `.github/workflows/release.yml`):
   - `runs-on: macos-latest` + `windows-latest` + `ubuntu-latest`
   - Env: `TAURI_SIGNING_PRIVATE_KEY`, `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`, `GITHUB_TOKEN`
   - Steps: `npm ci && npm run build && npx tauri build`
   - Artifacts: `*.app.tar.gz`, `*.nsis.zip`, `latest.json` + `.sig`
   - Uploads `latest.json` to `releases/latest/download/`
4. Vercel fallback: optional `src/app/api/updater/latest.json/route.ts` that proxies GitHub JSON or serves static.

---

## 6. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| No Tauri scaffolding → `tauri build` fails | Scaffold `src-tauri/` first (this plan) |
| `output: 'export'` breaks Vercel SSR | Use conditional `output: process.env.TAURI ? 'export' : undefined` |
| `updater:allow-check` missing → IPC blocked | Verify `capabilities/default.json` |
| Private key leaked | `.gitignore` + GitHub Secrets, never log |
| Network offline → update check hangs | Timeout + silent catch, retry next launch |
| CSP blocks updater endpoint (`vercel.json:9`) | Add `connect-src https://github.com` to CSP if needed |

---

## 7. Verification Steps (Post-Implementation)

- `npx tsc --noEmit` passes
- `npm run build` succeeds (web) + `npx tauri build` succeeds (desktop) with `createUpdaterArtifacts: true`
- `check()` in web returns gracefully (mock/no-op when `!__TAURI__`)
- Modal shows release notes, progress animates, `relaunch()` called
- Manual `Check for Updates` in `SettingsPage.tsx` triggers toast

---

## 8. Execution Order (Next Phase)

1. Provide key generation commands
2. Scaffold `src-tauri/` (Cargo.toml, tauri.conf.json, build.rs, src/lib.rs, capabilities)
3. Patch `next.config.ts`, `.gitignore`
4. `npm install @tauri-apps/plugin-updater` etc.
5. Write `useAutoUpdater.ts`, `UpdateModal.tsx`, `AutoUpdater.tsx`
6. Write `SettingsPage.tsx` + integrate into `layout.tsx` + `lab` page
7. Verify `tsc` + `build`

---

*Generated for Planning Mode — awaiting approval to file artifact. Approval received 2026-09-01.*
