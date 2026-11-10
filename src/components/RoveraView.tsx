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
  Volume2,
  VolumeX,
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import EnquiryModal from "@/components/EnquiryModal";
import EnquiryForm from "@/components/EnquiryForm";
import StthiraEmblem from "@/components/StthiraEmblem";

export default function RoveraView() {
  const rovera = DEVELOPMENTS[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>("ROVERA — Phase 1 Villa Plot");

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
      title: "Monumental Double-Height Gatehouse",
      category: "Architecture & Security",
      spec: "8-Meter Cantilevered Portal",
      description: "Imposing flamed black basalt portal with automated RFID boom barriers, biometric visitor logging, and 24/7 concierge security cabin.",
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
      title: "Aura Vitality Spa & Wellness Pavilion",
      category: "Aquatics & Wellness",
      spec: "Hydrotherapy Vitality Pool",
      description: "Indoor-outdoor hydrotherapy vitality spa pavilion featuring flamed granite walls, teak wood slatted ceilings, plush loungers, and serene bamboo zen garden views.",
      image: "/images/rovera-wellness-pavilion.jpg",
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
    <div className="bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 01. CHEETAH CINEMATIC HERO SECTION (Clean White / Parchment Backdrop) */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafaf8] pt-28 pb-16 border-b border-neutral-200">
        {/* Background Video: ROVERA 3D Cheetah Motion Video */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/cheetah_frame_50.jpg"
            className="w-full h-full object-cover object-center scale-100 opacity-95 transition-opacity duration-1000"
          >
            <source src="/videos/rovera-cheetah-hero.mp4" type="video/mp4" />
            <source src="/videos/rovera-cheetah-loop.mp4" type="video/mp4" />
          </video>
          {/* Subtle Clean Vignette Gradients for High Legibility on Crisp White */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90 pointer-events-none" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
          {/* Subtle Architectural Badge */}
          <div className="inline-flex items-center gap-2.5 border border-neutral-300 bg-white/90 backdrop-blur-md px-5 py-2 mb-8 shadow-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-neutral-700 font-jakarta font-semibold">
              3 ACRES BOUTIQUE SANCTUARY • NORTH BENGALURU
            </span>
          </div>

          {/* Official ROVERA Brand Wordmark (Crisp & High-Contrast) */}
          <div className="relative h-16 sm:h-24 md:h-32 lg:h-36 aspect-[3.4/1] mb-6 select-none shrink-0 drop-shadow-sm">
            <Image
              src="/images/rovera-logo-dark.png"
              alt="ROVERA"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, 460px"
              className="object-contain object-center"
            />
          </div>

          {/* Modern Haute-Couture Architectural Headline (Italiana Luxury Serif) */}
          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.04em] uppercase text-neutral-900 leading-[1.05] max-w-4xl mb-6">
            SANCTUARY OF TIMELESS PLOTTED RESIDENCE
          </h1>

          {/* Clean Editorial Lead */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-700 font-light leading-relaxed mb-10 px-4 font-jakarta">
            An intimate 3-acre private enclave on the Devanahalli – Doddaballapura Road in North Bengaluru. Grounded in the poised grace of the cheetah, featuring monumental double-height flamed basalt gates, 100% underground infrastructure, and only 24 bespoke villa parcels.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black text-white px-9 py-4 font-jakarta text-xs uppercase tracking-[0.25em] font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-md cursor-pointer rounded"
            >
              <span>Schedule Private Walkthrough</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#cheetah-totem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-black bg-white/95 text-neutral-900 px-8 py-4 font-jakarta text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-50 transition-all duration-300 cursor-pointer rounded shadow-xs"
            >
              <span>The Cheetah Spirit</span>
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            </a>
          </div>

          {/* 4 Essential Numbers in Minimalist Clean Grid */}
          <div className="pt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl border-t border-neutral-200 mt-12 text-left">
            <div className="p-4 bg-white/90 border border-neutral-200 rounded-lg shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1 font-jakarta font-medium">
                Total Enclave Scale
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-luxury text-3xl text-neutral-950 font-normal">3.0</span>
                <span className="text-xs uppercase tracking-wider text-neutral-600 font-jakarta">Acres</span>
              </div>
            </div>
            <div className="p-4 bg-white/90 border border-neutral-200 rounded-lg shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1 font-jakarta font-medium">
                Limited Parcels
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-luxury text-3xl text-neutral-950 font-normal">24</span>
                <span className="text-xs uppercase tracking-wider text-neutral-600 font-jakarta">Villa Plots</span>
              </div>
            </div>
            <div className="p-4 bg-white/90 border border-neutral-200 rounded-lg shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1 font-jakarta font-medium">
                Grand Portal Entry
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-luxury text-3xl text-neutral-950 font-normal">8M</span>
                <span className="text-xs uppercase tracking-wider text-neutral-600 font-jakarta">Double Height</span>
              </div>
            </div>
            <div className="p-4 bg-white/90 border border-neutral-200 rounded-lg shadow-xs">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1 font-jakarta font-medium">
                Airport Proximity
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-luxury text-3xl text-neutral-950 font-normal">20</span>
                <span className="text-xs uppercase tracking-wider text-neutral-600 font-jakarta">Mins to BLR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. CLEAN STICKY ENCLAVE NAVIGATION */}
      <nav aria-label="Rovera Sections" className="sticky top-[58px] sm:top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3 px-4 overflow-x-auto scrollbar-none shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 text-[11px] uppercase tracking-[0.22em] text-neutral-600 whitespace-nowrap font-jakarta font-medium">
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#cheetah-totem" className="hover:text-black transition-colors">
              The Cheetah Totem
            </a>
            <a href="#gates" className="hover:text-black transition-colors">
              Double-Height Gates
            </a>
            <a href="#masterplan" className="hover:text-black transition-colors">
              3-Acre Masterplan
            </a>
            <a href="#plots" className="hover:text-black transition-colors">
              Plot Matrix
            </a>
            <a href="#amenities" className="hover:text-black transition-colors">
              Boutique Amenities
            </a>
            <a href="#location" className="hover:text-black transition-colors">
              Doddaballapura Corridor
            </a>
          </div>
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="text-black hover:text-neutral-600 transition-colors flex items-center gap-1.5 shrink-0 font-semibold"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* 03. HIGHLIGHT THE CHEETAH: THE ANIMAL TOTEM OF ROVERA */}
      <section id="cheetah-totem" className="py-20 sm:py-32 bg-white border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Fine-Art Cheetah Stage */}
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#fafaf8] border border-neutral-200 flex items-center justify-center p-6 shadow-sm">
              <Image
                src="/images/rovera-cheetah-beside-retina.png"
                alt="ROVERA — The Cheetah Totem"
                fill
                priority
                quality={95}
                className="object-contain object-center p-4 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded text-[10px] uppercase tracking-widest font-jakarta font-medium">
                The ROVERA Totem
              </div>
            </div>

            {/* Right Narrative Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-500 font-jakarta font-medium">
                <span className="w-6 h-px bg-neutral-400" />
                <span>The Sovereign Spirit</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-5xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
                THE CHEETAH: POISED AGILITY &amp; UNTAMED GRACE
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed font-jakarta">
                ROVERA adopts the cheetah as its singular brand totem — a living metaphor for effortless architectural balance, quiet focus, and natural sovereignty. In nature, the cheetah moves with supreme precision, claiming its territory not through loud aggression, but through dignified poise and aerodynamic speed.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
                <div>
                  <h4 className="font-luxury text-xl uppercase tracking-wider text-neutral-900 mb-1">
                    Solitary Territory
                  </h4>
                  <p className="text-neutral-600 text-xs font-light leading-relaxed font-jakarta">
                    Just 24 secluded villa parcels nestled within an intimate 3-acre gated perimeter for unmatched residential privacy.
                  </p>
                </div>
                <div>
                  <h4 className="font-luxury text-xl uppercase tracking-wider text-neutral-900 mb-1">
                    Poised Permanence
                  </h4>
                  <p className="text-neutral-600 text-xs font-light leading-relaxed font-jakarta">
                    Brutalist flamed basalt architecture and concealed infrastructure built to endure across generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. MONUMENTAL DOUBLE-HEIGHT ENTRANCE GATES SHOWCASE */}
      <section id="gates" className="py-20 sm:py-32 bg-[#fafaf8] border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-jakarta font-semibold block mb-2">
              Architectural Entrance Statement
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
              MONUMENTAL DOUBLE-HEIGHT GRAND ENTRANCE GATES
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 font-light leading-relaxed font-jakarta">
              Designed as a ceremonial threshold of permanence, the double-height entrance portal of ROVERA commands an imposing 8-meter architectural scale on the Devanahalli–Doddaballapura corridor.
            </p>
          </div>

          {/* Hero Gate Render Plate */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-xl mb-12 bg-neutral-900">
            <Image
              src="/images/rovera-grand-double-height-gate.jpg"
              alt="ROVERA Double-Height Entrance Gates"
              fill
              priority
              quality={95}
              className="object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 block mb-1 font-jakarta font-medium">
                  Plot Entry Gatehouse
                </span>
                <p className="font-luxury text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  Cantilevered Flamed Basalt &amp; Ribbed Concrete Portal
                </p>
              </div>
              <span className="bg-white text-black px-4 py-2 text-[10px] uppercase tracking-widest font-jakarta font-semibold self-start sm:self-auto rounded shadow">
                24/7 RFID &amp; Biometric Protocol
              </span>
            </div>
          </div>

          {/* 3 Engineering Pillars of the Double-Height Gate */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white border border-neutral-200 rounded-xl space-y-3 hover:border-black transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4">
                <Maximize2 className="w-5 h-5" />
              </div>
              <h3 className="font-luxury text-2xl uppercase tracking-wide text-neutral-900 font-normal">
                8-Meter Monumental Height
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed font-jakarta">
                A majestic double-height cantilevered concrete canopy spanning both inbound and outbound lanes, clad in flamed South Indian black basalt with architectural timber louvers.
              </p>
            </div>

            <div className="p-7 bg-white border border-neutral-200 rounded-xl space-y-3 hover:border-black transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-luxury text-2xl uppercase tracking-wide text-neutral-900 font-normal">
                Dual-Lane Access Control
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed font-jakarta">
                Automated RFID long-range boom barriers, automated license plate recognition (ANPR), and a dedicated air-conditioned concierge gatehouse with integrated resident intercom.
              </p>
            </div>

            <div className="p-7 bg-white border border-neutral-200 rounded-xl space-y-3 hover:border-black transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-luxury text-2xl uppercase tracking-wide text-neutral-900 font-normal">
                Architectural Twilight Uplighting
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed font-jakarta">
                Recessed ground channel LED illumination casting warm architectural grazing light up the textured basalt slabs, paired with illuminated ROVERA stainless-steel insignia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. 3-ACRE MASTERPLAN SANCTUARY */}
      <section id="masterplan" className="py-20 sm:py-32 bg-white border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Masterplan Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-jakarta font-semibold block">
                Boutique Low-Density Living
              </span>
              <h2 className="font-luxury text-3xl sm:text-5xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
                AN INTIMATE 3-ACRE MASTERPLAN
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed font-jakarta">
                Unlike sprawling mega-townships where privacy is compromised, ROVERA spans an intimate 3 acres exclusively demarcated for just 24 bespoke villa plots. Every square yard is planned with institutional civil engineering.
              </p>

              {/* 3 Infrastructure Commitments */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-luxury text-lg uppercase tracking-wider text-neutral-900">
                      100% Underground Utilities
                    </h4>
                    <p className="text-neutral-600 text-xs font-light font-jakarta">
                      Zero overhead cables. Concealed 11kV electrical feeder cables, dual plumbing lines, storm drains, and fiber-to-the-plot terminations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-luxury text-lg uppercase tracking-wider text-neutral-900">
                      Cobblestone Tree-Lined Boulevards
                    </h4>
                    <p className="text-neutral-600 text-xs font-light font-jakarta">
                      40-foot main entrance boulevard and 30-foot internal avenues paved with interlocked granite pavers and pedestrian bioswales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-luxury text-lg uppercase tracking-wider text-neutral-900">
                      Native Botanical Microclimate
                    </h4>
                    <p className="text-neutral-600 text-xs font-light font-jakarta">
                      Conserved indigenous tree species, aromatic herbal border gardens, and deep groundwater recharge pits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Masterplan Aerial Perspective */}
            <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
              <Image
                src="/images/rovera-aerial-3acres.jpg"
                alt="ROVERA 3-Acre Masterplan Aerial"
                fill
                priority
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-luxury text-xl uppercase tracking-wider">
                  24 Curated Parcels • 3.0 Acres
                </span>
                <span className="bg-white text-black px-3 py-1 rounded text-[10px] uppercase tracking-widest font-jakarta font-semibold">
                  Zoning Cadastral Layout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PLOT MATRIX & CONFIGURATIONS */}
      <section id="plots" className="py-20 sm:py-32 bg-[#fafaf8] border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-jakarta font-semibold block mb-2">
                Plot Matrix
              </span>
              <h2 className="font-luxury text-3xl sm:text-5xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
                FOUR BESPOKE PLOT CONFIGURATIONS
              </h2>
            </div>
            <button
              type="button"
              onClick={() => openEnquiry("Complete Plot Matrix & Pricing Dossier")}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 font-jakarta text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto cursor-pointer rounded shadow-sm"
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
                className="bg-white border border-neutral-200 hover:border-black rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group shadow-xs hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-neutral-100 pb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-600 font-jakarta font-bold">
                      {plot.badge}
                    </span>
                    <span className="font-luxury text-2xl font-normal text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-luxury text-2xl sm:text-3xl uppercase tracking-wider text-neutral-950 mb-2 font-normal">
                    {plot.name}
                  </h3>

                  {/* Dimension & Area Highlights */}
                  <div className="grid grid-cols-2 gap-4 my-4 p-4 bg-[#fafaf8] border border-neutral-200 rounded-lg">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 block font-jakarta">
                        Dimensions
                      </span>
                      <span className="font-luxury text-2xl text-neutral-900 font-normal">
                        {plot.dimension}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500 block font-jakarta">
                        Parcel Area
                      </span>
                      <span className="font-luxury text-2xl text-neutral-900 font-normal">
                        {plot.areaSqFt}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed mb-4 font-jakarta">
                    {plot.idealFor}
                  </p>

                  <div className="text-[11px] text-neutral-500 font-jakarta flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{plot.coverage}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiry(plot.name)}
                  className="w-full inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-900 py-3.5 px-4 text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer rounded shadow-2xs font-jakarta"
                >
                  <span>Enquire for {plot.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. BOUTIQUE AMENITIES & LIFESTYLE (Featuring New Aman/Bulgari-Style Wellness Pavilion) */}
      <section id="amenities" className="py-20 sm:py-32 bg-white border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-jakarta font-semibold block mb-2">
              Private Sanctuaries
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
              EXCLUSIVE BOUTIQUE AMENITIES
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 font-light leading-relaxed font-jakarta">
              Tailored for 24 families, the leisure infrastructure at ROVERA offers uncrowded, private spaces for restorative living, health, and cultural contemplation.
            </p>
          </div>

          {/* 4 Amenity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="bg-[#fafaf8] border border-neutral-200 hover:border-black rounded-2xl overflow-hidden flex flex-col justify-between transition-colors group shadow-xs hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={95}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-neutral-900 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-jakarta font-bold shadow-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-7 space-y-2 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-jakarta block mb-1">
                      {item.spec}
                    </span>
                    <h3 className="font-luxury text-2xl uppercase tracking-wider text-neutral-900 font-normal">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed pt-2 font-jakarta">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. STRATEGIC LOCATION: DODDABALLAPURA ROAD & STRR CORRIDOR */}
      <section id="location" className="py-20 sm:py-32 bg-[#fafaf8] border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-jakarta font-semibold block mb-2">
              North Bengaluru Growth Axis
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl font-normal uppercase tracking-wide text-neutral-900 leading-tight">
              DEVANAHALLI – DODDABALLAPURA ROAD CORRIDOR
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 font-light leading-relaxed font-jakarta">
              Positioned at the nexus of the Satellite Town Ring Road (STRR), Foxconn Mega Campus, and Kempegowda International Airport — one of South India&apos;s most dynamic real estate corridors.
            </p>
          </div>

          {/* Connectivity Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {connectivityList.map((item) => (
              <div
                key={item.destination}
                className="bg-white border border-neutral-200 p-6 rounded-xl space-y-3 hover:border-black transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-jakarta font-medium">
                    {item.distance}
                  </span>
                  <span className="font-luxury text-3xl text-neutral-900 font-normal">
                    {item.time}
                  </span>
                </div>
                <div>
                  <h4 className="font-luxury text-xl uppercase tracking-wider text-neutral-900">
                    {item.destination}
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mt-1 font-jakarta">
                    {item.category}
                  </span>
                </div>
                <p className="text-neutral-600 text-xs font-light leading-relaxed font-jakarta">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Location Key Takeaway Banner */}
          <div className="p-8 bg-neutral-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-jakarta font-medium">
                Direct Strategic Highway Frontage
              </span>
              <h3 className="font-luxury text-2xl sm:text-3xl uppercase tracking-wider text-white">
                Devanahalli–Doddaballapura Road (State Highway 9)
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm font-light font-jakarta">
                Adjacent to upcoming 300-acre aerospace &amp; hardware park, Foxconn facility, and high-speed STRR interchange.
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-100 transition-colors shrink-0 self-start sm:self-auto cursor-pointer font-jakarta shadow"
            >
              <span>View Route Map</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 09. STATUTORY TRANSPARENCY & RERA DISCLOSURE */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border border-neutral-200 bg-[#fafaf8] rounded-xl p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-neutral-800">
              <ShieldCheck className="w-5 h-5 text-black" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-jakarta font-bold">
                Statutory Due Diligence &amp; Legal Purity
              </span>
            </div>
            <h3 className="font-luxury text-xl sm:text-2xl uppercase tracking-wider text-neutral-900">
              STATUTORY APPROVALS &amp; RERA DISCLOSURE
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light font-jakarta">
              ROVERA is an exclusive 3-acre plotted development by STTHIRA Developments Private Limited, located on Devanahalli–Doddaballapura Road in North Bengaluru. Comprehensive cadastral survey boundaries and 30-year certified title search reports are available for private legal inspection at our corporate headquarters for registered prospective buyers. In accordance with statutory RERA regulations, formal allotment will be executed upon statutory certificate issuance.
            </p>
          </div>
        </div>
      </section>

      {/* 10. SCHEDULE PRIVATE WALKTHROUGH & CONCIERGE ENQUIRY */}
      <section id="enquiry" className="relative py-20 sm:py-32 bg-[#fafaf8] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Box */}
            <div className="md:col-span-5 bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 space-y-5 shadow-lg">
              <StthiraEmblem className="text-black w-9 h-11" />
              <h2 className="font-luxury text-3xl sm:text-4xl uppercase tracking-tight text-neutral-900 font-normal leading-tight">
                SCHEDULE PRIVATE WALKTHROUGH
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light font-jakarta">
                Connect with our direct concierge desk to schedule a private, chauffeured site visit to the ROVERA 3-acre enclave on Devanahalli–Doddaballapura Road.
              </p>
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-1 font-jakarta font-medium">
                  Direct Concierge Desk
                </span>
                <a
                  href="tel:+918049208800"
                  className="font-luxury text-2xl font-normal text-neutral-900 hover:text-black transition-colors"
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
                className="bg-white shadow-xl rounded-2xl border-neutral-200 text-neutral-900"
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
