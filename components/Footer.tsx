import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink-500/60 bg-ink-900">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="container-shepherd relative py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-6 w-6 text-tactical-light" />
              <span className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-white">
                Shepherd
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/70">
              Autonomous monitoring systems built for environments where the
              grid ends. No internet. No subscriptions. Fully private.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-ultra-wide text-bone/40">
              34.2257° N / 82.4640° W
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/80">
              <li>
                <Link href="/" className="hover:text-tactical-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-tactical-light">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-tactical-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tactical-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Systems</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/80">
              <li>
                <Link
                  href="/products#argus"
                  className="hover:text-tactical-light"
                >
                  Argus
                </Link>
              </li>
              <li>
                <Link
                  href="/products#hub"
                  className="hover:text-tactical-light"
                >
                  Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/products#scout"
                  className="hover:text-tactical-light"
                >
                  Scout
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/80">
              <li>
                <a
                  href="mailto:command@shepherd.systems"
                  className="hover:text-tactical-light"
                >
                  command@shepherd.systems
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-tactical-light"
                >
                  Request briefing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-500/60 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-bone/40">
            © {new Date().getFullYear()} Shepherd Defense Systems
          </p>
          <p className="font-mono text-[11px] uppercase tracking-ultra-wide text-bone/40">
            The eye that never closes
          </p>
        </div>
      </div>
    </footer>
  );
}
