"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TOTAL_FRAMES = 68; // f_000.webp to f_067.webp

export default function RoveraIntroAnimation() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if the user already saw it in this session (can be skipped or replayed)
    const hasSeen = sessionStorage.getItem("rovera_intro_completed");
    if (hasSeen === "true") {
      setIsDismissed(true);
      return;
    }

    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Preload all 68 minimal leap frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const pad = String(i).padStart(3, "0");
      const img = new window.Image();
      img.src = `/videos/rovera-frames/f_${pad}.webp`;
      img.onload = () => {
        if (isCancelled) return;
        loadedCount++;
        setFramesLoaded(loadedCount);
        if (loadedCount === TOTAL_FRAMES) {
          startPlayback();
        }
      };
      loadedImages.push(img);
    }
    framesRef.current = loadedImages;

    // Fallback: If network is slow, start playback as soon as first 20 frames load
    const fallbackTimer = setTimeout(() => {
      if (!isCancelled && loadedCount >= 20) {
        startPlayback();
      }
    }, 1200);

    function startPlayback() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 1280;
      canvas.height = 720;

      let currentFrame = 0;
      let lastTimestamp = performance.now();
      const frameInterval = 1000 / 24; // 24 FPS smooth playback

      function renderLoop(now: number) {
        if (isCancelled) return;
        const delta = now - lastTimestamp;

        if (delta >= frameInterval) {
          lastTimestamp = now - (delta % frameInterval);

          const frameImg = framesRef.current[currentFrame];
          if (frameImg && frameImg.complete && ctx) {
            ctx.clearRect(0, 0, 1280, 720);
            ctx.drawImage(frameImg, 0, 0, 1280, 720);
          }

          currentFrame++;
          if (currentFrame >= TOTAL_FRAMES) {
            // Animation reached the final emblem artwork: hold for 1.3s then smoothly fade out
            setTimeout(() => {
              if (isCancelled) return;
              setIsFading(true);
              sessionStorage.setItem("rovera_intro_completed", "true");
              setTimeout(() => {
                if (isCancelled) return;
                setIsDismissed(true);
              }, 900);
            }, 1300);
            return;
          }
        }

        animFrameIdRef.current = requestAnimationFrame(renderLoop);
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    }

    return () => {
      isCancelled = true;
      clearTimeout(fallbackTimer);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const handleSkip = () => {
    setIsFading(true);
    sessionStorage.setItem("rovera_intro_completed", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 400);
  };

  if (isDismissed) return null;

  return (
    <div
      aria-label="ROVERA Opening Animation"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#edece8] transition-opacity duration-1000 select-none overflow-hidden ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle telemetry bar on top */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-sans">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
          <span>ROVERA SANCTUARY • NORTH BENGALURU</span>
        </span>
        <button
          type="button"
          onClick={handleSkip}
          className="text-neutral-500 hover:text-black transition-colors uppercase tracking-[0.2em] font-medium py-1 px-3 border border-neutral-300 hover:border-black rounded-full text-[10px] cursor-pointer"
        >
          Skip Animation →
        </button>
      </div>

      {/* Center Canvas playing the smooth leap animation */}
      <div className="relative w-full max-w-5xl px-4 aspect-[16/9] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
          style={{ filter: "contrast(1.02)" }}
        />

        {/* Loading Indicator for slow connections before first frames load */}
        {framesLoaded < 20 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#edece8] transition-opacity duration-300">
            <div className="relative w-72 sm:w-96 aspect-[1.1/1] opacity-60">
              <Image
                src="/images/rovera-art.jpg"
                alt="ROVERA Loading Emblem"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mt-4 animate-pulse">
              INITIALIZING ROVERA VISUAL SANCTUARY...
            </span>
          </div>
        )}
      </div>

      {/* Bottom Subtitle */}
      <div className="absolute bottom-8 text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-600 font-sans">
        <span>A MASTER-PLANNED RESIDENCE BY STTHIRA</span>
      </div>
    </div>
  );
}
