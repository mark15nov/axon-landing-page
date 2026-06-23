"use client";

import React from "react";
import { Reveal } from "./motion";

/* ---------- icons (flat line — no gradients, no glow) ---------- */

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

const Calculator = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="5" y="3" width="14" height="18" rx="2" {...s} />
    <rect x="7.5" y="5.5" width="9" height="3.2" rx="0.6" {...s} />
    <path d="M8.5 12.5h0M12 12.5h0M15.5 12.5h0M8.5 16.5h0M12 16.5h0M15.5 16.5h0" {...s} strokeWidth={2.4} />
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

const Gear = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M4.5 10a7.5 7.5 0 0 1 12.4-3.1l2.6 2.6" {...s} />
    <path d="M19.5 4.5V9.5H14.5" {...s} />
    <path d="M19.5 14a7.5 7.5 0 0 1-12.4 3.1L4.5 14.5" {...s} />
    <path d="M4.5 19.5V14.5H9.5" {...s} />
  </svg>
);

const Agent = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="10" cy="8" r="3" {...s} />
    <path d="M4.5 19c0-3.5 11-3.5 11 0" {...s} />
    <path d="M18 5.5v3M16.5 7h3" {...s} />
    <path d="M19.5 13.5v2.5M18.25 14.75h2.5" {...s} />
  </svg>
);

const Report = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="5" y="3" width="14" height="18" rx="2" {...s} />
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" {...s} />
  </svg>
);

type Node = {
  label: string;
  Icon?: React.ComponentType<IconProps>;
  color?: string;
  logoBg?: string;
  logoClassName?: string;
  logoSrc?: string;
};

type PositionedNode = Node & {
  x: number;
  y: number;
};

const VB_W = 1000;
const VB_H = 440;
const HUB = { x: 500, y: 232, w: 340, h: 72 };
const INPUT_STEM_START_Y = 134;
const INPUT_BUS_Y = 162;
const OUTPUT_BUS_Y = 336;

const INPUTS: PositionedNode[] = [
  { label: "Excel", Icon: Spreadsheet, x: 90, y: 72 },
  { label: "PDF", Icon: PdfDoc, x: 254, y: 72 },
  { label: "CRM", Icon: ContactCard, x: 418, y: 72 },
  { label: "ERP", Icon: Modules, x: 582, y: 72 },
  { label: "RR. HH.", Icon: People, x: 746, y: 72 },
  {
    label: "Integraciones",
    logoSrc: "plus-200",
    x: 910,
    y: 72,
  },
];

const OUTPUTS: PositionedNode[] = [
  { label: "Cruces de información", Icon: Venn, x: 90, y: 398 },
  { label: "Análisis profundo", Icon: Analysis, x: 295, y: 398 },
  { label: "Automatizaciones", Icon: Gear, x: 500, y: 398 },
  { label: "Agentes", Icon: Agent, x: 705, y: 398 },
  { label: "Reportes inmediatos", Icon: Report, x: 910, y: 398 },
];

const pctX = (x: number) => `${(x / VB_W) * 100}%`;
const pctY = (y: number) => `${(y / VB_H) * 100}%`;

function DesktopNode({ node }: { node: PositionedNode; tone: "input" | "output" }) {
  const { label } = node;
  return (
    <div
      className="absolute z-10 flex w-[180px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3.5 text-center"
      style={{ left: pctX(node.x), top: pctY(node.y) }}
    >
      <span className="flex h-16 w-16 items-center justify-center text-ink">
        <NodeMark node={node} />
      </span>
      <span className="text-[16px] font-semibold leading-tight tracking-tight text-ink">
        {label}
      </span>
    </div>
  );
}

function MobileNode({ node }: { node: Node; tone: "input" | "output" }) {
  const { label } = node;
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span
        className="flex h-16 w-16 items-center justify-center text-ink"
      >
        <NodeMark node={node} />
      </span>
      <span className="text-[15px] font-semibold leading-tight tracking-tight text-ink">
        {label}
      </span>
    </div>
  );
}

