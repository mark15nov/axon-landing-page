"use client";

import React from "react";

const LINKS = [
  { label: "Nosotros", href: "#sistemas" },
  { label: "Seguridad", href: "#seguridad" },
];

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={dark ? "/axon-allwhite.png" : "/axon-black.png"}
        alt="AXON"
        className="h-7 w-auto"
      />
    </a>
  );
}

export default function Navbar() {
  // Navbar anclado arriba del todo: NO sticky, NO fijo. Vive sobre el hero y
  // se va con el scroll (no te sigue hacia abajo).
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        {/* left cluster: logo + links (multica layout) */}
        <div className="flex items-center gap-10">
          <Wordmark dark />
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium tracking-tight text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="#contacto"
          className="rounded-lg bg-white px-3.5 py-1.5 text-[13px] font-semibold tracking-tight text-ink transition-all hover:bg-white/90"
        >
          Agendar diagnóstico
        </a>
      </div>
    </header>
  );
}
