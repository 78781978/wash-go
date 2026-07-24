import type { Metadata } from "next";
import Link from "next/link";
import { Building2, FileText, CalendarClock, Users, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { fleetPlans, site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Oferta dla firm – myjnia Goleniów",
  description: "Mycie floty samochodowej Wash & Go w Goleniowie – rabaty, faktura zbiorcza i priorytetowa obsługa dla firm i leasingodawców.",
};

const benefits = [
  { icon: Building2, title: "Dla każdej wielkości floty", desc: "Od kilku aut służbowych po floty transportowe liczące setki pojazdów." },
  { icon: FileText, title: "Rozliczenia B2B", desc: "Faktura VAT, rozliczenie zbiorcze raz w miesiącu, elastyczne terminy płatności." },
  { icon: CalendarClock, title: "Mycie poza godzinami szczytu", desc: "Harmonogram dopasowany do pracy Twojej firmy – bez przestojów floty." },
  { icon: Users, title: "Dedykowany opiekun", desc: "Jedna osoba kontaktowa odpowiedzialna za jakość i terminowość usług." },
];

export default function OfertaDlaFirmPage() {
  return (
    <>
      <PageHero
        eyebrow="Dla firm i flot"
        crumb="Oferta dla firm"
        title="Flota, która zawsze wygląda profesjonalnie"
        description="Zaprojektowaliśmy proces mycia flotowego tak, aby nie zaburzał pracy Twojej firmy – z rabatami, fakturą zbiorczą i stałym opiekunem klienta."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Dlaczego my" title="Współpraca dopasowana do biznesu" />
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
            eyebrow="Pakiety flotowe"
            title="Wybierz plan dopasowany do wielkości floty"
            description="Wszystkie plany obejmują pełny zakres mycia ręcznego – różnią się rabatem, elastycznością terminów i modelem rozliczeń."
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
                  href="/kontakt"
                  className={`mt-7 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    i === 1 ? "bg-blue text-white hover:bg-blue-2" : "bg-navy text-white hover:bg-blue"
                  }`}
                >
                  Zapytaj o warunki
                </Link>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">Jak zaczynamy</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy text-balance">
              Wdrożenie w 3 krokach
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { n: "01", t: "Rozmowa i wycena", d: "Analizujemy wielkość floty i częstotliwość mycia." },
                { n: "02", t: "Umowa i harmonogram", d: "Ustalamy zakres usług, rabat i stałe terminy wizyt." },
                { n: "03", t: "Start współpracy", d: "Otrzymujesz opiekuna klienta i pierwszą fakturę zbiorczą po miesiącu." },
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
              Porozmawiajmy o Twojej flocie
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Napisz do nas z liczbą pojazdów – przygotujemy indywidualną wycenę w ciągu 24 godzin.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-2"
              >
                Wyślij zapytanie
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
