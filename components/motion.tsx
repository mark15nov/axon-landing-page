"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Generic reveal: fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container + item variants for lists. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Title that reveals line-by-line via clip-path. Pass lines as nodes.
 * Observes a stable wrapper (never translated) so the trigger is reliable. */
export function ClipLines({
  lines,
  className = "",
  immediate = false,
}: {
  lines: React.ReactNode[];
  className?: string;
  /** play on mount (above-the-fold) instead of on scroll-into-view */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // For immediate (above-the-fold), flip false→true after mount so the state
  // change reliably triggers the entrance even if mount timing glitches.
  const play = immediate ? mounted : inView;
  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: play ? "0%" : "110%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 * i }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Count-up number that animates when in view. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(
        v.toLocaleString("es-MX", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
    });
  }, [spring, decimals]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/** Horizontal bar that grows from 0 to pct when in view. */
export function GrowBar({
  pct,
  color = "var(--color-cobalt)",
  track = "rgba(0,0,0,0.08)",
  delay = 0,
  height = 8,
  className = "",
}: {
  pct: number;
  color?: string;
  track?: string;
  delay?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-full ${className}`}
      style={{ height, background: track }}
    >
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min(pct, 100)}%` }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      />
    </div>
  );
}

export { motion, useInView, useTransform };
