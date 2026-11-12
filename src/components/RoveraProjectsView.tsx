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
  Download,
  Share2,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
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

const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "master-plan-infrastructure",
    number: "01",
    title: "Master Planning & Sub-Grade Infrastructure",
    subtitle: "3.0 Acres • 24 Freehold Villa Parcels • STRR Corridor",
    category: "CIVIL & CADASTRAL DESIGN",
    leadNarrative:
      "ROVERA's master plan abandons high-density grid layouts in favor of an intimate 3-acre boutique sanctuary. Intentionally planned for just 24 discerning patrons, the enclave features monumental 12-meter primary avenues and 9-meter internal residential boulevards, ensuring complete privacy, zero through-traffic, and expansive tree canopies.",
    philosophy:
      "True luxury begins with sub-grade civil permanence. Every plot at ROVERA is engineered with institutional-grade subterranean utility corridors. Overhead wires, surface transformers, and ad-hoc cabling are eliminated completely in favor of concealed concrete utility trenches.",
    specs: {
      extent: "3.00 Acres (130,680 Sq.Ft)",
      typology: "Low-Density Plotted Community",
      materials: "Interlocking Heavy-Duty Pavers, Reinforced Concrete Trenches",
      access: "Direct 5-min link to 6-lane STRR Expressway",
      zoning: "BDA / Statutory Local Planning Authority Approved",
      utilities: "100% Concealed Subterranean Ducts (Power, Fiber, Stormwater)",
    },
    highlights: [
      "100% underground 11kV electrical feeder cables & gigabit optical fiber",
      "Perimeter stormwater recharge aquifers preventing waterlogging",
      "Curved boulevard alignments preventing speeding and preserving sightlines",
      "Millimeter-accurate DGPS cadastral demarcation with granite boundary stones",
    ],
    primaryImage: "/images/rovera-master-plan-3acres.jpg",
    galleryImages: [
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Wide 12m Internal Boulevard with Concealed Utility Ducts" },
      { url: "/images/rovera-aerial-3acres.jpg", caption: "3-Acre Master Plan Axonometric Sanctuary" },
    ],
  },
  {
    id: "monumental-gatehouse",
    number: "02",
    title: "Monumental Gatehouse & Security Protocol",
    subtitle: "8-Meter Cantilever • Flamed Basalt • Biometric Portal",
    category: "ARCHITECTURAL PORTAL",
    leadNarrative:
      "The entrance to ROVERA is conceived as a monumental architectural threshold. Spanning both inbound and outbound traffic arteries, the structure features an 8-meter high cantilevered canopy constructed from raw ribbed concrete, flamed South Indian black basalt slabs, and architectural warm teak timber louvers.",
    philosophy:
      "An entrance structure must signify sovereign permanence. Beyond its brutalist sculptural beauty, the gatehouse integrates multi-tier electronic access control: automated RFID fast-tags for residents, optical number-plate telemetry, and a discrete biometric concierge station.",
    specs: {
      extent: "Spanning 20m dual-lane roadway",
      typology: "Double-Height Monumental Gatehouse",
      materials: "Flamed South Indian Basalt, Architectural Ribbed Concrete, Teak",
      access: "Dual Inbound & Outbound Dedicated Checkpoints",
      zoning: "Statutory 24/7 Security Boundary Control",
      utilities: "Integrated Telemetry, High-Speed Optical CCTVs & Boom Barriers",
    },
    highlights: [
      "Monumental 8-meter double-height cantilevered concrete canopy",
      "Thermal flamed black basalt masonry resistant to environmental weathering",
      "Seamless RFID boom barrier entry with zero vehicular queuing",
      "Dedicated pedestrian portal separated from heavy vehicle access",
    ],
    primaryImage: "/images/rovera-grand-double-height-gate.jpg",
    galleryImages: [
      { url: "/images/rovera-grand-double-height-gate.jpg", caption: "Monumental Basalt Gatehouse Perspective" },
    ],
  },
  {
    id: "bespoke-villa-architecture",
    number: "03",
    title: "Bespoke Villa Parcels & Typologies",
    subtitle: "Ground + 2 Floors • Sovereign Title • 4 Configurations",
    category: "RESIDENTIAL FREEDOM",
    leadNarrative:
      "Unlike rigid pre-fabricated villa developments, ROVERA confers complete architectural sovereignty upon each patron. Buyers receive clear, freehold title deeds with the absolute legal freedom to build their bespoke luxury residence (Ground + 2 Floors) within cohesive aesthetic design guidelines.",
    philosophy:
      "We provide four rigorously planned plot typologies, oriented to optimize natural solar trajectory and prevailing wind patterns. Whether commissioning a courtyard-centered family home or a sprawling multi-generational estate, the parcels offer unconstrained architectural expression.",
    specs: {
      extent: "1,500 Sq.Ft to 4,800 Sq.Ft Individual Parcels",
      typology: "Freehold Residential Villa Plots",
      materials: "Sub-grade Geotechnical Compaction & Grade A Soil Foundation",
      access: "Fronting 9m or 12m wide internal paved boulevards",
      zoning: "Ground + 2 Floors (Max 12m Building Height Permissible)",
      utilities: "Dedicated Water, Power & Telecom tap-off points at each plot boundary",
    },
    highlights: [
      "Courtyard Villa Parcel: 1,500 Sq.Ft (Intimate 3-4 BHK modern layout)",
      "Signature Sanctuary Plot: 2,400 Sq.Ft (Expansive 4-5 BHK luxury residence)",
      "Grand Estate Parcel: 3,500 Sq.Ft (Private pool, home theatre & garden suites)",
      "Bespoke Corner Estate: 4,200 – 4,800 Sq.Ft (Dual-road frontage with grand driveway)",
    ],
    primaryImage: "/images/rovera-internal-boulevard.jpg",
    galleryImages: [
      { url: "/images/rovera-master-plan-3acres.jpg", caption: "Master Parcel Zoning & Boundary Cadastral Matrix" },
      { url: "/images/rovera-internal-boulevard.jpg", caption: "Boulevard Facing Villa Parcels with Concealed Taps" },
    ],
  },
  {
    id: "wellness-pavilion-clubhouse",
    number: "04",
    title: "Private Wellness Pavilion & Club",
    subtitle: "Heated Lap Pool • Sunken Lounge • Resident Social Sanctuary",
    category: "COMMUNITY & LEISURE",
    leadNarrative:
      "The ROVERA Wellness Pavilion is an exclusive boutique clubhouse created for the private enjoyment of just 24 resident families. Designed with floor-to-ceiling panoramic glass walls and floating timber louvers, it blends indoor fitness with open-air water and garden terraces.",
    philosophy:
      "True community wellness requires uncrowded exclusivity. Featuring a heated leisure lap pool, sunken sun deck with water loungers, indoor strength and yoga atelier, and an intimate resident library lounge, the pavilion is an oasis of calm.",
    specs: {
      extent: "Approx. 6,500 Sq.Ft built wellness facility",
      typology: "Private Resident-Only Pavilion & Pool Deck",
      materials: "Travertine Stone, Honed Granite, Architectural Bronze, Glass",
      access: "Central community access adjoining the botanical spine",
      zoning: "Amenity Zone with Zero Commercial Intrusion",
      utilities: "Solar water heating, centralized pool filtration, smart climate control",
    },
    highlights: [
      "Full-length sunken leisure pool with submerged water loungers",
      "Double-height resident social lounge with fireplace and reading library",
      "Technogym-equipped indoor wellness atelier overlooking the gardens",
      "Private dining terrace for hosting intimate private resident soirees",
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
    leadNarrative:
      "Over 40% of ROVERA’s total geographic footprint is dedicated to unpaved ecological landscape. Designed by master landscape architects, the enclave incorporates preserved mature native trees, shaded cedar pergola walkways, and a Japanese-inspired Zen rock reflection court.",
    philosophy:
      "Landscape is not an afterthought; it is the structural framework of the community. Microclimate modulation via dense tree groves reduces ambient summer temperatures by up to 3°C, while dark-sky compliant warm amber bollards ensure zero light pollution under the open North Bangalore sky.",
    specs: {
      extent: "Over 40% of 3-Acre Master Site",
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
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.id === activeFilter);

  return (
    <div className="relative w-full bg-[#090D16] text-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Lightbox Modal */}
      {selectedLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
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
              alt="Full Resolution Architectural Render"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

      {/* Top Architectural Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#090D16]/90 backdrop-blur-md border-b border-white/10 py-4 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/developments/rovera"
            className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to ROVERA</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <span>ARCHITECTURAL DOSSIER</span>
            <span className="text-zinc-700">•</span>
            <span className="text-blue-400 font-semibold">5 DISCIPLINES</span>
          </div>

          <button
            type="button"
            onClick={() => setEnquiryModalOpen(true)}
            className="px-5 py-2 rounded-full bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow"
          >
            Schedule Visit
          </button>
        </div>
      </header>

      {/* Monumental Hero Title Banner (Yodezeen Editorial Aesthetic) */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-6 sm:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold mb-4">
            <span>PORTFOLIO &amp; SPECIFICATIONS</span>
            <span className="text-white/30">/</span>
            <span>ROVERA SANCTUARY</span>
          </div>
          <h1 className="font-componentry text-4xl sm:text-6xl lg:text-8xl font-light tracking-[-0.04em] text-white leading-none">
            ARCHITECTURAL DOSSIER
          </h1>
          <p className="mt-6 font-sans text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Every creation at ROVERA is an exercise in sovereign luxury. Explore the engineering, cadastral zoning, material palette, and spatial choreography across all five master disciplines.
          </p>

          {/* Filter Pills in Yodezeen Style */}
          <div className="flex flex-wrap gap-2.5 pt-10 sm:pt-14">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white text-black shadow-md"
                  : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              All Disciplines [05]
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
      </section>

      {/* Main Project Storytelling Sections (Sticky Split Layout in Yodezeen Style) */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 divide-y divide-white/10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="py-24 sm:py-32 scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column: Pinned / Sticky Project Narrative & Technical Specs */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
              
              {/* Project Index & Category */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-2xl font-light text-blue-400">
                  {project.number}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-componentry text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white leading-[1.08]">
                  {project.title}
                </h2>
                <p className="mt-2 font-mono text-xs text-blue-300 uppercase tracking-wide">
                  {project.subtitle}
                </p>
              </div>

              {/* Lead Narrative */}
              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {project.leadNarrative}
              </p>

              {/* Architectural Philosophy Callout */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 border-l-2 border-l-blue-400 space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400 font-semibold block">
                  Design Rationale &amp; Permanence
                </span>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{project.philosophy}&rdquo;
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="border border-white/10 rounded-2xl p-5 bg-[#0D1322] space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white font-semibold block border-b border-white/10 pb-2">
                  Technical Specifications
                </span>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 uppercase">Scale:</span>
                    <span className="text-right text-zinc-200">{project.specs.extent}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 uppercase">Typology:</span>
                    <span className="text-right text-zinc-200">{project.specs.typology}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 uppercase">Materials:</span>
                    <span className="text-right text-zinc-200">{project.specs.materials}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 uppercase">Zoning:</span>
                    <span className="text-right text-zinc-200">{project.specs.zoning}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-zinc-500 uppercase">Utilities:</span>
                    <span className="text-right text-zinc-200">{project.specs.utilities}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block font-semibold">
                  Engineering Benchmarks:
                </span>
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setEnquiryModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-mono text-xs uppercase tracking-[0.15em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Technical Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Full-Bleed Architectural Plates & Render Gallery */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Primary Architectural Plate */}
              <div
                onClick={() => setSelectedLightboxImage(project.primaryImage)}
                className="group relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-zinc-900"
              >
                <Image
                  src={project.primaryImage}
                  alt={project.title}
                  fill
                  priority
                  quality={95}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 text-white font-mono text-xs bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Click to view full architectural scale</span>
                </div>
              </div>

              {/* Secondary Gallery Plates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedLightboxImage(img.url)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer bg-zinc-900"
                  >
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      quality={92}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-white font-mono text-[11px] leading-tight line-clamp-2 bg-black/50 backdrop-blur-xs p-2 rounded-lg border border-white/10 pointer-events-none">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </article>
        ))}
      </main>

      {/* Infinite Next-Project Navigation Bar at the Bottom */}
      <footer className="border-t border-white/10 py-16 sm:py-24 px-6 sm:px-12 bg-[#060A12]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold block mb-2">
              STTHIRA DEVELOPMENTS
            </span>
            <p className="font-componentry text-2xl sm:text-3xl font-light text-white">
              Ready to walk the sanctuary grounds?
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/developments/rovera#reserve"
              className="px-8 py-4 rounded-full bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
            >
              Book Private Chauffeured Tour
            </Link>
            <Link
              href="/developments/rovera"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
            >
              Return to Overview
            </Link>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        projectName="ROVERA — Architectural Dossier & Site Inspection"
      />
    </div>
  );
}
