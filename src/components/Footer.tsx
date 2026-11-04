"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import HalftoneWordmarkFooter from "./ui/halftone-wordmark-footer";
import StthiraEmblem from "./StthiraEmblem";

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isRoveraPage = pathname === "/developments/rovera";
  const wordmarkText = isRoveraPage ? "ROVERA" : "STTHIRA";
  const wordmarkLabel = isRoveraPage ? "ROVERA • LUXURY PLOTTED LIVING" : "STTHIRA DEVELOPMENTS";
  const wordmarkMeta = isRoveraPage
    ? "BY STTHIRA • NORTH BENGALURU • PHASE 1"
    : "EST. 2026 • BENGALURU, INDIA • LUXURY PLOTTED LIVING";

  const currentYear = 2026;

  const columns = [
    {
      title: "Developments",
      links: [
        { label: "All Developments", href: "/developments" },
        { label: "ROVERA (North Bengaluru)", href: "/developments/rovera" },
        { label: "STTHIRA TERRA (Nandi)", href: "/developments/terra" },
        { label: "AKSHARA (North Bengaluru)", href: "https://akshara-three.vercel.app/" },
        { label: "Master Plan Matrix", href: "/developments/rovera#masterplan" },
        { label: "Plot Configurations", href: "/developments/rovera#plots" },
      ],
    },
    {
      title: "Philosophy",
      links: [
        { label: "Eight Core Pillars", href: "/philosophy" },
        { label: "01 Vision & Scale", href: "/philosophy#vision" },
        { label: "02 Precision Engineering", href: "/philosophy#precision" },
        { label: "04 Architectural Restraint", href: "/philosophy#architecture" },
        { label: "05 Native Ecology", href: "/philosophy#nature" },
        { label: "06 Fiduciary Trust", href: "/philosophy#trust" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About STTHIRA", href: "/about" },
        { label: "Leadership & Governance", href: "/leadership" },
        { label: "STTHIRA | AKSHARA Alliance", href: "/about#alliance" },
        { label: "Architectural Gallery", href: "/gallery" },
        { label: "Journal & Insights", href: "/journal" },
        { label: "Frequently Asked Questions", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy (DPDP Act)", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Website Disclaimer", href: "/legal/disclaimer" },
        { label: "Cookie Policy", href: "/legal/cookies" },
        { label: "Project Disclaimer", href: "/legal/project-disclaimer" },
        { label: "RERA Disclosures", href: "/legal/rera" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Corporate Office", href: "/contact" },
        { label: "Direct Concierge", href: "tel:+919845077123" },
        { label: "WhatsApp Desk", href: `https://wa.me/${COMPANY_INFO.whatsappNumber.replace("+", "")}` },
        { label: "LinkedIn", href: COMPANY_INFO.socials.linkedin },
        { label: "Instagram", href: COMPANY_INFO.socials.instagram },
        { label: "YouTube", href: COMPANY_INFO.socials.youtube },
      ],
    },
  ];

  return (
    <footer className="bg-[#f6f8fa] text-neutral-900 border-t border-neutral-200 font-sans">
      {/* Upper Footer: GitHub Clean Style on White / Light Canvas */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        {/* Top Header Row with Co-Branding Indicator: STTHIRA | ROVERA | AKSHARA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-10 mb-12 border-b border-neutral-200 gap-6">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* STTHIRA with architectural emblem */}
            <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <StthiraEmblem className="text-neutral-900 w-6 h-7 transition-transform group-hover:scale-105 duration-300" />
              <span className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase text-neutral-900">
                STTHIRA
              </span>
            </Link>

            <span className="text-neutral-300 font-light text-2xl sm:text-3xl">|</span>

            {/* ROVERA with official cheetah logo — BIG to match STTHIRA and AKSHARA */}
            <Link href="/developments/rovera" className="group flex items-center transition-opacity hover:opacity-80 shrink-0">
              <div className="relative w-40 h-12 sm:w-56 sm:h-16 md:w-64 md:h-20 lg:w-72 lg:h-20 shrink-0 select-none">
                <Image
                  src="/images/rovera-logo-dark.png"
                  alt="ROVERA — Official Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            <span className="text-neutral-300 font-light text-2xl sm:text-3xl">|</span>

            {/* AKSHARA linked to official website */}
            <a
              href="https://akshara-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 transition-opacity hover:opacity-80"
              title="AKSHARA (opens in a new tab)"
            >
              <span className="font-editorial text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.16em] uppercase text-neutral-700 group-hover:text-black transition-colors">
                AKSHARA
              </span>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans text-neutral-600 shrink-0">
            <span className="hidden lg:inline text-neutral-500 uppercase tracking-widest text-[10px]">
              Master Plotted Developments • India
            </span>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-neutral-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-black transition-colors shadow-xs rounded"
            >
              Contact Advisory
            </Link>
          </div>
        </div>

        {/* 5-Column Sitemap Grid (GitHub-style typography: Clean, Legible, Responsive for Mobile, iPad, Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 pb-12">
          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-sans">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-neutral-700 font-sans text-[13px] sm:text-sm">
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
                          className="hover:text-black hover:underline transition-colors inline-flex items-center gap-1 group/item py-0.5"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 shrink-0" />
                        </a>
                      ) : takesToAnotherPage ? (
                        <Link
                          href={link.href}
                          className="hover:text-black hover:underline transition-colors inline-flex items-center gap-1 group/item py-0.5"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 shrink-0" />
                        </Link>
                      ) : (
                        /* For section anchors, clean link with hover underline */
                        <Link
                          href={link.href}
                          className="hover:text-black hover:underline transition-colors block py-0.5"
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
            <strong className="text-neutral-800 uppercase tracking-wider font-medium">Hierarchy &amp; Alliance:</strong>{" "}
            STTHIRA Developments Private Limited is the parent master developer (Est. 2026, Board of Directors: Lokesh Mudhaliar). ROVERA is an exclusive plotted living development under STTHIRA. In strategic land collaboration with AKSHARA.
          </p>
          <div className="flex items-center gap-2 text-neutral-700 shrink-0">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="uppercase tracking-wider text-[11px] font-medium">RERA &amp; DPDP Compliant</span>
          </div>
        </div>

        {/* Bottom Bar: Exact GitHub Footer layout (Copyright & Legal on Left, Social & Language on Right) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-500 font-sans">
          {/* Left: Copyright and Legal Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {currentYear} STTHIRA DEVELOPMENTS PRIVATE LIMITED.</span>
            <Link href="/legal/terms" className="hover:text-neutral-900 hover:underline transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy-policy" className="hover:text-neutral-900 hover:underline transition-colors">
              Privacy
            </Link>
            <Link href="/legal/rera" className="hover:text-neutral-900 hover:underline transition-colors">
              RERA Audit
            </Link>
            <Link href="/legal/cookies" className="hover:text-neutral-900 hover:underline transition-colors">
              Manage Cookies
            </Link>
          </div>

          {/* Right: Social Media Icons & GitHub-Style Language Switcher */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-neutral-500">
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
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

      {/* Monumental Interactive Halftone Wordmark Canvas in Paper / Light Palette */}
      <div className="w-full border-t border-neutral-200 bg-[#f6f8fa]">
        <HalftoneWordmarkFooter
          wordmark={wordmarkText}
          label={wordmarkLabel}
          meta={wordmarkMeta}
          preset="paper"
          height="360px"
          dotGap={6}
          radius={110}
          crop={0}
          grain={0.15}
          columns={[]}
          palette={{
            background: "#f6f8fa",
            ink: "#1f2328",
            warm: "#e9762b",
          }}
        />
      </div>
    </footer>
  );
}
