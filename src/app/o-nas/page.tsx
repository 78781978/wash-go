import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Droplet, Leaf, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { stats, values } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj historię i wartości myjni Wash & Go — ręcznej myjni samochodowej premium.",
};

const milestones = [
  { year: "2016", text: "Otwarcie pierwszego stanowiska ręcznego mycia w Krakowie." },
  { year: "2019", text: "Rozbudowa hali o strefę detailingu i korekty lakieru." },
  { year: "2021", text: "Wdrożenie systemu osmozy i pełnego odzysku wody." },
  { year: "2023", text: "Uruchomienie oferty flotowej dla klientów biznesowych." },
  { year: "2025", text: "Nowa hala premium z 4 stanowiskami i strefą klienta." },
];

const facility = [
  { icon: Droplet, title: "System osmozy", desc: "Woda demineralizowana do finalnego płukania — zero zacieków i osadu." },
  { icon: Leaf, title: "Zamknięty obieg wody", desc: "Ścieki oczyszczane i częściowo odzyskiwane w procesie mycia wstępnego." },
  { icon: Wrench, title: "Profesjonalny sprzęt", desc: "Polerki, ekstraktory i generatory piany klasy premium." },
  { icon: Award, title: "Certyfikowana chemia", desc: "Kosmetyki samochodowe renomowanych producentów, bezpieczne dla powłok." },
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue">Nasza historia</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy text-balance">
              Zaczęliśmy od jednego stanowiska. Zostaliśmy, bo pokochaliśmy detale.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Wash&amp;Go powstało z przekonania, że mycie samochodu może — i powinno — wyglądać jak
              usługa premium, a nie pospieszny przejazd przez automat. Od pierwszego dnia stawiamy na
              mycie ręczne, bezpieczne kosmetyki i dbałość o detale, których nie widać na pierwszy rzut oka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Dziś nasz zespół to doświadczeni detailerzy, którzy każdego dnia dbają o kilkadziesiąt
              samochodów — od miejskich kompaktów po samochody kolekcjonerskie i floty firmowe.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1} className="space-y-5">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 border-l-2 border-line pl-5">
                <span className="-ml-[1.65rem] flex h-8 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-white">
                  {m.year}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-foreground/65">{m.text}</p>
              </div>
            ))}
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
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
          <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
