"use client";

import { useEffect, useState } from "react";
import StthiraEmblem from "./StthiraEmblem";

export default function ArchitecturalPreloader() {
  const [progress, setProgress] = useState(1);
  const [stageText, setStageText] = useState("INITIALIZING GEODETIC SURVEY");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if preloader already played in this browser session
    const hasLoaded = sessionStorage.getItem("stthira_preloaded");
    if (hasLoaded) {
      setIsDismissed(true);
      return;
    }

    const duration = 2100; // 2.1 seconds smooth construction progression
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearRatio = Math.min(1, elapsed / duration);

      // Luxurious cubic ease-out curve for architectural cadence
      const easedRatio = 1 - Math.pow(1 - linearRatio, 3);
      const currentVal = Math.max(1, Math.min(100, Math.floor(easedRatio * 100)));

      setProgress(currentVal);

      // Update architectural milestone milestones
      if (currentVal < 24) {
        setStageText("PHASE 01: GEODETIC EXCAVATION & SUB-STRUCTURE SURVEY");
      } else if (currentVal < 52) {
        setStageText("PHASE 02: MONOLITHIC STRUCTURAL GRID & BEDROCK SURVEY");
      } else if (currentVal < 78) {
        setStageText("PHASE 03: 100% UNDERGROUND CONDUITS & DUAL PLUMBING GRID");
      } else if (currentVal < 96) {
        setStageText("PHASE 04: FORENSIC TITLE AUDIT & STATUTORY RERA COMPLIANCE");
      } else {
        setStageText("FOUNDATION GRADE 100% • MASTER PLANNED FRAMEWORK READY");
      }

      if (linearRatio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsCompleted(true);
          sessionStorage.setItem("stthira_preloaded", "true");
          setTimeout(() => {
            setIsDismissed(true);
          }, 800);
        }, 350);
      }
    };

    const rafId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (isDismissed) return null;

  const formattedNum = progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : `${progress}`;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 md:p-16 bg-[#050505] text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
        isCompleted ? "-translate-y-full opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Blueprint Geometric Hairline Crosshairs in Corners */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-600 tracking-wider">
        + [LOC 13°11&apos;52&quot;N 77°35&apos;44&quot;E]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[9px] text-neutral-600 tracking-wider">
        [ELEVATION: 920M] +
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-neutral-600 tracking-wider">
        + [DATUM: WGS84]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-neutral-600 tracking-wider">
        [STTHIRA MONOLITHIC GRID] +
      </div>

      {/* Top Header: Brand Identity & Telemetry */}
      <div className="w-full flex items-center justify-between border-b border-neutral-800/80 pb-5">
        <div className="flex items-center gap-3">
          <StthiraEmblem className="text-white w-6 h-7 shrink-0 animate-pulse" />
          <div className="flex flex-col">
            <span className="font-editorial text-lg tracking-[0.16em] uppercase text-white font-medium leading-none">
              STTHIRA
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-neutral-400 mt-0.5">
              EST. 2026 • MASTER DEVELOPER
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>STRUCTURAL SPECIFICATION IN PROGRESS</span>
        </div>
      </div>

      {/* Center Stage: Monumental Rolling Counter & Construction Milestones */}
      <div className="my-auto w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-12">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-neutral-400 font-mono mb-8">
          <span className="w-1.5 h-1.5 bg-white" />
          <span>ARCHITECTURAL MATRIX CALIBRATION</span>
        </div>

        {/* Large Rolling Number (001 -> 100) */}
        <div className="flex items-baseline justify-center tracking-tighter">
          <span className="font-editorial text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-light text-white leading-none tabular-nums drop-shadow-2xl">
            {formattedNum}
          </span>
          <span className="font-editorial text-3xl sm:text-5xl md:text-6xl text-neutral-500 font-light ml-2">
            %
          </span>
        </div>

        {/* Dynamic Construction Milestone Stage Text */}
        <div className="mt-8 flex flex-col items-center space-y-2">
          <div className="h-5 overflow-hidden flex items-center justify-center">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-neutral-300 font-medium animate-fade-in text-center px-4">
              {stageText}
            </p>
          </div>
        </div>

        {/* Precision Blueprint Gauge Progress Bar */}
        <div className="w-full max-w-md sm:max-w-xl mx-auto mt-10">
          <div className="relative h-[2px] w-full bg-neutral-800 overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-75 ease-out shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 mt-2.5">
            <span>GRADE 00</span>
            <span className="text-white font-medium">{progress} / 100 COMPLETE</span>
            <span>GRADE MAX</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Coordinates & Status */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800/80 pt-5 gap-3 text-[10px] font-mono text-neutral-400">
        <div>
          <span>INFRASTRUCTURE GRADE: </span>
          <span className="text-white font-semibold">SOVEREIGN LUXURY SPECIFICATION</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-white" />
          <span className="text-neutral-300 uppercase tracking-widest">
            {progress === 100 ? "ACCESS PERMITTED • WELCOME TO STTHIRA" : "CONSTRUCTION TELEMETRY SYNCHRONIZING"}
          </span>
        </div>
      </div>
    </div>
  );
}
