"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, otherLocaleHref } from "@/lib/i18n";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const otherHref = otherLocaleHref(pathname);

  return (
    <div className={`flex items-center overflow-hidden rounded-full border border-white/15 text-xs font-semibold ${className}`}>
      <Link
        href={locale === "pl" ? pathname : otherHref}
        aria-current={locale === "pl" ? "page" : undefined}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "pl" ? "bg-white/15 text-white" : "text-white/60 hover:text-white"
        }`}
      >
        PL
      </Link>
      <Link
        href={locale === "en" ? pathname : otherHref}
        aria-current={locale === "en" ? "page" : undefined}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en" ? "bg-white/15 text-white" : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
