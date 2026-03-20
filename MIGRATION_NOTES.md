# Migration Notes: wigglytoothworkshop.com

This codebase is a Phase 1 clone of the tooth-safe.com site, prepared for deployment at **wigglytoothworkshop.com**.

No redesign was performed. Only domain-specific references were updated.

---

## Files Changed from the Original

| File | Change |
|------|--------|
| `public/CNAME` | `tooth-safe.com` → `wigglytoothworkshop.com` |
| `public/robots.txt` | Sitemap URL updated to `wigglytoothworkshop.com` |
| `public/sitemap.xml` | All 3 `<loc>` URLs updated to `wigglytoothworkshop.com` |
| `index.html` | Canonical, og:url, og:image (×2), twitter:image, WebSite JSON-LD `url` updated |
| `src/lib/config.ts` | `CONTACT_EMAIL` updated to `hello@wigglytoothworkshop.com` |

---

## Intentional tooth-safe.com References That Remain

These files still reference tooth-safe.com but are documentation only — they do not affect the running site:

| File | Context |
|------|---------|
| `README.md` | Documents the original site's live URL and GitHub Pages setup. Update separately if needed. |
| `CLAUDE.md` | AI assistant project context. Not a runtime file. |

**Note on product mentions:** The word "ToothSafe" appears throughout the site as a product/brand name (e.g. component names, page copy, navigation). These were intentionally left unchanged — they refer to the product, not the tooth-safe.com domain.

---

## Things That Still Need Attention Before Cutover

### 1. Google Analytics (GA4) — Shared Property
Both sites currently use the same GA4 measurement ID (`G-8M7LNF6VW7`). This means traffic from both domains will appear merged in one GA4 property. Options:
- **Acceptable for now:** Add a hostname filter in GA4 to separate data.
- **Better long-term:** Create a new GA4 property for wigglytoothworkshop.com and update `index.html` and `src/lib/config.ts` with the new ID.

### 2. Google Sheets Signup Endpoint — Shared
`GOOGLE_SHEETS_ENDPOINT` in `src/lib/config.ts` points to the same Apps Script. Email signups from both sites will land in the same sheet. If you want separate lists, create a second Apps Script deployment and update this value.

### 3. OG Image (`/og-image.jpg`) — Placeholder
`og:image` is set to `https://wigglytoothworkshop.com/og-image.jpg`. This file does not exist yet. Social sharing previews will be broken until a real OG image is placed at `public/og-image.jpg`.

### 4. Contact Email (`hello@wigglytoothworkshop.com`)
This email address does not yet exist. Set it up before launching so any form fallback messages reach you. The original `hello@tooth-safe.com` is still active on the original site.

### 5. Favicon / Web Manifest
The favicons (in `public/`) and `public/site.webmanifest` are copied verbatim. They contain no domain references but the manifest may reference the app name — review before launch if branding should differ.

---

## Deployment Checklist

See full deployment instructions in the main README below. Summary:

1. Push this repo to a new GitHub repository (e.g. `gerardmurphyNH/wiggly-tooth-workshop`)
2. In GitHub → Settings → Pages → set source to "GitHub Actions"
3. Add `wigglytoothworkshop.com` as the custom domain and enable Enforce HTTPS
4. Set DNS records in Squarespace (see below)
5. Wait for DNS propagation and HTTPS certificate (~10 min to 48 hours)

### DNS Records (Squarespace)

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | gerardmurphyNH.github.io |

> Replace `gerardmurphyNH` with the actual GitHub username if different.

---

## What Was NOT Changed

- All React components, layouts, styles, and logic
- Page content and copy
- Social media links (instagram.com/wigglytoothworkshop, tiktok.com/@wigglytoothworkshop)
- Brand mentions of "Wiggly Tooth Workshop" in footer, legal pages, and metadata
- Product references to "ToothSafe"
- GitHub Actions deploy workflow (`.github/workflows/deploy.yml`) — it is domain-agnostic
- Vite config, Tailwind config, TypeScript config
