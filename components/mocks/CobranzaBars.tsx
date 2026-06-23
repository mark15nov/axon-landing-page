"use client";

import React from "react";
import { motion, EASE } from "../motion";

/** Caso real cobranza — barras DSO que crecen al scrollear. */
const CLIENTS = [
  { name: "Cliente A", pact: 30, real: 42 },
  { name: "Cliente B", pact: 45, real: 74 },
  { name: "Cliente C", pact: 60, real: 123 },
];
const MAX = 130;

export default function CobranzaBars() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Caso real · Cobranza
          </p>
          <p className="font-serif text-[18px] leading-tight">
            Días de pago: pactado vs real
          </p>
        </div>
        <span className="rounded-full bg-[#e0463a]/10 px-2.5 py-1 text-[10px] font-semibold text-[#c0392b]">
          $4.8M atorados
        </span>
      </div>

      <div className="space-y-4">
        {CLIENTS.map((c, i) => (
          <div key={c.name}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="font-medium">{c.name}</span>
              <span className="text-muted tnum">
                {c.pact} → <span className="font-semibold text-[#c0392b]">{c.real}</span> días
              </span>
            </div>
            {/* pactado */}
            <div className="relative h-2 rounded-full bg-paper">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-cobalt/40"
                initial={{ width: 0 }}
                whileInView={{ width: `${(c.pact / MAX) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 * i }}
              />
            </div>
            {/* real */}
            <div className="relative mt-1 h-2 rounded-full bg-paper">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: c.real > c.pact * 1.5 ? "#e0463a" : "#f2c200" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(c.real / MAX) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.2 + 0.1 * i }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        Faltante de caja proyectado de{" "}
        <span className="font-semibold text-ink tnum">$2.1M</span> en 50 días.
        AXON-OS activa el plan para recuperar{" "}
        <span className="font-semibold text-ink tnum">$2.5M</span> en 30 días.
      </p>
    </div>
  );
}
