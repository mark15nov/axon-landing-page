"use client";

import React from "react";
import { motion } from "../motion";

/** Dispersed sources → central AXON node, with animated connecting lines. */
const SOURCES = [
  { label: "ERP", x: 12, y: 20 },
  { label: "CRM", x: 84, y: 16 },
  { label: "Excel", x: 8, y: 54 },
  { label: "PDF", x: 88, y: 50 },
  { label: "Bancos", x: 18, y: 84 },
  { label: "RH", x: 80, y: 86 },
  { label: "Facturación", x: 50, y: 8 },
  { label: "Inventario", x: 50, y: 92 },
];
const CX = 50;
const CY = 50;

export default function SourcesDiagram() {
  return (
    <div className="relative aspect-[16/11] w-full bg-[#0c0d11] p-2">
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="src-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4f6bf0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8a98f7" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {SOURCES.map((s, i) => (
          <motion.line
            key={s.label}
            x1={s.x}
            y1={s.y}
            x2={CX}
            y2={CY}
            stroke="url(#src-line)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
          />
        ))}
      </svg>

      {/* source chips */}
      {SOURCES.map((s, i) => (
        <motion.div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/15 bg-white/[0.05] px-2 py-1 text-[10px] font-medium text-white/65 backdrop-blur"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 * i }}
        >
          {s.label}
        </motion.div>
      ))}

      {/* central AXON node */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle, #2b3ad0 0%, #1a1f7a 80%)",
          boxShadow: "0 0 0 6px rgba(79,107,240,0.12), 0 0 40px rgba(79,107,240,0.5)",
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.5 }}
      >
        <span className="flex items-baseline gap-0.5 text-[15px] font-semibold text-white">
          axon
          <span className="h-1 w-1 rounded-full bg-axon-yellow" />
        </span>
      </motion.div>
    </div>
  );
}
