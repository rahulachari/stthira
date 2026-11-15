"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

interface GalleryViewProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

export default function GalleryView({ images, showFilters = true }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev === null ? 0 : (prev + 1) % filtered.length));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev === null ? 0 : (prev - 1 + filtered.length) % filtered.length));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIdx, filtered.length]);

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-10 text-xs uppercase tracking-widest font-sans">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-medium"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img, idx) => (
          <div
            key={img.url + idx}
            onClick={() => setSelectedIdx(idx)}
            className="group relative aspect-[4/3] bg-neutral-900 overflow-hidden cursor-pointer border border-neutral-800/80"
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:contrast-125 transition-all duration-700"
            />
            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

            {/* Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 block mb-1">
                  {img.category}
                </span>
                <h4 className="font-editorial text-lg text-white font-medium uppercase tracking-wide">
                  {img.title}
                </h4>
              </div>
              <div className="p-2 border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {filtered[selectedIdx].category} • {selectedIdx + 1} of {filtered.length}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-white uppercase tracking-wider">
                {filtered[selectedIdx].title}
              </h3>
            </div>
            <button
              onClick={() => setSelectedIdx(null)}
              aria-label="Close lightbox"
              className="p-2 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image Stage */}
          <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={filtered[selectedIdx].url}
                alt={filtered[selectedIdx].title}
                fill
                priority
                className="object-contain grayscale contrast-115"
              />
            </div>

            {/* Nav Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev === null ? 0 : (prev - 1 + filtered.length) % filtered.length));
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 p-3 bg-black/70 border border-neutral-800 text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev === null ? 0 : (prev + 1) % filtered.length));
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 p-3 bg-black/70 border border-neutral-800 text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-xs text-neutral-500 uppercase tracking-widest font-sans border-t border-neutral-900 pt-3">
            STTHIRA Architectural Visual Archives • Monochromatic Editorial Series
          </div>
        </div>
      )}
    </div>
  );
}

