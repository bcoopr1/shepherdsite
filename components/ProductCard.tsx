"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  href?: string;
  specs?: { label: string; value: string }[];
};

export default function ProductCard({
  index,
  title,
  tagline,
  description,
  Icon,
  href = "/products",
  specs = [],
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link href={href} className="card-panel block p-8 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
              {index}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold uppercase tracking-wide text-white md:text-4xl">
              {title}
            </h3>
            <p className="mt-2 font-display text-sm uppercase tracking-ultra-wide text-bone/60">
              {tagline}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink-500 bg-ink-800 text-tactical-light transition-all group-hover:border-tactical group-hover:bg-tactical/10">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-bone/70 md:text-base">
          {description}
        </p>

        {specs.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ink-500/60 pt-6 md:grid-cols-4">
            {specs.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-sm uppercase text-white">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center gap-3 font-display text-xs uppercase tracking-ultra-wide text-bone/60 transition-colors group-hover:text-tactical-light">
          View Specifications
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-tactical-light/0 to-transparent transition-all duration-500 group-hover:via-tactical-light" />
      </Link>
    </motion.div>
  );
}
