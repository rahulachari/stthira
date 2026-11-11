export interface Development {
  id: string;
  slug: string;
  name: string;
  brand: string;
  pillar?: "ROVERA" | "STTHIRA";
  tagline: string;
  category: "Upcoming" | "Ongoing" | "Completed";
  statusBadge: string;
  location: string;
  acres: string;
  plotsCount: string;
  priceGuide: string;
  description: string;
  shortIntro: string;
  heroImage: string;
  coverImage: string;
  galleryImages: { url: string; title: string; category: string }[];
  highlights: string[];
  connectivity: { destination: string; time: string; distance: string }[];
  plotSizes: { name: string; dimension: string; areaSqFt: string; idealFor: string }[];
  amenities: { name: string; category: string; description: string }[];
  reraStatus: string;
  reraDisclaimer: string;
  masterPlanNote: string;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  quote: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: "Real Estate" | "Luxury Living" | "Architecture" | "Land Development" | "Investment Insights" | "Lifestyle" | "Buying Guides";
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  category: "STTHIRA" | "ROVERA" | "Buying Process" | "Legal & Verification" | "Support & Site Visits";
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: "STTHIRA",
  legalEntity: "STTHIRA Developments Private Limited",
  foundationYear: 2026,
  director: "Lokesh Mudhaliar",
  directorTitle: "Board of Directors",
  tagline: "BUILDING A LEGACY. SHAPING TOMORROW.",
  brandStatement: "THOUGHTFULLY BUILT. TIMELESSLY ENVISIONED.",
  subHeadline: "Thoughtful development. Timeless spaces. A vision for better living.",
  address: "STTHIRA Corporate Office, Level 14, Prestige Trade Tower, Palace Road, High Grounds, Bengaluru 560001, Karnataka, India",
  phone: "+91 70134 85016",
  salesPhone: "+91 70134 85016",
  email: "enquiry@stthira.com",
  corporateEmail: "corporate@stthira.com",
  operatingHours: "Monday to Saturday: 09:30 AM – 06:30 PM IST",
  socials: {
    linkedin: "https://linkedin.com/company/stthira",
    instagram: "https://instagram.com/stthira.developments",
    youtube: "https://youtube.com/@stthira",
  },
};

