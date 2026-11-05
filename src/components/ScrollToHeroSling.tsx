"use client";

import { useEffect, useState } from "react";
import SlingButton from "./ui/SlingButton";

export default function ScrollToHeroSling() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 280px
      if (window.scrollY > 280) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLaunchToHero = () => {
    // Check if there is an element with id="hero" or smooth scroll to top of window
    const heroEl = document.getElementById("hero") || document.querySelector("section");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="relative group flex items-center justify-center">
        {/* Subtle Luxury Tooltip */}
        <span className="absolute -top-8 right-0 bg-neutral-900/90 text-white text-[10px] uppercase tracking-widest font-sans font-medium px-2.5 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-xs">
          Pull to Sling • Reach Hero ↑
        </span>

        {/* Ambient Drop Shadow & Glass Ring */}
        <div className="absolute inset-0 rounded-full bg-black/40 blur-md scale-95 pointer-events-none" />

        {/* React Bits SlingButton component configured for luxury aesthetics */}
        <div className="relative rounded-full shadow-2xl p-1 bg-neutral-950/80 border border-white/20 backdrop-blur-md">
          <SlingButton
            onSend={handleLaunchToHero}
            padColor="#18181b"
            iconColor="#ffffff"
            accentColor="#ffffff"
            wellColor="#27272a"
            bandColor="#71717a"
            size={52}
            strokeWidth={3}
            armAt={44}
            maxPull={150}
            launchSpeed={2600}
            recoil={0.25}
            flight={130}
            particles={16}
            spread={60}
            axis="any"
            tapSends={true}
            ariaLabel="Slingshot to reach hero section"
          />
        </div>
      </div>
    </div>
  );
}
