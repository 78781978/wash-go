import type { Metadata } from "next";
import { MapPin, Clock, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config";

const FB_URL = "https://www.facebook.com/profile.php?id=61591915780293";

export const metadata: Metadata = {
  title: "Kontakt - szablon strony na sprzedaż",
  description: "Zainteresowany/a tym szablonem strony dla myjni lub firmy detailingowej? Sprawdź jak się z nami skontaktować.",
};

const infoCards = [
  { icon: MapPin, label: "Przykładowy adres", value: site.address },
  {
    icon: Clock,
    label: "Przykładowe godziny otwarcia",
    value: `Pon-Pt: ${site.hoursWeekdays}\nSob: ${site.hoursSaturday}\nNiedz: ${site.hoursSunday}`,
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        crumb="Kontakt"
        title="Zainteresowany/a tym projektem?"
        description="To w pełni funkcjonalny szablon strony dla myjni samochodowej lub firmy detailingowej, dostępny do kupienia i dalszej personalizacji."
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
                    <p className="mt-1 whitespace-pre-line text-sm font-medium text-navy">{c.value}</p>
                  </div>
                ))}
              </MotionReveal>

              <MotionReveal delay={0.1} className="rounded-2xl border border-line bg-mist p-6">
                <p className="text-sm leading-relaxed text-foreground/65">
                  Powyższe dane (adres, godziny otwarcia) to przykładowa treść demonstracyjna, gotowa do
                  podmiany na dane Twojej firmy po zakupie szablonu.
                </p>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.15} className="relative overflow-hidden rounded-3xl bg-navy p-8 text-center sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
              <div className="relative flex flex-col items-center gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Projekt na sprzedaż
                </span>
                <h2 className="font-display text-2xl font-semibold text-white">
                  Ten projekt strony jest na sprzedaż
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-white/65">
                  Kompletny, w pełni responsywny szablon dla myjni samochodowej lub firmy detailingowej.
                  Można go rozbudować o chatbota, agenta AI i inne funkcje, dopasowane do Twojego biznesu.
                </p>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-2"
                >
                  Napisz do nas na Facebooku
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
