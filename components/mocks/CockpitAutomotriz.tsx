"use client";

import React from "react";
import { CountUp } from "../motion";

/**
 * Cockpit financiero automotriz — dark terminal cockpit.
 * Replaceable by /public/screenshots/cockpit-automotriz.png
 */
const KPIS = [
  { label: "Ventas YTD", value: "$544.99M", delta: "+12.9%", up: true },
  { label: "Unidades nuevas", value: "1,039", delta: "+7.9%", up: true },
  { label: "Seminuevos", value: "130", delta: "-9.0%", up: false },
  { label: "Utilidad bruta", value: "$77.23M", delta: "+9.1%", up: true },
  { label: "Utilidad neta", value: "$7.21M", delta: "-38.2%", up: false },
  { label: "Margen bruto", value: "14.2%", delta: "−0.5 pp", up: false },
];

const NAV = [
  "Resumen ejecutivo",
  "Alertas tempranas",
  "Mercado",
  "Comparativa 3 años",
  "30 grupos",
  "24 estados",
];

export default function CockpitAutomotriz() {
  return (
    <div className="grid grid-cols-[150px_1fr] bg-[#0c0d11] text-white/90">
      {/* sidebar */}
      <aside className="hidden border-r border-white/10 p-4 sm:block">
        <div className="mb-4 flex items-center gap-1.5 text-[13px] font-semibold">
          axon<span className="h-1 w-1 rounded-full bg-axon-yellow" />
          <span className="ml-1 text-[9px] font-normal uppercase tracking-widest text-white/40">
            cockpit
          </span>
        </div>
        <ul className="space-y-1.5 text-[11px]">
          {NAV.map((n, i) => (
            <li
              key={n}
              className={`flex items-center justify-between rounded px-2 py-1.5 ${
                i === 0
                  ? "bg-white/10 text-white"
                  : "text-white/45 hover:text-white/70"
              }`}
            >
              <span>{n}</span>
              {i === 1 && (
                <span className="rounded bg-axon-yellow/90 px-1 text-[9px] font-semibold text-black tnum">
                  543
                </span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* main */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Resumen ejecutivo · Red nacional
            </p>
            <p className="font-serif text-[19px] leading-tight">
              Grupo Automotriz — Consolidado
            </p>
          </div>
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/50">
            YTD 2026
          </span>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <p className="text-[10px] text-white/45">{k.label}</p>
              <p className="mt-1 text-[17px] font-medium tnum">{k.value}</p>
              <p
                className={`mt-0.5 text-[11px] tnum ${
                  k.up ? "text-emerald-400" : "text-axon-yellow"
                }`}
              >
                {k.up ? "▲" : "▼"} {k.delta}
              </p>
            </div>
          ))}
        </div>

        {/* IA analysis */}
        <div className="mt-3 rounded-lg border border-axon-yellow/30 bg-axon-yellow/[0.06] p-3">
          <p className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-axon-yellow">
            <span className="h-1.5 w-1.5 rounded-full bg-axon-yellow" />
            Análisis AXON
          </p>
          <p className="text-[12px] leading-relaxed text-white/70">
            El portafolio crece de forma desbalanceada: las unidades nuevas
            empujan la venta, pero la utilidad neta cae{" "}
            <span className="text-axon-yellow tnum">−38.2%</span> YoY. La
            utilidad crece más lento que las ventas — primera señal de erosión
            de margen.
          </p>
        </div>

        {/* mini sparkline footer */}
        <div className="mt-3 flex items-end gap-1.5">
          {[40, 52, 48, 61, 55, 70, 66, 78, 72, 84].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-white/15"
              style={{ height: h * 0.5 }}
            >
              <div
                className="w-full rounded-sm bg-gradient-to-t from-[#4f6bf0] to-[#8a98f7]"
                style={{ height: "100%", opacity: 0.3 + i * 0.07 }}
              />
            </div>
          ))}
          <span className="ml-2 self-center text-[10px] text-white/40 tnum">
            <CountUp to={544.99} prefix="$" suffix="M" decimals={2} />
          </span>
        </div>
      </div>
    </div>
  );
}
