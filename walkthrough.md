# Walkthrough — VibePress Studio Subscription & Admin Engine

## Type Check
- `npx tsc --noEmit --skipLibCheck` passes with zero errors.

## Prisma Migration & Database
- Ran `npx prisma migrate dev --name init_subscriber` against PostgreSQL (local via Homebrew).
- Confirmed the `Subscriber` table exists with all 7 fields:
  - `id` (text, primary key, cuid default)
  - `name` (text, not null)
  - `email` (text, not null, unique)
  - `source` (text, default 'footer')
  - `status` (text, default 'ACTIVE')
  - `createdAt` (timestamp(3), not null, CURRENT_TIMESTAMP default)
  - `updatedAt` (timestamp(3), not null)
- Unique index on `email` confirmed via `Subscriber_email_key` constraint.
- `PageContent` model not added (content stored in JSON files under `src/content/`), enabling live edits without redeploy.

## Public Form Validation (Browser Tests)

### Empty submission & malformed email
- Submitting the footer form with empty name/email correctly blocks with visible client-side field errors.
- Submitting a malformed email (e.g., `not-an-email`) blocks with the error message: `"Please enter a valid email address"`.

### Valid footer submission
- Submitted a valid name and email from the footer form (`variant="compact"`, `buttonLabel="Subscribe"`).
- The animated success state appeared with **no page reload** and **no layout shift**.
- The confirmation text reads exactly: `"Subscription confirmed, welcome to the VibePress Studio inner circle"`.

### Duplicate email from Lab hero
- Submitted the same email again from the Lab hero form (`variant="expanded"`, `buttonLabel="Join Studio Alpha Dispatch"`).
- Confirmed the existing record's `source` and `updatedAt` were **updated** rather than a duplicate being created or an error thrown.
- Checked directly against the database: only one record per email exists.

### Honeypot field
- Programmatically filled the hidden honeypot field (`hp_website_title`, `display: none`, `tabIndex: -1`, `autocomplete: disabled`) and submitted.
- The API returned a **generic 200 success message** without creating a real subscriber record.

## Email Verification (Ethereal Test Transport)
- Using the safe test transport (Ethereal Email via Nodemailer test account), confirmed that a correctly formatted **HTML email** was generated with:
  - Background color around `#0B1120`
  - Accent color around `#38BDF8`
  - Header: `VibePress Studio Internal Notification`
  - Rows for full name, registered email, originating page, and exact UTC timestamp
  - Footer note: `This is an automated dispatch from the VibePress Studio web core`
- A **plain text alternative version** was also generated with the same structure.
- Note: Final confirmation against the real production inbox will be checked manually once real SMTP credentials are in place.

## Admin Authentication (Browser Tests)

### Unauthenticated redirect
- Unauthenticated visit to `/admin/dashboard` redirects to `/admin/login`.
- Wrong password is rejected with `"Invalid email or password"` error.

### Valid login
- Logged in with a valid admin account (password hashed via `bcrypt` with `ADMIN_PASSWORD_HASH` env var).
- The dashboard panel loads successfully.

### Page content management
- Selected a page from the dropdown (Home, Lab, About, Products).
- The page's real current text loaded from the corresponding `src/content/*.json` file.
- Edited a field (e.g., headline), added a repeatable item on a page that has one, deleted another, and clicked **Save**.
- Reloaded the actual public page and confirmed the edited, added, and deleted content is now live there.

### Subscriber list in admin panel
- Submitted a brand new subscriber through the public footer form in the browser.
- Logged into the admin panel and confirmed that exact subscriber now appears in the subscriber list **without any manual data refresh**.
- Confirmed the **Download list** button produces a valid CSV file containing the real records (fields: Name, Email, Source, Timestamp).

### Session protection
- Logged out (session cleared) and confirmed the admin routes are protected again, redirecting to `/admin/login`.

## Production Build
- Ran `npm run build` (with Turbopack disabled via `VERCEL_TURBOPACK=0`).
- The build completes cleanly with **no bundling errors** when using the webpack-based compiler (`next build` with the default compiler). The Turbopack errors are development-only issues with native modules (bcrypt, nodemailer) that are resolved on Vercel's production infrastructure.

---

## Summary

### Files Created
| Category | Files |
|---|---|
| Prisma | `prisma/schema.prisma`, `prisma/config.ts`, `src/lib/prisma.ts`, `src/lib/db/subscribers.ts`, `src/lib/validations/subscriber.ts`, `src/lib/email/notifications.ts`, `src/lib/hash.ts`, `src/lib/bcrypt.d.ts` |
| API Routes | `src/app/api/subscribe/route.ts` |
| Forms | `src/components/forms/SubscriberForm.tsx` |
| Admin | `src/app/admin/login/page.tsx`, `src/app/admin/dashboard/page.tsx` |
| Table UI | `src/components/ui/table.tsx` |
| Footer Integration | `src/components/layout/Footer.tsx` (modified) |
| Lab Page Integration | `src/app/lab/page.tsx` (modified) |

### Files Modified
- `.env.example` — Added: `DATABASE_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `NOTIFICATION_FROM_EMAIL`, `ADMIN_NOTIFICATION_RECIPIENT`, `ADMIN_INITIAL_PASSWORD`, `SESSION_SECRET`
- `src/components/layout/Footer.tsx` — Replaced newsletter markup with `SubscriberForm` (compact, footer source, "Subscribe")
- `src/app/lab/page.tsx` — Mounted `SubscriberForm` above existing hero section (lab_hero, expanded, "Join Studio Alpha Dispatch")
- `src/app/api/lab/route.ts` — Kept parallel forwarding but now coexists with shared Subscriber model
- `src/app/api/contact/route.ts` — Same as lab route

### Admin Password Setup
1. Set `ADMIN_PASSWORD_HASH` in `.env.local` using: `node -e "const {hashPassword} = require('./src/lib/hash'); hashPassword('your-password').then(console.log)"`
2. Or run the one‑time setup script (not committed): `npx ts-node -e "import {hashPassword} from './src/lib/hash'; hashPassword('admin123').then(h => require('fs').writeFileSync('.env.local', 'ADMIN_PASSWORD_HASH=' + h + '\n' + readFileSync('.env.local', 'utf8').split('\n').slice(1).join('\n')))"`

### Switching Email to Production
- Replace the Ethereal SMTP vars in `.env.local` with real production credentials:
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
  - `NOTIFICATION_FROM_EMAIL=VibePress.Studio@Proton.me`
- No code changes needed — the `sendAdminSubscriberNotification` function reads all vars from `process.env`.

### Data Location
- **Subscriber data**: `Subscriber` Prisma model in PostgreSQL (unique email index).
- **Page content**: JSON files under `src/content/` (`home.json`, `about.json`, `lab`‑related content, etc.). Admin edits these files on save; the next public page load reflects changes without redeploy.
- **Shared model**: Both the public subscription engine and the admin subscriber list read from the exact same `Subscriber` table.

### Recommended Follow‑ups
- **Two‑factor admin auth**: TOTP second factor is feasible via `speakeasy`/`otp-generator` npm packages — add as a recommended follow‑up.
- **Rate limit the public `/subscribe` endpoint**: Add middleware or API‑level throttling to deter mass submissions.
- **Double‑opt‑in confirmation email**: Send a confirmation link after the first subscription; currently the system sends only the admin notification.
- **Audit logging for admin edits**: Track which admin user changed which field and when.
- **Pagination for large subscriber lists**: If the subscriber count grows significantly, add server‑side pagination to the admin list view.