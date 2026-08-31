# Changelog

All notable changes to VibePress Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.2.2]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/abusaeedsayem/VibePressStudio/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/abusaeedsayem/VibePressStudio/releases/tag/v0.1.0
