import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Mail, Megaphone, Cookie, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Required Consents – Wash & Go",
  description: "An overview of the consents required when using Wash & Go's forms and services.",
};

const consents = [
  {
    icon: MessageSquare,
    title: "Consent to contact you about the form",
    required: true,
    scope: "Name, email address, phone number, message content.",
    purpose: "Responding to an enquiry sent via the contact form on washandgo.pl.",
    basis: "Art. 6(1)(a) GDPR – freely given consent.",
    withdraw: "Consent can be withdrawn at any time by writing to " + site.email + ".",
  },
  {
    icon: Mail,
    title: "Newsletter consent",
    required: false,
    scope: "Email address.",
    purpose: "Sending information about promotions, new services and Wash & Go events by email.",
    basis: "Art. 6(1)(a) GDPR and Art. 10 of the Act on the Provision of Electronic Services.",
    withdraw: "Unsubscribe with one click in the footer of any email, or by contacting us directly.",
  },
  {
    icon: Megaphone,
    title: "Marketing consent (phone)",
    required: false,
    scope: "Phone number.",
    purpose: "Presenting offers and commercial information by phone, including SMS.",
    basis: "Art. 6(1)(a) GDPR and Art. 172 of the Telecommunications Law.",
    withdraw: "Consent can be withdrawn by phone, email or in writing at any time.",
  },
  {
    icon: Cookie,
    title: "Consent to analytics and marketing cookies",
    required: false,
    scope: "Technical data and identifiers stored in cookies.",
    purpose: "Analysing site traffic, improving functionality, and personalising advertising content.",
    basis: "Art. 6(1)(a) GDPR and Art. 173 of the Telecommunications Law.",
    withdraw: "Cookie settings can be changed at any time in the consent banner or your browser settings.",
  },
];

export default function RequiredConsentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal document"
        crumb="Required Consents"
        title="Required consents"
        homeHref="/en"
        homeLabel="Home"
        description="Below we explain what consents we may ask for on washandgo.pl, why we collect them, and how you can withdraw them."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <MotionReveal className="rounded-2xl border border-line bg-mist p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
              <p className="text-sm leading-relaxed text-foreground/65">
                Consents marked as <strong className="text-navy">required</strong> are necessary to deliver
                that specific site function (e.g. replying to the contact form). All other consents are
                voluntary and don&apos;t affect your ability to use Wash&amp;Go&apos;s core services. Details on how we
                process data are in our{" "}
                <Link href="/en/privacy-policy" className="font-medium text-blue underline underline-offset-2">
                  privacy &amp; cookie policy
                </Link>
                .
              </p>
            </div>
          </MotionReveal>

          <div className="mt-14">
            <SectionHeading eyebrow="Overview" title="Consents used on our website" />
          </div>

          <MotionStagger className="mt-10 space-y-5">
            {consents.map((c) => (
              <MotionItem key={c.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      c.required ? "bg-navy text-white" : "bg-blue-soft text-blue"
                    }`}
                  >
                    {c.required ? "Required" : "Voluntary"}
                  </span>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-5 border-t border-line pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Data scope
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">Purpose</dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Legal basis
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.basis}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      How to withdraw
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.withdraw}</dd>
                  </div>
                </dl>
              </MotionItem>
            ))}
          </MotionStagger>

          <MotionReveal delay={0.1} className="mt-14 rounded-2xl bg-navy p-8 text-white sm:p-10">
            <h3 className="font-display text-xl font-semibold">Questions about your data?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Contact us at{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-blue-2 underline underline-offset-2">
                {site.email}
              </a>{" "}
              or by phone at{" "}
              <a href={site.phoneHref} className="font-medium text-blue-2 underline underline-offset-2">
                {site.phone}
              </a>
              . We&apos;ll answer any question about the processing of your personal data.
            </p>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
