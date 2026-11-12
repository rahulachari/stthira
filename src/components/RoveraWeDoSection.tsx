"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers, ShieldCheck, Home, Waves, Trees } from "lucide-react";

export interface WeDoItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  metrics: string[];
  image: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const WE_DO_PROJECTS: WeDoItem[] = [
  {
    id: "master-plan",
    number: "01",
    title: "MASTER PLANNING & INFRASTRUCTURE",
    category: "CIVIL & CADASTRAL DESIGN",
    tag: "3.0 Acres • 24 Sovereign Parcels",
    description:
      "A low-density sanctuary of just 24 bespoke villa plots, planned with 12m & 9m wide institutional concrete avenues, 100% concealed underground utilities, and cadastral survey precision directly adjoining STRR Expressway.",
    metrics: ["3.00 Acres Total Extent", "24 Exclusive Plots", "100% Concealed Ducts", "Devanahalli Corridor"],
    image: "/images/rovera-master-plan-3acres.jpg",
    slug: "master-plan-infrastructure",
    icon: Layers,
  },
  {
    id: "gatehouse",
    number: "02",
    title: "MONUMENTAL GATEHOUSE & SECURITY",
    category: "ARCHITECTURAL PORTAL",
    tag: "8m Cantilever • Flamed Basalt",
    description:
      "A monumental double-height cantilevered entrance portal clad in flamed South Indian black basalt and ribbed concrete, integrated with 24/7 RFID automated boom barriers and biometric protocol.",
    metrics: ["8-Meter Elevation", "Flamed Black Basalt", "24/7 RFID Protocol", "Dual In/Out Portals"],
    image: "/images/rovera-grand-double-height-gate.jpg",
    slug: "monumental-gatehouse",
    icon: ShieldCheck,
  },
  {
    id: "villa-architecture",
    number: "03",
    title: "BESPOKE VILLA ARCHITECTURE",
    category: "RESIDENTIAL FREEDOM",
    tag: "G+2 Freehold • 4 Typologies",
    description:
      "Unrestricted architectural sovereignty to construct your dream modern villa within harmonious aesthetic guidelines. Featuring Courtyard (1,500 sq.ft), Signature (2,400 sq.ft), Grand (3,500 sq.ft), and Bespoke Corner (4,800 sq.ft) parcels.",
    metrics: ["1,500 – 4,800 Sq.Ft", "Ground + 2 Floors", "Freehold Sovereign Title", "100% Vastu Aligned"],
    image: "/images/rovera-internal-boulevard.jpg",
    slug: "bespoke-villa-architecture",
    icon: Home,
  },
  {
    id: "wellness-clubhouse",
    number: "04",
    title: "WELLNESS PAVILION & CLUB",
    category: "COMMUNITY & LEISURE",
    tag: "Private Resident Club • Pool Deck",
    description:
      "A boutique private clubhouse pavilion with floor-to-ceiling glass curtain walls, sunken leisure pool deck, private wellness fitness studio, and an intimate resident social lounge overlooking landscaped courts.",
    metrics: ["Private Resident Access", "Sunken Pool Deck", "Curated Social Lounge", "Wellness Studio"],
    image: "/images/rovera-clubhouse-exterior.jpg",
    slug: "wellness-pavilion-clubhouse",
    icon: Waves,
  },
  {
    id: "botanical-landscape",
    number: "05",
    title: "LANDSCAPE & BOTANICAL DESIGN",
    category: "BIOPHILIC SANCTUARY",
    tag: "40% Open Greenery • Zen Gardens",
    description:
      "Curated native flora ecosystem featuring shaded timber pergola walkways, Japanese-inspired Zen rock reflection gardens, bioswales for rainwater retention, and dark-sky compliant warm amber bollard lighting.",
    metrics: ["40% Dedicated Greenery", "Native Flora Canopy", "Zen Meditation Court", "Zero-Glare Lighting"],
    image: "/images/rovera-zen-garden.jpg",
    slug: "botanical-landscape-design",
    icon: Trees,
  },
];

