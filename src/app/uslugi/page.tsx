import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { MotionStagger } from "@/components/MotionReveal";
import { serviceCategories } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Usługi",
  description:
    "Pełna oferta usług myjni ręcznej Wash & Go: mycie zewnętrzne, detailing wnętrza, powłoki ceramiczne i polerowanie lakieru.",
};

export default function UslugiPage() {
  return (
    <>
      <PageHero
        eyebrow="Usługi"
        crumb="Usługi"
        title="Każdy zabieg wykonujemy ręcznie, z dbałością o detal"
        description="Od szybkiego odświeżenia po pełną regenerację lakieru — dobierz zakres usług dopasowany do stanu i potrzeb Twojego samochodu."
      />

      {serviceCategories.map((category, i) => (
        <section key={category.title} className={i % 2 === 0 ? "bg-mist py-24" : "bg-white py-24"}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow={`0${i + 1}`} title={category.title} description={category.intro} />
            <MotionStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.services.map((s) => (
                <ServiceCard key={s.slug} service={s} detailed />
              ))}
            </MotionStagger>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-navy py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            Nie wiesz, który zakres wybrać?
          </h2>
          <p className="max-w-xl text-base text-white/60">
            Zadzwoń do nas lub wjedź na stanowisko — doradzimy pakiet dopasowany do stanu lakieru
            i przeznaczenia Twojego auta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cennik"
              className="flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
            >
              Zobacz cennik
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
