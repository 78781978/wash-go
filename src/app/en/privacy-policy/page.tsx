import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy – Wash & Go",
  description: "Privacy and cookie policy for the washandgo.pl website.",
};

const sections: LegalSection[] = [
  {
    id: "controller",
    title: "Data controller",
    content: (
      <>
        <p>
          The controller of personal data collected via the washandgo.pl website is {site.legalName}, {site.legalAddress},
          NIP (Tax ID): {site.nip} (hereinafter: the &quot;Controller&quot;).
        </p>
        <p>
          You can contact the Controller by email at {site.email} or by phone at {site.phone}.
        </p>
      </>
    ),
  },
  {
    id: "data-we-process",
    title: "What data we process",
    content: (
      <>
        <p>Depending on how you use the site, we may process the following data:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>data provided in the contact form: name, email address, phone number, message content,</li>
          <li>technical data: IP address, browser and device type, on-site activity data (cookies),</li>
          <li>data provided in email or phone correspondence related to our services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "purposes-and-legal-basis",
    title: "Purposes and legal basis for processing",
    content: (
      <>
        <p>Personal data is processed for the following purposes:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            responding to enquiries sent via the contact form – legal basis: Art. 6(1)(a) and (f) GDPR
            (consent and the Controller&apos;s legitimate interest),
          </li>
          <li>
            entering into and performing a contract for washing and detailing services – Art. 6(1)(b) GDPR,
          </li>
          <li>
            issuing invoices and meeting tax/accounting obligations – Art. 6(1)(c) GDPR,
          </li>
          <li>
            direct marketing of our own services, including newsletters – Art. 6(1)(a) GDPR (consent),
          </li>
          <li>
            analysing site traffic and improving functionality – Art. 6(1)(f) GDPR (the Controller&apos;s
            legitimate interest).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention-period",
    title: "Data retention period",
    content: (
      <p>
        We store data for as long as necessary to achieve the purposes for which it was collected – in
        particular for the duration of our business relationship and the limitation period for claims, and
        for accounting documents for the period required by tax law (generally 5 years). Data processed on
        the basis of consent is stored until that consent is withdrawn.
      </p>
    ),
  },
  {
    id: "recipients",
    title: "Recipients of data",
    content: (
      <>
        <p>Personal data may be shared with entities that support the Controller, in particular:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>hosting and IT service providers,</li>
          <li>providers of analytics and marketing tools (with user consent),</li>
          <li>the accounting office serving the Controller,</li>
          <li>entities authorised under applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>In connection with the processing of your personal data, you have the right to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>access your data and receive a copy of it,</li>
          <li>rectify (correct) your data,</li>
          <li>erase your data or restrict its processing,</li>
          <li>object to the processing,</li>
          <li>data portability,</li>
          <li>withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal,</li>
          <li>lodge a complaint with the President of the Personal Data Protection Office (UODO).</li>
        </ul>
        <p>To exercise the above rights, contact us at {site.email}.</p>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    title: "What cookies are",
    content: (
      <p>
        Cookies are small text files stored on a user&apos;s device while using a website. Among other things,
        they let a site remember user preferences, ensure it functions correctly, and let us analyse how
        the site is used.
      </p>
    ),
  },
  {
    id: "types-of-cookies",
    title: "Types of cookies we use",
    content: (
      <>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-navy">Necessary</strong> – required for the site to function correctly
            (e.g. remembering your cookie settings). They don&apos;t require consent and can&apos;t be disabled.
          </li>
          <li>
            <strong className="text-navy">Analytics</strong> – let us collect anonymised information about
            how the site is used (e.g. pages visited, time spent). They require user consent.
          </li>
          <li>
            <strong className="text-navy">Marketing</strong> – used to display personalised advertising
            content. They require user consent.
          </li>
        </ul>
        <p>
          You can give or withdraw consent to analytics and marketing cookies at any time via the consent
          banner shown on your first visit, or in your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing cookies",
    content: (
      <p>
        Most web browsers accept cookies by default. You can change your cookie settings in your browser
        at any time – including blocking cookies or deleting ones already stored. Restricting cookies may
        affect some of the site&apos;s functionality.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data security",
    content: (
      <p>
        The Controller applies appropriate technical and organisational measures to protect processed
        personal data, including protection against unauthorised access, loss, or destruction of data.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        The Controller reserves the right to make changes to this privacy policy. The current version of
        this document is always published on this page along with the date of the last update.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal document"
        crumb="Privacy & Cookie Policy"
        title="Privacy & cookie policy"
        homeHref="/en"
        homeLabel="Home"
        description="We explain what data we collect, why we process it, and how we use cookies on our website."
      />
      <LegalLayout
        sections={sections}
        updated="16 July 2026"
        tocLabel="Contents"
        updatedLabel="Last updated"
      />
    </>
  );
}
