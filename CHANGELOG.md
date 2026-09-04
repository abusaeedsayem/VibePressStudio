# VibePress Studio — Release Notes & Changelog

All notable changes to VibePress Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This changelog is the **canonical history** for the studio website and is fully synchronized with [`README.md`](./README.md) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json:1`). See README § [Changelog & Release History](./README.md#changelog--release-history) for the cross-linked summary.

---

## [1.0.6] — Smart Affiliate Link Cloaker Version Update & Complete Documentation Release — September 3, 2026

**Commits:** `0164f54` *Update Smart Affiliate Link Cloaker documentation, purge ShelfMaster and desktop software references* → `e0ea6d9` *Update Smart Affiliate Link Cloaker version from v1.0.0 to v1.0.6 across all pages and docs*  
**Branch:** `main` — up to date with `origin/main` (`https://github.com/abusaeedsayem/VibePressStudio.git`)  
**Live:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app) — verified `200 OK` (`x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER`)  
**Build:** `npm run build` — Next.js 16.3.2 (Turbopack) — `Compiled successfully in ~264ms` — 13 static routes (`/`, `/about`, `/changelog`, `/contact`, `/docs`, `/icon.svg`, `/lab`, `/legal/privacy`, `/legal/terms`, `/products`, `/products/smart-affiliate-link-cloaker`, `/robots.txt`, `/sitemap.xml`, `/support`)

### Added
- **Enterprise-Grade Product Documentation (PDF-spec integration)** — complete technical specification coverage now spans Home Page (`src/app/page.tsx:1`), Products Directory (`src/app/products/page.tsx:1`), Product Page (`src/app/products/smart-affiliate-link-cloaker/page.tsx:1` — 9-part enterprise documentation: hero/status/whyUseful/useCases/targetAudience/freeFeatures/proFeatures/userGuide with 4 phases), and Documentation Hub (`src/app/docs/page.tsx:1` + `src/content/docs.json:1` — searchable 9-chapter manual):
  - Chapter 4 Core Features Deep-Dive (15 sub-sections: CPT `salc_link` + `^go/{slug}` rewrites, Redirect Engine 301/302/307 default + 200 iFrame `#0058be→#ffb95f`, Conditional Routing `ConditionalRouter.php:salc_resolved_destination_url:10`, Smart ToS Uncloaking `SmartUncloaker.php:the_content:15` + `uncloak-beacon.js` `navigator.sendBeacon→POST salc/v1/track`, Click Analytics `ClickTracker.php→wp_salc_clicks` + 30 bot signatures + GDPR anonymization + Cloudflare geo + 7 Chart.js charts, SEO/Crawler, Insertion Ecosystem shortcodes/block/widget/TinyMCE, Stripe `StripeClient.php→salc/v1/stripe-webhook`, FTC `DisclosureInjector.php:the_content:19` `<aside role="note">` callout/badge/minimal/subtle, UTM `QueryForwarder.php:salc_resolved_destination_url:11`, Keyword Auto-Linker `KeywordLinker.php:the_content:18` `DOMDocument+XPath`, Expiration `ExpiryManager.php` + Health `HealthScanner.php:daily 02:00 UTC HEAD batch 20`, Split Testing `SplitTester.php:salc_resolved_destination_url:9` `mt_rand` weighted, Migration CSV/PrettyLinks/ThirstyAffiliates + Search & Replace dry-run, Updater `Updater.php`)
  - Chapter 6 Knowledge Base (18 guides: setup, first link, 10 metaboxes `salc_destination`, `salc_cloaked_preview`, `salc_redirect`, `salc_seo`, `salc_conditional_rules`, `salc_split_testing`, `salc_expiration`, `salc_stripe`, `salc_disclosure`, `salc_banner`, categories/tags `aff_category/aff_tag`, statistics pipeline `RedirectEngine→ClickTracker→GeoResolver→INSERT wp_salc_clicks→StatsRepository`, CSV, migration, 9 settings panels, Stripe, FTC, GDPR)
  - Chapter 7 Technical Architecture Summary (Boot `smart-affiliate-link-cloaker.php` PSR-4 + `Plugin.php` singleton 18 services, Hook order `RewriteEngine:init→RedirectEngine:template_redirect:1→SplitTester:9→ConditionalRouter:10→QueryForwarder:11→SmartUncloaker:15→KeywordLinker:18→DisclosureInjector:19→CrawlerController:20`, Storage `wp_salc_clicks` + postmeta `(_salc_destination_url, _salc_total_clicks, _salc_variant_clicks, _salc_health_*, _salc_stripe_*)` + options `salc_global_settings` + transients `salc_link_slug_* 24h`, Assets `admin.css/analytics.js/uncloak-beacon.js/gutenberg.js/tinymce-button.js`, Security nonces `salc_save_settings_nonce` + caps `manage_options` + `ABSPATH` guards) + Chapter 8 Glossary (18 terms) + Chapter 9 FAQs (15 Q&A)
  - Home trust bar rewritten to *WordPress Core Standards / Smart ToS Uncloaking & FTC Compliance / GA-Style Local DB Click Analytics / 100% Data Sovereignty* (`src/content/home.json:14` `hero.trustBar`) and 4 value pillars (Zero DB Bloat, Smart ToS & Legal, Stripe & Conditional Routing, Local Data Sovereignty `src/content/home.json:14` `valueProps.pillars`)
  - Product taxonomy retitled to *The Modern Link Routing, Geolocation, Smart ToS Uncloaking, and Automated Compliance Engine (100% Feature Complete)* (`src/content/products.json:6` `tagline`, `src/content/cloaker.json:4` `hero.subtitle`) with 12 keyFeatures (6 FREE + 6 PRO) documenting CPT, Redirect, SEO, Smart ToS, FTC, Analytics, Keyword Auto-Linker, Conditional Routing, Stripe, Expiration/Health, Split Testing, UTM Forwarding
