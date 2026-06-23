"use client";

import React from "react";

/** Lista de vigilancia / alertas tempranas con análisis escrito por IA. */
const ALERTS = [
  {
    sev: "r",
    title: "Cliente C — DSO 60 → 123 días",
    body: "Desviación de cobranza fuera de lo pactado. $2.1M proyectados de faltante de caja en 50 días.",
  },
  {
    sev: "y",
    title: "Cliente B — DSO 45 → 74 días",
    body: "Patrón de pago deteriorándose tres meses seguidos. Riesgo de ciclo de caja.",
  },
  {
    sev: "y",
    title: "Margen neto −38.2% YoY",
    body: "La utilidad crece más lento que la venta. Primera señal de erosión de margen.",
  },
];

const SEV: Record<string, { c: string; t: string }> = {
  r: { c: "#e0463a", t: "Crítico" },
  y: { c: "#f2c200", t: "Atención" },
};

export default function AlertasIA() {
  return (
    <div className="bg-[#0c0d11] p-5 text-white/90">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-serif text-[18px] text-white">Alertas tempranas</p>
        <span className="rounded-full bg-axon-yellow/90 px-2 py-0.5 text-[10px] font-semibold text-black tnum">
          543 activas
        </span>
      </div>

      <div className="space-y-2.5">
        {ALERTS.map((a) => (
          <div
            key={a.title}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            style={{ borderLeft: `3px solid ${SEV[a.sev].c}` }}
          >
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[12.5px] font-medium text-white">{a.title}</p>
              <span
                className="rounded px-1.5 py-0.5 text-[9px] font-semibold"
                style={{ background: `${SEV[a.sev].c}22`, color: SEV[a.sev].c }}
              >
                {SEV[a.sev].t}
              </span>
            </div>
            <p className="text-[11.5px] leading-relaxed text-white/55">{a.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-axon-yellow/30 bg-axon-yellow/[0.06] p-3">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-axon-yellow">
          ¿Qué significa y qué hacer?
        </p>
        <p className="text-[11.5px] leading-relaxed text-white/70">
          Tres clientes concentran $4.8M retenidos fuera del ciclo. AXON
          recomienda activar un plan de cobranza escalonado y renegociar
          condiciones antes del día 7.
        </p>
      </div>
    </div>
  );
}
