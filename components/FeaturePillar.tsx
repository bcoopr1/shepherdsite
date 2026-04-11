"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export default function FeaturePillar({
  Icon,
  title,
  description,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative border border-ink-500 bg-ink-800/50 p-8 transition-colors hover:border-tactical/70"
    >
      <div className="mb-8 flex h-12 w-12 items-center justify-center border border-ink-500 bg-ink-900 text-tactical-light transition-colors group-hover:border-tactical group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light/80">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-white md:text-2xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-bone/70">{description}</p>
    </motion.div>
  );
}
