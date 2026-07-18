import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/site-config";
import { MotionItem } from "./MotionReveal";
import type { Locale } from "@/lib/i18n";

const copy = {
  pl: {
    featured: "Najczęściej wybierany",
    priceNote: "Wycena na miejscu",
    choose: (name: string) => `Zapytaj o ${name}`,
    contactHref: "/kontakt",
  },
  en: {
    featured: "Most popular",
    priceNote: "Priced on-site",
    choose: (name: string) => `Ask about ${name}`,
    contactHref: "/en/contact",
  },
};

export function PricingCard({ tier, locale = "pl" }: { tier: PricingTier; locale?: Locale }) {
  const t = copy[locale];
  return (
    <MotionItem
      className={`relative flex h-full flex-col rounded-3xl p-7 ${
        tier.featured
          ? "border-2 border-blue bg-navy text-white shadow-2xl shadow-blue/20 lg:-translate-y-4"
          : "border border-line bg-white text-foreground"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
          {t.featured}
        </span>
      )}

      <h3 className={`font-display text-xl font-semibold ${tier.featured ? "text-white" : "text-navy"}`}>
        {tier.name}
      </h3>
      <p className={`mt-1.5 text-sm font-medium ${tier.featured ? "text-blue-2" : "text-blue"}`}>{t.priceNote}</p>

      <ul className={`mt-6 flex-1 space-y-3 border-t pt-5 ${tier.featured ? "border-white/15" : "border-line"}`}>
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-blue-2" : "text-blue"}`} />
            <span className={tier.featured ? "text-white/80" : "text-foreground/75"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={t.contactHref}
        className={`mt-7 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
          tier.featured
            ? "bg-blue text-white hover:bg-blue-2"
            : "bg-navy text-white hover:bg-blue"
        }`}
      >
        {t.choose(tier.name)}
      </Link>
    </MotionItem>
  );
}
