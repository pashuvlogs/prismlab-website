"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Globe,
  Sparkle,
  ShieldCheck,
  LockKey,
  UsersThree,
  CurrencyDollarSimple,
  TrendUp,
  ChartLineUp,
  Wallet,
  Receipt,
  ArrowsClockwise,
  DeviceMobile,
  Database,
  Lock,
  Plus,
} from "@phosphor-icons/react";
import { PrismLabMark } from "@/components/Logo";
import { Nav } from "@/components/Nav";
import { Reveal, Stagger, StaggerItem, BrowserFrame, PhoneFrame } from "@/components/ui";
import {
  QuickEntryCard,
  BillReaderGraphic,
  AISummaryCard,
  GoalsGraphic,
  ReconcileGraphic,
  BeyondSpendingCards,
  FireGraphic,
} from "@/components/graphics";

const EASE = [0.16, 1, 0.3, 1] as const;

// Padding-free so callers add their own px/py without Tailwind conflicts.
const BTN_PRIMARY =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-green-on font-semibold text-ink transition-transform hover:-translate-y-[2px] active:translate-y-0";
const BTN_GHOST =
  "inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-1/60 font-medium text-text transition-colors hover:bg-surface-2";

const REQUEST_ACCESS = "mailto:admin@prismlab.app?subject=Pilot%20access%20request";

// Per-feature accent, so the page reads as a spectrum, not a wall of green.
const A = {
  green: "#34D07F",
  sky: "#58C0EE",
  amber: "#F2B657",
  violet: "#A996F7",
  teal: "#35CFB4",
  rose: "#F58AA0",
  slate: "#9DB2C6",
};

/* ================================================================= HERO */

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
      <div className="aura pointer-events-none absolute inset-x-0 -top-24 h-[520px]" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.p
            className="kicker"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Personal finance, done seriously
          </motion.p>

          <motion.h1
            className="mt-5 font-display text-[2.7rem] leading-[1.03] font-bold tracking-tight text-text sm:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
          >
            Money, finally
            <br />
            in <span className="accent-serif">focus</span>.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[33rem] text-lg leading-relaxed text-text-dim"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.14 }}
          >
            The intelligent finance app that pulls every account, currency,
            receipt and goal into one calm, clear view.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
          >
            <a href={REQUEST_ACCESS} className={`${BTN_PRIMARY} px-6 py-3`}>
              Request pilot access
              <ArrowRight size={17} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className={`${BTN_GHOST} px-6 py-3`}>
              See how it works
            </a>
          </motion.div>

          <motion.p
            className="mt-5 font-mono text-[12px] text-text-faint"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            14-day free trial, then $5/month. No card required.
          </motion.p>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <BrowserFrame
                src="/shots/01-dashboard.png"
                url="www.prismlab.app/dashboard"
                alt="PrismLab dashboard with multi-currency balances, income, expenses, savings rate and a cash forecast"
                eager
                crop="none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================== TRUST STRIP */

const PRINCIPLES = [
  { icon: Globe, label: "Multi-currency by design" },
  { icon: Sparkle, label: "Powered by Prism Intelligence" },
  { icon: ShieldCheck, label: "Private by default" },
  { icon: Wallet, label: "Accounts, assets and goals" },
];

