"use client";

interface StthiraEmblemProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function StthiraEmblem({
  className = "",
  width = 24,
  height = 29,
}: StthiraEmblemProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 348 420"
      width={width}
      height={height}
      fill="currentColor"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Architectural cantilever tier forming the STTHIRA monolithic monogram */}
        <path
          id="stthira-tier-path"
          d="M 0,0 L 100,0 L 100,140 L 85,140 L 85,106 C 85,68 38,32 0,32 Z"
        />
      </defs>
      {/* Column 1 (Left): Top and Middle tiers */}
      <use href="#stthira-tier-path" x="0" y="0" />
      <use href="#stthira-tier-path" x="0" y="140" />

      {/* Column 2 (Center): Top, Middle, and Bottom tiers */}
      <use href="#stthira-tier-path" x="124" y="0" />
      <use href="#stthira-tier-path" x="124" y="140" />
      <use href="#stthira-tier-path" x="124" y="280" />

      {/* Column 3 (Right): Middle and Bottom tiers */}
      <use href="#stthira-tier-path" x="248" y="140" />
      <use href="#stthira-tier-path" x="248" y="280" />
    </svg>
  );
}

