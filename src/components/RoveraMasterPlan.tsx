"use client";

import { useState } from "react";
import {
  Compass,
  Download,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Trees,
} from "lucide-react";

interface PlotData {
  id: number;
  number: string;
  category: "courtyard" | "signature" | "grand" | "corner";
  name: string;
  dimension: string;
  areaSqFt: string;
  facing: string;
  status: "Available" | "Reserved";
  idealFor: string;
}

const PLOTS: PlotData[] = [
  // Courtyard Villa Parcels (1,500 Sq.Ft) - 6 Plots
  { id: 1, number: "#01", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "East Facing", status: "Available", idealFor: "3–4 BHK Courtyard Residence with Private Lightwell" },
  { id: 2, number: "#02", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "East Facing", status: "Available", idealFor: "Contemporary Villa with Plunge Garden" },
  { id: 3, number: "#03", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "East Facing", status: "Available", idealFor: "Minimalist Multi-Level Residence" },
  { id: 4, number: "#04", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "North Facing", status: "Available", idealFor: "Vaastu-Optimized Modern Villa" },
  { id: 5, number: "#05", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "North Facing", status: "Available", idealFor: "3 BHK Residence with Rooftop Terrace" },
  { id: 6, number: "#06", category: "courtyard", name: "Courtyard Villa Parcel", dimension: "30' × 50'", areaSqFt: "1,500 Sq.Ft", facing: "North Facing", status: "Available", idealFor: "Private Garden Villa" },

  // Signature Sanctuary Plots (2,400 Sq.Ft) - 12 Plots
  { id: 7, number: "#07", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Boulevard Fronting", status: "Available", idealFor: "4–5 BHK Luxury Estate with 2-Car Portico" },
  { id: 8, number: "#08", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Boulevard Fronting", status: "Available", idealFor: "Double-Height Living Salon & Infinity Plunge Pool" },
  { id: 9, number: "#09", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Park Fronting", status: "Available", idealFor: "Architectural Villa with Central Light Atrium" },
  { id: 10, number: "#10", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Park Fronting", status: "Available", idealFor: "Private Lawn & Entertainment Deck" },
  { id: 11, number: "#11", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "East Facing", status: "Available", idealFor: "4 BHK Sovereign Villa" },
  { id: 12, number: "#12", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "East Facing", status: "Available", idealFor: "Custom Architectural Pavilion" },
  { id: 13, number: "#13", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "North Facing", status: "Available", idealFor: "Luxury Villa with Landscaped Courtyard" },
  { id: 14, number: "#14", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "North Facing", status: "Available", idealFor: "Executive Plotted Estate" },
  { id: 15, number: "#15", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Boulevard Fronting", status: "Available", idealFor: "5 BHK Multi-Generational Villa" },
  { id: 16, number: "#16", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Boulevard Fronting", status: "Available", idealFor: "Private Pool Estate" },
  { id: 17, number: "#17", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Garden Fronting", status: "Available", idealFor: "Contemporary Brutalist Residence" },
  { id: 18, number: "#18", category: "signature", name: "Signature Sanctuary Plot", dimension: "40' × 60'", areaSqFt: "2,400 Sq.Ft", facing: "Garden Fronting", status: "Available", idealFor: "4 BHK Estate with Private Solarium" },

  // Grand Estate Parcels (3,500 Sq.Ft) - 4 Plots
  { id: 19, number: "#19", category: "grand", name: "Grand Estate Parcel", dimension: "50' × 70'", areaSqFt: "3,500 Sq.Ft", facing: "Central Park Facing", status: "Available", idealFor: "Sprawling Multi-Level Mansion with Staff Quarters" },
  { id: 20, number: "#20", category: "grand", name: "Grand Estate Parcel", dimension: "50' × 70'", areaSqFt: "3,500 Sq.Ft", facing: "Central Park Facing", status: "Available", idealFor: "Palatial 5–6 BHK Estate with Private Swimming Pool" },
  { id: 21, number: "#21", category: "grand", name: "Grand Estate Parcel", dimension: "50' × 70'", areaSqFt: "3,500 Sq.Ft", facing: "Park Fronting", status: "Available", idealFor: "Flagship Architectural Estate" },
  { id: 22, number: "#22", category: "grand", name: "Grand Estate Parcel", dimension: "50' × 70'", areaSqFt: "3,500 Sq.Ft", facing: "Park Fronting", status: "Available", idealFor: "Private Forest Fronting Mansion" },

  // Bespoke Corner Estates (4,800 Sq.Ft) - 2 Plots
  { id: 23, number: "#23", category: "corner", name: "Bespoke Corner Estate", dimension: "Custom Dimension", areaSqFt: "4,600 Sq.Ft", facing: "Dual-Road Panoramic Frontage", status: "Available", idealFor: "Intergenerational Trophy Residence with Driveway" },
  { id: 24, number: "#24", category: "corner", name: "Bespoke Corner Estate", dimension: "Custom Dimension", areaSqFt: "4,800 Sq.Ft", facing: "Dual-Road Panoramic Frontage", status: "Available", idealFor: "Signature Sovereign Villa with 360° Landscaping" },
];

interface RoveraMasterPlanProps {
  onSelectPlot: (plotName: string) => void;
}

export default function RoveraMasterPlan({ onSelectPlot }: RoveraMasterPlanProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePlot, setActivePlot] = useState<PlotData>(PLOTS[6]); // Default to #07 Signature Plot

  const filteredPlots = selectedCategory === "all"
    ? PLOTS
    : PLOTS.filter((p) => p.category === selectedCategory);

  const getCategoryColor = (cat: PlotData["category"], isActive: boolean) => {
    switch (cat) {
      case "courtyard":
        return isActive ? "bg-cyan-500 text-white border-cyan-400" : "bg-cyan-950/40 text-cyan-200 border-cyan-800/60 hover:bg-cyan-900/50";
      case "signature":
        return isActive ? "bg-blue-600 text-white border-blue-400" : "bg-blue-950/40 text-blue-200 border-blue-800/60 hover:bg-blue-900/50";
      case "grand":
        return isActive ? "bg-indigo-600 text-white border-indigo-400" : "bg-indigo-950/40 text-indigo-200 border-indigo-800/60 hover:bg-indigo-900/50";
      case "corner":
        return isActive ? "bg-amber-600 text-white border-amber-400" : "bg-amber-950/40 text-amber-200 border-amber-800/60 hover:bg-amber-900/50";
    }
  };

  return (
    <div className="w-full bg-[#080E1A] text-white rounded-3xl border border-blue-950/80 shadow-2xl overflow-hidden font-sans">
      {/* Blueprint Top Header Bar */}
      <div className="p-6 sm:p-8 border-b border-blue-950 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#0B1424]">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-300 mb-2">
            <Compass className="w-4 h-4 text-blue-400 animate-spin-slow" />
            <span>3.00 Acres Cadastral Blueprint • 24 Curated Parcels</span>
          </div>
          <h3 className="font-componentry text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-white">
            ROVERA Architectural Master Plan
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-light">
            Devanahalli–Doddaballapura Road • 100% Underground Infrastructure &amp; Vaastu Aligned
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All 24 Parcels" },
            { id: "courtyard", label: "Courtyard (1,500 Sq.Ft)" },
            { id: "signature", label: "Signature (2,400 Sq.Ft)" },
            { id: "grand", label: "Grand Estate (3,500 Sq.Ft)" },
            { id: "corner", label: "Bespoke Corner (4,800 Sq.Ft)" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#1E3A8A] text-white border border-blue-400 shadow-md scale-102"
                  : "bg-blue-950/40 text-blue-300 border border-blue-900/50 hover:bg-blue-900/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive CAD Grid Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Interactive Cadastral Blueprint Grid (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#070D18] relative overflow-hidden flex flex-col justify-between">
          {/* Subtle CAD Blueprint Grid Background Lines */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1E3A8A 1px, transparent 1px), linear-gradient(to bottom, #1E3A8A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Top Enclave Landmark Indicators */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-400 mb-6 border-b border-blue-950/60 pb-3">
            <span className="flex items-center gap-1.5 text-blue-300">
              <Trees className="w-3.5 h-3.5" />
              <span>North Botanical Buffer (Nandi Hill Breezes)</span>
            </span>
            <span className="text-zinc-500 font-mono text-[10px]">
              CAD REF: KA-BLR-ROV-03A
            </span>
          </div>

          {/* Civic Amenities Strip (North Wing) */}
          <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 bg-blue-950/30 border border-blue-900/40 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider block">Zone A (Ishanya)</span>
                <span className="font-componentry text-sm font-medium text-white">10,000 Sq.Ft Resident Clubhouse</span>
              </div>
              <span className="text-[10px] bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded font-mono">Amenities</span>
            </div>
            <div className="p-3 bg-blue-950/30 border border-blue-900/40 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider block">Zone B</span>
                <span className="font-componentry text-sm font-medium text-white">Aura Vitality Spa &amp; Tennis Arena</span>
              </div>
              <span className="text-[10px] bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded font-mono">Wellness</span>
            </div>
          </div>

          {/* 24 Parcels Interactive Grid */}
          <div className="relative z-10 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-300/80 flex items-center justify-between">
              <span>North Residential Wing (12 Parcels)</span>
              <span>30-Ft Internal Avenue</span>
            </div>

            {/* Row 1: Parcels 1 to 12 */}
            <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
              {PLOTS.slice(0, 12).map((plot) => {
                const isSelected = activePlot.id === plot.id;
                const isFilteredOut = selectedCategory !== "all" && plot.category !== selectedCategory;
                return (
                  <button
                    key={plot.id}
                    type="button"
                    onClick={() => setActivePlot(plot)}
                    onMouseEnter={() => setActivePlot(plot)}
                    className={`relative p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center aspect-[1/1] ${
                      isFilteredOut
                        ? "opacity-25 scale-95 border-zinc-800 bg-zinc-950/20 text-zinc-600"
                        : getCategoryColor(plot.category, isSelected)
                    } ${isSelected ? "ring-2 ring-white shadow-lg scale-105 z-20" : ""}`}
                  >
                    <span className="font-clash text-xs sm:text-sm font-semibold block">{plot.number}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-tighter opacity-80 mt-0.5">
                      {plot.areaSqFt.replace(" Sq.Ft", "")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 40-Ft Central Cobblestone Boulevard with Avenue Trees */}
            <div className="py-2.5 px-4 bg-[#0B162C] border-y border-blue-900/70 rounded-lg flex items-center justify-between text-xs font-mono text-blue-200">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>40-FOOT CENTRAL COBBLESTONE BOULEVARD</span>
              </span>
              <span className="text-[10px] text-zinc-400 hidden sm:inline">
                Underground 11kV Ducts • Optical Fiber • Dual Plumbing
              </span>
            </div>

            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-300/80 flex items-center justify-between">
              <span>South Residential Wing (12 Parcels)</span>
              <span>30-Ft Internal Avenue</span>
            </div>

            {/* Row 2: Parcels 13 to 24 */}
            <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
              {PLOTS.slice(12, 24).map((plot) => {
                const isSelected = activePlot.id === plot.id;
                const isFilteredOut = selectedCategory !== "all" && plot.category !== selectedCategory;
                return (
                  <button
                    key={plot.id}
                    type="button"
                    onClick={() => setActivePlot(plot)}
                    onMouseEnter={() => setActivePlot(plot)}
                    className={`relative p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center aspect-[1/1] ${
                      isFilteredOut
                        ? "opacity-25 scale-95 border-zinc-800 bg-zinc-950/20 text-zinc-600"
                        : getCategoryColor(plot.category, isSelected)
                    } ${isSelected ? "ring-2 ring-white shadow-lg scale-105 z-20" : ""}`}
                  >
                    <span className="font-clash text-xs sm:text-sm font-semibold block">{plot.number}</span>
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-tighter opacity-80 mt-0.5">
                      {plot.areaSqFt.replace(" Sq.Ft", "")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grand Entrance Gatehouse (South Portal) */}
          <div className="relative z-10 mt-6 pt-4 border-t border-blue-950/60 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5 text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>8-Meter Double-Height Cantilevered Entrance Portal (State Highway 9 Frontage)</span>
            </div>
            <span className="text-zinc-500 text-[10px]">RFID Access Control</span>
          </div>
        </div>

        {/* Right Side: Selected Parcel Architectural HUD Card (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0B1424] border-t lg:border-t-0 lg:border-l border-blue-950 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-blue-900/40 pb-3">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                Parcel Details
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase">
                {activePlot.status}
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-clash text-4xl font-semibold text-white">
                  {activePlot.number}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {activePlot.name}
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {activePlot.idealFor}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#070D18] border border-blue-900/40 rounded-xl">
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">Dimensions</span>
                <span className="font-clash text-lg font-semibold text-white">{activePlot.dimension}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">Plot Area</span>
                <span className="font-clash text-lg font-semibold text-blue-300">{activePlot.areaSqFt}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">Facing</span>
                <span className="text-xs text-zinc-200 font-mono">{activePlot.facing}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 block">Vaastu</span>
                <span className="text-xs text-emerald-400 font-mono">100% Compliant</span>
              </div>
            </div>

            {/* Architectural Commitments */}
            <div className="space-y-2 text-xs text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Ground + 2 Floors Architecture Permitted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Freehold Title Deed with 30-Year Forensic Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Dedicated Concealed Optical Fiber &amp; 11kV Ducts</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-blue-900/40">
            <button
              type="button"
              onClick={() => onSelectPlot(`Parcel ${activePlot.number} (${activePlot.areaSqFt})`)}
              className="w-full py-3.5 px-4 bg-[#1E3A8A] hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 font-medium"
            >
              <span>Enquire for Parcel {activePlot.number}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onSelectPlot("Download Full 3-Acre Master Plan CAD Dossier")}
              className="w-full py-2.5 px-4 bg-transparent hover:bg-blue-950/40 border border-blue-900/60 text-blue-200 font-mono text-[11px] uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CAD Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Blueprint Footer Legend */}
      <div className="p-4 sm:p-5 bg-[#050A14] border-t border-blue-950 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs bg-cyan-500" />
            <span className="text-[11px]">Courtyard (6)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs bg-blue-600" />
            <span className="text-[11px]">Signature (12)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs bg-indigo-600" />
            <span className="text-[11px]">Grand Estate (4)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs bg-amber-600" />
            <span className="text-[11px]">Bespoke Corner (2)</span>
          </div>
        </div>

        <div className="text-[10px] text-zinc-500">
          Total Site: 3.00 Acres (130,680 Sq.Ft) • 24 Parcels
        </div>
      </div>
    </div>
  );
}
