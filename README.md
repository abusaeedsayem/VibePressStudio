# VibePress Studio — High-Performance Digital Tools

> **Live Website:** [https://vibepressstudio.vercel.app](https://vibepressstudio.vercel.app)  
> **Tagline:** High-Performance Digital Tools  
> **Lead Software Architect:** Abu Saeed Sayem

---

## Overview

VibePress Studio is a software engineering studio dedicated to crafting high-performance digital tools and enterprise-grade WordPress plugins engineered for speed, legal compliance, and 100% data sovereignty.

---

## Flagship Product: Smart Affiliate Link Cloaker

**Smart Affiliate Link Cloaker** is an enterprise-grade WordPress plugin (v1.0.6 — 100% Feature Complete) that turns raw merchant referral URLs into clean, branded, trackable links hosted on your own domain.

### Key Capabilities & Architecture Highlights
- **Custom Post Type (`salc_link`) & Top-Priority Rewrite Engine**: High-performance URL routing (`^go/{slug}` or `^go/{category}/{slug}`) with 24h transient caching.
- **301 / 302 / 307 / 200 iFrame Redirect Engine**: Supports uncached 307 Temporary Redirects (default) and 200 iFrame masking with branded gradient headers.
- **Smart ToS Uncloaking (Amazon Associates §6)**: Auto-detects `amazon.*` and `amzn.to` URLs to render raw destination links on the frontend while beacon-tracking clicks via `navigator.sendBeacon`.
- **FTC Legal Auto-Disclosure Injector**: Auto-inserts accessible `<aside role="note">` legal compliance banners with 4 customizable visual styles (Callout, Badge, Minimal, Subtle).
- **GA-Style Local Click Analytics**: Local database logging (`wp_salc_clicks`) with 30+ bot signature filters, IPv4/IPv6 IP anonymization, Cloudflare geo resolution, 7 Chart.js graphs, and CSV export.
- **DOM-Safe Keyword Auto-Linker [PRO]**: `DOMDocument` + XPath regex engine automatically converts keywords to cloaked links across post history while skipping headings, code blocks, and existing links.
- **Stripe Payment Links Integration [PRO]**: Direct `go/checkout` -> Stripe Checkout Session creation with REST webhooks (`salc/v1/stripe-webhook`) for conversion and revenue logging.
- **Deal Expiration & Nightly Health Scanner [PRO]**: Auto-expire deals by date or click cap (302 fallback or 410 page). Nightly background HEAD checks ping destination links and send broken link email reports.
- **Dynamic UTM & Query Parameter Forwarding [PRO]**: Allowlist forwarding (`utm_*`, `gclid`, `fbclid`, `wbraid`) preserving target parameters.
- **1-Click Platform Migration**: Import links and click counts from PrettyLinks, ThirstyAffiliates, or CSV files in one click.

---

## Site Pages & Routes

- **Home Page (`/`)**: Highlighting studio value propositions and flagship Smart Affiliate Link Cloaker.
- **Product Page (`/products/smart-affiliate-link-cloaker`)**: Complete 9-part enterprise documentation, technical specs, use cases, and setup guides.
- **Products Directory (`/products`)**: Ecosystem listing of studio digital tools.
- **Documentation Hub (`/docs`)**: Step-by-step installation walkthroughs, metabox references, settings panel guides, and FAQs.
- **Studio Lab (`/lab`)**: Pre-launch early access registration portal.
- **About Studio (`/about`)**: Core engineering pillars, coding standards (WPCS/PSR-12), and quality commitments.
- **Support (`/contact`)**: Direct technical helpdesk and inquiry form.
- **Legal (`/legal/terms` & `/legal/privacy`)**: Terms of service and cookie-less privacy policy.

---

## Local Development & Build Setup

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:3000)
npm run dev

# Production build validation
npm run build
```

---

## Tech Stack & Design System

- **Framework**: Next.js 16.3.2 (App Router + Turbopack)
- **Styling & UI**: Tailwind CSS, Lucide Icons, Shadcn UI Components
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Accessibility**: WCAG AAA Compliant Color Token Palette
- **Deployment**: Vercel Platform (`https://vibepressstudio.vercel.app`)

---

## License & Copyright

© 2026 VibePress Studio. All rights reserved. Built for performance, security, and data privacy.
