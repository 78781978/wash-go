"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n";
import { RequiredConsentsModal } from "./RequiredConsentsModal";

const copy = {
  pl: {
    thanksTitle: "Dziękujemy!",
    thanksBody: (email: string) =>
      `Twój klient poczty e-mail powinien się właśnie otworzyć z gotową wiadomością. Jeśli tak się nie stało, napisz bezpośrednio na ${email}.`,
    sendAnother: "Wyślij kolejną wiadomość",
    nameLabel: "Imię i nazwisko",
    namePlaceholder: "Jan Kowalski",
    phoneLabel: "Telefon",
    phonePlaceholder: "+48 600 000 000",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "jan.kowalski@email.pl",
    messageLabel: "Wiadomość",
    messagePlaceholder: "Opisz swoje auto i preferowany zakres usługi…",
    consentPre: "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Wash&Go w celu odpowiedzi na zapytanie, zgodnie z",
    privacyLink: "polityką prywatności",
    consentAnd: "oraz",
    consentsLink: "wymaganymi zgodami",
    submit: "Wyślij wiadomość",
    subject: "Zapytanie ze strony Wash & Go",
    fieldName: "Imię i nazwisko",
    fieldPhone: "Telefon",
    fieldEmail: "E-mail",
    fieldMessage: "Wiadomość",
    privacyHref: "/polityka-prywatnosci",
    consentsHref: "/wymagane-zgody",
  },
  en: {
    thanksTitle: "Thank you!",
    thanksBody: (email: string) =>
      `Your email client should have just opened with a ready-made message. If it didn't, write to us directly at ${email}.`,
    sendAnother: "Send another message",
    nameLabel: "Full name",
    namePlaceholder: "John Smith",
    phoneLabel: "Phone",
    phonePlaceholder: "+48 600 000 000",
    emailLabel: "Email address",
    emailPlaceholder: "john.smith@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your car and the service you're after…",
    consentPre: "I consent to Wash&Go processing my personal data to respond to my enquiry, in line with the",
    privacyLink: "privacy policy",
    consentAnd: "and",
    consentsLink: "required consents",
    submit: "Send message",
    subject: "Enquiry from the Wash & Go website",
    fieldName: "Full name",
    fieldPhone: "Phone",
    fieldEmail: "Email",
    fieldMessage: "Message",
    privacyHref: "/en/privacy-policy",
    consentsHref: "/en/required-consents",
  },
};

export function ContactForm({ locale = "pl" }: { locale?: Locale }) {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentsModalOpen, setConsentsModalOpen] = useState(false);
  const t = copy[locale];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    const body = `${t.fieldName}: ${name}\n${t.fieldPhone}: ${phone}\n${t.fieldEmail}: ${email}\n\n${t.fieldMessage}:\n${message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;

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
            <h3 className="mt-4 font-display text-xl font-semibold text-navy">{t.thanksTitle}</h3>
            <p className="mt-2 max-w-sm text-sm text-foreground/60">{t.thanksBody(site.email)}</p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold text-blue hover:text-navy"
            >
              {t.sendAnother}
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
                <label className="text-sm font-medium text-navy" htmlFor="name">{t.nameLabel}</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy" htmlFor="phone">{t.phoneLabel}</label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-navy" htmlFor="email">{t.emailLabel}</label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder={t.emailPlaceholder}
                className="mt-1.5 w-full rounded-xl border border-line bg-mist px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue focus:bg-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-navy" htmlFor="message">{t.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t.messagePlaceholder}
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
                {t.consentPre}{" "}
                <Link href={t.privacyHref} className="font-medium text-blue underline underline-offset-2">
                  {t.privacyLink}
                </Link>{" "}
                {t.consentAnd}{" "}
                <button
                  type="button"
                  onClick={() => setConsentsModalOpen(true)}
                  className="font-medium text-blue underline underline-offset-2"
                >
                  {t.consentsLink}
                </button>
                .
              </span>
            </label>

            <RequiredConsentsModal
              open={consentsModalOpen}
              onClose={() => setConsentsModalOpen(false)}
              locale={locale}
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:bg-blue-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!consent}
            >
              {t.submit}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
