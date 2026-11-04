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
    <section className={`bg-[#ecebe6] border-y border-neutral-300/80 py-12 sm:py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Co-Branding Display: STTHIRA | ROVERA | AKSHARA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-14">
          {/* 1. STTHIRA with official emblem */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 sm:gap-3 transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="STTHIRA — Master Developer"
          >
            <StthiraEmblem className="text-neutral-900 w-7 h-8 sm:w-8 sm:h-10 lg:w-11 lg:h-13 transition-transform group-hover:scale-105 duration-300 shrink-0" />
            <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[0.14em] text-neutral-900 uppercase select-none">
              STTHIRA
            </span>
          </Link>

          {/* Divider */}
          <div className="w-16 h-px bg-neutral-300 md:hidden shrink-0" />
          <div className="hidden md:block w-px md:h-14 lg:h-20 bg-neutral-400 shrink-0" />

          {/* 2. ROVERA with official logo design — BIG and matching STTHIRA & AKSHARA */}
          <Link
            href="/developments/rovera"
            className="group flex items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="ROVERA — Luxury Plotted Living by STTHIRA"
          >
            <div className="relative w-48 h-15 sm:w-56 sm:h-17 md:w-64 md:h-20 lg:w-80 lg:h-24 xl:w-96 xl:h-28 shrink-0 select-none">
              <Image
                src="/images/rovera-logo-dark.png"
                alt="ROVERA — Official Cheetah Emblem & Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Divider */}
          <div className="w-16 h-px bg-neutral-300 md:hidden shrink-0" />
          <div className="hidden md:block w-px md:h-14 lg:h-20 bg-neutral-400 shrink-0" />

          {/* 3. AKSHARA with external link */}
          <a
            href="https://akshara-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 sm:gap-2 transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="AKSHARA (opens in a new tab)"
          >
            <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.14em] text-neutral-900 uppercase select-none">
              AKSHARA
            </span>
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
