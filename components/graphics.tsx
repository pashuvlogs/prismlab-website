"use client";

import {
  Check,
  ArrowRight,
  Sparkle,
  Microphone,
  TrendUp,
  Warning,
  Airplane,
  House,
  Bank,
  ShieldCheck,
  LockKey,
} from "@phosphor-icons/react";
import { PrismLabMark } from "./Logo";

const AMBER = "#f7b955";

/* ---------------------------------------------- 02 · Quick Entry (voice) */

const WAVE = [8, 15, 22, 12, 27, 17, 9, 23, 14, 8, 19, 26, 13, 17, 10, 21, 15, 9, 24, 12];

export function QuickEntryCard() {
  const fields = [
    { label: "Amount", value: "$42.00" },
    { label: "Merchant", value: "Federal Deli" },
    { label: "Category", value: "Dining Out" },
    { label: "Date", value: "Yesterday" },
  ];
  return (
    <div className="rounded-card border border-hairline bg-surface-1 p-6 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.9)]">
      <div className="mb-4 flex items-center gap-2">
        <Microphone size={15} weight="fill" className="accent-text" />
        <span className="feature-label !tracking-[0.18em]">Voice entry</span>
      </div>

      {/* the mic + live waveform */}
      <div className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-0 px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full accent-soft">
          <Microphone size={17} weight="fill" className="accent-text" />
        </span>
        <div className="flex h-7 flex-1 items-center gap-[3px]">
          {WAVE.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full accent-fill"
              style={{ height: h, opacity: 0.55 + (h / 27) * 0.45 }}
            />
          ))}
        </div>
      </div>

      {/* what it heard */}
      <div className="mt-3 rounded-xl bg-surface-0 px-4 py-3 text-[14px] text-text">
        &ldquo;lunch with the team, 42 dollars at Federal Deli yesterday&rdquo;
      </div>

      {/* what it filled */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.label} className="rounded-xl border accent-ring accent-soft-2 px-4 py-3">
            <div className="font-mono text-[10px] tracking-wider text-text-faint uppercase">
              {f.label}
            </div>
            <div className="mt-1 font-medium accent-text">{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------- 03 · Bill Reader visual */

export function BillReaderGraphic() {
  const rows = [
    ["Avocado x2", "$5.80"],
    ["Sourdough", "$6.50"],
    ["Free-range eggs", "$8.20"],
    ["Coffee 250g", "$10.30"],
  ];
  const extracted = [
    ["Merchant", "Fresh Market"],
    ["Total", "$30.80"],
    ["Category", "Groceries"],
    ["Date", "10 May 2026"],
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
      {/* the paper receipt */}
      <div className="w-[230px] -rotate-2 rounded-[10px] bg-paper p-5 font-mono text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
        <div className="text-center text-[13px] font-bold tracking-wider">FRESH MARKET</div>
        <div className="mt-1 text-center text-[10px] text-ink/50">10 / 05 / 2026</div>
        <div className="my-3 border-t border-dashed border-ink/25" />
        {rows.map(([a, b]) => (
          <div key={a} className="flex justify-between py-1 text-[12px]">
            <span className="text-ink/80">{a}</span>
            <span>{b}</span>
          </div>
        ))}
        <div className="my-3 border-t border-dashed border-ink/25" />
        <div className="flex justify-between text-[13px] font-bold">
          <span>TOTAL</span>
          <span>$30.80</span>
        </div>
      </div>

      <ArrowRight size={26} weight="bold" className="hidden rotate-90 accent-text sm:block sm:rotate-0" />

      {/* the extracted data (total, not line items) */}
      <div className="w-[250px] rounded-card border accent-ring bg-surface-1 p-5 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)]">
        <div className="mb-3 flex items-center gap-1.5">
          <Sparkle size={14} weight="fill" className="accent-text" />
          <span className="feature-label !tracking-[0.18em]">Captured</span>
        </div>
        {extracted.map(([k, v]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-hairline py-2 text-[13px] last:border-0"
          >
            <span className="text-text-dim">{k}</span>
            <span className="font-medium text-text">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------- 04 · Prism Intelligence summary */

export function AISummaryCard() {
  return (
    <div className="rounded-card border border-hairline bg-surface-1 p-6 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.9)] sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PrismLabMark variant="dark" size={22} />
          <span className="font-display font-semibold text-text">
            Prism <span className="rainbow-text">Intelligence</span>
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-faint">July 2026</span>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-text">
        A strong month. You saved just over half of what you earned, your best
        rate so far this year, with spending steady across the essentials.
      </p>

      <div className="mt-5 flex flex-col gap-4">
        <SummaryBlock
          icon={<TrendUp size={14} weight="bold" />}
          color="var(--color-green-on)"
          title="Worth celebrating"
          items={[
            "Dining came in under budget",
            "You reached your Japan Trip goal ahead of plan",
          ]}
        />
        <SummaryBlock
          icon={<Warning size={14} weight="bold" />}
          color={AMBER}
          title="Worth a look"
          items={[
            "An annual insurance premium is due next month",
            "A subscription charge you may not recognise",
          ]}
        />
        <SummaryBlock
          icon={<ArrowRight size={14} weight="bold" />}
          color="var(--color-mint)"
          title="Plan ahead"
          items={["Move this month's surplus toward your House Deposit"]}
        />
      </div>
    </div>
  );
}

function SummaryBlock({
  icon,
  color,
  title,
  items,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div
        className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-wider uppercase"
        style={{ color }}
      >
        {icon}
        {title}
      </div>
      <ul className="mt-2 flex flex-col gap-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[13.5px] text-text-dim">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: color }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------ 05 · Goals cards */

const GOALS = [
  { icon: Airplane, name: "Japan Trip", saved: 2400, target: 6000, pct: 40, note: "On track . Sep 2026" },
  { icon: ShieldCheck, name: "Emergency Fund", saved: 12240, target: 18000, pct: 68, note: "On track . Nov 2026" },
  { icon: House, name: "House Deposit", saved: 40800, target: 120000, pct: 34, note: "On track . 2028" },
];

export function GoalsGraphic() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {GOALS.map((g) => (
        <div key={g.name} className="rounded-card border border-hairline bg-surface-1 p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl accent-soft">
              <g.icon size={18} weight="duotone" className="accent-text" />
            </span>
            <span className="font-display font-semibold text-text">{g.name}</span>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="font-display text-xl font-bold text-text">
              ${g.saved.toLocaleString()}
            </span>
            <span className="text-sm text-text-faint">/ ${g.target.toLocaleString()}</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-0">
            <div className="h-full rounded-full accent-fill" style={{ width: `${g.pct}%` }} />
          </div>
          <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-text-faint">
            <span className="accent-text">{g.pct}% saved</span>
            <span>{g.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------- 06 · Statement import reconcile */

export function ReconcileGraphic() {
  const cleaned = [
    { m: "Coffee Culture", c: "Dining Out", a: "-$8.50" },
    { m: "Tower Insurance", c: "Insurance", a: "-$299.00" },
    { m: "Salary . Kiwibank", c: "Income", a: "+$5,300.00" },
  ];
  const lines = [
    ["Balance in app (before import)", "NZ$13,115.03"],
    ["Net of 15 transactions", "+NZ$1,492.28"],
    ["Expected closing balance", "NZ$14,607.31"],
    ["Statement closing balance", "NZ$14,607.31"],
  ];
  return (
    <div className="rounded-card border border-hairline bg-surface-1 p-5 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.9)] sm:p-6">
      <div className="mb-4 flex flex-col gap-2">
        {cleaned.map((r) => (
          <div key={r.m} className="flex items-center justify-between rounded-xl bg-surface-0 px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-[13.5px] font-medium text-text">{r.m}</span>
              <span className="rounded-md accent-soft px-2 py-0.5 font-mono text-[9.5px] tracking-wide accent-text uppercase">
                {r.c}
              </span>
            </div>
            <span className={"font-mono text-[13px] " + (r.a.startsWith("+") ? "accent-text" : "text-text-dim")}>
              {r.a}
            </span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-hairline bg-surface-0 p-4">
        {lines.map(([k, v]) => (
          <div key={k} className="flex justify-between py-1.5 text-[13px]">
            <span className="text-text-dim">{k}</span>
            <span className="font-mono text-text">{v}</span>
          </div>
        ))}
        <div className="my-2 border-t border-hairline" />
        <div className="flex items-center justify-between">
          <span className="font-medium text-text">Variance</span>
          <span className="font-mono accent-text">NZ$0.00</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl accent-soft py-2.5 accent-text">
        <Check size={16} weight="bold" />
        <span className="text-[13.5px] font-medium">Reconciled. 15 transactions ready to post.</span>
      </div>
    </div>
  );
}

/* --------------------------------------------- 07 · Beyond Spending cards */

const ASSETS = [
  { icon: ShieldCheck, name: "Insurance", meta: "3 policies", total: "AED 7,200 + NZ$3,590 / yr", note: "Renewal reminders before a premium slips." },
  { icon: Bank, name: "Fixed Deposits", meta: "2 active", total: "AED 50,000 + NZ$20,000", note: "Rates and maturities tracked across banks." },
  { icon: House, name: "Property", meta: "4 holdings", total: "Auckland . Dubai . Kerala", note: "Market value and documents in one place." },
  { icon: LockKey, name: "Family Vault", meta: "3 documents", total: "Passports . deeds . contacts", note: "Everything important, kept together and secure." },
];

export function BeyondSpendingCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {ASSETS.map((a) => (
        <div
          key={a.name}
          className="flex flex-col rounded-card border border-hairline bg-surface-1 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl accent-soft">
              <a.icon size={22} weight="duotone" className="accent-text" />
            </span>
            <span className="font-mono text-[11px] text-text-faint">{a.meta}</span>
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-text">{a.name}</h3>
          <div className="mt-1 font-mono text-[13px] accent-text">{a.total}</div>
          <p className="mt-3 text-[14px] leading-relaxed text-text-dim">{a.note}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------- FIRE finale graphic */

export function FireGraphic() {
  const steps = [
    { label: "Your real annual spending", value: "$62,000", sub: "read from your own transactions" },
    { label: "The 4% rule", value: "× 25", sub: "the amount that safely funds it" },
    { label: "Your FIRE number", value: "$1.55M", sub: "the target that sets you free", highlight: true },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
      <div className="flex flex-col gap-3">
        {steps.map((s, i) => (
          <div key={s.label}>
            <div
              className={
                "flex items-center justify-between rounded-card border px-5 py-4 " +
                (s.highlight ? "border-green-on/40 bg-green-on/[0.08]" : "border-hairline bg-surface-1")
              }
            >
              <div>
                <div className="text-[13px] text-text-dim">{s.label}</div>
                <div className="mt-0.5 font-mono text-[11px] text-text-faint">{s.sub}</div>
              </div>
              <div className={"font-display text-2xl font-bold " + (s.highlight ? "text-green-on" : "text-text")}>
                {s.value}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1 text-text-faint">
                <ArrowRight size={16} weight="bold" className="rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-card border border-hairline bg-surface-1 p-6">
        <div className="flex items-center justify-between">
          <span className="font-display font-semibold text-text">Your path to freedom</span>
          <span className="font-mono text-[11px] text-green-on">Full FIRE . age 49</span>
        </div>
        <FireCurve />
        <div className="mt-3 flex justify-between font-mono text-[11px] text-text-faint">
          <span>Age 34</span>
          <span>Age 49</span>
        </div>
      </div>
    </div>
  );
}

function FireCurve() {
  return (
    <svg viewBox="0 0 320 150" className="mt-4 w-full" role="img" aria-label="Projected portfolio growth reaching the FIRE target">
      <defs>
        <linearGradient id="fireFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D07F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34D07F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="24" x2="320" y2="24" stroke="#34D07F" strokeOpacity="0.35" strokeDasharray="4 4" />
      <text x="4" y="18" fill="#8fe9be" fontSize="9" fontFamily="monospace">FIRE target</text>
      <path d="M0,140 C90,132 150,120 210,86 C250,64 285,36 320,24 L320,150 L0,150 Z" fill="url(#fireFill)" />
      <path d="M0,140 C90,132 150,120 210,86 C250,64 285,36 320,24" fill="none" stroke="#34D07F" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="320" cy="24" r="4" fill="#34D07F" />
    </svg>
  );
}