function NodeMark({ node }: { node: Node }) {
  const { Icon, logoClassName = "h-9 w-9", logoSrc } = node;

  if (logoSrc === "plus-200") {
    return (
      <span className="tnum text-[22px] font-semibold tracking-tight text-ink">
        +200
      </span>
    );
  }

  if (logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoSrc}
        alt=""
        aria-hidden
        className={`${logoClassName} object-contain`}
      />
    );
  }

  if (!Icon) return null;
  return <Icon className="h-9 w-9" />;
}

function HubCard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-cover bg-center text-center text-ink ${
        compact ? "mx-auto w-full max-w-[300px] px-6 py-5" : "h-full w-full px-8"
      }`}
      style={{ backgroundImage: "url('/cta-bg-orange.jpg')" }}
    >
      <span className="font-serif text-[clamp(1.35rem,2vw,1.9rem)] font-normal leading-[1.02] text-ink">
        Inteligencia empresarial
      </span>
    </div>
  );
}

function MobileFlowArrow() {
  return (
    <svg viewBox="0 0 16 56" className="mx-auto my-5 h-12 w-4 text-muted/35" aria-hidden>
      <path d="M8 2V48" {...s} strokeWidth={1.2} />
      <path d="M4.5 44.5L8 51L11.5 44.5" {...s} strokeWidth={1.2} />
    </svg>
  );
}

/* ---------- main ---------- */

export default function IntelligenceFlow() {
  return (
    <Reveal delay={0.05} className="mt-16 block">
      <div>
        <div className="text-center">
          <h3 className="mx-auto max-w-[30ch] font-serif text-[clamp(1.35rem,2vw,1.95rem)] font-normal leading-tight text-ink">
            Tus sistemas conectados a una inteligencia operativa.
          </h3>
        </div>

        <div
          className="relative mx-auto mt-6 hidden w-full md:block"
          style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        >
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="absolute inset-0 h-full w-full text-muted/35"
            aria-hidden
          >
            <defs>
              <marker
                id="flow-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M1.5 1.25L6.5 4L1.5 6.75Z" fill="currentColor" />
              </marker>
            </defs>
            {INPUTS.map((n) => (
              <path
                key={`source-${n.label}`}
                d={`M ${n.x} ${INPUT_STEM_START_Y} V ${INPUT_BUS_Y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
            <path
              d={`M ${INPUTS[0].x} ${INPUT_BUS_Y} H ${INPUTS[INPUTS.length - 1].x}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d={`M ${HUB.x} ${INPUT_BUS_Y} V ${HUB.y - HUB.h / 2}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              markerEnd="url(#flow-arrow)"
            />
            {OUTPUTS.map((n) => (
              <path
                key={`result-${n.label}`}
                d={`M ${n.x} ${OUTPUT_BUS_Y} V ${n.y - 38}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                markerEnd="url(#flow-arrow)"
              />
            ))}
            <path
              d={`M ${OUTPUTS[0].x} ${OUTPUT_BUS_Y} H ${OUTPUTS[OUTPUTS.length - 1].x}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d={`M ${HUB.x} ${HUB.y + HUB.h / 2} V ${OUTPUT_BUS_Y}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              markerEnd="url(#flow-arrow)"
            />
            <circle cx={HUB.x} cy={INPUT_BUS_Y} r="2.6" fill="currentColor" opacity="0.35" />
            <circle cx={HUB.x} cy={OUTPUT_BUS_Y} r="2.6" fill="currentColor" opacity="0.35" />
          </svg>

          {INPUTS.map((n) => (
            <DesktopNode key={n.label} node={n} tone="input" />
          ))}
          {OUTPUTS.map((n) => (
            <DesktopNode key={n.label} node={n} tone="output" />
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

        <div className="mt-7 md:hidden">
          <div className="grid grid-cols-3 gap-x-3 gap-y-5">
            {INPUTS.map((n) => (
              <MobileNode key={n.label} node={n} tone="input" />
            ))}
          </div>

          <MobileFlowArrow />
          <HubCard compact />
          <MobileFlowArrow />

          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            {OUTPUTS.map((n, index) => (
              <div key={n.label} className={index === 4 ? "col-span-2" : undefined}>
                <MobileNode node={n} tone="output" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
