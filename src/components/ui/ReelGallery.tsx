"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export interface ReelGalleryProps {
  /** Array of image URLs to populate across reels */
  images?: string[];
  /** Number of tilted rows/reels */
  rows?: number;
  /** Height of each row in pixels */
  rowHeight?: number;
  /** Gap between rows in pixels */
  rowGap?: number;
  /** Gap between items inside each row */
  itemGap?: number;
  /** Angle of the tilt in degrees */
  tilt?: number;
  /** Base scrolling motion multiplier */
  speed?: number;
  /** Whether alternating rows glide in opposite directions */
  alternate?: boolean;
  /** Grayscale percentage (0 to 1) */
  grayscale?: number;
  /** Base opacity of the reels */
  opacity?: number;
  /** Extra CSS classes */
  className?: string;
}

const DEFAULT_IMAGES = [
  "/images/rovera-avenues.jpg",
  "/images/rovera-clubhouse.jpg",
  "/images/aerial-view.jpg",
  "/images/modern-architecture.jpg",
  "/images/rovera-wellness.jpg",
  "/images/landscape-nature.jpg",
  "/images/lifestyle-amenities.jpg",
  "/images/entrance-structure.jpg",
  "/images/brand-story.jpg",
  "/images/hero-cinematic.jpg",
];

export default function ReelGallery({
  images = DEFAULT_IMAGES,
  rows = 4,
  rowHeight = 185,
  rowGap = 24,
  itemGap = 22,
  tilt = -11,
  speed = 1.3,
  alternate = true,
  grayscale = 0,
  opacity = 0.85,
  className = "",
}: ReelGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into viewport scroll relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate parallax scroll transforms for alternating directions
  const moveXRight = useTransform(scrollYProgress, [0, 1], [-160 * speed, 160 * speed]);
  const moveXLeft = useTransform(scrollYProgress, [0, 1], [160 * speed, -160 * speed]);

  // Distribute images evenly across the specified number of rows
  const rowData = Array.from({ length: rows }, (_, rowIndex) => {
    const sliceStart = (rowIndex * 3) % images.length;
    const reordered = [
      ...images.slice(sliceStart),
      ...images.slice(0, sliceStart),
    ];
    return {
      id: rowIndex,
      items: reordered,
      isReverse: alternate && rowIndex % 2 === 1,
    };
  });

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* 3D Tilted Film Reel Canvas */}
      <div
        className="absolute -inset-x-40 -inset-y-52 flex flex-col justify-center items-center pointer-events-none"
        style={{
          transform: `rotate(${tilt}deg) scale(1.15)`,
          transformOrigin: "center center",
          gap: `${rowGap}px`,
        }}
      >
        {rowData.map((row, i) => {
          const motionX = row.isReverse ? moveXRight : moveXLeft;
          const animDuration = 44 + (i % 3) * 8;

          return (
            <motion.div
              key={row.id}
              style={{ x: motionX }}
              className="w-full flex items-center will-change-transform"
            >
              {/* Continuous Auto-Gliding Reel Track */}
              <div
                className={`animate-marquee ${row.isReverse ? "animate-marquee-reverse" : ""}`}
                style={{
                  gap: `${itemGap}px`,
                  animationDuration: `${animDuration}s`,
                }}
              >
                {/* Double the array for seamless infinite marquee loop */}
                {[...row.items, ...row.items].map((src, idx) => (
                  <div
                    key={`${row.id}-${idx}`}
                    className="relative shrink-0 rounded-xl overflow-hidden bg-neutral-900 border border-black/15 shadow-2xl"
                    style={{
                      height: `${rowHeight}px`,
                      width: `${Math.round(rowHeight * 1.55)}px`,
                      opacity,
                    }}
                  >
                    <Image
                      src={src}
                      alt="STTHIRA Architecture Reel"
                      fill
                      sizes="350px"
                      className="object-cover object-center"
                      style={{
                        filter: `grayscale(${grayscale * 100}%) contrast(108%) brightness(100%)`,
                      }}
                    />
                    {/* Subtle Architectural Glass Surface Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/15 pointer-events-none" />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Seamless Edge Blends into Above and Below Sections without covering center */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      
      {/* Light Delicate Scrim: ensures rich visibility while maintaining balanced ambient background depth */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none" />
    </div>
  );
}
