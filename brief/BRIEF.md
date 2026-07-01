# PrismLab — Marketing Homepage Brief
*Step 1 deliverable (gstack deep-dive). Grounded only in verified, current functionality of the `prismfinal` codebase. No invented metrics.*

---

## 1. What PrismLab is (one-liner)

**PrismLab is a personal-finance app for people who take money seriously** — every account, in every currency, plus the goals that actually matter (including FIRE), in one clear picture of where you stand and when you can stop working.

Positioning north-star (verbatim from the internal handoff): *"one clear picture of where they stand and when they can stop working."*

## 2. Who it's for

- People who track money deliberately: savers, investors, FIRE-minded planners.
- **Multi-currency lives** — expats and cross-border households. (Pilot audience: Dubai/Gulf expats; real users span NZ, UAE, India, Canada, US.)
- Households managing not just spending, but **assets** — investments, fixed deposits, property, insurance, and family/legacy documents.

## 3. The problem (homepage problem section)

Money that matters is scattered and dumb:
- It lives across **many banks, currencies, and asset types** that don't talk to each other.
- Most finance apps stop at *this month's spending*. They can't tell you about **net worth across currencies**, or **when you could actually retire**.
- Entering and cleaning data (statements, receipts, policies) is manual and tedious.
- Nothing reads the whole picture and tells you, in plain words, **what to do next**.

Qualitative framing only — do **not** cite the old deck's invented "average household juggles four banks, two cards…" statistic.

## 4. The product (verified feature set)

### Two hero features (constraint: present as LIVE, not roadmap)

1. **FIRE calculator** — `app/(app)/fire`, `lib/fire/*`
   - A short quiz routes you to **Coast FIRE** or **Full FIRE**.
   - Uses the **4% rule** to turn annual spending into a target number.
   - Builds a **multi-currency net-worth portfolio**: accounts, investments, fixed deposits, and *income-producing* property (rentals/commercial/cultivation — primary home and idle land excluded), with **live FX** (durable last-known-rate fallback).
   - Projection chart + plain-language insights. Annual expenses derived from your real 12-month history.

2. **Statement import** — `app/(app)/transactions/import`, `app/api/import/*`
   - Upload a **CSV, PDF, or photo** of a statement.
   - **Claude** parses it (CSV column auto-detection that it remembers per bank; PDF text or native document read; vision for images).
   - **Review screen** with **duplicate detection** (±7 days) and **balance reconciliation** against the statement's closing balance.
   - You approve, then post. Nothing lands without your review.

### The AI layer (all Anthropic Claude, server-side)

- **Natural-language entry** — type "lunch 24 dollars at Pret" and Claude (Haiku 4.5) fills amount, merchant, type, category, date. (`app/api/nl-parse`)
- **Receipt & document scanning (OCR)** — snap or upload a receipt and Claude (Sonnet 4.6) pre-fills the transaction. Same engine reads **insurance policies, fixed-deposit certificates, and identity/legal documents** into structured fields. (`app/api/ocr`, `insurance/ocr`, `fd/ocr`, `vault/ocr`)
- **Monthly AI insights** — Claude reads your month (income, spend by category, savings rate, top merchants, goal progress) and writes 5–8 plain-language insights: warnings, tips, wins. Cached 24h. You can also **ask it questions** about your finances. (`app/api/insights`)

### Core surfaces (all real pages)

