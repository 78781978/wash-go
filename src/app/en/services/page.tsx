import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { MotionStagger } from "@/components/MotionReveal";
import { serviceCategories } from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "Services — Wash & Go",
  description:
    "The full service range at Wash & Go hand car wash: exterior wash, interior detailing, ceramic coatings and paint polishing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumb="Services"
        title="Every treatment done by hand, with attention to detail"
        homeHref="/en"
        homeLabel="Home"
        description="From a quick refresh to a full paint restoration — choose the scope that matches your car's condition and needs."
      />

      {serviceCategories.map((category, i) => (
        <section key={category.title} className={i % 2 === 0 ? "bg-mist py-24" : "bg-white py-24"}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow={`0${i + 1}`} title={category.title} description={category.intro} />
            <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.services.map((s) => (
                <ServiceCard key={s.slug} service={s} detailed locale="en" />
              ))}
            </MotionStagger>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Not sure which package to choose?
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Call us or drive in — we&apos;ll recommend a package matched to your paint&apos;s condition and how you
            use your car.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/pricing"
              className="flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
            >
              See pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/en/contact"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
