import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  Award,
  Droplets,
  Ruler,
  Snowflake,
  Sparkles,
  Truck,
  Wifi,
  Wind,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { stats, values } from "@/lib/site-config.en";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "About – Wash & Go",
  description: "Learn about the story and values behind Wash & Go – a premium hand car wash.",
};

const facility = [
  { icon: Wrench, title: "Professional equipment", desc: "Polishers, extractors and premium-class foam generators." },
  { icon: Award, title: "Certified chemistry", desc: "Car care products from trusted brands, safe for coatings." },
  { icon: Truck, title: "Pickup & delivery", desc: "We pick up your car and deliver it back clean to your address." },
];

const amenities = [
  { icon: Armchair, label: "Waiting lounge" },
  { icon: Truck, label: "Vans & delivery vehicles" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Droplets, label: "Washer fluid top-up" },
  { icon: Sparkles, label: "Auto SPA services" },
  { icon: Snowflake, label: "Refrigerated unit disinfection" },
  { icon: Wind, label: "Ozone treatment" },
  { icon: Ruler, label: "Max. height: 250 cm" },
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
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <MotionReveal>
            <div className="flex flex-col items-center gap-5">
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
              Wash&amp;Go was built on the belief that washing a car can – and should – feel like a
              premium service, not a rushed drive through an automatic tunnel. From day one we&apos;ve focused
              on hand washing, safe products, and attention to the details you don&apos;t notice at first{"\u00A0"}glance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Today our team is made up of experienced detailers who look after a few cars every
              day – from city hatchbacks to collector cars and company fleets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              You&apos;ll find us in Goleniów, where we&apos;ve grown alongside our customers for over a year –
              today that means over 5,000 cars washed a year and a loyal group of regulars who entrust
              their cars to us. For those who value convenience, we also offer vehicle pickup &amp; delivery, so
              you can get a clean car without stepping away from your day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              <strong className="font-semibold text-navy">
                Worth knowing: the car wash formerly known as Auto Lab Detailing Q has changed its name to
                Wash&amp;Go
              </strong>{" "}
              – the same trusted team and quality of service, now under a new name.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 sm:grid-cols-3">
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
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Amenities"
            title="Everything you need, on site"
          />
          <MotionStagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((a) => (
              <MotionItem
                key={a.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-navy">{a.label}</span>
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
