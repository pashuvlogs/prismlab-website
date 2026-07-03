# PrismLab Website - Handover

Marketing website for **prismlab.app**. This doc captures what was built, the
decisions behind it, how it's deployed, and what's left. Pair it with
[README.md](README.md) (dev/build quickstart).

---

## 1. Status

- **Built and deployed.** Live and serving with valid SSL.
- Production build passes; every route is static-prerendered.
- Not yet fully cut over to the apex domain (see Open Items).

## 2. Where it lives

| Thing | Value |
|---|---|
| Local project | `c:\Users\magic\Claudeprojects\prismlab-website` |
| GitHub repo | `pashuvlogs/prismlab-website` (branch `main`) |
| Vercel default URL | `https://prismlab-website.vercel.app` |
| Custom domain (live) | `https://www.prismlab.app` |
| Apex `prismlab.app` | added in Vercel as a 308 redirect to www, **not yet configured** (Open Items) |
| DNS host | **Cloudflare** (nameservers `cleo` / `kenia.ns.cloudflare.com`) |
| The app (separate product) | `dev.prismlab.app` (unchanged, untouched) |

**Deploy flow:** push to `main` on GitHub -> Vercel auto-deploys. No env vars,
no build config needed (plain Next.js static output).

## 3. DNS / domain setup

- `www.prismlab.app` -> CNAME to Vercel (`*.vercel-dns-016.com`), Cloudflare
  proxy set to **DNS only (grey cloud)** so Vercel can verify + issue SSL. This
  matches how `dev.prismlab.app` is configured.
- Apex `prismlab.app` currently shows "Invalid Configuration" in Vercel because
  no apex DNS record exists yet. Decision still open (see Open Items).
- Note: brand-new subdomains can show a stale SERVFAIL / "no record" on a local
  ISP resolver for ~15-30 min even though they resolve on 1.1.1.1 / 8.8.8.8 and
  Vercel reports Valid. Not a config problem; it clears on its own.

## 4. Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `app/globals.css`)
- **Motion** (`motion/react`) for animation, reduced-motion aware
- **@phosphor-icons/react** for icons
- Fonts via `next/font/google`: **Sora** (display), **DM Sans** (body),
  **Space Mono** (labels/figures), **Newsreader** italic (hero accent word only)
- `next.config.ts`: `images.unoptimized` (local static shots), `turbopack.root`
  pinned to the project (a stray parent lockfile otherwise confuses Next)

## 5. Brand / design system ("PrismLab Tight Hand")

- **Logo:** five-card fan mark (`components/Logo.tsx`), fixed geometry; never
  stretch/skew/rotate the fan. Wordmark = "Prism" + green "Lab".
- **Theme:** locked **dark** (matches the real app screenshots).
- **Base colours:** ink `#0E1512`, brand green `#15A35E` / `#34D07F`.
- **Per-feature accent colours** (decision, see below): each numbered feature
  sets a `--accent` CSS var so the page reads as a spectrum, not a wall of green.
  Palette in `app/page.tsx` (`A`): green, sky, amber, violet, teal, rose, slate.
  Interactive brand elements (buttons, nav, hero) stay green everywhere.
- **Hero accent word** ("focus") uses Newsreader italic serif (`.accent-serif`).
- **"Intelligence"** in the AI card uses a rainbow gradient (`.rainbow-text`).

## 6. Site structure (information architecture)

Order top to bottom (`app/page.tsx`):

1. Nav (sticky) - Features / FIRE / Security / Pricing + Start free trial
2. Hero - "Money, finally *in focus*." + feature-embedding subline
3. Trust strip - Multi-currency / Prism Intelligence / Private / Accounts+assets
4. Problem - "The money that matters is the hardest to see."
5. Features intro - "One app for all of it."
6. **Feature 01 - Track & Budget** (real budget screenshot)
7. **Feature 02 - Voice Entry** (custom graphic: mic + waveform + parsed fields)
8. **Feature 03 - Bill Reader** (custom graphic: receipt -> captured card)
9. **Feature 04 - Prism Intelligence** (custom AI summary card)
10. **Feature 05 - Goals** (custom goal-progress cards)
11. **Feature 06 - Statement Import** (custom 0-variance reconciliation graphic)
12. **Feature 07 - Beyond Spending** (custom asset cards, multi-currency)
13. **Feature 08 - Reports** (real reports screenshot)
14. More features - recap grid of remaining capabilities
15. Platform - "Everywhere you are" (web frame + phone mockup)
16. FIRE finale - "So, when can you actually stop?" (calc + projection graphic)
17. Security - controls grid + link to `/security`
18. Pricing - one plan, $5/mo
19. Final CTA - "Try Prism *free*." + Start free trial
20. Footer - logo + Features/Pricing/Security/Privacy/Terms links

