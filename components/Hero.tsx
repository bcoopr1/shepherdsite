"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollCue from "./ScrollCue";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink-900"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/70 to-ink-900" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-radial-fade" />
      </motion.div>

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-tactical/40 to-transparent animate-scan" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-shepherd relative z-10 flex h-full flex-col justify-end pb-24 md:justify-center md:pb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-tactical-light" />
          <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
            Shepherd / Argus System / V1
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]"
        >
          Awareness
          <br />
          <span className="text-bone/60">without</span>
          <br />
          Infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
        >
          Shepherd builds autonomous monitoring systems for the places where the
          grid ends. No internet. No subscriptions. No middlemen. Just signal,
          mesh, and the eye that never closes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/products" className="btn-tactical">
            Explore Argus
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Request Briefing
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-16 hidden items-center gap-8 md:flex"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
              Operational Range
            </p>
            <p className="mt-1 font-display text-lg uppercase text-white">
              15+ km mesh
            </p>
          </div>
          <span className="h-8 w-px bg-ink-500" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
              Endurance
            </p>
            <p className="mt-1 font-display text-lg uppercase text-white">
              5 yr battery
            </p>
          </div>
          <span className="h-8 w-px bg-ink-500" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
              Network
            </p>
            <p className="mt-1 font-display text-lg uppercase text-white">
              Air-gapped
            </p>
          </div>
        </motion.div>
      </motion.div>

      <ScrollCue />
    </section>
  );
}
