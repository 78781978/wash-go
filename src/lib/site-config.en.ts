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
          "High-pressure pre-rinse and wash with no contact on the paint, perfect for removing heavy dirt before the hand wash.",
        bullets: ["Pressurised pre-rinse", "Bug and tar neutraliser", "Zero risk of micro-scratches"],
        duration: "10-15 min",
        icon: "spray",
      },
      {
        slug: "active-foam",
        title: "Active foam",
        short: "Thick, pH-neutral foam",
        description:
          "A thick layer of active foam dissolves dirt and shields the paint during the hand wash, minimising friction.",
        bullets: ["pH-neutral for coatings and PPF", "Deep-cleans micro gaps", "Fresh, pleasant scent"],
        duration: "5-10 min",
        icon: "foam",
      },
      {
        slug: "two-bucket-wash",
        title: "Two-bucket hand wash",
        short: "Two-bucket method, soft mitts",
        description:
          "Hand wash with a microfibre mitt using the two-bucket method; wheels and sills cleaned with dedicated products.",
        bullets: ["Separate products for wheels and sills", "Two-bucket method limits swirl marks", "Wheel arches cleaned"],
        duration: "20-25 min",
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
        duration: "30-45 min",
        icon: "interior",
      },
      {
        slug: "dashboard-trim-cleaning",
        title: "Dashboard & trim cleaning",
        short: "Refreshed plastics and centre console",
        description:
          "Cleaning and conditioning of the dashboard, centre console, trim strips and interior plastic parts.",
        bullets: ["Disinfection of touch surfaces", "Matte finish, no greasy look", "Screens and interior glass cleaned"],
        duration: "15-20 min",
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
        short: "Deep gloss and 4-6 weeks of protection",
        description:
          "Synthetic protective wax applied by hand right after washing, boosts paint gloss and protects against road grime.",
        bullets: ["Deep, wet-look gloss", "Extra protection for 4-6 weeks", "Makes the next wash easier"],
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
          "Permanently restores deep black to faded plastic body parts, bumpers, trim strips and side skirts.",
        bullets: ["Matte finish, not greasy", "UV protection"],
        duration: "15 min",
        icon: "drop",
      },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  { name: "Exterior wash", price: "from 80-150 zł", features: ["Exterior wash"] },
  { name: "Full package", price: "from 180-300 zł", featured: true, features: ["Exterior wash", "Interior cleaning"] },
  { name: "Exterior wash with waxing", price: "from 250-400 zł", features: ["Exterior wash", "Waxing"] },
  { name: "Full package with waxing", price: "from 350-500 zł", features: ["Exterior wash", "Interior cleaning", "Waxing"] },
  { name: "Interior cleaning", price: "from 150-250 zł", features: ["Interior cleaning"] },
  { name: "Interior shampoo wash", price: "from 450-600 zł", features: ["Interior cleaning", "Upholstery shampoo wash"] },
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
    desc: "For companies with 6-20 vehicles",
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
  { title: "Book a visit", desc: "Call, message, or just drive in, no reservation needed." },
  { title: "Choose a package", desc: "We'll recommend the right scope for your car's condition and type." },
  { title: "Grab a coffee", desc: "Relax in our comfortable client lounge with coffee and Wi-Fi." },
  { title: "Pick up a spotless car", desc: "A quality check and quick walkthrough of the work done before we hand back the keys." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rafał Kałuża",
    meta: "Local Guide · 27 reviews · 9 months ago",
    text: "I definitely and warmly recommend this company. They treat every customer very professionally, whether you show up in a brand-new car or an older one – each one is looked after with real care, choosing the right products so the car ends up shining and smelling like new. Very friendly staff who always greet every customer with a smile, and it's easy to book a convenient slot – you can often even get in on the spot. I especially recommend the hand waxing – in the case of my car, the colour gained a beautiful depth and dirt doesn't stick to the paint as easily anymore. I've also had the upholstery cleaned there in my 3 previous cars, including one whose previous owner used to smoke in it, and I was told I'd never get rid of that smell. The guys cleaned it so thoroughly that nobody would ever have guessed a smoker used to own that car – that's why I still bring my new Opel to them now. Definitely the most professional car detailing in town, so I highly recommend it!",
    rating: 5,
  },
  {
    name: "Marta Kieryk",
    meta: "3 reviews · 6 months ago",
    text: "Top-notch service. The car looks like it just rolled off the production line – except it actually rolled off it in 2007! The result is spectacular. Special credit for the wheels, which even my son couldn't get fully clean, and here they came out shining like new. A genuine recommendation 👍",
    rating: 5,
  },
  {
    name: "Żaneta Borowska",
    meta: "Local Guide · 101 reviews · 9 months ago",
    text: "Everything was great. The car was beautifully cleaned. This is a new spot on our map of Goleniów. I highly recommend this place.",
    rating: 5,
  },
  {
    name: "Anna Kozłowska",
    meta: "1 review · 8 months ago",
    text: "I highly recommend this car wash. Everything is perfectly cleaned, inside and out. Fast and efficient service.",
    rating: 5,
  },
  {
    name: "Marta Próchnicka",
    meta: "Local Guide · 99 reviews · 7 months ago",
    text: "I brought our company car to this car wash once again. I warmly recommend this place. Very professional and friendly service, perfection in every detail. I'll definitely come back with my own private car too.",
    rating: 5,
  },
  {
    name: "Irmina Bartoszewicz",
    meta: "3 reviews · 5 months ago",
    text: "I highly recommend this car wash. The car was thoroughly cleaned, and the staff were incredibly friendly. Fast, efficient, and in a pleasant atmosphere – I'll definitely be back!",
    rating: 5,
  },
];

