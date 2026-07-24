import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { consentsPl as consents } from "@/lib/consents-data";

export const metadata: Metadata = {
  title: "Wymagane zgody",
  description: "Zestawienie zgód wymaganych przy korzystaniu z formularzy i usług Wash & Go.",
};

export default function WymaganeZgodyPage() {
  return (
    <>
      <PageHero
        eyebrow="Dokument prawny"
        crumb="Wymagane zgody"
        title="Wymagane zgody"
        description="Poniżej wyjaśniamy, o jakie zgody możemy prosić korzystając ze strony washandgo.pl, w jakim celu je zbieramy i jak można je wycofać."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <MotionReveal className="rounded-2xl border border-line bg-mist p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
              <p className="text-sm leading-relaxed text-foreground/65">
                Zgody oznaczone jako <strong className="text-navy">wymagane</strong> są niezbędne do
                zrealizowania danej funkcji strony (np. odpowiedzi na formularz kontaktowy). Pozostałe zgody
                są dobrowolne i nie wpływają na możliwość skorzystania z podstawowych usług Wash&amp;Go.
                Szczegóły przetwarzania danych opisujemy w{" "}
                <Link href="/polityka-prywatnosci" className="font-medium text-blue underline underline-offset-2">
                  polityce prywatności i cookies
                </Link>
                .
              </p>
            </div>
          </MotionReveal>

          <div className="mt-14">
            <SectionHeading eyebrow="Zestawienie" title="Zgody wykorzystywane na naszej stronie" />
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
                    {c.required ? "Wymagana" : "Dobrowolna"}
                  </span>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-5 border-t border-line pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Zakres danych
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">Cel</dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Podstawa prawna
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.basis}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                      Jak wycofać zgodę
                    </dt>
                    <dd className="mt-1.5 text-sm text-foreground/70">{c.withdraw}</dd>
                  </div>
                </dl>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
