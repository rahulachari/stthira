"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, ShieldAlert, CheckCircle, Info } from "lucide-react";

export default function MasterPlanVisualizer() {
  const [activeZone, setActiveZone] = useState<string>("all");

  const zones = [
    { id: "all", name: "Full Master Plan", count: "42+ Acres" },
    { id: "estate", name: "Master Estates (50'×80')", count: "4,000+ Sq.Ft" },
    { id: "signature", name: "Signature Plots (40'×60')", count: "2,400 Sq.Ft" },
    { id: "executive", name: "Executive Plots (30'×50')", count: "1,500 Sq.Ft" },
    { id: "civic", name: "Monolith Clubhouse & Green Spine", count: "45% Dedicated" },
  ];

  return (
    <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-10 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">
            ROVERA Master Plan • 42+ Acres Master-Planned Enclave
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wider">
            ZONING ARCHITECTURE & INFRASTRUCTURE MATRIX
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-sans">
          <Layers className="w-4 h-4 text-neutral-300" />
          <span>Interactive Architectural Zoning</span>
        </div>
      </div>

      {/* Zone Switcher */}
      <div className="flex flex-wrap gap-2 mb-8 text-xs uppercase tracking-widest font-sans">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setActiveZone(zone.id)}
            className={`px-4 py-2.5 transition-all flex items-center gap-2 border ${
              activeZone === zone.id
                ? "bg-white text-black border-white font-medium"
                : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
            }`}
          >
            <span>{zone.name}</span>
            <span className={`text-[9px] px-1.5 py-0.5 ${activeZone === zone.id ? "bg-neutral-200 text-black" : "bg-neutral-800 text-neutral-400"}`}>
              {zone.count}
            </span>
          </button>
        ))}
      </div>

      {/* Plan Visual Canvas */}
      <div className="relative aspect-[16/9] bg-neutral-900 border border-neutral-800 overflow-hidden mb-6 group">
        <Image
          src="/images/masterplan-visual.jpg"
          alt="ROVERA Architectural Master Plan Layout"
          fill
          className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
        />

        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-subtle-pattern-dark pointer-events-none opacity-40" />

        {/* Dynamic Zone Information Pill */}
        <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-neutral-700 px-4 py-2 text-xs uppercase tracking-widest font-sans">
          <span className="text-neutral-400">Viewing: </span>
          <span className="text-white font-medium">
            {zones.find((z) => z.id === activeZone)?.name}
          </span>
        </div>

        {/* Conceptual Visual Disclaimer Watermark */}
        <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md border border-neutral-800 px-3 py-1.5 text-[10px] text-neutral-400 uppercase tracking-wider font-sans flex items-center gap-2">
          <Info className="w-3.5 h-3.5" />
          <span>Conceptual Visual Representation • Subject To Final Statutory Sanctions</span>
        </div>
      </div>

      {/* Infrastructure Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900 text-xs font-sans text-neutral-400">
        <div className="flex items-start gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800/80">
          <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block uppercase tracking-wider text-[11px]">Underground Grid</strong>
            100% underground high-tension power, optical fiber, potable water & rainwater storm networks.
          </div>
        </div>
        <div className="flex items-start gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800/80">
          <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block uppercase tracking-wider text-[11px]">50-Foot Arterials</strong>
            Wide tree-lined main avenues with permeable interlocking concrete pavers and bioswales.
          </div>
        </div>
        <div className="flex items-start gap-2.5 p-3 bg-neutral-900/40 border border-neutral-800/80">
          <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block uppercase tracking-wider text-[11px]">3-Tier Security</strong>
            Monitored perimeter intrusion detection, smart RFID boom barriers, and round-the-clock guards.
          </div>
        </div>
      </div>
    </div>
  );
}

