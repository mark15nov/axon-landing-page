"use client";

import React from "react";

/** Plan A3 de AXON-OS — responsables, fechas, KPIs, seguimiento. */
const TASKS = [
  {
    who: "Miguel Fernández",
    role: "Dir. Finanzas",
    task: "Actualizar flujo de caja proyectado",
    due: "48 h",
    st: "En curso",
    stc: "#f2c200",
  },
  {
    who: "Ana Gómez",
    role: "Cobranza",
    task: "Contacto escalonado 24/48/72 h",
    due: "Día 3",
    st: "Hoy",
    stc: "#4f6bf0",
  },
  {
    who: "Roberto Díaz",
    role: "Comercial",
    task: "Renegociar condiciones Cliente C",
    due: "Día 7",
    st: "Pendiente",
    stc: "#9a9aa3",
  },
];

export default function PlanA3() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            AXON-OS · Plan A3 — Kaizen
          </p>
          <p className="font-serif text-[18px] leading-tight">
            Recuperar $2.5M en 30 días
          </p>
        </div>
        <span className="rounded-full bg-axon-yellow px-2.5 py-1 text-[10px] font-semibold text-black">
          PDCA activo
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-line">
        <div className="grid grid-cols-[1.4fr_1.6fr_0.6fr_0.7fr] bg-paper px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
          <span>Responsable</span>
          <span>Acción</span>
          <span>Límite</span>
          <span>Estado</span>
        </div>
        {TASKS.map((t) => (
          <div
            key={t.who}
            className="grid grid-cols-[1.4fr_1.6fr_0.6fr_0.7fr] items-center border-t border-line px-3 py-2.5 text-[11.5px]"
          >
            <div>
              <p className="font-medium">{t.who}</p>
              <p className="text-[10px] text-muted">{t.role}</p>
            </div>
            <span className="text-muted">{t.task}</span>
            <span className="tnum">{t.due}</span>
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-medium"
              style={{ background: `${t.stc}1f`, color: t.stc === "#9a9aa3" ? "#6c6c72" : t.stc }}
            >
              {t.st}
            </span>
          </div>
        ))}
      </div>

      {/* targets + automation */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["Cliente C", "123 → 90 días"],
          ["Cliente B", "74 → 60 días"],
          ["Cliente A", "42 → 35 días"],
        ].map(([c, m]) => (
          <div key={c} className="rounded-lg border border-line p-2.5">
            <p className="text-[10px] text-muted">{c}</p>
            <p className="text-[12px] font-medium tnum">{m}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-lg bg-paper px-3 py-2 text-[11px] text-muted">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25d366] text-[10px] text-white">
          ✓
        </span>
        Tablero diario con semáforo por WhatsApp a las 08:00 · sin respuesta →
        escala a Dirección General
      </div>
    </div>
  );
}
