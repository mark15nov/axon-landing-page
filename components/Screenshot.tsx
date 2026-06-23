"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Slot de screenshot. Si existe /public/screenshots/{name}.{ext} se muestra la
 * FOTO real; si no carga (404), cae al mock codeado que se pasa como children.
 *
 * Para usar fotos reales: arrastra el archivo a public/screenshots/ con el
 * nombre indicado (ej. cockpit-automotriz.png). Soporta png, jpg y webp.
 */
export default function Screenshot({
  name,
  alt,
  ext = "png",
  children,
}: {
  name: string;
  alt: string;
  ext?: "png" | "jpg" | "jpeg" | "webp";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Detecta imágenes que ya estaban en caché (onLoad puede no dispararse).
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={`/screenshots/${name}.${ext}`}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`block w-full ${loaded ? "" : "hidden"}`}
      />
      {/* fallback: mock codeado mientras no haya foto */}
      {!loaded && children}
    </div>
  );
}
