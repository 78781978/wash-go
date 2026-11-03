"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n";

const copy = {
  pl: {
    line1: "NA",
    line2: "",
    line3: "SPRZEDAŻ",
    aria: "Ten projekt strony jest na sprzedaż, napisz do nas",
  },
  en: {
    line1: "FOR",
    line2: "",
    line3: "SALE!",
    aria: "This website project is for sale, message us",
  },
};

const FB_URL = "https://www.facebook.com/profile.php?id=61591915780293";

export function PromoBadge() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = copy[locale];

  return (
    <a
      href={FB_URL}
      target="_blank"
      rel="noreferrer"
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
    </a>
  );
}