export default function RoveraWeDoSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth floating cursor preview coords using RAF interpolation
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [renderedPos, setRenderedPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updatePosition = () => {
      setRenderedPos((prev) => ({
        x: lerp(prev.x, cursorPos.x, 0.14),
        y: lerp(prev.y, cursorPos.y, 0.14),
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="we-do"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#090D16] text-white py-24 sm:py-32 lg:py-40 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Architectural Ambient Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header in Yodezeen Architectural Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 sm:pb-20 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold mb-4">
              <span>08</span>
              <span className="text-white/30">/</span>
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-componentry text-5xl sm:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-white leading-none">
              WE DO
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              We design, engineer, and curate sovereign luxury plotted communities — pairing monumental architectural infrastructure with low-density biophilic sanctuary.
            </p>
          </div>
        </div>

        {/* Interactive Discipline List (Yodezeen Sibling-Dimming & Slide-Right) */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {WE_DO_PROJECTS.map((project, index) => {
            const isHovered = activeItem === index;
            const isAnyHovered = activeItem !== null;
            const isMobileOpen = mobileExpanded === index;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                onClick={() => setMobileExpanded(isMobileOpen ? null : index)}
                className={`group relative py-8 sm:py-12 cursor-pointer transition-all duration-500 ${
                  isAnyHovered && !isHovered ? "opacity-25 blur-[0.4px]" : "opacity-100"
                }`}
              >
                {/* Desktop Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 transition-transform duration-500 ease-out lg:group-hover:translate-x-5">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-blue-400/80 font-medium">
                      {project.number}
                    </span>
                    <h3 className="font-componentry text-2xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10 pl-12 lg:pl-0">
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                      {project.tag}
                    </span>
                    <Link
                      href={`/developments/rovera/projects#${project.id}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors shrink-0"
                    >
                      <span className="hidden sm:inline">Explore Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>

                {/* Mobile / Tablet Accordion Dropdown Preview */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-500 ${
                    isMobileOpen ? "max-h-[600px] pt-6 opacity-100" : "max-h-0 pt-0 opacity-0"
                  }`}
                >
                  <div className="space-y-4 pl-12">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-blue-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Link
                        href={`/developments/rovera/projects#${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A] text-white text-xs font-mono uppercase tracking-wider font-semibold"
                      >
                        <span>View Project Specification</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar with "VIEW ALL PROJECTS" in Yodezeen Pill Style */}
        <div className="pt-14 sm:pt-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>5 Master Disciplines Documented • Freehold Freehand Title</span>
          </div>

          <Link
            href="/developments/rovera/projects"
            className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="text-[11px] text-zinc-400 group-hover:text-zinc-600 transition-colors">
              [05 Disciplines]
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* =========================================================================
          FLOATING CURSOR-FOLLOWING IMAGE PREVIEW (Yodezeen Signature Effect)
          Desktop only (hidden on touch / mobile devices)
          ========================================================================= */}
      <div
        style={{
          position: "fixed",
          left: `${renderedPos.x}px`,
          top: `${renderedPos.y}px`,
          pointerEvents: "none",
          transform: "translate3d(-50%, -50%, 0)",
        }}
        className={`hidden lg:block z-50 transition-all duration-300 ease-out will-change-transform ${
          activeItem !== null
            ? "opacity-100 scale-100 filter blur-0"
            : "opacity-0 scale-90 filter blur-xs"
        }`}
      >
        <div className="relative w-[380px] h-[260px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/80 backdrop-blur-md">
          {activeItem !== null && (
            <>
              <Image
                src={WE_DO_PROJECTS[activeItem].image}
                alt={WE_DO_PROJECTS[activeItem].title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out scale-105"
                sizes="400px"
              />
              {/* Subtle architectural vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                <span className="tracking-widest uppercase font-semibold text-blue-300">
                  {WE_DO_PROJECTS[activeItem].category}
                </span>
                <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded-full border border-white/20">
                  {WE_DO_PROJECTS[activeItem].number} / 05
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
