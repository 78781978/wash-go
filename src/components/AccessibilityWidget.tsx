"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Accessibility,
  Minus,
  Plus,
  Contrast,
  Palette,
  Underline,
  Type,
  PauseCircle,
  RotateCcw,
  X,
} from "lucide-react";
import { localeFromPathname } from "@/lib/i18n";

type TextSize = "normal" | "lg" | "xl";

type Toggle = "contrast" | "grayscale" | "underline" | "readableFont" | "reduceMotion";

type Prefs = {
  textSize: TextSize;
  contrast: boolean;
  grayscale: boolean;
  underline: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
};

const defaultPrefs: Prefs = {
  textSize: "normal",
  contrast: false,
  grayscale: false,
  underline: false,
  readableFont: false,
  reduceMotion: false,
};

const STORAGE_KEY = "washandgo-a11y-prefs";

const classMap: Record<Toggle, string> = {
  contrast: "a11y-contrast",
  grayscale: "a11y-grayscale",
  underline: "a11y-underline",
  readableFont: "a11y-readable-font",
  reduceMotion: "a11y-reduce-motion",
};

const copy = {
  pl: {
    label: "Ustawienia dostępności",
    title: "Dostępność",
    textSize: "Rozmiar tekstu",
    contrast: "Wysoki kontrast",
    grayscale: "Skala szarości",
    underline: "Podkreśl linki",
    readableFont: "Czcionka bezszeryfowa",
    reduceMotion: "Ogranicz animacje",
    reset: "Przywróć domyślne",
    close: "Zamknij",
  },
  en: {
    label: "Accessibility settings",
    title: "Accessibility",
    textSize: "Text size",
    contrast: "High contrast",
    grayscale: "Grayscale",
    underline: "Underline links",
    readableFont: "Sans-serif font",
    reduceMotion: "Reduce animations",
    reset: "Reset to default",
    close: "Close",
  },
};

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);
  const pathname = usePathname();
  const t = copy[localeFromPathname(pathname)];

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Partial<Prefs>;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side, after mount
      setPrefs((p) => ({ ...p, ...parsed }));
    } catch {
      // ignore malformed stored preferences
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("a11y-text-lg", "a11y-text-xl");
    if (prefs.textSize === "lg") root.classList.add("a11y-text-lg");
    if (prefs.textSize === "xl") root.classList.add("a11y-text-xl");
    for (const toggle of Object.keys(classMap) as Toggle[]) {
      root.classList.toggle(classMap[toggle], prefs[toggle]);
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const smaller = () => setPrefs((p) => ({ ...p, textSize: p.textSize === "xl" ? "lg" : "normal" }));
  const larger = () => setPrefs((p) => ({ ...p, textSize: p.textSize === "normal" ? "lg" : "xl" }));
  const toggle = (key: Toggle) => setPrefs((p) => ({ ...p, [key]: !p[key] }));
  const reset = () => setPrefs(defaultPrefs);

  const toggles: { key: Toggle; label: string; icon: typeof Contrast }[] = [
    { key: "contrast", label: t.contrast, icon: Contrast },
    { key: "grayscale", label: t.grayscale, icon: Palette },
    { key: "underline", label: t.underline, icon: Underline },
    { key: "readableFont", label: t.readableFont, icon: Type },
    { key: "reduceMotion", label: t.reduceMotion, icon: PauseCircle },
  ];

  return (
    <div className="fixed left-3 top-1/2 z-40 -translate-y-1/2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.label}
        aria-expanded={open}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 transition-transform hover:scale-105"
      >
        <Accessibility className="h-5.5 w-5.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="false"
            aria-label={t.title}
            initial={{ opacity: 0, x: -12, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-full top-1/2 ml-3 max-h-[80vh] w-72 max-w-[calc(100vw-4.5rem)] -translate-y-1/2 overflow-y-auto rounded-2xl border border-line bg-white p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold text-navy">{t.title}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="flex h-7 w-7 items-center justify-center rounded-full text-foreground/65 hover:bg-mist hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/65">{t.textSize}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={smaller}
                  disabled={prefs.textSize === "normal"}
                  aria-label="A-"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-navy transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center text-xs font-medium text-foreground/60">
                  {prefs.textSize === "normal" ? "100%" : prefs.textSize === "lg" ? "112%" : "125%"}
                </span>
                <button
                  type="button"
                  onClick={larger}
                  disabled={prefs.textSize === "xl"}
                  aria-label="A+"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-navy transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-3 border-t border-line pt-4">
              {toggles.map(({ key, label, icon: Icon }) => (
                <label key={key} className="flex items-center justify-between gap-3 text-sm text-navy">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-blue" />
                    {label}
                  </span>
                  <input
                    type="checkbox"
                    checked={prefs[key]}
                    onChange={() => toggle(key)}
                    className="h-4 w-4 shrink-0 accent-blue"
                  />
                </label>
              ))}
            </div>

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
    </div>
  );
}
