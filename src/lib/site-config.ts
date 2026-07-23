export const site = {
  name: "Wash & Go",
  claim: "Ręczna myjnia samochodowa premium",
  city: "Goleniów",
  address: "ul. Szczecińska 4b, 72-100 Goleniów",
  phone: "+48 886 850 464",
  phoneHref: "tel:+48886850464",
  email: "kontakt@washandgo.pl",
  nip: "PL 856 000 12 34",
  hoursWeekdays: "09:00 – 17:00",
  hoursSaturday: "09:00 – 14:00",
  hoursSunday: "Nieczynne",
  mapsUrl: "https://maps.google.com/?q=Wash%20%26%20Go%20Goleni%C3%B3w",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "Strona główna" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/oferta-dla-firm", label: "Oferta dla firm" },
  { href: "/nasze-prace", label: "Nasze prace" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerLegalLinks: NavLink[] = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności i cookies" },
  { href: "/wymagane-zgody", label: "Wymagane zgody" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  duration: string;
  icon: "spray" | "foam" | "sparkle" | "interior" | "shield" | "wind" | "drop" | "polish";
};

export const serviceCategories: {
  title: string;
  intro: string;
  services: Service[];
}[] = [
  {
    title: "Mycie zewnętrzne",
    intro: "Bezdotykowe i ręczne mycie karoserii z aktywną pianą i technologią chroniącą lakier.",
    services: [
      {
        slug: "mycie-bezdotykowe",
        title: "Mycie bezdotykowe",
        short: "Delikatne mycie ciśnieniowe bez ryzyka rys",
        description:
          "Wstępne płukanie i mycie wysokociśnieniowe bez kontaktu z lakierem – idealne do usuwania grubego brudu przed myciem ręcznym.",
        bullets: ["Płukanie wstępne pod ciśnieniem", "Neutralizacja owadów i smoły", "Zero ryzyka mikrorys"],
        duration: "10–15 min",
        icon: "spray",
      },
      {
        slug: "aktywna-piana",
        title: "Aktywna piana",
        short: "Gęsta piana o neutralnym pH",
        description:
          "Gruba warstwa aktywnej piany rozpuszcza brud i zabezpiecza lakier na czas mycia ręcznego, minimalizując tarcie.",
        bullets: ["pH neutralne dla powłok i folii PPF", "Głębokie oczyszczenie mikroszczelin", "Przyjemny, świeży zapach"],
        duration: "5–10 min",
        icon: "foam",
      },
      {
        slug: "mycie-reczne",
        title: "Mycie ręczne dwuwiadrowe",
        short: "Metoda two-bucket, miękkie rękawice",
        description:
          "Mycie ręczne rękawicą z mikrofibry metodą dwóch wiader, felgi i progi czyszczone osobnymi środkami.",
        bullets: ["Osobne środki do felg i progów", "Metoda two-bucket ograniczająca rysy", "Czyszczenie wnęk kół"],
        duration: "20–25 min",
        icon: "drop",
      },
    ],
  },
  {
    title: "Wnętrze i detailing",
    intro: "Pełna pielęgnacja kabiny pasażerskiej oraz zabiegi detailingowe podnoszące wartość auta.",
    services: [
      {
        slug: "odkurzanie-tapicerki",
        title: "Odkurzanie i czyszczenie tapicerki",
        short: "Odkurzanie, pranie tapicerki, mata podłogowa",
        description:
          "Dokładne odkurzenie całej kabiny, czyszczenie tapicerki materiałowej lub skórzanej oraz mat podłogowych.",
        bullets: ["Odkurzanie foteli, bagażnika i szczelin", "Pranie tapicerki ekstrakcyjne", "Pielęgnacja skóry"],
        duration: "30–45 min",
        icon: "interior",
      },
      {
        slug: "czyszczenie-deski-plastikow",
        title: "Czyszczenie deski rozdzielczej i plastików",
        short: "Odświeżenie plastików i konsoli",
        description:
          "Czyszczenie i pielęgnacja deski rozdzielczej, konsoli środkowej, listew i plastikowych elementów wnętrza.",
        bullets: ["Dezynfekcja powierzchni dotykowych", "Matowa pielęgnacja bez efektu plastiku", "Czyszczenie ekranów i szyb wewnętrznych"],
        duration: "15–20 min",
        icon: "shield",
      },
      {
        slug: "ozonowanie",
        title: "Ozonowanie i neutralizacja zapachów",
        short: "Usuwanie nieprzyjemnych zapachów",
        description:
          "Zabieg ozonowania eliminujący bakterie, roztocza i nieprzyjemne zapachy (dym, zwierzęta, wilgoć) z wnętrza i klimatyzacji.",
        bullets: ["Dezynfekcja układu wentylacji", "Neutralizacja zapachu dymu i zwierząt", "Bezpieczne dla tapicerki i elektroniki"],
        duration: "20 min",
        icon: "wind",
      },
      {
        slug: "polerowanie-lakieru",
        title: "Polerowanie i korekta lakieru",
        short: "Usuwanie hologramów i rys",
        description:
          "Jedno- lub dwuetapowa korekta lakieru przywracająca głębię koloru i usuwająca drobne rysy oraz hologramy.",
        bullets: ["Pomiar grubości lakieru przed zabiegiem", "Korekta jedno- lub dwuetapowa", "Zabezpieczenie woskiem na finiszu"],
        duration: "od 2 godz.",
        icon: "polish",
      },
    ],
  },
  {
    title: "Ochrona i wykończenie",
    intro: "Powłoki i zabezpieczenia, które utrzymują efekt mycia znacznie dłużej.",
    services: [
      {
        slug: "powloka-ceramiczna",
        title: "Powłoka ceramiczna",
        short: "Ochrona lakieru do 12 miesięcy",
        description:
          "Nakładana ręcznie powłoka ceramiczna zwiększająca połysk, ułatwiająca mycie i chroniąca przed czynnikami atmosferycznymi.",
        bullets: ["Efekt hydrofobowy", "Ochrona UV i chemiczna", "Trwałość do 12 miesięcy"],
        duration: "od 1,5 godz.",
        icon: "shield",
      },
      {
        slug: "wosk-ochronny",
        title: "Syntetyczny wosk ochronny",
        short: "Głęboki połysk i ochrona na 4–6 tyg.",
        description:
          "Syntetyczny wosk ochronny nakładany ręcznie tuż po myciu – wzmacnia połysk lakieru i chroni go przed warunkami drogowymi.",
        bullets: ["Głęboki, mokry połysk", "Dodatkowa ochrona na 4–6 tygodni", "Ułatwia kolejne mycie"],
        duration: "10 min",
        icon: "sparkle",
      },
      {
        slug: "czyszczenie-felg",
        title: "Czyszczenie i pielęgnacja felg",
        short: "Dedykowane środki kwasowe/bezkwasowe",
        description:
          "Głębokie czyszczenie felg z osadu hamulcowego oraz nałożenie powłoki ułatwiającej utrzymanie czystości.",
        bullets: ["Usuwanie osadu klocków hamulcowych", "Czyszczenie wnęk i śrub", "Powłoka ochronna na felgi"],
        duration: "15 min",
        icon: "spray",
      },
      {
        slug: "czarnienie-plastikow",
        title: "Permanentne czarnienie plastików",
        short: "Odświeżenie zderzaków i listew",
        description:
          "Permanentne przywrócenie głębokiej czerni wypłowiałym plastikowym elementom nadwozia – zderzakom, listwom i progom.",
        bullets: ["Efekt matowy, bez tłustego połysku", "Ochrona przed promieniowaniem UV"],
        duration: "15 min",
        icon: "drop",
      },
    ],
  },
];

export type PricingTier = {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  { name: "Mycie zewnętrzne", price: "od 80–150 zł", features: ["Mycie zewnętrzne"] },
  { name: "Komplet", price: "od 180–300 zł", featured: true, features: ["Mycie zewnętrzne", "Sprzątanie wnętrza"] },
  { name: "Mycie zewnętrzne z woskowaniem", price: "od 250–400 zł", features: ["Mycie zewnętrzne", "Woskowanie"] },
  { name: "Komplet z woskowaniem", price: "od 350–500 zł", features: ["Mycie zewnętrzne", "Sprzątanie wnętrza", "Woskowanie"] },
  { name: "Sprzątanie wnętrza", price: "od 150–250 zł", features: ["Sprzątanie wnętrza"] },
  { name: "Pranie wnętrza", price: "od 450–600 zł", features: ["Sprzątanie wnętrza", "Pranie tapicerki"] },
  { name: "Płyn do spryskiwaczy", price: "od 25 zł", features: ["Płyn do spryskiwaczy"] },
  { name: "Ozonowanie wnętrza", price: "od 150 zł", features: ["Ozonowanie wnętrza"] },
];

export type FleetPlan = {
  name: string;
  desc: string;
  features: string[];
};

export const fleetPlans: FleetPlan[] = [
  {
    name: "Flota Start",
    desc: "Dla małych flot do 5 pojazdów",
    features: [
      "Rabat 10% na wszystkie usługi",
      "Faktura zbiorcza raz w miesiącu",
      "Elastyczne terminy bez kolejki",
      "Jeden opiekun klienta",
    ],
  },
  {
    name: "Flota Business",
    desc: "Dla firm z 6–20 pojazdami",
    features: [
      "Rabat 18% na wszystkie usługi",
      "Dedykowany harmonogram mycia",
      "Mycie poza godzinami szczytu",
      "Raport miesięczny i limit budżetu",
    ],
  },
  {
    name: "Flota Enterprise",
    desc: "Dla flot powyżej 20 pojazdów i firm leasingowych",
    features: [
      "Indywidualny rabat i cennik",
      "Odbiór i dostawa pojazdu",
      "Umowa roczna i priorytetowa obsługa",
      "Opiekun handlowy i rozliczenia B2B",
    ],
  },
];

export const stats = [
  { value: 5000, suffix: "+", label: "umytych samochodów rocznie" },
  { value: 4.7, suffix: "/5", label: "średnia ocena klientów", decimals: 1 },
  { value: 25, suffix: " lat", label: "doświadczenia na rynku" },
];

export const processSteps = [
  { title: "Umów wizytę", desc: "Zadzwoń, napisz lub po prostu wjedź – bez wcześniejszej rezerwacji." },
  { title: "Wybierz pakiet", desc: "Doradzimy zakres mycia dopasowany do stanu i typu Twojego auta." },
  { title: "Odbierz kawę", desc: "Poczekaj w komfortowej strefie klienta z kawą i Wi-Fi." },
  { title: "Odbierz lśniące auto", desc: "Kontrola jakości i krótki przegląd wykonanych usług przed wydaniem kluczyków." },
];

export type Testimonial = { name: string; meta: string; text: string; rating: number };

export const testimonials: Testimonial[] = [
  {
    name: "Rafał Kałuża",
    meta: "Lokalny przewodnik · 27 opinii · 9 mies. temu",
    text: "Zdecydowanie polecam serdecznie tą firmę. Bardzo profesjonalnie podchodzą do każdego klienta obojętnie czy ktoś przyjedzie nowym autem czy starszym, każdym jednym bardzo troskliwie się zaopiekują dobierając taką metodę kosmetyki że to auto świeci się i pachnie jak nowe. Bardzo mili pracownicy którzy zawsze z uśmiechem podchodzą do każdego klienta, bezproblemowo można się umówić na dogodny termin a nawet często i od ręki można się załapać. Szczególnie polecam ręczne woskowanie auta – szczególnie tak jak w przypadku mojego auta, ten kolor nabiera pięknej głębi i brud nie trzyma się tak tego lakieru. Prałem też u nich tapicerkę w moich 3 poprzednich samochodach, w tym w aucie, w którym poprzedni właściciel palił papierosy, i ktoś mi powiedział, że tego smrodu już się nie pozbędę. Chłopaki wyprali mi go tak porządnie, że w życiu nikt by nie powiedział, że wcześniej to było auto po palaczu, dlatego teraz też do nich jeżdżę z moim nowym Oplem. Zdecydowanie najbardziej profesjonalna kosmetyka samochodowa w mieście, więc gorąco polecam!",
    rating: 5,
  },
  {
    name: "Marta Kieryk",
    meta: "3 opinie · 6 mies. temu",
    text: "Usługa na najwyższym poziomie. Auto wygląda tak, jakby dopiero co opuściło linię produkcyjną, tyle że opuściło ją w 2007 roku! Efekt jest spektakularny. Szczególne uznanie za felgi, których nawet mój syn nie był w stanie doczyścić, a tutaj lśnią jak nowe. Szczera polecajka 👍",
    rating: 5,
  },
  {
    name: "Żaneta Borowska",
    meta: "Lokalny przewodnik · 101 opinii · 9 mies. temu",
    text: "Wszystko super. Auto pięknie wyczyszczone. Jest to nowy punkt na naszej mapie Goleniowa. Bardzo polecam to miejsce.",
    rating: 5,
  },
  {
    name: "Anna Kozłowska",
    meta: "1 opinia · 8 mies. temu",
    text: "Bardzo polecam tę myjnię. Wszystko jest perfekcyjnie wyczyszczone wewnątrz i na zewnątrz. Wszystko szybko i sprawnie.",
    rating: 5,
  },
  {
    name: "Marta Próchnicka",
    meta: "Lokalny przewodnik · 99 opinii · 7 mies. temu",
    text: "Kolejny raz oddawałam firmowe auto do tej myjni. Polecam serdecznie tą myjnię. Bardzo fachowa i miła obsługa, perfekcja w każdym calu. Na pewno wrócę tam ze swoim prywatnym autem.",
    rating: 5,
  },
  {
    name: "Irmina Bartoszewicz",
    meta: "3 opinie · 5 mies. temu",
    text: "Bardzo polecam tę myjnię samochodową. Auto dokładnie umyte, a obsługa niezwykle miła. Szybko, sprawnie i w przyjemnej atmosferze – na pewno wrócę!",
    rating: 5,
  },
];

export const galleryItems = [
  { title: "Korekta lakieru – Audi RS6", category: "Detailing", tone: "navy" as const, image: "/gallery/audi-rs6.webp" },
  { title: "Powłoka ceramiczna – Porsche Macan", category: "Ochrona lakieru", tone: "blue" as const, image: "/gallery/porsche-macan.webp" },
  { title: "Pranie tapicerki – Volvo XC90", category: "Wnętrze", tone: "graphite" as const, image: "/gallery/volvo-xc90-wnetrze.webp" },
  { title: "Mycie floty", category: "Flota", tone: "navy" as const, image: "/gallery/mycie-floty.webp" },
  { title: "Czarnienie plastików – Range Rover", category: "Wykończenie", tone: "graphite" as const, image: "/gallery/range-rover-sport.webp" },
  { title: "Nabłyszczanie – Mercedes klasy E", category: "Mycie premium", tone: "blue" as const, image: "/gallery/mercedes-e-class.webp" },
  { title: "Czyszczenie felg – Volkswagen Golf GTI", category: "Detailing kół", tone: "navy" as const },
  { title: "Ozonowanie – Toyota Land Cruiser", category: "Dezynfekcja", tone: "graphite" as const },
  { title: "Wosk ochronny – Ford Mustang", category: "Wykończenie", tone: "blue" as const },
  { title: "Mycie zewnętrzne – BMW serii 3", category: "Mycie zewnętrzne", tone: "blue" as const },
  { title: "Odkurzanie – Škoda Octavia", category: "Wnętrze", tone: "graphite" as const },
];

export const values = [
  { title: "Precyzja", desc: "Każdy etap mycia wykonujemy ręcznie, z dbałością o detale, których nie widać na pierwszy rzut oka." },
  { title: "Bezpieczne środki", desc: "Kosmetyki samochodowe pH neutralne, bezpieczne dla lakieru, folii PPF i powłok ceramicznych." },
  { title: "Transparentność", desc: "Jasny cennik bez ukrytych opłat – wiesz dokładnie, za co płacisz." },
  { title: "Ekologia", desc: "Biodegradowalna, bezpieczna chemia samochodowa i odpowiedzialna gospodarka ściekami." },
];

export const faqs = [
  {
    q: "Czy trzeba się wcześniej umawiać?",
    a: "Nie, obsługujemy klientów również bez rezerwacji. Przy dużym natężeniu ruchu polecamy jednak wcześniejszy kontakt telefoniczny lub rezerwację na wybraną godzinę.",
  },
  {
    q: "Jak długo trwa mycie ręczne?",
    a: "Samo mycie zewnętrzne to około 20–25 minut, pakiet z pełnym sprzątaniem wnętrza 45–60 minut, a usługi dodatkowe jak pranie tapicerki czy ozonowanie wydłużają czas w zależności od zakresu.",
  },
  {
    q: "Czy oferujecie strefę oczekiwania?",
    a: "Tak, w komfortowej strefie klienta czeka kawa, Wi-Fi oraz miejsce do pracy zdalnej na czas mycia lub detailingu.",
  },
  {
    q: "Czy wystawiacie faktury VAT?",
    a: "Tak, każda usługa może zostać rozliczona fakturą VAT, a klientom flotowym oferujemy rozliczenia zbiorcze w cyklu miesięcznym.",
  },
];
