"use client";

import { useAutoUpdater } from "@/hooks/useAutoUpdater";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  RefreshCw,
  Download,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Loader2,
  Package,
} from "lucide-react";

/**
 * SettingsPage — Application settings with manual update check.
 * Spec target: `src/components/SettingsPage.tsx`
 * Reuses `useAutoUpdater` so logic is single-source with AutoUpdater.
 */
export function SettingsPage() {
  const {
    status,
    updateInfo,
    progress,
    error,
    checkForUpdates,
    downloadAndInstall,
  } = useAutoUpdater();

  const isChecking = status === "checking";
  const isDownloading = status === "downloading";
  const isAvailable = status === "available";
  const isUpToDate = status === "upToDate";
  const isError = status === "error";

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 p-4 md:p-6">
      {/* Application Updates Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Package className="h-4 w-4" />
            </span>
            Application Updates
          </CardTitle>
          <CardDescription>
            ShelfMaster checks for updates automatically on launch. You can also
            check manually here. All updates are ECDSA-signed and verified.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Status Row */}
          <div className="flex flex-col gap-3 rounded-lg border bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Current Version</p>
              <p className="flex items-center gap-2 font-mono text-sm">
                <span className="rounded bg-background px-2 py-0.5 font-bold">
                  v0.4.0
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Verified Build
                </span>
              </p>
            </div>

            <Button
              onClick={() => checkForUpdates(true)}
              disabled={isChecking || isDownloading}
              variant={isAvailable ? "outline" : "default"}
              className="w-full sm:w-auto"
            >
              {isChecking ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4" />
                  Check for Updates
                </>
              )}
            </Button>
          </div>

          {/* Available State */}
          {isAvailable && updateInfo && (
            <div className="space-y-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold text-primary">
                    <Download className="h-4 w-4" />
                    Update Available — v{updateInfo.version}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {updateInfo.date
                      ? `Released ${new Date(updateInfo.date).toLocaleDateString()}`
                      : "A new version is ready to install."}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={downloadAndInstall}
                  disabled={isDownloading}
                >
                  <Download className="h-3.5 w-3.5" />
                  Install & Restart
                </Button>
              </div>
              {updateInfo.body && (
                <pre className="max-h-32 overflow-y-auto whitespace-pre-wrap break-words rounded bg-background p-3 text-xs leading-relaxed">
                  {updateInfo.body}
                </pre>
              )}
            </div>
          )}

          {/* Downloading Progress */}
          {isDownloading && (
            <div className="space-y-2 rounded-lg border p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium">Downloading v{updateInfo?.version}…</span>
                <span className="font-mono font-bold text-primary">{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Do not close the app. It will restart automatically.
              </p>
            </div>
          )}

          {/* Up To Date */}
          {isUpToDate && (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="font-medium">You are up to date — v0.4.0 is the latest version.</span>
            </div>
          )}

          {/* Error */}
          {isError && error && (
            <div className="flex items-start gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Update check failed</p>
                <p className="mt-1 break-words text-xs opacity-90">{error}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 h-7 text-xs"
                  onClick={() => checkForUpdates(true)}
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {/* Idle hint */}
          {status === "idle" && (
            <p className="text-center text-xs text-muted-foreground">
              Click “Check for Updates” to verify you have the latest signed release.
              Updates download in the background and apply on restart.
            </p>
          )}

          {/* Footer meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 border-t pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> ECDSA Signed
            </span>
            <span className="flex items-center gap-1">
              <Package className="h-3.5 w-3.5" /> Tauri 2.x Updater
            </span>
            <span>Endpoints: GitHub + Vercel</span>
          </div>
        </CardContent>
      </Card>

      {/* Policy Section (placeholder for existing settings) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Library Policy</CardTitle>
          <CardDescription>
            Configure loan duration and fine rates (existing settings live here).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Loan policy controls are managed in the desktop application. This web preview shows
            update infrastructure only.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SettingsPage;
