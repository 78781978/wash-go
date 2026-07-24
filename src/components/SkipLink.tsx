"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n";

const copy = {
  pl: "Przejdź do treści",
  en: "Skip to content",
};

export function SkipLink() {
  const pathname = usePathname();
  const t = copy[localeFromPathname(pathname)];

  return (
    <a
      href="#main-content"
      className="fixed left-3 top-3 z-[300] -translate-y-20 rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
    >
      {t}
    </a>
  );
}
