"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import KarnatakaMapOutline from "@/components/KarnatakaMapOutline";
import YodezeenCursor from "@/components/ui/YodezeenCursor";

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  locationTag?: string;
  category: "infrastructure" | "gatehouse" | "residences" | "clubhouse" | "landscape";
  statusCategory: "in-progress" | "completed";
  categoryLabel: string;
  designStyle: string;
  statusText: string;
  extent: string;
  leadNarrative: string;
  philosophy: string;
  specs: {
    extent: string;
    typology: string;
    materials: string;
    access: string;
    zoning: string;
    utilities: string;
  };
  highlights: string[];
  primaryImage: string;
  aspect?: string;
  galleryImages: { url: string; caption: string }[];
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "master-plan-infrastructure",
    number: "01",
    title: "Master Planning & Sub-Grade Infrastructure",
    subtitle: "3.0 Acres • 24 Sovereign Parcels • STRR Corridor",
    locationTag: "DEVANAHALLI, NORTH BENGALURU",
    category: "infrastructure",
    statusCategory: "completed",
    categoryLabel: "INFRASTRUCTURE",
    designStyle: "CONTEMPORARY MONOLITHIC & CADASTRAL PRECISION",
    statusText: "COMPLETED & SANCTIONED • 100% TITLE SCRUTINY",
    extent: "3.00 ACRES • 130,680 FT²",
    leadNarrative:
      "ROVERA abandons conventional high-density plotted layouts in favor of an intimate 3-acre boutique sanctuary. Intentionally demarcated for just 24 discerning patrons, the enclave features monumental 12-meter primary avenues and 9-meter internal residential boulevards, ensuring complete privacy, zero through-traffic, and expansive native tree canopies.",
    philosophy:
      "True generational permanence begins with sub-grade civil engineering. Every parcel at ROVERA is serviced by institutional-grade subterranean utility corridors. Overhead power cables, surface transformers, and ad-hoc telecom wiring are permanently eradicated in favor of reinforced concrete utility trenches.",
    specs: {
      extent: "3.00 Acres (130,680 Sq.Ft Total Demarcation)",
      typology: "Low-Density Boutique Plotted Enclave",
      materials: "Interlocking Granite Pavers, Precast Concrete Utility Trenches",
      access: "Direct 5-minute link to 6-lane STRR Expressway corridor",
      zoning: "Statutory Local Planning Authority & Karnataka RERA Approved",
      utilities: "100% Concealed Subterranean Ducts (Power, Optical Fiber, Storm Aquifers)",
    },
    highlights: [
      "100% underground 11kV electrical feeder cables & high-speed gigabit optical fiber",
      "Perimeter stormwater recharge aquifers engineered for 100-year flood resilience",
      "Curvilinear boulevard geometry ensuring calibrated traffic speeds and enhanced privacy",
      "Millimeter-accurate DGPS cadastral demarcation with monolithic granite boundary markers",
    ],
    primaryImage: "/images/rovera-master-plan-3acres.jpg",
    aspect: "aspect-[16/11]",
    galleryImages: [
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Wide 12m Internal Boulevard with Concealed Utility Ducts" },
      { url: "/images/rovera-aerial-3acres.jpg", caption: "3-Acre Master Plan Axonometric Sanctuary" },
      { url: "/images/rovera-master-plan-3acres.jpg", caption: "Master Parcel Zoning & Cadastral Matrix" },
    ],
  },
  {
    id: "monumental-gatehouse",
    number: "02",
    title: "Monumental Gatehouse & Security Protocol",
    subtitle: "8-Meter Cantilever • Flamed Basalt • Biometric Portal",
    locationTag: "STRR CORRIDOR, BENGALURU",
    category: "gatehouse",
    statusCategory: "in-progress",
    categoryLabel: "GATEHOUSE & SECURITY",
    designStyle: "BRUTALIST MONOLITHIC & FLAMED BASALT",
    statusText: "IN PROGRESS • STRUCTURAL ELEVATION",
    extent: "8.00M HEIGHT • DUAL-LANE PORTAL",
    leadNarrative:
      "Conceived as an architectural monument of permanence, the entrance to ROVERA spans both inbound and outbound traffic arteries. The structure features an 8-meter high cantilevered canopy constructed from ribbed architectural concrete, flamed South Indian black basalt slabs, and warm teak timber louvers.",
    philosophy:
      "An entrance structure must establish sovereign identity. Beyond its sculptural brutalist presence, the gatehouse integrates multi-tier electronic access control: automated RFID fast-tags for residents, optical number-plate telemetry, and a discrete biometric concierge station.",
    specs: {
      extent: "Spanning 20m dual-lane roadway with 8-meter cantilever",
      typology: "Double-Height Monumental Gatehouse & Concierge Station",
      materials: "Flamed South Indian Basalt, Architectural Ribbed Concrete, Teak",
      access: "Dual Inbound & Outbound Dedicated Vehicular Checkpoints",
      zoning: "Statutory 24/7 Monitored Security Perimeter Boundary",
      utilities: "Integrated Telemetry, High-Speed Optical CCTVs & Automated Boom Barriers",
    },
    highlights: [
      "Monumental 8-meter double-height cantilevered structural concrete canopy",
      "Thermal flamed black basalt masonry resistant to environmental weathering",
      "Seamless long-range RFID boom barrier entry with zero vehicular queuing",
      "Dedicated air-conditioned security desk with 24/7 intercom to all parcels",
    ],
    primaryImage: "/images/rovera-grand-double-height-gate.jpg",
    aspect: "aspect-[4/3]",
    galleryImages: [
      { url: "/images/rovera-grand-double-height-gate.jpg", caption: "Monumental Basalt Gatehouse Perspective" },
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Gatehouse Inbound Boulevard Transition" },
    ],
  },
  {
    id: "bespoke-villa-architecture",
    number: "03",
    title: "Bespoke Villa Parcels & Typologies",
    subtitle: "Ground + 2 Floors • Sovereign Title • 4 Configurations",
    locationTag: "DEVANAHALLI, BENGALURU",
    category: "residences",
    statusCategory: "in-progress",
    categoryLabel: "RESIDENCES",
    designStyle: "MODERN TROPICAL & BIOPHILIC FREEDOM",
    statusText: "IN PROGRESS • SOVEREIGN PARCELS OPEN",
    extent: "1,500 – 4,800 FT² • 4 TYPOLOGIES",
    leadNarrative:
      "Unlike restrictive pre-fabricated villa developments, ROVERA confers complete architectural sovereignty upon each patron. Buyers receive clear, freehold title deeds with the absolute legal freedom to construct their bespoke luxury residence (Ground + 2 Floors) within harmonious aesthetic guidelines.",
    philosophy:
      "We provide four rigorously planned plot typologies, oriented to optimize natural solar trajectory and prevailing breezes. Whether commissioning a courtyard-centered family home or a sprawling multi-generational estate, the parcels offer unconstrained architectural expression.",
    specs: {
      extent: "1,500 Sq.Ft to 4,800 Sq.Ft Individual Parcels",
      typology: "Freehold Residential Villa Plots (Ground + 2 Floors)",
      materials: "Sub-grade Geotechnical Compaction & Grade A Soil Foundation",
      access: "Fronting 9m or 12m wide internal paved granite boulevards",
      zoning: "Ground + 2 Floors (Max 12m Permissible Building Height)",
      utilities: "Dedicated Water, Power & Telecom tap-off points at each boundary",
    },
    highlights: [
      "Courtyard Villa Parcel: 1,500 Sq.Ft (Intimate 3-4 BHK modern layout)",
      "Signature Sanctuary Plot: 2,400 Sq.Ft (Expansive 4-5 BHK luxury residence)",
      "Grand Estate Parcel: 3,500 Sq.Ft (Private pool, home theatre & garden suites)",
      "Bespoke Corner Estate: 4,200 – 4,800 Sq.Ft (Dual-road frontage with private driveway)",
    ],
    primaryImage: "/images/modern-architecture.jpg",
    aspect: "aspect-[3/4]",
    galleryImages: [
      { url: "/images/rovera-master-plan-3acres.jpg", caption: "Master Parcel Zoning & Cadastral Matrix" },
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Boulevard Facing Villa Parcels with Concealed Taps" },
    ],
  },
  {
    id: "wellness-pavilion-clubhouse",
    number: "04",
    title: "Private Wellness Pavilion & Club",
    subtitle: "Heated Lap Pool • Sunken Lounge • Resident Social Sanctuary",
    locationTag: "NORTH BENGALURU, KARNATAKA",
    category: "clubhouse",
    statusCategory: "in-progress",
    categoryLabel: "CLUBHOUSE & SPA",
    designStyle: "CONTEMPORARY PAVILION & SUBMERGED TERRACES",
    statusText: "IN PROGRESS • CIVIL SUPERSTRUCTURE",
    extent: "10,000 FT² • 24 RESIDENTS ONLY",
    leadNarrative:
      "The ROVERA Wellness Pavilion is an exclusive boutique clubhouse created for the private enjoyment of just 24 resident families. Designed with floor-to-ceiling panoramic glass walls and floating timber louvers, it seamlessly blends indoor fitness with open-air water and garden terraces.",
    philosophy:
      "True community wellness requires uncrowded exclusivity. Featuring a 25-meter azure lap pool, sunken sun deck with submerged loungers, indoor strength and yoga atelier, and an intimate resident library salon, the pavilion is an oasis of calm.",
    specs: {
      extent: "Approx. 10,000 Sq.Ft built wellness & social facility",
      typology: "Private Resident-Only Pavilion & Sunken Pool Deck",
      materials: "Travertine Stone, Honed Granite, Architectural Bronze, Glass",
      access: "Central community access adjoining the botanical spine",
      zoning: "Amenity Zone with Zero Commercial Intrusion",
      utilities: "Solar water heating, centralized pool filtration, smart climate control",
    },
    highlights: [
      "Full-length 25m sunken lap pool with submerged water loungers",
      "Double-height resident social lounge with fireplace and reading library",
      "Technogym-equipped indoor wellness atelier overlooking the gardens",
      "Private dining terrace for hosting intimate private resident gatherings",
    ],
    primaryImage: "/images/rovera-clubhouse-exterior.jpg",
    aspect: "aspect-[3/4]",
    galleryImages: [
      { url: "/images/rovera-pool-deck.jpg", caption: "Sunken Lap Pool Deck with Travertine Terraces" },
      { url: "/images/rovera-clubhouse-lounge.jpg", caption: "Double-Height Resident Social Lounge & Library" },
      { url: "/images/rovera-wellness-pavilion.jpg", caption: "Wellness Pavilion Evening Architectural Perspective" },
    ],
  },
  {
    id: "botanical-landscape-design",
    number: "05",
    title: "Landscape Architecture & Zen Courtyards",
    subtitle: "40% Green Spine • Pergola Walkways • Native Afforestation",
    locationTag: "DEVANAHALLI SANCTUARY",
    category: "landscape",
    statusCategory: "in-progress",
    categoryLabel: "LANDSCAPE & GARDENS",
    designStyle: "BIOPHILIC SANCTUARY & JAPANESE ZEN",
    statusText: "IN PROGRESS • PLANTATION & PATHWAYS",
    extent: "40% GREEN FOOTPRINT • NATIVE CANOPY",
    leadNarrative:
      "Over 40% of ROVERA’s total geographic footprint is dedicated to unpaved ecological landscape. Designed by master landscape architects, the enclave incorporates preserved mature native trees, shaded cedar pergola walkways, and a Japanese-inspired Zen rock reflection court.",
    philosophy:
      "Landscape is not merely decorative; it is the structural framework of the community. Microclimate modulation via dense tree groves reduces ambient summer temperatures by up to 3°C, while dark-sky compliant warm amber bollards ensure zero light pollution under the open North Bangalore sky.",
    specs: {
      extent: "Over 40% of 3-Acre Master Site Footprint",
      typology: "Ecological Biophilic Landscape & Zen Courts",
      materials: "Natural River Boulders, Crushed Basalt, Treated Timber, Native Flora",
      access: "Connected pedestrian loop separate from vehicular drives",
      zoning: "Perpetual Conservation Green Buffer",
      utilities: "Drip irrigation powered by 100% recycled STP water aquifers",
    },
    highlights: [
      "Shaded timber pergola walkways lined with fragrant frangipani and jasmine",
      "Zen meditation rock garden with sculpted river stone focal points",
      "Courtyard lounge terraces with integrated outdoor teak seating",
      "Subsurface bioswales capturing 100% of rainwater runoff for groundwater recharge",
    ],
    primaryImage: "/images/rovera-zen-garden.jpg",
    aspect: "aspect-[3/4]",
    galleryImages: [
      { url: "/images/rovera-pergola-walkway.jpg", caption: "Timber Pergola Walkway Shaded by Native Tree Canopies" },
      { url: "/images/rovera-courtyard-lounge.jpg", caption: "Courtyard Garden Lounge with Ambient Fire Feature" },
      { url: "/images/rovera-zen-garden.jpg", caption: "Japanese Zen Meditation Garden & Raked Gravel Terrace" },
    ],
  },
  {
    id: "azure-lap-pool-deck",
    number: "06",
    title: "Sunken Azure Lap Pool & Solarium",
    subtitle: "25-Meter Heated Lap Pool • Submerged Loungers • Travertine Deck",
    locationTag: "WELLNESS SANCTUARY, BENGALURU",
    category: "clubhouse",
    statusCategory: "in-progress",
    categoryLabel: "CLUBHOUSE & SPA",
    designStyle: "SUBMERGED WATER TERRACE & TRAVERTINE",
    statusText: "IN PROGRESS • HYDRAULIC FITOUT",
    extent: "25M LENGTH • ZERO-EDGE HORIZON",
    leadNarrative:
      "The ROVERA sunken azure pool is engineered with zero-edge horizon spillways that reflect the sky and canopy. Submerged sun loungers and perimeter travertine terraces provide a resort-level retreat exclusively for residents.",
    philosophy:
      "Water serves as both aesthetic mirror and therapeutic restorative. Integrated silent circulation pumps and non-chemical ionization ensure crystal-clear water with zero chlorine harshness.",
    specs: {
      extent: "25m x 8m Lap Pool with Submerged Lounger Bays",
      typology: "Zero-Edge Heated Swimming Sanctuary",
      materials: "Honed Roman Travertine, Aquamarine Mosaic Glass",
      access: "Direct promenade link to Wellness Pavilion",
      zoning: "Private Resident Wellness Complex",
      utilities: "Solar-thermal heating, automatic pH balancing, underwater optic lighting",
    },
    highlights: [
      "Semi-submerged in-water tanning loungers for year-round sunning",
      "Perimeter acoustic water spillways for ambient acoustic tranquility",
      "Dedicated children's shallow splash zone discreetly buffered by planters",
      "Outdoor private rain showers crafted from carved monolithic granite",
    ],
    primaryImage: "/images/rovera-pool-deck.jpg",
    aspect: "aspect-[16/11]",
    galleryImages: [
      { url: "/images/rovera-pool-deck.jpg", caption: "Sunken Lap Pool Deck with Travertine Terraces" },
      { url: "/images/rovera-wellness-pavilion.jpg", caption: "Wellness Pavilion Evening Architectural Perspective" },
    ],
  },
  {
    id: "resident-social-salon",
    number: "07",
    title: "Double-Height Resident Library Salon",
    subtitle: "Curated Reading Atelier • Linear Fireplace • Private Tasting Room",
    locationTag: "CLUBHOUSE INTERIORS, BENGALURU",
    category: "clubhouse",
    statusCategory: "completed",
    categoryLabel: "CLUBHOUSE & SPA",
    designStyle: "WARM MINIMALISM & FLITCHED OAK",
    statusText: "COMPLETED DESIGN DOSSIER",
    extent: "DOUBLE-HEIGHT 6.5M VOLUMES",
    leadNarrative:
      "Crafted as an intimate intellectual salon, this double-height sanctuary features bespoke floor-to-ceiling flitched oak bookshelves, an ambient recessed gas fireplace, and plush custom upholstery designed for quiet contemplation and private meetings.",
    philosophy:
      "Architecture must nourish the mind as well as the body. The salon is calibrated acoustically with concealed micro-perforated acoustic timber panels, creating an atmosphere of deep silence.",
    specs: {
      extent: "1,800 Sq.Ft Double-Height Social Atelier",
      typology: "Private Resident Library & Fireplace Salon",
      materials: "Flitched White Oak, Honed Statuario Marble, Brushed Bronze",
      access: "Main entrance of ROVERA Wellness Clubhouse",
      zoning: "Resident Quiet Amenity Zone",
      utilities: "Climate-controlled HEPA air filtration, dimmable architectural warm lighting",
    },
    highlights: [
      "Over 1,200 curated architectural, botanical, and philosophy monographs",
      "Hand-finished linear vapor fireplace set within honed black granite",
      "Private sommelier tasting table for resident reservation",
      "Floor-to-ceiling triple-glazed acoustic curtain wall overlooking the zen court",
    ],
    primaryImage: "/images/rovera-clubhouse-lounge.jpg",
    aspect: "aspect-[4/3]",
    galleryImages: [
      { url: "/images/rovera-clubhouse-lounge.jpg", caption: "Double-Height Resident Social Lounge & Library" },
      { url: "/images/rovera-clubhouse-exterior.jpg", caption: "Clubhouse Exterior Glazing" },
    ],
  },
  {
    id: "sunken-fire-terrace",
    number: "08",
    title: "Sunken Fireplace Courtyard Lounge",
    subtitle: "Outdoor Atmospheric Fire Hearth • Teak Daybeds • River Cobblestone",
    locationTag: "BOTANICAL RETREAT, BENGALURU",
    category: "landscape",
    statusCategory: "in-progress",
    categoryLabel: "LANDSCAPE & GARDENS",
    designStyle: "ORGANIC SUB-GRADE AMBIENCE",
    statusText: "IN PROGRESS • STONE INTEGRATION",
    extent: "SEATING FOR 20 GUESTS",
    leadNarrative:
      "Set one meter below ground level to create an intimate sheltered micro-environment, the sunken fire terrace pairs monolithic river stone benches with a central linear flame feature, framed by swaying native grasses.",
    philosophy:
      "Gathering around fire is an ancestral human archetype. By submerging the seating into the landscape, residents enjoy complete wind shielding and panoramic views across the native tree crowns.",
    specs: {
      extent: "800 Sq.Ft Submerged Open-Air Fire Lounge",
      typology: "Sunken Outdoor Conversational Hearth",
      materials: "Thermal Treated Teak, Chiseled Gray Granite, River Cobble",
      access: "Central botanical spine walking trail",
      zoning: "Outdoor Social Zone",
      utilities: "Underground LPG fire manifold with safety auto-shutoff",
    },
    highlights: [
      "Smokeless automated linear flame feature with ceramic refractory stones",
      "Integrated sub-bench low-voltage amber LED perimeter illumination",
      "Natural stone drainage gravel bed preventing any pooling during monsoons",
      "Surrounding aromatic herbal borders of rosemary and lavender",
    ],
    primaryImage: "/images/rovera-courtyard-lounge.jpg",
    aspect: "aspect-[16/11]",
    galleryImages: [
      { url: "/images/rovera-courtyard-lounge.jpg", caption: "Courtyard Garden Lounge with Ambient Fire Feature" },
      { url: "/images/rovera-zen-garden.jpg", caption: "Japanese Zen Meditation Court" },
    ],
  },
  {
    id: "timber-pergola-walkway",
    number: "09",
    title: "Cedar Pergola Canopy Walkways",
    subtitle: "Fragrant Frangipani Shaded Pedestrian Trails • Interlocking Granite",
    locationTag: "ECOLOGICAL SPINE, BENGALURU",
    category: "landscape",
    statusCategory: "completed",
    categoryLabel: "LANDSCAPE & GARDENS",
    designStyle: "BIOPHILIC SHADING & JAPANESE JOINERY",
    statusText: "SANCTIONED & DEMARCATED",
    extent: "500M PEDESTRIAN CIRCUIT",
    leadNarrative:
      "A continuous rhythmic colonnade of seasoned cedar timber pergolas ribbons through the central parklands of ROVERA. Planted with blooming wisteria and jasmine vines, it provides cool, dappled morning and evening walking trails.",
    philosophy:
      "True luxury encourages daily movement. The pedestrian pergola spine is entirely decoupled from vehicular roadways, allowing children and elders to stroll freely in total safety.",
    specs: {
      extent: "500-Meter Connected Pedestrian Trail",
      typology: "Timber Pergola Colonnade & Shaded Promenades",
      materials: "FSC-Certified Seasoned Cedar, Flamed Granite Curbs",
      access: "All 24 residential parcel gates within 60 seconds",
      zoning: "Perpetual Pedestrian Sanctuary",
      utilities: "Low-glare bollard lighting with dusk-to-dawn astronomical sensors",
    },
    highlights: [
      "Traditional Japanese timber tenon joinery requiring zero visible metal bolts",
      "Natural timber treated with plant-based oils for lifetime weather protection",
      "Permeable crushed granite aggregate walking surface easy on joints",
      "Discreet hydration and rest pavilions placed every 100 meters",
    ],
    primaryImage: "/images/rovera-pergola-walkway.jpg",
    aspect: "aspect-[4/3]",
    galleryImages: [
      { url: "/images/rovera-pergola-walkway.jpg", caption: "Timber Pergola Walkway Shaded by Native Tree Canopies" },
      { url: "/images/rovera-zen-garden.jpg", caption: "Zen Meditation Court Transition" },
    ],
  },
  {
    id: "internal-monolithic-avenues",
    number: "10",
    title: "12-Meter Monolithic Internal Boulevards",
    subtitle: "Granite Interlocking Paving • Zero Overhead Cables • Curvilinear Geometry",
    locationTag: "INFRASTRUCTURE ARTERY, BENGALURU",
    category: "infrastructure",
    statusCategory: "completed",
    categoryLabel: "INFRASTRUCTURE",
    designStyle: "CIVIL MONOLITHIC PAVING",
    statusText: "COMPLETED & CURB-SEALED",
    extent: "12M PRIMARY & 9M BOULEVARDS",
    leadNarrative:
      "Wide, tree-canopied primary avenues paved with heavy-duty interlocking granite pavers replace drab asphalt. Engineered to handle emergency and construction logistics without surface settling, the avenues feature deep root-barrier tree pits.",
    philosophy:
      "Streetscapes define the visual dignity of an address. By concealing every municipal pipe, transformer, and cable beneath reinforced precast concrete utility ducts, the street vistas remain entirely unmarred.",
    specs: {
      extent: "12m Primary Avenue & 9m Secondary Arteries",
      typology: "Heavy-Duty Paved Residential Boulevards",
      materials: "Interlocking Gray Granite Cobblestones, Cast Iron Drain Grates",
      access: "Direct access to each of the 24 sovereign plot frontages",
      zoning: "Master Traffic & Utility Demarcation Corridor",
      utilities: "Dual-sided subterranean utility raceways, LED post-top lamps",
    },
    highlights: [
      "Interlocking pavers facilitate natural groundwater seepage and reduce heat island effect",
      "Deep-set underground transformer vaults hidden behind ornamental bamboo hedging",
      "Calibrated turning radiuses engineered for luxury touring coaches and sports cars",
      "Curvilinear sightlines ensuring high visual variety and natural speed calming",
    ],
    primaryImage: "/images/rovera-internal-boulevard.jpg",
    aspect: "aspect-[4/3]",
    galleryImages: [
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Wide 12m Internal Boulevard with Concealed Utility Ducts" },
      { url: "/images/rovera-grand-double-height-gate.jpg", caption: "Gatehouse Inbound Boulevard Transition" },
    ],
  },
  {
    id: "sovereign-aerial-sanctuary",
    number: "11",
    title: "3.00-Acre Master Demarcation Sanctuary",
    subtitle: "24 Exclusive Plots • Monolithic Boundary Coordinates • STRR Frontage",
    locationTag: "STRR CORRIDOR, BENGALURU",
    category: "infrastructure",
    statusCategory: "completed",
    categoryLabel: "INFRASTRUCTURE",
    designStyle: "CADASTRAL PRECISION",
    statusText: "100% STATUTORY APPROVALS",
    extent: "3.00 ACRES • DEVANAHALLI",
    leadNarrative:
      "A rare 3-acre island of sovereignty in North Bangalore’s most prized capital-growth vector. Protected by 10-foot perimeter boundary walls and biometric gates, ROVERA guarantees perpetual peace of mind.",
    philosophy:
      "In an era of hyper-dense apartment clusters, unencumbered land with clear title ownership is the ultimate store of intergenerational wealth.",
    specs: {
      extent: "3.00 Total Contiguous Acres (130,680 Sq.Ft)",
      typology: "Freehold Boutique Plotted Community",
      materials: "Reinforced Boundary Masonry, DGPS Survey Pillars",
      access: "5 minutes to Satellite Town Ring Road (STRR Expressway)",
      zoning: "Clear LPA residential converted zoning & BIAAPA approval",
      utilities: "Central water storage, STP, dual water supply lines to all plots",
    },
    highlights: [
      "Surrounded by prestigious aerospace and IT investment corridors",
      "Only 15 minutes from Kempegowda International Airport Terminal 2",
      "Pristine air quality with zero industrial manufacturing zones upwind",
      "Full cadastral DGPS markers fixed at all parcel vertices",
    ],
    primaryImage: "/images/aerial-view.jpg",
    aspect: "aspect-[3/4]",
    galleryImages: [
      { url: "/images/aerial-view.jpg", caption: "3.00 Acres Aerial Sanctuary" },
      { url: "/images/rovera-master-plan-3acres.jpg", caption: "Master Parcel Zoning & Cadastral Matrix" },
    ],
  },
  {
    id: "ecological-green-footprint",
    number: "12",
    title: "40% Ecological Canopy & Native Flora",
    subtitle: "Microclimate Modulation • Subsurface Bioswales • Bird Habitat",
    locationTag: "DEVANAHALLI SANCTUARY",
    category: "landscape",
    statusCategory: "completed",
    categoryLabel: "LANDSCAPE & GARDENS",
    designStyle: "INDIGENOUS AFFORESTATION",
    statusText: "PERPETUAL GREEN COVENANT",
    extent: "OVER 52,000 SQ.FT CANOPY",
    leadNarrative:
      "Over 40% of the entire acreage is preserved for native trees, oxygen groves, and sensory gardens. Hundreds of mature peepal, neem, mahogany, and gulmohar trees create a cool, microclimatic lung for the enclave.",
    philosophy:
      "Ecology is not an afterthought; it is our primary luxury. Native species thrive without chemical pesticides and support indigenous birds and butterflies.",
    specs: {
      extent: "Over 52,000 Sq.Ft Continuous Botanical Greenery",
      typology: "Native Afforestation & Biodiversity Sanctuary",
      materials: "Topsoil Preservation, Natural Humus, Recycled Mulch",
      access: "Integrates with all internal pedestrian walkways",
      zoning: "Protected Community Green Reserve",
      utilities: "100% Treated STP water micro-drip networks",
    },
    highlights: [
      "More than 350 mature native canopy trees planted and preserved",
      "Attracts over 24 resident species of native songbirds and butterflies",
      "Subsurface rainwater recharge wells capturing 100% of monsoonal precipitation",
      "Aromatic night-blooming gardens positioned to scent evening breezes",
    ],
    primaryImage: "/images/landscape-nature.jpg",
    aspect: "aspect-[16/11]",
    galleryImages: [
      { url: "/images/landscape-nature.jpg", caption: "40% Ecological Green Canopy" },
      { url: "/images/rovera-zen-garden.jpg", caption: "Japanese Zen Meditation Court" },
    ],
  },
];

