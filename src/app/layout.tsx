import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { PromoBadge } from "@/components/PromoBadge";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/lib/site-config";
import { siteUrl } from "@/lib/base-path";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} - szablon strony na sprzedaż`,
    template: `%s - ${site.name}`,
  },
  description:
    "Gotowy, w pełni responsywny szablon strony dla myjni samochodowej i firmy detailingowej. Projekt na sprzedaż, do rozbudowy o chatbota, agenta AI i inne funkcje.",
  keywords: [
    "szablon strony myjnia",
    "projekt strony na sprzedaż",
    "strona dla myjni samochodowej",
    "szablon strony detailing",
    "wash & go",
  ],
  metadataBase: new URL(`${siteUrl}/`),
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `${site.name} - szablon strony na sprzedaż`,
    description: "Gotowy, w pełni responsywny szablon strony dla myjni samochodowej. Projekt na sprzedaż, do rozbudowy o chatbota i agenta AI.",
    locale: "pl_PL",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-src https://www.google.com; base-uri 'self'; object-src 'none'"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <PromoBadge />
        <AccessibilityWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
