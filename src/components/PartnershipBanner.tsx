"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import StthiraEmblem from "./StthiraEmblem";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnershipBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Co-Branding Display: STTHIRA & ROVERA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-20">
          {/* 1. STTHIRA with official emblem */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-3 sm:gap-4 transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="STTHIRA — Master Developer"
          >
            <StthiraEmblem className="text-black w-8 h-9 sm:w-10 sm:h-12 lg:w-12 lg:h-14 transition-transform group-hover:scale-105 duration-300 shrink-0" />
            <div className="flex flex-col">
              <span className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[0.14em] text-black uppercase select-none">
                {t("partnership.stthiraBrand", "STTHIRA")}
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neutral-500 font-sans">
                Master Plotted Developer
              </span>
            </div>
          </Link>

          {/* Divider */}
          <div className="w-16 h-px bg-neutral-300 md:hidden shrink-0" />
          <div className="hidden md:block w-px md:h-14 lg:h-20 bg-neutral-300 shrink-0" />

          {/* 2. ROVERA with official logo design */}
          <Link
            href="/developments/rovera"
            className="group flex flex-col items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-none shrink-0"
            title="ROVERA — Luxury Plotted Living by STTHIRA"
          >
            <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 aspect-[3.4/1] select-none shrink-0">
              <Image
                src="/images/rovera-logo-dark.png"
                alt="ROVERA — Official Logo"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 380px, 440px"
                className="object-contain object-center"
              />
            </div>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neutral-500 font-sans -mt-2">
              Featured Flagship • 3 Acres Enclave
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
