import ParallaxSection from "@/components/ParallaxSection";
import SectionHeading from "@/components/SectionHeading";
import SpecTable from "@/components/SpecTable";
import HudFrame from "@/components/HudFrame";
import PinnedProductScroller from "@/components/PinnedProductScroller";
import Link from "next/link";
import { ArrowRight, Eye, Radio } from "lucide-react";

export const metadata = {
  title: "Products — Shepherd",
  description:
    "Argus is a self-contained LoRa mesh monitoring system. The Hub aggregates and acts. The Scout watches and reports.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/82"
        speed={0.4}
        minHeight="min-h-[80vh]"
      >
        <div className="container-shepherd relative z-10 w-full pt-32">
          <p className="eyebrow">Hardware</p>
          <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            One system.
            <br />
            <span className="text-bone/55">Two units.</span>
            <br />
            Total awareness.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
            Argus is the flagship Shepherd platform. Built around a Hub and a
            family of Scouts, it forms a private LoRa mesh that runs without
            internet, without subscriptions, and without ever phoning home.
          </p>
        </div>
      </ParallaxSection>

      {/* Pinned scroll */}
      <PinnedProductScroller />

      {/* ARGUS SYSTEM */}
      <section
        id="argus"
        className="relative scroll-mt-24 border-t border-ink-500/60 bg-ink-900 py-32"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-shepherd relative grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="01 / The Argus System"
              title={
                <>
                  Argus.
                  <br />
                  <span className="text-bone/50">Closed-loop awareness.</span>
                </>
              }
              description="Every Argus deployment is a private network. Hub and Scouts pair on a hardware key. The mesh is invisible to anything that isn't part of it. Drop it in a pasture, a perimeter, or a Pelican case."
            />
          </div>
          <div className="lg:col-span-7">
            <HudFrame label="Argus // System Diagram">
              <div className="relative h-72 w-full">
                <div className="absolute inset-0 grid-bg opacity-30" />
                {/* Hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-20 w-20 items-center justify-center border border-tactical bg-ink-800 text-tactical-light">
                    <Radio className="h-6 w-6" />
                  </div>
                  <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-ultra-wide text-tactical-light">
                    Hub
                  </p>
                </div>
                {/* Scouts */}
                {[
                  { x: "10%", y: "20%" },
                  { x: "85%", y: "15%" },
                  { x: "20%", y: "75%" },
                  { x: "80%", y: "70%" },
                  { x: "50%", y: "8%" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: p.x, top: p.y }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center border border-ink-500 bg-ink-900 text-bone">
                      <Eye className="h-3 w-3" />
                    </div>
                  </div>
                ))}
                {/* Lines */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full">
                  <line x1="50%" y1="50%" x2="13%" y2="24%" stroke="#3A3F45" strokeDasharray="2 4" />
                  <line x1="50%" y1="50%" x2="88%" y2="19%" stroke="#3A3F45" strokeDasharray="2 4" />
                  <line x1="50%" y1="50%" x2="23%" y2="79%" stroke="#3A3F45" strokeDasharray="2 4" />
                  <line x1="50%" y1="50%" x2="83%" y2="74%" stroke="#3A3F45" strokeDasharray="2 4" />
                  <line x1="50%" y1="50%" x2="53%" y2="12%" stroke="#3A3F45" strokeDasharray="2 4" />
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-ink-500/60 pt-6 text-center">
                <div>
                  <p className="font-mono text-[10px] uppercase text-bone/40">
                    Topology
                  </p>
                  <p className="mt-1 font-display text-sm uppercase text-white">
                    Star Mesh
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-bone/40">
                    Pairing
                  </p>
                  <p className="mt-1 font-display text-sm uppercase text-white">
                    Hardware Key
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-bone/40">
                    Backhaul
                  </p>
                  <p className="mt-1 font-display text-sm uppercase text-white">
                    None Required
                  </p>
                </div>
              </div>
            </HudFrame>
          </div>
        </div>
      </section>

      {/* HUB */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/88"
        speed={0.3}
        minHeight="min-h-[110vh]"
      >
        <div
          id="hub"
          className="container-shepherd relative z-10 w-full scroll-mt-24 py-32"
        >
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="02 / Hub"
                title={
                  <>
                    The Hub.
                    <br />
                    <span className="text-bone/50">Operator command.</span>
                  </>
                }
                description="The Hub is the brain of the system. It aggregates every Scout report, runs local detection logic, hosts a clean operator interface, and stores months of event history on-device. Power it from a wall, a battery, or a vehicle. It does not need anything else."
              />
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-tactical">
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <HudFrame label="Hub // Specs">
                <SpecTable
                  groups={[
                    {
                      title: "Radio",
                      specs: [
                        { label: "Protocol", value: "LoRa Mesh" },
                        { label: "Band", value: "915 MHz ISM" },
                        { label: "Output", value: "1 W EIRP" },
                        { label: "Range", value: "15 km LOS" },
                      ],
                    },
                    {
                      title: "Compute",
                      specs: [
                        { label: "CPU", value: "Quad ARM" },
                        { label: "Memory", value: "4 GB" },
                        { label: "Storage", value: "256 GB SSD" },
                        { label: "OS", value: "Shepherd Linux" },
                      ],
                    },
                    {
                      title: "Power & Enclosure",
                      specs: [
                        { label: "Input", value: "12 / 24 VDC" },
                        { label: "Idle Draw", value: "3.2 W" },
                        { label: "Enclosure", value: "Aluminum" },
                        { label: "IP Rating", value: "IP67" },
                      ],
                    },
                  ]}
                />
              </HudFrame>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* SCOUT */}
      <section
        id="scout"
        className="relative scroll-mt-24 border-t border-ink-500/60 bg-ink-900 py-32"
      >
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-shepherd relative grid gap-16 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <HudFrame label="Scout // Specs">
              <SpecTable
                groups={[
                  {
                    title: "Sensors",
                    specs: [
                      { label: "Motion", value: "PIR / mmWave" },
                      { label: "Magnetic", value: "3-Axis" },
                      { label: "Vibration", value: "Piezo" },
                      { label: "Environment", value: "Temp / RH" },
                    ],
                  },
                  {
                    title: "Power",
                    specs: [
                      { label: "Cell", value: "LiSOCl₂" },
                      { label: "Battery Life", value: "5 yr" },
                      { label: "Solar", value: "Optional 2 W" },
                      { label: "Sleep Draw", value: "12 µA" },
                    ],
                  },
                  {
                    title: "Build",
                    specs: [
                      { label: "Weight", value: "240 g" },
                      { label: "Dimensions", value: "120 x 60 x 28 mm" },
                      { label: "IP Rating", value: "IP68" },
                      { label: "Operating", value: "-30 to 70 °C" },
                    ],
                  },
                ]}
              />
            </HudFrame>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6">
            <SectionHeading
              eyebrow="03 / Scout"
              title={
                <>
                  The Scout.
                  <br />
                  <span className="text-bone/50">Eyes on the line.</span>
                </>
              }
              description="The Scout is a ruggedized, ultra-low-power sensor node engineered to be deployed once and forgotten. Mount it on a fence, a tank, a tree, or a Pelican case. It will report for years before you ever touch it again."
            />
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-tactical">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/88"
        speed={0.4}
        minHeight="min-h-[70vh]"
      >
        <div className="container-shepherd relative z-10 mx-auto flex w-full flex-col items-center text-center">
          <p className="eyebrow">Deployment</p>
          <h2 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1] tracking-tight text-white md:text-6xl">
            Pilots are open.
            <br />
            <span className="text-tactical-light">Briefings are closed.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/70">
            We work directly with operators. No resellers. No call centers.
          </p>
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
