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

const PROOF = {
  quote:
    "Antes el cierre dependía de reportes armados a mano. Ahora vemos la operación completa en una sola lectura y decidimos sin esperar al fin de mes.",
};

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="font-serif text-[clamp(1.05rem,1.55vw,1.35rem)] font-normal leading-snug text-ink">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-[17px] text-muted"
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
            <p className="max-w-[56ch] pb-5 text-[14px] leading-relaxed text-muted">
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
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="kicker mb-4 text-muted">FAQ</p>
            <Reveal>
              <h2 className="mb-8 font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.02] text-ink">
                Preguntas y respuestas.
              </h2>
            </Reveal>
            <div className="border-b border-line">
              {QA.map((item) => (
                <Item key={item.q} {...item} />
              ))}
            </div>
          </div>

          <aside className="py-7 lg:sticky lg:top-28 lg:mt-[4.9rem] lg:self-start lg:py-8">
            <figure>
              <blockquote className="font-serif text-[clamp(1.35rem,2.25vw,2.5rem)] font-normal leading-[1.08] text-muted">
                &ldquo;{PROOF.quote}&rdquo;
              </blockquote>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
