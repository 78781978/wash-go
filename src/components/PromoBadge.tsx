"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n";

const copy = {
  pl: {
    line1: "10.",
    line2: "MYCIE",
    line3: "GRATIS!",
    href: "/kontakt",
    aria: "Promocja: co dziesiąte mycie gratis, przejdź do kontaktu",
  },
  en: {
    line1: "10th",
    line2: "WASH",
    line3: "FREE!",
    href: "/en/contact",
    aria: "Promotion: every 10th wash free, go to contact",
  },
};

export function PromoBadge() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = copy[locale];

  return (
    <Link
      href={t.href}
      aria-label={t.aria}
      className="fixed right-3 top-1/2 z-40 -translate-y-1/2 xl:right-[90px] 2xl:right-[145px]"
    >
      <span className="relative flex h-20 w-20 items-center justify-center xl:h-24 xl:w-24 2xl:h-28 2xl:w-28">
        <span className="absolute inset-0 rounded-full bg-blue-2/70 animate-badge-ring" />
        <span
          className="absolute inset-0 rounded-full bg-blue-2/70 animate-badge-ring"
          style={{ animationDelay: "1.1s" }}
        />
        <span className="relative flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-full border-2 border-white/50 bg-gradient-to-br from-blue-2 to-navy text-center shadow-xl shadow-navy/40 animate-badge-breathe">
          <span className="font-display text-[11px] font-bold uppercase leading-none text-white/85 xl:text-sm 2xl:text-base">
            {t.line1}
          </span>
          <span className="font-display text-[11px] font-bold uppercase leading-none text-white/85 xl:text-sm 2xl:text-base">
            {t.line2}
          </span>
          <span className="font-display text-xs font-extrabold uppercase leading-none text-white xl:text-sm 2xl:text-base">
            {t.line3}
          </span>
        </span>
      </span>
    </Link>
  );
}
