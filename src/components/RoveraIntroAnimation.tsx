"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RoveraIntroAnimation() {
  const [phase, setPhase] = useState<"enter" | "leap" | "emblem" | "fade" | "done">("enter");
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("rovera_intro_completed") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (isDismissed) return;

    // Phase 1: Leap begins at 400ms
    const tLeap = setTimeout(() => {
      setPhase("leap");
    }, 400);

    // Phase 2: Morph into full luxury emblem artwork at 1900ms
    const tEmblem = setTimeout(() => {
      setPhase("emblem");
    }, 1900);

    // Phase 3: Smooth architectural fade-out curtain at 3600ms
    const tFade = setTimeout(() => {
      setPhase("fade");
      sessionStorage.setItem("rovera_intro_completed", "true");
    }, 3600);

    // Phase 4: Complete dismissal and remove from DOM at 4600ms
    const tDone = setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 4600);

    return () => {
      clearTimeout(tLeap);
      clearTimeout(tEmblem);
      clearTimeout(tFade);
      clearTimeout(tDone);
    };
  }, [isDismissed]);

  const handleSkip = () => {
    setPhase("fade");
    sessionStorage.setItem("rovera_intro_completed", "true");
    setTimeout(() => {
      setPhase("done");
      setIsDismissed(true);
    }, 500);
  };

  if (isDismissed || phase === "done") return null;

  return (
    <div
      aria-label="ROVERA Opening Animation"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#edece8] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none overflow-hidden ${
        phase === "fade" ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Blueprint Geometric Hairline Crosshairs in Corners */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-neutral-400 tracking-widest hidden sm:block">
        + [LOC 13°11&apos;52&quot;N 77°35&apos;44&quot;E • 920M]
      </div>
      <div className="absolute top-6 right-6 font-mono text-[9px] text-neutral-400 tracking-widest hidden sm:block">
        [ELEVATION: 920M • NORTH BENGALURU] +
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-neutral-400 tracking-widest hidden sm:block">
        + [45% CONSERVED INDIGENOUS CANOPY]
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-neutral-400 tracking-widest hidden sm:block">
        [STTHIRA MASTER DEVELOPER • EST. 2026] +
      </div>

      {/* Top Telemetry & Skip Action */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-neutral-600 font-sans z-20">
        <span className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse shrink-0" />
          <span className="font-medium text-neutral-700 truncate max-w-[190px] sm:max-w-none">
            ROVERA SANCTUARY • NORTH BENGALURU
          </span>
        </span>
        <button
          type="button"
          onClick={handleSkip}
          className="text-neutral-600 hover:text-black transition-colors uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium py-1 px-2.5 sm:px-3.5 border border-neutral-300 hover:border-black rounded-full text-[9px] sm:text-[10px] bg-white/70 backdrop-blur-xs cursor-pointer shadow-2xs shrink-0"
        >
          Skip Intro →
        </button>
      </div>

      {/* Central Cinematic Stage */}
      <div className="relative w-full max-w-4xl px-4 sm:px-6 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
        {/* Layer 1: Monumental Background Wordmark that greets the leap */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out pointer-events-none ${
            phase === "enter"
              ? "opacity-30 scale-95"
              : phase === "leap"
              ? "opacity-60 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <span className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.18em] sm:tracking-[0.25em] uppercase text-neutral-800 font-light drop-shadow-xs">
            ROVERA
          </span>
          <span className="font-sans text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.4em] text-neutral-500 mt-1 sm:mt-2 font-medium">
            Sanctuary of Timeless Residence
          </span>
        </div>

        {/* Layer 2: The Aerodynamic Leaping Cheetah (C:\Users\rahul\Desktop\STTHIRA\imagesss\cheetah.jpg) */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase === "enter"
              ? "-translate-x-20 sm:-translate-x-48 opacity-0 scale-90"
              : phase === "leap"
              ? "translate-x-0 opacity-100 scale-100 filter drop-shadow-xl"
              : "opacity-0 scale-105 filter blur-xs"
          }`}
        >
          <div className="relative w-full max-w-xs sm:max-w-xl md:max-w-2xl aspect-[3.15/1]">
            <Image
              src="/images/rovera-cheetah-isolated-retina.png"
              alt="ROVERA Aerodynamic Leaping Cheetah"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 320px, (max-width: 768px) 580px, 850px"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Layer 3: Bespoke Monogram Artwork Emblem (Cheetah woven into ROVERA letters) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "emblem"
              ? "opacity-100 scale-100 translate-y-0"
              : phase === "fade"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          <div className="relative w-56 sm:w-72 md:w-96 aspect-[1.09/1]">
            <Image
              src="/images/rovera-art.jpg"
              alt="ROVERA Fine-Art Monogram Emblem"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 440px"
              className="object-contain object-center drop-shadow-sm"
            />
          </div>

          {/* Luxury Caption beneath Emblem */}
          <div className="mt-3 sm:mt-4 text-center max-w-lg px-3 sm:px-4">
            <p className="font-editorial text-xs sm:text-base italic text-neutral-700 font-light tracking-wide leading-relaxed">
              &ldquo;Where architectural permanence honors untamed native wilderness.&rdquo;
            </p>
            <p className="font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-neutral-500 font-medium mt-1">
              STTHIRA Inaugural Sanctuary • North Bengaluru
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Subtitle / Brand Credential */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 text-center text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-500 font-sans font-medium">
        <span>A MASTER-PLANNED RESIDENCE BY STTHIRA • 186 BESPOKE PLOTS</span>
      </div>
    </div>
  );
}
