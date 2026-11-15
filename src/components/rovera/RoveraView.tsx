"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Volume2,
  VolumeX,
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
import { motion } from "framer-motion";
import EnquiryModal from "@/components/common/EnquiryModal";
import StthiraEmblem from "@/components/stthira/StthiraEmblem";
import RoveraMasterPlan from "@/components/rovera/RoveraMasterPlan";
import AnimatedFooter from "@/components/ui/animated-footer";

function formatIndianNumber(num: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(num));
}

function AnimatedCounter({
  target,
  decimals = 0,
  suffix = "",
  active = false,
}: {
  target: number;
  decimals?: number;
  suffix?: string;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    const duration = 1800; // ms matching lagos.co.in
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(parseFloat(current.toFixed(decimals)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target, decimals]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : formatIndianNumber(value);
  return (
    <>
      {formatted}
      {suffix}
    </>
  );
}

export default function RoveraView() {
  const [pageLoading, setPageLoading] = useState(true);
  const [loadingFading, setLoadingFading] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isHeroMuted, setIsHeroMuted] = useState(true);
  const wasPlayingAudioRef = useRef(false);

  const toggleHeroMute = () => {
    if (heroVideoRef.current) {
      const nextMuted = !heroVideoRef.current.muted;
      heroVideoRef.current.muted = nextMuted;
      setIsHeroMuted(nextMuted);
      wasPlayingAudioRef.current = !nextMuted;
    }
  };

  // If audio is playing in hero section, automatically pause/mute when scrolling down past hero
  useEffect(() => {
    const handleScroll = () => {
      if (!heroVideoRef.current) return;
      // Scroll threshold: 55% of viewport height (past hero section)
      const isPastHero = window.scrollY > window.innerHeight * 0.55;

      if (isPastHero) {
        if (!heroVideoRef.current.muted) {
          wasPlayingAudioRef.current = true;
          heroVideoRef.current.muted = true;
          setIsHeroMuted(true);
        }
      } else {
        // When user scrolls back up into hero, restore audio if user had unmuted it
        if (wasPlayingAudioRef.current && heroVideoRef.current.muted) {
          heroVideoRef.current.muted = false;
          setIsHeroMuted(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState<string>("ROVERA — Phase 1 Villa Plot");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [galleryCategory, setGalleryCategory] = useState<"Clubhouse" | "Landscape">("Clubhouse");
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formConfig, setFormConfig] = useState("Courtyard Villa Parcel (1,500 Sq.Ft)");
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Snapshot number counter active state on scroll into view
  const snapshotRef = useRef<HTMLDivElement>(null);
  const [snapshotActive, setSnapshotActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSnapshotActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (snapshotRef.current) {
      observer.observe(snapshotRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Strictly prevent browser from restoring scroll position to middle of the page
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      // If URL contains an accidental section hash (like #we-do), clean it to guarantee top hero start
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }

    // Play loading page GIF for full cycle (1.8s) before smooth theatrical cross-dissolve
    const fadeTimer = setTimeout(() => {
      setLoadingFading(true);
      const doneTimer = setTimeout(() => {
        setPageLoading(false);
        if (typeof window !== "undefined") {
          window.scrollTo(0, 0);
        }
      }, 700);
      return () => clearTimeout(doneTimer);
    }, 1800);

    return () => clearTimeout(fadeTimer);
  }, []);

  // Lock scroll completely while loading screen is visible to prevent opening from the middle
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (pageLoading) {
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      } else {
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
        const globalLenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void; resize: () => void } }).__lenis;
        if (globalLenis) {
          globalLenis.scrollTo(0, { immediate: true });
          globalLenis.resize();
        }
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [pageLoading]);

  // Luxury scroll animation observer for text, cards, and images
  useEffect(() => {
    if (pageLoading || typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pageLoading]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formPhone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length !== 10) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
    setFormLoading(true);

    const clientName = formName.trim() || "Prospective Buyer";
    const clientPhone = cleanPhone;
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

  // 01. Why ROVERA (Architectural Showcase)
  const whyRoveraItems = [
    {
      id: "luxury",
      label: "Quiet Luxury",
      title: "Crafted for Quiet Luxury",
      text: "An atmosphere designed for calm, elevated living in North Bangalore.",
      image: "/images/lagos-about1.webp",
      alt: "ROVERA villa plot enclave designed for calm, elevated living",
    },
    {
      id: "planning",
      label: "Purposeful Planning",
      title: "Premium Plots with Purposeful Planning",
      text: "Thoughtfully laid-out villa plots that offer the freedom to design a home that reflects your vision.",
      image: "/images/lagos-landscape7.webp",
      alt: "Thoughtfully planned premium villa plots at ROVERA",
    },
    {
      id: "wellbeing",
      label: "Well-Being",
      title: "A Community Built Around Well-Being",
      text: "Come together to create a neighbourhood that supports balance and everyday ease.",
      image: "/images/lagos-about3.webp",
      alt: "Gated community at ROVERA built around well-being and everyday ease",
    },
    {
      id: "connected",
      label: "Connected",
      title: "Elevated Living, Seamlessly Connected",
      text: "Exclusive, yet effortlessly linked to key hubs, giving you the best of both retreat and access.",
      image: "/images/lagos-about4.webp",
      alt: "ROVERA villa plots seamlessly connected to North Bangalore hubs",
    },
  ];

  // 02. Amenities (12 exact cards from lagos.co.in)
  const lagosAmenities = [
    { src: "/images/amenities/lagos-amenities-clubhouse-exterior.webp", label: "Clubhouse Exterior" },
    { src: "/images/amenities/lagos-amenities-clubhouse-entrance.webp", label: "Clubhouse Entrance" },
    { src: "/images/amenities/lagos-amenities-swimming-pool.webp", label: "Swimming Pool" },
    { src: "/images/amenities/lagos-amenities-coffee-bar.webp", label: "Coffee Bar" },
    { src: "/images/amenities/lagos-amenities-party-space.webp", label: "Party Space" },
    { src: "/images/amenities/lagos-amenities-jogging-track-with-play-area.webp", label: "Jogging Track with Play Area" },
    { src: "/images/amenities/lagos-amenities-kids-park.webp", label: "Kids Park" },
    { src: "/images/amenities/lagos-amenities-pet-park.webp", label: "Pet Park" },
    { src: "/images/amenities/lagos-amenities-picnic-lawn.webp", label: "Picnic Lawn" },
    { src: "/images/amenities/lagos-amenities-senior-citizen-park.webp", label: "Senior Citizen Park" },
    { src: "/images/amenities/lagos-amenities-barbecue-area.webp", label: "Barbecue Area" },
    { src: "/images/amenities/lagos-amenities-wide-driveways.webp", label: "Wide Driveways" },
  ];

  // 03. Gallery (Clubhouse & Landscape views from lagos.co.in)
  const clubhouseGallery = [1, 2, 3, 6, 7, 9].map((e) => ({
    src: `/images/lagos-clubhouse${e}.webp`,
    alt: `ROVERA clubhouse view ${e}`,
  }));

  const landscapeGallery = [1, 6, 3, 9, 4, 7].map((e) => ({
    src: `/images/lagos-landscape${e}.webp`,
    alt: `ROVERA landscape view ${e}`,
  }));

  const activeGalleryList = galleryCategory === "Clubhouse" ? clubhouseGallery : landscapeGallery;

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
    <div className="rovera-apple-typography bg-white text-zinc-950 selection:bg-[#d09800] selection:text-black">
      {/* 00. ROVERA LOADING PAGE OVERLAY */}
      {pageLoading && (
        <div
          role="status"
          aria-label="Loading ROVERA"
          onClick={() => {
            setLoadingFading(true);
            setTimeout(() => {
              setPageLoading(false);
              window.scrollTo(0, 0);
            }, 250);
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loadingFading
              ? "opacity-0 pointer-events-none scale-105 filter blur-[2px]"
              : "opacity-100 scale-100 filter blur-0"
          }`}
        >
          <div className="relative w-64 sm:w-80 md:w-96 max-w-[85vw] aspect-[551/308]">
            <Image
              src="/images/loading-page.gif"
              alt="Loading"
              fill
              unoptimized
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}
      {/* 01. MONUMENTAL HERO SECTION (High-Definition Cinematic Cheetah Video Background) */}
      <section className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-end items-center overflow-hidden bg-black text-white border-b border-zinc-900 pb-8 sm:pb-10">
        
        {/* Full-bleed Edge-to-Edge Cinematic Cheetah Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted={isHeroMuted}
            playsInline
            preload="auto"
            poster="/images/cheetah-hero-poster.jpg"
            className="w-full h-full object-cover object-center scale-[1.08] pointer-events-none"
          >
            <source src="/videos/cheetah-hero.mp4" type="video/mp4" />
          </video>
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Audio Mute/Unmute toggle for Cheetah Hero Video: Icon Only */}
        <button
          type="button"
          onClick={toggleHeroMute}
          aria-label={isHeroMuted ? "Unmute cheetah video audio" : "Mute cheetah video audio"}
          title={isHeroMuted ? "Unmute audio" : "Mute audio"}
          className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-[#d09800] transition-all shadow-xl cursor-pointer hover:border-[#d09800] hover:scale-105 active:scale-95"
        >
          {isHeroMuted ? (
            <VolumeX className="w-5 h-5 text-[#d09800]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#d09800]" />
          )}
        </button>

        {/* Elegant scroll indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2 pointer-events-none select-none opacity-85 transition-opacity">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-white/80 animate-bounce" />
        </div>

      </section>

      {/* 03. SECTION: PROJECT SNAPSHOT (#snapshot) — EXACT IMAGE 2 DESIGN */}
      <section id="snapshot" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-4">
                Project Snapshot
              </p>
              <div className="space-y-1">
                <span className="font-componentry text-3xl sm:text-5xl font-medium tracking-tight text-zinc-950 block">
                  Welcome to
                </span>
                <div className="relative h-11 sm:h-14 md:h-16 w-48 sm:w-64 md:w-80 -ml-1">
                  <Image
                    src="/images/rovera-logo-color.png"
                    alt="ROVERA"
                    fill
                    priority
                    sizes="(max-width: 768px) 250px, 320px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="mt-6 text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed font-normal">
                Luxury Villa Plots for Sale in North Bangalore. 3 acres of gated community living near Devanahalli and Yelahanka. Just 30 minutes from Kempegowda International Airport and 5 minutes from Doddaballapur. Easy STRR access. Ready-to-build villa plots near everything that matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openEnquiry("Download ROVERA Brochure")}
                className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-zinc-950 text-white hover:bg-[#d09800] hover:text-black font-semibold text-xs sm:text-sm uppercase tracking-wider font-mono transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* 4 Large Rounded Stat Cards with Animated Counter (matching lagos.co.in) */}
          <div ref={snapshotRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: 3, decimals: 0, suffix: "", label: "Acres" },
              { value: 24, decimals: 0, suffix: "", label: "Villa Plots" },
              { value: 1500, decimals: 0, suffix: "+", label: "Sq Ft & Above" },
              { value: 10000, decimals: 0, suffix: "", label: "Sq Ft Clubhouse" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center justify-center min-h-[130px] sm:min-h-[160px] border border-zinc-200/80 shadow-xs hover:border-[#d09800]/50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#d09800]">
                  <AnimatedCounter
                    target={item.value}
                    decimals={item.decimals}
                    suffix={item.suffix}
                    active={snapshotActive}
                  />
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* 3 Pill Badges matching Lagos layout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="bg-white border border-zinc-200/80 rounded-full py-3 px-5 sm:py-3.5 sm:px-6 flex items-center gap-2 shadow-xs">
              <MapPin className="w-4 h-4 text-[#d09800] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">Devanahalli-Doddaballapura Road</span>
            </div>
            <div className="bg-white border border-zinc-200/80 rounded-full py-3 px-5 sm:py-3.5 sm:px-6 flex items-center gap-2 shadow-xs">
              <Layers className="w-4 h-4 text-[#d09800] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">1,500 – 4,800 sq.ft Plots</span>
            </div>
            <div className="bg-white border border-zinc-200/80 rounded-full py-3 px-5 sm:py-3.5 sm:px-6 flex items-center gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#d09800] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">RERA Approved &amp; Clear Title</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 05. SECTION: ARCHITECTURAL STATEMENT & DOUBLE-HEIGHT GATES (#gates) */}
      <section id="gates" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#d09800] mb-2">
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
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-white">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wide text-[#d09800] block mb-0.5">
                  8-Meter Monumental Portal
                </span>
                <p className="font-componentry text-base sm:text-2xl lg:text-3xl font-medium tracking-[-0.04em] text-white leading-tight">
                  Cantilevered Flamed Basalt &amp; Ribbed Concrete Portal
                </p>
              </div>
              <span className="self-start sm:self-auto bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-xs uppercase tracking-wider font-mono font-medium rounded-full shrink-0 shadow">
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
                  className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#d09800]/50 transition-colors min-h-[120px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-[#d09800] shadow-2xs shrink-0">
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
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-[#d09800] flex items-center justify-center mb-2">
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
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-[#d09800] flex items-center justify-center mb-2">
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
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-[#d09800] flex items-center justify-center mb-2">
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


      {/* 07. SECTION: WHY ROVERA (#why-rovera) */}
      <section id="why-rovera" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-3">
              Why ROVERA
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
              An exclusive lifestyle where<br className="hidden sm:inline" />{" "}
              <span className="text-[#d09800]">calm meets connectivity</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-4 font-normal leading-relaxed">
              Lush green surroundings and open skies in a gated community built for wellness and leisure — space to build your forever home, a weekend retreat, or a high-growth investment in North Bangalore&apos;s fastest-growing corridor.
            </p>
          </div>

          {/* 4 Alternating Visual Showcase Cards with Lagos scrolling animation */}
          <div className="space-y-6 sm:space-y-8">
            {whyRoveraItems.map((item, idx) => (
              <div
                key={item.id}
                className={`grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-10 items-stretch rounded-3xl bg-white border border-zinc-200/90 shadow-xs overflow-hidden ${
                  idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden aspect-[4/3] md:aspect-auto min-h-[260px] md:min-h-[380px] bg-zinc-900"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center p-6 sm:p-10 lg:p-12"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d09800] mb-3 font-semibold">
                    {item.label}
                  </p>
                  <h3 className="font-componentry text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-[1.15] mb-3.5 text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. SECTION: AMENITIES (#amenities) — DIRECT FROM LAGOS.CO.IN */}
      <section id="amenities" className="reveal-on-scroll py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-2">
              Amenities
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
              Everything you need to <span className="text-[#d09800]">live your best life.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3.5 font-normal leading-relaxed">
              A 10,000 sq.ft clubhouse and thoughtfully planned outdoor spaces for wellness, play and community — right at your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {lagosAmenities.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.07 }}
                whileHover={{ y: -4 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl group border border-zinc-200/90 shadow-xs bg-zinc-900 cursor-pointer"
                onClick={() => setSelectedLightboxImage(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm md:text-base font-medium drop-shadow-sm leading-tight">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-zinc-500 mt-8 font-mono">
            Artist&apos;s impression. Amenities are indicative and subject to change.
          </p>
        </div>
      </section>

      {/* 09. SECTION: GALLERY (#gallery) — DIRECT FROM LAGOS.CO.IN */}
      <section id="gallery" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10 text-center mx-auto">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-2">
              Gallery
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
              A closer look at ROVERA.
            </h2>
          </div>

          {/* Category Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
            {(["Clubhouse", "Landscape"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setGalleryCategory(tab)}
                className={`px-6 h-11 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                  galleryCategory === tab
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                    : "border-zinc-300 text-zinc-600 bg-white hover:border-zinc-950 hover:text-zinc-950"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {activeGalleryList.map((item, idx) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedLightboxImage(item.src)}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer border border-zinc-200/90 shadow-xs bg-zinc-900"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors pointer-events-none" />
                <span className="absolute bottom-2.5 right-2.5 text-[9px] text-white/90 tracking-wide font-light pointer-events-none bg-black/40 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                  Artist&apos;s impression
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SECTION: MASTER PLAN (#master-plan) */}
      <section id="master-plan" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#d09800] mb-2">
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
                <span className="bg-[#d09800] text-black font-semibold text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  3.00 Acres Enclave
                </span>
                <span className="bg-black/70 backdrop-blur-xs text-white text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  24 Villa Plots
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/75 hover:bg-black text-white text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-2 pointer-events-auto transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </div>
            </div>

            {/* Plot Configuration Highlights Bar */}
            <div className="mt-6 pt-6 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#d09800] font-semibold uppercase tracking-wider block">Courtyard Plot</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">1,500 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">30&apos; × 50&apos; • 6 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#d09800] font-semibold uppercase tracking-wider block">Signature Plot</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">2,400 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">40&apos; × 60&apos; • 12 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#d09800] font-semibold uppercase tracking-wider block">Grand Estate</span>
                <span className="font-componentry text-base sm:text-lg font-medium text-zinc-950">3,500 Sq.Ft</span>
                <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">50&apos; × 70&apos; • 4 Plots</span>
              </div>
              <div className="p-4 bg-[#fafaf8] rounded-xl border border-zinc-200/80">
                <span className="text-[10px] font-mono text-[#d09800] font-semibold uppercase tracking-wider block">Bespoke Corner</span>
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
                  className="flex-1 sm:flex-initial px-6 py-3 bg-[#d09800] text-black font-semibold hover:bg-[#b58400] rounded-full font-mono text-xs uppercase tracking-wider transition-colors shadow-sm"
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
      <section id="walkthrough" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#d09800] mb-2">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
              <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-medium">
                4K Master Video Tour
              </span>
            </div>
            {/* Desktop Overlay Action Bar */}
            <div className="hidden sm:flex absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 items-center justify-between gap-3 text-white">
              <span className="font-mono uppercase tracking-wide text-xs text-white/90">
                Drone Aerial &amp; Architectural Video Tour
              </span>
              <button
                type="button"
                onClick={() => openEnquiry("Schedule Chauffeured Site Visit")}
                className="inline-flex items-center justify-center bg-[#d09800] hover:bg-[#b58400] text-black px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-95 cursor-pointer text-center"
              >
                Book Chauffeured Visit
              </button>
            </div>
          </div>

          {/* Mobile-optimized action bar placed cleanly below video (avoids cramping video on phones) */}
          <div className="mt-3.5 sm:hidden flex flex-col gap-2">
            <span className="font-mono uppercase tracking-wide text-[11px] text-zinc-500 font-medium">
              Drone Aerial &amp; Architectural Video Tour
            </span>
            <button
              type="button"
              onClick={() => openEnquiry("Schedule Chauffeured Site Visit")}
              className="w-full inline-flex items-center justify-center bg-[#d09800] hover:bg-[#b58400] text-black px-5 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-95 cursor-pointer text-center"
            >
              Book Chauffeured Visit
            </button>
          </div>
        </div>
      </section>


      {/* 14. SECTION: LOCATION & CONNECTIVITY (#location / #connected) */}
      <section id="location" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#d09800] mb-2">
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
                  className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#d09800]/50 transition-colors min-h-[130px] sm:min-h-[145px]"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-[#d09800] shadow-2xs shrink-0">
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
                className="bg-white border border-zinc-200 p-6 rounded-2xl space-y-3 hover:border-[#d09800] transition-colors shadow-2xs"
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
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#d09800] block mt-0.5">
                    {item.category}
                  </span>
                </div>
                <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          {/* Exact Address & Map Banner with Cheetah Gold Accents */}
          <div className="p-8 bg-zinc-950 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl border border-zinc-800">
            <div className="space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wide text-[#d09800]">
                GPS Site Address
              </span>
              <h3 className="font-componentry text-xl sm:text-2xl font-medium tracking-[-0.03em] text-white">
                Devanahalli, Doddaballapura Main Rd, Kasaba Hobli, Shivapura, Doddaballapur, Karnataka 562163
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-light">
                Direct State Highway 9 frontage, adjacent to STRR interchange and KIADB Aerospace corridor.
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Pnt9SjxeLpJLzs179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d09800] text-black font-semibold px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wide hover:bg-[#b58400] transition-colors shrink-0 self-start sm:self-auto shadow"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </section>

      {/* 15. SECTION: TESTIMONIALS & LEADERSHIP (#testimonials) */}
      <section id="testimonials" className="reveal-on-scroll py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#d09800] mb-2">
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
                <span className="font-clash text-sm text-[#d09800] font-semibold">2,400 Sq.Ft Plot</span>
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

      {/* 16. SECTION: PRICING & PAYMENT STRUCTURE (#pricing) — EXACT LAGOS DESIGN */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-3">
              Pricing
            </p>
            <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-zinc-950 leading-[1.08]">
              Plot sizes &amp; <span className="text-[#d09800]">starting prices.</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-3.5 font-normal leading-relaxed">
              Indicative starting prices for our villa plots. Get the complete cost sheet for plot-wise availability and full details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {/* Card 1: Curated Plot */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white text-zinc-950 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-3 sm:mb-4">
                  Curated Plot
                </p>
                <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-zinc-950">
                  ₹ 85 Lakhs*
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8">
                  Starting · 1,500 sq ft (30&apos; × 50&apos;)
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry("1,500 Sq.Ft Curated Plot Cost Sheet")}
                className="w-full h-12 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono bg-zinc-950 text-white hover:bg-[#d09800] hover:text-black transition-all duration-300 shadow-xs cursor-pointer"
              >
                Get Cost Sheet
              </button>
            </motion.div>

            {/* Card 2: Signature Plot (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-zinc-950 text-white shadow-2xl md:scale-[1.02] border border-zinc-800 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#d09800] text-black text-[10px] font-mono font-bold uppercase tracking-widest px-3.5 sm:px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-3 sm:mb-4">
                  Signature Plot
                </p>
                <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
                  ₹ 1.35 Cr*
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-6 sm:mb-8">
                  Starting · 2,400 sq ft (40&apos; × 60&apos;)
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry("2,400 Sq.Ft Signature Plot Cost Sheet")}
                className="w-full h-12 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono bg-[#d09800] text-black hover:bg-white hover:text-black transition-all duration-300 shadow-md cursor-pointer"
              >
                Get Cost Sheet
              </button>
            </motion.div>

            {/* Card 3: Grand Estate */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white text-zinc-950 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d09800] mb-3 sm:mb-4">
                  Grand Estate
                </p>
                <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-zinc-950">
                  On Request*
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mb-6 sm:mb-8">
                  Starting · 3,500+ sq ft (50&apos; × 70&apos;)
                </p>
              </div>
              <button
                type="button"
                onClick={() => openEnquiry("3,500+ Sq.Ft Grand Estate Cost Sheet")}
                className="w-full h-12 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono bg-zinc-950 text-white hover:bg-[#d09800] hover:text-black transition-all duration-300 shadow-xs cursor-pointer"
              >
                Get Cost Sheet
              </button>
            </motion.div>
          </div>

          <p className="text-center text-xs text-zinc-500 mt-8 font-mono">
            *Prices indicative, subject to revision. Excludes statutory charges and registration.
          </p>
        </div>
      </section>

      {/* 17. SECTION: FAQ ACCORDION (#faq) */}
      <section id="faq" className="reveal-on-scroll py-20 sm:py-28 bg-white border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#d09800] mb-2">
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
                    <span className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-[#d09800]">
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
      <section id="about-stthira" className="reveal-on-scroll py-20 sm:py-28 bg-[#fafaf8] border-b border-zinc-200 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <StthiraEmblem className="text-zinc-950 w-10 h-12" />
          </div>
          <p className="font-mono text-xs font-medium uppercase tracking-wide text-[#d09800]">
            About the Master Developer
          </p>
          <h2 className="font-componentry text-balance text-3xl sm:text-5xl font-medium tracking-[-0.05em] text-zinc-950 leading-[1.04]">
            Where Luxury Find Its Address
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
          charColor="#d09800"
          hoverColor="#d09800"
          hoverCharColor="#ffffff"
          className="pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 border-t border-zinc-200 bg-white"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            {/* Header: "Let's Connect" */}
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="font-componentry text-balance text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.04em] text-zinc-950 leading-[1.06]">
                Let&apos;s <span className="text-[#d09800]">Connect</span>
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
                      className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#d09800] focus:bg-white transition-all shadow-2xs"
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
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        name="phone"
                        value={formPhone}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
                            !e.ctrlKey &&
                            !e.metaKey
                          ) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormPhone(digitsOnly);
                        }}
                        placeholder="10-digit mobile number"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#d09800] focus:bg-white transition-all shadow-2xs"
                      />
                      {formPhone.length > 0 && formPhone.length < 10 && (
                        <p className="text-[11px] text-amber-600 mt-1 pl-1 font-mono">
                          10 digits required ({formPhone.length}/10)
                        </p>
                      )}
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
                        className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#d09800] focus:bg-white transition-all shadow-2xs"
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
                      className="w-full h-12 px-4 rounded-xl border border-zinc-300/80 bg-white/75 backdrop-blur-xs text-zinc-900 text-base sm:text-sm focus:outline-hidden focus:border-[#d09800] focus:bg-white transition-all shadow-2xs"
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
                      className="w-full h-12 rounded-full bg-[#d09800] text-black font-semibold hover:bg-[#b58400] disabled:opacity-60 text-white font-mono text-xs uppercase tracking-wide font-medium transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
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
