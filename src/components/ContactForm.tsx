"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site-config";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const body = `Imię i nazwisko: ${name}\nTelefon: ${phone}\nE-mail: ${email}\n\nWiadomość:\n${message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      "Zapytanie ze strony Wash & Go"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-blue" />
            <h3 className="mt-4 font-display text-xl font-semibold text-navy">Dziękujemy!</h3>
            <p className="mt-2 max-w-sm text-sm text-foreground/60">
              Twój klient poczty e-mail powinien się właśnie otworzyć z gotową wiadomością. Jeśli tak się
              nie stało, napisz bezpośrednio na {site.email}.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-blue hover:text-navy"
            >
              Wyślij kolejną wiadomość
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-navy" htmlFor="name">Imię i nazwisko</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Jan Kowalski"
                  className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy" htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder="+48 600 000 000"
                  className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-navy" htmlFor="email">Adres e-mail</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="jan.kowalski@email.pl"
                className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-navy" htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Opisz swoje auto i preferowany zakres usługi…"
                className="mt-1.5 w-full resize-none rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
              />
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-foreground/60">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-blue"
              />
              <span>
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez Wash&amp;Go w celu odpowiedzi na
                zapytanie, zgodnie z{" "}
                <Link href="/polityka-prywatnosci" className="font-medium text-blue underline underline-offset-2">
                  polityką prywatności
                </Link>{" "}
                oraz{" "}
                <Link href="/wymagane-zgody" className="font-medium text-blue underline underline-offset-2">
                  wymaganymi zgodami
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:bg-blue-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!consent}
            >
              Wyślij wiadomość
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
