"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Props = {
  children: ReactNode;
  bgImage?: string;
  bgGradient?: string;
  overlay?: string;
  speed?: number; // 0 = no parallax, 1 = full scroll
  className?: string;
  minHeight?: string;
};

export default function ParallaxSection({
  children,
  bgImage,
  bgGradient,
  overlay = "bg-ink-900/70",
  speed = 0.35,
  className = "",
  minHeight = "min-h-screen",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 100}px`, `${speed * 100}px`]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.4, 1, 1, 0.4]
  );

  return (
    <section
      ref={ref}
      className={`relative ${minHeight} overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        {bgImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        )}
        {bgGradient && (
          <div className={`absolute inset-0 ${bgGradient}`} aria-hidden />
        )}
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-20"
        aria-hidden
      />
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full w-full items-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
