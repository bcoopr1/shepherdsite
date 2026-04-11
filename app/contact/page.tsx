import ParallaxSection from "@/components/ParallaxSection";
import ContactForm from "@/components/ContactForm";
import HudFrame from "@/components/HudFrame";
import { Mail, MapPin, Lock } from "lucide-react";

export const metadata = {
  title: "Contact — Shepherd",
  description:
    "Request a briefing on the Shepherd Argus System. We work directly with operators.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/85"
        speed={0.4}
        minHeight="min-h-[60vh]"
      >
        <div className="container-shepherd relative z-10 w-full pt-32">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Open a
            <br />
            <span className="text-bone/55">channel.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
            Tell us about your environment. We respond directly, in plain
            language, and we don&apos;t pass your information to anyone.
          </p>
        </div>
      </ParallaxSection>

      {/* Form */}
      <section className="relative bg-ink-900 py-32">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-shepherd relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <HudFrame label="Contact // Transmission">
              <ContactForm />
            </HudFrame>
          </div>

          <aside className="lg:col-span-5">
            <p className="eyebrow">Direct</p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-white md:text-4xl">
              No call centers.
              <br />
              <span className="text-bone/50">No middlemen.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-bone/70">
              Every inquiry lands with a Shepherd engineer or operator. We
              don&apos;t outsource sales and we don&apos;t farm out support.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 border-l border-tactical/60 pl-4">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-tactical-light" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                    Direct
                  </p>
                  <a
                    href="mailto:command@shepherd.systems"
                    className="font-display text-base uppercase text-white hover:text-tactical-light"
                  >
                    command@shepherd.systems
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l border-tactical/60 pl-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-tactical-light" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                    Operating
                  </p>
                  <p className="font-display text-base uppercase text-white">
                    Continental United States
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l border-tactical/60 pl-4">
                <Lock className="mt-1 h-4 w-4 shrink-0 text-tactical-light" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                    Privacy
                  </p>
                  <p className="text-sm text-bone/70">
                    Encrypted in transit. Stored locally. Never sold, never
                    shared.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
