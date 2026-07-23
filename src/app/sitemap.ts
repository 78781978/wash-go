import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/base-path";

export const dynamic = "force-static";

const plRoutes = [
  "",
  "/uslugi",
  "/cennik",
  "/oferta-dla-firm",
  "/nasze-prace",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
  "/wymagane-zgody",
];

const enRoutes = [
  "/en",
  "/en/services",
  "/en/pricing",
  "/en/for-business",
  "/en/our-work",
  "/en/about",
  "/en/contact",
  "/en/privacy-policy",
  "/en/required-consents",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...plRoutes, ...enRoutes].map((route) => ({
    url: `${siteUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/en" ? 0.9 : 0.7,
  }));
}
