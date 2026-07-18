import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Mail, Megaphone, Cookie, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionStagger, MotionItem, MotionReveal } from "@/components/MotionReveal";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wymagane zgody",
  description: "Zestawienie zgód wymaganych przy korzystaniu z formularzy i usług Wash & Go.",
};

const consents = [
  {
    icon: MessageSquare,
    title: "Zgoda na kontakt w sprawie formularza",
    required: true,
    scope: "Imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości.",
    purpose: "Udzielenie odpowiedzi na zapytanie przesłane przez formularz kontaktowy na stronie washandgo.pl.",
    basis: "Art. 6 ust. 1 lit. a RODO – dobrowolnie wyrażona zgoda.",
    withdraw: "Zgodę można wycofać w dowolnym momencie, pisząc na adres " + site.email + ".",
  },
  {
    icon: Mail,
    title: "Zgoda na newsletter",
    required: false,
    scope: "Adres e-mail.",
    purpose: "Przesyłanie informacji o promocjach, nowych usługach i wydarzeniach Wash & Go drogą elektroniczną.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 10 ustawy o świadczeniu usług drogą elektroniczną.",
    withdraw: "Rezygnacja możliwa jednym kliknięciem w stopce każdej wiadomości lub poprzez kontakt e-mailowy.",
  },
  {
    icon: Megaphone,
    title: "Zgoda marketingowa (telefon)",
    required: false,
    scope: "Numer telefonu.",
    purpose: "Przedstawianie ofert i informacji handlowych drogą telefoniczną, w tym SMS.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 172 ustawy Prawo telekomunikacyjne.",
    withdraw: "Zgodę można wycofać telefonicznie, e-mailowo lub pisemnie w dowolnym momencie.",
  },
  {
    icon: Cookie,
    title: "Zgoda na cookies analityczne i marketingowe",
    required: false,
    scope: "Dane techniczne i identyfikatory przechowywane w plikach cookies.",
    purpose: "Analiza ruchu na stronie, poprawa jej funkcjonalności oraz personalizacja treści reklamowych.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 173 ustawy Prawo telekomunikacyjne.",
    withdraw: "Ustawienia cookies można zmienić w każdej chwili w banerze zgody lub w ustawieniach przeglądarki.",
  },
];

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

          <MotionReveal delay={0.1} className="mt-14 rounded-2xl bg-navy p-8 text-white sm:p-10">
            <h3 className="font-display text-xl font-semibold">Masz pytania dotyczące swoich danych?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Skontaktuj się z nami pod adresem{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-blue-2 underline underline-offset-2">
                {site.email}
              </a>{" "}
              lub telefonicznie:{" "}
              <a href={site.phoneHref} className="font-medium text-blue-2 underline underline-offset-2">
                {site.phone}
              </a>
              . Odpowiemy na każde pytanie dotyczące przetwarzania Twoich danych osobowych.
            </p>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
