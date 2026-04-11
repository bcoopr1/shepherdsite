"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Radio, Layers } from "lucide-react";

const slides = [
  {
    Icon: Layers,
    eyebrow: "01 / Argus",
    title: "The System",
    description:
      "A self-contained LoRa mesh awareness platform. One Hub. Up to thirty-two Scouts. Zero outside dependencies.",
  },
  {
    Icon: Radio,
    eyebrow: "02 / Hub",
    title: "Central Base",
    description:
      "Aggregates the mesh, hosts the local interface, and stores every event on-device. The brain of the operation.",
  },
  {
    Icon: Eye,
    eyebrow: "03 / Scout",
    title: "Remote Sensor",
    description:
      "PIR, magnetometer, environment, vibration. Five-year battery floor. Drop and forget.",
  },
];

export default function PinnedProductScroller() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(slides.length - 1) * 100}vw`]
  );

  return (
    <section ref={ref} className="relative h-[300vh] bg-ink-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-ink-500 to-transparent" />

        <div className="container-shepherd absolute left-0 right-0 top-24 z-10 flex items-center justify-between">
          <p className="eyebrow">Architecture</p>
          <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
            Scroll to advance / 03 frames
          </p>
        </div>

        <motion.div style={{ x }} className="flex h-full will-change-transform">
          {slides.map((s, i) => (
            <div
              key={s.title}
              className="flex h-full w-screen shrink-0 items-center"
            >
              <div className="container-shepherd grid w-full gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-tactical-light" />
                    <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
                      {s.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
                    {s.title}
                  </h3>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
                    {s.description}
                  </p>
                  <p className="mt-12 font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                    Frame {String(i + 1).padStart(2, "0")} / 03
                  </p>
                </div>
                <div className="hidden lg:col-span-5 lg:block">
                  <div className="relative aspect-square w-full border border-ink-500 bg-ink-800/50">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <s.Icon className="h-32 w-32 text-tactical-light/70" strokeWidth={1} />
                    </div>
                    <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-tactical-light" />
                    <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-tactical-light" />
                    <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-tactical-light" />
                    <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-tactical-light" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
