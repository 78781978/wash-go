import { MessageSquare, Mail, Megaphone, Cookie } from "lucide-react";
import { site } from "@/lib/site-config";

export type ConsentItem = {
  icon: typeof MessageSquare;
  title: string;
  required: boolean;
  scope: string;
  purpose: string;
  basis: string;
  withdraw: string;
};

export const consentsPl: ConsentItem[] = [
  {
    icon: MessageSquare,
    title: "Zgoda na kontakt w sprawie formularza",
    required: true,
    scope: "Imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości.",
    purpose: "Udzielenie odpowiedzi na zapytanie przesłane przez formularz kontaktowy na stronie washandgo.pl.",
    basis: "Art. 6 ust. 1 lit. a RODO – dobrowolnie wyrażona zgoda.",
    withdraw: "Zgodę można wycofać w dowolnym momencie, pisząc na adres " + site.email + ".",
  },
  {
    icon: Mail,
    title: "Zgoda na newsletter",
    required: false,
    scope: "Adres e-mail.",
    purpose: "Przesyłanie informacji o promocjach, nowych usługach i wydarzeniach Wash & Go drogą elektroniczną.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 10 ustawy o świadczeniu usług drogą elektroniczną.",
    withdraw: "Rezygnacja możliwa jednym kliknięciem w stopce każdej wiadomości lub poprzez kontakt e-mailowy.",
  },
  {
    icon: Megaphone,
    title: "Zgoda marketingowa (telefon)",
    required: false,
    scope: "Numer telefonu.",
    purpose: "Przedstawianie ofert i informacji handlowych drogą telefoniczną, w tym SMS.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 172 ustawy Prawo telekomunikacyjne.",
    withdraw: "Zgodę można wycofać telefonicznie, e-mailowo lub pisemnie w dowolnym momencie.",
  },
  {
    icon: Cookie,
    title: "Zgoda na cookies analityczne i marketingowe",
    required: false,
    scope: "Dane techniczne i identyfikatory przechowywane w plikach cookies.",
    purpose: "Analiza ruchu na stronie, poprawa jej funkcjonalności oraz personalizacja treści reklamowych.",
    basis: "Art. 6 ust. 1 lit. a RODO oraz art. 173 ustawy Prawo telekomunikacyjne.",
    withdraw: "Ustawienia cookies można zmienić w każdej chwili w banerze zgody lub w ustawieniach przeglądarki.",
  },
];

export const consentsEn: ConsentItem[] = [
  {
    icon: MessageSquare,
    title: "Consent to contact you about the form",
    required: true,
    scope: "Name, email address, phone number, message content.",
    purpose: "Responding to an enquiry sent via the contact form on washandgo.pl.",
    basis: "Art. 6(1)(a) GDPR – freely given consent.",
    withdraw: "Consent can be withdrawn at any time by writing to " + site.email + ".",
  },
  {
    icon: Mail,
    title: "Newsletter consent",
    required: false,
    scope: "Email address.",
    purpose: "Sending information about promotions, new services and Wash & Go events by email.",
    basis: "Art. 6(1)(a) GDPR and Art. 10 of the Act on the Provision of Electronic Services.",
    withdraw: "Unsubscribe with one click in the footer of any email, or by contacting us directly.",
  },
  {
    icon: Megaphone,
    title: "Marketing consent (phone)",
    required: false,
    scope: "Phone number.",
    purpose: "Presenting offers and commercial information by phone, including SMS.",
    basis: "Art. 6(1)(a) GDPR and Art. 172 of the Telecommunications Law.",
    withdraw: "Consent can be withdrawn by phone, email or in writing at any time.",
  },
  {
    icon: Cookie,
    title: "Consent to analytics and marketing cookies",
    required: false,
    scope: "Technical data and identifiers stored in cookies.",
    purpose: "Analysing site traffic, improving functionality, and personalising advertising content.",
    basis: "Art. 6(1)(a) GDPR and Art. 173 of the Telecommunications Law.",
    withdraw: "Cookie settings can be changed at any time in the consent banner or your browser settings.",
  },
];
