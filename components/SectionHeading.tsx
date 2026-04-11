"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          {align === "center" && (
            <span className="h-px w-8 bg-tactical-light/60" />
          )}
          <p className="eyebrow">{eyebrow}</p>
          <span className="h-px w-8 bg-tactical-light/60" />
        </div>
      )}
      <h2 className="h-display text-balance text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone/70 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
