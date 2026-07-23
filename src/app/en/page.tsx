import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, SprayCan, Sparkles, Droplets, Star, Building2 } from "lucide-react";
import { MotionReveal, MotionStagger, MotionItem } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroVisual } from "@/components/HeroVisual";
import { Marquee } from "@/components/Marquee";
import { StatCounter } from "@/components/StatCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { GalleryTile } from "@/components/GalleryTile";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { site } from "@/lib/site-config";
import {
  faqs,
  galleryItems,
  pricingTiers,
  processSteps,
  serviceCategories,
  stats,
  testimonials,
  values,
} from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "Wash & Go – Premium hand car wash",
  description:
    "Wash & Go is a premium hand car wash in Goleniów. Hand washing, detailing, ceramic coatings, and fleet packages for businesses.",
};

const marqueeItems = [
  { icon: SprayCan, label: "Touchless pre-wash" },
  { icon: Droplets, label: "Active foam" },
  { icon: Sparkles, label: "Protective wax" },
  { icon: ShieldCheck, label: "Ceramic coatings" },
  { icon: Star, label: "Premium detailing" },
  { icon: Building2, label: "For business" },
].map(({ icon: Icon, label }) => (
  <>
    <Icon className="h-4 w-4 text-blue-2" />
    {label}
  </>
));

const featuredServices = serviceCategories.flatMap((c) => c.services).filter((s) =>
  ["two-bucket-wash", "hot-wax", "vacuum-upholstery", "ceramic-coating"].includes(s.slug)
);

export default function HomeEn() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/25 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 rounded-full bg-blue-2/15 blur-3xl animate-float-slower" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-2 lg:gap-10">
          <div>
            <MotionReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-2">
                Premium hand car wash
              </span>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-[3.4rem]">
                Your car deserves more than a wash.
              </h1>
            </MotionReveal>
            <MotionReveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                Wash&amp;Go is hand care for your paint, interior and every detail – unhurried, scratch-free,
                with premium products.
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                An effect that lasts for weeks.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/en/contact"
                className="group flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2 hover:shadow-blue-2/40"
              >
                Book a visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/en/pricing"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See pricing
              </Link>
            </MotionReveal>

            <MotionReveal delay={0.32} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {["No scratches – two-bucket method", "pH-neutral products", "Pickup & delivery"].map((f) => (
                <span key={f} className="flex items-center gap-2 text-xs font-medium text-white/55">
                  <ShieldCheck className="h-4 w-4 text-blue-2" />
                  {f}
                </span>
              ))}
            </MotionReveal>
          </div>

          <HeroVisual locale="en" />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Complete care from paint to interior"
              description="Four categories of treatments combined into packages matched to your car's condition and use."
            />
            <Link
              href="/en/services"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s) => (
              <ServiceCard key={s.slug} service={s} locale="en" />
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="How it works" title="Four steps to a spotless car" align="center" />

          <MotionStagger className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <MotionItem key={step.title} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy font-display text-xl font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute right-[-1.5rem] top-7 hidden h-px w-8 bg-line lg:block" />
                )}
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-graphite py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-2">Why Wash&amp;Go</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl">
              A standard you can see in every detail
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              We don&apos;t cut corners. Every step – from the pre-rinse to the final gloss – is done by hand,
              with trusted, safe products.
            </p>
            <Link
              href="/en/about"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-2 hover:text-white"
            >
              Learn our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionReveal>

          <MotionStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <MotionItem key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{v.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our work"
              title="See the results of our work"
              description="Selected detailing projects and fleet washes."
            />
            <Link
              href="/en/our-work"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy"
            >
              Full gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <MotionStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((g) => (
              <GalleryTile key={g.title} title={g.title} category={g.category} tone={g.tone} />
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear wash packages"
            description="Choose your wash scope – we'll confirm the exact price on-site."
            align="center"
          />

          <MotionStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.slice(0, 4).map((tier) => (
              <PricingCard key={tier.name} tier={tier} locale="en" />
            ))}
          </MotionStagger>

          <p className="mt-10 text-center text-sm text-foreground/55">
            Need the full price list with add-on services?{" "}
            <Link href="/en/pricing" className="font-semibold text-blue hover:text-navy">
              See the full price list →
            </Link>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Customer reviews" title="Trusted by drivers and fleet managers" dark align="center" />

          <MotionStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 rounded-3xl bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <MotionReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue">
                <Building2 className="h-3.5 w-3.5" />
                For businesses & fleets
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy text-balance">
                One monthly invoice for your whole fleet
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/60">
                Flexible packages for leasing companies, transport fleets and company cars – with discounts,
                priority service and a dedicated account manager.
              </p>
              <Link
                href="/en/for-business"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue"
              >
                See our business offer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MotionReveal>
            <MotionReveal delay={0.1} className="grid grid-cols-2 gap-4">
              {["10–20%", "Consolidated invoice", "No queueing", "Account manager"].map((f) => (
                <div key={f} className="rounded-2xl bg-mist p-5 text-center">
                  <p className="font-display text-lg font-bold text-navy">{f}</p>
                </div>
              ))}
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/25 blur-3xl animate-float-slow" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <MotionReveal>
            <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
              Book your car in today
            </h2>
            <p className="mt-4 text-base text-white/60">
              Call, message, or just drive in – we&apos;re waiting for you in {site.city}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/contact"
                className="rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
              >
                Book a visit
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call: {site.phone}
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
