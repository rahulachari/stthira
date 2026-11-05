"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

interface CinematicOpeningRevealProps {
  children: React.ReactNode;
}

export default function CinematicOpeningReveal({ children }: CinematicOpeningRevealProps) {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const videoAudioRef = useRef<HTMLVideoElement | null>(null);
  const audioFallbackRef = useRef<HTMLAudioElement | null>(null);
  const isDismissedRef = useRef<boolean>(false);
  const audioStartedRef = useRef<boolean>(false);

  const DURATION = 2.6; // Clean, dignified 2.6s hold before theatrical cross-dissolve

  const finishIntro = useCallback(() => {
    if (isDismissedRef.current) return;
    isDismissedRef.current = true;
    setIsFadingOut(true);

    // Natural acoustic fadeout tail
    const fadeAudio = () => {
      let active = false;
      if (videoAudioRef.current && videoAudioRef.current.volume > 0.08) {
        videoAudioRef.current.volume = Math.max(0, videoAudioRef.current.volume - 0.14);
        active = true;
      }
      if (audioFallbackRef.current && audioFallbackRef.current.volume > 0.08) {
        audioFallbackRef.current.volume = Math.max(0, audioFallbackRef.current.volume - 0.14);
        active = true;
      }

      if (active) {
        setTimeout(fadeAudio, 30);
      } else {
        if (videoAudioRef.current) videoAudioRef.current.pause();
        if (audioFallbackRef.current) audioFallbackRef.current.pause();
      }
    };
    fadeAudio();

    // 1000ms buttery cross-dissolve into the hero section
    setTimeout(() => {
      setIsCompleted(true);
    }, 1000);
  }, []);

  const playAudio = useCallback(() => {
    if (audioStartedRef.current) return;

    const video = videoAudioRef.current;
    if (video) {
      video.volume = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioStartedRef.current = true;
          })
          .catch(() => {});
      }
    }

    const audio = audioFallbackRef.current;
    if (audio && !audioStartedRef.current) {
      audio.volume = 1.0;
      const playPromise2 = audio.play();
      if (playPromise2 !== undefined) {
        playPromise2
          .then(() => {
            audioStartedRef.current = true;
          })
          .catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    if (isRovera) {
      setIsCompleted(true);
      return;
    }

    playAudio();

    // Universal gesture unlock for browser audio autoplay policy
    const onGesture = () => {
      if (!audioStartedRef.current) {
        playAudio();
      }
    };

    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("click", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture, { passive: true });

    // Transition smoothly into the hero section after duration
    const timer = setTimeout(() => {
      finishIntro();
    }, DURATION * 1000);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("click", onGesture);
      if (videoAudioRef.current) videoAudioRef.current.pause();
      if (audioFallbackRef.current) audioFallbackRef.current.pause();
    };
  }, [isRovera, finishIntro, playAudio]);

  const handleStageClick = () => {
    if (!audioStartedRef.current) {
      playAudio();
    } else {
      finishIntro();
    }
  };

  if (isCompleted || isRovera) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Precision Audio Sources (Exact audio from Video Project.mp4) */}
      <video
        ref={videoAudioRef}
        src="/audio/stthira-intro.mp4"
        preload="auto"
        playsInline
        style={{ position: "absolute", width: "1px", height: "1px", opacity: 0.001, pointerEvents: "none" }}
      />
      <audio
        ref={audioFallbackRef}
        src="/audio/stthira-intro.mp3"
        preload="auto"
        style={{ position: "absolute", width: "1px", height: "1px", opacity: 0.001, pointerEvents: "none" }}
      />

      {/* 01. Clean, High-End Architectural Brand Reveal (Pure, Minimalist, No Gimmicks) */}
      <div
        aria-label="STTHIRA Opening"
        onClick={handleStageClick}
        className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black select-none cursor-pointer overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isFadingOut
            ? "opacity-0 pointer-events-none scale-[1.04] filter blur-[3px]"
            : "opacity-100 scale-100 filter blur-0"
        }`}
      >
        {/* Subtle Ambient Radial Backlight Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] sm:w-[700px] md:w-[900px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-r from-neutral-800/25 via-neutral-600/15 to-transparent blur-3xl opacity-60" />
        </div>

        {/* 3D Chrome STTHIRA Brand Lockup (Monogram on Left, STTHIRA on Right) */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none px-4 sm:px-6 text-center animate-in fade-in zoom-in-95 duration-1000 ease-out">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            
            {/* STTHIRA 3D Chrome Monogram Logo */}
            <div className="relative shrink-0 drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 348 420"
                className="w-12 h-16 sm:w-16 sm:h-22 md:w-22 md:h-28 lg:w-28 lg:h-36 xl:w-32 xl:h-40"
              >
                <defs>
                  {/* 3D Chrome High-Contrast Linear Gradient */}
                  <linearGradient id="stthira-face-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="18%" stopColor="#d5dbe5" />
                    <stop offset="38%" stopColor="#7a8599" />
                    <stop offset="52%" stopColor="#282d38" />
                    <stop offset="70%" stopColor="#181c24" />
                    <stop offset="85%" stopColor="#8a97ae" />
                    <stop offset="100%" stopColor="#f0f4fa" />
                  </linearGradient>

                  {/* Chrome Bevel Highlight Rim */}
                  <linearGradient id="stthira-rim-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#404858" />
                    <stop offset="30%" stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#1e222b" />
                    <stop offset="80%" stopColor="#d0dcf0" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>

                  {/* SVG Specular 3D Emboss Filter */}
                  <filter id="stthira-bevel-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
                    <feSpecularLighting
                      in="blur"
                      surfaceScale="4.5"
                      specularConstant="1.4"
                      specularExponent="24"
                      lightingColor="#eef4ff"
                      result="specular"
                    >
                      <fePointLight x="-180" y="-120" z="240" />
                    </feSpecularLighting>
                    <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-composite" />
                    <feMerge>
                      <feMergeNode in="SourceGraphic" />
                      <feMergeNode in="specular-composite" />
                    </feMerge>
                  </filter>

                  {/* Cantilever Tier */}
                  <path
                    id="monogram-tier"
                    d="M 0,0 L 100,0 L 100,140 L 85,140 L 85,106 C 85,68 38,32 0,32 Z"
                    fill="url(#stthira-face-grad)"
                    stroke="url(#stthira-rim-grad)"
                    strokeWidth="2.8"
                    filter="url(#stthira-bevel-filter)"
                  />
                </defs>

                {/* Column 1 (Left) */}
                <use href="#monogram-tier" x="0" y="0" />
                <use href="#monogram-tier" x="0" y="140" />

                {/* Column 2 (Center) */}
                <use href="#monogram-tier" x="124" y="0" />
                <use href="#monogram-tier" x="124" y="140" />
                <use href="#monogram-tier" x="124" y="280" />

                {/* Column 3 (Right) */}
                <use href="#monogram-tier" x="248" y="140" />
                <use href="#monogram-tier" x="248" y="280" />
              </svg>
            </div>

            {/* STTHIRA Wordmark in Clash Display Bold with Clean Architectural Platinum Chrome Gradient */}
            <div className="relative">
              <h1
                className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-transparent bg-clip-text drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] select-none"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #ffffff 0%, #e2e8f0 25%, #94a3b8 50%, #475569 70%, #cbd5e1 88%, #f8fafc 100%)",
                }}
              >
                STTHIRA
              </h1>
            </div>

          </div>
        </div>
      </div>

      {/* 02. The Hero Section & Main Page Underneath (Glides smoothly into focus) */}
      <div
        className={`relative z-10 w-full min-h-screen bg-black transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isFadingOut
            ? "opacity-100 scale-100 filter blur-0"
            : "opacity-40 scale-[0.985] filter blur-[2px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
