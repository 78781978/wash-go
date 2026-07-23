import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { PromoBadge } from "@/components/PromoBadge";
import { site } from "@/lib/site-config";

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
    default: `${site.name} – ${site.claim}`,
    template: `%s – ${site.name}`,
  },
  description:
    "Wash & Go to ręczna myjnia samochodowa premium w Goleniowie. Mycie ręczne, detailing, powłoki ceramiczne i oferta dla flot firmowych.",
  keywords: [
    "myjnia ręczna",
    "myjnia samochodowa",
    "detailing Goleniów",
    "powłoka ceramiczna",
    "mycie aut firmowych",
    "wash & go",
  ],
  metadataBase: new URL("https://washandgo.pl"),
  openGraph: {
    title: `${site.name} – ${site.claim}`,
    description: "Ręczna myjnia samochodowa premium. Mycie, detailing, ochrona lakieru i oferta dla firm.",
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
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PromoBadge />
        <CookieConsent />
      </body>
    </html>
  );
}
