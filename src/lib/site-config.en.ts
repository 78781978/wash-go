import { site as sitePl, type NavLink, type Service, type PricingTier, type FleetPlan, type Testimonial } from "./site-config";

export const site = {
  ...sitePl,
  claim: "Premium hand car wash",
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
          "High-pressure pre-rinse and wash with no contact on the paint — perfect for removing heavy dirt before the hand wash.",
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
      {
        slug: "gloss-osmosis-rinse",
        title: "Gloss finish & osmosis rinse",
        short: "Final rinse with demineralised water",
        description:
          "Final rinse with reverse-osmosis water — no limescale or water spots — plus a gloss enhancer for paint, trim and rubber.",
        bullets: ["Demineralised water — no water spots", "Paint and trim gloss enhancer", "Dried by hand with microfibre towels"],
        duration: "10 min",
        icon: "sparkle",
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
        title: "Hot protective wax",
        short: "Deep gloss and 4–6 weeks of protection",
        description:
          "Wax applied hot right after washing — it works into the paint's micropores, boosting gloss and resistance to road grime.",
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
        title: "Exterior trim restoration",
        short: "Refreshed bumpers and trim strips",
        description:
          "Restores deep black to faded plastic body parts — bumpers, trim strips and side skirts.",
        bullets: ["Matte finish, not greasy", "UV protection", "Lasts several weeks"],
        duration: "15 min",
        icon: "drop",
      },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Express",
    tagline: "A quick refresh, right now",
    prices: [
      { label: "Car / hatchback", price: "59 zł" },
      { label: "SUV / estate", price: "69 zł" },
      { label: "Van / minibus", price: "89 zł" },
    ],
    features: [
      "Touchless pre-wash",
      "Active foam",
      "Two-bucket hand wash",
      "Osmosis rinse",
      "Hand-dried with microfibre towels",
      "Wheel cleaning",
    ],
  },
  {
    name: "Premium",
    tagline: "Our most popular package",
    featured: true,
    prices: [
      { label: "Car / hatchback", price: "129 zł" },
      { label: "SUV / estate", price: "149 zł" },
      { label: "Van / minibus", price: "179 zł" },
    ],
    features: [
      "Everything in Express",
      "Full interior vacuuming",
      "Upholstery and trim cleaning",
      "Tyre and trim gloss finish",
      "Hot protective wax",
      "Interior and exterior glass cleaning",
    ],
  },
  {
    name: "Detailing",
    tagline: "A full reset for your car",
    prices: [
      { label: "Car / hatchback", price: "from 349 zł" },
      { label: "SUV / estate", price: "from 399 zł" },
      { label: "Van / minibus", price: "from 449 zł" },
    ],
    features: [
      "Everything in Premium",
      "Extraction upholstery cleaning",
      "Ozone treatment & disinfection",
      "One-stage paint correction",
      "Ceramic coating, 3 months",
      "Exterior trim restoration",
    ],
  },
];

export const addOns: { name: string; price: string }[] = [
  { name: "Ceramic coating, 12 months", price: "from 799 zł" },
  { name: "Interior ozone treatment", price: "79 zł" },
  { name: "Full upholstery cleaning", price: "from 249 zł" },
  { name: "Headlight polishing", price: "from 99 zł" },
  { name: "AC system disinfection", price: "69 zł" },
  { name: "Tyre dressing", price: "19 zł" },
  { name: "Headliner cleaning", price: "from 129 zł" },
  { name: "Hot waxing", price: "39 zł" },
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
      "On-site washing available",
      "Annual contract with priority service",
      "Account manager and B2B billing",
    ],
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "cars washed every year" },
  { value: 4.9, suffix: "/5", label: "average customer rating", decimals: 1 },
  { value: 8, suffix: " yrs", label: "of experience" },
  { value: 100, suffix: "%", label: "reclaimed & osmosis water" },
];

export const processSteps = [
  { title: "Book a visit", desc: "Call, message, or just drive in — no reservation needed." },
  { title: "Choose a package", desc: "We'll recommend the right scope for your car's condition and type." },
  { title: "Grab a coffee", desc: "Relax in our comfortable client lounge with coffee and Wi-Fi." },
  { title: "Pick up a spotless car", desc: "A quality check and quick walkthrough of the work done before we hand back the keys." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Michał K.",
    car: "Audi A6",
    text: "Showroom-level attention to detail in the wheel arches and sills. I come back every two weeks.",
    rating: 5,
  },
  {
    name: "Agnieszka W.",
    car: "Škoda Kodiaq",
    text: "The ceramic coating holds up great, the car gets dirty noticeably slower. Staff are professional and friendly.",
    rating: 5,
  },
  {
    name: "TransLog Ltd.",
    car: "14-vehicle fleet",
    text: "We've worked together for two years — consolidated invoicing, flexible hours, zero billing headaches.",
    rating: 5,
  },
  {
    name: "Tomasz P.",
    car: "BMW X5",
    text: "The interior ozone treatment saved my car after transporting my dog — the smell was completely gone.",
    rating: 5,
  },
];

export const galleryItems = [
  { title: "Paint correction – Audi RS6", category: "Detailing", tone: "navy" as const },
  { title: "Ceramic coating – Porsche Macan", category: "Paint protection", tone: "blue" as const },
  { title: "Upholstery cleaning – Volvo XC90", category: "Interior", tone: "graphite" as const },
  { title: "Fleet wash – TransLog Ltd.", category: "Fleet", tone: "navy" as const },
  { title: "Trim restoration – Range Rover", category: "Finishing", tone: "graphite" as const },
  { title: "Gloss finish – Mercedes E-Class", category: "Premium wash", tone: "blue" as const },
  { title: "Wheel detailing – Volkswagen Golf GTI", category: "Wheel detailing", tone: "navy" as const },
  { title: "Ozone treatment – Toyota Land Cruiser", category: "Disinfection", tone: "graphite" as const },
  { title: "Hot wax – Ford Mustang", category: "Finishing", tone: "blue" as const },
];

export const values = [
  { title: "Precision", desc: "Every step is done by hand, with attention to the details you don't notice at first glance." },
  { title: "Safe products", desc: "pH-neutral car care products, safe for paint, PPF film and ceramic coatings." },
  { title: "Transparency", desc: "A clear price list with no hidden fees — you know exactly what you're paying for." },
  { title: "Eco-friendly", desc: "Reclaimed and osmosis water, biodegradable chemistry, closed wastewater loop." },
];

export const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "No, we also serve walk-in customers. At busy times we do recommend calling ahead or booking a specific slot.",
  },
  {
    q: "How long does a hand wash take?",
    a: "The Express package takes about 20–25 minutes, Premium 45–60 minutes, and full detailing with paint correction can take from 2 to several hours depending on scope.",
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
