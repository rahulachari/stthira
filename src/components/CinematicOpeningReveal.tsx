"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

interface CinematicOpeningRevealProps {
  children: React.ReactNode;
}

const LETTERS = ["S", "T", "T", "H", "I", "R", "A"];

export default function CinematicOpeningReveal({ children }: CinematicOpeningRevealProps) {
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  const [isCompleted, setIsCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoAudioRef = useRef<HTMLVideoElement | null>(null);
  const audioFallbackRef = useRef<HTMLAudioElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isDismissedRef = useRef<boolean>(false);
  const audioStartedRef = useRef<boolean>(false);

  const DURATION = 3.6; // 3.6s active sweep duration before cinematic dissolve

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

    // Allow the 1000ms buttery cross-dissolve to complete before unmounting
    setTimeout(() => {
      setIsCompleted(true);
    }, 1000);
  }, []);

  const playAudio = useCallback(() => {
    if (audioStartedRef.current) return;

    // 01. Primary: Exact Video Audio track from Video Project.mp4
    const video = videoAudioRef.current;
    if (video) {
      video.volume = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audioStartedRef.current = true;
          })
          .catch(() => {
            // Autoplay waiting for user gesture
          });
      }
    }

    // 02. Fallback: Pure audio element
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

    // Initialize Audio immediate playback
    playAudio();

    // Browser Gesture Fallback: Unlocks audio instantly on the very first touch/click
    const onGesture = () => {
      if (!audioStartedRef.current) {
        playAudio();
      }
    };

    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("touchstart", onGesture, { passive: true });
    window.addEventListener("click", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture, { passive: true });

    // Hard Fallback Timer: Guarantees page NEVER gets stuck
    const autoFinishTimer = setTimeout(() => {
      finishIntro();
    }, 3900);

    // Volumetric Searchlight Beams Canvas
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
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    startTimeRef.current = performance.now();

    const render = (now: number) => {
      if (isDismissedRef.current) return;

      // Ensure canvas matches viewport
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }

      // Precision Audio Sync: sync exact playback position with the sound track
      const video = videoAudioRef.current;
      const audioTime = video && !video.paused && video.currentTime > 0 ? video.currentTime : null;
      const clockTime = (now - startTimeRef.current) / 1000;
      const elapsed = audioTime !== null ? audioTime : clockTime;

      ctx.clearRect(0, 0, width, height);

      // Smooth Hermite cubic-bezier sweep progression across the 8 items: [0: Emblem, 1: S, 2: T, 3: T, 4: H, 5: I, 6: R, 7: A]
      // Accelerates and glides organically across the wordmark between 0.12s and 1.38s
      let smoothProgress = 0;
      if (elapsed < 0.12) {
        smoothProgress = (elapsed / 0.12) * 0.3;
      } else if (elapsed < 1.38) {
        const t = (elapsed - 0.12) / 1.26;
        // Smooth Hermite curve: 3t^2 - 2t^3
        const ease = t * t * (3 - 2 * t);
        smoothProgress = 0.3 + ease * 6.7;
      } else {
        smoothProgress = 7.0;
      }

      // Calculate activation for each item (0 = Emblem, 1..7 = Letters)
      // Allows 2-3 adjacent letters to be simultaneously visible with realistic trailing falloff (as in Video Project.mp4)
      const activations: number[] = [];
      for (let i = 0; i <= 7; i++) {
        const dist = Math.abs(i - smoothProgress);
        let act = Math.max(0, 1 - dist / 1.45);
        act = Math.pow(act, 1.6);

        // Grand Climax: when sweep reaches 'A' (1.38s - 1.75s), all letters burst with heroic brilliance
        if (elapsed >= 1.38 && elapsed < 1.75) {
          const climaxPeak = Math.sin(((elapsed - 1.38) / 0.37) * Math.PI);
          act = Math.max(act, climaxPeak * 0.96);
        } else if (elapsed >= 1.75) {
          // Sustained rich platinum luster
          act = 0.14;
        }

        activations.push(act);
      }

      // Dynamic Specular Surface Lighting on Letters (Zero React re-render overhead, 60fps)
      // Item 0: Monogram Emblem
      const emblemEl = itemRefs.current[0];
      if (emblemEl) {
        const act0 = activations[0];
        if (act0 > 0.08) {
          emblemEl.style.transform = `scale(${1 + 0.05 * act0})`;
          emblemEl.style.filter = `drop-shadow(0 15px 35px rgba(0,0,0,0.95)) brightness(${1 + 1.15 * act0}) drop-shadow(0 0 ${20 * act0}px rgba(220, 240, 255, ${0.8 * act0}))`;
        } else {
          emblemEl.style.transform = "scale(1)";
          emblemEl.style.filter = "drop-shadow(0 15px 35px rgba(0,0,0,0.95)) brightness(1)";
        }
      }

      // Items 1 to 7: S - T - T - H - I - R - A (3D Chiseled Titanium Letters)
      for (let j = 1; j <= 7; j++) {
        const letterEl = itemRefs.current[j];
        if (!letterEl) continue;

        const actJ = activations[j];
        if (actJ > 0.08) {
          // Active under searchlight: intense white specular flash, luminous ice-blue halo
          letterEl.style.transform = `scale(${1 + 0.06 * actJ})`;
          letterEl.style.filter = `brightness(${1 + 1.25 * actJ}) drop-shadow(0 0 ${14 * actJ}px rgba(255, 255, 255, ${0.92 * actJ})) drop-shadow(0 0 ${28 * actJ}px rgba(180, 220, 255, ${0.75 * actJ}))`;
        } else if (elapsed < 1.38 && j > smoothProgress + 0.4) {
          // Letter not yet reached by beam: deep stealth titanium
          letterEl.style.transform = "scale(1)";
          letterEl.style.filter = "brightness(0.68)";
        } else {
          // Letter has been swept / after climax: polished platinum chrome
          letterEl.style.transform = "scale(1)";
          letterEl.style.filter = "brightness(1.05) drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))";
        }
      }

      // 03. Draw Multi-Pass Volumetric Searchlight Beams (Soft, Atmospheric, Hollywood-Grade)
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const screenCenterX = width / 2;
      const maxDimension = Math.max(width, height) * 1.35;

      for (let i = 0; i <= 7; i++) {
        const act = activations[i];
        if (act <= 0.01) continue;

        const el = itemRefs.current[i];
        const rect = el ? el.getBoundingClientRect() : null;
        const lockupWidth = Math.min(width * 0.92, 780);
        const fallbackSpacing = lockupWidth / 7;
        const fallbackX = screenCenterX - lockupWidth / 2 + i * fallbackSpacing;
        const fallbackY = height / 2;

        const emitterX = rect && rect.width > 0 ? rect.left + rect.width / 2 : fallbackX;
        const emitterY = rect && rect.height > 0 ? rect.top + rect.height * 0.15 : fallbackY;

        // Diagonal searchlight perspective projection (matching Video Project.mp4):
        // Left items (Emblem, S, T) tilt up-left (-42° to -18°)
        // Center items (T, H) sweep upwards (-8° to +8°)
        // Right items (I, R, A) tilt diagonally up-right (+18° to +44°), exactly matching the user's circled beam!
        const normalizedPos = (i - 3.5) / 3.5; // -1.0 to +1.0
        const tiltDeg = normalizedPos * 44; // -44° to +44° from vertical
        const angleRad = -Math.PI / 2 + (tiltDeg * Math.PI) / 180;

        const dirX = Math.cos(angleRad);
        const dirY = Math.sin(angleRad);

        // Perpendicular normal vector across beam width
        const normX = -dirY;
        const normY = dirX;

        // Beam endpoints shooting far across the sky
        const endX = emitterX + dirX * maxDimension;
        const endY = emitterY + dirY * maxDimension;

        // PASS 1: Broad Atmospheric Volumetric Haze (Soft feathered fog volume)
        ctx.filter = "blur(22px)";
        const hazeBaseW = 28 + act * 20;
        const hazeEndW = 160 + act * 140;

        const hazeGrad = ctx.createLinearGradient(emitterX, emitterY, endX, endY);
        hazeGrad.addColorStop(0, `rgba(255, 255, 255, ${0.45 * act})`);
        hazeGrad.addColorStop(0.15, `rgba(225, 240, 255, ${0.32 * act})`);
        hazeGrad.addColorStop(0.45, `rgba(165, 195, 235, ${0.16 * act})`);
        hazeGrad.addColorStop(0.75, `rgba(100, 140, 200, ${0.06 * act})`);
        hazeGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = hazeGrad;
        ctx.beginPath();
        ctx.moveTo(emitterX - normX * (hazeBaseW / 2), emitterY - normY * (hazeBaseW / 2));
        ctx.lineTo(endX - normX * (hazeEndW / 2), endY - normY * (hazeEndW / 2));
        ctx.lineTo(endX + normX * (hazeEndW / 2), endY + normY * (hazeEndW / 2));
        ctx.lineTo(emitterX + normX * (hazeBaseW / 2), emitterY + normY * (hazeBaseW / 2));
        ctx.closePath();
        ctx.fill();

        // PASS 2: Focused Volumetric Beam Body (Silvery-white with delicate titanium blue tint)
        ctx.filter = "blur(8px)";
        const bodyBaseW = 18 + act * 14;
        const bodyEndW = 105 + act * 95;

        const bodyGrad = ctx.createLinearGradient(emitterX, emitterY, endX, endY);
        bodyGrad.addColorStop(0, `rgba(255, 255, 255, ${0.88 * act})`);
        bodyGrad.addColorStop(0.12, `rgba(240, 248, 255, ${0.72 * act})`);
        bodyGrad.addColorStop(0.38, `rgba(195, 220, 245, ${0.38 * act})`);
        bodyGrad.addColorStop(0.70, `rgba(130, 165, 210, ${0.14 * act})`);
        bodyGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.moveTo(emitterX - normX * (bodyBaseW / 2), emitterY - normY * (bodyBaseW / 2));
        ctx.lineTo(endX - normX * (bodyEndW / 2), endY - normY * (bodyEndW / 2));
        ctx.lineTo(endX + normX * (bodyEndW / 2), endY + normY * (bodyEndW / 2));
        ctx.lineTo(emitterX + normX * (bodyBaseW / 2), emitterY + normY * (bodyBaseW / 2));
        ctx.closePath();
        ctx.fill();

        // PASS 3: Inner Intense Hot Laser Spine
        ctx.filter = "blur(2.5px)";
        const coreBaseW = 5;
        const coreEndW = 26 + act * 20;

        const coreGrad = ctx.createLinearGradient(emitterX, emitterY, endX, endY);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${1.0 * act})`);
        coreGrad.addColorStop(0.22, `rgba(255, 255, 255, ${0.88 * act})`);
        coreGrad.addColorStop(0.55, `rgba(230, 245, 255, ${0.38 * act})`);
        coreGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.moveTo(emitterX - normX * (coreBaseW / 2), emitterY - normY * (coreBaseW / 2));
        ctx.lineTo(endX - normX * (coreEndW / 2), endY - normY * (coreEndW / 2));
        ctx.lineTo(endX + normX * (coreEndW / 2), endY + normY * (coreEndW / 2));
        ctx.lineTo(emitterX + normX * (coreBaseW / 2), emitterY + normY * (coreBaseW / 2));
        ctx.closePath();
        ctx.fill();

        // PASS 4: Optical Lens Flare Halo at Letter Base
        ctx.filter = "blur(3px)";
        const flareRad = 32 * act;
        const flareGrad = ctx.createRadialGradient(emitterX, emitterY, 1, emitterX, emitterY, flareRad);
        flareGrad.addColorStop(0, `rgba(255, 255, 255, ${0.98 * act})`);
        flareGrad.addColorStop(0.3, `rgba(220, 240, 255, ${0.72 * act})`);
        flareGrad.addColorStop(0.7, `rgba(135, 185, 250, ${0.2 * act})`);
        flareGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = flareGrad;
        ctx.beginPath();
        ctx.arc(emitterX, emitterY, flareRad, 0, Math.PI * 2);
        ctx.fill();

        // Anamorphic Horizontal Starburst Streak across Letter
        const streakW = 180 * act;
        const streakH = 3;
        const streakGrad = ctx.createLinearGradient(emitterX - streakW, emitterY, emitterX + streakW, emitterY);
        streakGrad.addColorStop(0, "rgba(100, 160, 255, 0)");
        streakGrad.addColorStop(0.35, `rgba(215, 240, 255, ${0.62 * act})`);
        streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.98 * act})`);
        streakGrad.addColorStop(0.65, `rgba(215, 240, 255, ${0.62 * act})`);
        streakGrad.addColorStop(1.0, "rgba(100, 160, 255, 0)");

        ctx.fillStyle = streakGrad;
        ctx.fillRect(emitterX - streakW, emitterY - streakH / 2, streakW * 2, streakH);
      }

      // 04. Climax Radial God-Rays (1.38s - 2.50s)
      if (elapsed > 1.38 && elapsed < 2.5) {
        ctx.filter = "blur(14px)";
        const fanPeak = Math.sin(((elapsed - 1.38) / 1.12) * Math.PI);
        const fanAlpha = fanPeak * 0.42;

        const centerY = height / 2;
        const rayCount = 14;
        for (let r = 0; r < rayCount; r++) {
          const angle = -Math.PI / 2 + ((r - (rayCount - 1) / 2) / rayCount) * 1.35;
          const rayLength = height * 0.8;
          const rayWidth = 16 + (r % 3) * 8;

          ctx.strokeStyle = `rgba(195, 225, 255, ${fanAlpha * 0.22})`;
          ctx.lineWidth = rayWidth;
          ctx.beginPath();
          ctx.moveTo(screenCenterX, centerY);
          ctx.lineTo(
            screenCenterX + Math.sin(angle) * rayLength,
            centerY - Math.cos(angle) * rayLength
          );
          ctx.stroke();
        }
      }

      // 05. Atmospheric Particulates
      ctx.filter = "blur(1px)";
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(225, 240, 255, ${p.alpha * 0.42})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.filter = "none";
      ctx.restore();

      // Trigger smooth dissolve at DURATION (3.6s)
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
      if (videoAudioRef.current) {
        videoAudioRef.current.pause();
      }
      if (audioFallbackRef.current) {
        audioFallbackRef.current.pause();
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

  if (isCompleted || isRovera) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Precision Audio Sources (Exact audio from Video Project.mp4 + MP3 fallback) */}
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

        {/* 3D Chrome STTHIRA Brand: Monogram Beside STTHIRA (Horizontal Side-by-Side Lockup with Per-Letter Searchlights) */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3.5 sm:gap-6 md:gap-8 lg:gap-10">
            
            {/* Item 0: STTHIRA 3D Chrome Monogram Logo on the LEFT side */}
            <div
              ref={(el) => {
                itemRefs.current[0] = el;
              }}
              className="relative shrink-0 will-change-transform will-change-[filter] transition-all duration-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 348 420"
                className="w-12 h-16 sm:w-16 sm:h-22 md:w-22 md:h-28 lg:w-28 lg:h-36 xl:w-32 xl:h-40 drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
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

            {/* Items 1 to 7: STTHIRA Individual 3D Chiseled Titanium Chrome Letters */}
            <div className="relative flex items-center tracking-[0.16em] sm:tracking-[0.24em] font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase select-none">
              {LETTERS.map((char, idx) => {
                const itemIndex = idx + 1; // 1 to 7
                return (
                  <span
                    key={idx}
                    ref={(el) => {
                      itemRefs.current[itemIndex] = el;
                    }}
                    className="relative inline-block will-change-transform will-change-[filter] transition-all duration-150 drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)]"
                    style={{
                      backgroundImage: "linear-gradient(180deg, #ffffff 0%, #d1d5db 25%, #64748b 55%, #1e293b 70%, #94a3b8 85%, #f8fafc 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
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
