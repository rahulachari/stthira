"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EnquiryModal from "./EnquiryModal";
import { useLanguage } from "@/context/LanguageContext";
import StthiraEmblem from "./StthiraEmblem";
import ElectricLogo from "./ui/ElectricLogo";

export default function CinematicHero() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Cinematic Luxury Video (Assetz Property Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-cinematic.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-115 brightness-90 scale-105"
        >
          <source src="/videos/hero-luxury.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Luxury Gradients for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/65 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center pt-24 pb-16">
        {/* Subtle Corporate Identity Header */}
        <div className="inline-flex items-center gap-3 border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 mb-8 animate-fade-in shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-neutral-300 font-sans">
            {t("hero.badge", "STTHIRA • Master Plotted Developments • 2026")}
          </span>
        </div>

        {/* STTHIRA Official Brand Lockup with Interactive React Bits ElectricLogo */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-7 mb-6 select-none">
          <div className="relative w-12 h-14 sm:w-16 sm:h-20 md:w-20 md:h-24 lg:w-24 lg:h-28 shrink-0">
            <ElectricLogo
              src="/images/stthira-emblem-white.png"
              color="#e6e7e9"
              glowColor="#e6e7e9"
              scale={0.75}
              strands={4}
              bend={0.6}
              crackle={0.85}
              arcs={1.3}
              speed={0.4}
              interactive={true}
              intensity={0.25}
              glow={1.15}
              thickness={1.2}
              fill={0.35}
              cursorIntensity={0.55}
              cursorRadius={80}
            />
          </div>
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
          <h2 className="font-editorial text-xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase text-neutral-100 leading-tight">
            {t("hero.headline", "BUILDING A LEGACY. SHAPING TOMORROW.")}
          </h2>
        </div>

        {/* Clear, Understandable Supporting Copy */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base font-sans text-neutral-200 tracking-wide font-light leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          {t(
            "hero.description",
            "Curating India's premier luxury plotted estates rooted in architectural permanence, forensic legal purity, and fiduciary trust."
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button
            type="button"
            onClick={() => setEnquiryOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-7 sm:px-9 py-3.5 sm:py-4 font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-200 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>{t("nav.enquire", "Enquire Now")}</span>
          </button>

          <Link
            href="/developments/rovera"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white px-7 sm:px-9 py-3.5 sm:py-4 font-sans text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
          >
            <span>{t("hero.explore", "Explore ROVERA")}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        projectName="ROVERA (North Bengaluru)"
      />
    </section>
  );
}
