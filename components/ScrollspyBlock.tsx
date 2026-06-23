"use client";

import React, { useEffect, useRef, useState } from "react";
import PaintedBackground from "./PaintedBackground";
import BrowserFrame from "./BrowserFrame";
import Screenshot from "./Screenshot";
import { Reveal } from "./motion";
import BITablero from "./mocks/BITablero";
import AlertasIA from "./mocks/AlertasIA";
import PlanA3 from "./mocks/PlanA3";
import CobranzaBars from "./mocks/CobranzaBars";
import { CountUp } from "./motion";

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
    <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
      {cols.map((c) => (
        <div key={c.title} className="bg-paper p-6">
          <h4 className="mb-2 text-[15px] font-semibold tracking-tight text-ink">
            {c.title}
          </h4>
          <p className="text-[13.5px] leading-relaxed text-muted">{c.body}</p>
        </div>
      ))}
    </div>
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
    <div className="relative z-0 -mt-[clamp(45px,12vw,175px)] bg-paper pt-[clamp(45px,12vw,175px)]">
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
          <div className="space-y-28 py-24 sm:space-y-36 sm:py-32">
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
              <FeatureRow
                cols={[
                  {
                    title: "Datos en todos lados",
                    body: "Cada área tiene su sistema y su hoja. Nadie ve el negocio completo en una sola vista.",
                  },
                  {
                    title: "Reportes que pierden información",
                    body: "Al consolidar a mano se cuelan errores y la decisión llega tarde.",
                  },
                  {
                    title: "El dato no acciona",
                    body: "Ves qué pasó, pero no qué significa ni qué hacer al respecto.",
                  },
                ]}
              />
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
                sub="AXON no es un SaaS genérico ni una herramienta más. Conectamos por API todos tus sistemas y construimos un sistema único para tu empresa que interpreta tu operación, recomienda decisiones y les da seguimiento. No se queda en mostrarte qué pasó: te dice qué significa y qué hacer."
              />
              <Reveal delay={0.1} className="mt-10 block">
                <div className="overflow-hidden rounded-2xl frame-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/axon-dashboard.jpg"
                    alt="AXON — Dashboard CEO, semáforo del negocio"
                    className="block w-full"
                  />
                </div>
              </Reveal>
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
                    <span className="block whitespace-nowrap text-muted">
                      En ese orden.
                    </span>
                  </>
                }
                sub="Tres capas que convierten la información dispersa en un plan de trabajo medible. Las capas 1–2 son AXON-SIE; la capa 3 es AXON-OS."
              />

              {/* diagrama mínimo: las 3 capas, en orden */}
              <Reveal className="mt-14 block">
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute left-1 right-1 top-[5px] hidden h-px bg-line sm:block"
                  />
                  <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
                    {[
                      { n: "01", tag: "AXON-SIE", name: "Integración", desc: "Conectamos tus fuentes en una sola vista." },
                      { n: "02", tag: "AXON-SIE", name: "Inteligencia", desc: "Detecta desviaciones, explica y recomienda." },
                      { n: "03", tag: "AXON-OS", name: "Ejecución", desc: "Plan con responsables, fechas y seguimiento." },
                    ].map((s, i) => (
                      <li key={s.n} className="relative">
                        <span
                          className={`block h-2.5 w-2.5 rounded-full ${
                            i === 2 ? "bg-axon-yellow" : "bg-ink"
                          }`}
                        />
                        <p className="mt-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted/70">
                          <span className="tabular-nums">{s.n}</span>
                          <span className="h-px w-4 bg-line" />
                          <span>{s.tag}</span>
                        </p>
                        <h4 className="mt-2 font-serif text-[clamp(1.15rem,2vw,1.55rem)] leading-tight text-ink">
                          {s.name}
                        </h4>
                        <p className="mt-1.5 max-w-[24ch] text-[13px] leading-relaxed text-muted">
                          {s.desc}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <div className="mt-16 space-y-16 sm:space-y-24">
                {[
                  {
                    tag: "Capa 01 · AXON-SIE",
                    name: "Integración · BI",
                    body: "Conectamos ERP, CRM, Excel, facturación, cobranza y operación. Juntamos toda tu información crítica y te la presentamos simple, visual y útil.",
                    mock: <BITablero />,
                    shot: "bi-tablero",
                    url: "axon.mx/bi",
                    variant: "soft" as const,
                  },
                  {
                    tag: "Capa 02 · AXON-SIE",
                    name: "Inteligencia · Data Analytics + Decision Intelligence",
                    body: "El sistema detecta desviaciones, causas probables, riesgos y escenarios, y los traduce en recomendaciones. ¿Qué me dice esta información y qué debo hacer?",
                    mock: <AlertasIA />,
                    shot: "alertas-ia",
                    url: "axon.mx/alertas",
                    variant: "block" as const,
                  },
                  {
                    tag: "Capa 03 · AXON-OS",
                    name: "Ejecución · Kaizen",
                    body: "La inteligencia se vuelve un plan exacto: responsables, fechas límite, KPIs, alertas y seguimiento automático. Un plan de trabajo, exacto y medible, para resolver tu problema.",
                    mock: <PlanA3 />,
                    shot: "plan-a3",
                    url: "axon-os.mx/plan",
                    variant: "soft" as const,
                  },
                ].map((layer) => (
                  <Reveal key={layer.name} delay={0.05} className="block">
                    {/* texto arriba */}
                    <p className="kicker mb-3 text-[0.62rem] text-cobalt">
                      {layer.tag}
                    </p>
                    <h3 className="max-w-[20ch] font-serif text-[clamp(1.5rem,2.8vw,2.3rem)] font-normal leading-tight text-ink">
                      {layer.name}
                    </h3>
                    <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-muted">
                      {layer.body}
                    </p>
                    {/* foto DEBAJO, a todo el ancho */}
                    <div className="mt-8">
                      <PaintedPanel variant={layer.variant}>
                        <BrowserFrame url={layer.url}>
                          <Screenshot name={layer.shot} alt={layer.name}>
                            {layer.mock}
                          </Screenshot>
                        </BrowserFrame>
                      </PaintedPanel>
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
                    De reaccionar tarde a{" "}
                    <span className="italic">decidir a tiempo.</span>
                  </>
                }
                sub="Claridad, anticipación y ejecución medible — el resultado de poner tu información a trabajar dentro de un solo sistema."
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

              {/* proof figures */}
              <Reveal className="mt-10">
                <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
                  <div className="rounded-2xl border border-line bg-ink p-8 text-white">
                    <p className="kicker mb-6 text-[0.62rem] text-white/45">
                      Caso real · Cobranza
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { n: 4.8, label: "MXN detectados atorados", suf: "M" },
                        { n: 2.1, label: "de faltante de caja evitado", suf: "M" },
                        { n: 2.5, label: "recuperados en 30 días", suf: "M" },
                      ].map((s) => (
                        <div key={s.label}>
                          <p className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-normal leading-none text-axon-yellow">
                            <CountUp to={s.n} prefix="$" suffix={s.suf} decimals={1} />
                          </p>
                          <p className="mt-2 text-[11.5px] leading-snug text-white/55">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <BrowserFrame url="axon-os.mx/cobranza">
                    <Screenshot name="cobranza" alt="Caso real de cobranza: días pactado vs real">
                      <CobranzaBars />
                    </Screenshot>
                  </BrowserFrame>
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
