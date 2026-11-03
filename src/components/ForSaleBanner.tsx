"use client";

import { usePathname } from "next/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import { localeFromPathname } from "@/lib/i18n";

const FB_URL = "https://www.facebook.com/profile.php?id=61591915780293";

const copy = {
  pl: {
    eyebrow: "Projekt na sprzedaż",
    title: "Ten projekt strony jest gotowym szablonem na sprzedaż",
    desc: "Kompletny, w pełni responsywny projekt dla myjni samochodowej lub firmy detailingowej. Można go rozbudować o chatbota, agenta AI i inne funkcje, dopasowane do Twojego biznesu.",
    cta: "Zapytaj o ten projekt",
  },
  en: {
    eyebrow: "Project for sale",
    title: "This website is a ready-made template, for sale",
    desc: "A complete, fully responsive design for a car wash or detailing business. It can be extended with a chatbot, an AI agent, and other features tailored to your business.",
    cta: "Ask about this project",
  },
};

export function ForSaleBanner() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = copy[locale];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue via-blue-2 to-navy px-5 py-8 text-center sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          <Sparkles className="h-3.5 w-3.5" />
          {t.eyebrow}
        </span>
        <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{t.title}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/80">{t.desc}</p>
        <a
          href={FB_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
