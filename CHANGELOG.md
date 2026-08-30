# Changelog

All notable changes to VibePress Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-08-30

Pre-Launch Rebrand & Content Consolidation – shifts the entire studio site from live-sales (Freemius/AppSumo/WordPress.org) to a **pre-launch registration** posture. ShelfMaster is 80% production-ready, Smart Affiliate Link Cloaker is 100% feature-complete (pending review).

### Added
- **Pricing / Pre-Launch Registration Portal** (`src/app/pricing/page.tsx`, `src/content/pricing.json`): interactive form with `fullName`/`email`/`selectedProduct` state, success confirmation, benefits list, launch timeline card, and upcoming products pipeline (ShelfMaster + Cloaker cards) with status badges
- **ShelfMaster deep content** (`src/content/shelfmaster.json`): `readiness` (100% complete vs. final 20%), `whyUseful` (Speed/Data Sovereignty/All-in-One/Modern UX), `targetAudience` (organizational + personal + otherCases), `licensing` (16-char Lemon Squeezy workflow, Rust-backed API, hardware-bound), `roadmap` (Weeks 1-4 to launch), expanded `userGuide` (4 parts with macOS `.dmg` / Windows `.exe` steps)
- **Cloaker deep content** (`src/content/cloaker.json`): new `status` (100% Feature Complete v1.0.0 + rollout plan), `whyUseful` (5 pillars), `useCases` (5 workflows), `targetAudience` (organizational/personal), restructured `features` into `freeItems`/`proItems` (6 each), 4-phase `userGuide`
- **Docs hub rewrite** (`src/content/docs.json`): Cloaker index to 5 phases (`phase1-installation` … `health-analytics`), ShelfMaster to 6 (`part1-installation` … `security-wal`) with WAL/Rust/Lemon Squeezy details and health monitoring
- **Product schema** (`src/types/product.ts`): `categoryLabel?: string` added to `Product` for human-readable labels

### Changed
- **Home page** (`src/content/home.json`, `src/app/page.tsx`): hero subtitle/CTA `Browse Our Products` → `Explore Software Suite`, `Claim AppSumo Lifetime Deals` → `Register for Launch Updates`, `trustBar` rewritten to *WordPress Core Standards / Native Desktop Engine (Tauri & Rust) / SQLite WAL Local Data Sovereignty / Offline-First macOS & Windows Native Builds*`, valueProps pillars retitled, standards copy updated to Tauri/Rust/React + WAL, `globalCta` to *Get Informed When We Launch*
- **Products directory** (`src/content/products.json`, `src/app/products/page.tsx`): both products retagged (`ShelfMaster v0.8.0 80% Production Ready`, `Cloaker v1.0.0 100% Feature Complete`), descriptions expanded, `techStack` updated (`Tauri v2` → `Tauri`, added `macOS & Windows Native`), 9 `keyFeatures` rewritten to real module names (Dashboard/POS/Catalog/Patron/Donors/Staff/Payroll/Expenses/Settings), target audiences expanded, `pricingTiers` collapsed to single Founder/Pre-Launch tier, `distributionChannels` `{wordpressOrgUrl,freemiusUrl,appSumoUrl}` → `{preLaunchUrl: "/pricing"}`, documentation sections to 3-4 step flows
- **Pricing types** (`src/types/product.ts`): `PricingTier.priceYearly` / `priceLifetime` made optional (`?`) to support `null` pre-launch tiers; `DistributionChannels` → `{preLaunchUrl?, directDownloadUrl?}`
- **Navbar** (`src/components/layout/Navbar.tsx`, `src/content/navigation.json`): removed `tagline` subtitle, removed action buttons (`View Documentation`/`Explore`), expanded search trigger to `w-48 sm:w-64 md:w-72` with `Search products, docs, features...` placeholder, updated dropdown label `Desktop Application (Win/macOS/Linux)` → `Desktop Application (macOS & Windows)`, streamlined mobile sheet
- **Footer** (`src/components/layout/Footer.tsx`, `src/content/footer.json`): column `Software Products` → `Software Suite` (single `Products Directory` link), *Documentation & Help* link `License Key Management/AppSumo Deal Redemption` → `Pre-Launch Registration`, removed `Legal & Standards` GPLv2/license/disclosure links and bottom tech-badge row (*WordPress VIP / Tauri v2 + Rust / Zero PII Telemetry*)
- **Navigation/Static pages** (`src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/docs/page.tsx`): minor copy/tuning to match pre-launch language
- **About/Contact/Footer/Privacy/Terms content** (`src/content/about.json`, `contact.json`, `footer.json`, `privacy.json`, `terms.json`): copy edits for data sovereignty, WAL, and pre-launch posture

### Removed
- **Legal pages** – deleted `src/app/legal/affiliate-disclosure/page.tsx` + `src/content/affiliate-disclosure.json` and `src/app/legal/license/page.tsx` + `src/content/license.json`
- **Sitemap entries** – removed `/legal/license` and `/legal/affiliate-disclosure` from `src/app/sitemap.ts`
- **Legacy pricing** – removed `wordpressPlugin`/`desktopApp` Freemius/AppSumo tier tables and `assurance` SLA block from pricing (now `notice` + `hero` pre-launch block)
- **Distribution URLs** – removed hard-coded `wordpress.org`/`freemius.com`/`appsumo.com` links across products, Cloaker hero, and CTAs (now internal `/pricing` registration)

### Fixed
- Build still passes (`next build` – 17 static routes); lint clean (24 warnings, 0 errors, all pre-existing unused-import warnings)

## [0.1.0] - 2026-08-23

Initial architecture and subsequent hardening prior to 0.2.0. Aggregated from `git log`:

- **Added** – Next.js 16.3.2 + Tailwind v4 + shadcn/ui scaffold (`1909318 Initial commit from Create Next App`, `a3d1ef4 🚀 Initial release: VibePress Studio Architecture`); pricing/about/changelog/support/legal pages (`74487e1`); full Stitch design system – Inter/JetBrains Mono, color palette, Navbar/Footer/Homepage (`e695ea0`); Smart Affiliate Link Cloaker pricing plans matching Freemius dashboard (`688c006`)
- **Fixed** – ESLint ignore during Vercel build 404 (`32ec67c`); remove incompatible `@plugin` directive in Tailwind v4 (`deb1e8f`); add full shadcn CSS variable set for transparent dropdowns (`976c842`)
- **Chore** – remove frontend editing CMS and deploy static content (`829f7ca`)

[0.2.0]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/abusaeedsayem/VibePressStudio/releases/tag/v0.1.0
