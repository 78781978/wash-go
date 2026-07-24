import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "Contact – Wash & Go",
  description: "Get in touch with Wash & Go – address, phone, email, opening hours and contact form.",
};

const infoCards = [
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: Clock,
    label: "Opening hours",
    value: `Mon–Fri: ${site.hoursWeekdays}\nSat: ${site.hoursSaturday}\nSun: ${site.hoursSunday}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title="Let's talk about your car"
        homeHref="/en"
        homeLabel="Home"
        description="Call, message, or drive in without a booking – we're happy to recommend the best service for you."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-8">
              <MotionReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {infoCards.map((c) => (
                  <div key={c.label} className="rounded-2xl border border-line bg-mist p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/65">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block whitespace-pre-line text-sm font-medium text-navy hover:text-blue">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-sm font-medium text-navy">{c.value}</p>
                    )}
                  </div>
                ))}
              </MotionReveal>

              <MotionReveal delay={0.1} className="relative overflow-hidden rounded-2xl bg-navy p-8">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue/25 blur-3xl" />
                <div className="relative">
                  <MapPin className="h-8 w-8 text-blue-2" />
                  <p className="mt-4 font-display text-lg font-semibold text-white">{site.city}</p>
                  <p className="mt-1 text-sm text-white/60">{site.address}</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    <Navigation className="h-4 w-4" />
                    Get directions on Google Maps
                  </a>
                </div>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.15}>
              <ContactForm locale="en" />
            </MotionReveal>
          </div>

          <MotionReveal delay={0.2} className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Directions map – Wash & Go"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                className="h-[420px] w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
