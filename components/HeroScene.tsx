import React from "react";

/**
 * Fondo del hero: imagen oscura a sangre, con grano de película.
 */
export default function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      {/* fondo: textura negra a sangre (cover, sin bordes) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/black%20bg.jpg')" }}
      />
      {/* capa para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black/55" />
      {/* gradiente inferior: funde hacia negro la transición a la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
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
