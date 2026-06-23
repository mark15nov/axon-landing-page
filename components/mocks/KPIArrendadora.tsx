"use client";

import React from "react";
import { GrowBar } from "../motion";

/** KPIs arrendadora (claro) — cada KPI con barra contra meta. */
const KPIS = [
  { label: "Cartera total", value: "$1.96B", sub: "+20.7% YoY", pct: 92 },
  { label: "Originada 2026", value: "$183M", sub: "24 contratos · 11 clientes", pct: 64 },
  { label: "Rentas mensuales", value: "$5.6M", sub: "recurrente", pct: 78 },
  { label: "Margen financiero", value: "60.0%", sub: "meta >55%", pct: 100 },
  { label: "EBITDA", value: "35.3%", sub: "meta >30%", pct: 88 },
  { label: "ROE", value: "14.6%", sub: "meta >12%", pct: 100 },
  { label: "NPL", value: "2.8%", sub: "cobertura 142%", pct: 28 },
  { label: "DSO", value: "12 días", sub: "meta <15", pct: 80 },
];

export default function KPIArrendadora() {
  return (
    <div className="bg-white p-5 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-serif text-[18px]">Arrendamiento financiero · KPIs</p>
        <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-muted">
          Cost-to-income 33.4%
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-lg border border-line p-2.5">
            <p className="text-[9.5px] text-muted">{k.label}</p>
            <p className="mb-1.5 mt-0.5 text-[15px] font-medium tnum">{k.value}</p>
            <GrowBar
              pct={k.pct}
              color={k.pct >= 100 ? "#16a34a" : k.label === "NPL" ? "#f2c200" : "#4f6bf0"}
              height={5}
            />
            <p className="mt-1 text-[9px] text-muted tnum">{k.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
