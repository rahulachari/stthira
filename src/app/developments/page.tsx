"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Maximize, CheckCircle2 } from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";

export default function DevelopmentsPage() {
  const [selectedPillar, setSelectedPillar] = useState<string>("All");

  const pillars = ["All", "ROVERA", "STTHIRA", "AKSHARA"];

  const filtered = selectedPillar === "All"
    ? DEVELOPMENTS
    : DEVELOPMENTS.filter((dev) => dev.pillar === selectedPillar);

  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              STTHIRA Master Portfolio
            </span>
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95]">
              OUR DEVELOPMENTS
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              An expanding portfolio of institutional-grade plotted living enclaves across India, anchored by architectural restraint and lifelong permanence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Brand Pillar & Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-8 mb-16 text-xs uppercase tracking-widest font-sans">
          <div className="flex flex-wrap gap-2">
            {pillars.map((pil) => (
              <button
                key={pil}
                onClick={() => setSelectedPillar(pil)}
                className={`px-5 py-2.5 transition-all ${
                  selectedPillar === pil
                    ? "bg-black text-white font-medium shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {pil === "All" ? "All Three Pillars" : pil}
                {pil === "All" ? ` (${DEVELOPMENTS.length})` : ""}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-neutral-500 font-sans tracking-wider">
            Showing {filtered.length} of {DEVELOPMENTS.length} Developments
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-24">
          {filtered.map((dev) => (
            <div
              key={dev.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border border-neutral-200 p-6 sm:p-12 bg-neutral-50 hover:border-black transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              {/* Media Preview */}
              <div className="lg:col-span-7 relative aspect-[16/10] bg-neutral-900 overflow-hidden border border-neutral-300">
                <Image
                  src={dev.coverImage}
                  alt={dev.name}
                  fill
                  className="object-cover object-center grayscale contrast-120 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] uppercase tracking-widest font-sans font-medium">
                  {dev.statusBadge}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dev.location}</span>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {dev.slug === "rovera" && (
                      <div className="relative w-10 h-10">
                        <Image
                          src="/images/rovera-logo-dark.png"
                          alt="ROVERA Official Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-sans block">
                        Master Brand: {dev.brand}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-sans">
                        {dev.statusBadge}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-wider font-light text-black">
                    {dev.name}
                  </h2>
                  <p className="font-editorial italic text-neutral-600 text-lg sm:text-xl mt-1">
                    &ldquo;{dev.tagline}&rdquo;
                  </p>
                </div>

                <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                  {dev.shortIntro}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-200 text-xs font-sans">
                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Scale</span>
                    <span className="text-black font-medium">{dev.acres}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Availability</span>
                    <span className="text-black font-medium">{dev.plotsCount}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Category</span>
                    <span className="text-black font-medium">{dev.category} Development</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 uppercase tracking-widest text-[10px] block">Pricing</span>
                    <span className="text-black font-medium">{dev.priceGuide}</span>
                  </div>
                </div>

                {/* Action Link strictly obeying arrow indication rule */}
                <div className="pt-2">
                  {dev.slug === "rovera" ? (
                    <Link
                      href={`/developments/${dev.slug}`}
                      className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-800 transition-colors"
                    >
                      <span>Explore ROVERA Showcase</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : dev.slug === "akshara-meadows" ? (
                    <Link
                      href={`/developments/${dev.slug}`}
                      className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-800 transition-colors"
                    >
                      <span>Explore AKSHARA MEADOWS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      href={`/developments/${dev.slug}`}
                      className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-800 transition-colors"
                    >
                      <span>Explore STTHIRA TERRA</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scalability Notice & Fiduciary Statement */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-sans block">
            Future Development Pipeline
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wider text-black">
            SCALABILITY &amp; LAND ACQUISITION PROTOCOLS
          </h3>
          <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
            STTHIRA reviews institutional land opportunities meeting our stringent 30-year forensic legal criteria and natural topographical standards. Additional plotted enclaves in prime growth corridors will be introduced under the STTHIRA portfolio following statutory layout clearances.
          </p>
        </div>
      </section>
    </div>
  );
}

