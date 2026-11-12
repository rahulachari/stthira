"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  ShieldCheck,
  Layers,
  Home,
  Waves,
  Trees,
  CheckCircle2,
  SlidersHorizontal,
  LayoutGrid,
  Grid2X2,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import KarnatakaMapOutline from "@/components/KarnatakaMapOutline";
import YodezeenCursor from "@/components/ui/YodezeenCursor";

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  designStyle: string;
  status: string;
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
  galleryImages: { url: string; caption: string }[];
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "master-plan-infrastructure",
    number: "01",
    title: "Master Planning & Sub-Grade Infrastructure",
    subtitle: "3.0 Acres • 24 Sovereign Parcels • STRR Corridor",
    category: "CIVIL & CADASTRAL DESIGN",
    designStyle: "CONTEMPORARY MONOLITHIC & CADASTRAL PRECISION",
    status: "IN PROGRESS • LOW-DENSITY SANCTUARY",
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
    category: "ARCHITECTURAL PORTAL",
    designStyle: "BRUTALIST MONOLITHIC & FLAMED BASALT",
    status: "IN PROGRESS • CEREMONIAL THRESHOLD",
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
    category: "RESIDENTIAL FREEDOM",
    designStyle: "MODERN TROPICAL & BIOPHILIC FREEDOM",
    status: "IN PROGRESS • SOVEREIGN RESIDENCES",
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
    primaryImage: "/images/rovera-internal-boulevard.jpg",
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
    category: "COMMUNITY & LEISURE",
    designStyle: "CONTEMPORARY PAVILION & SUBMERGED TERRACES",
    status: "IN PROGRESS • RESIDENT EXCLUSIVE",
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
    category: "BIOPHILIC SANCTUARY",
    designStyle: "BIOPHILIC SANCTUARY & JAPANESE ZEN",
    status: "IN PROGRESS • 40% CONSERVATION",
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
    galleryImages: [
      { url: "/images/rovera-pergola-walkway.jpg", caption: "Timber Pergola Walkway Shaded by Native Tree Canopies" },
      { url: "/images/rovera-courtyard-lounge.jpg", caption: "Courtyard Garden Lounge with Ambient Fire Feature" },
      { url: "/images/rovera-zen-garden.jpg", caption: "Japanese Zen Meditation Garden & Raked Gravel Terrace" },
    ],
  },
];

