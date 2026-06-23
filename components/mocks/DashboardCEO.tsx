"use client";

import React from "react";

/** Dashboard CEO — semáforo del negocio. Replaceable by /public/screenshots/dashboard-ceo.png */
const INDICATORS = [
  { label: "Ingresos YTD", value: "$26,740,000", sub: "+12.4% vs 2025", st: "g" },
  { label: "Utilidad neta", value: "$850,281", sub: "margen 3.2%", st: "y" },
  { label: "Caja", value: "$4,326,580", sub: "runway 0.8 meses", st: "y" },
  { label: "Pipeline", value: "$24,960,000", sub: "36 oportunidades", st: "g" },
  { label: "CxC vencida", value: "$1,580,000", sub: "crítico", st: "r" },
  { label: "Margen bruto", value: "23.5%", sub: "−1.1 pp", st: "y" },
];

const COLOR: Record<string, string> = {
  g: "#16a34a",
  y: "#f2c200",
  r: "#e0463a",
};

export default function DashboardCEO() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Dashboard CEO · Semáforo del negocio
          </p>
          <p className="font-serif text-[19px] leading-tight">
            16 indicadores críticos
          </p>
        </div>
        <div className="flex gap-2 text-[11px] tnum">
          <span className="flex items-center gap-1">
            <i className="h-2 w-2 rounded-full" style={{ background: "#16a34a" }} />6
          </span>
          <span className="flex items-center gap-1">
            <i className="h-2 w-2 rounded-full" style={{ background: "#f2c200" }} />8
          </span>
          <span className="flex items-center gap-1">
            <i className="h-2 w-2 rounded-full" style={{ background: "#e0463a" }} />2
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {INDICATORS.map((ind) => (
          <div
            key={ind.label}
            className="rounded-lg border border-line bg-paper/60 p-3"
            style={{ borderLeft: `3px solid ${COLOR[ind.st]}` }}
          >
            <p className="text-[10px] text-muted">{ind.label}</p>
            <p className="mt-1 text-[16px] font-medium tnum">{ind.value}</p>
            <p
              className="mt-0.5 text-[10px] tnum"
              style={{ color: ind.st === "g" ? "#16a34a" : COLOR[ind.st] }}
            >
              {ind.sub}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg border border-[#e0463a]/30 bg-[#e0463a]/[0.05] px-3 py-2">
        <p className="text-[11px] text-[#c0392b]">
          ⚠ CxC vencida en rojo crítico — $1.58M fuera del ciclo de cobranza
        </p>
        <span className="text-[10px] font-semibold text-[#c0392b]">Ver plan →</span>
      </div>
    </div>
  );
}
