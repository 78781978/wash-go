import type { Metadata } from "next";
import Link from "next/link";
import { Info, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { MotionStagger, MotionReveal } from "@/components/MotionReveal";
import { pricingTiers, site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cennik",
  description: "Cennik ręcznej myjni Wash & Go – pełna lista usług mycia zewnętrznego, sprzątania wnętrza i zabiegów dodatkowych.",
};

export default function CennikPage() {
  return (
    <>
      <PageHero
        eyebrow="Cennik"
        crumb="Cennik"
        title="Usługi dopasowane do Twojego auta"
        description="Wybierz zakres mycia, a dokładną wycenę potwierdzimy na miejscu, przed rozpoczęciem usługi."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <MotionStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </MotionStagger>

          <MotionReveal className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-mist px-5 py-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
            <p className="text-sm text-foreground/60">
              Cena zależy od stanu i rozmiaru pojazdu (np. auta dostawcze, pojazdy po długim postoju, silne
              zabrudzenie). Ostateczną wycenę potwierdzamy zawsze przed rozpoczęciem usługi.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <MotionReveal className="flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
              Flota firmowa? Mamy osobny cennik z rabatami
            </h2>
            <p className="max-w-xl text-base text-white/60">
              Sprawdź warunki dla firm – rabaty do 18%, faktura zbiorcza i priorytetowa obsługa bez kolejki.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/oferta-dla-firm"
                className="rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:bg-blue-2"
              >
                Oferta dla firm
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
