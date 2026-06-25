"use client";

import React from "react";
import HeroScene from "./HeroScene";
import { motion, EASE } from "./motion";

export default function Hero() {
  return (
    <section id="top" className="relative pb-28 pt-[68px] sm:pb-36">
      <HeroScene />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* headline */}
        <div className="mx-auto max-w-[1080px] pt-24 text-center sm:pt-32">
          <h1
            className="text-[clamp(1.7rem,5.4vw,5.6rem)] font-normal leading-[1.03] text-white"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              WebkitTextStroke: "0.6px currentColor",
            }}
          >
            <span className="block overflow-hidden whitespace-nowrap pb-[0.06em]">
              <span className="rise-line" style={{ animationDelay: "0.05s" }}>
                Cada sistema habla
              </span>
            </span>
            <span className="block overflow-hidden whitespace-nowrap pb-[0.06em]">
              <span className="rise-line" style={{ animationDelay: "0.14s" }}>
                un idioma distinto.
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="mx-auto mt-8 max-w-[48rem] text-[clamp(0.98rem,1.35vw,1.18rem)] leading-relaxed text-white/78"
          >
            Tu equipo pierde horas integrando datos manualmente. Ahí nacen los
            errores, los retrabajos y las decisiones sin panorama completo.
            AXON convierte esa información dispersa en una sola lectura
            operativa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contacto"
              className="rounded-2xl bg-cover bg-center px-6 py-3 text-[14px] font-semibold text-ink transition hover:brightness-105"
              style={{ backgroundImage: "url('/cta-bg-orange.jpg')" }}
            >
              Agendar diagnóstico
            </a>
            <a
              href="#metodo"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Ver cómo funciona
            </a>
            <a
              href="#contacto"
              className="px-2 py-3 text-[14px] font-semibold text-white/80 transition hover:text-white"
            >
              Hablar con el equipo →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
