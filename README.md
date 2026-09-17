# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Release:** `v1.1.0` (September 2026) · **Site Build:** `v0.4.0` (Next.js 16.3.2) · **Desktop Software:** `Blueprnt v1.1.0` · **Flagship Plugin:** `v1.0.13`  
> **Last Updated:** September 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools, local-first desktop applications, and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to official coding standards, WCAG AAA contrast, and zero telemetry privacy requirements.

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) (canonical history) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json`), plus the multi-product Documentation Hub at [`/docs`](https://vibepressstudio.vercel.app/docs), the Blueprnt product showcase at [`/products/blueprnt`](https://vibepressstudio.vercel.app/products/blueprnt), and the VibePress Affiliate Link Cloaker page at [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker).

---

## Latest Release: v1.1.0 — Blueprnt v1.1.0 Product Launch & Multi-Product Platform Integration (September 2026)

This release launches **Blueprnt v1.1.0**, a professional local-first desktop media application for camera card offloading, BLAKE3 checksum verification, atomic shot-group preservation, token renaming, ProRes/DNxHR proxies, and EXIF privacy scrubbing.

### What's New at a Glance (v1.1.0)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Blueprnt Product Page** | Launched dedicated showcase page for **Blueprnt v1.1.0** with 4 feature studios, real-world use cases, target audience specs, installation guides, and FAQs. | [`src/app/products/blueprnt/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/products/blueprnt/page.tsx), `src/content/blueprnt.json` |
| **Studio Lab How-To Guide** | Integrated **6.1 Multi-Platform Installation Guide** (macOS, Windows 10/11, Linux) and **6.2 Step-by-Step Feature Instructions** into `/lab` for instant user manual access. | [`src/app/lab/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/lab/page.tsx), `src/content/pricing.json` |
| **Documentation Hub Switcher** | Upgraded `/docs` with a multi-product switcher tab allowing visitors to toggle between VibePress Affiliate Link Cloaker and Blueprnt v1.1.0 manuals. | [`src/app/docs/page.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/app/docs/page.tsx), `src/content/docs.json` |
| **Navigation & Search** | Updated Navbar dropdown, mobile drawer, and Command Search Menu (`⌘K`) to include Blueprnt v1.1.0 with official `/blueprnt-icon.svg`. | [`src/components/layout/Navbar.tsx`](file:///Users/abusaeedmohammadsayem/VibePressStudio/src/components/layout/Navbar.tsx), `src/content/footer.json` |
| **Products Directory & Home** | Added Blueprnt v1.1.0 to `/products` directory and Home page software showcase cards. | `src/content/products.json`, `src/content/home.json` |

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
