"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import LiquidGlassLogo, { LiquidGlassLogoHandle } from "./ui/liquid-glass-logo";

export default function ArchitecturalPreloader() {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [mounted, setMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const logoRef = useRef<LiquidGlassLogoHandle>(null);

  useEffect(() => {
    // If on ROVERA page, skip global preloader so ROVERA's bespoke opening animation runs exclusively
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

    // After the liquid glass logo ripple & formation sequence completes (~2.5s), initiate smooth curtain dissolve
    const tComplete = setTimeout(() => {
      setIsCompleted(true);
      sessionStorage.setItem("stthira_preloaded", "true");
    }, 2600);

    // Completely dismiss and remove from DOM
    const tDismiss = setTimeout(() => {
      setIsDismissed(true);
    }, 3400);

    return () => {
      clearTimeout(tComplete);
      clearTimeout(tDismiss);
    };
  }, [isRovera]);

  const handleDismiss = () => {
    setIsCompleted(true);
    sessionStorage.setItem("stthira_preloaded", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 450);
  };

  if (!mounted || isRovera || isDismissed) return null;

  return (
    <div
      onClick={handleDismiss}
      aria-label="STTHIRA Opening Animation"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-black transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer overflow-hidden ${
        isCompleted
          ? "-translate-y-full opacity-0 pointer-events-none scale-[1.02]"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <LiquidGlassLogo
          ref={logoRef}
          logo="/images/stthira-logo-white.png"
          mark="logo"
          text="STTHIRA"
          ending="wordmark"
          theme="dark"
          background="#000000"
          tileColor="#0a0a0c"
          logoColor="#ffffff"
          textColor="#ffffff"
          tile={true}
          fontSize={54}
          fontWeight={700}
          fontFamily="'Cinzel', 'Playfair Display', 'Inter', Georgia, serif"
          letterSpacing={0.16}
          speed={1.2}
          loop={false}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
