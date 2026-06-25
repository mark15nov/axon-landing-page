"use client";

import React, { useEffect, useRef, useState } from "react";
import PaintedBackground from "./PaintedBackground";
import IntelligenceFlow from "./IntelligenceFlow";
import { Reveal } from "./motion";

const NAV = [
  { id: "problema", label: "Problema" },
  { id: "axon", label: "AXON" },
  { id: "metodo", label: "Método" },
  { id: "beneficios", label: "Beneficios" },
];

/* ---------- shared pieces ---------- */

function PaintedPanel({
  children,
  variant = "block",
}: {
  children: React.ReactNode;
  variant?: "block" | "soft";
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <PaintedBackground variant={variant} />
      <div className="relative px-5 py-10 sm:px-12 sm:py-14">{children}</div>
    </div>
  );
}

function FeatureRow({
  cols,
}: {
  cols: { title: string; body: string }[];
}) {
  return (
    <div className="mt-14 grid overflow-hidden rounded-xl border border-line sm:grid-cols-3">
      {cols.map((c, index) => (
        <div
          key={c.title}
          className={`px-6 py-7 sm:px-7 ${
            index > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""
          }`}
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="tnum text-[11px] font-semibold text-muted/55">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <h4 className="text-[18px] font-semibold leading-tight tracking-tight text-ink">
            {c.title}
          </h4>
          <p className="mt-4 max-w-[31ch] text-[14px] leading-relaxed text-muted">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function MinimalProblemCards() {
  const items = [
    {
      n: "01",
      title: "Datos en todos lados",
      body: "Cada área tiene su sistema y su hoja. Nadie ve el negocio completo en una sola vista.",
    },
    {
      n: "02",
      title: "Reportes que pierden información",
      body: "Al consolidar a mano se cuelan errores y la decisión llega tarde.",
    },
    {
      n: "03",
      title: "El dato no acciona",
      body: "Ves qué pasó, pero no qué significa ni qué hacer al respecto.",
    },
  ];

  return (
    <Reveal delay={0.08} className="mt-12 block">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.n}
            className="group relative rounded-2xl border border-line bg-paper p-5 transition-colors duration-300 hover:border-muted/35 sm:min-h-[168px] sm:p-6"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[12px] font-semibold tabular-nums text-muted/65">
                {item.n}
              </span>
              <span className="h-px flex-1 bg-line transition-colors duration-300 group-hover:bg-axon-yellow" />
            </div>
            <h4 className="max-w-[18ch] text-[18px] font-semibold leading-tight tracking-tight text-ink">
              {item.title}
            </h4>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function SectionHead({
  title,
  sub,
  titleClass = "max-w-[18ch] text-[clamp(2rem,4.4vw,3.6rem)]",
}: {
  title: React.ReactNode;
  sub: React.ReactNode;
  titleClass?: string;
}) {
  return (
    <Reveal>
      <h2
        className={`text-balance font-serif font-normal leading-[1.06] text-ink ${titleClass}`}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-[82ch] text-[clamp(1rem,1.3vw,1.12rem)] leading-relaxed text-muted">
        {sub}
      </p>
    </Reveal>
  );
}

/* ---------- main ---------- */

export default function ScrollspyBlock() {
  const [active, setActive] = useState("problema");
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) {
        refs.current[n.id] = el;
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  const activeIndex = NAV.findIndex((n) => n.id === active);

  return (
    <div className="relative z-0 bg-paper">
      {/* mobile progress bar */}
      <div className="sticky top-[68px] z-30 border-b border-line bg-paper/90 backdrop-blur md:hidden">
        <div className="flex">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`flex-1 py-2.5 text-center text-[11px] font-medium uppercase tracking-wide transition-colors ${
                i === activeIndex ? "text-ink" : "text-muted/60"
              }`}
            >
              {n.label}
              <div
                className={`mx-auto mt-1.5 h-[2px] w-8 rounded-full transition-colors ${
                  i === activeIndex ? "bg-axon-yellow" : "bg-transparent"
                }`}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="md:grid md:grid-cols-[140px_1fr] md:gap-10">
          {/* sticky side nav */}
          <aside className="hidden md:block">
            <nav className="sticky top-[140px] py-32">
              <ul className="space-y-5">
                {NAV.map((n) => {
                  const on = n.id === active;
                  return (
                    <li key={n.id}>
                      <a
                        href={`#${n.id}`}
                        className={`block text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                          on ? "text-ink" : "text-muted/55 hover:text-muted"
                        }`}
                      >
                        {n.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* content column */}
          <div className="space-y-28 pb-24 pt-14 sm:space-y-36 sm:pb-32 sm:pt-20">
            {/* PROBLEMA */}
            <section id="problema" className="scroll-mt-32">
              <SectionHead
                titleClass="text-[clamp(1.4rem,3.5vw,3.2rem)]"
                title={
                  <>
                    <span className="block whitespace-normal sm:whitespace-nowrap">
                      Los datos de tu empresa están
                    </span>
                    <span className="block whitespace-nowrap">
                      dispersos e incompletos
                    </span>
                  </>
                }
                sub={
                  <>
                    <span className="block">
                      Ventas, costos, cobranza, inventarios y márgenes ya existen
                      dentro de la empresa. El problema es que viven en lugares
                      distintos: ERP, CRM, Excel, facturación y hojas de cálculo
                      que no siempre cuentan la misma historia.
                    </span>
                  </>
                }
              />
              <MinimalProblemCards />
            </section>

            {/* AXON */}
            <section id="axon" className="scroll-mt-32">
              <SectionHead
                titleClass="text-[clamp(1.85rem,4vw,3.3rem)]"
                title={
                  <>
                    <span className="block">
                      Una capa de <span className="italic">inteligencia</span>
                    </span>
                    <span className="block">sobre todo lo que ya usas.</span>
                  </>
                }
                sub="AXON conecta por API todos tus sistemas y construye una capa única para interpretar tu operación, recomendar decisiones y darles seguimiento. Convierte lo que ya pasa en la empresa en señales claras sobre qué significa y qué hacer."
              />
              <FeatureRow
                cols={[
                  {
                    title: "A la medida",
                    body: "Cada sistema se diseña único, sobre tus fuentes y tu operación. No es plantilla.",
                  },
                  {
                    title: "No sustituye, conecta",
                    body: "Se monta por API sobre tu infraestructura actual. Cero fricción de adopción.",
                  },
                  {
                    title: "Interpreta y acciona",
                    body: "De la visualización a la decisión: detecta, explica, recomienda y ejecuta.",
                  },
                ]}
              />
              <IntelligenceFlow showTitle={false} className="mt-16" />
            </section>

            {/* METODO */}
            <section id="metodo" className="scroll-mt-32">
              <SectionHead
                titleClass="text-[clamp(1.5rem,3.5vw,3.2rem)]"
                title={
                  <>
                    <span className="block whitespace-normal sm:whitespace-nowrap">
                      Integración, inteligencia y ejecución.
                    </span>
                  </>
                }
                sub="Tres capas que convierten la información dispersa en un plan de trabajo medible."
              />

              <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    tag: "",
                    name: "Integración",
                    body: "Conectamos tus fuentes críticas y presentamos la operación en una vista simple, visual y útil.",
                    src: "/integracion.jpg",
                    variant: "soft" as const,
                  },
                  {
                    tag: "",
                    name: "Inteligencia",
                    body: "Detecta desviaciones, riesgos y causas probables, y los convierte en recomendaciones accionables.",
                    src: "/inteligencia.jpg",
                    variant: "block" as const,
                  },
                  {
                    tag: "",
                    name: "Ejecución",
                    body: "Convierte cada recomendación en un plan con responsables, fechas, KPIs y seguimiento automático.",
                    src: "/ejecucion.jpg",
                    variant: "soft" as const,
                  },
                ].map((layer) => (
                  <Reveal key={layer.name} delay={0.05} className="block min-w-0">
                    {/* texto arriba */}
                    <p className="kicker mb-3 text-[0.62rem] text-cobalt">
                      {layer.tag}
                    </p>
                    <h3 className="font-serif text-[clamp(1.35rem,1.6vw,1.75rem)] font-normal leading-tight text-ink">
                      {layer.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-normal text-muted">
                      {layer.body}
                    </p>
                    {/* foto DEBAJO, a todo el ancho */}
                    <div className="mt-5 overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={layer.src}
                        alt={layer.name}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>

            </section>

            {/* BENEFICIOS */}
            <section id="beneficios" className="scroll-mt-32">
              <SectionHead
                title={
                  <>
                    Información clara para{" "}
                    <span className="italic">decidir a tiempo.</span>
                  </>
                }
                sub="Claridad, anticipación y ejecución medible para convertir la información del negocio en decisiones concretas."
              />

              <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Claridad directiva", "Todo el negocio en una sola vista confiable."],
                  ["Anticipación de riesgos", "Alertas antes de que el problema cueste dinero."],
                  ["Ejecución medible", "Planes con responsable, fecha y KPI; nada se queda en reporte."],
                  ["Mejora continua", "Kaizen dentro del sistema: cada problema deja un estándar nuevo."],
                ].map(([t, b]) => (
                  <div key={t} className="bg-paper p-6">
                    <h4 className="mb-2 text-[15px] font-semibold tracking-tight text-ink">
                      {t}
                    </h4>
                    <p className="text-[13.5px] leading-relaxed text-muted">{b}</p>
                  </div>
                ))}
              </div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
