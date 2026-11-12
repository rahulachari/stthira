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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isRovera
            ? "bg-white/85 backdrop-blur-md border-b border-zinc-200/80 py-3.5 sm:py-4 text-zinc-950 shadow-2xs"
            : scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-neutral-800 py-3.5 sm:py-4 text-white"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-6 text-white"
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
                  src="/images/rovera-logo-dark.png"
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
              <StthiraEmblem className="text-white w-5 h-6 sm:w-6 sm:h-7 transition-transform group-hover:scale-105 duration-300 shrink-0" />
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

          {/* Desktop Navigation */}
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
                        isRovera
                          ? isActive
                            ? "text-black font-semibold border-b border-black pb-0.5"
                            : "text-zinc-600 hover:text-black font-medium"
                          : isActive
                          ? "text-white font-medium"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <div
                        className={`p-3 shadow-2xl backdrop-blur-xl rounded-xl ${
                          isRovera
                            ? "bg-white/95 border border-zinc-200 text-zinc-900"
                            : "bg-black/95 border border-neutral-800 text-white"
                        }`}
                      >
                        <div
                          className={`text-[10px] uppercase tracking-widest px-3 py-1 mb-2 font-mono ${
                            isRovera
                              ? "text-zinc-400 border-b border-zinc-100"
                              : "text-neutral-500 border-b border-neutral-800/80"
                          }`}
                        >
                          Development Portfolio
                        </div>
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-3 py-2.5 transition-colors group/item rounded-lg ${
                              isRovera ? "hover:bg-zinc-100 text-zinc-900" : "hover:bg-neutral-900 text-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-editorial text-sm tracking-widest font-medium">
                                {sub.name}
                              </span>
                              <span
                                className={`text-[9px] tracking-wider ${
                                  isRovera ? "text-zinc-500" : "text-neutral-400"
                                }`}
                              >
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
                    isRovera
                      ? isActive
                        ? "text-black font-semibold border-b border-black pb-0.5"
                        : "text-zinc-600 hover:text-black font-medium"
                      : isActive
                      ? "text-white font-medium"
                      : "text-neutral-300 hover:text-white hover-editorial-line"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden sm:flex items-center gap-4">
            {isRovera && (
              <a
                href="https://wa.me/917013485016"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-600 hover:text-black font-medium transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#0F2744] hover:bg-[#1E3A8A] text-white text-xs uppercase tracking-wider font-semibold font-mono transition-all shadow-sm cursor-pointer"
            >
              Enquiry
            </button>

            {/* ON ROVERA: STTHIRA Branding placed on the RIGHT side */}
            {isRovera && (
              <Link
                href="/"
                className="group flex items-center gap-2 shrink-0 border-l border-zinc-200 pl-4 ml-1 transition-opacity hover:opacity-85"
                title="STTHIRA Developments (Parent Master Developer)"
              >
                <StthiraEmblem className="text-zinc-950 w-4 h-5 transition-transform group-hover:scale-105 shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-editorial text-xs tracking-[0.18em] font-medium uppercase text-zinc-950">
                    STTHIRA
                  </span>
                  <span className="text-[7px] tracking-[0.25em] text-zinc-500 uppercase -mt-0.5">
                    DEVELOPMENTS
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-1.5 sm:p-2 transition-colors cursor-pointer shrink-0 ${
                isRovera ? "text-zinc-950 hover:text-black" : "text-white hover:text-neutral-300"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden fixed inset-0 top-[58px] sm:top-[73px] z-40 px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto border-t h-[calc(100vh-58px)] sm:h-[calc(100vh-73px)] w-full max-w-full backdrop-blur-xl ${
              isRovera
                ? "bg-[#FAFAFA]/98 text-zinc-950 border-zinc-200"
                : "bg-black/98 text-white border-neutral-900"
            }`}
          >
            <div className="space-y-6">
              <div
                className={`text-[10px] tracking-[0.3em] uppercase mb-2 ${
                  isRovera ? "text-zinc-400" : "text-neutral-500"
                }`}
              >
                Navigation
              </div>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.home", "Home")}
                </Link>
                <Link
                  href="/about"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.about", "About STTHIRA")}
                </Link>
                <div
                  className={`border-l pl-4 py-1 space-y-2 ${
                    isRovera ? "border-zinc-200" : "border-neutral-800"
                  }`}
                >
                  <Link
                    href="/developments"
                    className={`font-editorial text-xl block ${
                      isRovera ? "text-zinc-700 hover:text-black" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {t("nav.developments", "Our Developments")}
                  </Link>
                  <Link
                    href="/developments/rovera"
                    className={`font-editorial text-base font-medium flex items-center justify-between ${
                      isRovera ? "text-black" : "text-white"
                    }`}
                  >
                    <span>↳ ROVERA (Devanahalli)</span>
                    <span className="text-[9px] uppercase tracking-wider text-blue-600 font-semibold">Featured</span>
                  </Link>
                  <Link
                    href="/developments/terra"
                    className={`font-editorial text-base flex items-center justify-between ${
                      isRovera ? "text-zinc-600 hover:text-black" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span>↳ STTHIRA TERRA</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Sanctuary</span>
                  </Link>
                </div>
                <Link
                  href="/leadership"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.leadership", "Leadership")}
                </Link>
                <Link
                  href="/gallery"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.gallery", "Gallery")}
                </Link>
                <Link
                  href="/faq"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.faq", "FAQ")}
                </Link>
                <Link
                  href="/contact"
                  className={`font-editorial text-2xl transition-colors ${
                    isRovera ? "text-zinc-950 hover:text-[#1E3A8A]" : "text-white hover:text-neutral-400"
                  }`}
                >
                  {t("nav.contact", "Contact")}
                </Link>
              </div>
            </div>

            <div
              className={`pt-6 border-t space-y-4 ${
                isRovera ? "border-zinc-200" : "border-neutral-800"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full py-3.5 bg-[#0F2744] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1E3A8A] transition-colors text-center rounded-full"
              >
                Schedule Private Walkthrough
              </button>
              <div
                className={`flex items-center justify-between text-xs ${
                  isRovera ? "text-zinc-500" : "text-neutral-500"
                }`}
              >
                <span>© 2026 STTHIRA DEVELOPMENTS</span>
                <LanguageSwitcher dropUp={true} theme={isRovera ? "light" : "dark"} />
              </div>
            </div>
          </div>
        )}
      </header>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        projectName={isRovera ? "ROVERA (Devanahalli–Doddaballapura Road)" : "STTHIRA Luxury Real Estate"}
      />
    </>
  );
}
