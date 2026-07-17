import type { Metadata } from "next";
import Link from "next/link";
import { Info, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard } from "@/components/PricingCard";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config";
import { addOns, pricingTiers } from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "Pricing — Wash & Go",
  description: "Clear pricing for Wash & Go hand car wash — Express, Premium, Detailing packages and add-on services.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        crumb="Pricing"
        title="No-surprises pricing"
        homeHref="/en"
        homeLabel="Home"
        description="Three packages matched to your needs, plus a list of add-on services you can book at any time."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <MotionStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} locale="en" />
            ))}
          </MotionStagger>

          <MotionReveal className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-mist px-5 py-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
            <p className="text-sm text-foreground/60">
              Prices may vary depending on vehicle condition and size (e.g. vans, vehicles after long storage,
              heavy soiling). We always confirm the final price before starting the service.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Add-on services"
            title="Extend your package"
            description="Add single treatments to your chosen wash package — no need to book a separate visit."
          />

          <MotionStagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {addOns.map((a) => (
              <MotionItem
                key={a.name}
                className="flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4"
              >
                <span className="text-sm font-medium text-navy">{a.name}</span>
                <span className="font-display text-sm font-semibold text-blue">{a.price}</span>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <MotionReveal className="flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
              Got a company fleet? We have separate discounted pricing
            </h2>
            <p className="max-w-xl text-base text-white/60">
              Check our business terms — discounts up to 18%, consolidated invoicing and priority
              no-queue service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/en/for-business"
                className="rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
              >
                Our business offer
              </Link>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
