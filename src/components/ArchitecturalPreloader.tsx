"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DotMatrixNumber from "./ui/DotMatrixNumber";

export default function ArchitecturalPreloader() {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // If on ROVERA page, skip global preloader completely so ROVERA's bespoke opening animation runs exclusively
    if (isRovera) {
      setIsDismissed(true);
      return;
    }

    // Check if preloader already played in this browser session (client-only to prevent hydration mismatch)
    const hasLoaded = sessionStorage.getItem("stthira_preloaded") === "true";
    if (hasLoaded) {
      setIsDismissed(true);
      return;
    }

    setMounted(true);

    const duration = 1600; // 1.6s swift, pristine progression
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearRatio = Math.min(1, elapsed / duration);

      // Luxurious cubic ease-out curve
      const easedRatio = 1 - Math.pow(1 - linearRatio, 3);
      const currentVal = Math.max(1, Math.min(100, Math.floor(easedRatio * 100)));

      setProgress(currentVal);

      if (linearRatio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsCompleted(true);
          sessionStorage.setItem("stthira_preloaded", "true");
          setTimeout(() => {
            setIsDismissed(true);
          }, 700);
        }, 250);
      }
    };

    const rafId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(rafId);
  }, [isRovera]);

  const handleDismiss = () => {
    setIsCompleted(true);
    sessionStorage.setItem("stthira_preloaded", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 400);
  };

  if (!mounted || isRovera || isDismissed) return null;

  const formattedNum = progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : `${progress}`;

  return (
    <div
      onClick={handleDismiss}
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer overflow-hidden ${
        isCompleted ? "-translate-y-full opacity-0 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Numbers Left Side Down — Pure Minimal White Aesthetic */}
      <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 pointer-events-none">
        <div className="hidden sm:block">
          <DotMatrixNumber
            value={`${formattedNum}%`}
            dotSize={8}
            dotGap={3}
            color="#111111"
            inactiveColor="rgba(0,0,0,0.06)"
            glow={false}
          />
        </div>
        <div className="sm:hidden">
          <DotMatrixNumber
            value={`${formattedNum}%`}
            dotSize={5}
            dotGap={2}
            color="#111111"
            inactiveColor="rgba(0,0,0,0.06)"
            glow={false}
          />
        </div>
      </div>
    </div>
  );
}