// 10 Curated Columns with 50 distinct architectural works
// Calibrated with exact heights summing to 1750px per column + 4 gaps of 20px = 1830px (+ 20px bottom gap = 1850px)
// Eliminates empty white spaces and prevents rapid repeats
const IMMERSIVE_COLUMNS = [
  // Column 1 (350 + 450 + 250 + 350 + 350 = 1750px)
  [
    { url: "/images/rovera-clubhouse-lounge.jpg", title: "Double-Height Resident Salon", project: PROJECTS_DATA[6], height: 350 },
    { url: "/images/rovera-grand-double-height-gate.jpg", title: "8m Cantilever Basalt Portal", project: PROJECTS_DATA[1], height: 450 },
    { url: "/images/rovera-courtyard-lounge.jpg", title: "Sunken Fireplace Lounge", project: PROJECTS_DATA[7], height: 250 },
    { url: "/images/modern-architecture.jpg", title: "Contemporary Villa Architecture", project: PROJECTS_DATA[2], height: 350 },
    { url: "/images/rovera-master-plan-3acres.jpg", title: "3-Acre Master Demarcation", project: PROJECTS_DATA[0], height: 350 },
  ],
  // Column 2 (450 + 250 + 350 + 450 + 250 = 1750px)
  [
    { url: "/images/rovera-wellness-pavilion.jpg", title: "Aura Vitality Pavilion & Spa", project: PROJECTS_DATA[3], height: 450 },
    { url: "/images/rovera-pergola-walkway.jpg", title: "Cedar Pergola Canopy Walkway", project: PROJECTS_DATA[8], height: 250 },
    { url: "/images/rovera-zen-garden.jpg", title: "Japanese Zen Meditation Court", project: PROJECTS_DATA[4], height: 350 },
    { url: "/images/aerial-view.jpg", title: "3.00-Acre Master Sanctuary", project: PROJECTS_DATA[10], height: 450 },
    { url: "/images/rovera-pool-deck.jpg", title: "Azure Lap Pool & Cabanas", project: PROJECTS_DATA[5], height: 250 },
  ],
  // Column 3 (250 + 350 + 450 + 250 + 450 = 1750px)
  [
    { url: "/images/lifestyle-amenities.jpg", title: "Hydrotherapy Vitality Pool", project: PROJECTS_DATA[5], height: 250 },
    { url: "/images/rovera-internal-boulevard.jpg", title: "12m Monolithic Internal Boulevard", project: PROJECTS_DATA[9], height: 350 },
    { url: "/images/rovera-clubhouse-exterior.jpg", title: "Resident Clubhouse Superstructure", project: PROJECTS_DATA[3], height: 450 },
    { url: "/images/masterplan-visual.jpg", title: "Sovereign Cadastral Zoning", project: PROJECTS_DATA[0], height: 250 },
    { url: "/images/hero-cinematic.jpg", title: "Where Legacy Finds Its Land", project: PROJECTS_DATA[2], height: 450 },
  ],
  // Column 4 (350 + 350 + 350 + 350 + 350 = 1750px)
  [
    { url: "/images/landscape-nature.jpg", title: "40% Ecological Green Canopy", project: PROJECTS_DATA[11], height: 350 },
    { url: "/images/rovera-boutique-clubhouse.jpg", title: "Resident Library & Social Lounge", project: PROJECTS_DATA[6], height: 350 },
    { url: "/images/rovera-avenues.jpg", title: "Tree-Lined Granite Boulevard", project: PROJECTS_DATA[9], height: 350 },
    { url: "/images/entrance-structure.jpg", title: "Basalt Ribbed Gateway Facade", project: PROJECTS_DATA[1], height: 350 },
    { url: "/images/brand-story.jpg", title: "Generational Architectural Heritage", project: PROJECTS_DATA[2], height: 350 },
  ],
  // Column 5 (450 + 250 + 450 + 250 + 350 = 1750px)
  [
    { url: "/images/lagos-renders/lagos-clubhouse1.webp", title: "Monolithic Stone Lounge Pavilion", project: PROJECTS_DATA[3], height: 450 },
    { url: "/images/lagos-renders/lagos-amenities-swimming-pool.webp", title: "Horizon Water Spillway Deck", project: PROJECTS_DATA[5], height: 250 },
    { url: "/images/lagos-renders/lagos-landscape2.webp", title: "Preserved Native Canopy Trails", project: PROJECTS_DATA[4], height: 450 },
    { url: "/images/lagos-renders/lagos-amenities-wide-driveways.webp", title: "Subterranean Utility Corridor", project: PROJECTS_DATA[9], height: 250 },
    { url: "/images/lagos-renders/lagos-landscape1.webp", title: "Linear Water Gardens & Boulders", project: PROJECTS_DATA[11], height: 350 },
  ],
  // Column 6 (250 + 450 + 250 + 450 + 350 = 1750px)
  [
    { url: "/images/rovera-courtyard-lounge.jpg", title: "Sunken Fireplace Hearth", project: PROJECTS_DATA[7], height: 250 },
    { url: "/images/rovera-clubhouse.jpg", title: "Evening Twilight Illumination", project: PROJECTS_DATA[3], height: 450 },
    { url: "/images/rovera-aerial-3acres.jpg", title: "Devanahalli Strategic Corridor", project: PROJECTS_DATA[0], height: 250 },
    { url: "/images/modern-architecture.jpg", title: "Modern Tropical Residence", project: PROJECTS_DATA[2], height: 450 },
    { url: "/images/rovera-pergola-walkway.jpg", title: "Cedar Pergola Colonnade", project: PROJECTS_DATA[8], height: 350 },
  ],
  // Column 7 (350 + 250 + 450 + 350 + 350 = 1750px)
  [
    { url: "/images/rovera-pool-deck.jpg", title: "Travertine Solarium Terraces", project: PROJECTS_DATA[5], height: 350 },
    { url: "/images/rovera-internal-boulevard.jpg", title: "Granite Interlocking Paving", project: PROJECTS_DATA[9], height: 250 },
    { url: "/images/rovera-grand-double-height-gate.jpg", title: "Double-Height Monumental Portal", project: PROJECTS_DATA[1], height: 450 },
    { url: "/images/rovera-zen-garden.jpg", title: "Raked River Gravel Court", project: PROJECTS_DATA[4], height: 350 },
    { url: "/images/rovera-clubhouse-lounge.jpg", title: "Resident Private Tasting Suite", project: PROJECTS_DATA[6], height: 350 },
  ],
  // Column 8 (450 + 350 + 250 + 350 + 350 = 1750px)
  [
    { url: "/images/aerial-view.jpg", title: "Devanahalli Plotted Sanctuary", project: PROJECTS_DATA[10], height: 450 },
    { url: "/images/landscape-nature.jpg", title: "Native Biodiversity Groves", project: PROJECTS_DATA[11], height: 350 },
    { url: "/images/lagos-renders/lagos-amenities-picnic-lawn.webp", title: "Shaded Picnic Lawn & Arboretum", project: PROJECTS_DATA[4], height: 250 },
    { url: "/images/rovera-wellness-pavilion.jpg", title: "Floor-to-Ceiling Glass Pavilion", project: PROJECTS_DATA[3], height: 350 },
    { url: "/images/masterplan-visual.jpg", title: "Cadastral Plot Demarcation", project: PROJECTS_DATA[0], height: 350 },
  ],
  // Column 9 (250 + 350 + 350 + 450 + 350 = 1750px)
  [
    { url: "/images/rovera-master-plan-3acres.jpg", title: "Institutional Infrastructure Plan", project: PROJECTS_DATA[0], height: 250 },
    { url: "/images/hero-cinematic.jpg", title: "Sovereign North Bangalore Horizon", project: PROJECTS_DATA[2], height: 350 },
    { url: "/images/lagos-renders/lagos-amenities-clubhouse-exterior.webp", title: "Contemporary Pavilion Terrace", project: PROJECTS_DATA[3], height: 350 },
    { url: "/images/rovera-boutique-clubhouse.jpg", title: "Double-Height Library Atelier", project: PROJECTS_DATA[6], height: 450 },
    { url: "/images/rovera-avenues.jpg", title: "Internal Curvilinear Boulevard", project: PROJECTS_DATA[9], height: 350 },
  ],
  // Column 10 (350 + 450 + 350 + 250 + 350 = 1750px)
  [
    { url: "/images/entrance-structure.jpg", title: "Chiseled Basalt Cantilever", project: PROJECTS_DATA[1], height: 350 },
    { url: "/images/lagos-renders/lagos-landscape2.webp", title: "Ecological Bioswale Network", project: PROJECTS_DATA[11], height: 450 },
    { url: "/images/rovera-pool-deck.jpg", title: "Submerged Lounge Terraces", project: PROJECTS_DATA[5], height: 350 },
    { url: "/images/rovera-courtyard-lounge.jpg", title: "Ambient Fire Feature Terrace", project: PROJECTS_DATA[7], height: 250 },
    { url: "/images/rovera-zen-garden.jpg", title: "Sculpted Stone Meditation Garden", project: PROJECTS_DATA[4], height: 350 },
  ],
];

