"use client";

import { useState } from "react";
import { PHILOSOPHY_PILLARS } from "@/lib/data";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

export default function PhilosophyInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activePillar = PHILOSOPHY_PILLARS[activeIdx];

  return (
    <section className="bg-black text-white py-24 sm:py-32 border-t border-neutral-900 relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[28vw] font-editorial leading-none font-bold">
        {activePillar.number}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">
              <Compass className="w-4 h-4" />
              <span>Core Brand Direction</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
              REFINED IN THOUGHT. <br />
              <span className="italic text-neutral-400 font-light">BOLD IN VISION.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-md leading-relaxed">
            Our eight foundational pillars dictate every master plan, architectural threshold, and fiduciary commitment under the STTHIRA standard.
          </p>
        </div>

        {/* Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Numbered Pillar Selector */}
          <div className="lg:col-span-5 space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 block mb-4">
              Select Foundational Principle
            </span>
            <div className="divide-y divide-neutral-900 border-y border-neutral-900">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={pillar.number}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left py-4 px-3 flex items-center justify-between transition-all duration-300 group ${
                      isActive ? "bg-white/5 pl-6" : "hover:bg-neutral-950 hover:pl-4"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs tracking-wider transition-colors ${
                          isActive ? "text-white font-semibold" : "text-neutral-500 group-hover:text-neutral-300"
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <span
                        className={`font-editorial text-xl sm:text-2xl uppercase tracking-wider transition-colors ${
                          isActive ? "text-white font-medium" : "text-neutral-400 group-hover:text-neutral-200"
                        }`}
                      >
                        {pillar.title}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive
                          ? "text-white translate-x-1"
                          : "text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Deep-Dive Card */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 sm:p-14 min-h-[480px] flex flex-col justify-between relative shadow-2xl">
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
                <span className="font-editorial text-4xl sm:text-5xl font-light text-neutral-400">
                  {activePillar.number} / 08
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-sans">
                  Pillar Specification
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-5xl uppercase tracking-wide text-white font-light mb-3">
                  {activePillar.title}
                </h3>
                <h4 className="text-neutral-400 font-editorial italic text-lg sm:text-xl mb-6">
                  &ldquo;{activePillar.subtitle}&rdquo;
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base font-sans leading-relaxed tracking-wide font-light">
                  {activePillar.body}
                </p>
              </div>
            </div>

            {/* Quote Footer */}
            <div className="pt-10 mt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 italic font-editorial">
                {activePillar.quote}
              </div>
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-300 font-medium group"
              >
                <span>Read Full Treatise</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

