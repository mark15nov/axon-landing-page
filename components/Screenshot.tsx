"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Slot de screenshot. Por default muestra el mock codeado que se pasa como
 * children. Si se pasa src, intenta mostrar una imagen real y cae al mock si
 * esa imagen no carga.
 *
 * Para usar fotos reales: arrastra el archivo a public/screenshots/ y pasa
 * src="/screenshots/nombre.png".
 */
export default function Screenshot({
  name: _name,
  alt,
  src,
  children,
}: {
  name: string;
  alt: string;
  src?: string;
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
      {src ? (
        <img
          ref={ref}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`block w-full ${loaded ? "" : "hidden"}`}
        />
      ) : null}
      {/* fallback: mock codeado mientras no haya foto */}
      {!loaded && children}
    </div>
  );
}
