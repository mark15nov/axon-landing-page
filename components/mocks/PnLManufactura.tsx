"use client";

import React from "react";

/** P&L manufactura (oscuro). */
const ROWS = [
  { label: "Ventas mes", value: "$24.95M", delta: "−13.7% vs forecast", up: false },
  { label: "Costo", value: "$19.09M", delta: "costeo $1.509/min", up: null },
  { label: "Utilidad bruta", value: "$5.86M", delta: "margen 23.5%", up: null },
  { label: "Utilidad operativa", value: "$3.39M", delta: "−41.6% vs forecast", up: false },
];

export default function PnLManufactura() {
  return (
    <div className="bg-[#0c0d11] p-5 text-white/90">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-serif text-[18px] text-white">P&amp;L Manufactura · Mes</p>
        <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-white/50">
          Margen bruto 28.6%
        </span>
      </div>

      <div className="space-y-1.5">
        {ROWS.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
          >
            <span className="text-[12px] text-white/60">{r.label}</span>
            <div className="text-right">
              <p className="text-[15px] font-medium tnum">{r.value}</p>
              <p
                className={`text-[10px] tnum ${
                  r.up === false ? "text-axon-yellow" : "text-white/40"
                }`}
              >
                {r.delta}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* waterfall hint */}
      <div className="mt-3 flex items-end gap-2 px-1">
        {[
          { h: 80, c: "#4f6bf0" },
          { h: 62, c: "#3a4ad0" },
          { h: 24, c: "#2bb0c4" },
          { h: 14, c: "#f2c200" },
        ].map((b, i) => (
          <div key={i} className="flex-1">
            <div
              className="w-full rounded-sm"
              style={{ height: b.h, background: b.c, opacity: 0.85 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
