"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Fade + rise when the block scrolls into view. Motivated: sequences content
   as the reader arrives, establishing hierarchy top-to-bottom. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : staggerParent}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={reduce ? undefined : staggerChild}>
      {children}
    </motion.div>
  );
}

/* Honest product proof: a real screenshot inside a restrained browser chrome. */
export function BrowserFrame({
  src,
  alt,
  url = "www.prismlab.app",
  className = "",
  eager = false,
  crop = "top",
  maxH = 560,
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  eager?: boolean;
  crop?: "top" | "none";
  maxH?: number;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-[16px] border border-hairline bg-surface-2 " +
        "shadow-[0_2px_4px_rgba(0,0,0,0.3),0_30px_70px_-40px_rgba(0,0,0,0.9)] " +
        className
      }
    >
      <div className="flex h-9 items-center gap-2 border-b border-hairline bg-surface-1 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
        <span className="mx-auto rounded-md bg-surface-2 px-3 py-1 font-mono text-[11px] text-text-faint">
          {url}
        </span>
        <span className="h-2.5 w-2.5" />
      </div>
      <div
        className={crop === "top" ? "overflow-hidden" : ""}
        style={crop === "top" ? { maxHeight: maxH } : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          className="block w-full"
        />
      </div>
    </div>
  );
}

/* Phone mockup for the real mobile screenshot (multi-platform section). */
export function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={
        "relative mx-auto w-[256px] rounded-[40px] border border-hairline bg-surface-2 p-2.5 " +
        "shadow-[0_2px_4px_rgba(0,0,0,0.4),0_40px_90px_-40px_rgba(0,0,0,0.9)] " +
        className
      }
    >
      <div className="overflow-hidden rounded-[32px] bg-surface-0">
        {/* status bar so the app content sits clear of the top edge */}
        <div className="flex items-center justify-between bg-surface-0 px-5 pt-2.5 pb-1.5">
          <span className="font-mono text-[10px] text-text">9:41</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-text-dim/60" />
            <span className="h-2 w-2 rounded-full bg-text-dim/60" />
            <span className="h-2.5 w-4 rounded-[3px] border border-text-dim/60" />
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  );
}
