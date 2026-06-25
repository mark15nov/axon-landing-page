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

        <Reveal delay={0.1} className="mt-14 block">
          <div className="grid divide-y divide-line-dark border-y border-line-dark md:grid-cols-4 md:divide-x md:divide-y-0">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`py-9 md:py-10 ${
                  i === 0 ? "md:pr-8" : i === STEPS.length - 1 ? "md:pl-8" : "md:px-8"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="tnum font-serif text-[1.5rem] font-normal leading-none text-axon-yellow">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-line-dark" />
                </div>
                <h3 className="mt-6 text-[17px] font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[30ch] text-[13.5px] leading-relaxed text-white/55">
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
