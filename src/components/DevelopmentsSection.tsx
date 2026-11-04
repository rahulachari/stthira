"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";
import { DEVELOPMENTS, Development } from "@/lib/data";
import StthiraEmblem from "./StthiraEmblem";

export default function DevelopmentsSection() {
  const [activePillar, setActivePillar] = useState<"ROVERA" | "STTHIRA" | "AKSHARA">("ROVERA");

  const rovera = DEVELOPMENTS.find((d) => d.id === "rovera") || DEVELOPMENTS[0];
  const stthira = DEVELOPMENTS.find((d) => d.id === "terra") || DEVELOPMENTS[1];
  const akshara = DEVELOPMENTS.find((d) => d.id === "akshara-meadows") || DEVELOPMENTS[2];

  const activeProject: Development =
    activePillar === "ROVERA" ? rovera : activePillar === "STTHIRA" ? stthira : akshara;

  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2 font-sans">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Master Development Portfolio</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
              OUR DEVELOPMENTS
            </h2>
            <p className="font-sans text-neutral-400 text-sm mt-3 max-w-xl font-light">
              Explore the three architectural pillars of our development portfolio: <strong className="text-white font-medium">ROVERA</strong>, <strong className="text-white font-medium">STTHIRA</strong>, and <strong className="text-white font-medium">AKSHARA</strong>.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block font-sans">
              Institutional Plotted Land
            </span>
            <span className="font-editorial text-xl sm:text-2xl text-white uppercase tracking-wider font-light">
              ROVERA • STTHIRA • AKSHARA
            </span>
          </div>
        </div>

        {/* 3 Pillar Selectors (ROVERA, STTHIRA, AKSHARA) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Pillar 1: ROVERA */}
          <button
            onClick={() => setActivePillar("ROVERA")}
            className={`text-left p-6 border transition-all duration-300 relative ${
              activePillar === "ROVERA"
                ? "bg-neutral-900 border-white text-white shadow-xl"
                : "bg-black/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans">
                01 • Featured Flagship
              </span>
              <span className={`w-2 h-2 rounded-full ${activePillar === "ROVERA" ? "bg-white" : "bg-neutral-700"}`} />
            </div>
            <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
              ROVERA
            </h3>
            <p className="text-xs font-sans text-neutral-400 mt-1 line-clamp-1">
              Luxury Plotted Living in North Bengaluru
            </p>
          </button>

          {/* Pillar 2: STTHIRA */}
          <button
            onClick={() => setActivePillar("STTHIRA")}
            className={`text-left p-6 border transition-all duration-300 relative ${
              activePillar === "STTHIRA"
                ? "bg-neutral-900 border-white text-white shadow-xl"
                : "bg-black/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans">
                02 • Sovereign Developer
              </span>
              <span className={`w-2 h-2 rounded-full ${activePillar === "STTHIRA" ? "bg-white" : "bg-neutral-700"}`} />
            </div>
            <div className="flex items-center gap-2">
              <StthiraEmblem className="text-white w-4 h-5" />
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                STTHIRA
              </h3>
            </div>
            <p className="text-xs font-sans text-neutral-400 mt-1 line-clamp-1">
              STTHIRA TERRA Eco-Luxury Sanctuaries
            </p>
          </button>

          {/* Pillar 3: AKSHARA */}
          <button
            onClick={() => setActivePillar("AKSHARA")}
            className={`text-left p-6 border transition-all duration-300 relative ${
              activePillar === "AKSHARA"
                ? "bg-neutral-900 border-white text-white shadow-xl"
                : "bg-black/60 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans">
                03 • Strategic Alliance
              </span>
              <span className={`w-2 h-2 rounded-full ${activePillar === "AKSHARA" ? "bg-white" : "bg-neutral-700"}`} />
            </div>
            <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
              AKSHARA
            </h3>
            <p className="text-xs font-sans text-neutral-400 mt-1 line-clamp-1">
              AKSHARA MEADOWS Strategic Plotted Enclave
            </p>
          </button>
        </div>

        {/* Active Project Highlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-black border border-neutral-800 p-6 sm:p-12 mb-16 shadow-2xl">
          {/* Visual Media Stage */}
          <div className="lg:col-span-7 relative aspect-[16/10] bg-neutral-900 border border-neutral-800 overflow-hidden group">
            <Image
              src={activeProject.coverImage || activeProject.heroImage}
              alt={activeProject.name}
              fill
              className="object-cover object-center grayscale contrast-120 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[10px] uppercase tracking-widest font-medium font-sans">
              {activeProject.statusBadge}
            </div>

            <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm border border-neutral-700 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-sans">
              {activeProject.brand}
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 block mb-1 font-sans">
                Location Matrix
              </span>
              <p className="font-editorial text-xl sm:text-2xl text-white uppercase tracking-wide">
                {activeProject.location}
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {activeProject.slug === "rovera" && (
                  <div className="relative w-20 h-10">
                    <Image
                      src="/images/rovera-logo-white.png"
                      alt="ROVERA Official Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {activeProject.pillar === "STTHIRA" && (
                  <StthiraEmblem className="text-white w-7 h-9 shrink-0" />
                )}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans block">
                    Pillar: {activeProject.pillar}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans">
                    {activeProject.brand}
                  </span>
                </div>
              </div>

              <h3 className="font-editorial text-4xl sm:text-5xl uppercase tracking-wide text-white font-light">
                {activeProject.name}
              </h3>
              <p className="font-editorial italic text-neutral-400 text-base sm:text-lg mt-1">
                &ldquo;{activeProject.tagline}&rdquo;
              </p>
            </div>

            <p className="text-neutral-400 text-sm font-sans leading-relaxed font-light">
              {activeProject.shortIntro}
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-900 text-xs font-sans">
              <div>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Scale & Area</span>
                <span className="text-white font-medium text-sm">{activeProject.acres}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Availability</span>
                <span className="text-white font-medium text-sm">{activeProject.plotsCount}</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Category</span>
                <span className="text-white font-medium text-sm">{activeProject.category} Development</span>
              </div>
              <div>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Pricing Matrix</span>
                <span className="text-white font-medium text-sm">{activeProject.priceGuide}</span>
              </div>
            </div>

            {/* CTAs strictly obeying arrow rule: takesToAnotherPage has ↗ */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              {activeProject.slug === "rovera" ? (
                <Link
                  href="/developments/rovera"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
                >
                  <span>Explore ROVERA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ) : activeProject.slug === "akshara-meadows" ? (
                <a
                  href="https://akshara-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
                >
                  <span>Visit AKSHARA Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href="/developments/terra"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
                >
                  <span>Explore STTHIRA TERRA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}

              <Link
                href="/developments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-700 px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                <span>All 3 Developments</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Summary Grid: ROVERA, STTHIRA, AKSHARA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {DEVELOPMENTS.map((dev) => (
            <div
              key={dev.id}
              className="bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-600 transition-colors group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-neutral-800">
                  <Image
                    src={dev.coverImage}
                    alt={dev.name}
                    fill
                    className="object-cover grayscale contrast-120 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] uppercase tracking-widest text-neutral-300 font-sans">
                    {dev.pillar}
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-sans block mb-1">
                  {dev.brand}
                </span>
                <h4 className="font-editorial text-2xl uppercase tracking-wider text-white font-light">
                  {dev.name}
                </h4>
                <p className="text-xs text-neutral-400 font-sans mt-2 line-clamp-2 font-light">
                  {dev.shortIntro}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-sans">{dev.acres} • {dev.plotsCount}</span>
                <Link
                  href={
                    dev.slug === "rovera"
                      ? "/developments/rovera"
                      : dev.slug === "akshara-meadows"
                      ? "/developments/akshara-meadows"
                      : "/developments/terra"
                  }
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-white hover:text-neutral-300 font-sans font-medium"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