- **Dashboard** — balances, recent activity, insights, cash forecast, budget status, goals, spending breakdown. Multi-currency aware.
- **Transactions + rules** — filter/edit; build categorisation rules (contains/equals/starts/ends) to auto-categorise.
- **Budgets** — per-category budgets, budget-vs-actual, reorderable.
- **Analytics** — spending trends, category comparison, top merchants, balance trends.
- **Goals** — targets with a **timeline computed from your real savings rate** (est. time to goal from your last 3 months). *(Manual targets with automatic timelines — NOT "auto-rebalancing.")*
- **Reports** — export an income statement to **PDF and CSV** (Excel export also present).
- **Insurance** — policies, OCR intake, documents, premium tracking + reminders (overdue alerts).
- **Fixed deposits** — track FDs, OCR certificates, maturity reminders.
- **Properties** — holdings with usage type (rental/commercial/primary/idle), market value, documents.
- **Family Vault** — secure store for identity/legal/digital-legacy documents + emergency contacts.
- **Sharing** — invite others with **per-section, read-only or read/write** permissions (Finance, Insurance, FD, Properties, Vault).
- **Settings** — profile, base currency, light/dark theme, fiscal years, categories, rules.
- **Multi-currency accounts** — accounts in any currency; balances rolled into a base currency; per-currency views.

## 5. Truthful differentiators (safe to say)

- **It goes past spending to net worth and freedom** — multi-currency net worth + a real FIRE model. Most trackers can't.
- **It reads your data and writes back** — plain-language monthly insights, not just charts.
- **AI does the tedious parts** — natural-language entry, receipt/statement/document OCR, all powered by **Anthropic Claude**, always behind a human review step.
- **Built for many currencies and many asset types**, not a single checking account.
- **Web app, installable to your home screen** (manifest present). Works in any browser.

## 6. Platform reality (avoid false claims)

- It is a **Next.js web app** (React 19, Tailwind, Supabase), **installable as a PWA** via `public/manifest.json`.
- There are **NO native iOS/Android apps**. Do not claim an App Store / Play Store presence.

## 7. Pricing reality (⚠️ decision needed — see below)

- Prices are **not hardcoded** in the product. They live in an admin-tunable `app_settings` row.
- Current *defaults* only: **14-day trial**, **"$5" monthly (USD) label**, payment provider currently **mock**.
- Because these are unconfirmed defaults, the site must **not** advertise "$5/mo" as a committed price without the owner's explicit sign-off. Options: qualitative pricing ("free trial, one simple subscription"), show the current defaults with sign-off, or omit a price and use a "Request pilot access" CTA. **Flagged for the owner.**

## 8. DO NOT CARRY FORWARD — fabricated / unverified claims from the old deck

| Old deck claim | Status |
|---|---|
| "Native iOS and Android apps" | ❌ FALSE — web app / PWA only |
| Team pedigree: "Veterans from Wise, Monzo, Notion, Anthropic; Auckland HQ; Sydney/London/Manila" | ❌ UNVERIFIED — treat as fabricated, omit |
| "Average household juggles four banks, two cards, three subscription apps…" | ❌ Invented stat — use qualitative framing |
| "10 receipt scans/month" free tier | ❌ Not real — no per-tier scan limits in code |
| "Auto-rebalancing goals" | ❌ Not real — goals are manual targets with computed timelines |
| Kids' allowance, bill-split automation, open-banking, "investment insights" | ❌ Not in the codebase — do not list |
| Any app-store rating, star count, beta-user count, "X% growth" | ❌ None exist — never invent |

## 9. Suggested homepage section flow (for the taste build)

1. **Hero** — "Money, in focus. Down to the year you're free." + Tight Hand logo + primary CTA (Request pilot access / Start free trial).
2. **Problem** — scattered money across banks/currencies/assets; apps stop at spending.
3. **The one view** — dashboard screenshot; multi-currency net worth.
4. **FIRE** (hero feature) — quiz → Coast/Full → multi-currency portfolio → projection. Screenshot.
5. **Statement import** (hero feature) — CSV/PDF/photo → Claude → review. Screenshot.
6. **AI that does the tedious parts** — NL entry, receipt/doc OCR, monthly insights. Screenshots.
7. **Everything you own, tracked** — insurance, fixed deposits, properties, family vault.
8. **Share safely** — per-section permissions.
9. **Pricing** — per decision in §7.
10. **Final CTA** — pilot / trial.

---

*Source of truth for content: this brief. Source of truth for visual identity: `PrismLab Tight Hand - Handoff.html`. Screenshots: `../screenshots/`.*