Policy pages: `/security` (detailed), `/privacy`, `/terms`.

## 7. Content decisions (important)

- **No fabricated stats.** Everything is grounded in the real product; the old
  deck's inflated numbers were deliberately excluded.
- **"Prism Intelligence", never "Claude"** anywhere in copy.
- **Real screenshots vs custom graphics (deliberate):** real UI screenshots only
  where the live UI is the proof and looks strong (dashboard, budget grid,
  reports, mobile). Everything else is a clean custom graphic to avoid clutter.
- **Voice Entry** leads with voice ("Just say it"), typing is secondary.
- **Bill Reader** captures merchant / total / date only - NOT line items (the
  app reads totals, so copy and graphic reflect that).
- **Multi-platform** is presented as available on **Android** now (product call).
  The phone shows the real responsive app; swap in a store badge once the native
  Android build ships.
- **Pricing:** $5/month after a **14-day free trial, no card required** (user
  confirmed). These mirror the app's current defaults, not a locked public price.
- **CTAs** ("Start free trial") point to **`https://dev.prismlab.app/signup`**.
  Update to the production signup URL at launch.
- **Zero em-dashes** in visible copy (brand copy rule).

## 8. Key files

```
app/
  layout.tsx        fonts, metadata, favicon
  page.tsx          full homepage: sections, per-feature accents (A), CTAs
  globals.css       brand tokens (@theme), accent utilities, .rainbow-text, .accent-serif
  security|privacy|terms/page.tsx   policy pages (server components w/ metadata)
components/
  Logo.tsx          PrismLabMark / PrismLabLogo (fan mark)
  Nav.tsx           sticky nav + mobile menu
  ui.tsx            Reveal / Stagger / BrowserFrame (url prop) / PhoneFrame
  graphics.tsx      all custom feature graphics ('use client')
  legal.tsx         LegalShell/Section/List for policy pages (MUST be 'use client')
public/
  favicon.svg       app icon (mono fan on green tile)
  shots/            real app screenshots (see below)
brief/BRIEF.md      the verified content brief the copy is built from
screenshots/        original captures + MANIFEST.md (internal reference)
```

## 9. Assets

- Screenshots in `public/shots/` are **real captures** of the running app,
  re-taken with the **trial banner hidden** and the sidebar wordmark relabelled
  **PrismLab**. Demo profile shows **"Mark Thompson"**.
- Currently used on the site: `01-dashboard`, `09-budget`, `15-reports`,
  `mobile-analytics` (phone). Others remain in the folder but are unused (the
  corresponding features use custom graphics now); safe to prune if desired.
- `BrowserFrame` shows `www.prismlab.app/<page>` in its chrome (decorative).

## 10. Demo account note (shared dev DB)

For screenshots, the seeded demo account `pashu@prismlab.app` on the shared
**prismlab-dev** database was renamed to **"Mark Thompson"** and given a
temporary password (kept out of this file / the repo - rotate it). Revert the
name to "Pashu" if the live demo should read differently. This is the only
change made outside this project.

## 11. Open items / next steps

- [ ] **Apex `prismlab.app`:** either remove it from the Vercel project (clean,
      www-only) OR make the redirect work by adding a Cloudflare record
      `A @ 76.76.21.21` (Proxy: DNS only). Use whatever record Vercel's
      "Learn more" shows as source of truth.
- [ ] **Signup URL:** confirm final target for "Start free trial" (currently
      `dev.prismlab.app/signup`; likely `app.prismlab.app` or `www` at launch).
- [ ] **Native Android:** replace the "On Android" phone framing with a Play
      Store badge once the real app ships.
- [ ] **OG image:** add `public/og.png` (1200x630) for nicer link previews.
- [ ] Minor: below-the-fold screenshots have no reserved width/height, so there
      is small layout shift (CLS) while scrolling fast. Add dimensions to polish.
- [ ] Rotate the demo account temp password when convenient.

## 12. Operational gotchas

- **Commits must OMIT the `Co-Authored-By: Claude` trailer** - the Vercel Hobby
  plan blocks deploys with non-member co-authors. (All commits here already do.)
- **`components/legal.tsx` must stay `"use client"`** - Phosphor icons use
  `createContext`, which fails in a server component.
- **Tailwind v4 utility ordering:** primary/ghost button classes are defined
  padding-free (`BTN_PRIMARY`/`BTN_GHOST`) so callers add `px/py` without
  conflicting utilities.
- Custom `.accent-*` classes are plain CSS (not Tailwind utilities), so `hover:`
  variants do not apply to them.

## 13. Commands

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static prerender; must pass before deploy
git push        # main -> Vercel auto-deploys
```
