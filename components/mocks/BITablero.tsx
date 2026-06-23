"use client";

import React from "react";
import { GrowBar } from "../motion";

/** Tablero BI de KPIs — capa de integración. */
const KPIS = [
  { label: "Ventas mes", value: "$24.95M", pct: 86, color: "#4f6bf0" },
  { label: "Cobranza", value: "$18.40M", pct: 74, color: "#2bb0c4" },
  { label: "Margen bruto", value: "23.5%", pct: 59, color: "#6f7ff0" },
  { label: "Inventario rot.", value: "4.2x", pct: 70, color: "#4f6bf0" },
];

export default function BITablero() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-serif text-[18px]">Tablero BI · Consolidado operativo</p>
        <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-muted">
          7 fuentes conectadas
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-lg border border-line p-3">
            <p className="text-[10px] text-muted">{k.label}</p>
            <p className="mb-2 mt-0.5 text-[18px] font-medium tnum">{k.value}</p>
            <GrowBar pct={k.pct} color={k.color} height={6} />
          </div>
        ))}
      </div>

      {/* big area chart */}
      <div className="mt-4 rounded-lg border border-line p-3">
        <p className="mb-2 text-[10px] text-muted">Tendencia 12 meses · ingresos</p>
        <svg viewBox="0 0 300 70" className="h-20 w-full">
          <defs>
            <linearGradient id="bi-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f6bf0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f6bf0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,55 L25,48 L50,52 L75,38 L100,42 L125,30 L150,34 L175,22 L200,28 L225,16 L250,20 L275,10 L300,14 L300,70 L0,70 Z"
            fill="url(#bi-area)"
          />
          <path
            d="M0,55 L25,48 L50,52 L75,38 L100,42 L125,30 L150,34 L175,22 L200,28 L225,16 L250,20 L275,10 L300,14"
            fill="none"
            stroke="#4f6bf0"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
