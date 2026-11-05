"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RoveraIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"enter" | "reveal" | "fade" | "done">("enter");
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Only check sessionStorage on the client to avoid SSR hydration mismatch/glitch
    const seen = sessionStorage.getItem("rovera_intro_completed") === "true";
    if (seen) {
      setIsDismissed(true);
      return;
    }
    setMounted(true);

    // Phase 1: Smooth luxury entrance
    const tEnter = setTimeout(() => {
      setPhase("reveal");
    }, 120);

    // Phase 2: Hold the pristine emblem for a serene, confident duration, then initiate smooth curtain fade
    const tFade = setTimeout(() => {
      setPhase("fade");
      sessionStorage.setItem("rovera_intro_completed", "true");
    }, 1800);

    // Phase 3: Completely dismiss and remove from DOM
    const tDone = setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 2500);

    return () => {
      clearTimeout(tEnter);
      clearTimeout(tFade);
      clearTimeout(tDone);
    };
  }, []);

  const handleDismiss = () => {
    setPhase("fade");
    sessionStorage.setItem("rovera_intro_completed", "true");
    setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 400);
  };

  if (!mounted || isDismissed || phase === "done") return null;

  return (
    <div
      onClick={handleDismiss}
      aria-label="ROVERA Intro"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#edece8] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer overflow-hidden ${
        phase === "fade" ? "opacity-0 scale-[1.015] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Central Pristine Brand Identity — Ultra-Clean, Zero Clutter, Zero Glitch */}
      <div className="relative w-full max-w-xl px-6 sm:px-10 flex flex-col items-center justify-center pointer-events-none">
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "enter"
              ? "opacity-0 scale-95 filter blur-xs translate-y-1"
              : "opacity-100 scale-100 filter blur-0 translate-y-0"
          }`}
        >
          <div className="relative w-72 sm:w-96 md:w-[460px] aspect-[3.26/1]">
            <Image
              src="/images/rovera-art-transparent.png"
              alt="ROVERA"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 460px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
