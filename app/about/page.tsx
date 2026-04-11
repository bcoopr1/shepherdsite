import ParallaxSection from "@/components/ParallaxSection";
import SectionHeading from "@/components/SectionHeading";
import HudFrame from "@/components/HudFrame";
import Stat from "@/components/Stat";
import Link from "next/link";
import { ArrowRight, Compass, Lock, Wrench } from "lucide-react";

export const metadata = {
  title: "About — Shepherd",
  description:
    "Shepherd builds autonomous monitoring hardware for ranches, outdoor properties, and tactical operations.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/85"
        speed={0.35}
        minHeight="min-h-[80vh]"
      >
        <div className="container-shepherd relative z-10 w-full pt-32">
          <p className="eyebrow">About Shepherd</p>
          <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Built by
            <br />
            <span className="text-bone/55">people who</span>
            <br />
            stand watch.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
            Shepherd is a defense and ag-tech company building monitoring
            systems for the places where the grid ends and the consequences
            begin. We do not make consumer gadgets. We make the equipment that
            comes back from the field still working.
          </p>
        </div>
      </ParallaxSection>

      {/* Mission */}
      <section className="relative bg-ink-900 py-32">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-shepherd relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Mission"
              title={
                <>
                  Watching over
                  <br />
                  what matters.
                </>
              }
            />
          </div>
          <div className="space-y-8 lg:col-span-7">
            <p className="text-pretty text-lg leading-relaxed text-bone/80">
              The name is literal. A shepherd watches over a flock — patiently,
              quietly, in conditions most people would refuse. The metaphor
              held when we started building hardware for ranchers. It still
              holds when we build for the people who watch over a base, a
              border, or a team in the field.
            </p>
            <p className="text-pretty text-lg leading-relaxed text-bone/80">
              Argus, our flagship system, is named for the hundred-eyed
              guardian of myth. The reference is on purpose. The product is
              the modern equivalent: a quiet, distributed network of eyes that
              never close, that don&apos;t need permission, and that don&apos;t
              answer to anyone but the person who deployed them.
            </p>
            <p className="text-pretty text-lg leading-relaxed text-bone/80">
              We exist because the dominant model — cellular IoT, cloud
              dependency, monthly subscription — fails the moment the
              connection drops. We refuse to ship anything that fails that
              way.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/88"
        speed={0.3}
        minHeight="min-h-[100vh]"
      >
        <div className="container-shepherd relative z-10 w-full py-32">
          <SectionHeading
            eyebrow="Tech Philosophy"
            title={
              <>
                Three rules.
                <br />
                <span className="text-bone/50">No exceptions.</span>
              </>
            }
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="card-panel p-8">
              <Lock className="h-6 w-6 text-tactical-light" />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
                Rule 01
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Sovereignty
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">
                If a feature requires us to know what you&apos;re doing, we
                don&apos;t build it. The hardware reports to you and only to
                you.
              </p>
            </div>
            <div className="card-panel p-8">
              <Wrench className="h-6 w-6 text-tactical-light" />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
                Rule 02
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Repairability
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">
                Field-serviceable. Standard fasteners. Documented schematics.
                We will never brick a unit because a server went away.
              </p>
            </div>
            <div className="card-panel p-8">
              <Compass className="h-6 w-6 text-tactical-light" />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-ultra-wide text-tactical-light">
                Rule 03
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Endurance
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">
                Designed for years of unattended operation in heat, cold, dust,
                and salt. If it can&apos;t survive a Texas summer or a Montana
                winter, it doesn&apos;t ship.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Founder */}
      <section className="relative bg-ink-900 py-32">
        <div className="container-shepherd relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <HudFrame label="Founder // 01">
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
                <div className="flex h-full items-end p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-bone/40">
                      Beau Cooper
                    </p>
                    <p className="mt-1 font-display text-xl uppercase text-white">
                      Founder, Shepherd
                    </p>
                  </div>
                </div>
              </div>
            </HudFrame>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Founder"
              title={
                <>
                  Beau Cooper.
                  <br />
                  <span className="text-bone/50">Builder, watcher.</span>
                </>
              }
            />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-bone/75 md:text-lg">
              <p>
                Beau started Shepherd after years of seeing the same pattern on
                the ranch and on deployment: the moment you actually need to
                know what&apos;s happening on the ground, the connection
                isn&apos;t there. He built the first Argus prototype in a barn,
                tested it across a working cattle operation, and refused to
                ship it until it ran for a full year without intervention.
              </p>
              <p>
                His thesis is simple. The people doing the hardest work — in
                agriculture, in the outdoors, in defense — deserve hardware
                that respects their autonomy. Tools, not platforms.
                Instruments, not subscriptions.
              </p>
              <p className="font-mono text-sm uppercase tracking-ultra-wide text-tactical-light">
                &ldquo;Build the thing you&apos;d trust with your own
                perimeter.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative border-y border-ink-500/60 bg-ink-800/40 py-20">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="container-shepherd relative grid grid-cols-2 gap-10 md:grid-cols-4">
          <Stat value="2023" label="Founded" />
          <Stat value="12" suffix="mo" label="Field Trial" />
          <Stat value="100" suffix="%" label="In-house Firmware" />
          <Stat value="0" label="Cloud Dependencies" />
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/90"
        speed={0.4}
        minHeight="min-h-[70vh]"
      >
        <div className="container-shepherd relative z-10 mx-auto flex w-full flex-col items-center text-center">
          <p className="eyebrow">Work with us</p>
          <h2 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1] tracking-tight text-white md:text-6xl">
            If you stand watch,
            <br />
            <span className="text-tactical-light">we should talk.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-tactical">
              Request Briefing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}
