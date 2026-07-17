export type Locale = "pl" | "en";

export const plToEn: Record<string, string> = {
  "/": "/en",
  "/uslugi": "/en/services",
  "/cennik": "/en/pricing",
  "/oferta-dla-firm": "/en/for-business",
  "/nasze-prace": "/en/our-work",
  "/o-nas": "/en/about",
  "/kontakt": "/en/contact",
  "/polityka-prywatnosci": "/en/privacy-policy",
  "/wymagane-zgody": "/en/required-consents",
};

export const enToPl: Record<string, string> = Object.fromEntries(
  Object.entries(plToEn).map(([pl, en]) => [en, pl])
);

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pl";
}

export function otherLocaleHref(pathname: string): string {
  if (localeFromPathname(pathname) === "en") {
    return enToPl[pathname] ?? "/";
  }
  return plToEn[pathname] ?? "/en";
}
