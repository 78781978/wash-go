import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Droplet, Leaf, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { stats, values } from "@/lib/site-config.en";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "About — Wash & Go",
  description: "Learn about the story and values behind Wash & Go — a premium hand car wash.",
};

const milestones = [
  { year: "2016", text: "We opened our first hand-wash bay in Goleniów." },
  { year: "2019", text: "Expanded the facility with a detailing and paint correction area." },
  { year: "2021", text: "Introduced an osmosis system with full water reclamation." },
  { year: "2023", text: "Launched a fleet package for business customers." },
  { year: "2025", text: "New premium facility with 4 bays and a client lounge." },
];

const facility = [
  { icon: Droplet, title: "Osmosis system", desc: "Demineralised water for the final rinse — zero water spots or residue." },
  { icon: Leaf, title: "Closed water loop", desc: "Wastewater is treated and partly reclaimed for the pre-wash stage." },
  { icon: Wrench, title: "Professional equipment", desc: "Polishers, extractors and premium-class foam generators." },
  { icon: Award, title: "Certified chemistry", desc: "Car care products from trusted brands, safe for coatings." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        crumb="About"
        title="A passion for detail since 2016"
        homeHref="/en"
        homeLabel="Home"
        description="Wash & Go started as a single hand-wash bay. Today it's a premium facility with a team of detailers for whom quality is non-negotiable."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <div className="flex items-center gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export; basePath must be applied manually */}
              <img
                src={`${basePath}/logo-badge.png`}
                alt="Wash & Go"
                width={112}
                height={112}
                className="h-24 w-24 shrink-0 rounded-full shadow-lg shadow-navy/20 sm:h-28 sm:w-28"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">Our story</p>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-navy text-balance sm:text-3xl">
                  We started with a single bay
                </h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              Wash&amp;Go was built on the belief that washing a car can — and should — feel like a
              premium service, not a rushed drive through an automatic tunnel. From day one we&apos;ve focused
              on hand washing, safe products, and attention to the details you don&apos;t notice at first glance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Today our team is made up of experienced detailers who look after dozens of cars every
              day — from city hatchbacks to collector cars and company fleets.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1} className="space-y-5">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 border-l-2 border-line pl-5">
                <span className="-ml-[1.65rem] flex h-8 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-white">
                  {m.year}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-foreground/65">{m.text}</p>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our values" title="What we won't compromise on" />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <MotionItem key={v.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{v.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our facility" title="Premium-class equipment" description="We invest in the equipment and technology that genuinely improve the end result." />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facility.map((f) => (
              <MotionItem key={f.title} className="rounded-2xl bg-graphite p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/20 text-blue-2">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Come see for yourself
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Stop by our facility, see the bays, and talk to our team about the best package for your car.
          </p>
          <Link
            href="/en/contact"
            className="flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
          >
            Get directions & contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
