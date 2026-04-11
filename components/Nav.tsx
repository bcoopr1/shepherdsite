"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-500/80 bg-ink-900/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shepherd flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Shepherd home"
        >
          <Logo className="h-6 w-6 text-bone transition-colors group-hover:text-tactical-light" />
          <span className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-white">
            Shepherd
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group relative font-display text-xs uppercase tracking-ultra-wide text-bone/80 transition-colors hover:text-white"
              >
                <span className={active ? "text-white" : ""}>{l.label}</span>
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-tactical-light transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link href="/contact" className="btn-tactical !py-2 !text-[11px]">
            Request Briefing
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-ink-500 text-bone md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-500/60 bg-ink-900/95 backdrop-blur md:hidden"
          >
            <div className="container-shepherd flex flex-col gap-1 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-ink-500/40 py-3 font-display text-sm uppercase tracking-ultra-wide text-bone hover:text-tactical-light"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-tactical mt-4 justify-center"
              >
                Request Briefing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
