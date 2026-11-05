"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Trees,
  Compass,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import PartnershipBanner from "@/components/PartnershipBanner";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryModal from "@/components/EnquiryModal";
import StthiraEmblem from "@/components/StthiraEmblem";
import ReelGallery from "@/components/ui/ReelGallery";
import FlexCarousel from "@/components/ui/FlexCarousel";
import { DEVELOPMENTS, FAQS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const rovera = DEVELOPMENTS[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string>("rovera-1");
  const { t } = useLanguage();

  // Curated 4 essential FAQs for prospective luxury plot buyers
  const coreFaqs = [
    {
      id: "rovera-1",
      q: "What is ROVERA by STTHIRA?",
      a: "ROVERA is our flagship 42+ acre master-planned luxury plotted enclave in North Bengaluru, offering exclusive residential villa plots with monumental stone architecture, 100% underground utilities, and an international-standard clubhouse.",
    },
    {
      id: "stthira-1",
      q: "What is STTHIRA's development guarantee?",
      a: "Every STTHIRA project comes with 100% clear legal title, certified 30-year forensic legal audits by senior advocates, statutory RERA approvals, and institutional-grade infrastructure completed prior to handover.",
    },
    {
      id: "rovera-3",
      q: "Where is ROVERA located and how is connectivity?",
      a: "ROVERA is strategically located in the high-growth North Bengaluru international corridor, approximately 18 minutes from Kempegowda International Airport (BLR), with rapid signal-free access to major tech parks, top international schools, and tertiary hospitals.",
    },
    {
      id: "buying-1",
      q: "How can I schedule a private site walkthrough?",
      a: "You can click 'Enquire Now' or call our direct concierge at +91 80 4567 8900. Our relationship directors arrange private, chauffeured site visits and one-on-one legal title walkthroughs.",
    },
  ];

  // Visual Curation Items for React Bits FlexCarousel
  const architecturalArchiveItems = [
    {
      src: "/images/rovera-avenues.jpg",
      alt: "50-Foot Tree-Lined Arterial Boulevards",
      title: "Arterial Boulevards",
      subtitle: "50-Ft Tree Canopy • Underground Electrical Grid",
    },
    {
      src: "/images/rovera-clubhouse.jpg",
      alt: "The Monolith Club Pavilion",
      title: "The Monolith Club",
      subtitle: "20,000 Sq.Ft Concrete & Flamed Basalt Architecture",
    },
    {
      src: "/images/rovera-wellness.jpg",
      alt: "Aura 25m Semi-Olympic Heated Lap Pool",
      title: "Aura Lap Pool",
      subtitle: "Flamed Black Granite Decking • Wellness Cabanas",
    },
    {
      src: "/images/aerial-view.jpg",
      alt: "42+ Acre Master Plan Matrix",
      title: "Master Plan Matrix",
      subtitle: "42+ Acre Plotted Enclave • 186 Curated Villa Parcels",
    },
    {
      src: "/images/landscape-nature.jpg",
      alt: "The Forest Spine Conserved Bioswales",
      title: "The Forest Spine",
      subtitle: "3+ Acres Native Woodland • Rainwater Aquifers",
    },
    {
      src: "/images/lifestyle-amenities.jpg",
      alt: "Zenith Championship Sports Arena",
      title: "Zenith Sports Arena",
      subtitle: "Plexicushion Tennis Court • Glass Padel Court",
    },
    {
      src: "/images/entrance-structure.jpg",
      alt: "Monumental Entrance Gateways",
      title: "Basalt Gateways",
      subtitle: "Forensic Cadastral Diligence • 100% Clear Title",
    },
    {
      src: "/images/modern-architecture.jpg",
      alt: "Architectural Permanence & Structural Honesty",
      title: "Structural Permanence",
      subtitle: "Timeless Plotted Living • Generational Wealth",
    },
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* 01. CINEMATIC LUXURY VIDEO HERO (Assetz Property Style) */}
      <CinematicHero />

      {/* 02. CLEAN, UNDERSTANDABLE BRAND INTRODUCTION */}
      <section id="about" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
                <span className="w-5 h-px bg-neutral-400" />
                <span>{t("intro.badge", "The STTHIRA Vision")}</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                {t("intro.headline", "LUXURY PLOTTED LIVING. TIMELESS INTEGRITY.")}
              </h2>

              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
                {t(
                  "intro.text1",
                  "STTHIRA conceives master-planned plotted communities where each residential parcel is engineered to institutional standards. We combine world-class architectural restraint, 100% forensic legal purity, and generational value."
                )}
              </p>

              {/* 3 Core Highlights Metrics */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-200">
                <div>
                  <span className="font-editorial text-2xl sm:text-4xl text-black font-normal block">
                    2026
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-medium block mt-1">
                    Foundation Year
                  </span>
                </div>
                <div className="border-l border-neutral-200 pl-4">
                  <span className="font-editorial text-2xl sm:text-4xl text-black font-normal block">
                    100%
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-medium block mt-1">
                    Clear Title Audit
                  </span>
                </div>
                <div className="border-l border-neutral-200 pl-4">
                  <span className="font-editorial text-2xl sm:text-4xl text-black font-normal block">
                    45%
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-medium block mt-1">
                    Preserved Nature
                  </span>
                </div>
              </div>
            </div>

            {/* Right Clean Visual Plate */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src="/images/brand-story.jpg"
                alt="STTHIRA Architecture"
                fill
                priority
                className="object-cover object-center grayscale contrast-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-300 block mb-1">
                  Bengaluru, India
                </span>
                <p className="font-editorial text-lg sm:text-xl uppercase tracking-wider font-light">
                  Architectural Permanence &amp; Natural Harmony
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED MASTER DEVELOPMENT: ROVERA (North Bengaluru) */}
      <section id="rovera" className="py-20 sm:py-28 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-1 font-medium">
                Featured Flagship Estate
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light">
                ROVERA • NORTH BENGALURU
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto shadow"
            >
              <span>Download Brochure</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Large Visual Card */}
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Project Image */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-neutral-900">
              <Image
                src={rovera.coverImage || "/images/hero-cinematic.jpg"}
                alt="ROVERA Master Plotted Community"
                fill
                priority
                className="object-cover object-center grayscale contrast-115 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1.5 rounded text-[10px] uppercase tracking-widest font-semibold shadow">
                Now Enquiring — Phase 1
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-4 rounded text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                    Strategic Corridor
                  </span>
                  <span className="text-sm font-medium">
                    18 Mins to Kempegowda International Airport (BLR)
                  </span>
                </div>
              </div>
            </div>

            {/* Project Quick Overview */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative h-9 w-32">
                  <Image
                    src="/images/rovera-logo-dark.png"
                    alt="ROVERA"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-light">
                  A grand 42+ acre master-planned plotted enclave featuring 186 luxury villa plots, monumental entrance architecture, 100% underground utilities, and expansive tree-lined boulevards.
                </p>

                {/* 4 Quick Key Numbers */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">Total Acreage</span>
                    <span className="text-base font-bold text-neutral-900">42+ Acres</span>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">Plot Count</span>
                    <span className="text-base font-bold text-neutral-900">186 Plots</span>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">Plot Sizes</span>
                    <span className="text-base font-bold text-neutral-900">1,500 – 4,000+ sq ft</span>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider block">Statutory Status</span>
                    <span className="text-base font-bold text-neutral-900">RERA Approved</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="flex-1 bg-black text-white py-3.5 px-5 rounded text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors text-center cursor-pointer shadow"
                >
                  Schedule Site Visit
                </button>
                <Link
                  href="/developments/rovera"
                  className="flex-1 border border-neutral-300 text-neutral-800 py-3.5 px-5 rounded text-xs uppercase tracking-widest font-semibold hover:border-black hover:text-black transition-colors text-center flex items-center justify-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. FOUR CORE PILLARS (Clean, Understandable, Zero Clutter) */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium block mb-2">
              The STTHIRA Standards
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light">
              BUILT FOR GENERATIONS
            </h2>
            <p className="text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              We eliminate the risks of conventional land buying with four uncompromised benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-7 bg-[#fbfbfb] border border-neutral-200 rounded-lg space-y-3 hover:border-black transition-colors">
              <ShieldCheck className="w-8 h-8 text-black stroke-[1.5]" />
              <h3 className="font-editorial text-xl uppercase tracking-wide text-neutral-900 font-medium">
                100% Clear Title
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Every parcel passes 30-year unencumbered legal vetting by tier-one advocates and full RERA compliance.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 bg-[#fbfbfb] border border-neutral-200 rounded-lg space-y-3 hover:border-black transition-colors">
              <Building2 className="w-8 h-8 text-black stroke-[1.5]" />
              <h3 className="font-editorial text-xl uppercase tracking-wide text-neutral-900 font-medium">
                Underground Grid
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Zero overhead cables. Concealed high-voltage power, storm drains, dual plumbing, and fiber conduits.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 bg-[#fbfbfb] border border-neutral-200 rounded-lg space-y-3 hover:border-black transition-colors">
              <Trees className="w-8 h-8 text-black stroke-[1.5]" />
              <h3 className="font-editorial text-xl uppercase tracking-wide text-neutral-900 font-medium">
                45% Green Canopy
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Nearly half of the acreage is dedicated to wide tree promenades, sensory gardens, and eco-parks.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 bg-[#fbfbfb] border border-neutral-200 rounded-lg space-y-3 hover:border-black transition-colors">
              <Compass className="w-8 h-8 text-black stroke-[1.5]" />
              <h3 className="font-editorial text-xl uppercase tracking-wide text-neutral-900 font-medium">
                Prime Airport Hub
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Located in the high-velocity North Bengaluru growth corridor for unmatched capital appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. STRATEGIC ALLIANCE (STTHIRA | ROVERA | AKSHARA) */}
      <PartnershipBanner />

      {/* 06. ARCHITECTURAL GALLERY (React Bits WebGL Refractive FlexCarousel) */}
      <section className="py-20 sm:py-28 bg-neutral-950 text-white border-b border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 pb-6 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                Visual Curation
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight font-light">
                ARCHITECTURAL ARCHIVES
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
            >
              <span>Explore Gallery ({rovera.galleryImages.length} Plates)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* WebGL Refractive Liquid FlexCarousel (Adaptive across Mobile, Tablet/iPad & Desktop) */}
          <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] rounded-xl overflow-hidden bg-neutral-900/60 border border-neutral-800/80 shadow-2xl">
            <FlexCarousel
              items={architecturalArchiveItems}
              preset="liquid"
              intro="rise"
              fit="natural"
              cardHeight={0.52}
              gap={16}
              radius={8}
              squeeze={0.2}
              focusOnClick={true}
              captions={true}
              captureWheel={false}
              autoplay={false}
            />
          </div>

          {/* Interaction Guide */}
          <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-500 font-sans px-2">
            <span>← Drag or Swipe to Navigate →</span>
            <span className="hidden sm:inline">Click any plate to focus & expand</span>
          </div>
        </div>
      </section>

      {/* 07. LEADERSHIP SUMMARY (Authentic & Professional) */}
      <section className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200 shadow-md">
              <Image
                src="/images/director-lokesh.jpg"
                alt="Lokesh Mudhaliar — Board of Directors"
                fill
                className="object-cover object-top grayscale contrast-110"
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
                <span className="w-5 h-px bg-neutral-400" />
                <span>Executive Governance</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-tight text-black font-light">
                LOKESH MUDHALIAR
              </h2>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block">
                Board of Directors • STTHIRA Developments
              </span>
              <blockquote className="border-l-2 border-black pl-5 py-1 text-neutral-800 font-editorial text-lg sm:text-xl italic">
                &ldquo;At STTHIRA, our standard is permanence. We do not develop merely for transactions; we curate generational landmarks where land becomes an enduring canvas for modern architecture and lasting value.&rdquo;
              </blockquote>
              <div className="pt-2 flex items-center gap-4 text-xs font-sans text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Statutory Compliance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Institutional Land Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. STREAMLINED FAQ (Just 4 Core, Clear Questions) */}
      <section className="py-20 sm:py-28 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium block mb-1">
              Clarity &amp; Verification
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-tight text-black font-light">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200 bg-white rounded-lg shadow-xs overflow-hidden">
            {coreFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="p-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? "" : faq.id)}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-base sm:text-lg text-neutral-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-sm text-neutral-600 font-light leading-relaxed pr-6 animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09. CLEAN ASSETZ-STYLE INLINE ENQUIRY SECTION */}
      <section id="enquiry" className="relative py-24 sm:py-32 bg-neutral-100/40 overflow-hidden">
        {/* React Bits Pro Reel Gallery: Tilted reels of images that glide as you scroll (Enquire Now section only) */}
        <ReelGallery />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Advisory Card */}
            <div className="md:col-span-5 bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-2xl space-y-4">
              <StthiraEmblem className="text-black w-8 h-10" />
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-tight text-black font-light leading-tight">
                LET&apos;S CONNECT
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light">
                Speak directly with a senior relationship manager to review ROVERA plot layouts, pricing, and certified legal title dossiers.
              </p>
              <div className="pt-3 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">
                  Direct Concierge
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
              <EnquiryForm defaultDevelopment="ROVERA (North Bengaluru)" className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border-neutral-200/90" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName="ROVERA (North Bengaluru)"
      />
    </div>
  );
}