// Single block cycle dimensions in pixels:
// 10 columns of 340px + 9 internal gaps of 20px + 20px edge margin = 3600px
// 5 items of 1750px total + 4 internal gaps of 20px + 20px edge margin = 1850px
const BLOCK_WIDTH = 10 * (340 + 20); // 3600px
const BLOCK_HEIGHT = 1750 + (4 * 20) + 20; // 1850px

export default function RoveraProjectsView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [columns, setColumns] = useState<2 | 4>(2);
  const [isImmersive, setIsImmersive] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [immersiveFiltersOpen, setImmersiveFiltersOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  // 2D Infinite Toroidal Pan Coordinates
  const [pan, setPan] = useState({ x: -400, y: -200 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);
  const lastTouchRef = useRef({ x: 0, y: 0, time: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const inertiaFrameRef = useRef<number | null>(null);

  const stopInertia = () => {
    if (inertiaFrameRef.current !== null) {
      cancelAnimationFrame(inertiaFrameRef.current);
      inertiaFrameRef.current = null;
    }
  };

  const startInertia = () => {
    stopInertia();
    const step = () => {
      velocityRef.current.x *= 0.92;
      velocityRef.current.y *= 0.92;
      if (Math.abs(velocityRef.current.x) > 0.15 || Math.abs(velocityRef.current.y) > 0.15) {
        setPan((prev) => ({
          x: prev.x + velocityRef.current.x,
          y: prev.y + velocityRef.current.y,
        }));
        inertiaFrameRef.current = requestAnimationFrame(step);
      } else {
        stopInertia();
      }
    };
    inertiaFrameRef.current = requestAnimationFrame(step);
  };

  // Filter projects by category or status matching Yodezeen Screenshot 1
  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return p.statusCategory === "completed";
    if (activeFilter === "in-progress") return p.statusCategory === "in-progress";
    if (activeFilter === "residences") return p.category === "residences";
    if (activeFilter === "clubhouse") return p.category === "clubhouse";
    if (activeFilter === "landscape") return p.category === "landscape";
    if (activeFilter === "infrastructure") return p.category === "infrastructure";
    return true;
  });

  // Handle next / previous project in detail view
  const currentProjectIndex = selectedProject
    ? PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleNextProject = () => {
    if (currentProjectIndex < PROJECTS_DATA.length - 1) {
      setSelectedProject(PROJECTS_DATA[currentProjectIndex + 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedProject(PROJECTS_DATA[0]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevProject = () => {
    if (currentProjectIndex > 0) {
      setSelectedProject(PROJECTS_DATA[currentProjectIndex - 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedProject(PROJECTS_DATA[PROJECTS_DATA.length - 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // 2D Infinite Pan Event Listeners (Drag and Scroll in all 4 directions)
  useEffect(() => {
    if (!isImmersive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const now = performance.now();
      const dt = Math.max(1, now - lastTouchRef.current.time);
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      velocityRef.current = {
        x: ((e.clientX - lastTouchRef.current.x) / dt) * 16,
        y: ((e.clientY - lastTouchRef.current.y) / dt) * 16,
      };
      lastTouchRef.current = { x: e.clientX, y: e.clientY, time: now };

      if (Math.hypot(dx, dy) > 5) {
        hasDraggedRef.current = true;
      }
      setPan({
        x: panStartRef.current.x + dx,
        y: panStartRef.current.y + dy,
      });
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      if (hasDraggedRef.current && Math.hypot(velocityRef.current.x, velocityRef.current.y) > 1.5) {
        startInertia();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !e.touches[0]) return;
      // Prevent browser horizontal back/forward navigation and pull-to-refresh
      if (e.cancelable) e.preventDefault();

      const touch = e.touches[0];
      const now = performance.now();
      const dt = Math.max(1, now - lastTouchRef.current.time);
      const dx = touch.clientX - dragStartRef.current.x;
      const dy = touch.clientY - dragStartRef.current.y;

      velocityRef.current = {
        x: ((touch.clientX - lastTouchRef.current.x) / dt) * 16,
        y: ((touch.clientY - lastTouchRef.current.y) / dt) * 16,
      };
      lastTouchRef.current = { x: touch.clientX, y: touch.clientY, time: now };

      if (Math.hypot(dx, dy) > 5) {
        hasDraggedRef.current = true;
      }
      setPan({
        x: panStartRef.current.x + dx,
        y: panStartRef.current.y + dy,
      });
    };

    const handleTouchEnd = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      if (hasDraggedRef.current && Math.hypot(velocityRef.current.x, velocityRef.current.y) > 1.5) {
        startInertia();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Prevent horizontal trackpad swipe from triggering browser history back/forward
      if (e.cancelable) e.preventDefault();
      stopInertia();
      setPan((prev) => ({
        x: prev.x - e.deltaX * 1.05,
        y: prev.y - e.deltaY * 1.05,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      stopInertia();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isImmersive]);

  const handleMouseDown = (e: React.MouseEvent) => {
    stopInertia();
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
    lastTouchRef.current = { x: e.clientX, y: e.clientY, time: performance.now() };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches[0]) return;
    stopInertia();
    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    panStartRef.current = { ...pan };
    lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, time: performance.now() };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handleImageClick = (project: ProjectDetail) => {
    if (hasDraggedRef.current) return;
    setSelectedProject(project);
  };

  // Mathematical Toroidal Modulo Wrap for seamless infinite 2D glide
  const normX = ((pan.x % BLOCK_WIDTH) + BLOCK_WIDTH) % BLOCK_WIDTH;
  const normY = ((pan.y % BLOCK_HEIGHT) + BLOCK_HEIGHT) % BLOCK_HEIGHT;

  // 3 horizontal blocks x 3 vertical blocks guarantee 100% full screen coverage
  const blockIndices = [-1, 0, 1];

  // Filter disciplines for the popover matching screenshot
  const filterList = [
    { id: "all", label: "ALL" },
    { id: "residences", label: "PLOTTED SANCTUARY" },
    { id: "gatehouse", label: "ARCHITECTURE" },
    { id: "landscape", label: "ECOLOGICAL LANDSCAPE" },
    { id: "clubhouse", label: "WELLNESS & LEISURE" },
    { id: "infrastructure", label: "INFRASTRUCTURE" },
  ];

  return (
    <div className="relative w-full bg-[#FAFAFA] text-zinc-950 min-h-screen selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Yodezeen Signature Circular Cursor */}
      <YodezeenCursor />

      {/* Lightbox Modal */}
      {selectedLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedLightboxImage}
              alt="High Resolution Architectural Render"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW A: PROJECT DETAIL VIEW (Screenshot 6 with matching Light Theme)
          Activated when a project card or plate is clicked
          ========================================================================= */}
      {selectedProject ? (
        <section className="relative w-full min-h-screen pb-24 bg-[#FAFAFA] text-zinc-950 animate-fade-in">
          {/* Top Sticky Nav */}
          <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200 py-3 sm:py-4 px-4 sm:px-12 flex items-center justify-between shadow-2xs">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center gap-1.5 sm:gap-3 text-xs font-mono uppercase tracking-[0.12em] sm:tracking-[0.2em] text-zinc-600 hover:text-black transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Back to All Projects</span>
              <span className="sm:hidden">Back</span>
            </button>

            <span className="font-componentry text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-900 font-semibold">
              ROVERA • {selectedProject.number}
            </span>

            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F2744] hover:bg-[#1E3A8A] text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-colors shadow cursor-pointer active:scale-95"
            >
              <span className="hidden sm:inline">Schedule Visit</span>
              <span className="sm:hidden">Enquire</span>
            </button>
          </div>

          {/* Hero Architectural Photo (Top of Screenshot 6) */}
          <div className="relative w-full h-[62vh] sm:h-[75vh] lg:h-[82vh] overflow-hidden bg-black">
            <Image
              src={selectedProject.primaryImage}
              alt={selectedProject.title}
              fill
              priority
              quality={95}
              className="object-cover object-center filter contrast-105"
              sizes="100vw"
            />
            {/* Cinematic Gradient at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Bottom Title Bar overlay */}
            <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300 block mb-2 font-semibold">
                  {selectedProject.number} • {selectedProject.categoryLabel}
                </span>
                <h1 className="font-componentry text-3xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-white leading-tight">
                  {selectedProject.title}
                </h1>
                <p className="mt-2 font-mono text-xs text-zinc-300 tracking-wide uppercase">
                  ROVERA SANCTUARY • DEVANAHALLI, KARNATAKA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedLightboxImage(selectedProject.primaryImage)}
                  className="px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-2 cursor-pointer shadow"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================================
              HORIZONTAL METRICS ROW (Exact Screenshot 6 Replica on Light Canvas)
              Column 1: DESIGN STYLE
              Column 2: KARNATAKA VECTOR MAP + DEVANAHALLI RADAR
              Column 3: STATUS / TYPOLOGY
              Column 4: TOTAL EXTENT / SCALE
              ===================================================================== */}
          <div className="border-y border-zinc-200 bg-white shadow-xs">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
              
              {/* Column 1: DESIGN STYLE */}
              <div className="py-8 md:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold block mb-4">
                  DESIGN STYLE
                </span>
                <div>
                  <h3 className="font-componentry text-xl sm:text-2xl font-normal text-zinc-950 tracking-[-0.02em]">
                    {selectedProject.designStyle}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600 font-sans leading-relaxed">
                    Understated brutalist restraint with monolithic flamed basalt &amp; biophilic equilibrium.
                  </p>
                </div>
              </div>

              {/* Column 2: KARNATAKA VECTOR MAP & DEVANAHALLI COORDINATES */}
              <div className="py-6 md:py-8 px-0 md:px-6 lg:px-8 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#1E3A8A] font-semibold block mb-2 w-full text-left">
                  LOCATION • KARNATAKA
                </span>
                <KarnatakaMapOutline
                  locationName="ROVERA SANCTUARY • DEVANAHALLI"
                  coords="13° 14' 56.4&quot; N • 77° 42' 39.2&quot; E"
                  subLabel="STRR EXPRESSWAY CORRIDOR"
                  className="w-full max-w-[260px]"
                />
              </div>

              {/* Column 3: STATUS & TYPOLOGY */}
              <div className="py-8 md:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold block mb-4">
                  PROJECT STATUS
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-emerald-700 uppercase tracking-widest font-semibold">
                      {selectedProject.statusCategory === "completed" ? "COMPLETED" : "IN PROGRESS"}
                    </span>
                  </div>
                  <h3 className="font-componentry text-xl sm:text-2xl font-normal text-zinc-950 tracking-[-0.02em]">
                    RESIDENTIAL SANCTUARY
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 font-sans leading-relaxed">
                    Karnataka RERA Approved: PRM/KA/RERA/1250/301/PR/200224/006646
                  </p>
                </div>
              </div>

              {/* Column 4: TOTAL EXTENT */}
              <div className="py-8 md:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-semibold block mb-4">
                  TOTAL EXTENT
                </span>
                <div>
                  <h3 className="font-componentry text-2xl sm:text-3xl font-medium text-zinc-950 tracking-[-0.02em]">
                    {selectedProject.extent}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">
                    24 SOVEREIGN PLOTS • LOW DENSITY
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Project Detailed Dossier Narrative */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3A8A] font-semibold block mb-3">
                  ARCHITECTURAL NARRATIVE
                </span>
                <p className="text-base sm:text-lg text-zinc-800 font-sans leading-relaxed">
                  {selectedProject.leadNarrative}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 border-l-4 border-l-[#1E3A8A] space-y-3 shadow-xs">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold block">
                  Design Rationale &amp; Permanence
                </span>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic">
                  &ldquo;{selectedProject.philosophy}&rdquo;
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold block">
                  CADASTRAL &amp; ENGINEERING ATTRIBUTES
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specs Table */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-md space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1E3A8A] font-semibold block border-b border-zinc-100 pb-3">
                  SPECIFICATION DOSSIER
                </span>

                <dl className="space-y-4 divide-y divide-zinc-100 text-xs">
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Scale / Extent</dt>
                    <dd className="font-mono text-zinc-950 font-semibold mt-1 text-sm">{selectedProject.specs.extent}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Typology</dt>
                    <dd className="font-mono text-zinc-800 mt-1">{selectedProject.specs.typology}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Materiality</dt>
                    <dd className="font-mono text-zinc-800 mt-1">{selectedProject.specs.materials}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Access Arteries</dt>
                    <dd className="font-mono text-zinc-800 mt-1">{selectedProject.specs.access}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Sub-grade Utilities</dt>
                    <dd className="font-mono text-zinc-800 mt-1">{selectedProject.specs.utilities}</dd>
                  </div>
                </dl>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setEnquiryModalOpen(true)}
                    className="w-full py-3.5 bg-[#0F2744] hover:bg-[#1E3A8A] text-white rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-colors shadow-lg cursor-pointer"
                  >
                    Schedule Private Site Inspection
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Plates Gallery */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 border-t border-zinc-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1E3A8A] font-semibold block mb-1">
                  VISUAL PLATES
                </span>
                <h3 className="font-componentry text-2xl sm:text-3xl font-normal text-zinc-950">
                  Architectural Perspectives &amp; Layouts
                </h3>
              </div>
              <span className="font-mono text-xs text-zinc-500">
                [{selectedProject.galleryImages.length} Plates Documented]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedProject.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLightboxImage(img.url)}
                  className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 cursor-pointer shadow-md hover:shadow-xl transition-all"
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <p className="font-mono text-xs text-zinc-100 line-clamp-1">{img.caption}</p>
                    <Maximize2 className="w-4 h-4 text-zinc-300 group-hover:text-white shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 border-t border-zinc-200 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevProject}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 hover:text-black transition-colors cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous Discipline</span>
            </button>

            <button
              type="button"
              onClick={handleNextProject}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 hover:text-black transition-colors cursor-pointer group"
            >
              <span>Next Discipline</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      ) : isImmersive ? (
        /* =========================================================================
            VIEW B: IMMERSIVE 2D INFINITE LOOPING CANVAS (Screenshot Signature Feature)
            - Completely seamless 2D infinite loop (UP, DOWN, LEFT, RIGHT)
            - NO footer, NO bottom pill: PURE images across the entire screen!
            - Top frosted blur glass overlay with smooth blur gradient
            - Frosted FILTERS card with large stacked typography (Red circle replica)
            ========================================================================= */
        <section className="fixed inset-0 z-40 bg-[#FAFAFA] text-zinc-950 overflow-hidden select-none animate-fade-in">
          
          {/* =====================================================================
              1. TOP FROSTED BLUR GRADIENT OVERLAY (Exact Screenshot Replica)
              Blurs whatever images slide or drag underneath it!
              ===================================================================== */}
          <div className="fixed top-0 left-0 right-0 z-50 h-32 sm:h-44 pointer-events-none">
            {/* The multi-stage blur mask */}
            <div
              className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-[#FAFAFA]/95 via-[#FAFAFA]/75 to-transparent pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.45) 75%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.45) 75%, transparent 100%)",
              }}
            />

            {/* Interactive Header Controls Bar */}
            <div className="relative z-50 w-full px-3 sm:px-12 py-3 sm:py-6 flex items-center justify-between pointer-events-auto">
              
              {/* < BACK Pill Button (Exact Yodezeen Replica) */}
              <button
                type="button"
                onClick={() => setIsImmersive(false)}
                className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-400/60 hover:bg-zinc-500/70 text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold transition-all backdrop-blur-md border border-white/20 cursor-pointer shadow-xs active:scale-95"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/25 group-hover:bg-white/40 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </span>
                <span>BACK</span>
              </button>

              {/* Center Logo */}
              <h2 className="font-editorial text-lg sm:text-2xl md:text-3xl tracking-[0.25em] uppercase text-zinc-950 font-bold select-none">
                ROVERA
              </h2>

              {/* FILTERS = Pill Button (Toggles the Red Circle Card) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setImmersiveFiltersOpen(!immersiveFiltersOpen)}
                  className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-400/60 hover:bg-zinc-500/70 text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest font-semibold transition-all backdrop-blur-md border border-white/20 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>FILTERS</span>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/25 group-hover:bg-white/40 flex items-center justify-center transition-colors">
                    <SlidersHorizontal className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </span>
                </button>

                {/* =================================================================
                    FROSTED EXPANDED FILTERS CARD (Exact Replica of Red Circle)
                    Header: 50 PROJECTS • FILTERS ✕
                    Body: Large bold stacked typography (ALL, PLOTTED, ARCHITECTURE...)
                    ================================================================= */}
                {immersiveFiltersOpen && (
                  <div className="fixed top-14 right-2 sm:top-6 sm:right-10 w-[calc(100vw-16px)] sm:w-[360px] max-w-[360px] bg-zinc-900/90 backdrop-blur-2xl text-white border border-white/20 p-5 sm:p-8 rounded-[24px] sm:rounded-[28px] shadow-2xl z-[100] animate-fade-in text-left">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4 mb-4 sm:mb-5">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                        50 PROJECTS
                      </span>
                      <button
                        type="button"
                        onClick={() => setImmersiveFiltersOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>FILTERS</span>
                        <X className="w-4 h-4 text-zinc-400 hover:text-white" />
                      </button>
                    </div>

                    {/* Massive Bold Stacked Discipline Typography */}
                    <div className="space-y-2 sm:space-y-3">
                      {filterList.map((f) => {
                        const isCurrent = activeFilter === f.id;
                        return (
                          <button
                            key={f.id}
                            type="button"
                            onClick={() => {
                              setActiveFilter(f.id);
                              setImmersiveFiltersOpen(false);
                            }}
                            className={`block w-full text-left font-componentry text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-tight transition-colors cursor-pointer leading-[1.1] ${
                              isCurrent
                                ? "text-white"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            {f.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* =====================================================================
              2. 2D INFINITE TOROIDAL PANNABLE CANVAS
              Scrolls & drags seamlessly in all 4 directions (UP, DOWN, LEFT, RIGHT)!
              NO footer, NO bottom guide pill: PURE images across the entire canvas!
              ===================================================================== */}
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              touchAction: "none",
              overscrollBehavior: "none",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
            className={`w-full h-full overflow-hidden select-none overscroll-none touch-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* 3x3 Block Grid: Toroidally wraps with modulo arithmetic */}
            <div
              style={{
                transform: `translate3d(${normX - BLOCK_WIDTH}px, ${normY - BLOCK_HEIGHT}px, 0)`,
                transition: "none",
              }}
              className="absolute top-0 left-0 will-change-transform"
            >
              {blockIndices.map((by) => (
                <div key={by} className="flex">
                  {blockIndices.map((bx) => (
                    <div
                      key={bx}
                      style={{
                        width: `${BLOCK_WIDTH}px`,
                        height: `${BLOCK_HEIGHT}px`,
                      }}
                      className="flex gap-5 shrink-0 pr-5 pb-5"
                    >
                      {IMMERSIVE_COLUMNS.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-5 w-[340px] shrink-0">
                          {col.map((item, itemIdx) => {
                            // Match filter if active
                            const isMatch =
                              activeFilter === "all" ||
                              item.project.category === activeFilter ||
                              (activeFilter === "completed" && item.project.statusCategory === "completed") ||
                              (activeFilter === "in-progress" && item.project.statusCategory === "in-progress");

                            return (
                              <div
                                key={itemIdx}
                                onClick={() => handleImageClick(item.project)}
                                style={{ height: `${item.height}px` }}
                                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-200 border border-zinc-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer w-full shrink-0 ${
                                  isMatch ? "opacity-100" : "opacity-35 grayscale"
                                }`}
                              >
                                <Image
                                  src={item.url}
                                  alt={item.title}
                                  fill
                                  draggable={false}
                                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                                  sizes="360px"
                                />

                                {/* Hover overlay: details upon the image itself (Exact Yodezeen Replica) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-6 text-white pointer-events-none">
                                  <h4 className="font-componentry text-base sm:text-lg lg:text-xl text-white font-bold uppercase tracking-tight leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="mt-1 text-[11px] sm:text-xs font-mono text-zinc-300 tracking-[0.2em] uppercase font-medium">
                                    {item.project.locationTag || "DEVANAHALLI, BENGALURU"}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </section>
      ) : (
        /* =========================================================================
            VIEW C: ALL PROJECTS STANDARD VIEW (Exact Screenshot 1 Replica)
            Clean Light Background, Minimalist Filter Row, 2 / 4 Layout Density
            ========================================================================= */
        <section className="relative w-full min-h-screen bg-[#FAFAFA] text-zinc-950 pb-24">
          
          {/* Top Architectural Navigation Bar */}
          <header className="w-full bg-[#FAFAFA] border-b border-zinc-200/80 py-3.5 sm:py-4 px-4 sm:px-12 flex items-center justify-between">
            <Link
              href="/developments/rovera#we-do"
              className="group inline-flex items-center gap-2 sm:gap-3 text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.2em] text-zinc-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to ROVERA</span>
            </Link>

            <span className="hidden md:inline-block font-editorial text-sm tracking-[0.25em] uppercase text-zinc-700 font-medium">
              STTHIRA ARCHITECTURAL PORTFOLIO
            </span>

            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0F2744] hover:bg-[#1E3A8A] text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-colors shadow cursor-pointer active:scale-95"
            >
              Schedule Visit
            </button>
          </header>

          {/* Centered Monumental Title matching Yodezeen Image 1 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-12 pt-10 sm:pt-20 pb-8 sm:pb-14 text-center">
            <h1 className="font-componentry text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 uppercase leading-none">
              ALL PROJECTS
            </h1>
            <p className="mt-2 sm:mt-3 font-componentry text-xs sm:text-xl md:text-2xl font-bold tracking-[0.12em] sm:tracking-[0.24em] text-zinc-300 uppercase select-none">
              PLOTTED SANCTUARY / ARCHITECTURE / BOTANICAL LANDSCAPE
            </p>
          </div>

          {/* =====================================================================
              HORIZONTAL FILTER BAR (Exact Screenshot 1 Replica)
              Left: ALL, COMPLETED, IN PROGRESS, RESIDENCES, etc.
              Right: IMMERSIVE [switch]   2   4
              ===================================================================== */}
          <div className="w-full border-y border-zinc-200 bg-white/70 backdrop-blur-md sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-12 py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Left Side: Sleek Unbordered Text Tabs matching Image 1 */}
              <div className="flex items-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar py-1">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "all"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  ALL
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("completed")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "completed"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  COMPLETED
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("in-progress")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "in-progress"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  IN PROGRESS
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("residences")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "residences"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  RESIDENCES
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("clubhouse")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "clubhouse"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  CLUBHOUSE
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("landscape")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "landscape"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  LANDSCAPE
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("infrastructure")}
                  className={`text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === "infrastructure"
                      ? "text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5"
                      : "text-zinc-400 hover:text-zinc-900 font-medium"
                  }`}
                >
                  INFRASTRUCTURE
                </button>

                {/* Location Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-zinc-400 hover:text-zinc-900 font-medium whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <span>LOCATION</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {locationDropdownOpen && (
                    <div className="absolute left-0 top-full mt-3 w-60 bg-white border border-zinc-200 rounded-xl shadow-xl p-3 z-50 animate-fade-in text-left">
                      <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 font-mono">
                        Geographic Corridor
                      </div>
                      <div className="text-xs font-semibold text-zinc-900">
                        Devanahalli, North Bengaluru
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-1">
                        STRR Expressway Frontage • State Highway 9
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: IMMERSIVE Switch + 2 / 4 Layout Toggle */}
              <div className="flex items-center gap-6 shrink-0 self-end md:self-auto">
                {/* IMMERSIVE Switch */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-medium">
                    IMMERSIVE
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isImmersive}
                    onClick={() => setIsImmersive(!isImmersive)}
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors cursor-pointer ${
                      isImmersive ? "bg-[#1E3A8A]" : "bg-zinc-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        isImmersive ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* 2 / 4 Switcher */}
                <div className="flex items-center gap-3 text-xs font-mono font-medium">
                  <button
                    type="button"
                    onClick={() => setColumns(2)}
                    className={`transition-colors cursor-pointer ${
                      columns === 2 ? "text-zinc-950 font-bold underline" : "text-zinc-400 hover:text-black"
                    }`}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    onClick={() => setColumns(4)}
                    className={`transition-colors cursor-pointer ${
                      columns === 4 ? "text-zinc-950 font-bold underline" : "text-zinc-400 hover:text-black"
                    }`}
                  >
                    4
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Project Grid matching Image 1 - Pure Plain Images with Hover Details Upon Image */}
          <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-12">
            <div
              className={`w-full ${
                columns === 2
                  ? "columns-1 md:columns-2 gap-5 sm:gap-7"
                  : "columns-1 sm:columns-2 lg:columns-4 gap-4 sm:gap-5"
              }`}
            >
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group relative break-inside-avoid mb-4 sm:mb-5 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 border border-zinc-200/70"
                >
                  {/* Clean Plain Image Container - Zero Text By Default */}
                  <div className={`relative w-full ${project.aspect || "aspect-[16/11]"} overflow-hidden`}>
                    <Image
                      src={project.primaryImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                      sizes={columns === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    />

                    {/* Hover Overlay: Details upon the image itself (Exact Yodezeen Replica) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-center p-4 sm:p-8 pointer-events-none">
                      <h3 className="font-componentry text-base sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-sm font-mono tracking-[0.2em] text-zinc-300 uppercase font-medium">
                        {project.locationTag || project.subtitle}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </section>
      )}

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        projectName={selectedProject ? `ROVERA — ${selectedProject.title}` : "ROVERA Architectural Inspection"}
      />
    </div>
  );
}