export const DEVELOPMENTS: Development[] = [
  {
    id: "rovera",
    slug: "rovera",
    name: "ROVERA",
    brand: "STTHIRA",
    pillar: "ROVERA",
    tagline: "An intimate 3-acre boutique sanctuary of architectural plotted living.",
    category: "Ongoing",
    statusBadge: "Now Enquiring — Phase 1 Boutique Enclave",
    location: "Devanahalli – Doddaballapura Road, North Bengaluru (Near STRR & Foxconn ITIR Corridor)",
    acres: "3 Acres",
    plotsCount: "24 Exclusive Plots",
    priceGuide: "Price on Application",
    shortIntro: "ROVERA is an exclusive 3-acre boutique luxury plotted sanctuary on Devanahalli–Doddaballapura Road in North Bengaluru. Conceived with monumental double-height entrance gates, 100% underground utilities, tree-lined cobblestone boulevards, and a private boutique wellness club pavilion.",
    description: "ROVERA represents a rare, low-density luxury plotted sanctuary on the high-growth Devanahalli–Doddaballapura Road in North Bengaluru, directly adjoining the Satellite Town Ring Road (STRR) and the Foxconn ITIR investment belt. Spanning an intimate 3 acres of curated landscape, ROVERA offers just 24 bespoke residential villa parcels for discerning connoisseurs. Designed with a monumental double-height flamed basalt entrance gatehouse, 100% concealed underground utility ducts, wide internal avenues, and a private boutique wellness club pavilion, ROVERA pairs bespoke architectural freedom with institutional infrastructure.",
    heroImage: "/images/rovera-grand-double-height-gate.jpg",
    coverImage: "/images/rovera-aerial-3acres.jpg",
    galleryImages: [
      { url: "/images/rovera-grand-double-height-gate.jpg", title: "Double-Height Monumental Entrance Gatehouse", category: "Architecture" },
      { url: "/images/rovera-aerial-3acres.jpg", title: "3-Acre Master Plan Aerial Perspective", category: "Master Planning" },
      { url: "/images/rovera-boutique-clubhouse.jpg", title: "Boutique Club Pavilion & Infinity Reflection Pool", category: "Clubhouse" },
      { url: "/images/rovera-internal-boulevard.jpg", title: "Internal Paved Avenues with Conserved Green Spines", category: "Infrastructure" },
      { url: "/images/entrance-structure.jpg", title: "Geometric Stone & Flamed Basalt Architecture", category: "Architecture" },
      { url: "/images/landscape-nature.jpg", title: "Internal Bioswales & Native Tree Canopies", category: "Nature" },
      { url: "/images/rovera-wellness-pavilion.jpg", title: "Aura Vitality Spa & Wellness Pavilion", category: "Amenities" },
      { url: "/images/modern-architecture.jpg", title: "Contemporary Villa Design Language", category: "Architecture" },
    ],
    highlights: [
      "Monumental Double-Height Flamed Basalt Entrance Gatehouse with 24/7 Monitored Access Control",
      "Intimate 3-Acre Boutique Plotted Sanctuary — Only 24 Bespoke Villa Parcels",
      "100% Underground Utilities — Zero Overhead Cables, Concealed Power & Storm Drains",
      "Prime Location on Devanahalli–Doddaballapura Road, North Bengaluru (~20 mins to BLR Airport)",
      "Direct Strategic Access to Satellite Town Ring Road (STRR) & Foxconn / ITIR Industrial Region",
      "Private Boutique Club Pavilion with Reflection Infinity Pool & Resident Wellness Suite",
      "Cobblestone Paved Boulevards with Indigenous Mature Tree Canopies & Low-Glare Bollards",
      "Forensic 30-Year Legal Title Diligence & 100% Clear Ownership Documents",
    ],
    connectivity: [
      { destination: "Kempegowda International Airport (BLR)", time: "20 Mins", distance: "16 km" },
      { destination: "STRR (Satellite Town Ring Road) Junction", time: "5 Mins", distance: "3.5 km" },
      { destination: "Foxconn Mega Campus & ITIR Region", time: "12 Mins", distance: "9 km" },
      { destination: "Devanahalli Business & Aerotropolis Hub", time: "14 Mins", distance: "11 km" },
      { destination: "Stonehill International School", time: "18 Mins", distance: "15 km" },
      { destination: "Hebbal Flyover (Outer Ring Road)", time: "30 Mins", distance: "28 km" },
    ],
    plotSizes: [
      { name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", idealFor: "3–4 BHK Contemporary Tropical Courtyard Villas" },
      { name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", idealFor: "4–5 BHK Multi-Level Luxury Residences with Private Plunge Pools" },
      { name: "Grand Estate Parcel", dimension: "50' × 70'", areaSqFt: "3,500 Sq.Ft", idealFor: "Expansive Bespoke Architectural Mansions with Private Lawns" },
      { name: "Bespoke Corner Estate", dimension: "Custom", areaSqFt: "4,200 – 4,800 Sq.Ft", idealFor: "Flagship Intergenerational Villas with Dual Road Frontage" },
    ],
    amenities: [
      { name: "Double-Height Monumental Gatehouse", category: "Security", description: "Architectural flamed basalt portal with dual-lane RFID boom barriers, CCTV surveillance, and private security reception." },
      { name: "The Lagos Pavilion & Club", category: "Clubhouse", description: "Boutique private resident club featuring lounge salon, executive reading library, and private concierge desk." },
      { name: "Aura Vitality Spa & Wellness Pavilion", category: "Wellness", description: "Indoor-outdoor hydrotherapy vitality spa pavilion featuring flamed granite walls, teak wood slatted ceilings, plush loungers, and serene bamboo zen garden views." },
      { name: "Botanical Canopy Walk", category: "Nature", description: "Lush native tree-lined promenade with natural basalt stone pathways and low-glare bronze garden illumination." },
      { name: "Private Fitness & Yoga Deck", category: "Wellness", description: "Open-air wooden wellness deck for yoga and morning meditation surrounded by deep green tropical foliage." },
      { name: "Private Executive Work Pods", category: "Business", description: "Acoustically isolated conference pods with high-speed fiber internet and wireless printing for remote executives." },
    ],
    reraStatus: "Regulatory Submission in Progress",
    reraDisclaimer: "ROVERA is currently completing statutory project approvals with relevant local planning authorities. Official RERA registration number and sanctioned plan documentation will be published immediately upon regulatory clearance. In accordance with RERA regulations, no formal allotment or binding agreement will be executed prior to the receipt of the RERA registration certificate. This digital portal serves solely as an informational overview.",
    masterPlanNote: "The layout shown reflects conceptual architectural zoning and spatial proportions for the 3-acre enclave. Official boundary demarcations, statutory setbacks, and survey allocations are subject to final municipal sanction.",
  },
  {
    id: "terra",
    slug: "terra",
    name: "STTHIRA TERRA",
    brand: "STTHIRA",
    pillar: "STTHIRA",
    tagline: "Eco-luxury sanctuary estates anchored in ecological balance.",
    category: "Upcoming",
    statusBadge: "STTHIRA Portfolio — Conceptual Master Planning",
    location: "Nandi Foothills Corridor, Karnataka, India",
    acres: "60+ Acres",
    plotsCount: "80 Estate Parcels",
    priceGuide: "Register Early Interest",
    shortIntro: "An ambitious landmark development directly under STTHIRA exploring zero-carbon plotted estates nestled against ancient granite rock formations.",
    description: "TERRA will be STTHIRA's sovereign landmark plotted initiative, conceived as an off-grid luxury eco-estate community that honors the stark beauty of the Deccan plateau. Featuring 1-acre and half-acre parcels with strict vernacular architectural covenants.",
    heroImage: "/images/brand-story.jpg",
    coverImage: "/images/landscape-nature.jpg",
    galleryImages: [
      { url: "/images/brand-story.jpg", title: "Sculptural Granite Outcrops", category: "Nature" },
      { url: "/images/landscape-nature.jpg", title: "Pristine Native Valley", category: "Landscape" },
      { url: "/images/modern-architecture.jpg", title: "Vernacular Stone & Rammed Earth Villa Concept", category: "Architecture" },
      { url: "/images/lifestyle-amenities.jpg", title: "Orchard Trails & Native Flora", category: "Nature" },
    ],
    highlights: [
      "Minimum 0.5 Acre Estate Parcels with 70% Ecological Protection Covenant",
      "Solar Micro-Grid & Rainwater Storage Reservoirs",
      "Permaculture Farm & Organic Orchards for Residents",
      "100% Native Landscape Reforestation Protocol",
      "Private Astronomical Observatory Pavilion",
      "Stthira Proprietary Ecological Infrastructure Grid",
    ],
    connectivity: [
      { destination: "Kempegowda International Airport", time: "35 Mins", distance: "32 km" },
      { destination: "Nandi Hills Heritage Center", time: "10 Mins", distance: "8 km" },
      { destination: "Hebbal Flyover (Bengaluru City)", time: "55 Mins", distance: "52 km" },
    ],
    plotSizes: [
      { name: "Half-Acre Eco Parcel", dimension: "Custom", areaSqFt: "21,780 Sq.Ft", idealFor: "Architectural Farm Retreats & Regenerative Courtyards" },
      { name: "Full-Acre Legacy Estate", dimension: "Custom", areaSqFt: "43,560 Sq.Ft", idealFor: "Generational Country Residences with Private Groves" },
    ],
    amenities: [
      { name: "The Granite Pavilion", category: "Clubhouse", description: "Natural rock-integrated community pavilion and stargazing observatory." },
      { name: "Organic Farm-to-Table Hub", category: "Nature", description: "Resident-managed orchard and culinary workshop pavilion." },
      { name: "Deccan Wellness Bathhouse", category: "Wellness", description: "Natural stone plunge pools, meditation terraces, and solar-powered spa facilities." },
    ],
    reraStatus: "Pre-Planning Stage",
    reraDisclaimer: "STTHIRA TERRA is an upcoming concept under preliminary feasibility evaluation. No sales, marketing, or reservations are being conducted.",
    masterPlanNote: "Conceptual zoning only.",
  },
];

export const PHILOSOPHY_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "VISION",
    subtitle: "Anticipating the trajectories of generational wealth.",
    body: "At STTHIRA, development is not governed by short-term market cycles. We evaluate land through a 50-year lens—identifying corridors poised for structural infrastructural transformation and natural permanence. A visionary plot of land outlives ephemeral real-estate trends.",
    quote: "True vision is the discipline to see what land can endure, not merely what can be sold.",
  },
  {
    number: "02",
    title: "PRECISION",
    subtitle: "Engineering every millimeter to absolute standard.",
    body: "Precision is our core operational ethic. From micro-level topographic surveys using high-resolution LiDAR to millimeter-accurate underground conduit gradients, our infrastructure guarantees that foundations, drainage, and road networks remain flawless across generations.",
    quote: "In luxury development, precision is the difference between an ordinary plot and an enduring asset.",
  },
  {
    number: "03",
    title: "PLANNING",
    subtitle: "Master plans harmonizing privacy, scale, and connectivity.",
    body: "We discard the claustrophobic grid patterns typical of commodity developments. STTHIRA master plans introduce generous setback envelopes, gentle curves that frame landscape vistas, 50-foot wide tree-lined boulevards, and pedestrian networks that never cross vehicular arterials.",
    quote: "Planning is the silent choreography of daily human tranquility.",
  },
  {
    number: "04",
    title: "ARCHITECTURE",
    subtitle: "Monumental geometry, honest concrete, and timeless stone.",
    body: "Our built structures honor the timeless principles of modern architectural minimalism. We employ board-formed exposed concrete, natural basalt, flamed granite, and expansive glass volumes. There is zero ornamentation for the sake of novelty; beauty arises from proportion, light, and materiality.",
    quote: "Architecture is frozen music composed of sunlight, shadow, and honest stone.",
  },
  {
    number: "05",
    title: "NATURE",
    subtitle: "Development bowed in reverence to native ecology.",
    body: "We do not clear-fell land to force a generic layout. We weave roads around mature banyans, neem, and tamarind trees. We build bioswales that absorb 100% of monsoon runoff, replenishing groundwater tables and fostering microclimates several degrees cooler than the city.",
    quote: "We do not conquer the landscape; we invite it to be the dominant resident.",
  },
  {
    number: "06",
    title: "TRUST",
    subtitle: "Absolute legal purity and fiduciary transparency.",
    body: "Trust is STTHIRA's most valuable asset. Every parcel of land we bring to market undergoes forensic title due diligence spanning 30+ years by leading real-estate legal counsels. We operate with radical transparency: no hidden fees, clear covenants, and unyielding compliance with RERA.",
    quote: "Fiduciary integrity is not a marketing proposition; it is our corporate foundation.",
  },
  {
    number: "07",
    title: "COMMUNITY",
    subtitle: "Cultivating an enlightened collective of discerning families.",
    body: "A luxury plotted community is defined by its patrons. By enforcing architectural guidelines and curating thoughtful amenities—from quiet reading libraries to chamber music amphitheaters—STTHIRA brings together individuals who share a profound appreciation for design, privacy, and culture.",
    quote: "The finest luxury is belonging to a community that values quiet refinement over ostentation.",
  },
  {
    number: "08",
    title: "LEGACY",
    subtitle: "Crafting spaces destined to stand as intergenerational heirlooms.",
    body: "Buildings age and interior trends fade, but legally pristine, architecturally master-planned land appreciates across centuries. An acquisition at STTHIRA is not an expense—it is a sovereign foundation passed down from one generation of your family to the next.",
    quote: "What you build upon STTHIRA land will be inherited with pride by your grandchildren.",
  },
];

