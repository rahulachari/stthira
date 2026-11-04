import Image from "next/image";

interface RoveraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "white" | "dark";
}

export default function Rovera3DLogo({
  className = "",
  size = "xl",
  variant = "white",
}: RoveraLogoProps) {
  // Proportioned dimensions matching the 1028:309 (~3.33:1) aspect ratio of the official emblem
  const sizeClasses = {
    sm: "w-56 h-[68px] sm:w-64 sm:h-[78px]",
    md: "w-72 h-[88px] sm:w-80 sm:h-[96px] md:w-[420px] md:h-[126px]",
    lg: "w-80 h-[96px] sm:w-[480px] sm:h-[144px] md:w-[600px] md:h-[180px]",
    xl: "w-[260px] h-[78px] xs:w-[300px] xs:h-[90px] sm:w-[500px] sm:h-[150px] md:w-[680px] md:h-[204px] lg:w-[820px] lg:h-[246px]",
  }[size];

  const logoSrc =
    variant === "white"
      ? "/images/rovera-logo-white.png"
      : "/images/rovera-logo-dark.png";

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <div className={`relative ${sizeClasses}`}>
        <Image
          src={logoSrc}
          alt="ROVERA — Official Cheetah Emblem"
          fill
          priority
          quality={100}
          className="object-contain pointer-events-none drop-shadow-md"
        />
      </div>
    </div>
  );
}
