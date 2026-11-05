"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import LiquidGlassLogo, { LiquidGlassLogoHandle } from "./ui/liquid-glass-logo";

export default function ArchitecturalPreloader() {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [mounted, setMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const logoRef = useRef<LiquidGlassLogoHandle>(null);

  const handleDismiss = useCallback(() => {
    setIsCompleted(true);
    setTimeout(() => {
      setIsDismissed(true);
    }, 550);
  }, []);

  const triggerPreloader = useCallback(() => {
    setIsDismissed(false);
    setIsCompleted(false);

    // After the ReactDrops liquid glass ripple & crystallization sequence completes (~2.5s), initiate smooth curtain dissolve
    const tComplete = setTimeout(() => {
      setIsCompleted(true);
    }, 2600);

    // Completely dismiss and remove from DOM after curtain has lifted
    const tDismiss = setTimeout(() => {
      setIsDismissed(true);
    }, 3400);

    return () => {
      clearTimeout(tComplete);
      clearTimeout(tDismiss);
    };
  }, []);

  useEffect(() => {
    // If on ROVERA page, skip global preloader so ROVERA's bespoke opening animation runs exclusively
    if (isRovera) {
      setIsDismissed(true);
      return;
    }

    setMounted(true);
    const cleanup = triggerPreloader();

    const onReplay = () => {
      logoRef.current?.replay();
      triggerPreloader();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("replay-stthira-preloader", onReplay);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cleanup?.();
      window.removeEventListener("replay-stthira-preloader", onReplay);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isRovera, triggerPreloader, handleDismiss]);

  if (!mounted || isRovera || isDismissed) return null;

  return (
    <div
      onClick={handleDismiss}
      aria-label="STTHIRA Opening Animation (Click or press Esc to skip)"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-black transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer overflow-hidden ${
        isCompleted
          ? "-translate-y-full opacity-0 pointer-events-none scale-[1.02]"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* ReactDrops Liquid Glass Drop Simulation with Official STTHIRA Monogram Emblem & Wordmark */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
        <LiquidGlassLogo
          ref={logoRef}
          logo="/images/stthira-emblem-white.png"
          mark="logo"
          text="STTHIRA"
          ending="wordmark"
          theme="dark"
          background="#000000"
          tileColor="#050507"
          logoColor="#ffffff"
          textColor="#ffffff"
          tile={true}
          logoSize={64}
          fontSize={46}
          fontWeight={600}
          fontFamily="'Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Inter', serif"
          letterSpacing={0.2}
          speed={1.15}
          loop={false}
          className="w-full h-full"
        />
      </div>

      {/* Discrete Luxury Brand Eyebrow on Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 font-sans font-light">
          Architectural Permanence • Est. 2026
        </span>
      </div>

      {/* Discrete Skip Button in Top-Right Corner */}
      <div className="absolute top-6 right-6 z-20 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-600 bg-black/60 backdrop-blur-xs font-sans cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
