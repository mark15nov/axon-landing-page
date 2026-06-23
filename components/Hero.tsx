"use client";

import React from "react";
import HeroScene from "./HeroScene";
import { motion, EASE } from "./motion";

export default function Hero() {
  return (
    <section id="top" className="relative pb-0 pt-[68px]">
      <HeroScene />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* headline */}
        <div className="mx-auto max-w-[1120px] pt-24 text-center sm:pt-28">
          <h1
            className="text-[clamp(1.6rem,5vw,5.4rem)] font-normal leading-[1.04] text-white"
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              WebkitTextStroke: "0.6px currentColor",
            }}
          >
            <span className="block overflow-hidden whitespace-nowrap pb-[0.06em]">
              <span className="rise-line" style={{ animationDelay: "0.05s" }}>
                De información dispersa
              </span>
            </span>
            <span className="block overflow-hidden whitespace-nowrap pb-[0.06em]">
              <span className="rise-line" style={{ animationDelay: "0.14s" }}>
                a Inteligencia Empresarial
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
            className="mx-auto mt-8 max-w-[60rem] text-[clamp(0.88rem,1.15vw,1.02rem)] leading-relaxed text-white/75"
          >
            AXON conecta todos tus sistemas y convierte la información que vuela
            por toda tu empresa en decisiones claras, planes de mejora y
            ejecución medible. Sistemas de inteligencia empresarial, hechos a tu
            medida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contacto"
              className="rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-ink transition hover:bg-white/90"
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

        {/* cockpit peeking from the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.7 }}
          className="relative z-20 mx-auto mt-16 max-w-[1240px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-kpis-v4.jpg"
            alt="AXON — Dirección General · KPIs corporativos"
            className="block w-full rounded-xl frame-shadow"
          />
        </motion.div>
      </div>
    </section>
  );
}
