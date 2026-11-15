"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import EnquiryModal from "./EnquiryModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import StthiraEmblem from "./StthiraEmblem";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [developmentsOpen, setDevelopmentsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const isRovera = pathname?.includes("/developments/rovera");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDevelopmentsOpen(false);
  }, [pathname]);

  // Suppress global navbar on ROVERA projects/immersive view — uses dedicated Yodezeen back button & controls
  if (pathname === "/developments/rovera/projects" || pathname?.startsWith("/developments/rovera/projects/")) {
    return null;
  }

  // Curated, high-priority navigation links
  // On ROVERA: Project-specific anchor links + Developments dropdown + Contact
  // On Global: Essential corporate links (About, Developments, Gallery, Contact)
  const roveraNavLinks = [
    { name: "Projects", href: "/developments/rovera/projects" },
    { name: "Master Plan", href: "/developments/rovera#master-plan" },
    { name: "Location", href: "/developments/rovera#location" },
    {
      name: t("nav.developments", "Developments"),
      href: "/developments",
      hasDropdown: true,
      subItems: [
        { name: "All Developments", href: "/developments", badge: "Portfolio" },
        { name: "ROVERA", href: "/developments/rovera", badge: "Featured • Phase 1" },
        { name: "STTHIRA TERRA", href: "/developments/terra", badge: "Eco-Sanctuary" },
      ],
    },
    { name: t("nav.contact", "Contact"), href: "/developments/rovera#reserve" },
  ];

  const globalNavLinks = [
    { name: t("nav.about", "About"), href: "/about" },
    {
      name: t("nav.developments", "Developments"),
      href: "/developments",
      hasDropdown: true,
      subItems: [
        { name: "All Developments", href: "/developments", badge: "Portfolio" },
        { name: "ROVERA", href: "/developments/rovera", badge: "Featured • Phase 1" },
        { name: "STTHIRA TERRA", href: "/developments/terra", badge: "Eco-Sanctuary" },
      ],
    },
    { name: t("nav.gallery", "Gallery"), href: "/gallery" },
    { name: t("nav.contact", "Contact"), href: "/contact" },
  ];

  const navLinks = isRovera ? roveraNavLinks : globalNavLinks;

  const roveraDrawerLinks = [
    { name: "Overview", href: "/developments/rovera#" },
    { name: "Project Snapshot", href: "/developments/rovera#snapshot" },
    { name: "XL Villa Plots", href: "/developments/rovera#pricing" },
    { name: "The ROVERA Difference", href: "/developments/rovera#why-rovera" },
    { name: "Why ROVERA", href: "/developments/rovera#why-rovera" },
    { name: "Walkthrough", href: "/developments/rovera#walkthrough" },
    { name: "Master Plan", href: "/developments/rovera#master-plan" },
    { name: "Gallery", href: "/developments/rovera#gallery" },
    { name: "Amenities", href: "/developments/rovera#amenities" },
    { name: "Location & Connectivity", href: "/developments/rovera#location" },
    { name: "About STTHIRA", href: "/about" },
  ];

  const globalDrawerLinks = [
    { name: "Home", href: "/" },
    { name: "About STTHIRA", href: "/about" },
    { name: "ROVERA (Devanahalli)", href: "/developments/rovera" },
    { name: "STTHIRA TERRA", href: "/developments/terra" },
    { name: "All Developments", href: "/developments" },
    { name: "Leadership", href: "/leadership" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 py-3 sm:py-4 ${
          isRovera
            ? scrolled
              ? "bg-black/35 backdrop-blur-md text-white border-b border-white/10"
              : "bg-transparent text-white"
            : scrolled
            ? "bg-black/80 backdrop-blur-md text-white border-b border-neutral-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* LEFT SIDE BRANDING: On ROVERA page, show ROVERA branding on the left! Otherwise STTHIRA */}
          {isRovera ? (
            <Link
              href="/developments/rovera"
              className="group flex items-center gap-3 shrink-0 mr-2 sm:mr-6 xl:mr-10 transition-opacity hover:opacity-90"
            >
              <div className="relative h-7 sm:h-9 w-28 sm:w-36 select-none shrink-0">
                <Image
                  src="/images/rovera-logo-color.png"
                  alt="ROVERA"
                  fill
                  priority
                  sizes="144px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
          ) : (
            <Link href="/" className="group flex items-center gap-2 sm:gap-3 shrink-0 mr-2 sm:mr-6 xl:mr-10">
              <StthiraEmblem className="text-[#C5A880] w-5 h-6 sm:w-6 sm:h-7 transition-transform group-hover:scale-105 duration-300 shrink-0" />
              <div className="flex flex-col">
                <span className="font-editorial text-xl sm:text-3xl tracking-[0.2em] sm:tracking-[0.25em] font-medium uppercase text-white transition-opacity duration-300 group-hover:opacity-80">
                  STTHIRA
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.35em] text-neutral-400 uppercase -mt-0.5 sm:-mt-1 font-sans">
                  Est. <span className="font-doto">2026</span> • India
                </span>
              </div>
            </Link>
          )}

          {/* Desktop Navigation: On ROVERA, inline links are removed per user request, accessible via Menu icon */}
          {!isRovera && (
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 2xl:space-x-8 text-xs uppercase tracking-[0.16em] font-sans">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith("/developments"));
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                      onMouseEnter={() => setDevelopmentsOpen(true)}
                      onMouseLeave={() => setDevelopmentsOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 transition-colors py-2 ${
                          isActive
                            ? "text-white font-medium"
                            : "text-neutral-300 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                        <div className="p-3 shadow-2xl backdrop-blur-xl rounded-xl bg-black/95 border border-neutral-800 text-white">
                          <div className="text-[10px] uppercase tracking-widest px-3 py-1 mb-2 font-mono text-neutral-500 border-b border-neutral-800/80">
                            Development Portfolio
                          </div>
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-3 py-2.5 transition-colors group/item rounded-lg hover:bg-neutral-900 text-white"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-editorial text-sm tracking-widest font-medium">
                                  {sub.name}
                                </span>
                                <span className="text-[9px] tracking-wider text-neutral-400">
                                  {sub.badge}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-white font-medium"
                        : "text-neutral-300 hover:text-white hover-editorial-line"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Global Enquiry (Only shown on non-ROVERA pages; on ROVERA navbar is ultra-clean with only Menu icon) */}
            {!isRovera && (
              <button
                type="button"
                onClick={() => setEnquiryModalOpen(true)}
                className="px-4 sm:px-5 py-2 rounded-full bg-[#0F2744] hover:bg-[#1E3A8A] text-white text-xs uppercase tracking-wider font-semibold font-mono transition-all shadow-sm cursor-pointer shrink-0"
              >
                Enquiry
              </button>
            )}

            {/* ON ROVERA: STTHIRA Branding placed on the RIGHT side */}
            {isRovera && (
              <Link
                href="/"
                className="hidden md:flex items-center gap-2 shrink-0 border-l border-white/20 pl-4 ml-1 transition-opacity hover:opacity-85 text-white"
                title="STTHIRA Developments (Parent Master Developer)"
              >
                <StthiraEmblem className="text-[#C5A880] w-4 h-5 transition-transform group-hover:scale-105 shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-editorial text-xs tracking-[0.18em] font-medium uppercase text-white">
                    STTHIRA
                  </span>
                  <span className="text-[7px] tracking-[0.25em] uppercase -mt-0.5 text-neutral-300 font-sans">
                    DEVELOPMENTS
                  </span>
                </div>
              </Link>
            )}

            {/* Menu Toggle: On ROVERA, visible on ALL screen sizes with buttery-smooth open/close animation */}
            <div className={`items-center shrink-0 ${isRovera ? "flex" : "flex lg:hidden"}`}>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="py-2 px-3 sm:px-3.5 transition-all duration-300 cursor-pointer shrink-0 flex items-center gap-2.5 rounded-full border border-white/25 hover:border-white/40 bg-black/40 hover:bg-white/15 text-white backdrop-blur-md"
              >
                {/* Precision animated morphing hamburger-to-close icon */}
                <div className="relative w-5 h-3.5 flex flex-col justify-between items-center overflow-visible">
                  <span
                    className={`h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-center ${
                      mobileMenuOpen
                        ? "translate-y-[6px] rotate-45"
                        : "translate-y-0 rotate-0"
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-5 rounded-full bg-white transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? "opacity-0 scale-x-0"
                        : "opacity-100 scale-x-100"
                    }`}
                  />
                  <span
                    className={`h-[1.5px] w-5 rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-center ${
                      mobileMenuOpen
                        ? "-translate-y-[6px] -rotate-45"
                        : "translate-y-0 rotate-0"
                    }`}
                  />
                </div>
                {isRovera && (
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold min-w-[34px] text-left transition-opacity duration-200 text-white">
                    {mobileMenuOpen ? "Close" : "Menu"}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 01. Translucent Blurred Backdrop matching Image 1 */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 02. Sleek Right-Hand Side Drawer matching Image 1 (https://lagos.co.in/) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] max-w-[90vw] bg-[#111113] text-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-neutral-800/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Top Header of Drawer: STTHIRA DEVELOPMENTS Brand + Circular 'X' Close Button */}
        <div className="p-6 sm:p-7 flex items-center justify-between border-b border-neutral-800/80 shrink-0">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <StthiraEmblem className="text-[#C5A880] w-6 h-7 shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-editorial text-sm tracking-[0.2em] font-medium uppercase text-white">
                STTHIRA
              </span>
              <span className="text-[8px] tracking-[0.25em] text-neutral-400 uppercase -mt-0.5 font-sans">
                DEVELOPMENTS
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-neutral-700 hover:border-neutral-500 flex items-center justify-center text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Links list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {(isRovera ? roveraDrawerLinks : globalDrawerLinks).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-4 px-6 sm:px-8 border-b border-neutral-800/60 text-base sm:text-lg font-medium text-neutral-200 hover:text-[#d09800] group transition-colors"
            >
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                {item.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#d09800] transition-colors" />
            </Link>
          ))}
        </nav>

        {/* Footer Area with CTA */}
        <div className="p-6 sm:p-8 border-t border-neutral-800/80 space-y-4 bg-[#0d0d0f] shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setEnquiryModalOpen(true);
            }}
            className="w-full py-3.5 bg-[#d09800] text-black text-xs uppercase tracking-widest font-semibold hover:bg-[#b58400] transition-colors text-center rounded-full shadow-lg cursor-pointer"
          >
            {isRovera ? "Reserve Your Villa Plot" : "Schedule Private Walkthrough"}
          </button>

          <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
            <span>© 2026 STTHIRA DEVELOPMENTS</span>
            <LanguageSwitcher dropUp={true} theme="dark" />
          </div>
        </div>
      </aside>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        projectName={isRovera ? "ROVERA (Devanahalli–Doddaballapura Road)" : "STTHIRA Luxury Real Estate"}
      />
    </>
  );
}
