"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function RoveraIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"enter" | "reveal" | "fade" | "done">("enter");
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = useCallback(() => {
    setPhase("fade");
    setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 500);
  }, []);

  const triggerAnimation = useCallback(() => {
    setIsDismissed(false);
    setPhase("enter");

    const tEnter = setTimeout(() => {
      setPhase("reveal");
    }, 100);

    const tFade = setTimeout(() => {
      setPhase("fade");
    }, 2000);

    const tDone = setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 2800);

    return () => {
      clearTimeout(tEnter);
      clearTimeout(tFade);
      clearTimeout(tDone);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    const cleanup = triggerAnimation();

    const onReplay = () => {
      triggerAnimation();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("replay-rovera-intro", onReplay);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cleanup?.();
      window.removeEventListener("replay-rovera-intro", onReplay);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [triggerAnimation, handleDismiss]);

  if (!mounted || isDismissed || phase === "done") return null;

  return (
    <div
      onClick={handleDismiss}
      aria-label="ROVERA Opening Presentation (Click or press Esc to skip)"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#edece8] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer overflow-hidden ${
        phase === "fade"
          ? "-translate-y-full opacity-0 pointer-events-none scale-[1.01]"
          : "translate-y-0 opacity-100 scale-100"
      }`}
    >
      {/* Pristine Centered Brand Artwork — Ultra-Clean, Zero Messy Text, Zero Border Box */}
      <div className="relative w-full max-w-xl px-6 sm:px-10 flex flex-col items-center justify-center pointer-events-none">
        <div
          className={`transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "enter"
              ? "opacity-0 scale-95 filter blur-sm translate-y-2"
              : "opacity-100 scale-100 filter blur-0 translate-y-0"
          }`}
        >
          <div className="relative w-72 sm:w-96 md:w-[480px] aspect-[3.26/1] drop-shadow-sm">
            <Image
              src="/images/rovera-art-transparent.png"
              alt="ROVERA"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 480px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Discrete Skip Hint in Top-Right Corner */}
      <div className="absolute top-6 right-6 z-20 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-neutral-900 transition-colors px-3 py-1.5 rounded-full border border-neutral-300 hover:border-neutral-500 bg-white/60 backdrop-blur-xs font-sans cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
