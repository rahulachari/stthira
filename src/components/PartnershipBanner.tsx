"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StthiraEmblem from "./StthiraEmblem";

interface PartnershipBannerProps {
  className?: string;
}

export default function PartnershipBanner({ className = "" }: PartnershipBannerProps) {
  return (
    <section className={`bg-[#ecebe6] border-y border-neutral-300/80 py-14 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Co-Branding Display (Assetz | KVN reference style): STTHIRA | ROVERA | AKSHARA */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-8 md:gap-12 lg:gap-16">
          {/* 1. STTHIRA with official emblem */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 sm:gap-3.5 transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="STTHIRA — Master Developer"
          >
            <StthiraEmblem className="text-neutral-900 w-6 h-7 sm:w-9 sm:h-11 md:w-11 md:h-13 lg:w-12 lg:h-14 transition-transform group-hover:scale-105 duration-300" />
            <span className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.14em] text-neutral-900 uppercase select-none">
              STTHIRA
            </span>
          </Link>

          {/* Vertical Divider */}
          <div className="w-px h-12 sm:h-16 md:h-20 lg:h-24 bg-neutral-400 shrink-0" />

          {/* 2. ROVERA with official logo design — BIG and matching STTHIRA & AKSHARA */}
          <Link
            href="/developments/rovera"
            className="group flex items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="ROVERA — Luxury Plotted Living by STTHIRA"
          >
            <div className="relative w-44 h-14 sm:w-64 sm:h-20 md:w-80 md:h-24 lg:w-96 lg:h-28 shrink-0 select-none">
              <Image
                src="/images/rovera-logo-dark.png"
                alt="ROVERA — Official Cheetah Emblem & Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="w-px h-12 sm:h-16 md:h-20 lg:h-24 bg-neutral-400 shrink-0" />

          {/* 3. AKSHARA with external link */}
          <a
            href="https://akshara-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 sm:gap-2 transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="AKSHARA (opens in a new tab)"
          >
            <span className="font-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.14em] text-neutral-900 uppercase select-none">
              AKSHARA
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
