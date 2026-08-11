import { site } from "@/lib/site-config";
import { siteUrl } from "@/lib/base-path";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: site.name,
    legalName: site.legalName,
    vatID: `PL${site.nip.replace(/-/g, "")}`,
    image: `${siteUrl}/logo-mark.png`,
    url: `${siteUrl}/`,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Szczecińska 4b/1",
      addressLocality: site.city,
      postalCode: "72-100",
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [site.social.facebook, site.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
