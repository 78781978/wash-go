"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Accessibility, Minus, Plus, Contrast, RotateCcw, X } from "lucide-react";
import { localeFromPathname } from "@/lib/i18n";

type TextSize = "normal" | "lg" | "xl";

const STORAGE_KEY = "washandgo-a11y-prefs";

const copy = {
  pl: {
    label: "Ustawienia dostępności",
    title: "Dostępność",
    textSize: "Rozmiar tekstu",
    contrast: "Wysoki kontrast",
    reset: "Przywróć domyślne",
    close: "Zamknij",
  },
  en: {
    label: "Accessibility settings",
    title: "Accessibility",
    textSize: "Text size",
    contrast: "High contrast",
    reset: "Reset to default",
    close: "Close",
  },
};

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>("normal");
  const [contrast, setContrast] = useState(false);
  const pathname = usePathname();
  const t = copy[localeFromPathname(pathname)];

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as { textSize?: TextSize; contrast?: boolean };
      // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side, after mount
      if (parsed.textSize) setTextSize(parsed.textSize);
      if (parsed.contrast) setContrast(parsed.contrast);
    } catch {
      // ignore malformed stored preferences
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("a11y-text-lg", "a11y-text-xl");
    if (textSize === "lg") root.classList.add("a11y-text-lg");
    if (textSize === "xl") root.classList.add("a11y-text-xl");
    root.classList.toggle("a11y-contrast", contrast);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ textSize, contrast }));
  }, [textSize, contrast]);

  const smaller = () => setTextSize((s) => (s === "xl" ? "lg" : "normal"));
  const larger = () => setTextSize((s) => (s === "normal" ? "lg" : "xl"));
  const reset = () => {
    setTextSize("normal");
    setContrast(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.label}
        aria-expanded={open}
        className="fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 transition-transform hover:scale-105"
      >
        <Accessibility className="h-5.5 w-5.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label={t.title}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 left-5 z-40 w-64 rounded-2xl border border-line bg-white p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold text-navy">{t.title}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/40 hover:bg-mist hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">{t.textSize}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={smaller}
                  disabled={textSize === "normal"}
                  aria-label="A-"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-navy transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center text-xs font-medium text-foreground/60">
                  {textSize === "normal" ? "100%" : textSize === "lg" ? "112%" : "125%"}
                </span>
                <button
                  type="button"
                  onClick={larger}
                  disabled={textSize === "xl"}
                  aria-label="A+"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-navy transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <label className="mt-4 flex items-center justify-between gap-3 text-sm text-navy">
              <span className="flex items-center gap-2">
                <Contrast className="h-4 w-4 text-blue" />
                {t.contrast}
              </span>
              <input
                type="checkbox"
                checked={contrast}
                onChange={(e) => setContrast(e.target.checked)}
                className="h-4 w-4 accent-blue"
              />
            </label>

            <button
              type="button"
              onClick={reset}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-foreground/60 transition-colors hover:bg-mist hover:text-navy"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t.reset}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
