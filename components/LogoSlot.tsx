"use client";

import React, { useState } from "react";

/**
 * Slot de logo: muestra /public/logos/{slug}.{ext}; si el archivo no existe
 * (onError), cae al wordmark de texto. Suelta los SVG/PNG en public/logos/.
 */
export default function LogoSlot({
  slug,
  label,
  ext = "svg",
}: {
  slug: string;
  label: string;
  ext?: "svg" | "png" | "webp";
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-[13px] font-medium tracking-tight text-white/55">
        {label}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/${slug}.${ext}`}
      alt={label}
      title={label}
      onError={() => setFailed(true)}
      className="h-6 w-auto object-contain opacity-75 transition hover:opacity-100"
    />
  );
}