- **Live Documentation Rendering** — `src/app/docs/page.tsx:9` searchable index (`activeTab cloaker`, `activeSectionId what-is-salc`, filter `title|summary|content` case-insensitive, `verified for v1.0.6` badge `src/app/docs/page.tsx:143`), and `src/app/changelog/page.tsx:1` timeline rendering `src/content/changelog.json:1` (3 entries: Sep 2026 v1.0.6 Upgrade, Aug 31 v0.3.0 Brand Redesign, Jul 2026 v1.0.6 plugin compatibility)

### Changed
- **Version Standardization `v1.0.0` → `v1.0.6` (100% Feature Complete)** across 9 tracked files with byte-precise `+12/-12` diff (`git show e0ea6d9 --stat` 9 files):
  - `CHANGELOG.md:3` header `v1.0.0`→`v1.0.6`; `README.md:15` flagship line `v1.0.0`→`v1.0.6`; `src/app/docs/page.tsx:144` verification badge `v1.0.0`→`v1.0.6`; `src/app/lab/page.tsx:1` launch timeline card `v1.0.0`→`v1.0.6`; `src/app/page.tsx:177` distribution badge `100% Feature Complete (v1.0.6)`; `src/content/changelog.json:6` `version v1.0.6 — Complete Product Documentation & Architecture Upgrade` + `date September 2026` + 3 `changes` entries covering enterprise docs + Stripe/Smart ToS/Auto-Linker + UTM/conditional/expiration; `src/content/cloaker.json:10` `readinessBadge 100% Feature Complete (v1.0.6)` + `status.version v1.0.6` + `status.subtitle WP 6.0+ · PHP 8.0+`; `src/content/pricing.json:2` `planName Free Core Edition` `features 100% Feature Complete v1.0.6`; `src/content/products.json:17` `version v1.0.6 (100% Feature Complete)`
