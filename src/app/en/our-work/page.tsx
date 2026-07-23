import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { GalleryTile } from "@/components/GalleryTile";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger } from "@/components/MotionReveal";
import { galleryItems, testimonials } from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "Our Work – Wash & Go",
  description: "See selected work from Wash & Go – detailing, ceramic coatings, fleet washing.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        crumb="Our Work"
        title="Results that speak for themselves"
        homeHref="/en"
        homeLabel="Home"
        description="Selected projects from recent months – from paint correction to full fleet washing."
      />

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <MotionStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((g, i) => (
              <GalleryTile key={g.title} title={g.title} category={g.category} tone={g.tone} large={i === 0} image={g.image} alt={g.alt} />
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Reviews" title="What our customers say" align="center" />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Your car could be next in this gallery
          </h2>
          <Link
            href="/en/contact"
            className="flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
          >
            Book a visit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