export const galleryItems = [
  { title: "Paint correction - Audi RS6", category: "Detailing", tone: "navy" as const, image: "/gallery/audi-rs6.webp", alt: "Audi RS6 bonnet before and after paint correction, swirl marks and scratches removed." },
  { title: "Ceramic coating - Porsche Macan", category: "Paint protection", tone: "blue" as const, image: "/gallery/porsche-macan.webp", alt: "Porsche Macan before and after ceramic coating, deep, glossy paint finish." },
  { title: "Upholstery cleaning - Volvo XC90", category: "Interior", tone: "graphite" as const, image: "/gallery/volvo-xc90-wnetrze.webp", alt: "Volvo XC90 front seats before and after upholstery cleaning, stains removed from the leather." },
  { title: "Fleet wash", category: "Fleet", tone: "navy" as const, image: "/gallery/mycie-floty.webp", alt: "A row of company vans before and after a fleet wash, bodywork shine restored." },
  { title: "Trim restoration - Range Rover", category: "Finishing", tone: "graphite" as const, image: "/gallery/range-rover-sport.webp", alt: "Range Rover Sport before and after permanent exterior trim restoration." },
  { title: "Gloss finish - Mercedes E-Class", category: "Premium wash", tone: "blue" as const, image: "/gallery/mercedes-e-class.webp", alt: "Mercedes E-Class before and after a gloss wash, dust and grime removed from the paint." },
  { title: "Wheel detailing - Volkswagen Golf GTI", category: "Wheel detailing", tone: "navy" as const, image: "/gallery/vw-golf-gti.webp", alt: "Volkswagen Golf GTI wheel before and after detailing, brake dust removed." },
  { title: "Ozone treatment - Toyota Land Cruiser", category: "Disinfection", tone: "graphite" as const, image: "/gallery/toyota-land-cruiser.webp", alt: "Toyota Land Cruiser interior during ozone treatment and cabin disinfection." },
  { title: "Protective wax - Ford Mustang", category: "Finishing", tone: "blue" as const, image: "/gallery/ford-mustang.webp", alt: "Ford Mustang before and after protective wax application." },
  { title: "Exterior wash - BMW 3 Series", category: "Exterior wash", tone: "blue" as const, image: "/gallery/bmw-3-series.webp", alt: "BMW 3 Series before and after an exterior wash, dirt removed from the bodywork." },
  { title: "Vacuuming - Škoda Octavia", category: "Interior", tone: "graphite" as const, image: "/gallery/skoda-octavia.webp", alt: "Škoda Octavia interior before and after vacuuming, clean upholstery and floor mats." },
];

export const values = [
  { title: "Precision", desc: "Every step is done by hand, with attention to the details you don't notice at first glance." },
  { title: "Safe products", desc: "pH-neutral car care products, safe for paint, PPF film and ceramic coatings." },
  { title: "Transparency", desc: "A clear price list with no hidden fees, you know exactly what you're paying for." },
  { title: "Eco-friendly", desc: "Biodegradable, safe car care chemistry and responsible wastewater management." },
];

export const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "No, we also serve walk-in customers. At busy times we do recommend calling ahead or booking a specific slot.",
  },
  {
    q: "How long does a hand wash take?",
    a: "An exterior wash alone takes about 20-25 minutes, a full package with interior cleaning 45-60 minutes, and add-ons like upholstery shampooing or ozone treatment extend the time depending on scope.",
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
