"use client";

import { useEffect, useState } from "react";

interface KarnatakaMapProps {
  locationName?: string;
  coords?: string;
  subLabel?: string;
  className?: string;
}

export default function KarnatakaMapOutline({
  locationName = "DEVANAHALLI, BENGALURU, KARNATAKA",
  coords = "13°14'56.4\" N • 77°42'39.2\" E",
  subLabel = "STRR CORRIDOR • NORTH BENGALURU",
  className = "",
}: KarnatakaMapProps) {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDrawn(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Precise architectural outline path of Karnataka state
  // Devanahalli / North Bangalore coordinates map to: cx = 205, cy = 295
  const karnatakaPath =
    "M 215,22 C 205,30 185,42 165,48 C 145,54 125,60 108,74 C 92,86 80,102 72,122 C 64,142 54,168 48,195 C 44,215 46,238 48,260 C 50,282 54,305 66,326 C 76,342 90,352 108,358 C 128,364 150,366 172,362 C 194,358 214,346 230,332 C 246,318 258,300 264,280 C 268,264 256,252 242,242 C 228,232 222,220 224,204 C 228,184 238,166 246,146 C 254,126 248,104 246,84 C 244,64 258,42 242,28 C 234,20 224,16 215,22 Z";

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* SVG Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[320/380] flex items-center justify-center">
        <svg
          viewBox="0 0 320 380"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid background coordinate crosses */}
          <g className="opacity-15 stroke-zinc-400" strokeWidth="0.5">
            <line x1="40" y1="190" x2="280" y2="190" strokeDasharray="3 3" />
            <line x1="160" y1="30" x2="160" y2="360" strokeDasharray="3 3" />
          </g>

          {/* Karnataka State Boundary Outline (Animated Hairline) */}
          <path
            d={karnatakaPath}
            className={`transition-all duration-1000 ease-out fill-transparent stroke-zinc-400 dark:stroke-zinc-500 hover:stroke-zinc-800 ${
              drawn ? "stroke-dashoffset-0 opacity-100" : "opacity-0"
            }`}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: drawn ? 0 : 1200,
              transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
            }}
          />

          {/* Soft architectural fill tint */}
          <path
            d={karnatakaPath}
            className="fill-zinc-900/[0.03] dark:fill-white/[0.02]"
          />

          {/* Coordinate Pointer Line to Devanahalli (cx: 205, cy: 295) */}
          <g className="transform origin-[205px_295px]">
            {/* Outer Pulsing Radar Ring */}
            <circle
              cx="205"
              cy="295"
              r="14"
              className="stroke-[#1E3A8A] opacity-40 animate-ping"
              strokeWidth="1"
              fill="none"
            />
            {/* Middle Glow Ring */}
            <circle
              cx="205"
              cy="295"
              r="7"
              className="fill-blue-500/20 stroke-[#1E3A8A]"
              strokeWidth="1.5"
            />
            {/* Core Solid Center */}
            <circle cx="205" cy="295" r="3" className="fill-[#1E3A8A]" />
          </g>
        </svg>

        {/* Location Typography Overlay matching Screenshot 6 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60 shadow-xs">
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase block">
              {locationName}
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-600 dark:text-zinc-400 tracking-widest block mt-0.5">
              {coords}
            </span>
            <span className="font-mono text-[8px] text-blue-600 dark:text-blue-400 font-semibold tracking-widest block mt-0.5">
              {subLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