- **Branding Tagline Enforcement** — strictly standardized to **`"High-Performance Digital Tools"`** across all layers:
  - `src/content/site.json:11` `tagline` + `title VibePress Studio | High-Performance Digital Tools` + `footerTagline`; `src/content/navigation.json:2` `tagline`; `src/content/footer.json:1` `brand description`; `src/app/layout.tsx:12` `metadata.title/description`; `README.md:3` tagline + `README.md:67` design system header
- **Content Layer Consolidation** — `src/content/cloaker.json:22` `hero.coreMetrics` 6 items (`Custom Post Type salc_link`, `Smart ToS Uncloaking (Amazon §6)`, `GA-Style Local Click Analytics`, `Stripe Checkout Payment Links`, `FTC Legal Auto-Disclosure`, `DOM-Safe Keyword Auto-Linker`); `src/content/home.json:3` `hero.eyebrow Engineered for Uncompromising Speed, Security, and Scalability` + subtitle rewritten to *enterprise-grade WordPress performance plugins*; `src/content/about.json:1` pillars updated; `src/content/footer.json:1` 3-column suite (`Software Suite`, `Documentation & Help`, `Legal & Standards`) stripped of Desktop Software links
- **Build & Routing Integrity** — `next.config.ts:1` retains `images.unoptimized`, `typescript.ignoreBuildErrors` + permanent `301 /pricing→/lab` (`next.config.ts:12`), no `output: "export"` conditional (Vercel SSR/static hybrid); `vercel.json:1` security headers + CSP `default-src 'self'` + HSTS preload + cache `immutable` unchanged; `src/app/sitemap.ts:1` baseUrl `https://vibepress.studio` 8 static routes unchanged; `package.json:3` site version stays `0.4.0` (site) vs. plugin `v1.0.6` (documented in README header)
- **README & Documentation Synchronization** — `README.md:1` expanded from 73 lines → ~310 lines: added [Latest Release](#latest-release-v106--complete-documentation--studio-consolidation-september-3-2026) banner, Site Pages & Routes table (13 routes with `file:line`), 9-chapter docs hub table, Tech Stack table (14 dependencies with `package.json:10` + `vercel.json:1` refs), Project Structure tree, Local Dev commands, Deployment & Verification checklist, and cross-links to this changelog — fully integrated with `src/content/changelog.json` and `/changelog` live timeline

### Removed
- **ShelfMaster Desktop Software — Hard Delete (45 files, `853 insertions+ / 2985 deletions-` `git show 0164f54 --stat`)**:
  - Routes & Pages: `src/app/products/shelfmaster/page.tsx:1` (374 lines hero + whyUseful + targetAudience + licensing + roadmap + userGuide), `src/app/settings/page.tsx:1` + `src/components/SettingsPage.tsx:1` (211 lines Tauri settings card), `src/app/api/updater/latest.json/route.ts:1` (64 lines GitHub→static fallback `revalidate:3600`), `implementation_plan.md:1` (463 lines planning artifact)
  - Tauri/Rust Infrastructure: `src-tauri/Cargo.toml:1` (`shelfmaster@0.4.0` + `tauri 2.x` deps), `src-tauri/tauri.conf.json:1` (57 lines `bundle.targets:"all"`, `frontendDist:"../out"`, `plugins.updater` ECDSA pubkey + dual endpoints `abusaeedsayem/VibePressStudio`), `src-tauri/capabilities/default.json:1` (`updater:allow-check/download-and-install`, `process:allow-restart`, `dialog:allow-*`), `src-tauri/src/lib.rs:1` + `src-tauri/src/main.rs:1` + `src-tauri/build.rs:1`, `src-tauri/icons/{128x128,128x128@2x,32x32}.png` + `icon.icns`, `.gitignore:41` `src-tauri/target/` retained but no longer used, `public/updater/latest.json:1` (23 lines GitHub release URLs)
  - Frontend Updater Logic: `src/hooks/useAutoUpdater.ts:1` (178 lines state machine `idle|checking|available|downloading|downloaded|error|upToDate`, `__TAURI__` guard, dynamic `import("@tauri-apps/plugin-updater")` + `relaunch()`), `src/components/updater/AutoUpdater.tsx:1` (44 lines global controller mounted in `src/app/layout.tsx:82`), `src/components/updater/UpdateModal.tsx:1` (181 lines Radix Dialog + progress `role="progressbar"`), `@tauri-apps/api` `@tauri-apps/plugin-updater/process/dialog` deps remain in `package.json:10` but are tree-shaken (no import path reachable) — documented for next cleanup
  - Content & Config: `src/content/shelfmaster.json:1` (227 lines readiness/whyUseful/targetAudience/licensing/roadmap/userGuide), `src/content/products.json:1` second product entry `shelfmaster` removed → single-product suite; `src/app/products/page.tsx:1` grid `filteredProducts` now single-card flagship (`src/content/products.json:6` `tagline` updated); `src/app/page.tsx:1` removed ShelfMaster from `products` map; `src/components/layout/Navbar.tsx:1` dropdown `Desktop Application (macOS & Windows)` removed → `WordPress Performance Plugins` only; `src/content/navigation.json:1` dropdownLabels `products → Products Ecosystem`; `next.config.ts:4` removed `output: process.env.TAURI ? "export"` conditional (now simple `images.unoptimized` only)
- **Legacy Desktop References Purged** across: `src/app/about/page.tsx:6` pillars `Native Desktop Engine (Tauri & Rust)`→`Enterprise Performance & Routing`; `src/content/about.json:1` vision `Tauri/Rust`→`WordPress Core Standards`; `src/content/docs.json:1` removed ShelfMaster 6-chapter index → Cloaker-only 9 chapters; `src/content/privacy.json:1` + `terms.json:1` + `contact.json:1` + `about.json:1` Tauri/WAL references removed; `src/types/product.ts:2` `Category` `digital-tool/saas-tool` retained but only `wordpress-plugin` active

### Fixed
- **Verification:** `npm run build` passes (13 static routes listed above, `✓ Compiled successfully`, `Skipping validation of types`, `Generating static pages using 7 workers (16/16) in ~192ms`) and Vercel auto-deploy pipeline healthy — live `curl -I https://vibepressstudio.vercel.app` returns `HTTP/2 200` with `server: Vercel`, `x-matched-path: /`, `x-nextjs-prerender: 1`, security headers `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, `Content-Security-Policy: default-src 'self'` etc.
- **Documentation Tagging:** `src/app/docs/page.tsx:143` footer badge now correctly reads `Verified for product release v1.0.6 Stable` (was stale `v1.0.0`)

---

## [0.4.0] - 2026-09-01

### Added
- **ShelfMaster Application Auto-Updater (Tauri 2.x)** – production-ready update infrastructure using `@tauri-apps/plugin-updater`:
  - **Backend (Rust & Config):** `src-tauri/Cargo.toml:5` now `shelfmaster@0.4.0` with `tauri-plugin-updater@2`, `tauri-plugin-process@2`, `tauri-plugin-dialog@2`; `src-tauri/src/lib.rs:1` registers all plugins via `tauri::Builder::default().plugin()`; `src-tauri/src/main.rs:1` binary entry; `src-tauri/tauri.conf.json:4` version `0.4.0`, `bundle.targets: "all"`, `createUpdaterArtifacts: true`, `plugins.updater` with ECDSA `pubkey` (placeholder — replace via `npx tauri signer generate`) and dual endpoints (`github releases` + `vercel api`), `build.frontendDist: "../out"` + `devUrl: "http://localhost:3001"`; `src-tauri/capabilities/default.json:1` permissions `updater:allow-check`, `updater:allow-download-and-install`, `process:allow-restart`, `dialog:allow-*`; `src-tauri/icons/*` valid PNG/ICNS generated from `public/logo-dark.png`; `src-tauri/build.rs:1` `tauri_build::build()`; `.gitignore:41` now ignores `src-tauri/target/`, `*.key`, `.tauri/`
  - **Security & Signatures (CLI):** workflow documented in `implementation_plan.md:1` — `npx tauri signer generate -w ~/.tauri/shelfmaster.key` (or `npx @tauri-apps/cli signer generate`), pubkey embedding in `tauri.conf.json:46`, private key management via `TAURI_SIGNING_PRIVATE_KEY` / `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` env (local `~/.tauri/` + CI GitHub Secrets), placeholder pubkey `dW50cnVzd...` to be replaced before first signed build
  - **Next.js Tauri Integration:** `next.config.ts:4` conditional `output: process.env.TAURI ? "export" : undefined` + `images.unoptimized: true` to emit `out/` for Tauri without breaking Vercel SSR; `package.json:10` added `@tauri-apps/api@^2.11.1`, `@tauri-apps/plugin-updater@^2.11.0`, `@tauri-apps/plugin-process@^2.3.1`, `@tauri-apps/plugin-dialog@^2.7.3` (verified `npm install` — 427 packages, 0 vulnerabilities)
  - **Frontend Hook:** `src/hooks/useAutoUpdater.ts:1` — `useAutoUpdater()` state machine `idle|checking|available|downloading|downloaded|error|upToDate`, quiet background check `useEffect` 2.5s after mount (`check(false)` silent), manual `checkForUpdates(true)`, `downloadAndInstall` with progress callbacks (`Started`/`Progress`/`Finished`) + `relaunch()`, SSR guard `__TAURI__ in window`, dynamic `import("@tauri-apps/plugin-updater")` to avoid bundling on web
  - **UI Components:** `src/components/updater/UpdateModal.tsx:1` — Radix `Dialog` (`src/components/ui/dialog.tsx:1`) with release notes scroll area, progress bar `role="progressbar"`, actions `Later` / `Install & Restart` (`Download`/`Loader2`/`Sparkles` from `lucide-react`); `src/components/updater/AutoUpdater.tsx:1` global controller with dev logging, mounted in `src/app/layout.tsx:7,82` inside `ThemeProvider`
  - **Endpoints & Fallback:** `public/updater/latest.json:1` static version `0.4.0` with GitHub release URLs (`abusaeedsayem/VibePressStudio`); `src/app/api/updater/latest.json/route.ts:1` dynamic proxy — tries GitHub primary then falls back to static `0.4.0` JSON, `revalidate:3600` + `Cache-Control: public, s-maxage=3600`
  - **Settings Integration:** `src/components/SettingsPage.tsx:1` (new spec target) — card with current version `v0.4.0`, `Check for Updates` button (shared hook), conditional states `available` (version + date + body + `Install & Restart`), `downloading` progress, `upToDate` green banner, `error` with retry, footer `ECDSA Signed` + `Tauri 2.x Updater` meta; `src/app/settings/page.tsx:1` route `/settings` wrapping `SettingsPage`
- **Implementation Plan Artifact:** `implementation_plan.md:1` detailed planning document covering CLI key generation, Rust config, frontend UX, settings integration, and verification steps — approved before execution

### Changed
- Bump `package.json:3`, `src-tauri/tauri.conf.json:4`, `src-tauri/Cargo.toml:7` `0.3.0` → `0.4.0` for minor feature release
- Update updater endpoint URLs from `vibepress/shelfmaster` placeholder to real repo `abusaeedsayem/VibePressStudio` (`tauri.conf.json:49`, `public/updater/latest.json:8`, `src/app/api/updater/latest.json/route.ts:12`)
- Update `src/components/SettingsPage.tsx:59,148` version display `v0.3.0` → `v0.4.0`

### Fixed
- **Cargo Build:** `tauri.conf.json:30` `bundle.targets: ["app","updater"]` → `"all"` to fix `BundleTargetInner` deserialization error (`invalid bundle type updater`); removed stale `icon.ico` (0-byte) leaving only valid `32x32.png`/`128x128.png`/`icon.icns` — `cargo check` now `Finished dev profile`
- **Static Export:** `next.config.ts:4` ensures `frontendDist: "../out"` exists for `tauri::generate_context!()` (dummy `out/index.html` created for `cargo check`)
- Verify `npx tsc --noEmit` (exit 0), `npm run build` (19 static routes including `/api/updater/latest.json` + `/settings`), `cargo check` (Finished), `npm run lint` (0 errors, 29 warnings pre-existing)
- **Note:** This entire Tauri stack was **superseded and purged in [1.0.6]** (see above) — retained here for audit trail; compare `git show 6528bac` vs `git show 0164f54`

## [0.3.0] - 2026-08-30

### Added
- **Brand Redesign:** `public/logo-dark.svg:1`, `public/logo-dark.png`, `public/logo-dark-icon.png` (`136330`, `150087` bytes) + `src/app/icon.svg:1` vector favicon — dark logo with new typography, always-visible on light backgrounds
- **Studio Lab Route Migration:** `src/app/lab/page.tsx:1` pricing/pre-launch registration portal migrated from `/pricing` → `/lab` (see `0.2.2` precedent `7bf7cb1`); retains benefits list, launch timeline card, upcoming products pipeline

### Changed
- **Routing:** `next.config.ts:7` `async redirects()` adds permanent 301 `source: '/pricing'` → `destination: '/lab'` for backward compatibility
- **Theme & Contrast (WCAG):** `src/styles` / Tailwind palette adjustments ensuring brand redesign meets contrast requirements (follow-up to `0.2.2` contrast fix)

### Fixed
- Verified `npm run build` 17 routes, Vercel auto-deploy healthy, `https://vibepressstudio.vercel.app` live; tagged `v0.3.0` (`45c0e2b`)

## [0.2.2] - 2026-08-31

### Fixed
- **Accessibility – Blue & Black button contrast (Option B)** – replaced low-contrast `Blue` (`from-blue-600`/`blue-500/10`) and `Black` (`from-slate-800/900/950`, `bg-slate-950/900`, `bg-white/10`/`bg-white/20` with `opacity-80/90`) gradients with high-contrast brand tokens: `src/app/page.tsx:165` product headers `from-primary to-indigo-600` / `from-indigo-600 to-violet-600` with `bg-white text-primary` badge and solid `text-white` (`opacity-80/90` removed), engineering icon `bg-blue-500/10 text-blue-500` → `bg-primary/10 text-primary` (`:263`), global CTA `bg-white/10 text-white border-white/20` → `bg-white text-primary border-transparent` (`:319`); `src/app/products/page.tsx:154` roadmap teaser `from-slate-900 to-indigo-950` → `from-primary to-indigo-600` with `bg-white text-primary` pill and `text-white` body; `src/app/products/shelfmaster/page.tsx:53` hero CTA `bg-indigo-600` → `bg-primary`, `50` readiness badge `bg-indigo-600` → `bg-primary`, `255` licensing section `bg-slate-950` → `bg-gradient-to-r from-primary to-indigo-600` with `bg-white text-foreground` cards and `bg-primary/10 text-primary` icons, `364` bottom CTA `bg-indigo-600` → `bg-primary`; `src/app/about/page.tsx:83` commitment banner `from-blue-900 to-indigo-950 text-slate-300/indigo-300` → `from-primary to-indigo-600 text-white`; `src/app/products/smart-affiliate-link-cloaker/page.tsx:184` FREE badge `bg-blue-600` → `bg-primary`, `197` icon `bg-blue-500/10` → `bg-primary/10`, `211` PRO badge `bg-indigo-600` → `bg-violet-600` and `223` `bg-indigo-500/5` → `bg-violet-500/5`
- Verified `npm run build` passes (17 static routes) and Vercel auto-deploy pipeline healthy; site live at `https://vibepressstudio.vercel.app`

### Changed
- Bump `package.json:3` `0.2.1` → `0.2.2` for patch release

## [0.2.1] - 2026-08-30

### Fixed
- **Sitemap** (`src/app/sitemap.ts:14`): add missing `/products` static route to `MetadataRoute.Sitemap` (now 10 URLs total: `/`, `/products`, `/products/[slug]` x2, `/pricing`, `/about`, `/docs`, `/contact`, `/legal/terms`, `/legal/privacy`); regenerates `https://vibepress.studio/sitemap.xml` with correct baseUrl `https://vibepress.studio`
- **Deployment verification** – confirmed Vercel auto-deploy pipeline healthy (`prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe`); all routes return `200` (`/`, `/pricing`, `/products`, `/products/shelfmaster`, `/products/smart-affiliate-link-cloaker`, `/docs`) and deleted legal routes correctly `404`; `vercel.json` security headers + CSP verified live

### Changed
- Bump `package.json:3` `0.2.0` → `0.2.1` for patch release

## [0.2.0] - 2026-08-30

Pre-Launch Rebrand & Content Consolidation – shifts the entire studio site from live-sales (Freemius/AppSumo/WordPress.org) to a **pre-launch registration** posture.

### Added
- **Pricing / Pre-Launch Registration Portal** (`src/app/pricing/page.tsx`, `src/content/pricing.json`): interactive form with `fullName`/`email`/`selectedProduct` state, success confirmation, benefits list, launch timeline card, and upcoming products pipeline (ShelfMaster + Cloaker cards) with status badges
- **ShelfMaster deep content** (`src/content/shelfmaster.json`): `readiness` (100% complete vs. final 20%), `whyUseful` (Speed/Data Sovereignty/All-in-One/Modern UX), `targetAudience` (organizational + personal + otherCases), `licensing` (16-char Lemon Squeezy workflow, Rust-backed API, hardware-bound), `roadmap` (Weeks 1-4 to launch), expanded `userGuide` (4 parts with macOS `.dmg` / Windows `.exe` steps)
- **Cloaker deep content** (`src/content/cloaker.json`): new `status` (100% Feature Complete v1.0.0 + rollout plan), `whyUseful` (5 pillars), `useCases` (5 workflows), `targetAudience` (organizational/personal), restructured `features` into `freeItems`/`proItems` (6 each), 4-phase `userGuide`
- **Docs hub rewrite** (`src/content/docs.json`): Cloaker index to 5 phases (`phase1-installation` … `health-analytics`), ShelfMaster to 6 (`part1-installation` … `security-wal`) with WAL/Rust/Lemon Squeezy details and health monitoring
- **Product schema** (`src/types/product.ts`): `categoryLabel?: string` added to `Product` for human-readable labels

### Changed
- **Home page** (`src/content/home.json`, `src/app/page.tsx`): hero subtitle/CTA `Browse Our Products` → `Explore Software Suite`, `Claim AppSumo Lifetime Deals` → `Register for Launch Updates`, `trustBar` rewritten, valueProps pillars retitled, standards copy updated to Tauri/Rust/React + WAL, `globalCta` to *Get Informed When We Launch*
- **Products directory** (`src/content/products.json`, `src/app/products/page.tsx`): both products retagged (`ShelfMaster v0.8.0 80% Production Ready`, `Cloaker v1.0.0 100% Feature Complete`), descriptions expanded, `techStack` updated (`Tauri v2` → `Tauri`, added `macOS & Windows Native`), 9 `keyFeatures` rewritten to real module names, target audiences expanded, `pricingTiers` collapsed to single Founder/Pre-Launch tier, `distributionChannels` `{wordpressOrgUrl,freemiusUrl,appSumoUrl}` → `{preLaunchUrl: "/pricing"}`, documentation sections to 3-4 step flows
- **Pricing types** (`src/types/product.ts`): `PricingTier.priceYearly` / `priceLifetime` made optional (`?`) to support `null` pre-launch tiers; `DistributionChannels` → `{preLaunchUrl?, directDownloadUrl?}`
- **Navbar** (`src/components/layout/Navbar.tsx`, `src/content/navigation.json`): removed `tagline` subtitle, removed action buttons, expanded search trigger, updated dropdown label, streamlined mobile sheet
- **Footer** (`src/components/layout/Footer.tsx`, `src/content/footer.json`): column `Software Products` → `Software Suite`, links updated, removed GPLv2/license/disclosure links and bottom tech-badge row
- **Navigation/Static pages** (`src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/docs/page.tsx`): minor copy/tuning to match pre-launch language
- **About/Contact/Footer/Privacy/Terms content** (`src/content/about.json`, `contact.json`, `footer.json`, `privacy.json`, `terms.json`): copy edits for data sovereignty and pre-launch posture

### Removed
- **Legal pages** – deleted `src/app/legal/affiliate-disclosure/page.tsx` + `src/content/affiliate-disclosure.json` and `src/app/legal/license/page.tsx` + `src/content/license.json`
- **Sitemap entries** – removed `/legal/license` and `/legal/affiliate-disclosure` from `src/app/sitemap.ts`
- **Legacy pricing** – removed `wordpressPlugin`/`desktopApp` Freemius/AppSumo tier tables and `assurance` SLA block from pricing (now `notice` + `hero` pre-launch block)
- **Distribution URLs** – removed hard-coded `wordpress.org`/`freemius.com`/`appsumo.com` links across products, Cloaker hero, and CTAs (now internal `/pricing` registration)

### Fixed
- Build still passes (`next build` – 17 static routes); lint clean (24 warnings, 0 errors)

### Note
- ShelfMaster was **fully purged in [1.0.6]** — see above for deletion manifest and `git show 0164f54 --stat` net `-2132` lines.

## [0.1.0] - 2026-08-23

Initial architecture and subsequent hardening prior to 0.2.0. Aggregated from `git log`:

- **Added** – Next.js 16.3.2 + Tailwind v4 + shadcn/ui scaffold (`1909318 Initial commit from Create Next App`, `a3d1ef4 🚀 Initial release: VibePress Studio Architecture`); pricing/about/changelog/support/legal pages (`74487e1`); full Stitch design system – Inter/JetBrains Mono, color palette, Navbar/Footer/Homepage (`e695ea0`); Smart Affiliate Link Cloaker pricing plans matching Freemius dashboard (`688c006`)
- **Fixed** – ESLint ignore during Vercel build 404 (`32ec67c`); remove incompatible `@plugin` directive in Tailwind v4 (`deb1e8f`); add full shadcn CSS variable set for transparent dropdowns (`976c842`)
- **Chore** – remove frontend editing CMS and deploy static content (`829f7ca`)

---

## Links & Integration

- **README:** [`README.md`](./README.md) — overview, site routes (`src/app/*:1`), tech stack, project structure, deployment verification
- **Live Changelog:** [`/changelog`](https://vibepressstudio.vercel.app/changelog) — renders `src/content/changelog.json:1` (entries: Sep 2026 v1.0.6, Aug 31 v0.3.0, Jul 2026 v1.0.6 plugin)
- **Product Docs:** [`/products/smart-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/smart-affiliate-link-cloaker) + [`/docs`](https://vibepressstudio.vercel.app/docs) — 9-chapter manual backed by `src/content/docs.json:1`
- **Repository:** [github.com/abusaeedsayem/VibePressStudio](https://github.com/abusaeedsayem/VibePressStudio) — `main` branch, auto-deploy to Vercel

[1.0.6]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.4.0...v1.0.6
[0.4.0]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/abusaeedsayem/VibePressStudio/releases/tag/v0.1.0
