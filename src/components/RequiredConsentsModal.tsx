"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { consentsPl, consentsEn } from "@/lib/consents-data";
import type { Locale } from "@/lib/i18n";

const copy = {
  pl: {
    title: "Wymagane zgody",
    intro:
      "Zestawienie zgód, o które możemy prosić na naszej stronie, w jakim celu je zbieramy i jak można je wycofać.",
    required: "Wymagana",
    voluntary: "Dobrowolna",
    fullPage: "Zobacz pełny dokument",
    fullPageHref: "/wymagane-zgody",
    close: "Zamknij",
  },
  en: {
    title: "Required consents",
    intro: "An overview of the consents we may ask for on our site, why we collect them and how to withdraw them.",
    required: "Required",
    voluntary: "Voluntary",
    fullPage: "View the full document",
    fullPageHref: "/en/required-consents",
    close: "Close",
  },
};

export function RequiredConsentsModal({
  open,
  onClose,
  locale = "pl",
}: {
  open: boolean;
  onClose: () => void;
  locale?: Locale;
}) {
  const t = copy[locale];
  const consents = locale === "en" ? consentsEn : consentsPl;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-white p-6 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-navy">{t.title}</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.close}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-foreground/65 transition-colors hover:bg-mist hover:text-navy"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">{t.intro}</p>

            <ul className="mt-5 space-y-4">
              {consents.map((c) => (
                <li key={c.title} className="rounded-xl border border-line bg-mist p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <c.icon className="h-4.5 w-4.5 shrink-0 text-blue" />
                      <p className="text-sm font-semibold text-navy">{c.title}</p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        c.required ? "bg-navy text-white" : "bg-blue-soft text-blue"
                      }`}
                    >
                      {c.required ? t.required : t.voluntary}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/60">{c.purpose}</p>
                </li>
              ))}
            </ul>

            <Link
              href={t.fullPageHref}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue underline underline-offset-2 hover:text-navy"
            >
              {t.fullPage}
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