function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-surface-1/40">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 md:px-8">
        {PRINCIPLES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-text-dim">
            <Icon size={19} weight="duotone" className="text-green-on" />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =============================================================== PROBLEM */

const GAPS = [
  { head: "Scattered across everything", body: "Different banks, different currencies, plus investments, property and insurance that never talk to each other." },
  { head: "Stuck on this month", body: "Most apps show last week's coffees. They cannot tell you your net worth across currencies, or the year you could retire." },
  { head: "Tedious to keep current", body: "Typing in statements, receipts and policies by hand is the reason most trackers get abandoned by February." },
];

function Problem() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-5xl">
            The money that matters is the hardest to see.
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline md:grid-cols-3">
          {GAPS.map((g) => (
            <StaggerItem key={g.head} className="bg-surface-0 p-8">
              <h3 className="font-display text-lg font-semibold text-text">{g.head}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-dim">{g.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ======================================================= FEATURES INTRO */

function FeaturesIntro() {
  return (
    <section id="features" className="scroll-mt-20 px-5 pt-8 pb-4 md:px-8">
      <div className="mx-auto max-w-[820px] text-center">
        <Reveal>
          <span className="kicker">Features</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] font-bold tracking-tight text-text sm:text-[3.2rem]">
            One app for all of it.
          </h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-text-dim">
            Everyday spending, big goals, and long-term wealth. Prism puts the
            whole picture in one view, so you always know exactly where you stand.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================================================== FEATURE PRIMITIVES */

function FeatureLabel({ n, name }: { n: string; name: string }) {
  return (
    <div className="feature-label">
      Feature {n} <span className="text-text-faint">.</span> {name}
    </div>
  );
}

function PointList({ points }: { points: string[] }) {
  return (
    <Stagger className="mt-8 flex flex-col gap-3">
      {points.map((p) => (
        <StaggerItem key={p} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full accent-soft">
            <Check size={12} weight="bold" className="accent-text" />
          </span>
          <span className="text-[15px] text-text">{p}</span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function FeatureSplit({
  id,
  n,
  name,
  title,
  body,
  points,
  media,
  accent,
  reverse = false,
  tint = false,
}: {
  id?: string;
  n: string;
  name: string;
  title: ReactNode;
  body: string;
  points?: string[];
  media: ReactNode;
  accent?: string;
  reverse?: boolean;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      style={accent ? ({ "--accent": accent } as React.CSSProperties) : undefined}
      className={
        "scroll-mt-20 px-5 py-20 md:px-8 md:py-28 " +
        (tint ? "border-y border-hairline bg-surface-1/25" : "")
      }
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? "lg:order-2" : ""}>{media}</Reveal>
        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <FeatureLabel n={n} name={name} />
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-[2.5rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-text-dim">{body}</p>
          </Reveal>
          {points && <PointList points={points} />}
        </div>
      </div>
    </section>
  );
}

function FeatureFull({
  id,
  n,
  name,
  title,
  body,
  media,
  accent,
  tint = false,
}: {
  id?: string;
  n: string;
  name: string;
  title: ReactNode;
  body: string;
  media: ReactNode;
  accent?: string;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      style={accent ? ({ "--accent": accent } as React.CSSProperties) : undefined}
      className={
        "scroll-mt-20 px-5 py-20 md:px-8 md:py-28 " +
        (tint ? "border-y border-hairline bg-surface-1/25" : "")
      }
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mx-auto max-w-[44rem] text-center">
          <FeatureLabel n={n} name={name} />
          <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-text-dim">{body}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          {media}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================== FINAL FEATURES LIST */

const MORE = [
  { icon: Globe, t: "Multi-currency accounts", d: "NZD, AED, USD and more, side by side." },
  { icon: CurrencyDollarSimple, t: "Live exchange rates", d: "With a durable fallback if a rate feed is down." },
  { icon: TrendUp, t: "Cash-flow forecast", d: "See where the year is heading." },
  { icon: ChartLineUp, t: "Spending analytics", d: "Trends and category comparisons." },
  { icon: UsersThree, t: "Share with permissions", d: "Invite a partner or adviser, safely." },
  { icon: ArrowsClockwise, t: "Account transfers", d: "Move money between accounts, counted once." },
  { icon: Receipt, t: "Document storage", d: "Receipts and policies kept on file." },
  { icon: DeviceMobile, t: "Installs like an app", d: "Add PrismLab to your home screen." },
];

function MoreFeatures() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-[2.5rem]">
            And everything else you would expect.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {MORE.map((m) => (
            <StaggerItem key={m.t}>
              <m.icon size={24} weight="duotone" className="text-green-on" />
              <h3 className="mt-3 font-display text-[15px] font-semibold text-text">{m.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-dim">{m.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =========================================== MULTI-PLATFORM SHOWCASE */

function Platform() {
  return (
    <section className="relative overflow-hidden border-t border-hairline px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <span className="kicker">Everywhere you are</span>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-5xl">
            Open Prism anywhere. Pick up where you left off.
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-lg leading-relaxed text-text-dim">
            A full web app and a native Android app, in sync the moment you
            change something. Start on your laptop, finish on your phone.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <BrowserFrame
                src="/shots/01-dashboard.png"
                url="www.prismlab.app/dashboard"
                alt="PrismLab on the web"
                crop="none"
              />
              <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-text-faint uppercase">
                On the web
              </p>
            </div>
            <div className="lg:col-span-4">
              <PhoneFrame src="/shots/mobile-analytics.png" alt="PrismLab on Android" />
              <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-text-faint uppercase">
                On Android
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================ FIRE */

const FIRE_POINTS = [
  "A short quiz points you to Coast or Full FIRE",
  "The 4% rule turns your real spending into a target",
  "Live net worth pulled across every currency",
];

function FireFinale() {
  return (
    <section id="fire" className="relative scroll-mt-20 overflow-hidden border-t border-hairline px-5 py-24 md:px-8 md:py-32">
      <div className="aura pointer-events-none absolute inset-x-0 -top-10 h-[380px] opacity-70" />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <span className="kicker">The whole point</span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] font-bold tracking-tight text-text sm:text-[3.4rem]">
            So, when can you
            <br />
            actually stop?
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-text-dim">
            PrismLab runs a real Financial Independence model on your own numbers.
            It reads your spending, values your portfolio across every currency,
            and shows the year the math says you are free.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <FireGraphic />
        </Reveal>

        <Stagger className="mx-auto mt-12 flex max-w-[820px] flex-col gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {FIRE_POINTS.map((p) => (
            <StaggerItem key={p} className="flex items-start gap-2.5">
              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-green-on" />
              <span className="text-[14px] text-text-dim">{p}</span>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mx-auto mt-10 max-w-[54ch] text-center text-[13px] leading-relaxed text-text-faint">
          Projections are estimates based on the numbers and assumptions you provide. PrismLab is a personal-finance tool, not a financial adviser, and this is not financial, tax or investment advice.
        </p>
      </div>
    </section>
  );
}

/* ============================================================ SECURITY */

const CONTROLS = [
  { icon: Database, t: "Isolated at the database", d: "Every table enforces row-level security. Your records are scoped to your account at the data layer, not just in the app." },
  { icon: Lock, t: "Encrypted in transit and at rest", d: "Traffic is encrypted with TLS, your data is encrypted at rest, and sensitive vault fields carry an extra layer of app-level encryption. Secrets never live in source code." },
  { icon: Sparkle, t: "AI that stays private", d: "Prism Intelligence processes your documents to serve you, and never trains models on your financial data." },
  { icon: UsersThree, t: "Sharing you control", d: "Grant a partner or adviser access to specific sections, as view-only or full edit, and revoke it any time." },
  { icon: LockKey, t: "Least-privilege access", d: "Access follows the principle of least privilege, with audit trails on sign-in and sensitive actions." },
  { icon: ShieldCheck, t: "Never sold. Ever.", d: "We do not sell your data or share it for advertising. Your money is your business, and only yours." },
];

function Security() {
  return (
    <section id="security" className="scroll-mt-20 border-t border-hairline bg-surface-1/25 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[44rem]">
          <span className="kicker">Security</span>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-5xl">
            Your money data. Yours alone.
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-text-dim">
            Personal finance only works if it is private. PrismLab is built so
            that no one, not another user and not us, can browse your records.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {CONTROLS.map((c) => (
            <StaggerItem key={c.t}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-on/12">
                <c.icon size={22} weight="duotone" className="text-green-on" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text">{c.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-dim">{c.d}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <a
            href="/security"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-0 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-green-on/40 hover:text-green-on"
          >
            Read the full security policy
            <ArrowRight size={15} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================= PRICING */

const INCLUDED = [
  "Unlimited accounts in any currency",
  "Track & budget, quick entry and the bill reader",
  "Prism Intelligence: statement import and monthly summaries",
  "Goals, analytics and the FIRE calculator",
  "Insurance, fixed deposits, property and family vault",
  "PDF, CSV and Excel reports",
];

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <span className="kicker">Pricing</span>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-5xl">
            One plan. Everything included.
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-lg text-text-dim">
            Try it free for 14 days. No tiers to decode, no features held back.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-[560px]">
          <div className="relative overflow-hidden rounded-card border border-green-on/30 bg-surface-1 p-8 md:p-10">
            <div className="aura pointer-events-none absolute inset-x-0 -top-20 h-64 opacity-70" />
            <div className="relative">
              <div className="flex items-center gap-2 text-green-on">
                <PrismLabMark variant="dark" size={26} />
                <span className="font-display font-semibold text-text">PrismLab</span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-6xl font-bold tracking-tight text-text">$5</span>
                <span className="mb-2 text-text-dim">/ month</span>
              </div>
              <p className="mt-2 font-mono text-[13px] text-green-on">
                14-day free trial . no card required
              </p>

              <a href={REQUEST_ACCESS} className={`${BTN_PRIMARY} mt-7 w-full px-6 py-3.5`}>
                Request pilot access
                <ArrowRight size={17} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <div className="mt-8 h-px bg-hairline" />

              <ul className="mt-8 flex flex-col gap-3.5">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-on/15">
                      <Check size={12} weight="bold" className="text-green-on" />
                    </span>
                    <span className="text-[15px] text-text">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== FAQ */

const FAQS = [
  {
    q: "Does PrismLab connect to my bank?",
    a: "No, and that is deliberate. You import a statement (CSV, PDF or photo) or add entries yourself. There are no bank logins and no third party holding your credentials. It is a privacy choice as much as a design one.",
  },
  {
    q: "Which currencies does it support?",
    a: "Any of them. Hold accounts in NZD, AED, USD, INR or anything else, and PrismLab converts to your base currency for net worth, budgets and the FIRE projection, using live rates with a durable fallback.",
  },
  {
    q: "Is there a mobile app?",
    a: "PrismLab runs in any modern browser and installs to your home screen. A dedicated Android app is part of the launch; on iPhone, the web app covers everything today.",
  },
  {
    q: "What can Prism Intelligence see?",
    a: "Only what you send it: a statement, a receipt, or your figures for a summary. It is used to produce your result and never to train AI models, and every suggestion is something you review before it saves.",
  },
  {
    q: "Where is my data stored?",
    a: "In a managed, encrypted PostgreSQL database, isolated to your account with row-level security so no other user, and no one on our team, can casually browse it. See the Security page for the detail.",
  },
  {
    q: "Can I cancel?",
    a: "Any time. The 14-day trial needs no card, so you only pay if you decide to stay, and cancelling stops any future charge.",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <Reveal className="text-center">
          <span className="kicker">FAQ</span>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-text sm:text-5xl">
            The questions worth asking.
          </h2>
        </Reveal>
        <Stagger className="mt-12 flex flex-col gap-3">
          {FAQS.map((f) => (
            <StaggerItem key={f.q}>
              <details className="group rounded-card border border-hairline bg-surface-1/60 px-6 py-5 transition-colors hover:border-green-on/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-semibold text-text [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    weight="bold"
                    className="shrink-0 text-green-on transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-text-dim">{f.a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* =========================================================== FINAL CTA */

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
      <div className="aura pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[760px] text-center">
        <Reveal>
          <div className="mx-auto mb-8 w-fit">
            <PrismLabMark variant="dark" size={56} animated />
          </div>
          <h2 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-text sm:text-6xl">
            Try Prism <span className="accent-serif">free</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[42ch] text-lg text-text-dim">
            Three minutes to set up. A lifetime of clarity to follow. No card required.
          </p>
          <div className="mt-9 flex justify-center">
            <a href={REQUEST_ACCESS} className={`${BTN_PRIMARY} px-8 py-4 text-lg`}>
              Request pilot access
              <ArrowRight size={19} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-5 font-mono text-[12px] text-text-faint">
            14-day free trial, then $5/month.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================== FOOTER */

function Footer() {
  return (
    <footer className="border-t border-hairline px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <PrismLabMark variant="dark" size={26} />
          <span className="wordmark text-lg text-text">
            Prism<span className="accent">Lab</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-dim">
          <a href="#features" className="hover:text-text">Features</a>
          <a href="#pricing" className="hover:text-text">Pricing</a>
          <a href="#faq" className="hover:text-text">FAQ</a>
          <a href="/security" className="hover:text-text">Security</a>
          <a href="/privacy" className="hover:text-text">Privacy</a>
          <a href="/terms" className="hover:text-text">Terms</a>
          <a href="mailto:admin@prismlab.app" className="hover:text-text">Contact</a>
        </div>
        <div className="font-mono text-[12px] text-text-faint">© 2026 PrismLab</div>
      </div>
      <p className="mx-auto mt-8 max-w-[760px] text-center font-mono text-[11px] leading-relaxed text-text-faint">
        PrismLab is a personal-finance tool, not a financial adviser or a bank. It does not provide financial, tax, legal or investment advice.
      </p>
    </footer>
  );
}

/* ================================================================ PAGE */

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <FeaturesIntro />

      <FeatureSplit
        n="01"
        name="Track & Budget"
        title="Every transaction, against every budget."
        body="See what you spent and what you planned, side by side, in any currency. PrismLab sorts each transaction, learns your merchants, and shows exactly where the month is going."
        points={[
          "Budget versus actual for every category, month by month",
          "Live multi-currency, so NZD, AED and USD sit together",
          "Rules that auto-categorise transactions as they land",
        ]}
        media={
          <BrowserFrame
            src="/shots/09-budget.jpeg"
            url="www.prismlab.app/budget"
            alt="Budget versus actual grid across every category and month"
            crop="none"
          />
        }
        accent={A.green}
        reverse
      />

      <FeatureSplit
        n="02"
        name="Voice Entry"
        title="Just say it. Prism handles the rest."
        body="Speak a transaction the way you would tell a friend. Prism Intelligence catches the amount, merchant, category and date, and drops it in the right place."
        points={[
          "Say it out loud, or type if you prefer",
          "Understands plain, natural phrasing",
          "Review and tweak before it saves",
        ]}
        media={<QuickEntryCard />}
        accent={A.sky}
        tint
      />

      <FeatureFull
        n="03"
        name="Bill Reader"
        title="Snap the receipt. Skip the form."
        body="Point your camera at any receipt, or upload a PDF bill. Prism Intelligence reads the merchant, total and date, then files it under the right category in seconds."
        media={<BillReaderGraphic />}
        accent={A.amber}
      />

      <FeatureSplit
        n="04"
        name="Prism Intelligence"
        title="Your month, summarised in seconds."
        body="Prism Intelligence reads your whole financial picture and writes a short, plain-language briefing. What went well, what to watch, and what to do next. No dashboards to decode."
        points={[
          "Wins worth celebrating",
          "Anomalies worth a second look",
          "Suggestions for the month ahead",
        ]}
        media={<AISummaryCard />}
        accent={A.violet}
        reverse
        tint
      />

      <FeatureFull
        n="05"
        name="Goals"
        title="Goals that move with you."
        body="Set the big things, a trip, a home, an emergency fund, and PrismLab does the math. As your spending shifts, the timelines update on their own."
        media={<GoalsGraphic />}
        accent={A.teal}
      />

      <FeatureSplit
        id="import"
        n="06"
        name="Statement Import"
        title="Drop in a statement. Get a clean ledger."
        body="Upload a CSV, PDF or photo. Prism Intelligence cleans the merchant names, categorises every line, flags duplicates and transfers, then reconciles against your closing balance. Nothing posts until it balances."
        points={[
          "Cleaned merchants and smart categories",
          "Duplicate and transfer detection",
          "Balance reconciliation before anything is saved",
          "No bank logins — you bring the data in, by design",
        ]}
        media={<ReconcileGraphic />}
        accent={A.green}
        tint
      />

      <FeatureFull
        n="07"
        name="Beyond Spending"
        title="Everything you own, in one place."
        body="Net worth is more than a bank balance. PrismLab holds the assets most apps ignore, so the whole picture, across every currency, finally lives in one app."
        media={<BeyondSpendingCards />}
        accent={A.rose}
      />

      <FeatureSplit
        n="08"
        name="Reports"
        title="Reports you can actually hand over."
        body="Generate clean income statements, category breakdowns and net-worth summaries, then export to PDF, CSV or Excel for your accountant, your partner, or your own records."
        points={[
          "Income statements and net-worth summaries",
          "Budget versus actual with variance",
          "Export to PDF, CSV and Excel",
        ]}
        media={
          <BrowserFrame
            src="/shots/15-reports.jpeg"
            url="www.prismlab.app/reports"
            alt="A PrismLab income statement ready to export"
            crop="none"
          />
        }
        accent={A.slate}
        tint
      />

      <MoreFeatures />
      <Platform />
      <FireFinale />
      <Security />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
