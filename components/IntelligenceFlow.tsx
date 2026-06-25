"use client";

import React from "react";
import { Reveal } from "./motion";

/* ---------- icons (flat line — no gradients, no glow, no sparkles) ---------- */

type IconProps = { className?: string };

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Spreadsheet = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" {...s} />
    <path d="M3 9h18M3 14h18M9 4v16M15 4v16" {...s} />
  </svg>
);

const PdfDoc = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" {...s} />
    <path d="M14 3v4h4" {...s} />
    <path d="M8.5 13h7M8.5 16h4" {...s} />
  </svg>
);

const ContactCard = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" {...s} />
    <circle cx="8.5" cy="11" r="2.1" {...s} />
    <path d="M5.5 16c0-2 6-2 6 0" {...s} />
    <path d="M14.5 10.5h3.5M14.5 13.5h3.5" {...s} />
  </svg>
);

const Modules = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="4" y="4" width="7" height="7" rx="1.2" {...s} />
    <rect x="13" y="4" width="7" height="7" rx="1.2" {...s} />
    <rect x="4" y="13" width="7" height="7" rx="1.2" {...s} />
    <rect x="13" y="13" width="7" height="7" rx="1.2" {...s} />
  </svg>
);

const People = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="9" cy="8.5" r="2.8" {...s} />
    <circle cx="16.5" cy="9.5" r="2" {...s} />
    <path d="M4 18c0-3.2 10-3.2 10 0" {...s} />
    <path d="M14.8 13.4c2.8 0 4.7 1.4 4.7 3.4" {...s} />
  </svg>
);

const Venn = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="9.5" cy="12" r="5.5" {...s} />
    <circle cx="14.5" cy="12" r="5.5" {...s} />
  </svg>
);

const Analysis = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="10.5" cy="10.5" r="6" {...s} />
    <path d="M15 15l5 5" {...s} />
    <path d="M8.5 11.5v-1.5M10.5 11.5v-3M12.5 11.5v-2.2" {...s} />
  </svg>
);

const Loop = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M4.5 10a7.5 7.5 0 0 1 12.4-3.1l2.6 2.6" {...s} />
    <path d="M19.5 4.5V9.5H14.5" {...s} />
    <path d="M19.5 14a7.5 7.5 0 0 1-12.4 3.1L4.5 14.5" {...s} />
    <path d="M4.5 19.5V14.5H9.5" {...s} />
  </svg>
);

const Person = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="8" r="3.4" {...s} />
    <path d="M5.5 19.5c0-3.6 13-3.6 13 0" {...s} />
  </svg>
);

const Report = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="5" y="3" width="14" height="18" rx="2" {...s} />
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" {...s} />
  </svg>
);

/* ---------- data + geometry (viewBox 1000 x 560) ---------- */

type Node = {
  label: string;
  Icon?: React.ComponentType<IconProps>;
  text?: string;
};

const VB_W = 1000;
const VB_H = 560;

/* Geometría 100% simétrica respecto al centro del núcleo (HUB.y).
   Todo lo de arriba y lo de abajo se deriva de las MISMAS constantes. */
const HUB = { x: 542, y: 280, w: 320, h: 64 };
const GAP = 22; // respiro a cada lado de cada flecha
const ARROW = 50; // largo de cada flecha troncal
const STEM = 48; // largo de cada tallo (icono ↔ bus)
const ICON_HALF = 18; // medio alto del icono
const CORNER = 12; // radio de las esquinas redondeadas
const STEP = 148; // mismo espaciado entre nodos arriba y abajo

// distancia núcleo→bus = medio núcleo + flecha + 2 respiros
const BUS_D = HUB.h / 2 + GAP + ARROW + GAP; // 126
const IN_BUS_Y = HUB.y - BUS_D; // 154
const OUT_BUS_Y = HUB.y + BUS_D; // 406
const IN_ICON_Y = IN_BUS_Y - STEM - ICON_HALF; // 88
const OUT_ICON_Y = OUT_BUS_Y + STEM + ICON_HALF; // 472

// líneas finas en gris sólido; flechas troncales en negro
const LINE = "#cdcbc4";
const TRUNK = "#0b0b0e";

const INPUTS: Node[] = [
  { label: "Excel", Icon: Spreadsheet },
  { label: "PDF", Icon: PdfDoc },
  { label: "CRM", Icon: ContactCard },
  { label: "ERP", Icon: Modules },
  { label: "RR. HH.", Icon: People },
  { label: "Integraciones", text: "+200" },
];