export const LEADERSHIP_INFO = {
  director: "Lokesh Mudhaliar",
  title: "Board of Directors",
  company: "STTHIRA",
  foundationYear: 2026,
  portrait: "/images/director-lokesh.jpg",
  quote: "At STTHIRA, our standard is permanence. We do not develop merely for transactions; we curate generational landmarks where land becomes an enduring canvas for modern architecture and lasting value.",
  bio: [
    "Lokesh Mudhaliar serves on the Board of Directors of STTHIRA, bringing strategic foresight, capital discipline, and an uncompromising commitment to corporate governance to the enterprise. With extensive exposure to high-value land acquisitions, urban growth corridors, and real-estate asset management, he steers STTHIRA's vision of becoming India's most respected luxury plotted development brand.",
    "Recognizing that the Indian luxury real-estate market has historically suffered from unstandardized land offerings, opaque documentation, and inconsistent infrastructure, Lokesh established STTHIRA upon three pillars: forensic legal due diligence, world-class civil engineering, and international architectural aesthetics.",
    "Under his direction, STTHIRA enforces strict fiduciary responsibility across all stakeholder touchpoints—ensuring that every landowner enjoys pristine legal title, transparent RERA disclosures, and developments designed to appreciate intergenerationally.",
  ],
  governanceCommitments: [
    "Forensic 30-Year Title Due Diligence on Every Acre",
    "Radical Transparency in Statutory & RERA Disclosures",
    "Zero Compromise on Civil & Underground Infrastructure Quality",
    "Long-Term Maintenance Endowment for Sustainable Community Upkeep",
  ],
};

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "philosophy-of-plotted-living-luxury-land",
    title: "The Philosophy of Plotted Living: Why Land Remains the Ultimate Luxury",
    category: "Luxury Living",
    excerpt: "In a world saturated with cookie-cutter penthouses, true luxury has returned to its sovereign origin: owning a freehold parcel of earth with total architectural freedom.",
    author: "STTHIRA Editorial Board",
    date: "February 2026",
    readTime: "6 min read",
    coverImage: "/images/hero-cinematic.jpg",
    content: [
      "For decades, high-net-worth real estate in urban India was characterized by high-rise penthouses. Yet, as towers age and maintenance liabilities mount, discerning buyers are rediscovering the profound truth of sovereign land ownership.",
      "When you purchase a plot within a master-planned community like ROVERA, you are not bound by an exterior architectural template devised for thousands of strangers. You command the freedom to engage your chosen architect, design double-height courtyard spaces, position courtyards according to personal microclimates, and build a home that is an authentic extension of your family's identity.",
      "Furthermore, historical data across major metropolitan corridors proves that while building structures depreciate at approximately 2% per annum, land values in thoughtfully master-planned luxury enclaves demonstrate exponential capital compounding. Land remains finite, irreplaceable, and permanent.",
    ],
  },
  {
    slug: "monolithic-restraint-brutalist-architecture-modern-living",
    title: "Monolithic Restraint: The Intersection of Brutalist Architecture and Modern Living",
    category: "Architecture",
    excerpt: "How honest board-formed concrete, natural basalt, and geometric symmetry create an architecture of enduring quietude.",
    author: "Architectural Research Group",
    date: "January 2026",
    readTime: "8 min read",
    coverImage: "/images/entrance-structure.jpg",
    content: [
      "Modern luxury is often mistakenly conflated with decorative ornamentation—gilded metalwork, glossy synthetic veneers, and fleeting aesthetic fads. At STTHIRA, our architectural language takes inspiration from the restraint of monumental modernism.",
      "We believe that true elegance is found when materials are left unadorned to showcase their innate texture. The board-formed concrete gatehouses at ROVERA celebrate the grain of natural timber shuttering, casting deep, sculptural shadows that evolve throughout the day as the sun traverses the sky.",
      "By stripping away superfluous embellishment, we achieve an architectural presence that does not age. Fifty years from today, a building composed of basalt, concrete, glass, and steel will look just as relevant, powerful, and serene as it does today.",
    ],
  },
  {
    slug: "institutional-due-diligence-land-acquisition-india",
    title: "Due Diligence in Land Acquisition: The Institutional Investor's Playbook",
    category: "Investment Insights",
    excerpt: "A forensic analysis of the documentation, survey certifications, and title verification required for zero-risk plotted investment.",
    author: "STTHIRA Legal & Compliance Directorate",
    date: "January 2026",
    readTime: "10 min read",
    coverImage: "/images/brand-story.jpg",
    content: [
      "Land acquisition in India carries immense rewards, but only when executed with institutional-grade legal rigor. The difference between an ordinary land purchase and an institutional plotted asset lies in the forensic depth of title verification.",
      "At STTHIRA, our legal framework requires a continuous 30-year lineage trace covering all parent deeds, family genealogies, village survey records (RTCs), mutation extracts, and conversion orders under the relevant Land Revenue Acts.",
      "Furthermore, we perform satellite drone topography overlays against official cadastral village maps to verify that physical boundaries match statutory survey numbers to the millimeter. This absolute rigor ensures that every buyer at ROVERA enjoys unencumbered, sovereign title.",
    ],
  },
  {
    slug: "master-planning-balancing-density-corridors-ecology",
    title: "The Art of Master-Planning: Balancing Density, Corridors, and Ecological Flow",
    category: "Land Development",
    excerpt: "Behind the drafting table: how our master plan prioritizes microclimate cooling, pedestrian privacy, and stormwater management.",
    author: "Urban Planning Studio",
    date: "December 2025",
    readTime: "7 min read",
    coverImage: "/images/aerial-view.jpg",
    content: [
      "Standard plotted developments frequently suffer from the 'cookie-cutter grid'—monotonous rows of identical rectangular plots intersected by narrow 30-foot roads that turn into vehicular choke points and wind tunnels.",
      "When designing ROVERA across 42 acres, our urban design team approached the land as a living ecosystem. We prioritized 50-foot wide primary boulevards flanked by continuous pedestrian promenades, lined with mature flowering canopies that filter dust and lower ambient street temperatures by 3 to 4 degrees Celsius.",
      "By deliberately curving internal access roads, we eliminate high-speed traffic through residential pockets while creating dramatic visual focal points that terminate at landscaped green spines and park pavilions.",
    ],
  },
  {
    slug: "why-plotted-developments-require-architectural-guidelines",
    title: "Designing for the Next Century: Why Plotted Developments Require Architectural Codes",
    category: "Architecture",
    excerpt: "Preserving intergenerational neighborhood value through thoughtful covenants and design harmonization.",
    author: "STTHIRA Architectural Directorate",
    date: "November 2025",
    readTime: "5 min read",
    coverImage: "/images/modern-architecture.jpg",
    content: [
      "One common hesitation among luxury buyers considering plotted developments is the fear of uncontrolled neighborhood aesthetics—the risk that an adjacent neighbor might erect an incongruous, garish structure that compromises privacy or light.",
      "STTHIRA solves this through a curated Architectural Design Code. These guidelines do not dictate a uniform design; rather, they establish harmonious parameters for maximum height envelopes, front and rear setback regulations, perimeter boundary wall materials, and external lighting warmth.",
      "This ensures that while each residence expresses the unique vision of its owner, the entire enclave maintains the refined visual harmony of an international luxury resort.",
    ],
  },
  {
    slug: "navigating-rera-regulatory-clearances-land-purchase",
    title: "Understanding Title Purity: Navigating RERA, Clearances, and Land Verification in India",
    category: "Buying Guides",
    excerpt: "An essential guide for families and investors to identify compliant, legally vetted plotted projects.",
    author: "Corporate Advisory",
    date: "November 2025",
    readTime: "7 min read",
    coverImage: "/images/masterplan-visual.jpg",
    content: [
      "The introduction of the Real Estate (Regulation and Development) Act, 2016 (RERA) transformed Indian real estate by establishing statutory buyer protections, mandatory escrow accounts, and strict disclosure obligations.",
      "Prospective buyers must verify three critical pillars: First, ensure that layout approvals originate from the statutory regional planning authority (such as BDA, BMRDA, or relevant local development authorities). Second, verify that land conversion from agricultural to non-agricultural residential use is complete. Third, review the RERA registration dossier.",
      "At STTHIRA, complete regulatory documentation is made accessible to all enrolled prospective owners prior to any financial commitment, setting a new benchmark for corporate transparency.",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "stthira-1",
    category: "STTHIRA",
    question: "What is STTHIRA?",
    answer: "STTHIRA is an elite luxury real-estate development company in India established in 2026. The brand specializes in creating institutional-grade luxury plotted developments, combining international architectural aesthetics, forensic legal due diligence, and generational permanence under the leadership of its Board of Directors, Lokesh Mudhaliar.",
  },
  {
    id: "stthira-2",
    category: "STTHIRA",
    question: "When was STTHIRA established?",
    answer: "STTHIRA was founded in 2026 with a long-term corporate vision to elevate Indian plotted developments to international luxury standards.",
  },
  {
    id: "stthira-3",
    category: "STTHIRA",
    question: "What is STTHIRA's development philosophy?",
    answer: "Our philosophy is encapsulated by our ethos: 'Thoughtfully Built. Timelessly Envisioned.' We operate on 8 core pillars: Vision, Precision, Planning, Architecture, Nature, Trust, Community, and Legacy. We focus exclusively on legally pristine, architecturally restrained developments that appreciate intergenerationally.",
  },
  {
    id: "stthira-4",
    category: "STTHIRA",
    question: "Where is STTHIRA based?",
    answer: "STTHIRA is headquartered in Bengaluru, Karnataka, India, with development operations focused on high-growth luxury corridors across key Indian metropolitan and lifestyle regions.",
  },
  {
    id: "rovera-1",
    category: "ROVERA",
    question: "What is ROVERA?",
    answer: "ROVERA is the premiere luxury plotted-development project under the STTHIRA brand. It is an expansive 42+ acre master-planned enclave featuring exclusive residential plots, wide tree-lined avenues, 100% underground utilities, and monumental contemporary clubhouse architecture.",
  },
  {
    id: "rovera-2",
    category: "ROVERA",
    question: "What is the relationship between STTHIRA and ROVERA?",
    answer: "STTHIRA is the parent corporate developer and primary brand. ROVERA is the first featured development project within STTHIRA's growing portfolio of elite plotted developments.",
  },
  {
    id: "rovera-3",
    category: "ROVERA",
    question: "Where is ROVERA located?",
    answer: "ROVERA is strategically located in the high-growth North Bengaluru corridor, situated approximately 18 minutes from Kempegowda International Airport and within close proximity to major IT corridors, international schools, and healthcare centers.",
  },
  {
    id: "rovera-4",
    category: "ROVERA",
    question: "What types and dimensions of plots are available at ROVERA?",
    answer: "ROVERA offers carefully proportioned plot configurations including Executive Villa Plots (1,500 sq.ft, 30'×50'), Signature Residence Plots (2,400 sq.ft, 40'×60'), Master Estate Plots (4,000 sq.ft, 50'×80'), and bespoke corner parcels ranging up to 6,500 sq.ft.",
  },
  {
    id: "buying-1",
    category: "Buying Process",
    question: "How can I enquire or register my interest in ROVERA?",
    answer: "You can submit an enquiry directly through our official website contact form, request a private callback from our relationship advisory desk, or connect with our sales concierge via WhatsApp or email at enquiry@stthira.com.",
  },
  {
    id: "buying-2",
    category: "Buying Process",
    question: "Can I schedule a private site visit?",
    answer: "Yes. Private chauffeured site visits and walkthroughs of the master-planned grounds can be scheduled Monday through Sunday via our website's 'Schedule a Site Visit' portal or through your dedicated relationship manager.",
  },
  {
    id: "buying-3",
    category: "Buying Process",
    question: "What documents should buyers verify before purchasing a residential plot?",
    answer: "Buyers should verify the title deed history (minimum 30 years), agricultural-to-non-agricultural conversion sanction, statutory layout approval from local planning authorities, non-encumbrance certificate (EC), Khata certificate, and the RERA registration certificate.",
  },
  {
    id: "buying-4",
    category: "Buying Process",
    question: "Are there architectural guidelines for building a home at ROVERA?",
    answer: "Yes. To preserve the aesthetic harmony, privacy, and long-term asset value of the community, ROVERA has established a refined Architectural Design Guideline covering setback norms, building heights, boundary treatments, and exterior lighting tones, while leaving full interior and structural design freedom to the owner.",
  },
  {
    id: "legal-1",
    category: "Legal & Verification",
    question: "How does STTHIRA verify project approvals and clear title?",
    answer: "Every land parcel developed by STTHIRA undergoes exhaustive 30-year forensic title due diligence conducted by leading independent real-estate law firms. Complete search reports and statutory approvals are maintained in our legal dossier for prospective buyer review.",
  },
  {
    id: "legal-2",
    category: "Legal & Verification",
    question: "Where can I find RERA registration information?",
    answer: "ROVERA's project sanction dossiers have been submitted to the competent authority. The official RERA registration number and approved layout will be displayed on this portal immediately upon regulatory issuance, strictly in compliance with the Real Estate (Regulation and Development) Act, 2016.",
  },
  {
    id: "support-1",
    category: "Support & Site Visits",
    question: "How can I contact the STTHIRA corporate and sales team?",
    answer: "Our corporate headquarters is located at Level 14, Prestige Trade Tower, Palace Road, Bengaluru. You can reach our central office via our official website enquiry form, WhatsApp concierge, or via email at enquiry@stthira.com. Our relationship team operates Monday through Saturday, 9:30 AM to 6:30 PM IST.",
  },
];

