"use client";

import React from "react";
import { Reveal } from "./motion";

export default function SocialProof() {
  return (
    <section id="sistemas" className="relative scroll-mt-20 bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line-dark bg-ink">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="border-b border-line-dark p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <p className="kicker mb-6 text-white/45">Respaldo</p>
                <div className="flex items-end gap-4">
                  <span className="font-serif text-[clamp(4.5rem,10vw,8rem)] font-normal leading-[0.78] text-white">
                    +30
                  </span>
                  <span className="pb-2 text-[15px] font-medium leading-tight text-white/55">
                    años de experiencia
                    <br />
                    en management
                  </span>
                </div>
              </div>

              <div className="grid content-center gap-10 p-7 sm:p-10">
                <div>
                  <p className="kicker mb-4 text-[0.62rem] text-white/45">
                    Trabajamos cerca de
                  </p>
                  <p className="max-w-[56ch] text-[clamp(1.15rem,1.8vw,1.7rem)] leading-snug tracking-tight text-white/85">
                    Fondos de inversión, family offices, SOFOMES, SOFIPOS,
                    consultoras y cámaras empresariales e industriales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
