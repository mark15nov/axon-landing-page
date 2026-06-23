"use client";

import React from "react";
import { Reveal, ClipLines } from "./motion";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Revisamos tus fuentes de información y detectamos qué decisiones estás dejando sobre la mesa.",
  },
  {
    n: "02",
    title: "Integración",
    body: "Conectamos por API tus sistemas actuales. Tu información dispersa, por fin en una sola vista.",
  },
  {
    n: "03",
    title: "Inteligencia",
    body: "Activamos la capa que interpreta tu operación: desviaciones, causas y recomendaciones.",
  },
  {
    n: "04",
    title: "Ejecución",
    tag: "",
    body: "Convertimos la inteligencia en planes medibles con responsables, fechas y seguimiento diario.",
  },
];

export default function Process() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <p className="kicker mb-6 text-white/45">Cómo empezamos</p>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,4.4rem)] font-normal leading-[1.02]">
          <ClipLines
            lines={[
              <>Tu sistema operando en semanas,</>,
              <span className="text-white/45" key="2">
                no en años.
              </span>,
            ]}
          />
        </h2>

        <Reveal delay={0.1} className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-ink p-7 sm:p-8">
                <p className="font-serif text-[2.2rem] font-normal leading-none text-white/25 tnum">
                  {s.n}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <h3 className="text-[17px] font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span className="rounded bg-axon-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-black">
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
