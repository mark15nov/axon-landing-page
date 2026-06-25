"use client";

import React from "react";
import { Reveal } from "./motion";

export default function SocialProof() {
  return (
    <section id="sistemas" className="relative scroll-mt-20 bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div>
            <div className="border-b border-line-dark pb-12">
              <h2 className="font-serif text-[clamp(2.8rem,7vw,6.6rem)] font-normal leading-[0.98] text-white">
                Ventaja competitiva
              </h2>
            </div>

            <div className="grid divide-y divide-line-dark border-b border-line-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              <div className="py-9 lg:pr-10">
                <div className="flex items-end gap-4">
                  <span
                    className="inline-block bg-cover bg-center bg-clip-text pb-2 pt-1 font-serif text-[clamp(4rem,8vw,7rem)] font-normal leading-none text-transparent"
                    style={{ backgroundImage: "url('/cta-bg-orange.jpg')" }}
                  >
                    +25
                  </span>
                  <span className="pb-3 text-[15px] font-medium leading-tight text-white/58">
                    años de experiencia
                    <br />
                    en management
                  </span>
                </div>
              </div>

              <div className="py-9 lg:px-10">
                <p className="font-serif text-[clamp(1.55rem,2.8vw,2.45rem)] leading-tight text-white">
                  Tecnologías de última generación
                </p>
                <p className="mt-4 max-w-[32ch] text-[14px] leading-relaxed text-white/55">
                  Integración por API, automatización e inteligencia aplicada a
                  procesos reales de negocio.
                </p>
              </div>

              <div className="py-9 lg:pl-10">
                <p className="font-serif text-[clamp(1.55rem,2.8vw,2.45rem)] leading-tight text-white">
                  Arquitectura de clase mundial
                </p>
                <p className="mt-4 max-w-[32ch] text-[14px] leading-relaxed text-white/55">
                  Sistemas hechos a la medida, escalables, seguros y preparados
                  para crecer con la operación.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
