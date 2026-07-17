import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MotionReveal } from "./MotionReveal";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  homeHref = "/",
  homeLabel = "Strona główna",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  homeHref?: string;
  homeLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-2/15 blur-3xl animate-float-slower" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <MotionReveal>
          <nav className="flex items-center gap-1.5 text-xs font-medium text-white/50">
            <Link href={homeHref} className="hover:text-white/80">{homeLabel}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">{crumb}</span>
          </nav>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-2">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{description}</p>
          )}
        </MotionReveal>
      </div>
    </section>
  );
}
