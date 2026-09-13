# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem  
> **Studio Release:** `v1.0.13` (September 2026) · **Site Build:** `v0.4.0` (Next.js 16.3.2) · **Flagship Plugin:** `v1.0.13` (100% Feature Complete · 24 Core Features)  
> **Last Updated:** September 2026 — See [CHANGELOG.md](./CHANGELOG.md) for full release history

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

We replace sluggish, SaaS-locked systems with rock-solid, production-grade solutions that adhere to WordPress Core Coding Standards (WPCS), PSR-4/PSR-12, WCAG AAA contrast, and zero telemetry privacy requirements. Every tool is built for sub-millisecond execution, 24h transient caching, and local database ownership (`wp_posts` & `wp_postmeta`).

> **Integrated Documentation:** This README is fully synchronized with [`CHANGELOG.md`](./CHANGELOG.md) (canonical history) and the live timeline at [`/changelog`](https://vibepressstudio.vercel.app/changelog) (`src/content/changelog.json`), plus the 9-chapter Documentation Hub at [`/docs`](https://vibepressstudio.vercel.app/docs) and the 8-tab product showcase at [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker).

---

## Latest Release: v1.0.13 — Rebranding, Support Ticket Engine & Admin Helpdesk Center (September 2026)

This release rebrands our flagship WordPress plugin to **VibePress Affiliate Link Cloaker**, upgrades the version to **v1.0.13**, synchronizes all internal product routes to `/products/vibepress-affiliate-link-cloaker` (with permanent 308 redirect), introduces a full-featured Support Ticket database persistence system with instant email delivery to `VibePress.Studio@proton.me`, and upgrades the Admin Dashboard with an interactive Helpdesk Inquiries Directory.

### What's New at a Glance (v1.0.13)

| Area | Update | Files / Routes |
|------|--------|----------------|
| **Plugin Rebranding** | Renamed plugin from "Smart Affiliate Link Cloaker" to **"VibePress Affiliate Link Cloaker"** across all UI components, legal documents, and content schemas. | `src/content/products.json`, `src/content/cloaker.json`, `src/content/docs.json` |
| **Route & URL Migration** | Migrated canonical product URL to [`/products/vibepress-affiliate-link-cloaker`](https://vibepressstudio.vercel.app/products/vibepress-affiliate-link-cloaker) with backward-compatible 308 redirect in `next.config.ts`. | `src/app/products/vibepress-affiliate-link-cloaker/page.tsx`, `next.config.ts` |
| **Support Ticket Persistence** | Built dual-layer database persistence (`prisma.supportTicket` + `memoryStore.ts`) for `/contact` form submissions, capturing requester name, email, product, category, license key, and inquiry message. | `src/lib/db/tickets.ts`, `src/lib/db/memoryStore.ts`, `src/app/api/contact/route.ts`, `prisma/schema.prisma` |
| **Instant Email Dispatch** | Automated real-time email notifications to `VibePress.Studio@proton.me` with complete ticket metadata, formatted message body, and direct reply link. | `src/lib/email/notifications.ts`, `src/app/api/contact/route.ts` |
| **Admin Helpdesk Inquiries Desk** | Upgraded `/admin/dashboard` with real-time support ticket tracking, search & status filters, expandable detail modals, status toggle (`OPEN`/`RESOLVED`), and ticket CSV export. | `src/app/admin/dashboard/page.tsx`, `src/app/api/admin/tickets/route.ts` |
| **Version Alignment (v1.0.13)** | Standardized plugin version to `v1.0.13 (100% Feature Complete · 24 Core Features)` across all landing pages, docs, admin metrics, and metadata. | Entire Project |

---

## Flagship Product: VibePress Affiliate Link Cloaker

**VibePress Affiliate Link Cloaker** is an enterprise-grade WordPress plugin (**v1.0.13 — 100% Feature Complete · 24 Core Features**) that turns raw merchant referral URLs into clean, branded, trackable links hosted on your own domain (`https://yoursite.com/go/best-vpn`). It is rendered across Home (`src/app/page.tsx`), Products Directory (`src/app/products/page.tsx`), the 8-tab Product Page (`src/app/products/vibepress-affiliate-link-cloaker`), and the 9-chapter Documentation Hub (`src/app/docs/page.tsx`).

---

## Site Pages & Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home — 5-section layout with live link transformation demo, feature spotlight, and engineering standards |
| `/products` | `src/app/products/page.tsx` | Products Directory — filterable 24-feature mini-explorer + 3-col technical specification |
| `/products/vibepress-affiliate-link-cloaker` | `src/app/products/vibepress-affiliate-link-cloaker/page.tsx` | 8-tab sticky showcase with WP Admin sidebar simulator & interactive use cases |
| `/docs` | `src/app/docs/page.tsx` | Documentation Hub — 9-chapter searchable manual with Copy Section tool |
| `/changelog` | `src/app/changelog/page.tsx` | Release Notes — renders `src/content/changelog.json` timeline |
| `/lab` | `src/app/lab/page.tsx` | Studio Lab — pre-launch registration portal with real-time subscription engine |
| `/about` | `src/app/about/page.tsx` | Studio Vision, Philosophy, and 4 Engineering Pillars |
| `/contact` | `src/app/contact/page.tsx` | Support Helpdesk & Inquiry Form |
| `/admin/login` | `src/app/admin/login/page.tsx` | Secret Admin Login (Password Protected, Private Access) |
| `/admin/dashboard` | `src/app/admin/dashboard/page.tsx` | Admin Control Center — Subscribers table, CSV Export, Helpdesk & Content Inspector |
| `/legal/terms` | `src/app/legal/terms/page.tsx` | Official 12-Section Terms of Use |
| `/legal/privacy` | `src/app/legal/privacy/page.tsx` | Official 8-Section Privacy Policy |
| `/sitemap.xml` | `src/app/sitemap.ts` | Auto-generated sitemap |
| `/robots.txt` | `src/app/robots.ts` | Robots directives + `Disallow: /go/` |

---

## Local Development & Build Setup

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:3001)
npm run dev

# Production build validation (22 static & dynamic routes)
npm run build

# Type check
npx tsc --noEmit
```

---

## Deployment & Live Verification

**Platform:** Vercel — auto-deploy on `git push` to `main`.

**Live URL:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)

---

## License & Copyright

© 2026 VibePress Studio. All rights reserved. Built for performance, security, and data privacy.

**Engineering Accreditation:** Designed & Engineered by Lead Software Architect Abu Saeed Sayem.
