"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import StthiraEmblem from "./StthiraEmblem";
import HalftoneWordmarkFooter from "./ui/halftone-wordmark-footer";

export default function Footer() {
  const currentYear = 2026;
  const { t } = useLanguage();
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");
  const wordmark = isRovera ? "ROVERA" : "STTHIRA";

  // Comprehensive Sitemap Categories (GitHub Clean Style: Light Background, Bold Black Headings)
  const columns = [
    {
      title: t("footer.col1", "DEVELOPMENTS"),
      links: [
        { label: t("footer.allDevs", "All Developments"), href: "/developments" },
        { label: "ROVERA (North Bengaluru)", href: "/developments/rovera" },
        { label: "STTHIRA TERRA (Nandi)", href: "/developments/terra" },
        { label: "AKSHARA (North Bengaluru)", href: "https://akshara-three.vercel.app/" },
        { label: t("footer.masterPlanMatrix", "Master Plan Matrix"), href: "/developments#matrix" },
        { label: t("footer.plotConfigs", "Plot Configurations"), href: "/developments#configurations" },
      ],
    },
    {
      title: t("footer.col2", "PHILOSOPHY"),
      links: [
        { label: t("footer.eightPillars", "Eight Core Pillars"), href: "/philosophy" },
        { label: t("footer.p1", "01 Vision & Scale"), href: "/philosophy#vision" },
        { label: t("footer.p2", "02 Precision Engineering"), href: "/philosophy#precision" },
        { label: t("footer.p4", "04 Architectural Restraint"), href: "/philosophy#architecture" },
        { label: t("footer.p5", "05 Native Ecology"), href: "/philosophy#nature" },
        { label: t("footer.p6", "06 Fiduciary Trust"), href: "/philosophy#trust" },
      ],
    },
    {
      title: t("footer.col3", "COMPANY"),
      links: [
        { label: t("footer.aboutStthira", "About STTHIRA"), href: "/about" },
        { label: t("footer.leadership", "Leadership & Governance"), href: "/leadership" },
        { label: t("footer.alliance", "STTHIRA | AKSHARA Alliance"), href: "/about#alliance" },
        { label: t("footer.gallery", "Architectural Gallery"), href: "/gallery" },
        { label: t("footer.journal", "Journal & Insights"), href: "/journal" },
        { label: t("footer.faqs", "Frequently Asked Questions"), href: "/faq" },
      ],
    },
    {
      title: t("footer.col4", "LEGAL"),
      links: [
        { label: t("footer.privacy", "Privacy Policy (DPDP Act)"), href: "/legal/privacy-policy" },
        { label: t("footer.terms", "Terms of Service"), href: "/legal/terms" },
        { label: t("footer.disclaimer", "Website Disclaimer"), href: "/legal/disclaimer" },
        { label: t("footer.cookies", "Cookie Policy"), href: "/legal/cookies" },
        { label: t("footer.projectDisclaimer", "Project Disclaimer"), href: "/legal/project-disclaimer" },
        { label: t("footer.rera", "RERA Disclosures"), href: "/legal/rera" },
      ],
    },
    {
      title: t("footer.col5", "CONNECT"),
      links: [
        { label: t("footer.office", "Corporate Office"), href: "/contact#office" },
        { label: t("footer.concierge", "Direct Concierge"), href: "tel:+918045678900" },
        { label: t("footer.whatsapp", "WhatsApp Desk"), href: `https://wa.me/${COMPANY_INFO.whatsappNumber.replace("+", "")}` },
        { label: "LinkedIn", href: COMPANY_INFO.socials.linkedin },
        { label: "Instagram", href: COMPANY_INFO.socials.instagram },
        { label: "YouTube", href: COMPANY_INFO.socials.youtube },
      ],
    },
  ];

  return (
    <footer className="bg-[#f6f8fa] text-neutral-900 border-t border-neutral-200 font-sans">
      {/* Upper Footer: GitHub Clean Style on Light Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12">
        {/* Top Header Row with Co-Branding Indicator: STTHIRA | ROVERA | AKSHARA */}
        <div className="flex flex-col xl:flex-row items-center justify-between pb-8 sm:pb-10 mb-8 sm:mb-12 border-b border-neutral-200 gap-6">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6 w-full xl:w-auto">
            {/* STTHIRA with architectural emblem */}
            <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-80 shrink-0">
              <StthiraEmblem className="text-black w-7 h-8 transition-transform group-hover:scale-105 duration-300 shrink-0" />
              <span className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase text-black">
                {t("partnership.stthiraBrand", "STTHIRA")}
              </span>
            </Link>

            <span className="hidden sm:inline text-neutral-300 font-light text-2xl sm:text-3xl">|</span>

            {/* ROVERA with official logo — BIG and prominent to match STTHIRA and AKSHARA */}
            <Link href="/developments/rovera" className="group flex items-center transition-opacity hover:opacity-80 shrink-0">
              <div className="relative h-11 sm:h-13 md:h-15 lg:h-17 aspect-[3.4/1] shrink-0 select-none">
                <Image
                  src="/images/rovera-logo-dark.png"
                  alt="ROVERA — Official Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
                  className="object-contain object-center"
                />
              </div>
            </Link>

            <span className="hidden sm:inline text-neutral-300 font-light text-2xl sm:text-3xl">|</span>

            {/* AKSHARA linked to official website */}
            <a
              href="https://akshara-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-opacity hover:opacity-80 shrink-0"
              title="AKSHARA (opens in a new tab)"
            >
              <span className="font-editorial text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.16em] uppercase text-neutral-800 group-hover:text-black transition-colors">
                {t("partnership.aksharaBrand", "AKSHARA")}
              </span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>
          </div>

          <div className="flex items-center justify-center xl:justify-end w-full xl:w-auto gap-4 text-xs font-sans text-neutral-600 shrink-0">
            <span className="hidden xl:inline text-neutral-500 uppercase tracking-widest text-[10px]">
              {t("hero.badge", "Master Plotted Developments • India")}
            </span>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-neutral-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-black transition-colors shadow-xs rounded cursor-pointer"
            >
              {t("footer.contactAdvisory", "Contact Advisory")}
            </Link>
          </div>
        </div>

        {/* 5-Column Sitemap Grid (GitHub Clean Style: Pure Dark Black Headings, Clean Spacing) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 pb-12">
          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              {/* Highlighted in Dark Black without cheap colored borders or dots */}
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black font-sans select-none mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2 text-neutral-600 font-sans text-[13px] sm:text-sm">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("tel:");
                  const isSection = link.href.includes("#");
                  const takesToAnotherPage = !isSection;

                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-black transition-colors inline-flex items-center gap-1 group/item py-0.5"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 shrink-0" />
                        </a>
                      ) : takesToAnotherPage ? (
                        <Link
                          href={link.href}
                          className="hover:text-black transition-colors inline-flex items-center gap-1 group/item py-0.5"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 shrink-0" />
                        </Link>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:text-black transition-colors block py-0.5"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Hierarchy & Alliance Statement */}
        <div className="py-6 border-y border-neutral-200 text-xs text-neutral-600 font-sans leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="max-w-3xl">
            <strong className="text-black uppercase tracking-wider font-semibold">{t("footer.hierarchyTitle", "Hierarchy & Alliance")}:</strong>{" "}
            {t(
              "footer.hierarchyText",
              "STTHIRA Developments Private Limited is the parent master developer (Est. 2026, Board of Directors: Lokesh Mudhaliar). ROVERA is an exclusive plotted living development under STTHIRA. In strategic land collaboration with AKSHARA."
            )}
          </p>
          <div className="flex items-center gap-2 text-neutral-800 shrink-0">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="uppercase tracking-wider text-[11px] font-medium">{t("footer.reraCompliance", "RERA & DPDP Compliant")}</span>
          </div>
        </div>

        {/* Bottom Bar: Exact GitHub Footer layout (Copyright & Legal on Left, Social & Language on Right) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-500 font-sans">
          {/* Left: Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {currentYear} STTHIRA DEVELOPMENTS PRIVATE LIMITED.</span>
            <Link href="/legal/terms" className="hover:text-black hover:underline transition-colors">
              {t("footer.terms", "Terms")}
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-black hover:underline transition-colors">
              {t("footer.privacy", "Privacy")}
            </Link>
            <Link href="/legal/rera" className="hover:text-black hover:underline transition-colors">
              {t("footer.reraAudit", "RERA Audit")}
            </Link>
            <Link href="/legal/cookies" className="hover:text-black hover:underline transition-colors">
              {t("footer.cookies", "Manage Cookies")}
            </Link>
          </div>

          {/* Right: Social Media Icons & GitHub-Style Language Switcher */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-neutral-600">
              {/* LinkedIn */}
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STTHIRA LinkedIn"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STTHIRA Instagram"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STTHIRA YouTube"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="STTHIRA WhatsApp Desk"
                className="hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
              </a>
            </div>

            <div className="h-4 w-px bg-neutral-300" />

            {/* Language Selector Pill */}
            <LanguageSwitcher dropUp={true} theme="light" />
          </div>
        </div>
      </div>

      {/* Monumental Interactive Halftone Wordmark Section (Brand Name Big & Clean - Fits Full Section) */}
      <div className="w-full border-t border-neutral-200 bg-[#efebe3] overflow-hidden">
        <HalftoneWordmarkFooter
          wordmark={wordmark}
          preset="paper"
          height="560px"
          dotGap={5}
          radius={110}
          crop={0}
          interactive={true}
        />
      </div>
    </footer>
  );
}
