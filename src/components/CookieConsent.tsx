"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie, Settings2 } from "lucide-react";
import { localeFromPathname } from "@/lib/i18n";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "washandgo-cookie-consent";

const copy = {
  pl: {
    title: "Ta strona używa plików cookie",
    body: (
      <>
        Wykorzystujemy cookies niezbędne do działania strony oraz — za Twoją zgodą — analityczne i
        marketingowe. Szczegóły znajdziesz w{" "}
        <Link href="/polityka-prywatnosci" className="text-blue-2 underline underline-offset-2">
          polityce prywatności i cookies
        </Link>
        .
      </>
    ),
    necessary: "Niezbędne (zawsze aktywne)",
    analytics: "Analityczne",
    marketing: "Marketingowe",
    acceptAll: "Akceptuję wszystkie",
    rejectOptional: "Tylko niezbędne",
    save: "Zapisz ustawienia",
    settings: "Ustawienia szczegółowe",
    privacyHref: "/polityka-prywatnosci",
  },
  en: {
    title: "This site uses cookies",
    body: (
      <>
        We use cookies necessary for the site to function, plus — with your consent — analytics and
        marketing cookies. See details in our{" "}
        <Link href="/en/privacy-policy" className="text-blue-2 underline underline-offset-2">
          privacy &amp; cookie policy
        </Link>
        .
      </>
    ),
    necessary: "Necessary (always active)",
    analytics: "Analytics",
    marketing: "Marketing",
    acceptAll: "Accept all",
    rejectOptional: "Necessary only",
    save: "Save settings",
    settings: "Detailed settings",
    privacyHref: "/en/privacy-policy",
  },
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: false, marketing: false });
  const pathname = usePathname();
  const t = copy[localeFromPathname(pathname)];

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable client-side, after mount
    if (!stored) setVisible(true);
  }, []);

  const save = (value: Prefs) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...value, savedAt: Date.now() }));
    setVisible(false);
    setSettingsOpen(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectOptional = () => save({ necessary: true, analytics: false, marketing: false });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[100] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-md"
        >
          <div className="rounded-2xl border border-white/10 bg-navy/95 p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue-2">
                <Cookie className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white">{t.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">{t.body}</p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {settingsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                    <label className="flex items-center justify-between text-xs text-white/70">
                      <span>{t.necessary}</span>
                      <input type="checkbox" checked disabled className="h-4 w-4 accent-blue-2 opacity-60" />
                    </label>
                    <label className="flex items-center justify-between text-xs text-white/70">
                      <span>{t.analytics}</span>
                      <input
                        type="checkbox"
                        checked={prefs.analytics}
                        onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                        className="h-4 w-4 accent-blue-2"
                      />
                    </label>
                    <label className="flex items-center justify-between text-xs text-white/70">
                      <span>{t.marketing}</span>
                      <input
                        type="checkbox"
                        checked={prefs.marketing}
                        onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                        className="h-4 w-4 accent-blue-2"
                      />
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 rounded-full bg-blue px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-2"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={rejectOptional}
                className="flex-1 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold text-white/85 transition-colors hover:bg-white/10"
              >
                {t.rejectOptional}
              </button>
              {settingsOpen ? (
                <button
                  onClick={() => save(prefs)}
                  className="w-full rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  {t.save}
                </button>
              ) : (
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white/60 hover:text-white"
                >
                  <Settings2 className="h-3.5 w-3.5" />
                  {t.settings}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
