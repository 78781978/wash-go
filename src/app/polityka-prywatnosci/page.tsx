import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Polityka prywatności i cookies",
  description: "Polityka prywatności i plików cookies serwisu washandgo.pl.",
};

const sections: LegalSection[] = [
  {
    id: "administrator",
    title: "Administrator danych osobowych",
    content: (
      <>
        <p>
          Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej washandgo.pl
          jest {site.name}, {site.address}, NIP: {site.nip} (dalej: „Administrator”).
        </p>
        <p>
          Kontakt z Administratorem możliwy jest pod adresem e-mail: {site.email} lub telefonicznie:{" "}
          {site.phone}.
        </p>
      </>
    ),
  },
  {
    id: "zakres-danych",
    title: "Jakie dane przetwarzamy",
    content: (
      <>
        <p>W zależności od sposobu korzystania ze strony możemy przetwarzać następujące dane:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>dane podane w formularzu kontaktowym: imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości,</li>
          <li>dane techniczne: adres IP, typ przeglądarki, urządzenia, dane o aktywności na stronie (pliki cookies),</li>
          <li>dane podane w korespondencji e-mail lub telefonicznej związanej ze świadczeniem usług.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cele-i-podstawy",
    title: "Cele i podstawy prawne przetwarzania",
    content: (
      <>
        <p>Dane osobowe przetwarzane są w następujących celach:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            udzielenie odpowiedzi na zapytanie przesłane przez formularz kontaktowy – podstawa prawna: art. 6
            ust. 1 lit. a i f RODO (zgoda oraz prawnie uzasadniony interes Administratora),
          </li>
          <li>
            zawarcie i wykonanie umowy o świadczenie usług mycia i detailingu – art. 6 ust. 1 lit. b RODO,
          </li>
          <li>
            wystawianie faktur i spełnienie obowiązków podatkowo-księgowych – art. 6 ust. 1 lit. c RODO,
          </li>
          <li>
            marketing bezpośredni własnych usług, w tym newsletter – art. 6 ust. 1 lit. a RODO (zgoda),
          </li>
          <li>
            analiza ruchu na stronie i poprawa jej funkcjonalności – art. 6 ust. 1 lit. f RODO (prawnie
            uzasadniony interes Administratora).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "okres-przechowywania",
    title: "Okres przechowywania danych",
    content: (
      <p>
        Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane – w
        szczególności przez czas trwania współpracy oraz okres przedawnienia roszczeń, a w przypadku
        dokumentów księgowych przez okres wymagany przepisami prawa podatkowego (co do zasady 5 lat). Dane
        przetwarzane na podstawie zgody przechowujemy do czasu jej wycofania.
      </p>
    ),
  },
  {
    id: "odbiorcy",
    title: "Odbiorcy danych",
    content: (
      <>
        <p>Dane osobowe mogą być przekazywane podmiotom wspierającym Administratora, w szczególności:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>dostawcom usług hostingowych i IT,</li>
          <li>dostawcom narzędzi analitycznych i marketingowych (za zgodą użytkownika),</li>
          <li>biuru rachunkowemu obsługującemu Administratora,</li>
          <li>podmiotom uprawnionym na podstawie przepisów prawa.</li>
        </ul>
      </>
    ),
  },
  {
    id: "prawa",
    title: "Prawa użytkownika",
    content: (
      <>
        <p>W związku z przetwarzaniem danych osobowych przysługuje Ci prawo do:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>dostępu do danych oraz otrzymania ich kopii,</li>
          <li>sprostowania (poprawiania) danych,</li>
          <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
          <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ul>
        <p>Aby skorzystać z powyższych praw, skontaktuj się z nami na adres {site.email}.</p>
      </>
    ),
  },
  {
    id: "cookies-czym-sa",
    title: "Czym są pliki cookies",
    content: (
      <p>
        Pliki cookies (ciasteczka) to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika podczas
        korzystania ze strony internetowej. Pozwalają one m.in. zapamiętać preferencje użytkownika, zapewnić
        prawidłowe działanie strony oraz analizować sposób korzystania z serwisu.
      </p>
    ),
  },
  {
    id: "cookies-rodzaje",
    title: "Rodzaje wykorzystywanych cookies",
    content: (
      <>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-navy">Niezbędne</strong> – konieczne do prawidłowego funkcjonowania
            strony (np. zapamiętanie ustawień plików cookies). Nie wymagają zgody i nie można ich wyłączyć.
          </li>
          <li>
            <strong className="text-navy">Analityczne</strong> – pozwalają zbierać zanonimizowane informacje
            o sposobie korzystania ze strony (np. odwiedzane podstrony, czas trwania wizyty). Wymagają zgody
            użytkownika.
          </li>
          <li>
            <strong className="text-navy">Marketingowe</strong> – wykorzystywane do wyświetlania
            spersonalizowanych treści reklamowych. Wymagają zgody użytkownika.
          </li>
        </ul>
        <p>
          Zgodę na cookies analityczne i marketingowe możesz wyrazić lub wycofać w każdej chwili za pomocą
          banera zgody widocznego przy pierwszej wizycie na stronie lub w ustawieniach swojej przeglądarki.
        </p>
      </>
    ),
  },
  {
    id: "cookies-zarzadzanie",
    title: "Zarządzanie plikami cookies",
    content: (
      <p>
        Większość przeglądarek internetowych domyślnie akceptuje pliki cookies. Użytkownik może samodzielnie
        zmienić ustawienia dotyczące cookies w swojej przeglądarce – w tym zablokować ich zapisywanie lub
        usunąć już zapisane pliki. Ograniczenie stosowania cookies może wpłynąć na niektóre funkcjonalności
        dostępne na stronie.
      </p>
    ),
  },
  {
    id: "bezpieczenstwo",
    title: "Bezpieczeństwo danych",
    content: (
      <p>
        Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę
        przetwarzanych danych osobowych, w tym ochronę przed nieuprawnionym dostępem, utratą lub
        zniszczeniem danych.
      </p>
    ),
  },
  {
    id: "zmiany",
    title: "Zmiany polityki prywatności",
    content: (
      <p>
        Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności.
        Aktualna wersja dokumentu publikowana jest zawsze na tej stronie wraz z datą ostatniej aktualizacji.
      </p>
    ),
  },
];

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <PageHero
        eyebrow="Dokument prawny"
        crumb="Polityka prywatności i cookies"
        title="Polityka prywatności i plików cookies"
        description="Wyjaśniamy, jakie dane zbieramy, w jakim celu je przetwarzamy oraz jak wykorzystujemy pliki cookies na naszej stronie."
      />
      <LegalLayout sections={sections} updated="16 lipca 2026 r." />
    </>
  );
}
