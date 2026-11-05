"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

interface CinematicOpeningRevealProps {
  children: React.ReactNode;
}

export default function CinematicOpeningReveal({ children }: CinematicOpeningRevealProps) {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [mounted, setMounted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isDismissedRef = useRef<boolean>(false);
  const audioStartedRef = useRef<boolean>(false);

  const DURATION = 3.6; // 3.6s active sweep duration before cinematic dissolve

  const finishIntro = useCallback(() => {
    if (isDismissedRef.current) return;
    isDismissedRef.current = true;
    setIsFadingOut(true);

    if (audioRef.current) {
      // Natural acoustic fadeout tail
      const fadeAudio = () => {
        if (!audioRef.current) return;
        if (audioRef.current.volume > 0.08) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.14);
          setTimeout(fadeAudio, 30);
        } else {
          audioRef.current.pause();
        }
      };
      fadeAudio();
    }

    // Allow the 1000ms buttery cross-dissolve to complete before unmounting
    setTimeout(() => {
      setIsCompleted(true);
    }, 1000);
  }, []);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audioStartedRef.current) return;
    audio.volume = 1.0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          audioStartedRef.current = true;
        })
        .catch(() => {
          // Autoplay policy waiting for user touch gesture
        });
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    if (isRovera) {
      setIsCompleted(true);
      return;
    }

    // 01. Initialize Audio immediately in memory
    const audio = new Audio("/audio/stthira-intro.mp3");
    audio.preload = "auto";
    audio.volume = 1.0;
    audioRef.current = audio;

    // Trigger automatic sound playback immediately on load
    playAudio();

    // Browser Fallback: unlock audio on the very first gesture anywhere
    const onGesture = () => {
      if (audioRef.current && !audioStartedRef.current) {
        playAudio();
      }
    };

    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("click", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture, { passive: true });

    // 02. Hard Fallback Timer: Guarantees page NEVER gets stuck
    const autoFinishTimer = setTimeout(() => {
      finishIntro();
    }, 3700);

    // 03. Volumetric Searchlight Beams & Specular Sweep Canvas
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

    // Fine floating atmospheric particulates
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    startTimeRef.current = performance.now();

    const render = (now: number) => {
      if (isDismissedRef.current) return;

      const elapsed = (now - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Light beam sweep position across the full [LOGO + STTHIRA] lockup (0 = far left, 1 = far right)
      let sweepProgress = 0;
      if (elapsed < 0.3) {
        sweepProgress = (elapsed / 0.3) * 0.12;
      } else if (elapsed < 1.6) {
        const t = (elapsed - 0.3) / 1.3;
        sweepProgress = 0.12 + (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) * 0.76;
      } else {
        sweepProgress = 0.88 + Math.min(1, (elapsed - 1.6) / 1.2) * 0.12;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const lockupWidth = Math.min(width * 0.92, 780);
      const sweepX = centerX - lockupWidth / 2 + sweepProgress * lockupWidth;
      const beamY = centerY;

      // Beam intensity curve
      let beamAlpha = 0;
      if (elapsed < 0.3) {
        beamAlpha = elapsed / 0.3;
      } else if (elapsed < 2.0) {
        beamAlpha = 1.0;
      } else if (elapsed < 3.0) {
        beamAlpha = 1.0 - (elapsed - 2.0) / 1.0;
      } else {
        beamAlpha = 0;
      }

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // 1. Upward Volumetric Searchlight Beams across Logo + Letters
      if (beamAlpha > 0.02) {
        const emitterCount = 8; // 1 for emblem + 7 for S-T-T-H-I-R-A
        const spacing = lockupWidth / (emitterCount - 1);

        for (let i = 0; i < emitterCount; i++) {
          const emitterX = centerX - lockupWidth / 2 + i * spacing;
          const distFromSweep = Math.abs(emitterX - sweepX);
          const activation = Math.max(0, 1 - distFromSweep / 125);

          if (activation > 0.01) {
            const rayIntensity = activation * beamAlpha;
            const beamSpread = 85 + (1 - activation) * 45;
            const targetY = centerY - 320;

            // Upward volumetric searchlight ray
            const gradUp = ctx.createRadialGradient(
              emitterX,
              beamY,
              5,
              emitterX,
              targetY,
              height * 0.75
            );
            gradUp.addColorStop(0, `rgba(255, 255, 255, ${0.85 * rayIntensity})`);
            gradUp.addColorStop(0.12, `rgba(210, 230, 255, ${0.65 * rayIntensity})`);
            gradUp.addColorStop(0.45, `rgba(140, 180, 240, ${0.35 * rayIntensity})`);
            gradUp.addColorStop(0.8, `rgba(60, 100, 180, ${0.12 * rayIntensity})`);
            gradUp.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = gradUp;
            ctx.beginPath();
            ctx.moveTo(emitterX - 12, beamY);
            ctx.lineTo(emitterX - beamSpread, targetY);
            ctx.lineTo(emitterX + beamSpread, targetY);
            ctx.lineTo(emitterX + 12, beamY);
            ctx.closePath();
            ctx.fill();
          }
        }

        // 2. Central Fanned God-Rays behind Lockup
        if (elapsed > 0.8 && elapsed < 2.6) {
          const fanPeak = Math.sin(((elapsed - 0.8) / 1.8) * Math.PI);
          const fanAlpha = fanPeak * 0.55 * beamAlpha;

          const fanGrad = ctx.createRadialGradient(
            centerX,
            centerY,
            20,
            centerX,
            centerY,
            Math.max(width, height) * 0.65
          );
          fanGrad.addColorStop(0, `rgba(225, 240, 255, ${fanAlpha * 0.75})`);
          fanGrad.addColorStop(0.3, `rgba(150, 190, 245, ${fanAlpha * 0.45})`);
          fanGrad.addColorStop(0.65, `rgba(70, 110, 190, ${fanAlpha * 0.18})`);
          fanGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = fanGrad;
          ctx.beginPath();
          ctx.arc(centerX, centerY, Math.max(width, height) * 0.65, 0, Math.PI * 2);
          ctx.fill();

          // Radial spokes
          const rayCount = 14;
          for (let r = 0; r < rayCount; r++) {
            const angle = -Math.PI / 2 + ((r - (rayCount - 1) / 2) / rayCount) * 1.35;
            const rayLength = height * 0.75;
            const rayWidth = 14 + (r % 3) * 7;

            ctx.strokeStyle = `rgba(190, 220, 255, ${fanAlpha * 0.22})`;
            ctx.lineWidth = rayWidth;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
              centerX + Math.sin(angle) * rayLength,
              centerY - Math.cos(angle) * rayLength
            );
            ctx.stroke();
          }
        }

        // 3. Anamorphic Lens Flare Following the Sweep Beam
        if (elapsed > 0.3 && elapsed < 2.2) {
          const flareAlpha = Math.sin(((elapsed - 0.3) / 1.9) * Math.PI);

          // Horizontal anamorphic streak
          const streakGrad = ctx.createLinearGradient(
            sweepX - 260,
            beamY,
            sweepX + 260,
            beamY
          );
          streakGrad.addColorStop(0, "rgba(100, 160, 255, 0)");
          streakGrad.addColorStop(0.35, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          streakGrad.addColorStop(0.65, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(1, "rgba(100, 160, 255, 0)");

          ctx.fillStyle = streakGrad;
          ctx.fillRect(sweepX - 260, beamY - 2.5, 520, 5);

          // Central circular flare core
          const coreGrad = ctx.createRadialGradient(
            sweepX,
            beamY,
            2,
            sweepX,
            beamY,
            46
          );
          coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          coreGrad.addColorStop(0.3, `rgba(200, 230, 255, ${0.65 * flareAlpha})`);
          coreGrad.addColorStop(0.7, `rgba(120, 170, 255, ${0.25 * flareAlpha})`);
          coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(sweepX, beamY, 46, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Atmospheric Particulates
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const distToSweep = Math.abs(p.x - sweepX);
        const illumination = Math.max(0.2, 1 - distToSweep / 260) * beamAlpha;

        ctx.fillStyle = `rgba(215, 235, 255, ${p.alpha * illumination})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // Trigger smooth dissolve at 3.6s
      if (elapsed >= DURATION) {
        finishIntro();
        return;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        finishIntro();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(autoFinishTimer);
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("click", onGesture);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isRovera, finishIntro, playAudio]);

  const handleStageClick = () => {
    if (!audioStartedRef.current) {
      playAudio();
    } else {
      finishIntro();
    }
  };

  if (!mounted || isCompleted || isRovera) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* 01. The Cinematic Intro Stage (Cross-Dissolves into the Hero Section) */}
      <div
        aria-label="STTHIRA Cinematic Opening"
        onClick={handleStageClick}
        className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black select-none cursor-pointer overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isFadingOut
            ? "opacity-0 pointer-events-none scale-[1.05] filter blur-[3px]"
            : "opacity-100 scale-100 filter blur-0"
        }`}
      >
        {/* Dynamic Volumetric Searchlight Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* 3D Chrome STTHIRA Brand: Monogram Beside STTHIRA (Horizontal Side-by-Side Lockup) */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3.5 sm:gap-6 md:gap-8 lg:gap-10">
            
            {/* STTHIRA 3D Chrome Monogram Logo on the LEFT side */}
            <div className="relative shrink-0 drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 348 420"
                className="w-12 h-16 sm:w-16 sm:h-22 md:w-22 md:h-28 lg:w-28 lg:h-36 xl:w-32 xl:h-40"
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

            {/* STTHIRA Wordmark on the RIGHT side in Bold Clash Display */}
            <div className="relative">
              <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] select-none">
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
