import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  Award,
  Droplets,
  Ruler,
  Snowflake,
  Sparkles,
  Truck,
  Wifi,
  Wind,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { stats, values } from "@/lib/site-config";
import { basePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj historię i wartości myjni Wash & Go – ręcznej myjni samochodowej premium.",
};

const facility = [
  { icon: Wrench, title: "Profesjonalny sprzęt", desc: "Polerki, ekstraktory i generatory piany klasy premium." },
  { icon: Award, title: "Certyfikowana chemia", desc: "Kosmetyki samochodowe renomowanych producentów, bezpieczne dla powłok." },
  { icon: Truck, title: "Odbiór i dostawa auta", desc: "Oferujemy usługę odbierania i dostarczania czystego auta za dodatkową opłatą." },
];

const amenities = [
  { icon: Armchair, label: "Poczekalnia" },
  { icon: Truck, label: "Samochody dostawcze" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Droplets, label: "Płyn do spryskiwaczy" },
  { icon: Sparkles, label: "Usługi auto SPA" },
  { icon: Snowflake, label: "Dezynfekcja chłodni" },
  { icon: Wind, label: "Ozonowanie" },
  { icon: Ruler, label: "Max. wysokość: 250 cm" },
];

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="O nas"
        crumb="O nas"
        title="Pasja do detali od 2016 roku"
        description="Wash & Go zaczynało jako jedno stanowisko mycia ręcznego. Dziś to premium hala z zespołem detailerów, dla których jakość jest nie do negocjacji."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <MotionReveal>
            <div className="flex flex-col items-center gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export; basePath must be applied manually */}
              <img
                src={`${basePath}/logo-badge.png`}
                alt="Wash & Go"
                width={112}
                height={112}
                className="h-24 w-24 shrink-0 rounded-full shadow-lg shadow-navy/20 sm:h-28 sm:w-28"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">Nasza historia</p>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-navy text-balance sm:text-3xl">
                  Zaczęliśmy od jednego stanowiska
                </h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground/60">
              Wash&amp;Go powstało z przekonania, że mycie samochodu może – i powinno – wyglądać jak
              usługa premium, a nie pospieszny przejazd przez automat. Od pierwszego dnia stawiamy na
              mycie ręczne, bezpieczne kosmetyki i dbałość o detale, których nie widać na pierwszy rzut{"\u00A0"}oka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Dziś nasz zespół to doświadczeni detailerzy, którzy każdego dnia dbają o kilka
              samochodów – od miejskich kompaktów po samochody kolekcjonerskie i floty firmowe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Znajdziesz nas w Goleniowie, gdzie od ponad roku rozwijamy się razem z naszymi klientami – dziś to
              ponad 5000 umytych samochodów rocznie i grono stałych bywalców, którzy powierzają nam swoje auta.
              Dla tych, którzy cenią wygodę, oferujemy również odbiór i dostawę pojazdu, dzięki czemu czyste
              auto możesz mieć bez odrywania się od codziennych obowiązków.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              <strong className="font-semibold text-navy">
                Warto wiedzieć, że dotychczasowa myjnia Auto Lab Detailing Q zmieniła nazwę na Wash&amp;Go
              </strong>{" "}
              – to ta sama sprawdzona ekipa i jakość usług, teraz pod nowym szyldem.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Nasze wartości" title="To, na czym się nie ugniemy" />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <MotionItem key={v.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-base font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{v.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Nasza hala" title="Zaplecze klasy premium" description="Inwestujemy w sprzęt i technologię, które realnie wpływają na efekt końcowy." />
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {facility.map((f) => (
              <MotionItem key={f.title} className="rounded-2xl bg-graphite p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/20 text-blue-2">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Udogodnienia"
            title="Wszystko, czego potrzebujesz na miejscu"
          />
          <MotionStagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((a) => (
              <MotionItem
                key={a.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <a.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-navy">{a.label}</span>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Przekonaj się osobiście
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Wpadnij do naszej hali, zobacz stanowiska i porozmawiaj z zespołem o najlepszym pakiecie dla
            Twojego auta.
          </p>
          <Link
            href="/kontakt"
            className="flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
          >
            Zobacz dojazd i kontakt
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
