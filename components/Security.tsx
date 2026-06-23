"use client";

import React from "react";
import { Reveal } from "./motion";

const CELLS = [
  {
    title: "Sobre tu infraestructura",
    body: "Operamos por API sobre tus sistemas. No migramos ni nos quedamos con tus datos.",
  },
  {
    title: "El consumo de IA es tuyo",
    body: "El procesamiento y los costos de IA quedan dentro de tu estructura tecnológica.",
  },
  {
    title: "Accesos y trazabilidad",
    body: "Roles, permisos y registro de quién ve y hace qué dentro del sistema.",
  },
  {
    title: "Capa superior, no caja negra",
    body: "Te mostramos cómo se interpreta y de dónde sale cada recomendación.",
  },
];

export default function Security() {
  return (
    <section id="seguridad" className="scroll-mt-20 bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* left */}
          <Reveal>
            <p className="kicker mb-5 text-muted">Seguridad</p>
            <h2 className="font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.05] text-ink">
              Tu información nunca sale de tu control.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[clamp(1rem,1.3vw,1.1rem)] leading-relaxed text-muted">
              AXON se monta sobre tu infraestructura, no la reemplaza. Tus datos
              se quedan donde están y tú decides quién ve qué.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-xl bg-ink px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-ink/85"
            >
              Agendar diagnóstico
            </a>
          </Reveal>

          {/* right grid 2x2 */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {CELLS.map((c) => (
                <div key={c.title} className="bg-paper p-7">
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-md border border-line">
                    <span className="h-2 w-2 rounded-full bg-axon-yellow" />
                  </div>
                  <h4 className="mb-2 text-[15px] font-semibold tracking-tight text-ink">
                    {c.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
