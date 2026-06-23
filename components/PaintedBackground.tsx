import React from "react";

type Variant = "hero" | "block" | "soft";

/**
 * Impressionist blue "painted" background — layered mesh radial gradients
 * plus a subtle SVG film-grain overlay so it never reads flat / "cheap AI".
 */
export default function PaintedBackground({
  variant = "block",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const gradients: Record<Variant, string> = {
    hero: `
      radial-gradient(120% 90% at 18% 12%, #7d8cf5 0%, transparent 55%),
      radial-gradient(100% 80% at 88% 8%, #3650e0 0%, transparent 50%),
      radial-gradient(130% 120% at 70% 95%, #1c2bb0 0%, transparent 55%),
      radial-gradient(90% 90% at 30% 80%, #2f86c4 0%, transparent 55%),
      linear-gradient(160deg, #2b3ad0 0%, #1a1f7a 60%, #131653 100%)
    `,
    block: `
      radial-gradient(110% 90% at 12% 18%, #8a98f7 0%, transparent 52%),
      radial-gradient(100% 90% at 92% 20%, #4258e6 0%, transparent 50%),
      radial-gradient(120% 120% at 75% 100%, #2430c2 0%, transparent 55%),
      radial-gradient(80% 80% at 35% 85%, #2f86c4 0%, transparent 55%),
      linear-gradient(150deg, #3242d6 0%, #232a9e 65%, #1a1f72 100%)
    `,
    soft: `
      radial-gradient(110% 90% at 80% 10%, #9aa6f5 0%, transparent 55%),
      radial-gradient(100% 100% at 10% 90%, #5e72ee 0%, transparent 55%),
      linear-gradient(140deg, #6675ef 0%, #4256e0 70%, #3242c9 100%)
    `,
  };

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ background: gradients[variant] }}
    >
      {/* soft painterly blobs to break the gradient banding */}
      <div
        className="absolute -left-32 top-10 h-[40rem] w-[40rem] rounded-full opacity-40 blur-[90px]"
        style={{ background: "radial-gradient(circle, #a8b2ff, transparent 70%)" }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full opacity-30 blur-[80px]"
        style={{ background: "radial-gradient(circle, #2bb0c4, transparent 70%)" }}
      />
      {/* film grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay">
        <filter id="painted-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#painted-grain)" />
      </svg>
    </div>
  );
}
