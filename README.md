# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Site Version:** `v0.4.0` (Next.js) · **Flagship Plugin Version:** `v1.0.6` (100% Feature Complete)  
> **Last Updated:** September 3, 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to WordPress Core Coding Standards (WPCS), PSR-4/PSR-12, WCAG AAA contrast, and zero telemetry privacy requirements. Every tool is built for sub-millisecond execution, transient caching, and local database ownership.

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) and the live documentation hub at [`/docs`](https://vibepressstudio.vercel.app/docs) and product page [`/products/smart-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/smart-affiliate-link-cloaker). Both files track the same release lineage — see [Changelog & Deployment](#changelog--release-history) below.

---

## Latest Release: v1.0.6 — Complete Documentation & Studio Consolidation (September 3, 2026)

**Commit lineage:** `0164f54` → `e0ea6d9` (branch `main`, up to date with `origin/main`)

This release finalizes the studio pivot to a WordPress-focused performance suite and bumps the flagship plugin from `v1.0.0` to `v1.0.6` (100% Feature Complete). All changes are live at [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app) and validated via `npm run build` (13 static routes).

### What's New at a Glance

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Enterprise Documentation** | Integrated complete PDF-spec product documentation across Home (`src/app/page.tsx:1`), Products Directory (`src/app/products/page.tsx:1`), Product Page (`src/app/products/smart-affiliate-link-cloaker/page.tsx:1`), and Documentation Hub (`src/app/docs/page.tsx:1` + `src/content/docs.json:1`) | `src/content/cloaker.json:1`, `src/content/products.json:1`, `src/content/home.json:1` |
| **Version Standardization** | Bumped plugin version `v1.0.0` → `v1.0.6` across 9 tracked files | `README.md:1`, `CHANGELOG.md:1`, `src/app/docs/page.tsx:144`, `src/app/lab/page.tsx:1`, `src/app/page.tsx:1`, `src/content/changelog.json:6`, `src/content/cloaker.json:10`, `src/content/pricing.json:1`, `src/content/products.json:17` |
| **Studio Consolidation** | Hard-deleted all ShelfMaster Desktop Software (Tauri 2.x) references, routes, components, and binaries | Deleted: `src/app/products/shelfmaster/page.tsx:1`, `src/content/shelfmaster.json:1`, `src-tauri/*`, `src/hooks/useAutoUpdater.ts:1`, `src/components/updater/*`, `src/app/settings/page.tsx:1`, `public/updater/latest.json:1`, `src/app/api/updater/latest.json/route.ts:1` |
| **Brand Enforcement** | Tagline strictly standardized to **`"High-Performance Digital Tools"`** across metadata, header, footer, and content layers | `src/content/site.json:11`, `src/content/navigation.json:2`, `src/content/footer.json:1`, `src/app/layout.tsx:1` |

> **Full history:** See [`CHANGELOG.md`](./CHANGELOG.md) § [1.0.6] and [`src/content/changelog.json`](./src/content/changelog.json) (rendered at [`/changelog`](https://vibepressstudio.vercel.app/changelog)) for the complete diff log including `WPCS / PSR-12` verification and `npm run build` validation.

---

## Flagship Product: Smart Affiliate Link Cloaker

**Smart Affiliate Link Cloaker** is an enterprise-grade WordPress plugin (**v1.0.6 — 100% Feature Complete**) that turns raw merchant referral URLs into clean, branded, trackable links hosted on your own domain. It is the sole flagship after the ShelfMaster removal.

**Distribution Status:**
- Free Core Edition: submitted for WordPress.org manual review (pending approval)
- PRO Lifetime License: fully packaged, launches within one month of Free approval
- Pre-launch registration open at [`/lab`](https://vibepressstudio.vercel.app/lab)

### Key Capabilities & Architecture Highlights

- **Custom Post Type (`salc_link`) & Top-Priority Rewrite Engine** (`RewriteEngine.php`): High-performance URL routing (`^go/{slug}` or `^go/{category}/{slug}`) with 24h transient caching (`salc_link_slug_{slug}`). Slug derived from `post_name`. See `src/content/cloaker.json:148` and `src/content/docs.json:22`.
- **301 / 302 / 307 / 200 iFrame Redirect Engine** (`RedirectEngine.php:template_redirect:1`): Supports uncached 307 Temporary Redirects (default) and 200 iFrame masking with branded gradient header (`#0058be→#ffb95f`). Resolves via transient before DB hit.
- **Smart ToS Uncloaking (Amazon Associates §6)** (`SmartUncloaker.php:the_content:15`): Auto-detects `amazon.*` and `amzn.to` URLs via regex, renders raw destination on frontend (`data-salc-uncloaked="1"`), beacon-tracks clicks via `navigator.sendBeacon` → `POST salc/v1/track`. Enqueued as `uncloak-beacon.js`.
- **FTC Legal Auto-Disclosure Injector** (`DisclosureInjector.php:the_content:19`): Auto-inserts accessible `<aside role="note">` legal compliance banners with 4 customizable visual styles (Callout, Badge, Minimal, Subtle) at `top` / `bottom` / `before_first_link`. Config hierarchy: global → per-category → per-link.
- **GA-Style Local Click Analytics** (`ClickTracker.php` + `StatsRepository.php`): Local database logging (`wp_salc_clicks` table) with 30+ bot signature filters, IPv4/IPv6 IP anonymization (last octet /64 masking), Cloudflare `HTTP_CF_IPCOUNTRY` geo resolution, 7 Chart.js graphs, and CSV export (UTF-8 BOM). Table schema: `id BIGINT PK AI, link_id BIGINT idx, clicked_at DATETIME, ip_address VARCHAR45, referrer TEXT, user_agent TEXT, os VARCHAR20, browser VARCHAR20, device VARCHAR20, country_code CHAR2, city VARCHAR100, region VARCHAR100, language VARCHAR100, is_bot TINYINT`.
- **DOM-Safe Keyword Auto-Linker [PRO]** (`KeywordLinker.php:the_content:18`): `DOMDocument` + XPath regex engine automatically converts keywords to cloaked links across post history while skipping `h1-h6`, `code`, `pre`, `script`, `style`, existing `<a>`, and `salc-skip-linker` ancestors. Caps per-post/per-keyword word-boundary `(?<!\w)kw(?!\w)` case-insensitive.
- **Conditional Routing [PRO]** (`ConditionalRouter.php:salc_resolved_destination_url:10`): Per-visitor dynamic routing by OS (macOS/Windows/Android/iOS/Linux), Browser, Device, Language, and Country (GeoIP / Cloudflare `CF-IPCountry`, cached 1h `salc_geo_*`).
- **Stripe Payment Links Integration [PRO]** (`StripeClient.php`): Direct `go/checkout` → Stripe Checkout Session creation (`sk_live_...` + Price ID `price_...`) with REST webhook `salc/v1/stripe-webhook` for conversion and revenue logging (`_salc_stripe_conversions` postmeta).
- **Deal Expiration & Nightly Health Scanner [PRO]** (`ExpiryManager.php` + `HealthScanner.php`): Auto-expire deals by date or click cap (302 fallback or 410 page). Nightly background `daily 02:00 UTC` HEAD checks (batch 20, 10s timeout, fallback GET on 405/501) ping destination links and send broken link email reports (`_salc_health_status` ok/broken).
- **Dynamic UTM & Query Parameter Forwarding [PRO]** (`QueryForwarder.php:salc_resolved_destination_url:11`): Allowlist forwarding (`utm_*`, `gclid`, `fbclid`, `msclkid`, `wbraid`, `gbraid`) preserving target parameters and fragment, sanitizing incoming `$_GET` keys <500 chars.
- **A/B Split Testing & Rotation [PRO]** (`SplitTester.php:salc_resolved_destination_url:9`): Weighted random `mt_rand` cumulative or sequential rotation via transient, with variant click tracking (`_salc_variant_clicks`).
- **1-Click Platform Migration**: Import links and click counts from PrettyLinks, ThirstyAffiliates, or CSV files (`post_exists` deduplication, preserves slugs, variant maps) in one click. Includes DB Search & Replace (raw URLs → `[af_link id="ID"]` shortcodes, dry-run safeguard).
- **SEO & Crawler Controls**: Auto `rel="nofollow sponsored"` + `target="_blank"`, `X-Robots-Tag: noindex, nofollow, noarchive` header on redirects, `Disallow: /go/` in `robots.txt`, plus `Disallow: /go/` injection via `CrawlerController.php:the_content:20`.

Detailed in: [`src/content/cloaker.json`](./src/content/cloaker.json) (hero, status, whyUseful, useCases, targetAudience, features, userGuide) and [`/docs` chapter 4–8](https://vibepressstudio.vercel.app/docs).

---

## Site Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx:1` | Home — studio value propositions, flagship showcase, engineering standards, global CTA |
| `/products` | `src/app/products/page.tsx:1` | Products Directory — ecosystem listing (post-ShelfMaster: Cloaker only + roadmap teaser) |
| `/products/smart-affiliate-link-cloaker` | `src/app/products/smart-affiliate-link-cloaker/page.tsx:1` | 9-part enterprise documentation, technical specs, use cases, setup guides |
| `/docs` | `src/app/docs/page.tsx:1` | Documentation Hub — searchable 9-section manual with sidebar index + step-by-step guides |
| `/changelog` | `src/app/changelog/page.tsx:1` | Release Notes — renders `src/content/changelog.json:1` timeline |
| `/lab` | `src/app/lab/page.tsx:1` | Studio Lab — pre-launch registration portal (migrated from `/pricing`, 301 redirect preserved) |
| `/about` | `src/app/about/page.tsx:1` | Studio Vision, Philosophy, 4 Engineering Pillars, Accreditation |
| `/contact` | `src/app/contact/page.tsx:1` | Support Helpdesk & Inquiry Form |
| `/support` | `src/app/support/page.tsx:1` | 301 alias → `/contact` |
| `/legal/terms` | `src/app/legal/terms/page.tsx:1` | Terms of Service |
| `/legal/privacy` | `src/app/legal/privacy/page.tsx:1` | Cookie-less Privacy Policy |
| `/sitemap.xml` | `src/app/sitemap.ts:1` | Auto-generated sitemap (`https://vibepress.studio`) — 8 static + N product routes |
| `/robots.txt` | `src/app/robots.ts:1` | Robots directives + `Disallow: /go/` |
| `/icon.svg` | `src/app/icon.svg:1` | Vector favicon (SVG logo) |

**Legacy deleted routes (v1.0.6 purge):** `/products/shelfmaster` (`374 lines` removed), `/settings`, `/pricing` (now 301 → `/lab` via `next.config.ts:12`), `/api/updater/latest.json`.

**Navigation:** Defined in `src/content/navigation.json:1` — Products (dropdown), Studio (`/lab`), Documentation (`/docs`), About, Support; search placeholder `Search products, docs, features...` (`src/components/layout/Navbar.tsx:1`). Footer columns `Software Suite | Documentation & Help | Legal & Standards` (`src/content/footer.json:1`).

---

## Documentation Hub — 9-Chapter Manual

Rendered at [`/docs`](https://vibepressstudio.vercel.app/docs) from `src/content/docs.json:1`. Searchable via `src/app/docs/page.tsx:17` (case-insensitive title/summary/content filter).

1. **What is Smart Affiliate Link Cloaker?** — CPT `salc_link`, RewriteEngine, RedirectEngine, transient caching explainer
2. **Why is Smart Affiliate Link Cloaker Essential?** — Trust/CTR, SEO Safety, Compliance by Default, Attribution Control, Scale
3. **All Possible Use Cases** — Amazon review sites, deal aggregators, newsletter/paid traffic, SaaS comparisons, podcasts/YouTube, Stripe upsells, SEO auto-linking, agencies, migration, compliance-first
4. **Core Features Deep-Dive** (15 sub-sections) — Link Cloaking, Redirect Engine, Conditional Routing, Smart ToS Uncloaking, Click Analytics, SEO & Crawler, Insertion Ecosystem (shortcodes/block/widget/TinyMCE), Stripe, FTC Disclosure, UTM Forwarding, Keyword Auto-Linker, Expiration & Health Scanner, Split Testing, Migration Tools, Dual-source Updater
5. **Who Actually Needs This Plugin?** — Needs It vs. Does Not Need It vs. Decision Checklist (≥2 YES → choose SALC)
6. **Knowledge Base & Step-by-Step Guides** (18 guides) — Install, First Link, 10 Metaboxes (`salc_destination`, `salc_cloaked_preview`, `salc_redirect`, `salc_seo`, `salc_conditional_rules`, `salc_split_testing`, `salc_expiration`, `salc_stripe`, `salc_disclosure`, `salc_banner`), Categories/Tags, Statistics Pipeline, CSV & Migration, Search & Replace, 9 Settings Panels, Stripe Setup, Privacy/GDPR, FTC Disclosure, UTM Forwarding, Keyword Auto-Linker, Expiration/Health, Updates
7. **Technical Architecture Summary** — Boot PSR-4 (`smart-affiliate-link-cloaker.php`), Singleton Container (`Plugin.php` 18 services), Hook order (`init` → `template_redirect:1` → `salc_resolved_destination_url:9/10/11` → `the_content:15/18/19/20`), Storage Schema (`wp_salc_clicks` + postmeta/options/transients), Assets (`admin.css`, `analytics.js`, `uncloak-beacon.js`, `gutenberg.js`, `tinymce-button.js`), Security (nonces `salc_save_settings_nonce`, caps `manage_options`, `ABSPATH` guards)
8. **Glossary of Key Terms** — 18 definitions (Affiliate Link, Cloaked URL, Slug, Prefix `go` `Constants:22`, Redirect Type, Beacon `navigator.sendBeacon`, FTC Disclosure `<aside role="note">`, Transient `salc_link_slug_* 24h`, GeoResolver, Health Status, Split Tester, X-Robots-Tag, CPT/Taxonomy, REST Routes `salc/v1/track`, `salc/v1/stripe-webhook`)
9. **Frequently Asked Questions** — 15 Q&A (prefix breakage, Amazon §6 compliance, redirect choice 307 default, uninstall vs deactivation, 404 troubleshooting, Statistics pipeline, auto-linker word boundaries, UTM allowlist, Stripe `sk_...`, disclosure hierarchy, HEAD `SALC-HealthChecker` UA, expiry fallback, migration, DB search & replace dry-run, GDPR cookies, updater dual-source)

---

## Tech Stack & Design System

| Layer | Technology | Version / Notes | File |
|-------|------------|-----------------|------|
| **Framework** | Next.js (App Router + Turbopack) | `16.3.2` | `package.json:10` |
| **Language** | TypeScript | `^5` | `tsconfig.json:1` |
| **Styling** | Tailwind CSS (v4) + `@tailwindcss/postcss` + `@tailwindcss/typography` | `^4` / `^0.5.20` | `postcss.config.mjs:1` |
| **UI Components** | shadcn/ui + Radix UI (`accordion`, `dialog`, `dropdown-menu`, `label`, `select`, `slot`, `tabs`) | `^1.x`/`^2.x` | `components.json:1` |
| **Icons** | Lucide React | `^1.33.0` | `package.json:10` |
| **Animation** | Framer Motion | `^13.1.1` | `package.json:10` |
| **Typography** | Inter & JetBrains Mono (Google Fonts via `next/font`) | — | `src/app/layout.tsx:1` |
| **Theming** | next-themes (light/dark, WCAG AAA palette) | `^0.4.6` | `src/app/layout.tsx:1` |
| **Content** | JSON-driven (`src/content/*.json` 13 files) + static generation | — | `src/content/cloaker.json:1` |
| **Security Headers** | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, XSS-Protection | `max-age=31536000; includeSubDomains; preload` | `vercel.json:1` |
| **Deployment** | Vercel (auto-deploy from `main`, static prerender) | `prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe` | `vercel.json:1`, `.vercel/project.json:1` |
| **Linting** | ESLint + `eslint-config-next` | `^9` / `16.3.2` | `eslint.config.mjs:1` |
| **Config** | `next.config.ts:1` (images `unoptimized`, `ignoreBuildErrors`, 301 `/pricing` → `/lab`) | — | `next.config.ts:1` |

**Design Tokens:** `globals.css` CSS variables for light/dark themes, primary/indigo/violet gradients (`from-primary to-indigo-600`, `from-indigo-600 to-violet-600`), WCAG AAA text contrast verified. See `src/app/page.tsx:165` product headers, `src/app/products/page.tsx:154` roadmap, `src/app/about/page.tsx:83` commitment banner.

---

## Project Structure

```
VibePressStudio/
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Home
│   │   ├── layout.tsx                        # Root layout + ThemeProvider + Navbar/Footer
│   │   ├── about/page.tsx                    # About Studio
│   │   ├── changelog/page.tsx                # Changelog (JSON-driven)
│   │   ├── contact/page.tsx                  # Support Helpdesk
│   │   ├── support/page.tsx                  # → /contact redirect
│   │   ├── docs/page.tsx                     # Documentation Hub (search + index)
│   │   ├── lab/page.tsx                      # Studio Lab registration portal
│   │   ├── products/
│   │   │   ├── page.tsx                      # Directory
│   │   │   └── smart-affiliate-link-cloaker/page.tsx  # Product deep dive
│   │   ├── legal/{privacy,terms}/page.tsx
│   │   ├── sitemap.ts, robots.ts, icon.svg, globals.css
│   ├── components/
│   │   ├── layout/Navbar.tsx, Footer.tsx
│   │   └── ui/* (shadcn: accordion, dialog, dropdown, label, select, slot, tabs)
│   ├── content/
│   │   ├── cloaker.json      # Product spec (255 lines, 10 feature groups)
│   │   ├── products.json     # Directory + pricing tiers
│   │   ├── docs.json         # 9-chapter manual
│   │   ├── changelog.json    # Release timeline (rendered at /changelog)
│   │   ├── home.json         # Hero, valueProps (4 pillars), standards, CTA
│   │   ├── pricing.json      # Lab portal benefits + timeline
│   │   ├── about.json, contact.json, navigation.json, site.json, footer.json, etc.
│   ├── data/products.ts      # Product aggregator
│   └── types/product.ts      # Product / KeyFeature / PricingTier types
├── public/
│   ├── images/products/*     # Cloaker logos + screenshots
│   ├── logo-dark.svg, icon.svg
│   └── og-image.jpg
├── next.config.ts            # 301 /pricing → /lab, unoptimized images
├── vercel.json               # Security headers + CSP + caching
├── package.json              # 0.4.0 (site) · Next 16.3.2 · Tailwind 4
└── CHANGELOG.md              # Full release notes (this README's companion)
```

**Purged in v1.0.6:** `src-tauri/` (Cargo, Rust, Tauri config, icons, capabilities), `src/hooks/useAutoUpdater.ts`, `src/components/updater/*`, `src/app/settings/page.tsx`, `src/components/SettingsPage.tsx`, `src/app/api/updater/latest.json/route.ts`, `public/updater/latest.json`, `src/content/shelfmaster.json`, `src/app/products/shelfmaster/page.tsx`, `implementation_plan.md`.

---

## Local Development & Build Setup

```bash
# Install dependencies (427 packages, 0 vulnerabilities)
npm install

# Run local development server (http://localhost:3001)
npm run dev          # next dev -p 3001 (Turbopack)

# Production build validation (13 static routes)
npm run build        # next build — generates .next + static export

# Lint
npm run lint         # eslint (0 errors, warnings pre-existing)

# Type check
npx tsc --noEmit
```

**Build output (verified Sep 3, 2026):**
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /changelog
├ ○ /contact
├ ○ /docs
├ ○ /icon.svg
├ ○ /lab
├ ○ /legal/privacy
├ ○ /legal/terms
├ ○ /products
├ ○ /products/smart-affiliate-link-cloaker
├ ○ /robots.txt
├ ○ /sitemap.xml
└ ○ /support
○  (Static)  prerendered as static content
✓ Compiled successfully in ~264ms
```

---

## Changelog & Release History

> **Single source of truth:** [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog + Semantic Versioning) is the canonical history. It is mirrored in [`src/content/changelog.json`](./src/content/changelog.json) (rendered at [`/changelog`](https://vibepressstudio.vercel.app/changelog)) and summarized in this README's [Latest Release](#latest-release-v106--complete-documentation--studio-consolidation-september-3-2026).

| Version | Date | Summary | Diff |
|---------|------|---------|------|
| **1.0.6** | 2026-09-03 | Complete documentation & architecture upgrade, ShelfMaster purge, tagline enforcement | `e0ea6d9` `0164f54` |
| **0.4.0** | 2026-09-01 | ShelfMaster Auto-Updater (Tauri 2.x) — now superseded & removed in 1.0.6 | `6528bac` |
| **0.3.0** | 2026-08-31 | Brand Redesign, Studio Lab migration `/pricing` → `/lab`, WCAG polish | `45c0e2b` |
| **0.2.2** | 2026-08-31 | Accessibility contrast fix (Option B) — blue/black → primary tokens | `a229109` |
| **0.2.1** | 2026-08-30 | Sitemap fix + deployment verification | `b10ae74` |
| **0.2.0** | 2026-08-30 | Pre-Launch Rebrand & Content Consolidation | `eb9ce11` |
| **0.1.0** | 2026-08-23 | Initial Next.js + Tailwind scaffold + Stitch design system | `a3d1ef4` |

See [`CHANGELOG.md`](./CHANGELOG.md) for full Added/Changed/Removed/Fixed entries with file:line references, and for the `[Unreleased]` roadmap.

---

## Deployment & Verification

**Platform:** Vercel (`prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe`) — auto-deploy on `git push` to `origin/main`.

**Live URL:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)

**Verification checklist (post-push):**
```bash
# 1. Push triggers deploy
git push origin main

# 2. Verify build
npm run build        # expect 13 static routes, compiled successfully

# 3. Verify live
curl -I https://vibepressstudio.vercel.app          # expect HTTP/2 200, x-vercel-cache: PRERENDER
curl -s https://vibepressstudio.vercel.app | grep -q "High-Performance Digital Tools"
curl -s https://vibepressstudio.vercel.app/docs | grep -q "Documentation"
curl -s https://vibepressstudio.vercel.app/changelog | grep -q "Changelog"
```

**Current live status (Sep 3, 2026):** ✅ `200 OK` — `x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER`, CSP & HSTS headers active (`vercel.json:1`), all routes returning `200` and deleted routes (`/products/shelfmaster`, `/settings`) correctly `404`.

**Vercel config:** `vercel.json:1` security headers (nosniff, DENY, HSTS preload, CSP `default-src 'self'`), caching `public, max-age=31536000, immutable` for `/_next/static` and `/images`. `next.config.ts:10` 301 redirect `/pricing` → `/lab` permanent. Build ignores TypeScript errors per `next.config.ts:7` for static export stability.

---

## License & Copyright

© 2026 VibePress Studio. All rights reserved. Built for performance, security, and data privacy.

**Engineering Accreditation:** Designed & Engineered by Lead Software Architect Abu Saeed Sayem. See [`/about`](https://vibepressstudio.vercel.app/about) and `src/content/about.json:1`.

**Trademarks:** WordPress® is a registered trademark of the WordPress Foundation. Amazon Associates®, Stripe®, Cloudflare® referenced under nominative fair use.

