"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import { PrismLabLogo } from "./Logo";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "FIRE", href: "#fire" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="rounded-full bg-surface-0/70 py-1.5 pr-4 pl-1.5 backdrop-blur-md"
          aria-label="PrismLab home"
        >
          <PrismLabLogo variant="dark" size={30} animated />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-hairline bg-surface-1/70 px-2 py-1.5 backdrop-blur-md md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-text-dim transition-colors hover:bg-surface-2 hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://dev.prismlab.app/signup"
            className="group inline-flex items-center gap-1.5 rounded-full bg-green-on px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-[1px]"
          >
            Start free trial
            <ArrowRight
              size={15}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          className="rounded-full border border-hairline bg-surface-1/70 p-2 backdrop-blur-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 rounded-card border border-hairline bg-surface-1/95 p-3 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-text-dim hover:bg-surface-2 hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://dev.prismlab.app/signup"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-green-on px-4 py-3 font-semibold text-ink"
            >
              Start free trial <ArrowRight size={15} weight="bold" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
