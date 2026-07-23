import { site as sitePl, type NavLink, type Service, type PricingTier, type FleetPlan, type Testimonial } from "./site-config";

export const site = {
  ...sitePl,
  claim: "Premium hand car wash",
  hoursSunday: "Closed",
};

export const navLinks: NavLink[] = [
  { href: "/en", label: "Home" },
  { href: "/en/services", label: "Services" },
  { href: "/en/pricing", label: "Pricing" },
  { href: "/en/for-business", label: "For Business" },
  { href: "/en/our-work", label: "Our Work" },
  { href: "/en/about", label: "About" },
  { href: "/en/contact", label: "Contact" },
];

export const footerLegalLinks: NavLink[] = [
  { href: "/en/privacy-policy", label: "Privacy & cookie policy" },
  { href: "/en/required-consents", label: "Required consents" },
];

export const serviceCategories: {
  title: string;
  intro: string;
  services: Service[];
}[] = [
  {
    title: "Exterior wash",
    intro: "Touchless and hand washing of the bodywork with active foam and paint-safe technology.",
    services: [
      {
        slug: "touchless-wash",
        title: "Touchless pre-wash",
        short: "Gentle pressure wash, zero scratch risk",
        description:
          "High-pressure pre-rinse and wash with no contact on the paint – perfect for removing heavy dirt before the hand wash.",
        bullets: ["Pressurised pre-rinse", "Bug and tar neutraliser", "Zero risk of micro-scratches"],
        duration: "10–15 min",
        icon: "spray",
      },
      {
        slug: "active-foam",
        title: "Active foam",
        short: "Thick, pH-neutral foam",
        description:
          "A thick layer of active foam dissolves dirt and shields the paint during the hand wash, minimising friction.",
        bullets: ["pH-neutral for coatings and PPF", "Deep-cleans micro gaps", "Fresh, pleasant scent"],
        duration: "5–10 min",
        icon: "foam",
      },
      {
        slug: "two-bucket-wash",
        title: "Two-bucket hand wash",
        short: "Two-bucket method, soft mitts",
        description:
          "Hand wash with a microfibre mitt using the two-bucket method; wheels and sills cleaned with dedicated products.",
        bullets: ["Separate products for wheels and sills", "Two-bucket method limits swirl marks", "Wheel arches cleaned"],
        duration: "20–25 min",
        icon: "drop",
      },
    ],
  },
  {
    title: "Interior & detailing",
    intro: "Complete cabin care and detailing treatments that raise your car's value.",
    services: [
      {
        slug: "vacuum-upholstery",
        title: "Vacuuming & upholstery cleaning",
        short: "Vacuuming, upholstery shampoo, floor mats",
        description:
          "Thorough vacuuming of the whole cabin, cleaning of fabric or leather upholstery, and floor mats.",
        bullets: ["Seats, boot and gaps vacuumed", "Extraction upholstery cleaning", "Leather conditioning"],
        duration: "30–45 min",
        icon: "interior",
      },
      {
        slug: "dashboard-trim-cleaning",
        title: "Dashboard & trim cleaning",
        short: "Refreshed plastics and centre console",
        description:
          "Cleaning and conditioning of the dashboard, centre console, trim strips and interior plastic parts.",
        bullets: ["Disinfection of touch surfaces", "Matte finish, no greasy look", "Screens and interior glass cleaned"],
        duration: "15–20 min",
        icon: "shield",
      },
      {
        slug: "ozone-treatment",
        title: "Ozone treatment & odour removal",
        short: "Removes unpleasant odours",
        description:
          "Ozone treatment that eliminates bacteria, mites and unpleasant smells (smoke, pets, damp) from the cabin and AC system.",
        bullets: ["Ventilation system disinfected", "Removes smoke and pet odours", "Safe for upholstery and electronics"],
        duration: "20 min",
        icon: "wind",
      },
      {
        slug: "paint-correction",
        title: "Polishing & paint correction",
        short: "Removes holograms and swirl marks",
        description:
          "One- or two-stage paint correction that restores colour depth and removes fine scratches and holograms.",
        bullets: ["Paint depth measured before treatment", "One- or two-stage correction", "Finished with a protective wax"],
        duration: "from 2 hrs",
        icon: "polish",
      },
    ],
  },
  {
    title: "Protection & finishing",
    intro: "Coatings and protection that make the wash effect last much longer.",
    services: [
      {
        slug: "ceramic-coating",
        title: "Ceramic coating",
        short: "Paint protection for up to 12 months",
        description:
          "Hand-applied ceramic coating that boosts gloss, makes washing easier and protects against the elements.",
        bullets: ["Hydrophobic effect", "UV and chemical protection", "Lasts up to 12 months"],
        duration: "from 1.5 hrs",
        icon: "shield",
      },
      {
        slug: "hot-wax",
        title: "Synthetic protective wax",
        short: "Deep gloss and 4–6 weeks of protection",
        description:
          "Synthetic protective wax applied by hand right after washing – boosts paint gloss and protects against road grime.",
        bullets: ["Deep, wet-look gloss", "Extra protection for 4–6 weeks", "Makes the next wash easier"],
        duration: "10 min",
        icon: "sparkle",
      },
      {
        slug: "wheel-care",
        title: "Wheel cleaning & care",
        short: "Dedicated acid/acid-free products",
        description:
          "Deep cleaning of wheels to remove brake dust, plus a protective coating that keeps them cleaner for longer.",
        bullets: ["Brake dust removed", "Wells and bolts cleaned", "Protective coating applied"],
        duration: "15 min",
        icon: "spray",
      },
      {
        slug: "trim-restoration",
        title: "Permanent plastic trim blackening",
        short: "Refreshed bumpers and trim strips",
        description:
          "Permanently restores deep black to faded plastic body parts – bumpers, trim strips and side skirts.",
        bullets: ["Matte finish, not greasy", "UV protection"],
        duration: "15 min",
        icon: "drop",
      },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  { name: "Exterior wash", price: "from 80–150 zł", features: ["Exterior wash"] },
  { name: "Full package", price: "from 180–300 zł", featured: true, features: ["Exterior wash", "Interior cleaning"] },
  { name: "Exterior wash with waxing", price: "from 250–400 zł", features: ["Exterior wash", "Waxing"] },
  { name: "Full package with waxing", price: "from 350–500 zł", features: ["Exterior wash", "Interior cleaning", "Waxing"] },
  { name: "Interior cleaning", price: "from 150–250 zł", features: ["Interior cleaning"] },
  { name: "Interior shampoo wash", price: "from 450–600 zł", features: ["Interior cleaning", "Upholstery shampoo wash"] },
  { name: "Washer fluid top-up", price: "from 25 zł", features: ["Washer fluid top-up"] },
  { name: "Interior ozone treatment", price: "from 150 zł", features: ["Interior ozone treatment"] },
];

export const fleetPlans: FleetPlan[] = [
  {
    name: "Fleet Start",
    desc: "For small fleets up to 5 vehicles",
    features: [
      "10% discount on all services",
      "Consolidated monthly invoice",
      "Flexible slots, no queueing",
      "One dedicated account contact",
    ],
  },
  {
    name: "Fleet Business",
    desc: "For companies with 6–20 vehicles",
    features: [
      "18% discount on all services",
      "Dedicated wash schedule",
      "Off-peak washing slots",
      "Monthly report and budget cap",
    ],
  },
  {
    name: "Fleet Enterprise",
    desc: "For fleets over 20 vehicles and leasing companies",
    features: [
      "Custom discount and pricing",
      "Vehicle pickup & delivery",
      "Annual contract with priority service",
      "Account manager and B2B billing",
    ],
  },
];

export const stats = [
  { value: 5000, suffix: "+", label: "cars washed every year" },
  { value: 4.7, suffix: "/5", label: "average customer rating", decimals: 1 },
  { value: 25, suffix: " yrs", label: "of experience" },
];

export const processSteps = [
  { title: "Book a visit", desc: "Call, message, or just drive in – no reservation needed." },
  { title: "Choose a package", desc: "We'll recommend the right scope for your car's condition and type." },
  { title: "Grab a coffee", desc: "Relax in our comfortable client lounge with coffee and Wi-Fi." },
  { title: "Pick up a spotless car", desc: "A quality check and quick walkthrough of the work done before we hand back the keys." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rafał Kałuża",
    meta: "Local Guide · 27 reviews · 9 months ago",
    text: "Zdecydowanie polecam serdecznie tą firmę. Bardzo profesjonalnie podchodzą do każdego klienta obojętnie czy ktoś przyjedzie nowym autem czy starszym, każdym jednym bardzo troskliwie się zaopiekują dobierając taką metodę kosmetyki że to auto świeci się i pachnie jak nowe. Bardzo mili pracownicy którzy zawsze z uśmiechem podchodzą do każdego klienta, bezproblemowo można się umówić na dogodny termin a nawet często i od ręki można się załapać. Szczególnie polecam ręczne woskowanie auta – szczególnie tak jak w przypadku mojego auta, ten kolor nabiera pięknej głębi i brud nie trzyma się tak tego lakieru. Prałem też u nich tapicerkę w moich 3 poprzednich samochodach, w tym w aucie, w którym poprzedni właściciel palił papierosy, i ktoś mi powiedział, że tego smrodu już się nie pozbędę. Chłopaki wyprali mi go tak porządnie, że w życiu nikt by nie powiedział, że wcześniej to było auto po palaczu, dlatego teraz też do nich jeżdżę z moim nowym Oplem. Zdecydowanie najbardziej profesjonalna kosmetyka samochodowa w mieście, więc gorąco polecam!",
    rating: 5,
  },
  {
    name: "Marta Kieryk",
    meta: "3 reviews · 6 months ago",
    text: "Usługa na najwyższym poziomie. Auto wygląda tak, jakby dopiero co opuściło linię produkcyjną, tyle że opuściło ją w 2007 roku! Efekt jest spektakularny. Szczególne uznanie za felgi, których nawet mój syn nie był w stanie doczyścić, a tutaj lśnią jak nowe. Szczera polecajka 👍",
    rating: 5,
  },
  {
    name: "Żaneta Borowska",
    meta: "Local Guide · 101 reviews · 9 months ago",
    text: "Wszystko super. Auto pięknie wyczyszczone. Jest to nowy punkt na naszej mapie Goleniowa. Bardzo polecam to miejsce.",
    rating: 5,
  },
  {
    name: "Anna Kozłowska",
    meta: "1 review · 8 months ago",
    text: "Bardzo polecam tę myjnię. Wszystko jest perfekcyjnie wyczyszczone wewnątrz i na zewnątrz. Wszystko szybko i sprawnie.",
    rating: 5,
  },
  {
    name: "Marta Próchnicka",
    meta: "Local Guide · 99 reviews · 7 months ago",
    text: "Kolejny raz oddawałam firmowe auto do tej myjni. Polecam serdecznie tą myjnię. Bardzo fachowa i miła obsługa, perfekcja w każdym calu. Na pewno wrócę tam ze swoim prywatnym autem.",
    rating: 5,
  },
  {
    name: "Irmina Bartoszewicz",
    meta: "3 reviews · 5 months ago",
    text: "Bardzo polecam tę myjnię samochodową. Auto dokładnie umyte, a obsługa niezwykle miła. Szybko, sprawnie i w przyjemnej atmosferze – na pewno wrócę!",
    rating: 5,
  },
];

export const galleryItems = [
  { title: "Paint correction – Audi RS6", category: "Detailing", tone: "navy" as const, image: "/gallery/audi-rs6.webp" },
  { title: "Ceramic coating – Porsche Macan", category: "Paint protection", tone: "blue" as const, image: "/gallery/porsche-macan.webp" },
  { title: "Upholstery cleaning – Volvo XC90", category: "Interior", tone: "graphite" as const, image: "/gallery/volvo-xc90-wnetrze.webp" },
  { title: "Fleet wash", category: "Fleet", tone: "navy" as const, image: "/gallery/mycie-floty.webp" },
  { title: "Trim restoration – Range Rover", category: "Finishing", tone: "graphite" as const, image: "/gallery/range-rover-sport.webp" },
  { title: "Gloss finish – Mercedes E-Class", category: "Premium wash", tone: "blue" as const, image: "/gallery/mercedes-e-class.webp" },
  { title: "Wheel detailing – Volkswagen Golf GTI", category: "Wheel detailing", tone: "navy" as const, image: "/gallery/vw-golf-gti.webp" },
  { title: "Ozone treatment – Toyota Land Cruiser", category: "Disinfection", tone: "graphite" as const },
  { title: "Protective wax – Ford Mustang", category: "Finishing", tone: "blue" as const, image: "/gallery/ford-mustang.webp" },
  { title: "Exterior wash – BMW 3 Series", category: "Exterior wash", tone: "blue" as const },
  { title: "Vacuuming – Škoda Octavia", category: "Interior", tone: "graphite" as const, image: "/gallery/skoda-octavia.webp" },
];

export const values = [
  { title: "Precision", desc: "Every step is done by hand, with attention to the details you don't notice at first glance." },
  { title: "Safe products", desc: "pH-neutral car care products, safe for paint, PPF film and ceramic coatings." },
  { title: "Transparency", desc: "A clear price list with no hidden fees – you know exactly what you're paying for." },
  { title: "Eco-friendly", desc: "Biodegradable, safe car care chemistry and responsible wastewater management." },
];

export const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "No, we also serve walk-in customers. At busy times we do recommend calling ahead or booking a specific slot.",
  },
  {
    q: "How long does a hand wash take?",
    a: "An exterior wash alone takes about 20–25 minutes, a full package with interior cleaning 45–60 minutes, and add-ons like upholstery shampooing or ozone treatment extend the time depending on scope.",
  },
  {
    q: "Do you have a waiting area?",
    a: "Yes, our comfortable client lounge has coffee, Wi-Fi and a spot to work remotely while your car is washed or detailed.",
  },
  {
    q: "Do you issue VAT invoices?",
    a: "Yes, every service can be settled with a VAT invoice, and fleet clients can get consolidated monthly billing.",
  },
];
