"use client";

import React from "react";
import PaintedBackground from "./PaintedBackground";
import BrowserFrame from "./BrowserFrame";
import Screenshot from "./Screenshot";
import { Reveal } from "./motion";
import CockpitAutomotriz from "./mocks/CockpitAutomotriz";
import KPIArrendadora from "./mocks/KPIArrendadora";
import CentroControl from "./mocks/CentroControl";
import PnLManufactura from "./mocks/PnLManufactura";
import BITablero from "./mocks/BITablero";

const SECTORS = [
  "Automotriz",
  "Arrendamiento",
  "Manufactura",
  "Logística",
  "Servicios financieros",
  "Construcción",
  "Retail",
  "Agroindustria",
];

const GALLERY = [
  { label: "Automotriz · red nacional de distribuidores", shot: "cockpit-automotriz", mock: <CockpitAutomotriz />, url: "cockpit.axon.mx", dark: true },
  { label: "Arrendamiento financiero", shot: "kpi-arrendadora", mock: <KPIArrendadora />, url: "axon.mx/arrendadora", dark: false },
  { label: "Logística y proyectos", shot: "logistica", mock: <BITablero />, url: "axon.mx/logistica", dark: false },
  { label: "Servicio técnico industrial", shot: "centro-control", mock: <CentroControl />, url: "axon.mx/servicio", dark: false },
  { label: "Manufactura", shot: "pnl-manufactura", mock: <PnLManufactura />, url: "axon.mx/manufactura", dark: true },
];

export default function SocialProof() {
  return (
    <section id="sistemas" className="relative scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* heading + partners, asymmetric */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="kicker mb-5 text-muted">Respaldo</p>
            <h2 className="max-w-[16ch] font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-normal leading-[1.04] text-ink">
              Hecho con 25 años de experiencia en management.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker mb-3 text-[0.62rem] text-muted/70">
              Trabajamos cerca de
            </p>
            <p className="max-w-[42ch] text-[clamp(1rem,1.3vw,1.18rem)] leading-relaxed text-ink/80">
              Fondos de inversión, family offices, SOFOMES, SOFIPOS,
              consultoras y cámaras empresariales e industriales.
            </p>
          </Reveal>
        </div>

        {/* sectors — editorial index, no chips, no marquee */}
        <Reveal className="mt-16 block">
          <p className="kicker mb-6 text-[0.62rem] text-muted">Diseñado para</p>
          <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {SECTORS.map((s, i) => (
              <div
                key={s}
                className="flex items-baseline gap-3 border-b border-line py-6 pr-4 sm:border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0"
              >
                <span className="font-serif text-[13px] tabular-nums text-axon-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(0.95rem,1.1vw,1.05rem)] font-medium tracking-tight text-ink">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* gallery — stacked vertically, full width */}
      <div className="mx-auto mt-20 max-w-[1040px] px-5 sm:px-8">
        <p className="kicker mb-8 text-[0.62rem] text-muted">
          Sistemas reales · prueba de capacidad
        </p>
        <div className="space-y-12 sm:space-y-16">
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} delay={0.04 * i} className="block">
              <div className="relative overflow-hidden rounded-2xl">
                <PaintedBackground variant={i % 2 === 0 ? "block" : "soft"} />
                <div className="relative p-5 sm:p-10">
                  <BrowserFrame url={g.url} dark={g.dark}>
                    <Screenshot name={g.shot} alt={g.label}>
                      {g.mock}
                    </Screenshot>
                  </BrowserFrame>
                </div>
              </div>
              <p className="mt-4 text-[13.5px] font-medium tracking-tight text-ink">
                {g.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
