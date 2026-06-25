"use client";

import React, { useState } from "react";
import { Reveal } from "./motion";

/* Capturas del sistema con marco de color. Para añadir/quitar, edita SLIDES. */
const SLIDES = [
  { src: "/Asset%206seccion%202.png", label: "Dashboard CEO · Semáforo del negocio" },
  { src: "/hero-kpis-v4.jpg", label: "Dirección General · KPIs corporativos" },
  { src: "/2x/Asset%208ultima%20seccion.png", label: "Panel de control · infraestructura" },
];

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SystemCarousel() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);

  return (
    <section className="mt-28 sm:mt-36">
      <Reveal>
        <h2 className="text-center font-serif text-[clamp(2rem,4.4vw,3.4rem)] font-normal leading-[1.04] text-ink">
          ¿Cómo se ve tu sistema AXON?
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 block sm:mt-12">
        <div className="relative mx-auto max-w-[1080px]">
          <div className="overflow-hidden rounded-2xl border border-line">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {SLIDES.map((s) => (
                <div key={s.src} className="w-full shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.label}
                    className="block h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* flechas */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-sm backdrop-blur transition hover:bg-paper sm:left-4"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-sm backdrop-blur transition hover:bg-paper sm:right-4"
          >
            <Chevron dir="right" />
          </button>
        </div>

        {/* puntos */}
        <div className="mt-6 flex items-center justify-center gap-2.5">
          {SLIDES.map((s, k) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Ir a la imagen ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                k === i ? "w-6 bg-ink" : "w-2 bg-line hover:bg-muted/50"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
