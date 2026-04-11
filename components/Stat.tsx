"use client";

import { motion } from "framer-motion";

type Props = {
  value: string;
  label: string;
  suffix?: string;
};

export default function Stat({ value, label, suffix }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="border-l border-ink-500 pl-6"
    >
      <p className="font-display text-4xl font-semibold text-white md:text-6xl">
        {value}
        {suffix && (
          <span className="ml-1 text-2xl text-tactical-light md:text-3xl">
            {suffix}
          </span>
        )}
      </p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-ultra-wide text-bone/50">
        {label}
      </p>
    </motion.div>
  );
}
