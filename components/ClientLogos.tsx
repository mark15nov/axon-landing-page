"use client";

import React from "react";

const CLIENTS = [
  {
    name: "Advisory Business Boards",
    src: "/logos/clients/advisory-business-boards.png",
    className: "max-h-10 sm:max-h-11",
  },
  {
    name: "Imagina",
    src: "/logos/clients/imagina.png",
    className: "max-h-9 sm:max-h-10",
  },
  {
    name: "Kia",
    src: "/logos/clients/kia.svg",
    className: "max-h-7 sm:max-h-8",
  },
  {
    name: "Kratos FP",
    src: "/logos/clients/kratos-fp.png",
    className: "max-h-10 sm:max-h-11",
  },
  {
    name: "Kalamata",
    src: "/logos/clients/kalamata-consulting.webp",
    className: "max-h-10 sm:max-h-11",
  },
  {
    name: "Andersen Consulting",
    src: "/logos/clients/andersen-consulting.png",
    className: "max-h-8 sm:max-h-9",
  },
];

export default function ClientLogos() {
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden border-b border-line bg-paper py-9 sm:py-11">
      <div className="mx-auto max-w-[1440px]">
        <div className="space-y-6">
          <p className="kicker text-center text-[0.62rem] text-muted/80">
            Empresas que ya confían en nosotros
          </p>
          <div className="relative min-w-0 flex-1 overflow-visible">
            <div className="marquee-track flex w-max items-center gap-16 pr-16">
              {marqueeClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex min-h-12 w-[165px] shrink-0 items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={index < CLIENTS.length ? client.name : ""}
                    aria-hidden={index >= CLIENTS.length}
                    className={`max-w-[165px] object-contain opacity-80 grayscale mix-blend-multiply ${client.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
