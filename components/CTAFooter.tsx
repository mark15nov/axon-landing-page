"use client";

import React from "react";
import { Reveal } from "./motion";

const COLS = [
  {
    title: "Producto",
    links: ["AXON-SIE", "AXON-OS", "Integraciones", "Módulos on-demand"],
  },
  {
    title: "Recursos",
    links: ["Casos", "AXON Due Diligence", "Management Academy", "Diagnóstico"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Contacto", "México · LATAM", "LinkedIn"],
  },
];

export default function CTAFooter() {
  return (
    <>
      {/* CTA */}
      <section id="contacto" className="relative scroll-mt-20 overflow-hidden">
        {/* fondo naranja (atardecer) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cta-bg-orange.jpg')" }}
        />
        <div aria-hidden className="absolute inset-0 bg-black/15" />
        <div className="relative mx-auto max-w-[1000px] px-6 py-28 text-center sm:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-normal leading-[1.04] text-white">
              Tu empresa ya genera la información. Nosotros la convertimos en
              decisiones.
            </h2>
            <a
              href="mailto:contacto@axon.mx"
              className="mt-10 inline-flex rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-white/90"
            >
              Agendar diagnóstico
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-ink pt-20 text-white">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-10 pb-16 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/axon-white.png" alt="AXON" className="h-7 w-auto" />
              <p className="mt-4 max-w-[34ch] text-[13.5px] leading-relaxed text-white/50">
                Sistemas de Inteligencia Empresarial a la medida. Conectamos tu
                información dispersa y la convertimos en decisiones y ejecución
                medible.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-white/60 transition hover:border-white/40 hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 110 3.51 2.5 2.5 0 014.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.38 0-2.74 1.85-2.74 3.77V24h-4V8z" />
                  </svg>
                </a>
                <span className="rounded-full border border-line-dark px-3 py-1.5 text-[12px] text-white/50">
                  ES · MX
                </span>
              </div>
            </div>

            {COLS.map((c) => (
              <div key={c.title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {c.title}
                </p>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13.5px] text-white/60 transition hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-3 border-t border-line-dark py-6 text-[12px] text-white/40 sm:flex-row sm:items-center">
            <span>© 2026 AXON · Sistemas de Inteligencia Empresarial</span>
            <span>México → LATAM</span>
          </div>
        </div>

        {/* giant wordmark bleeding off the bottom */}
        <div
          aria-hidden
          className="pointer-events-none select-none overflow-hidden"
        >
          <div className="flex items-baseline justify-center">
            <span className="translate-y-[18%] text-[clamp(7rem,26vw,22rem)] font-semibold leading-none tracking-tight text-white/[0.05]">
              axon
            </span>
            <span className="mb-[1.2vw] ml-1 h-[2vw] w-[2vw] rounded-full bg-axon-yellow/30" />
          </div>
        </div>
      </footer>
    </>
  );
}
