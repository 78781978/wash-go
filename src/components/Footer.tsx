"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { footerLegalLinks as footerLegalLinksPl, navLinks as navLinksPl, site as sitePl } from "@/lib/site-config";
import { footerLegalLinks as footerLegalLinksEn, navLinks as navLinksEn, site as siteEn } from "@/lib/site-config.en";
import { localeFromPathname } from "@/lib/i18n";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const copy = {
  pl: {
    tagline: "Ręczna myjnia samochodowa w Goleniowie. Dbamy o Twoje auto z precyzją, jakiej oczekujesz od salonu.",
    nav: "Nawigacja",
    legal: "Informacje prawne",
    contact: "Kontakt",
    hoursWeekday: "Pon–Pt",
    hoursSaturday: "Sob",
    hoursSunday: "Niedz",
    rights: "Wszelkie prawa zastrzeżone.",
    strapline: "Ręczna myjnia samochodowa premium",
  },
  en: {
    tagline: "A hand car wash in Goleniów. We take care of your car with the precision you'd expect from a showroom.",
    nav: "Navigation",
    legal: "Legal",
    contact: "Contact",
    hoursWeekday: "Mon–Fri",
    hoursSaturday: "Sat",
    hoursSunday: "Sun",
    rights: "All rights reserved.",
    strapline: "Premium hand car wash",
  },
};

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const navLinks = locale === "en" ? navLinksEn : navLinksPl;
  const footerLegalLinks = locale === "en" ? footerLegalLinksEn : footerLegalLinksPl;
  const site = locale === "en" ? siteEn : sitePl;
  const t = copy[locale];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Logo dark markClassName="h-20 w-20" textClassName="text-2xl" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{t.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-blue hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-blue hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              {t.nav}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              {t.legal}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="text-sm text-white/70">{site.legalName}</li>
              <li className="text-sm text-white/70">NIP: {site.nip}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              {t.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-2" />
                {site.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-blue-2" />
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-blue-2" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-2" />
                <span>
                  {t.hoursWeekday} {site.hoursWeekdays}
                  <br />
                  {t.hoursSaturday} {site.hoursSaturday}
                  <br />
                  {t.hoursSunday}: {site.hoursSunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. {t.rights}</p>
          <p>{t.strapline} · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
