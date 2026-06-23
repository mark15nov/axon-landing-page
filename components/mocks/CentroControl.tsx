"use client";

import React from "react";

/** Centro de control operativo (servicio técnico) — ESTADO: FUERA DE CONTROL. */
const ROWS = [
  { ind: "Órdenes vencidas", val: "16 (36%)", meta: "0%", st: "r" },
  { ind: "Cumplimiento SLA", val: "50%", meta: "90% contractual", st: "r" },
  { ind: "Órdenes abiertas", val: "24", meta: "18", st: "y" },
  { ind: "Equipos fuera de servicio", val: "7", meta: "≤2", st: "r" },
];
const COLOR: Record<string, string> = { r: "#e0463a", y: "#f2c200", g: "#16a34a" };

export default function CentroControl() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-serif text-[18px]">Centro de control operativo</p>
        <span className="rounded-md bg-[#e0463a] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Estado general: fuera de control
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-line">
        <div className="grid grid-cols-[1.5fr_0.9fr_1fr_0.5fr] bg-paper px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
          <span>Indicador</span>
          <span>Actual</span>
          <span>Meta</span>
          <span></span>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.ind}
            className="grid grid-cols-[1.5fr_0.9fr_1fr_0.5fr] items-center border-t border-line px-3 py-2.5 text-[11.5px]"
          >
            <span>{r.ind}</span>
            <span className="font-medium tnum">{r.val}</span>
            <span className="text-muted tnum">{r.meta}</span>
            <span
              className="ml-auto h-2.5 w-2.5 rounded-full"
              style={{ background: COLOR[r.st] }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