const OUTPUTS: Node[] = [
  { label: "Cruces de información", Icon: Venn },
  { label: "Análisis profundo", Icon: Analysis },
  { label: "Automatizaciones", Icon: Loop },
  { label: "Agentes", Icon: Person },
  { label: "Reportes inmediatos", Icon: Report },
];

// posiciones X, ambas filas centradas en HUB.x con el MISMO paso
const xs = (count: number) =>
  Array.from({ length: count }, (_, i) => HUB.x + (i - (count - 1) / 2) * STEP);
const IN_XS = xs(INPUTS.length);
const OUT_XS = xs(OUTPUTS.length);

const pctX = (x: number) => `${(x / VB_W) * 100}%`;
const pctY = (y: number) => `${(y / VB_H) * 100}%`;

function NodeMark({ node }: { node: Node }) {
  if (node.text) {
    return (
      <span className="tnum text-[22px] font-semibold tracking-tight text-ink">
        {node.text}
      </span>
    );
  }
  const Icon = node.Icon;
  return Icon ? <Icon className="h-8 w-8 text-ink" /> : null;
}

function DesktopNode({
  node,
  x,
  iconY,
  side,
}: {
  node: Node;
  x: number;
  iconY: number;
  side: "top" | "bottom";
}) {
  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: pctX(x), top: pctY(iconY) }}
    >
      <span className="flex h-9 items-center justify-center">
        <NodeMark node={node} />
      </span>
      <span
        className={`pointer-events-none absolute left-1/2 w-[150px] -translate-x-1/2 text-center text-[15px] font-semibold leading-tight tracking-tight text-ink ${
          side === "top" ? "bottom-[calc(100%+10px)]" : "top-[calc(100%+10px)]"
        }`}
      >
        {node.label}
      </span>
    </div>
  );
}

function HubCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-2xl bg-cover bg-center text-center ${
        compact ? "mx-auto max-w-[300px] px-6 py-5" : "px-8"
      }`}
      style={{ backgroundImage: "url('/cta-bg-orange.jpg')" }}
    >
      <span className="font-serif text-[clamp(1.35rem,2vw,1.9rem)] font-normal leading-[1.02] text-ink">
        Inteligencia empresarial
      </span>
    </div>
  );
}

function StepLabel({ step, label, y }: { step: string; label: string; y: number }) {
  return (
    <div
      className="absolute z-20 flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-muted/75"
      style={{ left: 0, top: pctY(y) }}
    >
      <span className="tnum text-ink/70">{step}</span>
      <span>{label}</span>
    </div>
  );
}

function MobileNode({ node }: { node: Node }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="flex h-9 items-center justify-center">
        <NodeMark node={node} />
      </span>
      <span className="text-[14px] font-semibold leading-tight tracking-tight text-ink">
        {node.label}
      </span>
    </div>
  );
}

function MobileArrow() {
  return (
    <svg viewBox="0 0 16 48" className="mx-auto my-5 h-10 w-4" aria-hidden>
      <path
        d="M8 2V44"
        fill="none"
        stroke={TRUNK}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path
        d="M4 40L8 45L12 40"
        fill="none"
        stroke={TRUNK}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- main ---------- */

export default function IntelligenceFlow({
  showTitle = true,
  className = "mt-16",
}: {
  showTitle?: boolean;
  className?: string;
}) {
  const inFirst = IN_XS[0];
  const inLast = IN_XS[IN_XS.length - 1];
  const outFirst = OUT_XS[0];
  const outLast = OUT_XS[OUT_XS.length - 1];
  const r = CORNER;
  const inIconBottom = IN_ICON_Y + ICON_HALF; // donde nacen los tallos de arriba
  const outIconTop = OUT_ICON_Y - ICON_HALF; // donde llegan los tallos de abajo

  return (
    <Reveal delay={0.05} className={`${className} block`}>
      <div>
        {showTitle ? (
          <h3 className="mx-auto mb-10 max-w-[30ch] text-center font-serif text-[clamp(1.35rem,2vw,1.95rem)] font-normal leading-tight text-ink">
            Tus sistemas conectados a una inteligencia operativa.
          </h3>
        ) : null}

        {/* ---------- desktop ---------- */}
        <div
          className="relative mx-auto hidden w-full md:block"
          style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        >
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <marker
                id="flow-arrow"
                markerWidth="9"
                markerHeight="9"
                refX="4.5"
                refY="4.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M1.4 1.2L7.6 4.5L1.4 7.8Z" fill={TRUNK} />
              </marker>
            </defs>

            {/* --- colector de fuentes (tallos iguales + esquinas redondeadas) --- */}
            {IN_XS.map((x, i) => {
              const isLeftEnd = i === 0;
              const isRightEnd = i === IN_XS.length - 1;
              if (isLeftEnd || isRightEnd) {
                const dir = isLeftEnd ? 1 : -1;
                return (
                  <path
                    key={`in-${i}`}
                    d={`M ${x} ${inIconBottom} V ${IN_BUS_Y - r} Q ${x} ${IN_BUS_Y} ${x + dir * r} ${IN_BUS_Y}`}
                    fill="none"
                    stroke={LINE}
                    strokeWidth={1.3}
                    strokeLinecap="round"
                  />
                );
              }
              return (
                <path
                  key={`in-${i}`}
                  d={`M ${x} ${inIconBottom} V ${IN_BUS_Y}`}
                  fill="none"
                  stroke={LINE}
                  strokeWidth={1.3}
                  strokeLinecap="round"
                />
              );
            })}
            <path
              d={`M ${inFirst + r} ${IN_BUS_Y} H ${inLast - r}`}
              fill="none"
              stroke={LINE}
              strokeWidth={1.3}
            />

            {/* --- distribuidor de acciones (espejo exacto del colector) --- */}
            {OUT_XS.map((x, i) => {
              const isLeftEnd = i === 0;
              const isRightEnd = i === OUT_XS.length - 1;
              if (isLeftEnd || isRightEnd) {
                const dir = isLeftEnd ? 1 : -1;
                return (
                  <path
                    key={`out-${i}`}
                    d={`M ${x + dir * r} ${OUT_BUS_Y} Q ${x} ${OUT_BUS_Y} ${x} ${OUT_BUS_Y + r} V ${outIconTop}`}
                    fill="none"
                    stroke={LINE}
                    strokeWidth={1.3}
                    strokeLinecap="round"
                  />
                );
              }
              return (
                <path
                  key={`out-${i}`}
                  d={`M ${x} ${OUT_BUS_Y} V ${outIconTop}`}
                  fill="none"
                  stroke={LINE}
                  strokeWidth={1.3}
                  strokeLinecap="round"
                />
              );
            })}
            <path
              d={`M ${outFirst + r} ${OUT_BUS_Y} H ${outLast - r}`}
              fill="none"
              stroke={LINE}
              strokeWidth={1.3}
            />

            {/* --- dos flechas troncales idénticas (entra / sale del núcleo) --- */}
            <path
              d={`M ${HUB.x} ${IN_BUS_Y + GAP} V ${HUB.y - HUB.h / 2 - GAP}`}
              fill="none"
              stroke={TRUNK}
              strokeWidth={2.1}
              strokeLinecap="round"
              markerEnd="url(#flow-arrow)"
            />
            <path
              d={`M ${HUB.x} ${HUB.y + HUB.h / 2 + GAP} V ${OUT_BUS_Y - GAP}`}
              fill="none"
              stroke={TRUNK}
              strokeWidth={2.1}
              strokeLinecap="round"
              markerEnd="url(#flow-arrow)"
            />
          </svg>

          <StepLabel step="01" label="Se conecta a" y={IN_BUS_Y} />
          <StepLabel step="02" label="Genera inteligencia" y={HUB.y} />
          <StepLabel step="03" label="Entrega" y={OUT_BUS_Y} />

          {INPUTS.map((n, i) => (
            <DesktopNode key={n.label} node={n} x={IN_XS[i]} iconY={IN_ICON_Y} side="top" />
          ))}
          {OUTPUTS.map((n, i) => (
            <DesktopNode key={n.label} node={n} x={OUT_XS[i]} iconY={OUT_ICON_Y} side="bottom" />
          ))}

          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: pctX(HUB.x),
              top: pctY(HUB.y),
              width: pctX(HUB.w),
              height: pctY(HUB.h),
            }}
          >
            <HubCard />
          </div>
        </div>

        {/* ---------- mobile ---------- */}
        <div className="md:hidden">
          <p className="kicker mb-4 text-center text-[0.58rem] text-muted/75">
            <span className="tnum text-ink/70">01</span> Se conecta a
          </p>
          <div className="grid grid-cols-3 gap-x-3 gap-y-6">
            {INPUTS.map((n) => (
              <MobileNode key={n.label} node={n} />
            ))}
          </div>

          <MobileArrow />

          <p className="kicker mb-4 text-center text-[0.58rem] text-muted/75">
            <span className="tnum text-ink/70">02</span> Genera inteligencia
          </p>
          <HubCard compact />

          <MobileArrow />

          <p className="kicker mb-4 text-center text-[0.58rem] text-muted/75">
            <span className="tnum text-ink/70">03</span> Entrega
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {OUTPUTS.map((n, i) => (
              <div key={n.label} className={i === OUTPUTS.length - 1 ? "col-span-2" : undefined}>
                <MobileNode node={n} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