export default function RoveraProjectsView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [columns, setColumns] = useState<2 | 4>(2);
  const [isImmersive, setIsImmersive] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.id === activeFilter || p.category === activeFilter);

  // Flatten all gallery visual plates for the immersive masonry view
  const allVisualPlates = PROJECTS_DATA.flatMap((p) => [
    { url: p.primaryImage, project: p, caption: `${p.number} • ${p.title}` },
    ...p.galleryImages.map((g) => ({ url: g.url, project: p, caption: g.caption })),
  ]);

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

  return (
    <div className="relative w-full bg-[#0A0D14] text-white min-h-screen selection:bg-blue-600 selection:text-white font-sans antialiased">
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
          VIEW A: PROJECT DETAIL VIEW (Screenshot 6)
          Activated when a project card or plate is clicked
          ========================================================================= */}
      {selectedProject ? (
        <section className="relative w-full min-h-screen pb-24 animate-fade-in">
          {/* Top Sticky Nav */}
          <div className="sticky top-0 z-40 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 py-4 px-6 sm:px-12 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Projects</span>
            </button>

            <span className="font-componentry text-sm tracking-[0.2em] uppercase text-zinc-400 font-medium">
              ROVERA • {selectedProject.number}
            </span>

            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow cursor-pointer"
            >
              Schedule Visit
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/20 to-black/30 pointer-events-none" />

            {/* Bottom Title Bar overlay */}
            <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 block mb-2 font-semibold">
                  {selectedProject.number} • {selectedProject.category}
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
                  className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================================
              HORIZONTAL METRICS ROW (Exact Screenshot 6 Replica)
              Column 1: DESIGN STYLE
              Column 2: KARNATAKA VECTOR MAP + DEVANAHALLI RADAR
              Column 3: STATUS / TYPOLOGY
              Column 4: TOTAL EXTENT / SCALE
              ===================================================================== */}
          <div className="border-y border-white/15 bg-[#0D121D]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              
              {/* Column 1: DESIGN STYLE */}
              <div className="py-8 md:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-4">
                  DESIGN STYLE
                </span>
                <div>
                  <h3 className="font-componentry text-xl sm:text-2xl font-light text-white tracking-[-0.02em]">
                    {selectedProject.designStyle}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed">
                    Understated brutalist restraint with monolithic flamed basalt &amp; biophilic equilibrium.
                  </p>
                </div>
              </div>

              {/* Column 2: KARNATAKA VECTOR MAP & DEVANAHALLI COORDINATES */}
              <div className="py-6 md:py-8 px-0 md:px-6 lg:px-8 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blue-400 font-semibold block mb-2 w-full text-left">
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
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-4">
                  PROJECT STATUS
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
                      IN PROGRESS
                    </span>
                  </div>
                  <h3 className="font-componentry text-xl sm:text-2xl font-light text-white tracking-[-0.02em]">
                    RESIDENTIAL SANCTUARY
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed">
                    Karnataka RERA Approved: PRM/KA/RERA/1250/301/PR/200224/006646
                  </p>
                </div>
              </div>

              {/* Column 4: TOTAL EXTENT */}
              <div className="py-8 md:py-10 px-0 md:px-6 lg:px-8 flex flex-col justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block mb-4">
                  TOTAL EXTENT
                </span>
                <div>
                  <h3 className="font-componentry text-2xl sm:text-3xl font-light text-white tracking-[-0.02em]">
                    {selectedProject.extent}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-blue-300 tracking-wider">
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
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold block mb-3">
                  ARCHITECTURAL NARRATIVE
                </span>
                <p className="text-base sm:text-lg text-zinc-200 font-sans leading-relaxed">
                  {selectedProject.leadNarrative}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-blue-500 space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                  Design Rationale &amp; Permanence
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{selectedProject.philosophy}&rdquo;
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold block">
                  CADASTRAL &amp; ENGINEERING ATTRIBUTES
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Technical Specs Table */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold block border-b border-white/10 pb-3">
                  SPECIFICATION DOSSIER
                </span>

                <dl className="space-y-4 divide-y divide-white/10 text-xs">
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Scale / Extent</dt>
                    <dd className="font-mono text-white mt-1 text-sm">{selectedProject.specs.extent}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Typology</dt>
                    <dd className="font-mono text-white mt-1">{selectedProject.specs.typology}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Materiality</dt>
                    <dd className="font-mono text-white mt-1">{selectedProject.specs.materials}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Access Arteries</dt>
                    <dd className="font-mono text-white mt-1">{selectedProject.specs.access}</dd>
                  </div>
                  <div className="pt-3 flex flex-col">
                    <dt className="font-mono uppercase text-zinc-500">Sub-grade Utilities</dt>
                    <dd className="font-mono text-white mt-1">{selectedProject.specs.utilities}</dd>
                  </div>
                </dl>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setEnquiryModalOpen(true)}
                    className="w-full py-3.5 bg-[#1E3A8A] hover:bg-[#2563EB] text-white rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-colors shadow-lg cursor-pointer"
                  >
                    Schedule Private Site Inspection
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Plates Gallery */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold block mb-1">
                  VISUAL PLATES
                </span>
                <h3 className="font-componentry text-2xl sm:text-3xl font-light text-white">
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
                  className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer shadow-xl"
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <p className="font-mono text-xs text-zinc-200 line-clamp-1">{img.caption}</p>
                    <Maximize2 className="w-4 h-4 text-zinc-400 group-hover:text-white shrink-0 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next / Previous Project Navigation */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevProject}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous Discipline</span>
            </button>

            <button
              type="button"
              onClick={handleNextProject}
              className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Next Discipline</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      ) : isImmersive ? (
        /* =========================================================================
            VIEW B: IMMERSIVE FEATURE (Exact Screenshot 5 Replica)
            Activated when the "IMMERSIVE" toggle is ON
            ========================================================================= */
        <section className="relative w-full min-h-screen animate-fade-in select-none">
          {/* Top Bar matching Screenshot 5 (< BACK, ROVERA, FILTERS =) */}
          <header className="sticky top-0 z-40 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 py-4 px-6 sm:px-12 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsImmersive(false)}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <span className="font-editorial text-lg tracking-[0.25em] uppercase text-white font-medium">
              ROVERA
            </span>

            <div className="flex items-center gap-4">
              {/* Filter Dropdown / Pill */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  FILTERS
                </span>
              </div>
            </div>
          </header>

          {/* Top Vertical Blur-Fade Gradient Mask (Screenshot 5 signature) */}
          <div className="sticky top-[57px] z-30 w-full h-14 bg-gradient-to-b from-[#0A0D14] to-transparent pointer-events-none" />

          {/* Immersive Staggered Image Wall */}
          <div className="max-w-[96vw] mx-auto px-4 sm:px-6 pb-24 -mt-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {allVisualPlates.map((plate, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(plate.project)}
                  className="group relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl cursor-pointer break-inside-avoid transform hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative w-full aspect-[4/3] sm:aspect-auto">
                    <Image
                      src={plate.url}
                      alt={plate.caption}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Dark hover vignette with project metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-1">
                      {plate.project.number} • {plate.project.category}
                    </span>
                    <h4 className="font-componentry text-base sm:text-lg text-white font-medium leading-tight">
                      {plate.caption}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
                      <span>View Architectural Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* =========================================================================
            VIEW C: ALL PROJECTS STANDARD GRID (Screenshots 3 & 4)
            Includes: 2 / 4 density switcher + IMMERSIVE toggle switch
            ========================================================================= */
        <section className="relative w-full min-h-screen pb-24">
          {/* Top Architectural Navigation Bar */}
          <header className="sticky top-0 z-40 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 py-4 px-6 sm:px-12 flex items-center justify-between">
            <Link
              href="/developments/rovera"
              className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to ROVERA</span>
            </Link>

            <span className="font-editorial text-sm tracking-[0.25em] uppercase text-zinc-400">
              ROVERA ARCHITECTURAL DOSSIER
            </span>

            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow cursor-pointer"
            >
              Schedule Visit
            </button>
          </header>

          {/* Monumental Header matching Screenshot 3 & 4 */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16 border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold block mb-3">
                  STTHIRA ARCHITECTURAL PORTFOLIO
                </span>
                <h1 className="font-componentry text-4xl sm:text-6xl lg:text-8xl font-light tracking-[-0.04em] text-white leading-none">
                  ALL PROJECTS
                </h1>
                <p className="mt-4 font-sans text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
                  Every creation at ROVERA is an exercise in sovereign luxury. Select any discipline to inspect CAD layouts, sub-grade utility cross-sections, and photographic dossiers.
                </p>
              </div>

              {/* Controls Bar: Layout density (2 / 4) + IMMERSIVE toggle (Screenshot 4) */}
              <div className="flex flex-wrap items-center gap-6 self-start lg:self-end">
                {/* 2 / 4 Layout Switcher */}
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                  <button
                    type="button"
                    onClick={() => setColumns(2)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                      columns === 2 ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
                    }`}
                    title="2 Column Wide View"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    onClick={() => setColumns(4)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer ${
                      columns === 4 ? "bg-white text-black shadow" : "text-zinc-400 hover:text-white"
                    }`}
                    title="4 Column Compact View"
                  >
                    4
                  </button>
                </div>

                {/* IMMERSIVE Toggle Switch (Screenshot 4) */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
                    IMMERSIVE
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isImmersive}
                    onClick={() => setIsImmersive(!isImmersive)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      isImmersive ? "bg-blue-600" : "bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isImmersive ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="flex flex-wrap gap-2.5 pt-10 sm:pt-12">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
                }`}
              >
                All Projects [05]
              </button>
              {PROJECTS_DATA.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveFilter(p.id)}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                    activeFilter === p.id
                      ? "bg-white text-black shadow-md"
                      : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  {p.number} • {p.title.split("&")[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid (Adapts to 2 or 4 columns) */}
          <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-12 sm:pt-16">
            <div
              className={`grid gap-8 sm:gap-10 lg:gap-12 ${
                columns === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
              }`}
            >
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group relative flex flex-col cursor-pointer"
                >
                  {/* Image Card with Zoom */}
                  <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl mb-4">
                    <Image
                      src={project.primaryImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes={columns === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-xs text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                        {project.number}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-2 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span className="uppercase text-blue-400">{project.category}</span>
                      <span>{project.extent}</span>
                    </div>
                    <h2 className="font-componentry text-xl sm:text-2xl font-light text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                      {project.leadNarrative}
                    </p>
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
