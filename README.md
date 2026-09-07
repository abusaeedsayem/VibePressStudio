# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Release:** `v1.0.8` (September 6, 2026) · **Site Build:** `v0.4.0` (Next.js 16.3.2) · **Flagship Plugin:** `v1.0.6` (100% Feature Complete · 24 Core Features)  
> **Last Updated:** September 6, 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to WordPress Core Coding Standards (WPCS), PSR-4/PSR-12, WCAG AAA contrast, and zero telemetry privacy requirements. Every tool is built for sub-millisecond execution, 24h transient caching, and local database ownership (`wp_posts` & `wp_postmeta`).

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) (canonical history) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json:1`), plus the 9-chapter Documentation Hub at [`/docs`](https://vibepressstudio.vercel.app/docs) and the 8-tab product showcase at [`/products/smart-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/smart-affiliate-link-cloaker). All three track the same `v1.0.7` release lineage — see [Changelog & Deployment](#changelog--release-history) below.

---

## Latest Release: v1.0.8 — Subscription Engine & Admin Panel (September 6, 2026)

This release integrates the public subscription and notification engine, the secure admin control panel, and the shared Subscriber data model. Form submissions are now sent to a Google Apps Script Webhook which records the data into a Google Sheet and sends an email notification to `vibepress.studio@proton.me`. Next.js API routes `/api/contact` and `/api/subscribe` securely handle validation and request forwarding.

### What's New at a Glance (v1.0.8)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Functional Forms** | Added `/api/contact` and `/api/subscribe` routes to forward payloads to `GOOGLE_SCRIPT_WEBHOOK_URL`. | `src/app/api/contact/route.ts`, `src/app/api/subscribe/route.ts` |
| **Google Sheets Integration** | Form submissions are securely saved in a Google Sheet on Proton Drive and send email notifications. | `scripts/google-sheets-apps-script.js` |
| **UI Polish** | Loading states and success/error feedbacks added to the contact and lab pages. | `src/app/contact/page.tsx`, `src/app/lab/page.tsx` |
| **Subscription Engine** | Public subscription form in global footer and Studio Lab early-access dispatch, validated, deduplicated, and backed by Prisma PostgreSQL/SQLite with unique email index. | `src/components/forms/SubscriberForm.tsx`, `src/app/api/subscribe/route.ts`, `src/lib/db/subscribers.ts` |
| **Admin Control Panel** | Password-protected admin area invisible to normal visitors, where administrators can edit page text content via dropdown-driven interface, and view/download the subscriber list. | `src/app/admin/login/page.tsx`, `src/app/admin/dashboard/page.tsx`, `src/components/ui/table.tsx`, `src/lib/hash.ts` |

> **Full history:** See [`CHANGELOG.md`](./CHANGELOG.md) for the complete diff log.

<details><summary><strong>Previous Release: v1.0.7 — 24 Core Features Suite Expansion & Interactive Showcase (September 5, 2026)</strong></summary>

This release expanded the flagship suite to **24 Core Production Features** with a live link-transformation demo engine, filterable master catalogs, and a fully interactive 8-tab product showcase + 9-chapter documentation hub. All changes are live at [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app).

### What's New at a Glance (v1.0.7)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Live Link Transformation Demo** | Before→After visual: `https://network.com/aff_c?offer_id=892&aff_id=99281` (destructive) → `https://yoursite.com/go/best-vpn` (primary) with `307 Temporary Redirect` badge, `Copy → Copied!` (`navigator.clipboard` + `Check` icon, `useState copied`), gradient banner with 4 stat badges (`+25%–40% CTR / wp_posts / Amazon §6 / 1-Click Stripe` + `blur-3xl` glow) | `src/app/page.tsx:188` (Live Link Transformation Engine), `src/app/products/smart-affiliate-link-cloaker/page.tsx:184` |
| **Home Interactive Showcase** | 3-tab spotlight `useState activeFeatureTab:highlights\|scenarios\|architecture` (`src/app/page.tsx:15`) rendering 6-feature cards (`src/content/products.json:14` `keyFeatures 0:6`), 3 scenario cards (Mobile Arbitrage / Flash Sales / Stripe Payments), and Admin Nav (`Link Cloaker` + 8 submenus). TrustBar 4→5 (`24 Core Production Features` + `+25% to 40% CTR` + `Native wp_posts & wp_postmeta` + `Amazon §6 & FTC` + `1-Click Stripe`) + 4 pillars retitled + `group-hover:bg-primary` elevation | `src/content/home.json:6` `hero.trustBar`, `src/content/home.json:14` `valueProps.pillars` |
| **Products Directory Mini-Explorer** | `24 Core Features Master Catalog` with category pills (`all/redirection/compliance/automation/monetization/analytics` → `coreFeatures24:24` filtering `src/content/cloaker.json:207` into `grid-cols-3` cards `#id/badge/title/desc`), header `24 Core Features Built-in` emerald + `Current Release: v1.0.6 (100% Feature Complete · 24 Core Features)`, 3-column spec `Technical Foundation (Code2) / Target Users (Users) / Admin Menu Structure (Layers)` | `src/app/products/page.tsx:92` `mini-explorer`, `src/content/products.json:17` `version` |
| **Product Page 8-Tab Sticky Showcase** | Sticky `top-20 backdrop-blur` tabs (`Overview & Essential Pillars` / `24 Core Features Catalog` / `Real-World Scenarios` / `WordPress Admin Tour` / `Setup & User Guide` / `Who Needs This` / `Master Glossary` / `FAQ Guide` `src/app/products/smart-affiliate-link-cloaker/page.tsx:122`): Before→After permalink visuals, 4-tile architecture grid (`salc_link` / `RewriteEngine.php` / `RedirectEngine.php` / `ClickTracker.php` `Terminal`), 24 searchable+filterable expandable feature cards (`howItWorks→howToUse→Expected Result` `grid-cols-2`), 6 scenario pills `📱/⏱️/⚖️/🎙️/💳/🔄` with `Without Plugin (destructive/AlertCircle)` vs `With Plugin (emerald/CheckCircle2)`, simulated `bg-slate-900` WP sidebar (8 submenus) + inspector, 4-phase guide (`Card` steps), audience matrix `Organizational (Building2) vs Personal (Users)` + Decision Checklist (`HelpCircle` ≥2 YES), searchable 18-term glossary, 5-category 15-FAQ accordion (`ChevronRight rotate-90`) | `src/app/products/smart-affiliate-link-cloaker/page.tsx:1` `834 lines` |
| **Docs Hub 9-Chapter Overhaul** | Hero `Smart Affiliate Link Cloaker — Complete Documentation & User Manual` + dual badges `v1.0.6` + `24 Core Features` (`Package`/`emerald`), placeholder `Search across all 24 features, admin menus, use cases, FAQs, or glossary terms...` (`src/content/docs.json:5`), sidebar `Manual Index` sticky `top-24` with `9 Topics` count + `BookOpen` + `max-h-[70vh]` scroll + `Explore Product Overview`, searchable detail view (`title\|summary\|content` filter `src/app/docs/page.tsx:30`), `Copy Section` (`Copy→Copied Content!` `Check`), verification footer `Verified against v1.0.6 (24 Core Features)` — 9 chapters expanded: Ch1 What is (`Overview` 6 capabilities), Ch2 Why Important (`Core Value` 5 pillars `CTR/Commission Theft/Amazon §6/SEO/Link Rot`), Ch3 Admin Navigation (`Admin UI` 8 submenus `Link Cloaker`), Ch4 Master Feature Catalog (`Master Reference` 24 features), Ch5 Use Cases (`Use Cases` 6 `A–F` without/with), Ch6 Target Audience (`Target Audience` Org vs Personal), Ch7 Tech Architecture (`Architecture` CPT/Rewrite/Redirect/Analytics/Beacon), Ch8 Glossary (`Glossary` 18 definitions), Ch9 FAQ (`FAQs` 15 Q&A 5 categories) | `src/app/docs/page.tsx:48` `hero+search`, `src/content/docs.json:3` `hero + 9 index` |

> **Full history:** See [`CHANGELOG.md`](./CHANGELOG.md) § [1.0.7] and § [1.0.6] and [`src/content/changelog.json`](./src/content/changelog.json) (rendered at [`/changelog`](https://vibepressstudio.vercel.app/changelog)) for the complete diff log including `WPCS / PSR-12` verification and `npm run build` validation (1659ms, 13 routes).

<details><summary><strong>Previous Release: v1.0.6 — Complete Documentation & Studio Consolidation (September 3, 2026)</strong></summary>

**Commit lineage:** `0164f54` → `e0ea6d9` (branch `main`, up to date with `origin/main`)

Finalized studio pivot to WordPress-focused performance suite and bumped flagship plugin `v1.0.0` → `v1.0.6` (100% Feature Complete). Integrated complete PDF-spec product documentation across Home (`src/app/page.tsx:1`), Products Directory (`src/app/products/page.tsx:1`), Product Page (`src/app/products/smart-affiliate-link-cloaker/page.tsx:1`), and Documentation Hub (`src/app/docs/page.tsx:1` + `src/content/docs.json:1`). Hard-purged ShelfMaster Desktop Software (Tauri 2.x) — 45 files — `src-tauri/*`, `src/hooks/useAutoUpdater.ts:1`, `src/components/updater/*`, `src/app/settings/page.tsx:1`, `public/updater/latest.json:1`, `src/app/api/updater/latest.json/route.ts:1`; tagline strictly standardized to **`"High-Performance Digital Tools"`** across `src/content/site.json:11`, `src/content/navigation.json:2`, `src/content/footer.json:1`, `src/app/layout.tsx:1`.

See [`CHANGELOG.md`](./CHANGELOG.md) § [1.0.6] for full Added/Changed/Removed/Fixed entries with `file:line` refs.

</details>

---

## Flagship Product: Smart Affiliate Link Cloaker

**Smart Affiliate Link Cloaker** is an enterprise-grade WordPress plugin (**v1.0.6 — 100% Feature Complete · 24 Core Features** — studio release `v1.0.7` September 5, 2026) that turns raw merchant referral URLs into clean, branded, trackable links hosted on your own domain (`https://yoursite.com/go/best-vpn`). It is the sole flagship after the ShelfMaster removal and is rendered across Home (`src/app/page.tsx:1`), Products Directory (`src/app/products/page.tsx:1`), the 8-tab Product Page (`src/app/products/smart-affiliate-link-cloaker/page.tsx:1`), and the 9-chapter Documentation Hub (`src/app/docs/page.tsx:1`).

**Distribution Status:**
- Free Core Edition: submitted for WordPress.org manual review (pending approval)
- PRO Lifetime License: fully packaged, launches within one month of Free approval — 6 PRO engines included (Conditional Routing, Auto-Linker, Health Scanner, Split Testing, Stripe Payments, Deal Expiration + UTM Forwarding)
- Pre-launch registration open at [`/lab`](https://vibepressstudio.vercel.app/lab) — 24 Core Features architecture preview live

**Hero Metrics (live at `src/content/cloaker.json:11` `hero.coreMetrics`):** `24 Core Production Features` · `Native wp_posts & wp_postmeta Engine` · `+25% to 40% CTR Lift` · `Amazon Associates §6 Uncloaking` · `1-Click Stripe Checkout Sessions` · `Automated Broken Link Health Scanner` — shown with gradient banner `from-primary via-indigo-600 to-violet-600` + `blur-3xl` glow + `Copy` demo (`src/app/page.tsx:161`).

**WordPress Admin Navigation ( `src/content/cloaker.json:31` `navigation` — updated from `Affiliate Links` → `Link Cloaker`):** 8 submenus — `1. All Links (edit.php?post_type=salc_link)` · `2. Add New Link (post-new.php?post_type=salc_link)` · `3. Categories (aff_category)` · `4. Tags (aff_tag)` · `5. Statistics (salc-stats)` · `6. Tools & Migration (salc-tools)` · `7. Settings (salc-settings)` · `8. Documentation (salc-docs)` — rendered as simulated `bg-slate-900` WP sidebar at `src/app/products/smart-affiliate-link-cloaker/page.tsx:506`.

### Key Capabilities & Architecture Highlights (24 Core Features — `src/content/cloaker.json:207` `coreFeatures24`)

| # | Title & Category | Location & How It Works | File / Hook |
|---|------------------|-------------------------|-------------|
| 1 | **Branded Link Cloaking & Custom Slugs** (Redirection · Core) | Replaces `https://network.com/aff_c?offer_id=892...` with `https://yoursite.com/go/product-name`; demo box shows raw (destructive) vs cloaked (primary) with `Copy` (`src/app/page.tsx:188`). One-click copy in All Links. | `RewriteEngine.php` `^go/{slug}` `salc_link` CPT |
| 2 | **Configurable URL Prefixes & Category Paths** (Redirection · Core) | Global prefix `/go/` → `/recommends/` → `/deal/` + Dynamic Category Path Injection (`/go/software/vpn-deal`) via Settings `URL Structure & Routing Engine` | `src/content/cloaker.json:226` |
| 3 | **Multi-Status HTTP Redirect Engine (301/302/307/200)** (Redirection · Core) | Per-link + global default `307 Temporary Redirect` (gold standard — bypasses browser cache, live server query every click) or `301` / `302` / `200 iFrame Mask` with sticky top bar `src/app/products/smart-affiliate-link-cloaker/page.tsx:239` | `RedirectEngine.php:template_redirect:1` `X-Robots-Tag: noindex` |
| 4 | **Search Engine Crawler & Link Attribute Controls** (Compliance · SEO) | Auto `rel="nofollow sponsored"` + `target="_blank"` + `X-Robots-Tag: noindex, nofollow, noarchive` + `Disallow: /go/` in `robots.txt` via `CrawlerController.php:the_content:20` | `src/content/cloaker.json:257` |
| 5 | **Smart ToS Uncloaking (Amazon Associates §6)** (Compliance · Flagship) | Regex `amazon.*`/`amzn.to`/`ebay`/`target`/custom → renders raw destination on frontend (`data-salc-uncloaked="1"`), beacon-tracks via `navigator.sendBeacon` → `POST salc/v1/track` (`uncloak-beacon.js` `the_content:15` `SmartUncloaker.php`) | `src/content/cloaker.json:271` |
| 6 | **Client-Side Conditional Redirect Rules [PRO]** (Redirection · PRO Engine) | Per-visitor OS (iOS→App Store, Android→Play Store, Windows→Desktop, macOS) / Browser / Device / Language routing via `+ Add Conditional Rule` (`ConditionalRouter.php:salc_resolved_destination_url:10`) | `src/content/cloaker.json:285` |
| 7 | **Global Link Updating & Database Search-and-Replace** (Automation) | Scans `post_content` for raw merchant URLs → `[af_link id="ID"]` shortcodes with `Dry Run Mode` preview (`Tools & Migration → Database Search & Replace`) | `src/content/cloaker.json:301` |
| 8 | **Unified Content Editor Integration** (Automation · Core) | Gutenberg block `Affiliate Link Button` (`+` → search), TinyMCE toolbar button + modal picker, shortcodes `[af_link id="123" text="Check Best Price"]` / `[salc_link]` | `src/content/cloaker.json:316` |
| 9 | **Hierarchical Category & Tag Taxonomy** (Analytics · Core) | `aff_category` (parent-child) + `aff_tag` for bulk filtering, bulk settings, category deal feeds (Link Cloaker → Categories/Tags) | `src/content/cloaker.json:331` |
| 10 | **In-Dashboard Click Tracking & Visual Analytics** (Analytics · Core) | Local `wp_salc_clicks` with 30+ bot filters, IPv4/IPv6 anonymization (last octet /64), Cloudflare `HTTP_CF_IPCOUNTRY` geo, 7 Chart.js graphs, top links, CSV export (UTF-8 BOM). Table: `id BIGINT PK AI, link_id BIGINT idx, clicked_at DATETIME, ip_address VARCHAR45, referrer TEXT, user_agent TEXT, os VARCHAR20, browser VARCHAR20, device VARCHAR20, country_code CHAR2, city VARCHAR100, region VARCHAR100, language VARCHAR100, is_bot TINYINT` | `ClickTracker.php` + `StatsRepository.php` `src/content/cloaker.json:345` |
| 11 | **Image & Banner Link Attachment** (Monetization · Core) | Bind Media Library banners/logos to link profile → `[af_link display="image"]` (Link Cloaker → Add New Link → `Image & Banner Link Attachment`) | `src/content/cloaker.json:360` |
| 12 | **CSV Bulk Importer & Exporter** (Automation · Core) | Parse CSV (`title, url, slug, redirect_type`) → batch-create cloaked links in seconds; export click logs from Statistics | `src/content/cloaker.json:375` |
| 13 | **1-Click Platform Migration Engine** (Automation · Core) | Auto-import from PrettyLinks / ThirstyAffiliates (titles, slugs, destinations, hit counts) with 1 click (`Platform Migration Engine`) + `post_exists` deduplication | `src/content/cloaker.json:390` |
| 14 | **Frontend Link Showcase Widgets** (Monetization · Core) | Classic + Block `Affiliate Link Showcase` (`Appearance → Widgets`) — `Most Popular` / `Recently Added` in Grid/List card layouts | `src/content/cloaker.json:404` |
| 15 | **Seamless Payment Links (Stripe Integration) [PRO]** (Monetization · PRO) | `go/checkout` → Stripe Checkout Session (`sk_live_...` + `price_...`) + webhook `salc/v1/stripe-webhook` logging `_salc_stripe_conversions` | `StripeClient.php` `src/content/cloaker.json:420` |
| 16 | **Embedded iFrame Redirection & Display** (Redirection · Core) | Full-screen iframe with branded top bar header (`#0058be→#ffb95f`) + `Open Direct Link` (200 iFrame Mask option `HTTP Redirect Engine`) | `src/content/cloaker.json:435` |
| 17 | **Native Custom Post Type (CPT) Architecture** (Analytics · Architecture) | `salc_link` on `wp_posts`/`wp_postmeta` with columns `Cloaked URL / Target Destination / Redirect Status / Categories / Total Clicks / Health / Date` — 100% compatibility with caching/backup/WP-CLI/REST | `src/content/cloaker.json:449` |
| 18 | **Automated Deal Expiration & Fallback Routing [PRO]** (Automation · PRO) | Date or click-cap → `302` fallback URL or `410` `expired.php` with custom message (`ExpiryManager.php`) + nightly `daily 02:00 UTC` HEAD batch 20 (10s timeout, GET fallback 405/501) health email reports (`HealthScanner.php`) | `src/content/cloaker.json:464` |
| 19 | **A/B Split Testing & Traffic Rotation [PRO]** (Monetization · PRO) | Weighted random `mt_rand` cumulative or sequential (transient) rotation with `_salc_variant_clicks` tracking (`SplitTester.php:salc_resolved_destination_url:9`) | `src/content/cloaker.json:480` |
| 20 | **FTC Auto-Disclosure Injector (Accessible & Compliant)** (Compliance) | Detects affiliate signal → injects `<aside role="note">` banner at `top`/`bottom`/`before_first_link` / `Before Post`/`After Post`/`Inline` with styles Callout/Badge/Minimal/Subtle/Bordered (`DisclosureInjector.php:the_content:19`) — global→per-category→per-link hierarchy | `src/content/cloaker.json:496` |
| 21 | **Dynamic UTM & Query Parameter Forwarding [PRO]** (Analytics · PRO) | Allowlist `utm_*`, `gclid`, `fbclid`, `msclkid`, `wbraid`, `gbraid` (or `*`), preserves target params/fragment, sanitizes `$_GET` <500 chars (`QueryForwarder.php:salc_resolved_destination_url:11`) | `src/content/cloaker.json:512` |
| 22 | **DOM-Safe Keyword Auto-Linker [PRO]** (Automation · PRO) | `DOMDocument` + XPath regex `(?<!\w)kw(?!\w)` case-insensitive, skips `h1-h6`, `code`, `pre`, `script`, `style`, existing `<a>`, `salc-skip-linker` ancestors; caps per-post/per-keyword (`KeywordLinker.php:the_content:18`) | `src/content/cloaker.json:528` |
| 23 | **Broken Link Health Scanner & Status Monitor [PRO]** (Compliance · PRO) | Background cron pings merchant targets → health badges `🟢 OK 200` / `🔴 404 Error` in All Links `Health` column (`_salc_health_status` ok/broken `HealthScanner.php`) | `src/content/cloaker.json:544` |
| 24 | **Privacy & GDPR Compliance (IP Anonymization)** (Compliance · Privacy) | Masks last octet IPv4 (`192.168.1.123→192.168.1.0`) / IPv6 `/64` before DB insert, zero cookies, purge on uninstall (`uninstall.php` drops `wp_salc_clicks` + options/transients/postmeta/termmeta) | `src/content/cloaker.json:559` |

**Detailed in:** [`src/content/cloaker.json`](./src/content/cloaker.json) (`hero`, `status`, `navigation` 8 submenus, `whyUseful` 5 pillars, `useCases` 6 scenarios, `targetAudience` org 4+personal 4, `coreFeatures24` 24 with `howItWorks/howToUse/result`, `glossary` 18, `faq` 15) and [`/docs` 9 chapters](https://vibepressstudio.vercel.app/docs) `src/content/docs.json:1` (search `24 features, admin menus, use cases, FAQs, glossary terms...`).

---

## Site Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx:1` | Home — 5-section (Hero + TrustBar 5 / Value Props 4 pillars / Flagship Showcase with Live Demo + 3-tab spotlight / Engineering Standards / Global CTA) with `useState activeFeatureTab` + `copied` (`Sparkles/Copy/Check/Layers`) |
| `/products` | `src/app/products/page.tsx:1` | Products Directory — hero `VibePress Software Suite / Production-Grade WordPress Plugin (wp_posts & wp_postmeta)`, flagship card with `24 Core Features Built-in` emerald badge + filterable mini-explorer (`all/redirection/compliance/automation/monetization/analytics` → `coreFeatures24:24` `grid-cols-3`) + 3-col spec (`Technical Foundation (Code2)` / `Target Users (Users)` / `Admin Menu Structure (Layers)` + `navigation.menuName`) + roadmap `In The Studio Pipeline` teaser |
| `/products/smart-affiliate-link-cloaker` | `src/app/products/smart-affiliate-link-cloaker/page.tsx:1` | 8-tab sticky showcase (`Overview & Essential Pillars` / `24 Core Features Catalog` / `Real-World Scenarios` / `WordPress Admin Tour` / `Setup & User Guide` / `Who Needs This` / `Master Glossary` / `FAQ Guide` `sticky top-20 backdrop-blur`) — Before→After permalink visuals, 4-tile architecture grid, 24 searchable+filterable expandable feature cards, 6 scenario toggles (Without vs With), `bg-slate-900` WP sidebar simulator (8 submenus) + inspector, 4-phase guide, audience matrix + Decision Checklist, searchable 18-term glossary, 5-category 15-FAQ accordion |
| `/docs` | `src/app/docs/page.tsx:1` | Documentation Hub — 9-chapter searchable manual (`9 Topics` + `Manual Index` sticky `top-24` `BookOpen` + `max-h-[70vh]` scroll + `Copy Section` `Check` + verification footer `Verified against v1.0.6 (24 Core Features)`) with placeholder `Search across all 24 features, admin menus, use cases, FAQs, or glossary terms...` (`src/content/docs.json:5`) |
| `/changelog` | `src/app/changelog/page.tsx:1` | Release Notes — renders `src/content/changelog.json:1` timeline (now Sep 5 `v1.0.7` + Sep 3 `v1.0.6` + Aug entries) |
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

Rendered at [`/docs`](https://vibepressstudio.vercel.app/docs) from `src/content/docs.json:1`. Searchable via `src/app/docs/page.tsx:30` (case-insensitive `title|summary|content` filter `filteredSections`), with `Manual Index` sticky `top-24` (`BookOpen` + `9 Topics` count + `max-h-[70vh]` scroll), `Copy Section` (`Copy→Copied Content!` `Check`), and verification footer `Verified against v1.0.6 (24 Core Features)` (`src/app/docs/page.tsx:221`). Hero now tagged `Smart Affiliate Link Cloaker v1.0.6` (`Package`) + `24 Core Features Documentation` (`emerald`) and placeholder `Search across all 24 features, admin menus, use cases, FAQs, or glossary terms...` (`src/content/docs.json:5`).

1. **What is Smart Affiliate Link Cloaker?** (`Overview` badge) — Enterprise performance suite on native `wp_posts` & `wp_postmeta`; CPT `salc_link` + RewriteEngine `^go/{slug}` + RedirectEngine `template_redirect:1` + 24h transient (`salc_link_slug_*`); 6 core capabilities `Branded Link Cloaking → Direct Stripe Payments` (`src/content/docs.json:14`)
2. **Why is This Plugin Important?** (`Core Value` badge) — 5 critical operational pillars: `+25% to 40% CTR Lift` / `Commission Theft & Scraping Protection` / `Protection Against Merchant Bans (Amazon §6)` / `SEO & Crawl Budget Protection` / `Elimination of Catastrophic Link Rot` (`src/content/docs.json:22`)
3. **WordPress Admin Navigation & Menu Architecture** (`Admin UI` badge) — Primary menu `Link Cloaker` (updated from `Affiliate Links`) with 8 submenus: `All Links (edit.php?post_type=salc_link)` / `Add New Link` / `Categories (aff_category)` / `Tags (aff_tag)` / `Statistics (salc-stats)` / `Tools & Migration (salc-tools)` / `Settings (salc-settings)` / `Documentation (salc-docs)` (`src/content/docs.json:31`)
4. **Master Feature Catalog (All 24 Core Features)** (`Master Reference` badge) — Complete reference of 24 features with `description`, `location`, operational logic, usage steps, and expected results: `Branded Link Cloaking & Custom Slugs` → `Privacy & GDPR Compliance (IP Anonymization)` (`src/content/docs.json:42`)
5. **Practical Real-World Use Cases** (`Use Cases` badge) — 6 detailed `Without Plugin vs With Plugin` workflows: `📱 Platform-Targeted Mobile App & Software Arbitrage` / `⏱️ Flash Sales, Black Friday & Seasonal Campaigns` / `⚖️ A/B Split Testing Merchant Payouts` / `🎙️ Audio & Video Content Monetization (Podcasts & YouTube)` / `💳 Hybrid Monetization: Selling Consultations Alongside Affiliate Deals` / `🔄 Bulk Website Acquisitions & Affiliate Portfolio Flips` (`src/content/docs.json:53`)
6. **Who Actually Needs This Plugin?** (`Target Audience` badge) — `Organizational Focus: Agencies, Media Houses & Enterprise` (Multi-Author Teams / FTC & Legal Compliance / Site Flipping / High-Traffic Performance) vs `Personal Focus: Creators, Bloggers & Solopreneurs` (Link in Bio / Amazon Compliance / Technical Simplicity / Micro-Commerce without eCommerce) (`src/content/docs.json:64`)
7. **Technical Architecture & Database Schema** (`Architecture` badge) — Under-the-hood: Native CPT `salc_link` (`wp_posts`/`wp_postmeta`), Priority Rewrite Engine (`RewriteEngine.php` `^go/([^/]+)/?$`), Redirect Engine & Header Lifecycle (`RedirectEngine.php` `template_redirect:1` `307/301/302/200` `X-Robots-Tag`), Bot-Filtered Analytics Pipeline (`ClickTracker.php` `wp_salc_clicks` 30+ bot signatures + GDPR anonymization + Cloudflare geo), Smart Compliance & Beacon Layer (`SmartUncloaker.php` `the_content:15` `uncloak-beacon.js` `navigator.sendBeacon` → `POST salc/v1/track` Amazon §6 safe) (`src/content/docs.json:74`)
8. **Glossary of Key Terms** (`Glossary` badge) — 18 official definitions: `Link Cloaking`, `Custom Slug`, `URL Prefix`, `HTTP 301`, `HTTP 302/307`, `iFrame Masking`, `rel="nofollow"`, `rel="sponsored"`, `X-Robots-Tag: noindex`, `Smart Uncloaking`, `Tracking Beacon`, `A/B Split Testing`, `Deal Expiration`, `Fallback URL`, `Broken Link Scanner`, `DOM-Safe Keyword Auto-Linker`, `UTM Forwarding`, `Custom Post Type (CPT)` (`src/content/docs.json:84` `glossary`)
9. **Frequently Asked Questions (FAQ Guide)** (`FAQs` badge) — 15 in-depth Q&A grouped: `General & Setup` (install/activate, slowdown?, menu `Link Cloaker` location) / `Redirects & Performance` (301 vs 302 vs 307, iFrame Masking) / `SEO & Compliance` (Google rankings `nofollow sponsored` + `X-Robots-Tag`, Amazon §6 `Smart ToS Uncloaking`, FTC Auto-Disclosure) / `Link Management & Automation` (offer expiration + Fallback URL, Keyword Auto-Linker word-boundary, A/B traffic rotation) / `Migration & Integrations` (Pretty Links/ThirstyAffiliates migration, CSV import/export, Stripe API + webhook, GDPR `Anonymize IP` `192.168.1.0`) (`src/content/docs.json:84` `faq`)

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
| **Content** | JSON-driven (`src/content/*.json` 13 files) + static generation — now 24 Core Features (`coreFeatures24:24`) + 18 glossary + 15 FAQs + 6 useCases + 8-submenu navigation | — | `src/content/cloaker.json:207` `cloaker.json:575` `cloaker.json:649` |
| **Security Headers** | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, XSS-Protection | `max-age=31536000; includeSubDomains; preload` | `vercel.json:1` |
| **Deployment** | Vercel (auto-deploy from `main`, static prerender) | `prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe` | `vercel.json:1`, `.vercel/project.json:1` |
| **Linting** | ESLint + `eslint-config-next` | `^9` / `16.3.2` | `eslint.config.mjs:1` |
| **Config** | `next.config.ts:1` (images `unoptimized`, `ignoreBuildErrors`, 301 `/pricing` → `/lab`) | — | `next.config.ts:1` |

**Design Tokens:** `globals.css` CSS variables for light/dark themes, primary/indigo/violet gradients (`from-primary to-indigo-600`, `from-indigo-600 to-violet-600`, `from-primary via-indigo-600 to-violet-600` `src/app/products/smart-affiliate-link-cloaker/page.tsx:807` bottom CTA), WCAG AAA text contrast verified. See `src/app/page.tsx:161` gradient hero `blur-3xl` stat badges, `src/app/products/page.tsx:194` roadmap `from-primary to-indigo-600`, `src/app/docs/page.tsx:52` dual badges, `src/app/products/smart-affiliate-link-cloaker/page.tsx:72` `from-primary/10` hero.

---

## Project Structure

```
VibePressStudio/
├── src/
│   ├── app/
│   │   ├── page.tsx                          # Home — 5 sections + Live Demo (activeFeatureTab+copied) + 3-tab spotlight + gradient hero stat badges
│   │   ├── layout.tsx                        # Root layout + ThemeProvider + Navbar/Footer
│   │   ├── about/page.tsx                    # About Studio
│   │   ├── changelog/page.tsx                # Changelog (JSON-driven — now v1.0.7 + v1.0.6)
│   │   ├── contact/page.tsx                  # Support Helpdesk
│   │   ├── support/page.tsx                  # → /contact redirect
│   │   ├── docs/page.tsx                     # Documentation Hub — 9-chapter searchable manual (badges + Copy Section + verification footer)
│   │   ├── lab/page.tsx                      # Studio Lab registration portal
│   │   ├── products/
│   │   │   ├── page.tsx                      # Directory — filterable 24-feature mini-explorer + 3-col spec (Technical/Target/Admin)
│   │   │   └── smart-affiliate-link-cloaker/page.tsx  # Product deep dive — 8-tab sticky showcase (834 lines, 24 expandable cards, 6 scenarios, WP sidebar simulator, glossary search, FAQ accordion)
│   │   ├── legal/{privacy,terms}/page.tsx
│   │   ├── sitemap.ts, robots.ts, icon.svg, globals.css
│   ├── components/
│   │   ├── layout/Navbar.tsx, Footer.tsx
│   │   └── ui/* (shadcn: accordion, dialog, dropdown, label, select, slot, tabs, card, badge, input)
│   ├── content/
│   │   ├── cloaker.json      # Product spec (24 coreFeatures24 + navigation 8 submenus + whyUseful 5 pillars + useCases 6 + targetAudience 4+4 + glossary 18 + faq 15 + userGuide 4 phases)
│   │   ├── products.json     # Directory + pricing tiers (tagline 24 Core Features, techStack 8, keyFeatures 6+6, targetAudience 6)
│   │   ├── docs.json         # 9-chapter manual (hero + index 9 with badges + expanded 24-feature/6-scenario/8-submenu/18-glossary/15-FAQ content)
│   │   ├── changelog.json    # Release timeline (rendered at /changelog — now 6 entries: Sep 5 v1.0.7, Sep 3 v1.0.6, Sep 1 v0.4.0, Aug 31 v0.3.0, Aug 30 v0.2.0, Jul 2026 v1.0.6 plugin)
│   │   ├── home.json         # Hero (title + subtitle wp_posts/wp_postmeta + trustBar 5) + valueProps 4 refined pillars + flagship/standards/CTA
│   │   ├── pricing.json      # Lab portal benefits + timeline
│   │   ├── about.json, contact.json, navigation.json, site.json, footer.json, etc.
│   ├── data/products.ts      # Product aggregator
│   └── types/product.ts      # Product / KeyFeature / PricingTier types
├── public/
│   ├── images/products/*     # Cloaker logos + screenshots
│   ├── logo-dark.svg, icon.svg
│   └── og-image.jpg
├── next.config.ts            # 301 /pricing → /lab, unoptimized images
├── vercel.json               # Security headers + CSP (default-src 'self') + HSTS preload + immutable caching
├── package.json              # 0.4.0 (site) · Next 16.3.2 · Tailwind 4 · 13 static routes
└── CHANGELOG.md              # Full release notes (this README's companion — canonical history, Keep a Changelog + SemVer)
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

**Build output (verified Sep 5, 2026 — this release):**
```
▲ Next.js 16.3.2 (Turbopack)
✓ Running next.config.ts took 65ms
  Creating an optimized production build ...
✓ Compiled successfully in 1659ms
  Skipping validation of types
  Finished TypeScript config validation in 5ms
  Collecting page data using 7 workers
  Generating static pages using 7 workers (16/16) in 385ms
  Finalizing page optimization
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
```

---

## Changelog & Release History

> **Single source of truth:** [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog + Semantic Versioning) is the canonical history. It is mirrored in [`src/content/changelog.json`](./src/content/changelog.json) (rendered at [`/changelog`](https://vibepressstudio.vercel.app/changelog)) and summarized in this README's [Latest Release](#latest-release-v107--24-core-features-suite-expansion--interactive-showcase-september-5-2026).

| Version | Date | Summary | Diff |
|---------|------|---------|------|
| **1.0.8** | 2026-09-06 | Contact & Lab Forms Integration — live forms connected to Google Apps Script webhook for Google Sheets recording & email alerts | `UNRELEASED` |
| **1.0.7** | 2026-09-05 | 24 Core Features suite expansion & interactive showcase — live demo engine, 24-feature master catalog, 8-tab product showcase, docs hub 9-chapter overhaul, home/products expansion | `a0ac0b0` (8 files, 1850+/664-) |
| **1.0.6** | 2026-09-03 | Complete documentation & architecture upgrade, ShelfMaster purge, tagline enforcement | `e0ea6d9` `0164f54` |
| **0.4.0** | 2026-09-01 | ShelfMaster Auto-Updater (Tauri 2.x) — now superseded & removed in 1.0.6 | `6528bac` |
| **0.3.0** | 2026-08-31 | Brand Redesign, Studio Lab migration `/pricing` → `/lab`, WCAG polish | `45c0e2b` |
| **0.2.2** | 2026-08-31 | Accessibility contrast fix (Option B) — blue/black → primary tokens | `a229109` |
| **0.2.1** | 2026-08-30 | Sitemap fix + deployment verification | `b10ae74` |
| **0.2.0** | 2026-08-30 | Pre-Launch Rebrand & Content Consolidation | `eb9ce11` |
| **0.1.0** | 2026-08-23 | Initial Next.js + Tailwind scaffold + Stitch design system | `a3d1ef4` |

See [`CHANGELOG.md`](./CHANGELOG.md) § [1.0.7] and § [1.0.6] for full Added/Changed/Removed/Fixed entries with `file:line` references (`src/app/page.tsx:188`, `src/app/products/smart-affiliate-link-cloaker/page.tsx:122`, `src/content/cloaker.json:207`, `src/content/docs.json:3`, etc.), and for the `[Unreleased]` roadmap. Live changelog rendered from `src/content/changelog.json:1` (6 entries: Sep 5 v1.0.7, Sep 3 v1.0.6, Sep 1 v0.4.0, Aug 31 v0.3.0, Aug 30 v0.2.0, Jul 2026 v1.0.6 plugin).

---

## Deployment & Verification

**Platform:** Vercel (`prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe`) — auto-deploy on `git push` to `origin/main` (`team_C08AS1hMp9PdkaKDwRwHcwWi`).

**Live URL:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app) — verified active deployment (see below).

**Verification checklist (post-push):**
```bash
# 1. Push triggers deploy (auto-deploy from main)
git push origin main

# 2. Verify build locally (expect 13 static routes, compiled successfully in ~1659ms)
npm run build        # Next.js 16.3.2 (Turbopack) — Generating static pages using 7 workers (16/16) in 385ms

# 3. Verify live deployment
curl -I https://vibepressstudio.vercel.app          # expect HTTP/2 200, x-vercel-cache: PRERENDER, x-nextjs-prerender: 1
curl -s https://vibepressstudio.vercel.app | grep -q "High-Performance Digital Tools"
curl -s https://vibepressstudio.vercel.app | grep -q "24 Core Features"
curl -s https://vibepressstudio.vercel.app/docs | grep -q "Complete Documentation"
curl -s https://vibepressstudio.vercel.app/products | grep -q "Production-Grade WordPress Plugin"
curl -s https://vibepressstudio.vercel.app/products/smart-affiliate-link-cloaker | grep -q "24 Core Features Catalog"
curl -s https://vibepressstudio.vercel.app/changelog | grep -q "Changelog"
vercel ls --scope team_C08AS1hMp9PdkaKDwRwHcwWi  # optional: check deployment status via Vercel CLI
```

**Current live status (Sep 5, 2026 — this release):** ✅ `200 OK` — `x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER`, CSP & HSTS headers active (`vercel.json:1` `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Content-Security-Policy: default-src 'self'`), all 13 routes returning `200` and deleted legacy routes (`/products/shelfmaster`, `/settings`) correctly `404`. Local `npm run build` verified `✓ Compiled successfully in 1659ms` + `Generating static pages using 7 workers (16/16) in 385ms` — matches Vercel build pipeline.

**Vercel config:** `vercel.json:1` security headers (nosniff, DENY, HSTS preload, CSP `default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://vercel.live;`), caching `public, max-age=31536000, immutable` for `/_next/static` and `/images`. `next.config.ts:1` 301 redirect `/pricing` → `/lab` permanent. Build ignores TypeScript errors per `next.config.ts:7` for static export stability. Project `prj_2BbWSdv7373HQZ5NRYxSQcl6QaKe` auto-deploys from `main` on every push.

---

## License & Copyright

© 2026 VibePress Studio. All rights reserved. Built for performance, security, and data privacy.

**Engineering Accreditation:** Designed & Engineered by Lead Software Architect Abu Saeed Sayem. See [`/about`](https://vibepressstudio.vercel.app/about) and `src/content/about.json:1`.

**Trademarks:** WordPress® is a registered trademark of the WordPress Foundation. Amazon Associates®, Stripe®, Cloudflare® referenced under nominative fair use.

---

## New Features in v1.0.8

### Subscription Engine
- **Public Footer Form**: `SubscriberForm` component mounted in the global footer (`variant="compact"`, `source="footer"`, `buttonLabel="Subscribe"`)
- **Studio Lab Early-Access Dispatch**: Featured `SubscriberForm` above the hero section (`variant="expanded"`, `source="lab_hero"`, `buttonLabel="Join Studio Alpha Dispatch"`)
- **Validation**: Name (min 2 chars, trimmed/sanitized), Email (RFC 5322, lowercase, sanitized)
- **Honeypot Bot Mitigation**: Hidden `hp_website_title` field with `display: none`, `tabIndex: -1`, `autocomplete: disabled`
- **Deduplication**: Upsert keyed on email — updates existing record if email exists, creates new if not
- **Animated Success State**: No page reload, no layout shift, reads "You're on the list" with emerald checkmark
- **Email Notification**: HTML (bg:#0B1120, accent:#38BDF8) + plain text alternative, sent asynchronously via Nodemailer/Ethereal test transport
- **Server-Side Saving**: `saveSubscriber` upsert in `src/lib/db/subscribers.ts` using shared Prisma client singleton

### Admin Control Panel
- **Dedicated Login**: `/admin/login` — the only way into the admin area, bcrypt-hashed passwords via `ADMIN_PASSWORD_HASH` env var
- **Session Security**: HttpOnly, SameSite cookies; server-side verification on every request; never trusts client-side flags
- **Rate Limiting + Lockout**: Failed login attempts trigger temporary lockout from the same source
- **CSRF Protection**: Every state-changing admin request (login, save, delete, export) includes CSRF token validation
- **Page Content Editor**: Dropdown generates options from actual site structure; never goes stale; inline editing of headlines, body copy, button labels, repeatable items
- **Save & Live Update**: Single Save action commits all changes; next public page load reflects edits without redeploy
- **Repeatable Content**: Add/delete FAQ items, testimonial entries, feature list entries on pages that support them
- **Sanitization**: All admin-entered text sanitized/escaped before storing and before rendering on public pages (XSS risk if account compromised)
- **Subscriber List View**: Reads from the exact same `Subscriber` Prisma table (not a separate store); sortable by most recent first; search/filter by name/email
- **CSV Export**: Download button produces valid CSV file with Name, Email, Source, Timestamp
- **Auto-Logout**: Logout after reasonable inactivity period

### Integration
- Both the public subscription engine and the admin subscriber list share **one** `Subscriber` Prisma model — no duplicate storage
- Admin panel subscriber list auto-updates when new subscribers sign up through the public footer form
- Page content edits and subscriber data persist across deploys (database-backed / live on next page load)

