import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import SectionHeading from "@/components/SectionHeading";
import FeaturePillar from "@/components/FeaturePillar";
import ProductCard from "@/components/ProductCard";
import Stat from "@/components/Stat";
import HudFrame from "@/components/HudFrame";
import Link from "next/link";
import {
  Radio,
  ShieldCheck,
  Cpu,
  Wifi,
  TreePine,
  Crosshair,
  Wheat,
  ArrowRight,
  Eye,
  Activity,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SECTION: System overview / parallax 1 */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/82"
        speed={0.4}
        minHeight="min-h-[110vh]"
      >
        <div className="container-shepherd relative z-10 grid w-full gap-16 py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The Argus System"
              title={
                <>
                  A network you own.
                  <br />
                  <span className="text-bone/50">A signal you trust.</span>
                </>
              }
              description="Argus is a fully self-contained LoRa mesh monitoring system. Two units, one mission: Hub at the operator, Scouts at the perimeter. No cellular plan. No cloud account. No way for anyone outside your network to know it exists."
            />

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-tactical">
                System Specifications
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HudFrame label="Argus // Live">
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-ink-500/60 pb-3">
                  <span className="text-bone/50">Mesh nodes online</span>
                  <span className="text-tactical-light">12 / 12</span>
                </div>
                <div className="flex items-center justify-between border-b border-ink-500/60 pb-3">
                  <span className="text-bone/50">Hub uplink</span>
                  <span className="flex items-center gap-2 text-tactical-light">
                    <span className="h-1.5 w-1.5 animate-pulse-slow bg-tactical-light" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-ink-500/60 pb-3">
                  <span className="text-bone/50">Scout 07 // North fence</span>
                  <span className="text-bone">Quiet</span>
                </div>
                <div className="flex items-center justify-between border-b border-ink-500/60 pb-3">
                  <span className="text-bone/50">Scout 12 // Tank field</span>
                  <span className="text-bone">Quiet</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-bone/50">Battery floor</span>
                  <span className="text-tactical-light">94%</span>
                </div>
              </div>
            </HudFrame>
          </div>
        </div>
      </ParallaxSection>

      {/* SECTION: Stats strip */}
      <section className="relative border-y border-ink-500/60 bg-ink-800/40 py-20">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="container-shepherd relative grid grid-cols-2 gap-10 md:grid-cols-4">
          <Stat value="15" suffix="km" label="Mesh Range" />
          <Stat value="5" suffix="yr" label="Scout Endurance" />
          <Stat value="0" label="Subscriptions" />
          <Stat value="100" suffix="%" label="Air-Gapped" />
        </div>
      </section>

      {/* SECTION: Hub + Scout intro / parallax 2 */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/85"
        speed={0.3}
        minHeight="min-h-[110vh]"
      >
        <div className="container-shepherd relative z-10 w-full py-32">
          <SectionHeading
            eyebrow="Hardware"
            title={
              <>
                Two units.
                <br />
                One closed loop.
              </>
            }
            description="Designed to be deployed by one person, in one afternoon, with no IT department. The Hub is the brain. The Scouts are the senses. Together they form a private LoRa mesh that sees everything you place it on."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <ProductCard
              index="01 // Hub"
              title="Hub"
              tagline="Central Base Station"
              description="The command node. Aggregates data from every Scout in the mesh, alerts on motion or environmental changes, and presents a clean local interface — no servers, no signups."
              Icon={Radio}
              href="/products#hub"
              specs={[
                { label: "Radio", value: "LoRa 915" },
                { label: "Storage", value: "256 GB" },
                { label: "Power", value: "12 / 24V" },
                { label: "IP Rating", value: "IP67" },
              ]}
            />
            <ProductCard
              index="02 // Scout"
              title="Scout"
              tagline="Remote Sensor Node"
              description="Solar-augmented and ruggedized. Drop one on a fence post, a tank, or a tree line. PIR, magnetometer, temperature, vibration — and a five-year battery floor."
              Icon={Eye}
              href="/products#scout"
              specs={[
                { label: "Sensors", value: "PIR + ENV" },
                { label: "Battery", value: "5 yr" },
                { label: "Range", value: "15 km" },
                { label: "IP Rating", value: "IP68" },
              ]}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* SECTION: Capabilities pillars */}
      <section className="relative bg-ink-900 py-32">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-shepherd relative">
          <SectionHeading
            eyebrow="System Capabilities"
            title={
              <>
                Built for
                <br />
                <span className="text-bone/50">silent perimeters.</span>
              </>
            }
            description="Every component is engineered around four principles. They are not features. They are non-negotiable."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeaturePillar
              index={0}
              Icon={ShieldCheck}
              title="Sovereign"
              description="No outbound traffic. No analytics. No cloud handoff. Your data lives on your hardware and dies there if you say so."
            />
            <FeaturePillar
              index={1}
              Icon={Wifi}
              title="Off-Grid"
              description="LoRa mesh handles tens of kilometers between nodes. Drop a Hub anywhere — a barn, a Pelican case, a tactical vehicle — and the network forms itself."
            />
            <FeaturePillar
              index={2}
              Icon={Cpu}
              title="Resilient"
              description="Edge processing on every Scout. Self-healing mesh routes around damaged nodes. Built to keep working when everything else has stopped."
            />
            <FeaturePillar
              index={3}
              Icon={Activity}
              title="Quiet"
              description="No emissions outside the licensed band. No discoverable SSIDs. No leaked metadata. The network is invisible to anything that isn't yours."
            />
          </div>
        </div>
      </section>

      {/* SECTION: Use case pillars / parallax 3 */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/88"
        speed={0.45}
        minHeight="min-h-[120vh]"
      >
        <div className="container-shepherd relative z-10 w-full py-32">
          <SectionHeading
            eyebrow="Use Cases"
            title={
              <>
                Wherever the
                <br />
                grid ends.
              </>
            }
            description="From cattle country to contested terrain, Argus is the same hardware running the same job: see what matters, before anyone else does."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <FeaturePillar
              index={0}
              Icon={Wheat}
              title="Agriculture"
              description="Watch herds, gates, water tanks, and fence lines across thousands of acres. Catch a downed fence in minutes instead of days."
            />
            <FeaturePillar
              index={1}
              Icon={TreePine}
              title="Outdoor Property"
              description="Hunting leases, off-grid cabins, timber tracts. Know who is on your land — and when — without giving up your privacy to a SaaS vendor."
            />
            <FeaturePillar
              index={2}
              Icon={Crosshair}
              title="Tactical"
              description="Forward-deployed perimeter awareness for teams that cannot rely on cellular, cannot tolerate emissions, and cannot afford to be late."
            />
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-tactical">
              Discuss Your Use Case
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* SECTION: Closing CTA / parallax 4 */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2400&q=80"
        overlay="bg-ink-900/90"
        speed={0.35}
        minHeight="min-h-[90vh]"
      >
        <div className="container-shepherd relative z-10 mx-auto flex w-full flex-col items-center text-center">
          <p className="eyebrow">Shepherd / Argus</p>
          <h2 className="mt-6 font-display text-5xl font-semibold uppercase leading-[1] tracking-tight text-white md:text-7xl lg:text-8xl">
            The eye that
            <br />
            <span className="text-tactical-light">never closes.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
            Watch what matters. From anywhere. With nothing in between.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-tactical">
              Request Briefing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost">
              View Hardware
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
}
