"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, EASE } from "./motion";

const QA = [
  {
    q: "¿AXON es un software que compro?",
    a: "No. Es un sistema de inteligencia empresarial hecho a la medida de tu empresa, conectado a tus sistemas actuales.",
  },
  {
    q: "¿Tengo que cambiar mis sistemas (ERP, CRM)?",
    a: "No. AXON se conecta por API sobre lo que ya usas.",
  },
  {
    q: "¿En cuánto tiempo lo tengo operando?",
    a: "En semanas, según la complejidad. Empezamos por un diagnóstico.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Tu información se queda en tu infraestructura; AXON construye una capa superior.",
  },
  {
    q: "¿En qué se diferencia de una herramienta de reportes o BI?",
    a: "Esas herramientas muestran datos. AXON los interpreta, recomienda decisiones y genera planes de acción con seguimiento.",
  },
  {
    q: "¿Para qué tamaño de empresa es?",
    a: "Para empresas con información dispersa que necesitan claridad y ejecución. Cada sistema se dimensiona a tu caso.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-[clamp(1.15rem,2vw,1.6rem)] font-normal leading-snug text-ink">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-[20px] text-muted"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-6 text-[15px] leading-relaxed text-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <p className="kicker mb-5 text-muted">FAQ</p>
        <Reveal>
          <h2 className="mb-10 font-serif text-[clamp(2.4rem,5vw,4rem)] font-normal leading-[1.02] text-ink">
            Preguntas y respuestas.
          </h2>
        </Reveal>
        <div className="border-b border-line">
          {QA.map((item) => (
            <Item key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
