"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Trees,
  ShieldCheck,
  Building2,
  Phone,
  ArrowUpRight,
  Sparkles,
  Layers,
  Compass,
  CheckCircle2,
  ChevronDown,
  Maximize2,
  Eye,
  KeyRound,
  Waves,
  Car,
  Lock,
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import EnquiryModal from "@/components/EnquiryModal";
import EnquiryForm from "@/components/EnquiryForm";
import StthiraEmblem from "@/components/StthiraEmblem";
import DotMatrixNumber from "@/components/ui/DotMatrixNumber";
import ScrambleText from "@/components/ui/ScrambleText";

export default function RoveraView() {
  const rovera = DEVELOPMENTS[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>("ROVERA — Phase 1 Villa Plot");
  const [activePlotTab, setActivePlotTab] = useState<number>(0);

  const openEnquiry = (plotName?: string) => {
    setSelectedPlot(plotName ? `ROVERA — ${plotName}` : "ROVERA (Devanahalli–Doddaballapura Road)");
    setModalOpen(true);
  };

  const plotConfigurations = [
    {
      id: "exec",
      name: "Courtyard Villa Parcel",
      dimension: "30' × 50'",
      areaSqFt: "1,500 Sq.Ft",
      facing: "East & North Options",
      idealFor: "Contemporary 3–4 BHK courtyard residences with private light wells and plunge garden.",
      badge: "6 Exclusive Parcels",
      coverage: "Ground + 2 Floors Permitted",
    },
    {
      id: "sign",
      name: "Signature Sanctuary Plot",
      dimension: "40' × 60'",
      areaSqFt: "2,400 Sq.Ft",
      facing: "Boulevard & Garden Fronting",
      idealFor: "Expansive 4–5 BHK luxury estates with double-height living salons, infinity plunge pools, and 2-car porticos.",
      badge: "12 Premier Parcels",
      coverage: "Ground + 2 Floors + Terrace Lounge",
    },
    {
      id: "grand",
      name: "Grand Estate Parcel",
      dimension: "50' × 70'",
      areaSqFt: "3,500 Sq.Ft",
      facing: "Central Park Facing",
      idealFor: "Grand architectural villas with landscaped setbacks, private swimming pavilion, and staff quarters.",
      badge: "4 Limited Parcels",
      coverage: "Sprawling Multi-Level Mansion",
    },
    {
      id: "sov",
      name: "Bespoke Corner Estate",
      dimension: "Custom Dimension",
      areaSqFt: "4,200 – 4,800 Sq.Ft",
      facing: "Dual-Road Panoramic Frontage",
      idealFor: "Flagship intergenerational trophy residences with uninterrupted private driveway and expansive lawn.",
      badge: "2 Trophy Parcels",
      coverage: "Signature Sovereign Villa",
    },
  ];

  const amenities = [
    {
      title: "Double-Height Monumental Gatehouse",
      category: "Architecture & Security",
      spec: "8-Meter Cantilevered Portal",
      description: "Monumental flamed basalt portal with dual-lane automated RFID boom barriers, biometric visitor logging, and 24/7 security cabin.",
      image: "/images/rovera-grand-double-height-gate.jpg",
    },
    {
      title: "The Lagos Club Pavilion",
      category: "Private Social Club",
      spec: "Boutique Resident Clubhouse",
      description: "Monolithic flamed stone & glass pavilion featuring a resident library salon, private dining lounge, and executive concierge desk.",
      image: "/images/rovera-boutique-clubhouse.jpg",
    },
    {
      title: "Aura Reflection Lap Pool",
      category: "Aquatics & Wellness",
      spec: "Black Granite Infinity Edge",
      description: "Surrounded by honed black basalt decking, submerged sun loungers, private cabanas, and integrated hydrotherapy massage jets.",
      image: "/images/rovera-wellness.jpg",
    },
    {
      title: "Verdant Paved Boulevards",
      category: "Infrastructure",
      spec: "40-Ft & 30-Ft Tree Canopies",
      description: "Cobblestone paved arterial lanes with 100% underground high-voltage utility ducts, dual-line water conduits, and concealed storm aquifers.",
      image: "/images/rovera-internal-boulevard.jpg",
    },
  ];

  const connectivityList = [
    {
      destination: "STRR (Satellite Town Ring Road)",
      time: "5 Mins",
      distance: "3.5 km",
      category: "Corridor Access",
      note: "Instant signal-free arterial ring road connectivity",
    },
    {
      destination: "Foxconn Mega Campus & ITIR Belt",
      time: "12 Mins",
      distance: "9.0 km",
      category: "Global Tech SEZ",
      note: "Multi-billion dollar semiconductor & tech investment zone",
    },
    {
      destination: "Devanahalli Aerotropolis & SEZ",
      time: "14 Mins",
      distance: "11 km",
      category: "Business Hub",
      note: "Upcoming aerospace park, corporate campuses & luxury hotels",
    },
    {
      destination: "Kempegowda International Airport (BLR)",
      time: "20 Mins",
      distance: "16 km",
      category: "International Transit",
      note: "Fast-track access via expressway without traffic choke points",
    },
    {
      destination: "Stonehill & Canadian International",
      time: "18 Mins",
      distance: "15 km",
      category: "Education",
      note: "Premier IB world schools in North Bengaluru",
    },
    {
      destination: "Hebbal Flyover / Outer Ring Road",
      time: "30 Mins",
      distance: "28 km",
      category: "City Center Access",
      note: "Smooth connectivity via NH 44 elevated corridor",
    },
  ];

  return (
    <div className="bg-[#030705] text-white font-sans selection:bg-emerald-900 selection:text-white">
      {/* 01. FULL-BLEED CINEMATIC HERO (Deep Black & Dark Green Lagos Style) */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030705] pt-24 pb-16">
        {/* Background Visual Render: Monumental Double-Height Gate at Dusk */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rovera-grand-double-height-gate.jpg"
            alt="ROVERA — Double-Height Entrance Gates"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-105 filter brightness-85 contrast-110"
          />
          {/* Deep Black & Dark Green Atmospheric Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-[#030705]/60 to-[#030705]/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030705]/90 via-[#071912]/40 to-[#030705]/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[#061a12]/20 mix-blend-color pointer-events-none" />
        </div>

        {/* Hero Narrative Layer */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center pt-8">
          {/* Location & Status Tag */}
          <div className="inline-flex items-center gap-2.5 border border-emerald-500/30 bg-[#071a12]/80 backdrop-blur-md px-5 py-2 mb-8 shadow-2xl rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-emerald-200 font-sans font-medium">
              3 ACRES BOUTIQUE SANCTUARY • NORTH BENGALURU
            </span>
          </div>

          {/* Official ROVERA Brand Mark */}
          <div className="relative h-20 sm:h-28 md:h-36 lg:h-40 aspect-[3.4/1] mb-6 select-none shrink-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <Image
              src="/images/rovera-logo-white.png"
              alt="ROVERA"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 480px"
              className="object-contain object-center"
            />
          </div>

          {/* Gallic Editorial Headline with Scramble Text */}
          <div className="max-w-4xl mx-auto mb-6">
            <ScrambleText
              text="SANCTUARY OF TIMELESS PLOTTED RESIDENCE"
              as="h1"
              className="font-galric text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.06em] uppercase text-white leading-tight drop-shadow-xl"
              scrambleDuration={900}
            />
          </div>

          {/* Location & Story Lead */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-10 px-4">
            An intimate 3-acre gated enclave situated along the prestigious Devanahalli – Doddaballapura Road in North Bengaluru. Conceived with monumental double-height flamed basalt gates, 100% underground infrastructure, and only 24 bespoke villa parcels.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-black px-9 py-4 font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:bg-emerald-100 hover:text-black transition-all duration-300 shadow-2xl cursor-pointer"
            >
              <span>Schedule Private Walkthrough</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#masterplan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-emerald-700/50 hover:border-emerald-400 bg-[#071a12]/60 backdrop-blur-sm text-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] hover:bg-[#0b281c] transition-all duration-300 cursor-pointer"
            >
              <span>Explore Masterplan</span>
              <ChevronDown className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* 4 Essential Numbers in Dot Matrix on Hero */}
          <div className="pt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl border-t border-emerald-950/80 mt-12">
            <div className="p-4 bg-[#071a12]/40 border border-emerald-900/30 backdrop-blur-xs text-left">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                Total Enclave Scale
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-galric text-3xl font-light text-white">3.0</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">Acres</span>
              </div>
            </div>
            <div className="p-4 bg-[#071a12]/40 border border-emerald-900/30 backdrop-blur-xs text-left">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                Limited Parcels
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-galric text-3xl font-light text-white">24</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">Villa Plots</span>
              </div>
            </div>
            <div className="p-4 bg-[#071a12]/40 border border-emerald-900/30 backdrop-blur-xs text-left">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                Grand Portal Entry
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-galric text-3xl font-light text-white">8M</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">Double Height</span>
              </div>
            </div>
            <div className="p-4 bg-[#071a12]/40 border border-emerald-900/30 backdrop-blur-xs text-left">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                Airport Proximity
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-galric text-3xl font-light text-white">20</span>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans">Mins to BLR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. STICKY ENCLAVE NAVIGATION STRIP */}
      <nav aria-label="Rovera Sections" className="sticky top-[64px] sm:top-[72px] z-40 bg-[#030705]/95 backdrop-blur-md border-y border-emerald-950/80 py-3.5 px-4 overflow-x-auto scrollbar-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-neutral-400 whitespace-nowrap font-medium">
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#gates" className="hover:text-emerald-400 transition-colors">
              Double-Height Gates
            </a>
            <a href="#masterplan" className="hover:text-emerald-400 transition-colors">
              3-Acre Masterplan
            </a>
            <a href="#plots" className="hover:text-emerald-400 transition-colors">
              Plot Matrix
            </a>
            <a href="#amenities" className="hover:text-emerald-400 transition-colors">
              Boutique Amenities
            </a>
            <a href="#location" className="hover:text-emerald-400 transition-colors">
              Doddaballapura Corridor
            </a>
          </div>
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="text-white hover:text-emerald-300 transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* 03. MONUMENTAL DOUBLE-HEIGHT ENTRANCE GATES SHOWCASE (User Focus Requirement) */}
      <section id="gates" className="py-20 sm:py-32 bg-[#040806] border-b border-emerald-950/80 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Section Header with ScrambleText */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium block mb-2">
              Architectural Entrance Statement
            </span>
            <ScrambleText
              text="MONUMENTAL DOUBLE-HEIGHT GRAND ENTRANCE GATES"
              as="h2"
              className="font-galric text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-wide text-white leading-tight"
            />
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Designed as a ceremonial threshold of permanence, the double-height entrance portal of ROVERA commands an imposing 8-meter architectural scale on the Devanahalli–Doddaballapura corridor.
            </p>
          </div>

          {/* Hero Gate Render Plate */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-emerald-900/40 shadow-2xl mb-12 bg-[#071a12]">
            <Image
              src="/images/rovera-grand-double-height-gate.jpg"
              alt="ROVERA Double-Height Entrance Gates"
              fill
              priority
              className="object-cover object-center filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300 block mb-1">
                  Plot Entry Gatehouse
                </span>
                <p className="font-galric text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  Cantilevered Flamed Basalt &amp; Ribbed Concrete Portal
                </p>
              </div>
              <span className="bg-[#030705]/80 backdrop-blur-md border border-emerald-800/40 px-4 py-2 text-[10px] uppercase tracking-widest text-emerald-300 self-start sm:self-auto rounded">
                24/7 RFID &amp; Biometric Protocol
              </span>
            </div>
          </div>

          {/* 3 Engineering Pillars of the Double-Height Gate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-[#071a12]/30 border border-emerald-950 rounded-lg space-y-3 hover:border-emerald-600/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Maximize2 className="w-5 h-5" />
              </div>
              <h3 className="font-galric text-2xl uppercase tracking-wide text-white font-normal">
                8-Meter Monumental Height
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                A majestic double-height cantilevered concrete canopy spanning both inbound and outbound lanes, clad in flamed South Indian black basalt with architectural timber louvers.
              </p>
            </div>

            <div className="p-7 bg-[#071a12]/30 border border-emerald-950 rounded-lg space-y-3 hover:border-emerald-600/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-galric text-2xl uppercase tracking-wide text-white font-normal">
                Dual-Lane Access Control
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Automated RFID long-range boom barriers, automated license plate recognition (ANPR), and a dedicated air-conditioned concierge gatehouse with integrated resident intercom.
              </p>
            </div>

            <div className="p-7 bg-[#071a12]/30 border border-emerald-950 rounded-lg space-y-3 hover:border-emerald-600/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-galric text-2xl uppercase tracking-wide text-white font-normal">
                Architectural Twilight Uplighting
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Recessed ground channel LED illumination casting warm architectural grazing light up the textured basalt slabs, paired with illuminated ROVERA stainless-steel insignia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. 3-ACRE MASTERPLAN SANCTUARY (Lagos Plotted Enclave Language) */}
      <section id="masterplan" className="py-20 sm:py-32 bg-[#030705] border-b border-emerald-950/80 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Masterplan Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium block">
                Boutique Low-Density Living
              </span>
              <ScrambleText
                text="AN INTIMATE 3-ACRE MASTERPLAN"
                as="h2"
                className="font-galric text-3xl sm:text-5xl font-light uppercase tracking-wide text-white leading-tight"
              />
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                Unlike sprawling mega-townships where privacy is diluted, ROVERA spans an intimate 3 acres exclusively demarcated for just 24 bespoke villa plots. Every square yard is planned with institutional engineering discipline.
              </p>

              {/* 4 Infrastructure Commitments */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-galric text-lg uppercase tracking-wider text-white">
                      100% Underground Utilities
                    </h4>
                    <p className="text-neutral-400 text-xs font-light">
                      Zero overhead cables. Concealed 11kV electrical feeder cables, dual plumbing lines, storm drains, and fiber-to-the-plot terminations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-galric text-lg uppercase tracking-wider text-white">
                      Cobblestone Tree-Lined Boulevards
                    </h4>
                    <p className="text-neutral-400 text-xs font-light">
                      40-foot main entrance boulevard and 30-foot internal avenues paved with interlocked granite pavers and pedestrian bioswales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-galric text-lg uppercase tracking-wider text-white">
                      Native Botanical Microclimate
                    </h4>
                    <p className="text-neutral-400 text-xs font-light">
                      Conserved indigenous tree species, aromatic herbal border gardens, and deep groundwater recharge pits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Masterplan Aerial Perspective */}
            <div className="lg:col-span-7 relative aspect-[16/11] rounded-xl overflow-hidden border border-emerald-900/40 shadow-2xl bg-[#071a12]">
              <Image
                src="/images/rovera-aerial-3acres.jpg"
                alt="ROVERA 3-Acre Masterplan Aerial"
                fill
                priority
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030705]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-galric text-lg uppercase tracking-wider">
                  24 Curated Parcels • 3.0 Acres
                </span>
                <span className="bg-black/80 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-emerald-300 font-mono">
                  Zoning Cadastral Layout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. PLOT MATRIX & CONFIGURATIONS */}
      <section id="plots" className="py-20 sm:py-32 bg-[#040806] border-b border-emerald-950/80 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium block mb-2">
                Plot Matrix
              </span>
              <ScrambleText
                text="FOUR BESPOKE PLOT CONFIGURATIONS"
                as="h2"
                className="font-galric text-3xl sm:text-5xl font-light uppercase tracking-wide text-white leading-tight"
              />
            </div>
            <button
              type="button"
              onClick={() => openEnquiry("Complete Plot Matrix & Pricing Dossier")}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-emerald-100 transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>Download Plot Map</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Plot Configuration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plotConfigurations.map((plot, idx) => (
              <div
                key={plot.id}
                className="bg-[#071a12]/30 border border-emerald-950 hover:border-emerald-600/50 rounded-xl p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-emerald-950/80 pb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-sans font-semibold">
                      {plot.badge}
                    </span>
                    <span className="font-galric text-xl font-light text-white">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-galric text-2xl sm:text-3xl uppercase tracking-wider text-white mb-2">
                    {plot.name}
                  </h3>

                  {/* Dimension & Area Highlights */}
                  <div className="grid grid-cols-2 gap-4 my-4 p-4 bg-[#030705]/60 border border-emerald-900/30 rounded">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                        Dimensions
                      </span>
                      <span className="font-galric text-xl text-white font-medium">
                        {plot.dimension}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                        Parcel Area
                      </span>
                      <span className="font-galric text-xl text-emerald-300 font-medium">
                        {plot.areaSqFt}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {plot.idealFor}
                  </p>

                  <div className="text-[11px] text-neutral-400 font-sans flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{plot.coverage}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiry(plot.name)}
                  className="w-full inline-flex items-center justify-center gap-2 border border-emerald-800/40 hover:border-emerald-400 bg-[#071a12]/60 hover:bg-[#0b281c] text-white py-3 px-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer rounded"
                >
                  <span>Enquire for {plot.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. BOUTIQUE AMENITIES & LIFESTYLE */}
      <section id="amenities" className="py-20 sm:py-32 bg-[#030705] border-b border-emerald-950/80 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium block mb-2">
              Private Sanctuaries
            </span>
            <ScrambleText
              text="EXCLUSIVE BOUTIQUE AMENITIES"
              as="h2"
              className="font-galric text-3xl sm:text-5xl font-light uppercase tracking-wide text-white leading-tight"
            />
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Tailored for 24 families, the leisure infrastructure at ROVERA offers uncrowded, private spaces for restorative living, health, and cultural contemplation.
            </p>
          </div>

          {/* 4 Amenity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="bg-[#071a12]/20 border border-emerald-950 hover:border-emerald-600/40 rounded-xl overflow-hidden flex flex-col justify-between transition-colors group shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full bg-[#071a12] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#030705]/80 backdrop-blur-xs text-emerald-300 text-[10px] uppercase tracking-widest px-3 py-1 rounded border border-emerald-800/40">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono block">
                    {item.spec}
                  </span>
                  <h3 className="font-galric text-2xl uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. STRATEGIC LOCATION: DODDABALLAPURA ROAD & STRR (Lagos Project Location) */}
      <section id="location" className="py-20 sm:py-32 bg-[#040806] border-b border-emerald-950/80 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-medium block mb-2">
              North Bengaluru Growth Axis
            </span>
            <ScrambleText
              text="DEVANAHALLI – DODDABALLAPURA ROAD CORRIDOR"
              as="h2"
              className="font-galric text-3xl sm:text-5xl font-light uppercase tracking-wide text-white leading-tight"
            />
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Positioned at the nexus of the Satellite Town Ring Road (STRR), Foxconn Mega Campus, and Kempegowda International Airport — one of South India&apos;s most dynamic real estate corridors.
            </p>
          </div>

          {/* Connectivity Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {connectivityList.map((item) => (
              <div
                key={item.destination}
                className="bg-[#071a12]/30 border border-emerald-950 p-6 rounded-xl space-y-3 hover:border-emerald-600/40 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-emerald-950/80 pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
                    {item.distance}
                  </span>
                  <span className="font-galric text-3xl text-white font-normal">
                    {item.time}
                  </span>
                </div>
                <div>
                  <h4 className="font-galric text-xl uppercase tracking-wider text-white">
                    {item.destination}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-300 block mt-1">
                    {item.category}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs font-light leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Location Key Takeaway Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#071a12] via-[#0b281c] to-[#071a12] border border-emerald-800/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300 font-mono">
                Direct Strategic Highway Frontage
              </span>
              <h3 className="font-galric text-2xl sm:text-3xl uppercase tracking-wider text-white">
                Devanahalli–Doddaballapura Road (State Highway 9)
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm font-light">
                Adjacent to upcoming 300-acre aerospace &amp; hardware park, Foxconn facility, and high-speed STRR interchange.
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded text-xs uppercase tracking-[0.2em] font-semibold hover:bg-emerald-100 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>View Route Map</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 08. STATUTORY TRANSPARENCY & RERA DISCLOSURE */}
      <section className="py-12 sm:py-16 bg-[#030705] border-b border-emerald-950/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border border-emerald-950 bg-[#071a12]/20 rounded-xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                Statutory Due Diligence &amp; Legal Purity
              </span>
            </div>
            <h3 className="font-galric text-xl sm:text-2xl uppercase tracking-wider text-white">
              STATUTORY APPROVALS &amp; RERA DISCLOSURE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              ROVERA is an exclusive 3-acre plotted development by STTHIRA Developments Private Limited, located on Devanahalli–Doddaballapura Road in North Bengaluru. Comprehensive cadastral survey boundaries and 30-year certified title search reports are available for private legal inspection at our corporate headquarters for registered prospective buyers. In accordance with statutory RERA regulations, formal allotment will be executed upon statutory certificate issuance.
            </p>
          </div>
        </div>
      </section>

      {/* 09. SCHEDULE PRIVATE WALKTHROUGH & CONCIERGE ENQUIRY */}
      <section id="enquiry" className="relative py-20 sm:py-32 bg-[#040806] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Box */}
            <div className="md:col-span-5 bg-[#071a12]/40 border border-emerald-900/40 rounded-2xl p-8 sm:p-10 space-y-5 shadow-2xl">
              <StthiraEmblem className="text-white w-9 h-11" />
              <ScrambleText
                text="SCHEDULE PRIVATE WALKTHROUGH"
                as="h2"
                className="font-galric text-3xl sm:text-4xl uppercase tracking-tight text-white font-light leading-tight"
              />
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                Connect with our direct concierge desk to schedule a private, chauffeured site visit to the ROVERA 3-acre enclave on Devanahalli–Doddaballapura Road.
              </p>
              <div className="pt-4 border-t border-emerald-950/80">
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 block mb-1">
                  Direct Concierge Desk
                </span>
                <a
                  href="tel:+918049208800"
                  className="font-galric text-2xl font-light text-white hover:text-emerald-300 transition-colors"
                >
                  +91 80 4920 8800
                </a>
              </div>
            </div>

            {/* Right Clean Form */}
            <div className="md:col-span-7">
              <EnquiryForm
                defaultDevelopment="ROVERA (Devanahalli–Doddaballapura Road)"
                defaultType="Schedule Site Visit"
                className="bg-[#071a12]/80 backdrop-blur-md shadow-2xl rounded-2xl border-emerald-900/40 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={selectedPlot}
      />
    </div>
  );
}
