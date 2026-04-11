"use client";

import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/50">
        Scroll
      </span>
      <div className="relative h-12 w-px bg-ink-500">
        <motion.div
          initial={{ y: -48 }}
          animate={{ y: 48 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-6 w-px bg-tactical-light"
        />
      </div>
    </motion.div>
  );
}
