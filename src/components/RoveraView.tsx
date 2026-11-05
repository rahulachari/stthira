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
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import EnquiryModal from "@/components/EnquiryModal";
import EnquiryForm from "@/components/EnquiryForm";
import StthiraEmblem from "@/components/StthiraEmblem";
import ReelGallery from "@/components/ui/ReelGallery";
import DotMatrixNumber from "@/components/ui/DotMatrixNumber";

export default function RoveraView() {
  const rovera = DEVELOPMENTS[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>("ROVERA — Phase 1 Villa Plot");

  const openEnquiry = (plotName?: string) => {
    setSelectedPlot(plotName ? `ROVERA — ${plotName}` : "ROVERA (North Bengaluru)");
    setModalOpen(true);
  };

  const plotConfigurations = [
    {
      id: "exec",
      name: "Executive Villa Plot",
      dimension: "30' × 50'",
      areaSqFt: "1,500 Sq.Ft",
      facing: "East / North Facing Options",
      idealFor: "Boutique 3-4 BHK modern villas with private courtyard & rooftop deck.",
      badge: "Fast Selling",
    },
    {
      id: "sign",
      name: "Signature Estate Plot",
      dimension: "40' × 60'",
      areaSqFt: "2,400 Sq.Ft",
      facing: "Boulevard & Park Fronting",
      idealFor: "Expansive 4-5 BHK luxury estates with private lap pool & 2-car portico.",
      badge: "Signature Collection",
    },
    {
      id: "sov",
      name: "Sovereign Manor Plot",
      dimension: "50' × 80'+",
      areaSqFt: "4,000+ Sq.Ft",
      facing: "Corner & Lake Peripheral",
      idealFor: "Ultra-luxury multi-generational bespoke mansions with expansive landscaped lawns.",
      badge: "Limited Release",
    },
  ];

  const amenities = [
    {
      title: "The Monolith Club",
      category: "Clubhouse",
      spec: "20,000 Sq.Ft Pavilion",
      description: "Monumental concrete & flamed basalt clubhouse with resident salon, private dining, boardroom & concierge.",
      image: "/images/rovera-clubhouse.jpg",
    },
    {
      title: "Aura 25m Lap Pool",
      category: "Aquatics & Wellness",
      spec: "Semi-Olympic Temperature Controlled",
      description: "Surrounded by honed flamed granite coping, shaded cabanas, and integrated hydrotherapy jets.",
      image: "/images/rovera-wellness.jpg",
    },
    {
      title: "The Forest Spine",
      category: "Native Ecology",
      spec: "3+ Acres Conserved Bioswales",
      description: "Over 400 mature indigenous trees, natural rainwater percolation swales, and crushed gravel jogging trails.",
      image: "/images/landscape-nature.jpg",
    },
    {
      title: "Zenith Sports Arena",
      category: "Athletics",
      spec: "Championship Grade Courts",
      description: "Plexicushion tennis court, enclosed glass padel court, half basketball court, and outdoor fitness station.",
      image: "/images/lifestyle-amenities.jpg",
    },
  ];

  const connectivityList = [
    { destination: "Kempegowda Int'l Airport (BLR)", time: "18 Mins", distance: "14.2 km", category: "Transit" },
    { destination: "KIADB Aerospace & IT SEZ", time: "12 Mins", distance: "9.5 km", category: "Employment" },
    { destination: "Foxconn Mega Manufacturing Campus", time: "15 Mins", distance: "11.0 km", category: "Hub" },
    { destination: "Stonehill International School", time: "14 Mins", distance: "10.5 km", category: "Education" },
    { destination: "North Bengaluru Technology Corridor", time: "22 Mins", distance: "18.0 km", category: "IT Parks" },
    { destination: "Aster CMI Tertiary Hospital", time: "25 Mins", distance: "21.0 km", category: "Healthcare" },
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* 01. CINEMATIC LUXURY HERO SECTION */}
      <section id="hero" className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-16">
        {/* Background Visual with Architectural Tone */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rovera-avenues.jpg"
            alt="ROVERA 50-Foot Tree-Lined Boulevard"
            fill
            priority
            quality={95}
            className="object-cover object-center grayscale contrast-115 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 border border-white/20 bg-black/50 backdrop-blur-md px-4 py-1.5 mb-6 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-300 font-sans">
              STTHIRA Inaugural Project • North Bengaluru • Phase 1
            </span>
          </div>

          {/* Crisp, Bold Official ROVERA Brand Mark */}
          <div className="relative h-16 sm:h-22 md:h-26 lg:h-30 aspect-[3.4/1] mb-6 select-none shrink-0 drop-shadow-2xl">
            <Image
              src="/images/rovera-logo-white.png"
              alt="ROVERA — Luxury Plotted Living"
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 420px"
              className="object-contain object-center"
            />
          </div>

          {/* Editorial Project Headline */}
          <h1 className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide uppercase text-neutral-100 max-w-3xl leading-tight mb-4">
            SANCTUARY OF TIMELESS RESIDENCE.
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base font-sans text-neutral-300 font-light leading-relaxed mb-8 px-2 sm:px-0">
            A 42+ acre master-planned enclave crafted by STTHIRA in North Bengaluru. Featuring 186 curated residential parcels, 100% underground civil utilities, and 45% conserved native canopy.
          </p>

          {/* Key Facts Pill (Assetz Style Clean Strip with Dot Matrix Numbers) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs uppercase tracking-widest text-neutral-300 font-sans mb-10 py-2.5 px-6 bg-black/40 border border-white/15 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>North Bengaluru</span>
            </span>
            <span className="text-neutral-500">•</span>
            <span className="flex items-center gap-1.5">
              <DotMatrixNumber value="42+" size="xs" color="#ffffff" inactiveColor="rgba(255,255,255,0.12)" />
              <span>Acres Enclave</span>
            </span>
            <span className="text-neutral-500">•</span>
            <span className="flex items-center gap-1.5">
              <DotMatrixNumber value="186" size="xs" color="#ffffff" inactiveColor="rgba(255,255,255,0.12)" />
              <span>Curated Plots</span>
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-white font-semibold flex items-center gap-1.5">
              <DotMatrixNumber value="18" size="xs" color="#ffffff" inactiveColor="rgba(255,255,255,0.12)" />
              <span>Mins to Airport</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-200 transition-all shadow-xl cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>

            <a
              href="#plots"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all backdrop-blur-sm shadow-lg"
            >
              <span>View Plot Sizes</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. IN-PAGE STICKY NAV (Quick Assetz-Style Section Jumps) */}
      <nav className="sticky top-[68px] sm:top-[76px] z-40 bg-neutral-900/95 text-white backdrop-blur-md border-b border-neutral-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex items-center justify-between text-xs uppercase tracking-widest font-sans text-neutral-400">
          <div className="flex items-center space-x-8">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#plots" className="hover:text-white transition-colors">Plot Sizes</a>
            <a href="#masterplan" className="hover:text-white transition-colors">Master Plan</a>
            <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
            <a href="#location" className="hover:text-white transition-colors">Connectivity</a>
          </div>
          <button
            onClick={() => openEnquiry()}
            className="text-white font-semibold hover:text-neutral-200 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Request Brochure</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* 03. EXECUTIVE PROJECT OVERVIEW */}
      <section id="overview" className="py-20 sm:py-28 border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
                <span className="w-5 h-px bg-neutral-400" />
                <span>The ROVERA Standard</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                GROUNDED IN QUALITY. <br />
                <span className="italic text-neutral-500 font-light">BUILT FOR GENERATIONS.</span>
              </h2>

              <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                <strong>ROVERA</strong> is the inaugural plotted living development by <strong>STTHIRA</strong> (Founded 2026, Board of Directors: Lokesh Mudhaliar), established in strategic land collaboration with <strong>AKSHARA</strong>.
              </p>

              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                Conceived as a master-planned community of 186 private villa estates, ROVERA introduces institutional engineering standards previously unseen in private plotted developments: 100% underground high-voltage power conduits, zero overhead wiring, 50-foot wide tree-shaded arterial avenues, and 45% conserved open green spaces.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-sans">
                <a
                  href="tel:+918045678900"
                  className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-black px-4 py-2.5 transition-colors border border-neutral-300 font-medium rounded cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Advisory: +91 80 4567 8900</span>
                </a>
              </div>
            </div>

            {/* Right 4 Specification Cards with Dot Matrix Numbers */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 border border-neutral-200 p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Total Area</span>
                <div className="flex items-center gap-1.5 text-black">
                  <DotMatrixNumber value="42+" size="sm" color="#111111" inactiveColor="rgba(0,0,0,0.08)" />
                  <span className="font-editorial text-xl text-black font-medium">Acres</span>
                </div>
                <p className="text-xs text-neutral-600 font-light">Master-planned gated enclave</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Villa Parcels</span>
                <div className="flex items-center gap-1.5 text-black">
                  <DotMatrixNumber value="186" size="sm" color="#111111" inactiveColor="rgba(0,0,0,0.08)" />
                  <span className="font-editorial text-xl text-black font-medium">Plots</span>
                </div>
                <p className="text-xs text-neutral-600 font-light">Limited Phase 1 inventory</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Green Cover</span>
                <div className="flex items-center gap-1 text-black">
                  <DotMatrixNumber value="45%" size="sm" color="#111111" inactiveColor="rgba(0,0,0,0.08)" />
                  <span className="font-editorial text-lg text-black font-medium ml-1">Conserved</span>
                </div>
                <p className="text-xs text-neutral-600 font-light">Parks, swales &amp; forest spine</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-5 sm:p-6 space-y-1.5">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Utilities</span>
                <div className="flex items-center gap-1 text-black">
                  <DotMatrixNumber value="100%" size="sm" color="#111111" inactiveColor="rgba(0,0,0,0.08)" />
                  <span className="font-editorial text-lg text-black font-medium ml-1">Concealed</span>
                </div>
                <p className="text-xs text-neutral-600 font-light">Zero overhead wires or poles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PLOT CONFIGURATIONS (Clean 3-Card Assetz Style) */}
      <section id="plots" className="py-20 sm:py-28 bg-[#fafafa] border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Plot Configurations
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              AVAILABLE PLOT SIZES
            </h2>
            <p className="text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Every parcel features dedicated underground electrical terminations, dual water supply lines, and pre-laid optical fiber conduit ready for instant hookup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plotConfigurations.map((plot) => (
              <div
                key={plot.id}
                className="bg-white border border-neutral-200 p-7 sm:p-8 flex flex-col justify-between hover:border-black transition-all shadow-xs hover:shadow-md rounded-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                      {plot.badge}
                    </span>
                    <span className="text-xs font-semibold text-black bg-neutral-100 px-2.5 py-1 rounded font-doto tracking-wider">
                      {plot.areaSqFt}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl uppercase tracking-wide text-black mb-3">
                    {plot.name}
                  </h3>

                  <div className="py-3 border-y border-neutral-100 my-4 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Dimensions:</span>
                      <span className="text-black font-medium">{plot.dimension}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Orientation:</span>
                      <span className="text-black font-medium">{plot.facing}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs font-light leading-relaxed mb-6">
                    {plot.idealFor}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiry(plot.name)}
                  className="w-full text-center py-3.5 bg-black text-white hover:bg-neutral-800 text-xs uppercase tracking-widest font-semibold transition-colors rounded cursor-pointer"
                >
                  Enquire This Size
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. MASTER PLAN & INFRASTRUCTURE MATRIX */}
      <section id="masterplan" className="py-20 sm:py-28 bg-neutral-950 text-white border-b border-neutral-900 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
              Civil Engineering Matrix
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight font-light leading-none">
              MASTER PLAN INTEGRITY
            </h2>
            <p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed">
              Engineered with 50-foot grand avenues, gentle curved roads framing ancient tree canopies, and independent gated cul-de-sacs for privacy.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-neutral-900 border border-neutral-800 overflow-hidden group rounded-lg mb-8">
            <Image
              src="/images/aerial-view.jpg"
              alt="ROVERA Master Plan Aerial Perspective"
              fill
              className="object-cover object-center grayscale contrast-125 group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  Master Layout Perspective
                </span>
                <p className="font-editorial text-xl sm:text-2xl text-white uppercase tracking-wider">
                  50-Ft Boulevards &amp; Dedicated Bioswales
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry("Master Plan High-Res Dossier")}
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors shrink-0 rounded cursor-pointer"
              >
                <span>Request Master Layout</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Civil Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded">
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">Avenue Width</span>
              <span className="text-white font-medium text-sm">50-Foot Tree Avenues</span>
            </div>
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded">
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">Electrical Grid</span>
              <span className="text-white font-medium text-sm">100% Underground</span>
            </div>
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded">
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">Water Infrastructure</span>
              <span className="text-white font-medium text-sm">Dual Aquifer Network</span>
            </div>
            <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded">
              <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">Gate Architecture</span>
              <span className="text-white font-medium text-sm">Flamed Basalt Stone</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06. CURATED AMENITIES */}
      <section id="amenities" className="py-20 sm:py-28 bg-white border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Enclave Lifestyle
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              CURATED AMENITIES
            </h2>
            <p className="text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Quiet refinement focused on wellness, nature preservation, and neighborhood tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="border border-neutral-200 bg-neutral-50 rounded-lg overflow-hidden flex flex-col justify-between hover:border-black transition-colors group"
              >
                <div className="relative aspect-[16/10] w-full bg-neutral-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-xl uppercase tracking-wide text-black">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-500 block mb-2">
                      {item.spec}
                    </span>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. STRATEGIC CONNECTIVITY MATRIX */}
      <section id="location" className="py-20 sm:py-28 bg-[#fafafa] border-b border-neutral-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              North Bengaluru Growth Corridor
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              STRATEGIC CONNECTIVITY
            </h2>
            <p className="text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Rapid, signal-free access to Kempegowda International Airport and key high-velocity industrial SEZs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {connectivityList.map((item) => (
              <div
                key={item.destination}
                className="bg-white border border-neutral-200 p-5 rounded-lg space-y-2 hover:border-black transition-colors shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                    {item.distance}
                  </span>
                  <span className="font-editorial text-2xl text-black font-medium">
                    {item.time}
                  </span>
                </div>
                <h4 className="font-editorial text-base uppercase tracking-wider text-black">
                  {item.destination}
                </h4>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. STATUTORY TRANSPARENCY & RERA DISCLOSURE */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border-l-4 border-black pl-6 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Statutory Transparency
              </span>
            </div>
            <h3 className="font-editorial text-xl uppercase tracking-wider text-black">
              STATUTORY APPROVALS &amp; RERA DISCLOSURE
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed font-light">
              ROVERA by STTHIRA is currently completing statutory project approvals with local planning authorities in North Bengaluru. Cadastral survey boundaries and certified legal title dossiers are open for private inspection at our corporate office for registered prospective buyers. In accordance with RERA, formal allotment will proceed immediately upon registration certificate issuance.
            </p>
          </div>
        </div>
      </section>

      {/* 09. ASSETZ-STYLE CLEAN INLINE ENQUIRY SECTION */}
      <section id="enquiry" className="relative py-24 sm:py-32 bg-neutral-100/40 overflow-hidden">
        {/* React Bits Pro Reel Gallery: Tilted reels of images that glide as you scroll (Enquire Now section only) */}
        <ReelGallery />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Advisory Card */}
            <div className="md:col-span-5 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-2xl space-y-4">
              <StthiraEmblem className="text-black w-8 h-10" />
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-tight text-black font-light leading-tight">
                SCHEDULE SITE WALKTHROUGH
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light">
                Speak directly with a senior relationship manager to review ROVERA plot layouts, Phase 1 pricing, and certified legal title dossiers.
              </p>
              <div className="pt-3 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Direct Project Concierge
                </span>
                <a
                  href="tel:+918045678900"
                  className="text-base font-semibold text-black hover:underline"
                >
                  +91 80 4567 8900
                </a>
              </div>
            </div>

            {/* Right Clean 3-Field Form */}
            <div className="md:col-span-7">
              <EnquiryForm
                defaultDevelopment="ROVERA (North Bengaluru)"
                defaultType="Schedule Site Visit"
                className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border-neutral-200/90"
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

