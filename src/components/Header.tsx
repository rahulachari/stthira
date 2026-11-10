"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
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

  const navLinks = [
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
    { name: t("nav.leadership", "Leadership"), href: "/leadership" },
    { name: t("nav.journal", "Journal"), href: "/journal" },
    { name: t("nav.gallery", "Gallery"), href: "/gallery" },
    { name: t("nav.faq", "FAQ"), href: "/faq" },
    { name: t("nav.contact", "Contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-neutral-800 py-3.5 sm:py-4 text-white"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Corporate Hierarchy — Protected with shrink-0 and responsive sizing */}
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

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 text-xs uppercase tracking-[0.16em] font-sans">
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
                        isActive ? "text-white font-medium" : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <div className="bg-black/95 border border-neutral-800 p-3 shadow-2xl backdrop-blur-xl">
                        <div className="text-[10px] uppercase tracking-widest text-neutral-500 px-3 py-1 border-b border-neutral-800/80 mb-2">
                          Development Portfolio
                        </div>
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-2.5 hover:bg-neutral-900 transition-colors group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-white font-editorial text-sm tracking-widest font-medium">
                                {sub.name}
                              </span>
                              <span className="text-[9px] text-neutral-400 tracking-wider">
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
                  className={`hover-editorial-line transition-colors ${
                    isActive ? "text-white font-medium" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle (only on mobile viewports) */}
          <div className="flex items-center xl:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 sm:p-2 text-white hover:text-neutral-300 transition-colors cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-[58px] sm:top-[73px] bg-black/98 z-40 px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between overflow-y-auto border-t border-neutral-900 h-[calc(100vh-58px)] sm:h-[calc(100vh-73px)] w-full max-w-full">
            <div className="space-y-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.home", "Home")}
                </Link>
                <Link
                  href="/about"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.about", "About STTHIRA")}
                </Link>
                <div className="border-l border-neutral-800 pl-4 py-1 space-y-2">
                  <Link
                    href="/developments"
                    className="font-editorial text-xl text-neutral-300 hover:text-white block"
                  >
                    {t("nav.developments", "Our Developments")}
                  </Link>
                  <Link
                    href="/developments/rovera"
                    className="font-editorial text-base text-white font-medium block flex items-center justify-between"
                  >
                    <span>↳ ROVERA</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400">Featured</span>
                  </Link>
                  <Link
                    href="/developments/terra"
                    className="font-editorial text-base text-neutral-300 hover:text-white block flex items-center justify-between"
                  >
                    <span>↳ STTHIRA TERRA</span>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-500">Sanctuary</span>
                  </Link>
                </div>
                <Link
                  href="/leadership"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.leadership", "Leadership")}
                </Link>
                <Link
                  href="/journal"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.journal", "Journal & Insights")}
                </Link>
                <Link
                  href="/gallery"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.gallery", "Architectural Gallery")}
                </Link>
                <Link
                  href="/faq"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.faq", "FAQ")}
                </Link>
                <Link
                  href="/contact"
                  className="font-editorial text-2xl text-white hover:text-neutral-400 transition-colors"
                >
                  {t("nav.contact", "Contact")}
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-900 space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-neutral-900">
                <span className="text-xs uppercase tracking-widest text-neutral-400">Select Language / భాష</span>
                <LanguageSwitcher dropUp={false} />
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full py-3.5 bg-white text-black font-sans text-xs uppercase tracking-[0.25em] font-medium text-center hover:bg-neutral-200 transition-colors"
              >
                Schedule Private Consultation
              </button>
              <div className="text-center text-[10px] text-neutral-500 tracking-widest uppercase">
                STTHIRA Developments • Est. 2026
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Instant Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialDevelopment="ROVERA"
      />
    </>
  );
}

