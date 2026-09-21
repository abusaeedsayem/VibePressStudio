# VibePress Studio — Built in Flow. Made for Reality.

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** Built in Flow. Made for Reality.  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Release:** `v1.2.2` (September 2026) · **Site Build:** `v0.4.0` (Next.js 16.3.2) · **Desktop Utility:** `Blueprnt (Local-First)` · **Flagship Plugin:** `v1.0.13`  
> **Last Updated:** September 21, 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools, local-first desktop applications, and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to official coding standards, WCAG AAA contrast, and zero telemetry privacy requirements.

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) (canonical history) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json`), plus the multi-product Documentation Hub at [`/docs`](https://vibepressstudio.vercel.app/docs), the Blueprnt product showcase at [`/products/blueprnt`](https://vibepressstudio.vercel.app/products/blueprnt), and the VibePress Affiliate Link Cloaker page at [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker).

---

## Latest Release: v1.2.2 — Studio Deployment & Full Download Suite Verification (September 21, 2026)

This release completes full production build compilation, Vercel deployment verification (HTTP 200 OK), live cloaked checkout verification (HTTP 307 redirect to Lemon Squeezy), and unified documentation synchronization across all platform channels.

### What's New at a Glance (v1.2.2 / v1.2.1 / v1.2.0)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Production Build & Live Verification** | Executed clean Next.js static build (26/26 routes) and verified live HTTP 200 response on `https://vibepressstudio.vercel.app` and HTTP 307 temporary redirect on `/api/checkout`. | `https://vibepressstudio.vercel.app`, [`src/app/api/checkout/route.ts`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/api/checkout/route.ts) |
| **Strong License CTA Copy** | Updated purchase card headline to `"Need to Get a License Key?"`, supporting text to `"Unlock full studio features & lifetime offline activation for your workstation."`, and button text to `"Get Pro License Key"`. | [`src/components/blueprnt/DownloadModal.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/blueprnt/DownloadModal.tsx) |
| **Strong License CTA Copy** | Updated purchase card headline to `"Need to Get a License Key?"`, supporting text to `"Unlock full studio features & lifetime offline activation for your workstation."`, and button text to `"Get Pro License Key"`. | [`src/components/blueprnt/DownloadModal.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/blueprnt/DownloadModal.tsx) |
| **Official v1.5.0 Binaries** | Integrated official production binaries in `/downloads/`: macOS Apple Silicon (`Blueprnt_1.5.0_aarch64.dmg`), Windows x64 setup (`Blueprnt_1.5.0_x64-setup.exe`), Linux Debian/Ubuntu (`Blueprnt_1.5.0_amd64.deb`), and Linux Fedora/RedHat (`Blueprnt-1.5.0-1.x86_64.rpm`). | `public/downloads/` |
| **Official User Manual v1.5.0 PDF** | Integrated `Blueprnt_User_Manual_v1.5.0.pdf` into `DownloadModal.tsx` and manual download sections across `/products/blueprnt` and `/lab`. | `public/downloads/Blueprnt_User_Manual_v1.5.0.pdf`, [`src/components/blueprnt/DownloadModal.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/blueprnt/DownloadModal.tsx) |
| **Multi-Platform Installer Switcher** | Updated `DownloadModal.tsx` and section 6.1 installation guides to support `.deb` and `.rpm` Linux package download triggers. | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), [`src/app/lab/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/lab/page.tsx) |
| **Free Desktop Installers** | Hosted static installer packages for macOS Universal (`Blueprnt_1.0.0_universal.dmg`), Windows x64 (`Blueprnt_1.0.0_x64-setup.exe`), and Linux AppImage (`blueprnt_1.0.0_amd64.AppImage`) in `/downloads/`. | `public/downloads/` |
| **Download Intercept Modal** | Created interactive `DownloadModal.tsx` auto-triggering installer downloads upon user click, featuring platform selection pills, FREE Operational User Manual PDF download CTA, and instant Pro License triggers. | [`src/components/blueprnt/DownloadModal.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/blueprnt/DownloadModal.tsx) |
| **Secure URL Cloaking** | Built server-side route handlers `/api/checkout` and `/checkout/blueprnt` performing secure 307 temporary redirects to Lemon Squeezy checkout while keeping target checkout URLs 100% hidden from client HTML, hover states, and web crawlers. | [`src/app/api/checkout/route.ts`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/api/checkout/route.ts), [`src/app/checkout/blueprnt/route.ts`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/checkout/blueprnt/route.ts) |
| **User Manual PDF Integration** | Added direct PDF download links and modal suggestions for `Blueprnt_Operational_User_Manual.pdf` across `/products/blueprnt`, `/lab`, and Home page (`/`). | `public/downloads/Blueprnt_Operational_User_Manual.pdf`, [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), [`src/app/lab/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/lab/page.tsx) |
| **Studio Tagline Standardization** | Standardized studio tagline to `"Built in Flow. Made for Reality."` across global site metadata, Navbar brand header, Footer copyright bar, Home page hero badge, Products directory, Docs hub, Studio Lab, and Legal pages. | `src/content/site.json`, `src/content/navigation.json`, `src/content/footer.json`, [`src/app/layout.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/layout.tsx), [`src/components/layout/Navbar.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/layout/Navbar.tsx), [`src/components/layout/Footer.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/layout/Footer.tsx) |
| **Blueprnt Version Tag Removal** | Removed `v1.1.0` and `Version 1.1.0` labels site-wide from Blueprnt product page, Home card badges, Products directory, Documentation Hub, Studio Lab manual, Pricing tables, and data schemas. | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/blueprnt.json`, `src/content/products.json`, `src/content/docs.json` |
| **Blueprnt Privacy Policy Addendum** | Documented 100% offline data isolation, zero content ingestion, strict egress boundaries (Lemon Squeezy activation socket with Ed25519 local verification & 30-day grace, zero content telemetry), local `blueprnt_state.db` database & native keyring (Keychain, Credential Manager, Secret Service), local Scrubber Pro metadata stripping (`_CleanDelivery`), and compliance (NY SHIELD Act, CCPA/CPRA, EU GDPR Data Controller model). | [`src/app/legal/privacy/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/legal/privacy/page.tsx), `src/content/privacy.json` |
| **Blueprnt Terms of Operational Use Addendum** | Documented professional production workflows, hardware environment responsibilities, BLAKE3 checksum verification, mandatory 3-2-1 backup rules, atomic sidecar bulk renaming, isolated `_Quarantine` vault, Lemon Squeezy merchant of record & tier limits (Creator 2-machine, Studio 5-machine), fraud prevention key revocation, 14-day refund policy for verifiable non-performance, local-first best-effort support, AAA binding arbitration in Schenectady County NY, jury trial & class action waivers, and studio physical mailing address (1275 Gerling St. Apt 8C3, Schenectady, NY 12308). | [`src/app/legal/terms/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/legal/terms/page.tsx), `src/content/terms.json` |
| **Site-Wide Blueprnt Priority** | Positioned Blueprnt Desktop Utility as the lead product [0] across products/docs data catalogs, navbar dropdowns, search (⌘K), mobile drawer, Home hero/trustBar, and footer links. | `src/content/products.json`, `src/content/docs.json`, `src/content/home.json`, `src/content/footer.json` |
| **Core Engine Architecture** | Documented universal format handling (CR2/CR3, NEF, ARW, HEIC, JPEG, TIFF, PNG), sub-15ms embedded preview extraction, indivisible shot-group locking, high-throughput parallel processing (`jwalk` & `rayon`), and SIMD BLAKE3 cryptographic hashing. | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/blueprnt.json` |
| **Feature Tier Matrices** | Documented 6 Basic features (Visual Storage Inventory Map, Exact Duplicate Finder, Basic Renamer, Non-Destructive Deletion, EXIF Viewer, Clean Export) and 12 Premium Pro features (Renamer Pro EXIF Tokens, Atomic Sidecars, Collision Detection, Preset Chains, Duplicate Pro, Smart-Keep, Quarantine Vault, Scrubber Pro, Clean IPTC Injection, Before/After Map Proof, Cross-Drive Scanning, CSV Roster Mapping). | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/docs.json` |
| **Enterprise Data Integrity** | Integrated Persistent Local Undo Journal (local WAL database), Two-Stage Temporary File Replacement (`.tmp_blueprnt`), and 100% Offline Ed25519 Cryptographic Licensing. | `src/content/blueprnt.json`, [`src/app/docs/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/docs/page.tsx) |
| **Footer Navigation Alignment** | Updated Software Suite menu label in footer from `Blueprnt Desktop Workstage` to `Blueprnt Desktop Utility` and ordered Blueprnt first. | `src/content/footer.json` |

---

## Featured Products

1. **Blueprnt** — Local-First Desktop Media Workstage (**100% Offline**) for camera offloads, BLAKE3 checksum verification, atomic shot-groups, CSV roster mapping, ProRes/DNxHR proxies, and EXIF privacy scrubbing.  
   - Route: [`/products/blueprnt`](https://vibepressstudio.vercel.app/products/blueprnt)

2. **VibePress Affiliate Link Cloaker** — Enterprise WordPress Plugin (**v1.0.13 — 24 Core Features**) for branded link cloaking, Amazon §6 ToS uncloaking, FTC disclosures, A/B testing, and Stripe payment links.  
   - Route: [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker)

---

## Site Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home — 5-section layout showcasing flagship plugins and desktop software |
| `/products` | `src/app/products/page.tsx` | Products Directory — filterable multi-product explorer + technical specifications |
| `/products/blueprnt` | `src/app/products/blueprnt/page.tsx` | Blueprnt Product Showcase — 4 feature studios, installation guides, & FAQs |
| `/products/vibepress-affiliate-link-cloaker` | `src/app/products/vibepress-affiliate-link-cloaker/page.tsx` | VibePress Affiliate Link Cloaker Page — 8-tab sticky showcase with WP Admin simulator |
| `/docs` | `src/app/docs/page.tsx` | Documentation Hub — multi-product manual reader with Copy Section tool |
| `/changelog` | `src/app/changelog/page.tsx` | Release Notes — renders `src/content/changelog.json` timeline |
| `/lab` | `src/app/lab/page.tsx` | Studio Lab — pre-launch registration portal & Blueprnt operational manual |
| `/about` | `src/app/about/page.tsx` | Studio Vision, Philosophy, and 4 Engineering Pillars |
| `/contact` | `src/app/contact/page.tsx` | Support Helpdesk & Inquiry Form |
| `/admin/login` | `src/app/admin/login/page.tsx` | Secret Admin Login (Password Protected, Private Access) |
| `/admin/dashboard` | `src/app/admin/dashboard/page.tsx` | Admin Control Center — Subscribers table, CSV Export, Helpdesk & Content Inspector |
| `/legal/terms` | `src/app/legal/terms/page.tsx` | Official 12-Section Terms of Use |
| `/legal/privacy` | `src/app/legal/privacy/page.tsx` | Official 8-Section Privacy Policy |
| `/sitemap.xml` | `src/app/sitemap.ts` | Auto-generated sitemap |
