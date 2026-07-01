"use client";

import { motion, useReducedMotion } from "motion/react";

/*
  PrismLab "Tight Hand" mark. Geometry is fixed by the brand handoff:
  five 32x50 rounded cards (rx=7) fanned at -34 -17 0 17 34 degrees about
  the pivot translate(60 88) in a 120x120 viewBox. Only the fills change
  between variants. Usage rule respected: never stretch/skew/rotate the fan;
  the entrance only fades + rises the cards into their fixed positions.
*/

const FILLS: Record<string, string[]> = {
  light: ["#0E1512", "#0C6B3F", "#15A35E", "#2DD48A", "#8FE9BE"],
  dark: ["#0E7A46", "#149E5D", "#2DD48A", "#6FE3AE", "#B7F2D4"],
};
const ANG = [-34, -17, 0, 17, 34];
const MONO_OPACITY = [0.34, 0.5, 0.7, 0.85, 1];

export function PrismLabMark({
  variant = "dark",
  size = 40,
  mono = false,
  animated = false,
}: {
  variant?: "light" | "dark";
  size?: number;
  mono?: boolean;
  animated?: boolean;
}) {
  const reduce = useReducedMotion();
  const fills = FILLS[variant] ?? FILLS.dark;
  const doAnimate = animated && !reduce;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="PrismLab"
    >
      <g transform="translate(60 88)">
        {ANG.map((a, i) => {
          const commonFill = mono ? "#ffffff" : fills[i];
          const fillOpacity = mono ? MONO_OPACITY[i] : 1;
          return (
            <g key={i} transform={a ? `rotate(${a})` : undefined}>
              {doAnimate ? (
                <motion.rect
                  x={-16}
                  width={32}
                  height={50}
                  rx={7}
                  fill={commonFill}
                  initial={{ opacity: 0, y: -44 }}
                  animate={{ opacity: fillOpacity, y: -52 }}
                  transition={{
                    delay: 0.12 + i * 0.08,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ) : (
                <rect
                  x={-16}
                  y={-52}
                  width={32}
                  height={50}
                  rx={7}
                  fill={commonFill}
                  fillOpacity={fillOpacity}
                />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function PrismLabLogo({
  variant = "dark",
  size = 32,
  animated = false,
}: {
  variant?: "light" | "dark";
  size?: number;
  animated?: boolean;
}) {
  const dark = variant === "dark";
  return (
    <span className="inline-flex items-center" style={{ gap: size * 0.3 }}>
      <PrismLabMark variant={variant} size={size} animated={animated} />
      <span
        className="wordmark"
        style={{
          fontSize: size * 0.66,
          color: dark ? "#F4F6F3" : "#0E1512",
          lineHeight: 1,
        }}
      >
        Prism<span className="accent">Lab</span>
      </span>
    </span>
  );
}
