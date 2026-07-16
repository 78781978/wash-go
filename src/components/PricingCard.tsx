import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/site-config";
import { MotionItem } from "./MotionReveal";

export function PricingCard({ tier }: { tier: PricingTier }) {
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
          Najczęściej wybierany
        </span>
      )}

      <h3 className={`font-display text-xl font-semibold ${tier.featured ? "text-white" : "text-navy"}`}>
        {tier.name}
      </h3>
      <p className={`mt-1.5 text-sm ${tier.featured ? "text-white/60" : "text-foreground/55"}`}>{tier.tagline}</p>

      <div className={`mt-6 space-y-2 border-t pt-5 ${tier.featured ? "border-white/15" : "border-line"}`}>
        {tier.prices.map((p) => (
          <div key={p.label} className="flex items-center justify-between text-sm">
            <span className={tier.featured ? "text-white/70" : "text-foreground/65"}>{p.label}</span>
            <span className={`font-display font-semibold ${tier.featured ? "text-white" : "text-navy"}`}>
              {p.price}
            </span>
          </div>
        ))}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-blue-2" : "text-blue"}`} />
            <span className={tier.featured ? "text-white/80" : "text-foreground/75"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/kontakt"
        className={`mt-7 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
          tier.featured
            ? "bg-blue text-white hover:bg-blue-2"
            : "bg-navy text-white hover:bg-blue"
        }`}
      >
        Wybieram {tier.name}
      </Link>
    </MotionItem>
  );
}
