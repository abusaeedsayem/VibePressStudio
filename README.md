# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Release:** `v1.1.5` (September 2026) · **Site Build:** `v0.4.0` (Next.js 16.3.2) · **Desktop Utility:** `Blueprnt v1.1.0` · **Flagship Plugin:** `v1.0.13`  
> **Last Updated:** September 17, 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools, local-first desktop applications, and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to official coding standards, WCAG AAA contrast, and zero telemetry privacy requirements.

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) (canonical history) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json`), plus the multi-product Documentation Hub at [`/docs`](https://vibepressstudio.vercel.app/docs), the Blueprnt product showcase at [`/products/blueprnt`](https://vibepressstudio.vercel.app/products/blueprnt), and the VibePress Affiliate Link Cloaker page at [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker).

---

## Latest Release: v1.1.5 — Site-Wide Priority Alignment for Blueprnt Desktop Utility (September 17, 2026)

This release prioritizes **Blueprnt Desktop Utility** at index `[0]` across all product and documentation catalogs, navigation dropdowns, search dialogs (⌘K), mobile drawer, Home page hero/trust bar, site metadata, About page, and Footer navigation.

### What's New at a Glance (v1.1.5 / v1.1.4 / v1.1.3)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Site-Wide Blueprnt Priority** | Positioned Blueprnt Desktop Utility as the lead product [0] across products/docs data catalogs, navbar dropdowns, search (⌘K), mobile drawer, Home hero/trustBar, and footer links. | `src/content/products.json`, `src/content/docs.json`, `src/content/home.json`, `src/content/footer.json` |
| **Core Engine Architecture** | Documented universal format handling (CR2/CR3, NEF, ARW, HEIC, JPEG, TIFF, PNG), sub-15ms embedded preview extraction, indivisible shot-group locking, high-throughput parallel processing (`jwalk` & `rayon`), and SIMD BLAKE3 cryptographic hashing. | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/blueprnt.json` |
| **Feature Tier Matrices** | Documented 6 Basic features (Visual Storage Inventory Map, Exact Duplicate Finder, Basic Renamer, Non-Destructive Deletion, EXIF Viewer, Clean Export) and 12 Premium Pro features (Renamer Pro EXIF Tokens, Atomic Sidecars, Collision Detection, Preset Chains, Duplicate Pro, Smart-Keep, Quarantine Vault, Scrubber Pro, Clean IPTC Injection, Before/After Map Proof, Cross-Drive Scanning, CSV Roster Mapping). | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/docs.json` |
| **Enterprise Data Integrity** | Integrated Persistent Local Undo Journal (local WAL database), Two-Stage Temporary File Replacement (`.tmp_blueprnt`), and 100% Offline Ed25519 Cryptographic Licensing. | `src/content/blueprnt.json`, [`src/app/docs/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/docs/page.tsx) |
| **Footer Navigation Alignment** | Updated Software Suite menu label in footer from `Blueprnt Desktop Workstage` to `Blueprnt Desktop Utility` and ordered Blueprnt first. | `src/content/footer.json` |

---

## Featured Products

1. **Blueprnt v1.1.0** — Local-First Desktop Media Workstage (**v1.1.0 — 100% Offline**) for camera offloads, BLAKE3 checksum verification, atomic shot-groups, CSV roster mapping, ProRes/DNxHR proxies, and EXIF privacy scrubbing.  
   - Route: [`/products/blueprnt`](https://vibepressstudio.vercel.app/products/blueprnt)

2. **VibePress Affiliate Link Cloaker** — Enterprise WordPress Plugin (**v1.0.13 — 24 Core Features**) for branded link cloaking, Amazon §6 ToS uncloaking, FTC disclosures, A/B testing, and Stripe payment links.  
   - Route: [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker)

---

## Site Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home — 5-section layout showcasing flagship plugins and desktop software |
| `/products` | `src/app/products/page.tsx` | Products Directory — filterable multi-product explorer + technical specifications |
| `/products/blueprnt` | `src/app/products/blueprnt/page.tsx` | Blueprnt v1.1.0 Product Showcase — 4 feature studios, installation guides, & FAQs |
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
