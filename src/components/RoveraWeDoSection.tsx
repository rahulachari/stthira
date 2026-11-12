"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import YodezeenCursor from "@/components/ui/YodezeenCursor";

gsap.registerPlugin(ScrollTrigger);

export default function RoveraWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const weTextRef = useRef<HTMLHeadingElement>(null);
  const doTextRef = useRef<HTMLHeadingElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const weText = weTextRef.current;
    const doText = doTextRef.current;
    const centerContent = centerContentRef.current;

    if (!section || !container || !weText || !doText || !centerContent) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set([weText, doText], { opacity: 0.15 });
      gsap.set(centerContent, { opacity: 1, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Split WE and DO outward while fading to ghost watermark
      tl.to(
        weText,
        {
          x: "-38vw",
          opacity: 0.12,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        doText,
        {
          x: "38vw",
          opacity: 0.12,
          ease: "power2.out",
        },
        0
      );

      // Scale & fade in the central discipline list and button
      tl.fromTo(
        centerContent,
        {
          opacity: 0,
          scale: 0.88,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
        },
        0.1
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const disciplines = [
    "BOUTIQUE PLOTTED SANCTUARY",
    "BESPOKE VILLA ESTATES",
    "MONUMENTAL GATEHOUSE",
    "WELLNESS CLUB & SPA",
    "ECOLOGICAL LANDSCAPE",
  ];

  return (
    <section
      id="we-do"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#FAFAFA] text-zinc-950 overflow-hidden select-none flex items-center justify-center border-b border-zinc-200 scroll-mt-20"
    >
      {/* Background Architectural Subtle Vignette */}
      <YodezeenCursor />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.015),transparent_70%)]" />

      <div
        ref={containerRef}
        className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center"
      >
        {/* Monolithic "WE DO" Split Display (Screenshot 1 & 2) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="flex items-center gap-12 sm:gap-20 md:gap-28 lg:gap-36">
            <h2
              ref={weTextRef}
              className="font-componentry text-[22vw] sm:text-[20vw] md:text-[18vw] font-bold text-zinc-900 tracking-[-0.04em] leading-none will-change-transform select-none"
            >
              WE
            </h2>
            <h2
              ref={doTextRef}
              className="font-componentry text-[22vw] sm:text-[20vw] md:text-[18vw] font-bold text-zinc-900 tracking-[-0.04em] leading-none will-change-transform select-none"
            >
              DO
            </h2>
          </div>
        </div>

        {/* Center Discipline List Revealed on Scroll (Screenshot 2) */}
        <div
          ref={centerContentRef}
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 pointer-events-auto"
        >
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            {disciplines.map((item, index) => (
              <h3
                key={index}
                className="font-componentry text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] text-zinc-950 leading-[1.05] hover:text-[#1E3A8A] transition-colors cursor-default"
              >
                {item}
              </h3>
            ))}
          </div>

          {/* "VIEW ALL PROJECTS" Pill Button matching Yodezeen Screenshot 2 */}
          <div className="pt-8 sm:pt-10">
            <Link
              href="/developments/rovera/projects"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-zinc-200/90 hover:bg-black text-zinc-900 hover:text-white font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
