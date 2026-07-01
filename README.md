# PrismLab marketing website

Marketing site for **prismlab.app**. Next.js 16 (App Router) + Tailwind v4 + Motion.
Dark, single-accent brand from the "PrismLab Tight Hand" handoff (Sora / DM Sans /
Space Mono, green `#15A35E` / `#34D07F`, the five-card fan mark).

All copy is grounded in the real PrismLab product. Screenshots in `/public/shots`
are real captures of the running app. No fabricated stats.

## Local preview

```bash
npm install
npm run dev        # http://localhost:4321
```

## Production build

```bash
npm run build      # static-prerendered, output in .next
npm run start      # serve the build on :4321
```

## Structure

```
app/
  layout.tsx      fonts + metadata + favicon
  page.tsx        the full homepage (all sections + motion)
  globals.css     brand tokens (@theme) + base styles
components/
  Logo.tsx        PrismLabMark / PrismLabLogo (fan mark, animated entrance)
  Nav.tsx         sticky nav
  ui.tsx          Reveal / Stagger / BrowserFrame primitives
public/
  favicon.svg     app icon (mono fan on green tile)
  shots/          real app screenshots used across the page
brief/BRIEF.md    the content brief the copy is built from
screenshots/      original captures + MANIFEST.md
```

## Deploying to prismlab.app (Vercel)

The main app already runs on Vercel + the `prismlab.app` domain (dev on
`dev.prismlab.app`). Recommended: deploy this marketing site as its **own Vercel
project** and point the apex/root at it, keeping the app on a subdomain.

1. Push this folder to a Git repo (or `vercel` CLI from here).
2. In Vercel: New Project, framework auto-detects **Next.js**. Build command
   `next build`, output handled automatically. No env vars needed (fully static).
3. Add the domain **`prismlab.app`** (and `www`) to this project.
   - If the app currently answers on the apex, move the apex here and keep the
     app on `app.` / `dev.` subdomains. The in-page CTAs already point at
     `#pricing`; wire them to the real signup URL (e.g. `https://app.prismlab.app/signup`)
     before launch.
4. DNS (Cloudflare): apex `A`/`CNAME` per Vercel's instructions, proxy set to
   **DNS only (grey cloud)** so Vercel can verify + issue SSL.

### Before pointing the live domain

- Replace CTA hrefs (`#pricing` / `#top`) with the real signup/app URL.
- Confirm the `$5/month` + `14-day trial` figures are still the intended public
  pricing (they came from the app's current defaults).
- Add a real Open Graph image at `/public/og.png` (1200x630) if desired; metadata
  already references `prismlab.app`.
