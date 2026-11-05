"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";

interface CinematicOpeningRevealProps {
  children: React.ReactNode;
}

export default function CinematicOpeningReveal({ children }: CinematicOpeningRevealProps) {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [mounted, setMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isDismissedRef = useRef<boolean>(false);

  const DURATION = 3.9; // 3.9 seconds matching the original video duration

  const finishIntro = useCallback(() => {
    if (isDismissedRef.current) return;
    isDismissedRef.current = true;
    setIsFadingOut(true);

    if (audioRef.current) {
      // Smooth audio fadeout
      const fadeAudio = () => {
        if (!audioRef.current) return;
        if (audioRef.current.volume > 0.05) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.1);
          setTimeout(fadeAudio, 40);
        } else {
          audioRef.current.pause();
        }
      };
      fadeAudio();
    }

    setTimeout(() => {
      setIsCompleted(true);
    }, 600);
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  }, [isMuted]);

  // Attempt to play audio
  const startAudio = useCallback(() => {
    if (!audioRef.current || audioStarted) return;
    audioRef.current.volume = 1.0;
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then(() => {
        setAudioStarted(true);
      })
      .catch(() => {
        // Autoplay policy prevented playback until user gesture
      });
  }, [audioStarted]);

  useEffect(() => {
    setMounted(true);

    if (isRovera) {
      setIsCompleted(true);
      return;
    }

    // Initialize Audio
    const audio = new Audio("/audio/stthira-intro.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    // Try autoplay immediately
    audio.play().then(() => setAudioStarted(true)).catch(() => {
      // Will play on first click/interaction
    });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Dust particles floating in atmospheric beam
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      alpha: Math.random() * 0.7 + 0.2,
    }));

    startTimeRef.current = performance.now();

    const render = (now: number) => {
      if (isDismissedRef.current) return;

      const elapsed = (now - startTimeRef.current) / 1000;
      const progress = Math.min(1, elapsed / DURATION);

      // Lightstorm Sweep Timing:
      // 0.0s - 0.4s: Initial left glow
      // 0.4s - 1.5s: Main beam sweeps from left to right across wordmark
      // 1.5s - 2.4s: Majestic volumetric rays fan out behind central monogram
      // 2.4s - 3.3s: Rays settle into subtle atmospheric rim highlights
      // 3.3s - 3.9s: Smooth dissolve into website

      ctx.clearRect(0, 0, width, height);

      // Dynamic light beam sweep position (0 = far left, 1 = far right)
      // Uses smooth acceleration then deceleration
      let sweepProgress = 0;
      if (elapsed < 0.3) {
        sweepProgress = (elapsed / 0.3) * 0.12;
      } else if (elapsed < 1.6) {
        const t = (elapsed - 0.3) / 1.3;
        // EaseInOut cubic
        sweepProgress = 0.12 + (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) * 0.76;
      } else {
        sweepProgress = 0.88 + Math.min(1, (elapsed - 1.6) / 1.2) * 0.12;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const wordmarkY = centerY + 95;
      const wordmarkWidth = Math.min(width * 0.82, 540);
      const sweepX = centerX - wordmarkWidth / 2 + sweepProgress * wordmarkWidth;

      // Calculate beam intensity curve
      let beamAlpha = 0;
      if (elapsed < 0.3) {
        beamAlpha = elapsed / 0.3;
      } else if (elapsed < 2.0) {
        beamAlpha = 1.0;
      } else if (elapsed < 3.2) {
        beamAlpha = 1.0 - (elapsed - 2.0) / 1.2;
      } else {
        beamAlpha = 0;
      }

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // 1. Volumetric Searchlight Rays shooting upwards from wordmark letters
      if (beamAlpha > 0.02) {
        // Individual ray emitters corresponding to S T T H I R A
        const letterCount = 7;
        const letterSpacing = wordmarkWidth / (letterCount - 1);

        for (let i = 0; i < letterCount; i++) {
          const letterX = centerX - wordmarkWidth / 2 + i * letterSpacing;
          const distFromSweep = Math.abs(letterX - sweepX);
          const letterActivation = Math.max(0, 1 - distFromSweep / 110);

          if (letterActivation > 0.01) {
            const rayIntensity = letterActivation * beamAlpha;
            // Divergent conic searchlight beam
            const beamSpread = 90 + (1 - letterActivation) * 50;
            const targetY = centerY - 280;

            const grad = ctx.createRadialGradient(
              letterX,
              wordmarkY,
              5,
              letterX,
              targetY,
              height * 0.75
            );
            grad.addColorStop(0, `rgba(255, 255, 255, ${0.85 * rayIntensity})`);
            grad.addColorStop(0.12, `rgba(210, 230, 255, ${0.65 * rayIntensity})`);
            grad.addColorStop(0.45, `rgba(140, 180, 240, ${0.35 * rayIntensity})`);
            grad.addColorStop(0.8, `rgba(60, 100, 180, ${0.12 * rayIntensity})`);
            grad.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(letterX - 12, wordmarkY);
            ctx.lineTo(letterX - beamSpread, targetY);
            ctx.lineTo(letterX + beamSpread, targetY);
            ctx.lineTo(letterX + 12, wordmarkY);
            ctx.closePath();
            ctx.fill();
          }
        }

        // 2. Central Majestic Fanned Light Arc behind STTHIRA Emblem (peaks at 1.2s - 2.2s)
        if (elapsed > 0.8 && elapsed < 2.8) {
          const fanPeak = Math.sin(((elapsed - 0.8) / 2.0) * Math.PI);
          const fanAlpha = fanPeak * 0.55 * beamAlpha;

          const fanGrad = ctx.createRadialGradient(
            centerX,
            centerY - 20,
            20,
            centerX,
            centerY - 20,
            Math.max(width, height) * 0.65
          );
          fanGrad.addColorStop(0, `rgba(225, 240, 255, ${fanAlpha * 0.75})`);
          fanGrad.addColorStop(0.3, `rgba(150, 190, 245, ${fanAlpha * 0.45})`);
          fanGrad.addColorStop(0.65, `rgba(70, 110, 190, ${fanAlpha * 0.18})`);
          fanGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = fanGrad;
          ctx.beginPath();
          ctx.arc(centerX, centerY - 20, Math.max(width, height) * 0.65, 0, Math.PI * 2);
          ctx.fill();

          // Radial searchlight spokes / god rays
          const rayCount = 14;
          for (let r = 0; r < rayCount; r++) {
            const angle = -Math.PI / 2 + ((r - (rayCount - 1) / 2) / rayCount) * 1.4;
            const rayLength = height * 0.8;
            const rayWidth = 14 + (r % 3) * 8;

            ctx.strokeStyle = `rgba(190, 220, 255, ${fanAlpha * 0.22})`;
            ctx.lineWidth = rayWidth;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY + 30);
            ctx.lineTo(
              centerX + Math.sin(angle) * rayLength,
              centerY - Math.cos(angle) * rayLength
            );
            ctx.stroke();
          }
        }

        // 3. Anamorphic Lens Flare & Specular Flare following the sweep beam
        if (elapsed > 0.3 && elapsed < 2.0) {
          const flareAlpha = Math.sin(((elapsed - 0.3) / 1.7) * Math.PI);

          // Horizontal streak
          const streakGrad = ctx.createLinearGradient(
            sweepX - 220,
            wordmarkY,
            sweepX + 220,
            wordmarkY
          );
          streakGrad.addColorStop(0, "rgba(100, 160, 255, 0)");
          streakGrad.addColorStop(0.35, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          streakGrad.addColorStop(0.65, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(1, "rgba(100, 160, 255, 0)");

          ctx.fillStyle = streakGrad;
          ctx.fillRect(sweepX - 220, wordmarkY - 2.5, 440, 5);

          // Central circular flare core
          const coreGrad = ctx.createRadialGradient(
            sweepX,
            wordmarkY,
            2,
            sweepX,
            wordmarkY,
            42
          );
          coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          coreGrad.addColorStop(0.3, `rgba(200, 230, 255, ${0.65 * flareAlpha})`);
          coreGrad.addColorStop(0.7, `rgba(120, 170, 255, ${0.25 * flareAlpha})`);
          coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(sweepX, wordmarkY, 42, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Floating atmospheric particulate
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Catch light when near the sweep beam
        const distToSweep = Math.abs(p.x - sweepX);
        const illumination = Math.max(0.2, 1 - distToSweep / 260) * beamAlpha;

        ctx.fillStyle = `rgba(215, 235, 255, ${p.alpha * illumination})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // Check for automatic completion at 3.9s
      if (elapsed >= DURATION) {
        finishIntro();
        return;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isRovera, finishIntro]);

  if (!mounted || isCompleted || isRovera) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* 00. Audio Element with Authentic Video Sound Effect */}
      <audio
        ref={audioRef}
        src="/audio/stthira-intro.mp3"
        preload="auto"
        playsInline
      />

      {/* 01. The Lightstorm-Style Cinematic Opening Stage */}
      <div
        aria-label="STTHIRA Cinematic Opening"
        onClick={() => {
          if (!audioStarted) startAudio();
        }}
        className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black select-none cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isFadingOut
            ? "-translate-y-full opacity-0 pointer-events-none scale-[1.015]"
            : "translate-y-0 opacity-100 scale-100"
        }`}
      >
        {/* Dynamic Volumetric Searchlight Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* 3D Chrome / Beveled Monolithic STTHIRA Brand Presentation */}
        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
          {/* SVG 3D Chrome Monogram with Specular Shading */}
          <div className="relative mb-5 drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 348 420"
              className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-48"
            >
              <defs>
                {/* 3D Chrome High-Contrast Linear Gradient */}
                <linearGradient id="chrome-face" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="18%" stopColor="#d5dbe5" />
                  <stop offset="38%" stopColor="#7a8599" />
                  <stop offset="52%" stopColor="#282d38" />
                  <stop offset="70%" stopColor="#181c24" />
                  <stop offset="85%" stopColor="#8a97ae" />
                  <stop offset="100%" stopColor="#f0f4fa" />
                </linearGradient>

                {/* Chrome Bevel Highlight Rim */}
                <linearGradient id="chrome-rim" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#404858" />
                  <stop offset="30%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#1e222b" />
                  <stop offset="80%" stopColor="#d0dcf0" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                {/* SVG Specular 3D Emboss Filter */}
                <filter id="chrome-3d-bevel" x="-20%" y="-20%" width="140%" height="140%">
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

                {/* Architectural cantilever tier forming the STTHIRA monolithic monogram */}
                <path
                  id="stthira-tier-chrome"
                  d="M 0,0 L 100,0 L 100,140 L 85,140 L 85,106 C 85,68 38,32 0,32 Z"
                  fill="url(#chrome-face)"
                  stroke="url(#chrome-rim)"
                  strokeWidth="2.8"
                  filter="url(#chrome-3d-bevel)"
                />
              </defs>

              {/* Column 1 (Left): Top and Middle tiers */}
              <use href="#stthira-tier-chrome" x="0" y="0" />
              <use href="#stthira-tier-chrome" x="0" y="140" />

              {/* Column 2 (Center): Top, Middle, and Bottom tiers */}
              <use href="#stthira-tier-chrome" x="124" y="0" />
              <use href="#stthira-tier-chrome" x="124" y="140" />
              <use href="#stthira-tier-chrome" x="124" y="280" />

              {/* Column 3 (Right): Middle and Bottom tiers */}
              <use href="#stthira-tier-chrome" x="248" y="140" />
              <use href="#stthira-tier-chrome" x="248" y="280" />
            </svg>
          </div>

          {/* 3D Chiseled Chrome Wordmark: S T T H I R A */}
          <div className="relative mb-3">
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.32em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] select-none">
              STTHIRA
            </h1>
          </div>

          {/* Spaced Subtitle: ARCHITECTURAL PERMANENCE */}
          <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.4em] font-sans font-light text-neutral-400 select-none">
            <span>Architectural Permanence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Est. 2026</span>
          </div>
        </div>

        {/* Top Controls: Sound Toggle & Skip */}
        <div className="absolute top-6 left-6 z-20 pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={toggleMute}
            className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-600 bg-black/60 backdrop-blur-xs font-sans cursor-pointer"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-neutral-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isMuted ? "Sound Off" : "Sound On"}</span>
          </button>
        </div>

        <div className="absolute top-6 right-6 z-20 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              finishIntro();
            }}
            className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors px-4 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-600 bg-black/60 backdrop-blur-xs font-sans cursor-pointer shadow-lg"
          >
            Skip Intro →
          </button>
        </div>

        {/* Bottom Ambient Prompt */}
        {!audioStarted && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-sans font-light animate-pulse">
              Click anywhere for full cinematic sound
            </span>
          </div>
        )}
      </div>

      {/* 02. The Main Website Page underneath */}
      <div className="relative z-10 w-full min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
}

