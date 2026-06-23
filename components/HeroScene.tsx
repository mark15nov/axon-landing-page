import React from "react";

/**
 * Fondo del hero: pintura real (public/hero-bg.jpeg) a sangre completa,
 * con una capa sutil para legibilidad del texto blanco y grano de película.
 */
export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* fondo: domo azul */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg-dome.jpg')" }}
      />

      {/* capa de legibilidad sutil: mantiene el azul vibrante pero da contraste
          al texto blanco (más oscura arriba y abajo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/35" />

      {/* grano de película */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.10] mix-blend-overlay">
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </div>
  );
}
