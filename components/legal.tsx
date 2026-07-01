"use client";

import type { ReactNode } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { PrismLabMark } from "./Logo";

export function LegalShell({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-[100dvh] px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-[760px]">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-dim transition-colors hover:text-text"
        >
          <ArrowLeft size={15} weight="bold" />
          <span className="inline-flex items-center gap-2">
            <PrismLabMark variant="dark" size={20} />
            <span className="wordmark text-[15px] text-text">
              Prism<span className="accent">Lab</span>
            </span>
          </span>
        </a>

        <h1 className="mt-10 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-text-dim">
          {intro}
        </p>
        <p className="mt-4 font-mono text-[12px] text-text-faint">
          Last updated {updated}
        </p>

        <div className="mt-12 flex flex-col gap-11 pb-16">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-text">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-[15px] leading-relaxed text-text-dim">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 flex flex-col gap-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-green-on" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
