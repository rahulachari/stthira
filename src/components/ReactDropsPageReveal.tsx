"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import StthiraEmblem from "./StthiraEmblem";

interface ReactDropsPageRevealProps {
  children: React.ReactNode;
}

export default function ReactDropsPageReveal({ children }: ReactDropsPageRevealProps) {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const surfaceRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const finishTransition = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
    const surface = surfaceRef.current;
    if (surface) {
      surface.style.transform = "";
      surface.style.clipPath = "";
      surface.style.boxShadow = "";
      surface.style.willChange = "";
    }
    setIsCompleted(true);
  }, []);

  useEffect(() => {
    setMounted(true);

    // If on ROVERA, let ROVERA's bespoke opening presentation run exclusively
    if (isRovera) {
      finishTransition();
      return;
    }

    const surface = surfaceRef.current;
    const backdrop = backdropRef.current;
    if (!surface || !backdrop) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishTransition();
      return;
    }

    // Initial state: Page is placed below the viewport with rounded inset corners (ReactDrops signature)
    gsap.set(surface, {
      yPercent: 100,
      scale: 0.965,
      clipPath: "inset(9% round 24px)",
      boxShadow: "0 -30px 80px rgba(0, 0, 0, 0.85)",
      willChange: "transform, clip-path",
    });

    gsap.set(backdrop, {
      yPercent: 0,
      opacity: 1,
    });

    const progressObj = { p: 0 };

    // Exact ReactDrops opening physics curve
    const updateReveal = () => {
      const p = progressObj.p;
      // Cubic ease-out for translation
      const t = 1 - Math.pow(1 - Math.min(1, p / 0.68), 3);
      // Dual-phase scale expansion
      const r = p * 0.15 + Math.pow(p, 3) * 0.85;
      // Inset unmasking from 9% down to 0%
      const inset = 9 * (1 - p);
      const radius = Math.round(inset * 2.6);
      // Subtle upward parallax drift of backdrop
      const a = 1 - Math.pow(1 - p, 2);

      gsap.set(surface, {
        yPercent: 100 * (1 - t),
        scale: 0.965 + r * 0.035,
        clipPath: inset <= 0.05 ? "none" : `inset(${inset.toFixed(2)}% round ${radius}px)`,
      });

      if (backdrop) {
        gsap.set(backdrop, {
          yPercent: -22 * a,
          opacity: 1 - p * 0.75,
        });
      }
    };

    // Hold the pristine STTHIRA monogram in center for ~500ms, then launch the smooth card rise (~1.15s)
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        finishTransition();
      },
    });

    tl.to(progressObj, {
      p: 1,
      duration: 1.15,
      ease: "power2.inOut",
      onUpdate: updateReveal,
    });

    timelineRef.current = tl;

    // Click anywhere or Escape key to immediately skip
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishTransition();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      tl.kill();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isRovera, finishTransition]);

  // Before mount on server/hydration: render children cleanly
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* 01. ReactDrops-Style Background Stage with Official STTHIRA Monogram & Architectural Identity */}
      {!isCompleted && !isRovera && (
        <aside
          ref={backdropRef}
          aria-label="STTHIRA Opening Stage"
          onClick={finishTransition}
          className="fixed inset-0 z-0 flex flex-col items-center justify-center bg-black text-white cursor-pointer select-none overflow-hidden"
        >
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

          {/* Central Architectural Brand Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
            {/* STTHIRA Monolithic Architectural Monogram */}
            <div className="mb-4 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <StthiraEmblem className="w-14 h-16 sm:w-16 sm:h-20 text-white" />
            </div>

            {/* Wordmark */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] font-light uppercase text-white mb-3">
              STTHIRA
            </h1>

            {/* Sub-line */}
            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-neutral-400 font-sans font-light">
              <span>Architectural Permanence</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span>Est. 2026</span>
            </div>
          </div>

          {/* Discrete Skip Indicator */}
          <div className="absolute bottom-8 right-8 z-20 pointer-events-auto">
            <button
              type="button"
              onClick={finishTransition}
              className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-600 bg-black/60 backdrop-blur-xs font-sans cursor-pointer"
            >
              Skip Intro →
            </button>
          </div>
        </aside>
      )}

      {/* 02. The Main Page Surface — Exactly like ReactDrops: Starts scaled & rounded at bottom, then smoothly rises and expands to fill the entire viewport */}
      <div
        ref={surfaceRef}
        className="relative z-10 w-full min-h-screen bg-white"
      >
        {children}
      </div>
    </div>
  );
}
