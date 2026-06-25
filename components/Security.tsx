"use client";

import React from "react";
import { Reveal } from "./motion";
import SystemCarousel from "./SystemCarousel";

export default function Security() {
  return (
    <section id="seguridad" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="kicker mb-5 text-muted">Seguridad</p>
            <h2 className="font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.05] text-ink">
              <span className="block">Tu información nunca sale</span>
              <span className="block">de tu control.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[clamp(1rem,1.3vw,1.1rem)] leading-relaxed text-muted">
              AXON se monta sobre tu infraestructura, no la reemplaza. Tus datos
              se quedan donde están y tú decides quién ve qué.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-xl bg-ink px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-ink/85"
            >
              Agendar diagnóstico
            </a>
          </div>
        </Reveal>

        <SystemCarousel />
      </div>
    </section>
  );
}
