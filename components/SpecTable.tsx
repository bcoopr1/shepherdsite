"use client";

import { motion } from "framer-motion";

type Spec = { label: string; value: string };

type Props = {
  groups: { title: string; specs: Spec[] }[];
};

export default function SpecTable({ groups }: Props) {
  return (
    <div className="space-y-10">
      {groups.map((g, gi) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: gi * 0.05 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
            {g.title}
          </p>
          <div className="mt-4 divide-y divide-ink-500/60 border-t border-ink-500/60">
            {g.specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between py-3 text-sm"
              >
                <span className="text-bone/55">{s.label}</span>
                <span className="font-display uppercase text-white">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
