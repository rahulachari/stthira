"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EnquiryModal from "./EnquiryModal";
import { useLanguage } from "@/context/LanguageContext";
import StthiraEmblem from "./StthiraEmblem";

export default function CinematicHero() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Architectural Canvas / Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="STTHIRA Luxury Plotted Development Entrance Architecture"
            fill
            priority
            quality={95}
            className="object-cover object-center grayscale contrast-110 brightness-90"
          />
        </div>

        {/* Sophisticated Monochromatic Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center pt-24 pb-16">
        {/* Subtle Corporate Identity Header */}
        <div className="inline-flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-neutral-300 font-sans">
            {t("hero.badge", "STTHIRA • Master Plotted Developments • 2026")}
          </span>
        </div>

        {/* STTHIRA Official Brand Lockup (Matches Nav Bar: Emblem on Left, Wordmark & EST. 2026 • INDIA on Right) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-7 mb-6 select-none">
          <StthiraEmblem className="text-white w-8 h-10 sm:w-14 sm:h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 drop-shadow-2xl shrink-0" />
          <div className="flex flex-col items-start text-left">
            <h1 className="font-editorial text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.08em] sm:tracking-[0.1em] uppercase text-white leading-none">
              {t("hero.brand", "STTHIRA")}
            </h1>
            <span className="font-sans text-[8px] sm:text-[11px] md:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-300 uppercase mt-1">
              EST. 2026 • INDIA
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-6">
          <h2 className="font-editorial text-xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase text-neutral-200 leading-tight">
            {t("hero.headline", "BUILDING A LEGACY. SHAPING TOMORROW.")}
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base font-sans text-neutral-300 tracking-wide font-light leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          {t(
            "hero.description",
            "Curating India's premier luxury plotted estates rooted in architectural permanence, forensic legal purity, and fiduciary trust."
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/developments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-medium hover:bg-neutral-200 transition-all duration-300 shadow-xl"
          >
            <span>{t("hero.explore", "Explore Our Developments")}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white px-6 sm:px-8 py-3.5 sm:py-4 font-sans text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span>{t("hero.discover", "Discover STTHIRA")}</span>
          </Link>
        </div>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </section>
  );
}
