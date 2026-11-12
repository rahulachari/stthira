"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Trees,
  ShieldCheck,
  Building2,
  Phone,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronDown,
  Maximize2,
  Eye,
  Calendar,
  Lock,
  ChevronUp,
  Download,
  Play,
  Share2,
  ExternalLink,
  Dumbbell,
  Smile,
  Waves,
  Navigation,
  Cpu,
  Plane,
  GraduationCap,
  HeartPulse,
  X,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import StthiraEmblem from "@/components/StthiraEmblem";
import RoveraMasterPlan from "@/components/RoveraMasterPlan";
import AnimatedFooter from "@/components/ui/animated-footer";
import PixelFlowField from "@/components/ui/pixel-flow-field";
import RoveraWeDoSection from "@/components/RoveraWeDoSection";

export default function RoveraView() {
  const [pageLoading, setPageLoading] = useState(true);
  const [loadingFading, setLoadingFading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>("ROVERA — Phase 1 Villa Plot");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [galleryCategory, setGalleryCategory] = useState<"clubhouse" | "landscape">("clubhouse");
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formConfig, setFormConfig] = useState("Courtyard Villa Parcel (1,500 Sq.Ft)");
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // 1.8s hold allows the 1.62s GIF cycle to complete seamlessly
    const fadeTimer = setTimeout(() => {
      setLoadingFading(true);
      const doneTimer = setTimeout(() => {
        setPageLoading(false);
      }, 700);
      return () => clearTimeout(doneTimer);
    }, 1800);

    return () => clearTimeout(fadeTimer);
  }, []);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone.trim()) return;
    setFormLoading(true);

    const clientName = formName.trim() || "Prospective Buyer";
    const clientPhone = formPhone.trim();
    const clientEmail = formEmail.trim();
    const clientConfig = formConfig;

    const whatsappMsg = `Hello STTHIRA, I am interested in ROVERA (North Bengaluru).\nName: ${clientName}\nPhone: ${clientPhone}${clientEmail ? `\nEmail: ${clientEmail}` : ""}\nConfiguration: ${clientConfig}`;
    const whatsappUrl = `https://wa.me/917013485016?text=${encodeURIComponent(whatsappMsg)}`;

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: clientName,
          phone: clientPhone,
          email: clientEmail || undefined,
          interestedDevelopment: `ROVERA — ${clientConfig}`,
          privacyConsent: true,
        }),
      });
      setFormSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setFormName("");
      setFormPhone("");
      setFormEmail("");
    } catch {
      setFormSubmitted(true);
      window.open(whatsappUrl, "_blank");
    } finally {
      setFormLoading(false);
    }
  };

  const openEnquiry = (plotName?: string) => {
    setSelectedPlot(plotName ? `ROVERA — ${plotName}` : "ROVERA (Devanahalli–Doddaballapura Road)");
    setModalOpen(true);
  };

  const amenities = [
    {
      title: "The Resident Club Pavilion",
      category: "Private Social Club",
      spec: "10,000 Sq.Ft Resident Clubhouse",
      description: "Monolithic flamed stone & glass pavilion featuring a resident library salon, private dining lounge, and executive concierge desk.",
      image: "/images/rovera-clubhouse-exterior.jpg",
    },
    {
      title: "Azure Lap Pool & Sunken Deck",
      category: "Aquatics & Wellness",
      spec: "25m Lap Pool & Hydrotherapy",
      description: "Sunken timber sundeck, heated hydrotherapy vitality pools, and private poolside cabanas with bamboo zen garden views.",
      image: "/images/rovera-pool-deck.jpg",
    },
    {
      title: "Private Library Salon & Dining Lounge",
      category: "Social Sanctuary",
      spec: "Double-Height Resident Salon",
      description: "Curated architectural library, private meeting suites, and fireplace lounge with bespoke Italian furnishings.",
      image: "/images/rovera-clubhouse-lounge.jpg",
    },
    {
      title: "Sunken Courtyard & Fire Lounge",
      category: "Outdoor Living",
      spec: "Intimate Evening Sanctuary",
      description: "Polished terrazzo patio with modern oatmeal linen loungers, corten steel fire bowl, and sculpted boxwood borders.",
      image: "/images/rovera-courtyard-lounge.jpg",
    },
    {
      title: "Architectural Pergola Walkway",
      category: "Landscape Architecture",
      spec: "Geometric Shade Trellis",
      description: "Slender steel shaded colonnade with flowering wisteria vines, flamed limestone pavers, and linear architectural shadow play.",
      image: "/images/rovera-pergola-walkway.jpg",
    },
    {
      title: "Sensory Zen Meditation Garden",
      category: "Wellness & Nature",
      spec: "Aromatic Botanical Haven",
      description: "Stepping stone pathways through moss mounds, black pines, raked white gravel river, and calming granite water fountain.",
      image: "/images/rovera-zen-garden.jpg",
    },
  ];

  const galleryItems = [
    {
      title: "The Resident Club Pavilion",
      category: "clubhouse",
      categoryLabel: "Clubhouse",
      image: "/images/rovera-clubhouse-exterior.jpg",
    },
    {
      title: "Azure Lap Pool & Sunken Deck",
      category: "clubhouse",
      categoryLabel: "Clubhouse",
      image: "/images/rovera-pool-deck.jpg",
    },
    {
      title: "Private Library Salon & Dining Lounge",
      category: "clubhouse",
      categoryLabel: "Clubhouse",
      image: "/images/rovera-clubhouse-lounge.jpg",
    },
    {
      title: "Aura Vitality Spa & Wellness",
      category: "clubhouse",
      categoryLabel: "Clubhouse",
      image: "/images/rovera-wellness-pavilion.jpg",
    },
    {
      title: "Sunken Courtyard & Fire Lounge",
      category: "landscape",
      categoryLabel: "Landscape",
      image: "/images/rovera-courtyard-lounge.jpg",
    },
    {
      title: "Architectural Pergola Walkway",
      category: "landscape",
      categoryLabel: "Landscape",
      image: "/images/rovera-pergola-walkway.jpg",
    },
    {
      title: "Sensory Zen Meditation Garden",
      category: "landscape",
      categoryLabel: "Landscape",
      image: "/images/rovera-zen-garden.jpg",
    },
    {
      title: "40-Ft Cobblestone Tree-Lined Boulevards",
      category: "landscape",
      categoryLabel: "Landscape",
      image: "/images/rovera-internal-boulevard.jpg",
    },
  ];

  const connectivityList = [
    {
      destination: "STRR (Satellite Town Ring Road)",
      time: "5 Mins",
      distance: "3.5 km",
      category: "Express Transit",
      note: "Instant signal-free 6-lane orbital arterial ring road access",
    },
    {
      destination: "Foxconn Mega Campus & ITIR Belt",
      time: "12 Mins",
      distance: "9.0 km",
      category: "Global Tech SEZ",
      note: "$2.7B semiconductor & hardware technology investment corridor",
    },
    {
      destination: "Devanahalli Aerotropolis & SEZ",
      time: "14 Mins",
      distance: "11 km",
      category: "Business Hub",
      note: "Upcoming aerospace park, corporate headquarters & luxury hotels",
    },
    {
      destination: "Kempegowda International Airport (BLR)",
      time: "15-20 Mins",
      distance: "16 km",
      category: "International Transit",
      note: "Fast-track access to Terminal 2 via Doddaballapura bypass expressway",
    },
    {
      destination: "Stonehill & Canadian International",
      time: "18 Mins",
      distance: "15 km",
      category: "Premier Education",
      note: "Leading IB world institutions in North Bengaluru",
    },
    {
      destination: "Manipal Hospital Doddaballapur",
      time: "10 Mins",
      distance: "7.0 km",
      category: "Healthcare",
      note: "24/7 super-specialty tertiary care hospital",
    },
  ];

  const snapshotHighlights = [
    {
      icon: Trees,
      label: "3.0 Acres Boutique Enclave",
    },
    {
      icon: Layers,
      label: "XL Villa Plot Configurations",
    },
    {
      icon: Sparkles,
      label: "30+ Curated Amenities",
    },
    {
      icon: ShieldCheck,
      label: "100% Underground Utilities",
    },
    {
      icon: Navigation,
      label: "40-Ft Cobblestone Boulevards",
    },
    {
      icon: CheckCircle2,
      label: "RERA Approved & Clear Title",
    },
  ];

  const connectivityHighlights = [
    {
      icon: Navigation,
      label: "5 Mins to STRR Expressway",
    },
    {
      icon: Cpu,
      label: "12 Mins to Foxconn & ITIR",
    },
    {
      icon: Building2,
      label: "14 Mins to KIADB Aerospace",
    },
    {
      icon: Plane,
      label: "15 Mins to BLR Airport T2",
    },
    {
      icon: GraduationCap,
      label: "18 Mins to World Schools",
    },
    {
      icon: HeartPulse,
      label: "10 Mins to Manipal Hospital",
    },
  ];

  const entranceHighlights = [
    {
      icon: Maximize2,
      label: "8-Meter Monumental Height",
    },
    {
      icon: ShieldCheck,
      label: "Dual-Lane Access Control",
    },
    {
      icon: Sparkles,
      label: "Architectural Twilight Uplighting",
    },
  ];

  const faqs = [
    {
      question: "What is the statutory approval and RERA registration status of ROVERA?",
      answer:
        "ROVERA is an authorized plotted residential development registered under Karnataka RERA with registration number PRM/KA/RERA/1250/301/PR/200224/006646. All statutory planning sanctions, cadastral layout approvals, and environmental clearances have been vetted with 100% forensic title scrutiny.",
    },
    {
      question: "What plot dimensions are available at ROVERA?",
      answer:
        "ROVERA offers four curated parcel typologies: Courtyard Villa Parcels (30' × 50' — 1,500 Sq.Ft), Signature Sanctuary Plots (40' × 60' — 2,400 Sq.Ft), Grand Estate Parcels (50' × 70' — 3,500 Sq.Ft), and Bespoke Corner Estates (up to 4,800 Sq.Ft). Every parcel has 100% Vaastu-compliant orientation options.",
    },
    {
      question: "Is the infrastructure 100% underground?",
      answer:
        "Yes. ROVERA features zero overhead wiring. All 11kV electrical feeder cables, telecommunication fiber lines, water conduits, wastewater pipelines, and storm drainage aquifers are concealed within institutional-grade concrete utility trenches.",
    },
    {
      question: "Can I design and construct my own custom villa?",
      answer:
        "Absolutely. Buyers receive freehold title deeds and complete architectural sovereignty to build their bespoke dream residence within standard municipal zoning guidelines (Ground + 2 Floors). STTHIRA also offers an optional panel of accredited architects and project managers.",
    },
    {
      question: "What amenities are included within the 3-acre gated community?",
      answer:
        "The community features a 10,000 sq.ft Resident Clubhouse, Aura Vitality Spa & hydrotherapy pool, active sports arena with pickleball and tennis, children's timber play park, 40-ft cobblestone boulevards, an 8-meter double-height gatehouse, and 24/7 biometric security.",
    },
    {
      question: "Which financial institutions have approved ROVERA for home and plot loans?",
      answer:
        "ROVERA is approved by India's premier nationalized and private banking institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank for fast-track loan sanctions.",
    },
  ];

  return (
    <div className="bg-white text-zinc-950 font-sans selection:bg-[#0F2744] selection:text-white">
      {/* 00. ROVERA LOADING PAGE OVERLAY */}
      {pageLoading && (
        <div
          role="status"
          aria-label="Loading ROVERA"
          onClick={() => {
            setLoadingFading(true);
            setTimeout(() => setPageLoading(false), 250);
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loadingFading
              ? "opacity-0 pointer-events-none scale-105 filter blur-[2px]"
              : "opacity-100 scale-100 filter blur-0"
          }`}
        >
          <div className="relative w-48 sm:w-64 md:w-80 max-w-[75vw] aspect-[3/1]">
            <Image
              src="/images/rovera-logo-dark.png"
              alt="ROVERA"
              fill
              priority
              className="object-contain animate-pulse"
            />
          </div>
        </div>
      )}
      {/* 01. MONUMENTAL HERO SECTION (Adaptive Laptop & Mobile) */}
      <section className="relative w-full bg-white text-zinc-950 border-b border-zinc-200">
        
        {/* =========================================
            A. DESKTOP / LAPTOP / IPAD HERO (>= 768px)
            ========================================= */}
        <div className="hidden md:flex relative min-h-[92vh] sm:min-h-screen w-full flex-col justify-center items-center overflow-hidden bg-white">
          {/* Full-bleed Architectural Project Hero Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/rovera-grand-double-height-gate.jpg"
              alt="ROVERA — Sovereign Plotted Sanctuary"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle architectural wash for high contrast text readability */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none" />
            {/* Subtle top shade so the fixed header links remain clear */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/25 via-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Centered Brand Name & Tagline with Interactive Pixel Flow Field */}
          <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-screen mx-auto px-4 sm:px-6 lg:px-8 text-center select-none flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12">
            <PixelFlowField
              text="ROVERA"
              className="w-full h-[46vh] sm:h-[54vh] md:h-[60vh] lg:h-[66vh] xl:h-[72vh] flex flex-col items-center justify-center"
              shape="square"
              cellSize={7}
              gap={3}
              speed={1.1}
              pointerRadius={150}
              pointerStrength={1}
              textWidthRatio={0.96}
              textHeightRatio={0.84}
              weight={900}
              colors={["rgba(30, 58, 138, 0.05)", "#1E3A8A", "#090D16"]}
            >
              <h1 className="sr-only">ROVERA</h1>
            </PixelFlowField>
            <p className="mt-2 sm:mt-4 md:mt-5 font-sans text-base sm:text-xl md:text-2xl lg:text-3xl text-zinc-900 font-medium tracking-[0.06em] sm:tracking-[0.1em]">
              Where Legacy Finds Its Land
            </p>
          </div>
        </div>

        {/* =========================================
            B. MOBILE DEDICATED HERO (< 768px)
            ========================================= */}
        <div className="flex md:hidden relative min-h-[90dvh] sm:min-h-[100dvh] w-full flex-col justify-center items-center overflow-hidden px-4 text-center bg-white">
          {/* Vertical Architectural Project Hero Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/rovera-wellness-pavilion.jpg"
              alt="ROVERA — Sovereign Plotted Sanctuary"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle architectural wash for high contrast text readability */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none" />
            {/* Subtle top shade so the fixed header links remain clear */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/25 via-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Centered Brand Name & Tagline with Interactive Pixel Flow Field */}
          <div className="relative z-10 w-full px-2 flex flex-col items-center justify-center select-none pt-20 pb-10">
            <PixelFlowField
              text="ROVERA"
              className="w-full h-[32vh] sm:h-[38vh] flex flex-col items-center justify-center"
              shape="square"
              cellSize={5.5}
              gap={2}
              speed={1.0}
              pointerRadius={90}
              pointerStrength={1}
              textWidthRatio={0.94}
              textHeightRatio={0.76}
              weight={900}
              colors={["rgba(30, 58, 138, 0.05)", "#1E3A8A", "#090D16"]}
            >
              <h1 className="sr-only">ROVERA</h1>
            </PixelFlowField>
            <p className="mt-3 font-sans text-sm sm:text-base text-zinc-900 font-medium tracking-[0.06em] sm:tracking-[0.08em]">
              Where Legacy Finds Its Land
            </p>
          </div>
        </div>

      </section>

      {/* 03. SECTION: PROJECT SNAPSHOT (#snapshot) */}
      <section id="snapshot" className="py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Project Snapshot
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Crafted for Quiet Luxury
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal leading-relaxed tracking-[-0.01em]">
              Lush green surroundings and open skies in a gated community built for wellness and leisure — space to build your forever home, a weekend retreat, or a high-growth investment in North Bangalore.
            </p>
          </div>

          {/* Mobile & Tablet Compact 2-Column Grid (< lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
            {snapshotHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-[#fafaf8] border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#1E3A8A]/50 transition-colors min-h-[130px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-3 text-[#1E3A8A] shadow-2xs shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Detailed 3-Column Grid (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5">
            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Scale &amp; Setting</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                3.0 Acres Boutique Enclave
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Demarcated exclusively for just 24 bespoke villa plots, ensuring absolute quietude and low-density seclusion.
              </p>
            </div>

            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Parcel Planning</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                XL Villa Plot Configurations
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Standardized 1,500 sq.ft, 2,400 sq.ft, 3,500 sq.ft, up to 4,800 sq.ft custom corner estates with 100% Vaastu compliance.
              </p>
            </div>

            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Lifestyle &amp; Health</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                30+ Curated Amenities
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                10,000 sq.ft Resident Clubhouse, Aura Vitality Spa, pickleball arena, tennis, and 1-km rubberized jogging circuit.
              </p>
            </div>

            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Civil Engineering</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                100% Underground Utilities
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Zero overhead cables. Concealed high-voltage cabling, dedicated optical fiber, dual-piped water, and storm aquifers.
              </p>
            </div>

            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Circulation</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                40-Ft Cobblestone Boulevards
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Interlocked granite vehicular pavers with pedestrian bioswales, perimeter drainage, and native tree canopies.
              </p>
            </div>

            <div className="p-7 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-3 hover:border-[#1E3A8A]/50 transition-colors">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#1E3A8A] font-semibold block">Title &amp; Approvals</span>
              <h3 className="font-componentry text-2xl font-medium tracking-[-0.04em] text-zinc-950">
                RERA Approved &amp; Bank Certified
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                RERA No. PRM/KA/RERA/1250/301/PR/200224/006646 with certified 30-year forensic legal title search report.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 05. SECTION: ARCHITECTURAL STATEMENT & DOUBLE-HEIGHT GATES (#gates) */}
      <section id="gates" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Architectural Statement
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Monumental Double-Height Grand Entrance Gates
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal leading-relaxed tracking-[-0.01em]">
              Designed as a ceremonial threshold of permanence, the double-height entrance portal of ROVERA commands an imposing 8-meter architectural presence on the Devanahalli–Doddaballapura corridor.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-xl mb-12 bg-zinc-950">
            <Image
              src="/images/rovera-grand-double-height-gate.jpg"
              alt="ROVERA Double-Height Grand Entrance Gate"
              fill
              priority
              quality={95}
              className="object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wide text-blue-200 block mb-1">
                  8-Meter Monumental Portal
                </span>
                <p className="font-componentry text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-white">
                  Cantilevered Flamed Basalt &amp; Ribbed Concrete Portal
                </p>
              </div>
              <span className="bg-[#0F2744] border border-blue-400/40 text-white px-4 py-2 text-xs uppercase tracking-wider font-mono font-medium self-start sm:self-auto rounded-full shadow">
                24/7 RFID &amp; Biometric Protocol
              </span>
            </div>
          </div>

          {/* Mobile & Tablet Compact Grid (< lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
            {entranceHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#1E3A8A]/50 transition-colors min-h-[120px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-3 text-[#1E3A8A] shadow-2xs shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Detailed 3-Column Grid (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            <div className="p-7 bg-white border border-zinc-200 rounded-xl space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-2">
                <Maximize2 className="w-5 h-5" />
              </div>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                8-Meter Monumental Height
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                A majestic double-height cantilevered concrete canopy spanning both inbound and outbound lanes, clad in flamed South Indian black basalt with architectural timber louvers.
              </p>
            </div>

            <div className="p-7 bg-white border border-zinc-200 rounded-xl space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Dual-Lane Access Control
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Automated long-range RFID boom barriers, automated license plate recognition (ANPR), and an air-conditioned concierge gatehouse with integrated resident intercom.
              </p>
            </div>

            <div className="p-7 bg-white border border-zinc-200 rounded-xl space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Architectural Twilight Uplighting
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">
                Recessed ground-channel warm LED illumination casting grazing light up textured basalt slabs, paired with illuminated ROVERA stainless-steel insignia.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 07. SECTION: WHY ROVERA / GROWTH CORRIDOR (#why-rovera) */}
      <section id="why-rovera" className="py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Why ROVERA
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Elevated Living, Seamlessly Connected
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal leading-relaxed tracking-[-0.01em]">
              Lush green surroundings and open skies in a gated community built for wellness and leisure — space to build your forever home, a weekend retreat, or a high-growth investment in North Bangalore.
            </p>
          </div>

          {/* Mobile & Tablet Compact 2-Column Grid (< lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
            {connectivityHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-[#fafaf8] border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#1E3A8A]/50 transition-colors min-h-[130px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-3 text-[#1E3A8A] shadow-2xs shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Detailed 3-Column Grid (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5">
            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">01 • INFRASTRUCTURE</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Satellite Town Ring Road (STRR)
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                Located just 5 minutes from the upcoming 6-lane STRR expressway, offering signal-free connectivity across Bangalore&apos;s perimeter.
              </p>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">02 • EMPLOYMENT SEZ</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Foxconn Mega Tech Campus
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                12 minutes from the 300-acre Foxconn semiconductor &amp; electronics manufacturing plant creating over 50,000 engineering jobs.
              </p>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">03 • AEROSPACE HUB</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                KIADB Aerospace &amp; Defense Park
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                14 minutes from global aerospace leaders including Boeing, Airbus, and Collins Aerospace research centers.
              </p>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">04 • GLOBAL TRANSIT</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Kempegowda International Airport
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                Fast-track 15-minute commute to BLR Airport Terminal 2 without entering downtown traffic congestion zones.
              </p>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">05 • WORLD-CLASS EDUCATION</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                International School Belt
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                Within 18 minutes of Stonehill International, Canadian International, and Vidyashilp Academy world schools.
              </p>
            </div>

            <div className="p-6 bg-[#fafaf8] border border-zinc-200 rounded-xl space-y-2">
              <span className="font-mono text-xs text-[#1E3A8A] font-semibold tracking-wider">06 • HEALTHCARE</span>
              <h3 className="font-componentry text-xl font-medium tracking-[-0.03em] text-zinc-950">
                Tertiary Care Centers
              </h3>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                10 minutes from Manipal Hospital Doddaballapur and Aster CMI Aerotropolis emergency medical care centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. SECTION: WE DO — INTERACTIVE ARCHITECTURAL DISCIPLINES (#we-do / #amenities) */}
      <RoveraWeDoSection />

      {/* 09. SECTION: WELL-BEING SANCTUARY (#wellbeing) */}
      <section id="wellbeing" className="py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A]">
                Wellbeing
              </p>
              <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
                A Community Built Around Well-Being
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed tracking-[-0.01em]">
                Lush green surroundings and open skies in a gated community built for wellness and leisure — space to build your forever home, a weekend retreat, or a high-growth investment in North Bangalore.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-componentry text-lg font-medium tracking-[-0.02em] text-zinc-950">
                      Hydrotherapy &amp; Vitality Spa
                    </h4>
                    <p className="text-zinc-600 text-xs font-normal">
                      Indoor-outdoor vitality pools with flamed granite louvers and restorative water cascades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-componentry text-lg font-medium tracking-[-0.02em] text-zinc-950">
                      Sensory Botanical Aromatherapy
                    </h4>
                    <p className="text-zinc-600 text-xs font-normal">
                      Aromatic lavender, neem, and frangipani borders that enrich air purity and release therapeutic natural scents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-componentry text-lg font-medium tracking-[-0.02em] text-zinc-950">
                      Zero Noise &amp; Decibel Insulation
                    </h4>
                    <p className="text-zinc-600 text-xs font-normal">
                      Layered evergreen perimeter berms absorbing highway sounds, allowing the pure cadence of birds and rustling leaves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
              <Image
                src="/images/rovera-wellness-pavilion.jpg"
                alt="ROVERA Wellbeing Pavilion"
                fill
                priority
                quality={95}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                <span className="font-componentry text-xl font-medium tracking-[-0.03em]">
                  Aura Vitality Spa &amp; Zen Garden
                </span>
                <span className="bg-[#0F2744] text-white px-3 py-1 rounded-full font-mono text-[10px] font-medium uppercase">
                  Residents Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECTION: MASTER PLAN (#master-plan) */}
      <section id="master-plan" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-2">
              Master Plan &amp; Cadastral Blueprint
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              3 Pristine Acres. 24 Sovereign Parcels.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal leading-relaxed">
              Demarcated across 3 intimate acres on Devanahalli–Doddaballapura Road. Designed with 40-ft central cobblestone avenues, 100% underground high-voltage and storm utilities, a central sensory park, and an exclusive resident clubhouse.
            </p>
          </div>

          {/* Master Plan Showcase Card */}
          <div className="bg-white border border-zinc-200/90 rounded-3xl p-3 sm:p-6 shadow-xl overflow-hidden group relative">
            <div
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 cursor-pointer"
              onClick={() => setSelectedLightboxImage("/images/rovera-master-plan-3acres.jpg")}
            >
              <Image
                src="/images/rovera-master-plan-3acres.jpg"
                alt="ROVERA 3-Acre Master Plan Cadastral Layout"
                fill
                priority
                quality={95}
                className="object-contain sm:object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
                <span className="bg-[#0F2744] text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  3.00 Acres Enclave
                </span>
                <span className="bg-black/70 backdrop-blur-xs text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  24 Villa Plots
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/75 hover:bg-black text-white text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-2 pointer-events-auto transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Tap to Expand Fullscreen</span>
              </div>
            </div>

            {/* Plot Configuration Highlights Bar */}
            <div className="mt-6 pt-6 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#1E3A8A] font-semibold uppercase tracking-wider block">Courtyard Plot</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">1,500 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">30&apos; × 50&apos; • 6 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#1E3A8A] font-semibold uppercase tracking-wider block">Signature Plot</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">2,400 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">40&apos; × 60&apos; • 12 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#1E3A8A] font-semibold uppercase tracking-wider block">Grand Estate</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">3,500 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">50&apos; × 70&apos; • 4 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#1E3A8A] font-semibold uppercase tracking-wider block">Bespoke Corner</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">4,800 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">Dual-Road • 2 Plots</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Karnataka RERA Approved: PRM/KA/RERA/1250/301/PR/200224/006646
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => openEnquiry("Master Plan CAD & Plot Selection")}
                  className="flex-1 sm:flex-initial px-6 py-3 bg-[#0F2744] hover:bg-[#1E3A8A] text-white rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  Reserve Your Plot
                </button>
                <a
                  href="/images/rovera-master-plan-3acres.jpg"
                  download="ROVERA-Master-Plan-3Acres.jpg"
                  className="flex-1 sm:flex-initial px-5 py-3 bg-white border border-zinc-300 hover:border-zinc-500 text-zinc-800 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-colors text-center"
                >
                  Download Master Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECTION: PROJECT WALKTHROUGH VIDEO (#walkthrough) */}
      <section id="walkthrough" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-2">
              Project Walkthrough
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Step inside ROVERA.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal">
              A quick walkthrough of our exclusive gated villa-plot community in North Bangalore.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/rovera-aerial-3acres.jpg"
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/rovera-sanctuary-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
              <span className="font-mono uppercase tracking-wide">
                Drone Aerial &amp; Architectural Video Tour
              </span>
              <button
                type="button"
                onClick={() => openEnquiry("Schedule Chauffeured Site Visit")}
                className="bg-[#0F2744] hover:bg-[#1E3A8A] text-white px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider font-medium transition-colors shadow"
              >
                Book Chauffeured Visit
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 14. SECTION: LOCATION & CONNECTIVITY (#location / #connected) */}
      <section id="location" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Location
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              ROVERA location
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal">
              On the Devanahalli-Doddaballapura Road with easy STRR access — minutes from schools, workplaces, healthcare and the international airport.
            </p>
          </div>

          {/* Mobile & Tablet Compact 2-Column Grid (< lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 lg:hidden">
            {connectivityHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#1E3A8A]/50 transition-colors min-h-[130px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center mb-3 text-[#1E3A8A] shadow-2xs shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-zinc-900 tracking-tight leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Detailed 3-Column Grid (>= lg) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-5 mb-10">
            {connectivityList.map((item) => (
              <div
                key={item.destination}
                className="bg-white border border-zinc-200 p-6 rounded-2xl space-y-3 hover:border-[#1E3A8A] transition-colors shadow-2xs"
              >
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-zinc-400 font-medium">
                    {item.distance}
                  </span>
                  <span className="font-clash text-2xl font-semibold text-zinc-950">
                    {item.time}
                  </span>
                </div>
                <div>
                  <h4 className="font-componentry text-lg font-medium tracking-[-0.03em] text-zinc-950">
                    {item.destination}
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#1E3A8A] block mt-0.5">
                    {item.category}
                  </span>
                </div>
                <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Exact Address & Map Banner with Dark Blue Accents */}
          <div className="p-8 bg-[#0F2744] text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl border border-blue-900/50">
            <div className="space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wide text-blue-200">
                GPS Site Address
              </span>
              <h3 className="font-componentry text-xl sm:text-2xl font-medium tracking-[-0.03em] text-white">
                Devanahalli, Doddaballapura Main Rd, Kasaba Hobli, Shivapura, Doddaballapur, Karnataka 562163
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm font-light">
                Direct State Highway 9 frontage, adjacent to STRR interchange and KIADB Aerospace corridor.
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Pnt9SjxeLpJLzs179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0F2744] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wide font-semibold hover:bg-blue-50 transition-colors shrink-0 self-start sm:self-auto shadow"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 15. SECTION: TESTIMONIALS & LEADERSHIP (#testimonials) */}
      <section id="testimonials" className="py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Testimonials
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Patron &amp; Leadership Perspectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-4">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed italic font-light">
                &ldquo;Plotted developments in North Bangalore are usually either sprawling crowded layouts or remote farmland without civil infrastructure. ROVERA hits the exact sweet spot — an intimate 3-acre gated sanctuary with double-height gates, institutional underground piping, and complete freehold ownership.&rdquo;
              </p>
              <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <h5 className="font-componentry text-base font-medium text-zinc-950">Vikramaditya Rao</h5>
                  <span className="font-mono text-[11px] text-zinc-500">Tech Entrepreneur &amp; Early Patron</span>
                </div>
                <span className="font-clash text-sm text-[#1E3A8A] font-semibold">2,400 Sq.Ft Plot</span>
              </div>
            </div>

            <div className="p-8 bg-[#fafaf8] border border-zinc-200 rounded-2xl space-y-4">
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed italic font-light">
                &ldquo;Our vision at STTHIRA is unapologetic: create generational plotted estates that outlast market cycles. We limit ROVERA to just 24 families to protect their solitude, their capital, and their architectural sovereignty.&rdquo;
              </p>
              <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <h5 className="font-componentry text-base font-medium text-zinc-950">Lokesh Mudhaliar</h5>
                  <span className="font-mono text-[11px] text-zinc-500">Founder &amp; Director, STTHIRA</span>
                </div>
                <span className="font-clash text-sm text-zinc-950 font-semibold">Master Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. SECTION: PRICING & PAYMENT STRUCTURE (#pricing) */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              Pricing
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Indicative Starting Prices
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal">
              Indicative starting prices for our villa plots. Get the complete cost sheet for plot-wise availability and full details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-7 bg-white border border-zinc-200 rounded-2xl space-y-4 shadow-2xs">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wide">Courtyard Plot</span>
              <div className="flex items-baseline gap-1">
                <span className="font-clash text-3xl font-semibold text-zinc-950">₹85</span>
                <span className="text-sm font-mono text-zinc-600">Lakhs* Onwards</span>
              </div>
              <p className="text-zinc-600 text-xs font-normal">
                1,500 Sq.Ft (30&apos; × 50&apos;) ideal for 3–4 BHK villa with private lightwell and garden.
              </p>
              <button
                type="button"
                onClick={() => openEnquiry("1,500 Sq.Ft Cost Sheet")}
                className="w-full mt-2 py-2.5 bg-[#0F2744] hover:bg-[#1E3A8A] text-white rounded-full text-xs font-mono uppercase tracking-wide transition-colors"
              >
                Request Cost Sheet
              </button>
            </div>

            <div className="p-7 bg-white border-2 border-[#1E3A8A] rounded-2xl space-y-4 shadow-md relative">
              <div className="absolute -top-3 left-6 bg-[#0F2744] text-white px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider">
                Most Popular
              </div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wide">Signature Plot</span>
              <div className="flex items-baseline gap-1">
                <span className="font-clash text-3xl font-semibold text-zinc-950">₹1.35</span>
                <span className="text-sm font-mono text-zinc-600">Cr* Onwards</span>
              </div>
              <p className="text-zinc-600 text-xs font-normal">
                2,400 Sq.Ft (40&apos; × 60&apos;) ideal for 4–5 BHK luxury residence with plunge pool and portico.
              </p>
              <button
                type="button"
                onClick={() => openEnquiry("2,400 Sq.Ft Cost Sheet")}
                className="w-full mt-2 py-2.5 bg-[#0F2744] hover:bg-[#1E3A8A] text-white rounded-full text-xs font-mono uppercase tracking-wide transition-colors"
              >
                Request Cost Sheet
              </button>
            </div>

            <div className="p-7 bg-white border border-zinc-200 rounded-2xl space-y-4 shadow-2xs">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wide">Grand Estate</span>
              <div className="flex items-baseline gap-1">
                <span className="font-clash text-3xl font-semibold text-zinc-950">₹1.98</span>
                <span className="text-sm font-mono text-zinc-600">Cr* Onwards</span>
              </div>
              <p className="text-zinc-600 text-xs font-normal">
                3,500+ Sq.Ft (50&apos; × 70&apos; &amp; Corner) for generational trophy mansions with expansive lawns.
              </p>
              <button
                type="button"
                onClick={() => openEnquiry("Grand Estate Cost Sheet")}
                className="w-full mt-2 py-2.5 bg-[#0F2744] hover:bg-[#1E3A8A] text-white rounded-full text-xs font-mono uppercase tracking-wide transition-colors"
              >
                Request Cost Sheet
              </button>
            </div>
          </div>

          <div className="p-6 bg-white border border-zinc-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-zinc-600">
            <div>
              <strong className="text-zinc-950 uppercase">Milestone Payment Schedule:</strong> 10% on Booking • 20% on Agreement • 50% Linked to Civil Infrastructure Milestones • 20% on Final Registration.
            </div>
            <div className="text-[#1E3A8A] font-semibold shrink-0">
              Approved by SBI, HDFC, ICICI &amp; Axis Bank
            </div>
          </div>
        </div>
      </section>

      {/* 17. SECTION: FAQ ACCORDION (#faq) */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A] mb-2">
              FAQ
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal">
              Got questions? Explore our FAQ section for quick answers on choosing the right villa plot to buy or invest.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="border border-zinc-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 bg-[#fafaf8] hover:bg-zinc-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950 tracking-[-0.02em]">
                      {faq.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-[#1E3A8A]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white border-t border-zinc-100 text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. SECTION: ABOUT THE DEVELOPER (#about-stthira) */}
      <section id="about-stthira" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <StthiraEmblem className="text-zinc-950 w-10 h-12" />
          </div>
          <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#1E3A8A]">
            About the Master Developer
          </p>
          <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
            Building a Legacy of Timeless Integrity
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            STTHIRA Developments Private Limited is an elite luxury plotted real estate developer in India. Founded on the bedrock principle of institutional permanence, forensic legal clarity, and understated brutalist architectural restraint. ROVERA represents our premier plotted sanctuary in North Bangalore.
          </p>
          <div className="pt-4 flex items-center justify-center gap-6 font-mono text-xs text-zinc-500">
            <span>Corporate CIN: U68100KA2026PTC189000</span>
            <span>•</span>
            <span>Est. 2026 Bengaluru</span>
          </div>
        </div>
      </section>

      {/* 19. SECTION: ENQUIRY FORM (#reserve) */}
      <section id="reserve" className="scroll-mt-28">
        <AnimatedFooter
          headingLines={[]}
          background="#ffffff"
          textColor="#0f172a"
          charColor="#3B82F6"
          hoverColor="#1E3A8A"
          hoverCharColor="#ffffff"
          className="pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 border-t border-zinc-200 bg-white"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            {/* Header: "Let's Connect" */}
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="font-componentry text-balance text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.04em] text-zinc-950 leading-[1.06]">
                Let&apos;s <span className="text-[#1E3A8A]">Connect</span>
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-3 font-normal leading-relaxed max-w-lg mx-auto">
                Receive the official brochure, master plan layout, unit pricing dossier, and a private chauffeured site visit invitation.
              </p>
            </div>

            {/* Centered Luxury Enquiry Card with Translucent Glassmorphic Background */}
            <div className="max-w-xl mx-auto">
              <div className="bg-white/45 sm:bg-white/35 backdrop-blur-md border border-white/80 shadow-2xl rounded-3xl p-6 sm:p-9 ring-1 ring-black/5">
                <form
                  onSubmit={handleLeadSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-zinc-800 mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#1E3A8A] focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wide text-zinc-800 mb-1.5 font-semibold">
                        Contact / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Your contact number"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#1E3A8A] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wide text-zinc-800 mb-1.5 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#1E3A8A] focus:bg-white transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-zinc-800 mb-1.5 font-semibold">
                      Preferred Parcel Configuration
                    </label>
                    <select
                      value={formConfig}
                      onChange={(e) => setFormConfig(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#1E3A8A] focus:bg-white transition-all shadow-2xs"
                    >
                      <option value="Courtyard Villa Parcel (1,500 Sq.Ft)">Courtyard Villa Parcel (1,500 Sq.Ft)</option>
                      <option value="Signature Sanctuary Plot (2,400 Sq.Ft)">Signature Sanctuary Plot (2,400 Sq.Ft)</option>
                      <option value="Grand Estate Parcel (3,500 Sq.Ft)">Grand Estate Parcel (3,500 Sq.Ft)</option>
                      <option value="Bespoke Corner Estate (4,200 – 4,800 Sq.Ft)">Bespoke Corner Estate (4,200 – 4,800 Sq.Ft)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full h-12 rounded-full bg-[#0F2744] hover:bg-[#1E3A8A] disabled:opacity-60 text-white font-mono text-xs uppercase tracking-wide font-medium transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      {formLoading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Send Me Project Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {formSubmitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium text-center">
                      ✓ Thank you! Our senior concierge team will reach out shortly with the complete ROVERA dossier.
                    </div>
                  )}

                  {/* Exact user notice from reference image */}
                  <p className="text-[11px] text-zinc-600 text-center tracking-wide pt-1 font-mono">
                    By submitting, you agree to be contacted by our team regarding ROVERA.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </AnimatedFooter>
      </section>

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      {selectedLightboxImage && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedLightboxImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
            aria-label="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedLightboxImage}
              alt="Architectural Render Fullscreen View"
              fill
              quality={98}
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={selectedPlot}
      />
    </div>
  );
}
