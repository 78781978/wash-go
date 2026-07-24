import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText, CalendarClock, Users, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config";
import { fleetPlans } from "@/lib/site-config.en";

export const metadata: Metadata = {
  title: "For Business – Wash & Go",
  description: "Fleet car washing at Wash & Go – discounts, consolidated invoicing and priority service for companies and lessors.",
};

const benefits = [
  { icon: Building2, title: "For any fleet size", desc: "From a handful of company cars to transport fleets numbering hundreds of vehicles." },
  { icon: FileText, title: "B2B billing", desc: "VAT invoices, consolidated monthly billing, flexible payment terms." },
  { icon: CalendarClock, title: "Off-peak washing", desc: "A schedule that fits your business – no downtime for your fleet." },
  { icon: Users, title: "Dedicated account manager", desc: "One point of contact responsible for quality and on-time service." },
];

export default function ForBusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For business & fleets"
        crumb="For Business"
        title="A fleet that always looks professional"
        homeHref="/en"
        homeLabel="Home"
        description="We designed our fleet-washing process so it never disrupts your business – with discounts, consolidated invoicing and a dedicated account manager."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why us" title="A partnership built around your business" />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <MotionItem key={b.title} className="rounded-2xl border border-line bg-mist p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{b.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Fleet packages"
            title="Choose a plan that fits your fleet size"
            description="All plans include the full hand-wash scope – they differ in discount, scheduling flexibility and billing model."
          />

          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {fleetPlans.map((plan, i) => (
              <MotionItem
                key={plan.name}
                className={`flex h-full flex-col rounded-3xl p-7 ${
                  i === 1 ? "border-2 border-blue bg-navy text-white shadow-xl lg:-translate-y-3" : "border border-line bg-white"
                }`}
              >
                <h3 className={`font-display text-xl font-semibold ${i === 1 ? "text-white" : "text-navy"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1.5 text-sm ${i === 1 ? "text-white/60" : "text-foreground/70"}`}>{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === 1 ? "text-blue-2" : "text-blue"}`} />
                      <span className={i === 1 ? "text-white/80" : "text-foreground/75"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/en/contact"
                  className={`mt-7 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    i === 1 ? "bg-blue text-white hover:bg-blue-2" : "bg-navy text-white hover:bg-blue"
                  }`}
                >
                  Ask about terms
                </Link>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">How we start</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy text-balance">
              Onboarding in 3 steps
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { n: "01", t: "Call and quote", d: "We look at your fleet size and wash frequency." },
                { n: "02", t: "Agreement and schedule", d: "We agree the service scope, discount and fixed visit times." },
                { n: "03", t: "Start of service", d: "You get an account manager and your first consolidated invoice after a month." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="font-display text-2xl font-bold text-blue">{s.n}</span>
                  <div>
                    <p className="font-display text-base font-semibold text-navy">{s.t}</p>
                    <p className="mt-1 text-sm text-foreground/60">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <Building2 className="h-9 w-9 text-blue-2" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-balance">
              Let&apos;s talk about your fleet
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Send us your vehicle count – we&apos;ll prepare a custom quote within 24 hours.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/en/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-2"
              >
                Send an enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {site.email}
              </a>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
