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

  const DURATION = 3.8; // 3.8 seconds matching the authentic video sweep duration

  const finishIntro = useCallback(() => {
    if (isDismissedRef.current) return;
    isDismissedRef.current = true;
    setIsFadingOut(true);

    if (audioRef.current) {
      // Smooth audio fadeout
      const fadeAudio = () => {
        if (!audioRef.current) return;
        if (audioRef.current.volume > 0.08) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.12);
          setTimeout(fadeAudio, 35);
        } else {
          audioRef.current.pause();
        }
      };
      fadeAudio();
    }

    setTimeout(() => {
      setIsCompleted(true);
    }, 650);
  }, []);

  useEffect(() => {
    setMounted(true);

    if (isRovera) {
      setIsCompleted(true);
      return;
    }

    // 01. Automatic Sound Initialization & Immediate Playback
    const audio = new Audio("/audio/stthira-intro.mp3");
    audio.preload = "auto";
    audio.volume = 1.0;
    audioRef.current = audio;

    const playAudio = () => {
      if (audioRef.current && !isDismissedRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay policy waiting for user interaction
        });
      }
    };

    // Immediate attempt to play sound automatically
    playAudio();

    // Fallback: unlock audio on the very first interaction (mouse movement, touch, click, scroll, or key)
    const unlockAudio = () => {
      playAudio();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("wheel", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
      window.removeEventListener("mousemove", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true, passive: true });
    window.addEventListener("touchstart", unlockAudio, { once: true, passive: true });
    window.addEventListener("keydown", unlockAudio, { once: true, passive: true });
    window.addEventListener("wheel", unlockAudio, { once: true, passive: true });
    window.addEventListener("scroll", unlockAudio, { once: true, passive: true });
    window.addEventListener("mousemove", unlockAudio, { once: true, passive: true });

    // 02. Hard Fallback Timer: Guarantees page NEVER gets stuck
    const autoFinishTimer = setTimeout(() => {
      finishIntro();
    }, 3800);

    // 03. Dynamic Volumetric Rays & Specular Floor Canvas
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
    const particles = Array.from({ length: 40 }, () => ({
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

      // Light beam sweep position across the STTHIRA wordmark (0 = left, 1 = right)
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
      const horizonY = centerY + 15;
      const wordmarkWidth = Math.min(width * 0.88, 620);
      const sweepX = centerX - wordmarkWidth / 2 + sweepProgress * wordmarkWidth;

      // Beam intensity curve
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

      // 1. Dual Upward Rays AND Downward Mirrored Floor Reflections
      if (beamAlpha > 0.02) {
        const letterCount = 7;
        const letterSpacing = wordmarkWidth / (letterCount - 1);

        for (let i = 0; i < letterCount; i++) {
          const letterX = centerX - wordmarkWidth / 2 + i * letterSpacing;
          const distFromSweep = Math.abs(letterX - sweepX);
          const letterActivation = Math.max(0, 1 - distFromSweep / 120);

          if (letterActivation > 0.01) {
            const rayIntensity = letterActivation * beamAlpha;
            const beamSpread = 90 + (1 - letterActivation) * 50;
            const targetY = centerY - 300;

            // Upward volumetric searchlight ray
            const gradUp = ctx.createRadialGradient(
              letterX,
              horizonY,
              5,
              letterX,
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
            ctx.moveTo(letterX - 12, horizonY);
            ctx.lineTo(letterX - beamSpread, targetY);
            ctx.lineTo(letterX + beamSpread, targetY);
            ctx.lineTo(letterX + 12, horizonY);
            ctx.closePath();
            ctx.fill();

            // Downward glossy floor reflection ray (mirror reflection as shown in video)
            const refTargetY = horizonY + (horizonY - targetY) * 0.65;
            const refSpread = beamSpread * 0.65;
            const gradDown = ctx.createRadialGradient(
              letterX,
              horizonY,
              3,
              letterX,
              refTargetY,
              height * 0.5
            );
            gradDown.addColorStop(0, `rgba(255, 255, 255, ${0.5 * rayIntensity})`);
            gradDown.addColorStop(0.15, `rgba(180, 215, 255, ${0.32 * rayIntensity})`);
            gradDown.addColorStop(0.5, `rgba(80, 130, 210, ${0.12 * rayIntensity})`);
            gradDown.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = gradDown;
            ctx.beginPath();
            ctx.moveTo(letterX - 10, horizonY);
            ctx.lineTo(letterX - refSpread, refTargetY);
            ctx.lineTo(letterX + refSpread, refTargetY);
            ctx.lineTo(letterX + 10, horizonY);
            ctx.closePath();
            ctx.fill();
          }
        }

        // 2. Central Fanned God-Rays behind STTHIRA Emblem
        if (elapsed > 0.8 && elapsed < 2.8) {
          const fanPeak = Math.sin(((elapsed - 0.8) / 2.0) * Math.PI);
          const fanAlpha = fanPeak * 0.55 * beamAlpha;

          const fanGrad = ctx.createRadialGradient(
            centerX,
            centerY - 60,
            20,
            centerX,
            centerY - 60,
            Math.max(width, height) * 0.65
          );
          fanGrad.addColorStop(0, `rgba(225, 240, 255, ${fanAlpha * 0.75})`);
          fanGrad.addColorStop(0.3, `rgba(150, 190, 245, ${fanAlpha * 0.45})`);
          fanGrad.addColorStop(0.65, `rgba(70, 110, 190, ${fanAlpha * 0.18})`);
          fanGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = fanGrad;
          ctx.beginPath();
          ctx.arc(centerX, centerY - 60, Math.max(width, height) * 0.65, 0, Math.PI * 2);
          ctx.fill();

          // Radial spokes
          const rayCount = 12;
          for (let r = 0; r < rayCount; r++) {
            const angle = -Math.PI / 2 + ((r - (rayCount - 1) / 2) / rayCount) * 1.35;
            const rayLength = height * 0.75;
            const rayWidth = 14 + (r % 3) * 7;

            ctx.strokeStyle = `rgba(190, 220, 255, ${fanAlpha * 0.22})`;
            ctx.lineWidth = rayWidth;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - 20);
            ctx.lineTo(
              centerX + Math.sin(angle) * rayLength,
              centerY - 60 - Math.cos(angle) * rayLength
            );
            ctx.stroke();
          }
        }

        // 3. Anamorphic Lens Flare & Specular Horizon Shine
        if (elapsed > 0.3 && elapsed < 2.2) {
          const flareAlpha = Math.sin(((elapsed - 0.3) / 1.9) * Math.PI);

          // Horizontal anamorphic streak along horizon
          const streakGrad = ctx.createLinearGradient(
            sweepX - 260,
            horizonY,
            sweepX + 260,
            horizonY
          );
          streakGrad.addColorStop(0, "rgba(100, 160, 255, 0)");
          streakGrad.addColorStop(0.35, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          streakGrad.addColorStop(0.65, `rgba(180, 220, 255, ${0.45 * flareAlpha})`);
          streakGrad.addColorStop(1, "rgba(100, 160, 255, 0)");

          ctx.fillStyle = streakGrad;
          ctx.fillRect(sweepX - 260, horizonY - 2, 520, 4);

          // Central circular flare core
          const coreGrad = ctx.createRadialGradient(
            sweepX,
            horizonY,
            2,
            sweepX,
            horizonY,
            46
          );
          coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * flareAlpha})`);
          coreGrad.addColorStop(0.3, `rgba(200, 230, 255, ${0.65 * flareAlpha})`);
          coreGrad.addColorStop(0.7, `rgba(120, 170, 255, ${0.25 * flareAlpha})`);
          coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

          ctx.fillStyle = coreGrad;
          ctx.beginPath();
          ctx.arc(sweepX, horizonY, 46, 0, Math.PI * 2);
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

        const distToSweep = Math.abs(p.x - sweepX);
        const illumination = Math.max(0.2, 1 - distToSweep / 260) * beamAlpha;

        ctx.fillStyle = `rgba(215, 235, 255, ${p.alpha * illumination})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // Automatic completion at 3.8s
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
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("mousemove", unlockAudio);
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
      {/* Authentic Video Sound Effect (Autoplay Enabled) */}
      <audio
        ref={audioRef}
        src="/audio/stthira-intro.mp3"
        preload="auto"
        playsInline
      />

      {/* The Lightstorm-Style Cinematic Opening Stage (Click anywhere to smoothly enter) */}
      <div
        aria-label="STTHIRA Cinematic Opening"
        onClick={finishIntro}
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

        {/* 3D Chrome STTHIRA Monolithic Brand Presentation */}
        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
          
          {/* SVG 3D Chrome Monogram with Specular Shading */}
          <div className="relative mb-3 sm:mb-4 drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 348 420"
              className="w-20 h-24 sm:w-28 sm:h-34 md:w-36 md:h-44"
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

          {/* Big STTHIRA Name with Monumental Clash Display Font Style */}
          <div className="relative">
            <h1 className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.24em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] select-none">
              STTHIRA
            </h1>
          </div>

          {/* Specular Horizon Hairline Glint */}
          <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent my-1 sm:my-1.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />

          {/* 04. Luxury Mirrored Floor Reflection Effect (as shown in the video) */}
          <div
            aria-hidden="true"
            className="relative flex flex-col items-center select-none pointer-events-none transform -scale-y-100 opacity-50"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0) 75%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0) 75%)",
              filter: "blur(1.2px) brightness(0.85)",
            }}
          >
            {/* Reflected STTHIRA Wordmark (inverted closest to horizon) */}
            <div className="relative">
              <div className="font-clash text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.24em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 select-none">
                STTHIRA
              </div>
            </div>

            {/* Reflected Monogram */}
            <div className="relative mt-3 sm:mt-4 opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 348 420"
                className="w-20 h-24 sm:w-28 sm:h-34 md:w-36 md:h-44"
              >
                <use href="#stthira-tier-chrome" x="0" y="0" />
                <use href="#stthira-tier-chrome" x="0" y="140" />
                <use href="#stthira-tier-chrome" x="124" y="0" />
                <use href="#stthira-tier-chrome" x="124" y="140" />
                <use href="#stthira-tier-chrome" x="124" y="280" />
                <use href="#stthira-tier-chrome" x="248" y="140" />
                <use href="#stthira-tier-chrome" x="248" y="280" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* The Main Website Page underneath */}
      <div className="relative z-10 w-full min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
}
