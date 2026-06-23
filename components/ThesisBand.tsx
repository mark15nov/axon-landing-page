"use client";

import React from "react";
import { Reveal } from "./motion";

export default function ThesisBand() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <Reveal>
          <p className="font-serif text-[clamp(1.7rem,3.6vw,3rem)] font-normal leading-[1.15]">
            De información dispersa a{" "}
            <span className="text-axon-yellow">inteligencia empresarial</span> y
            mejora continua.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
