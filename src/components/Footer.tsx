"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import StthiraEmblem from "./StthiraEmblem";

export default function Footer() {
  const currentYear = 2026;
  const pathname = usePathname();
  const isRovera = pathname?.includes("/developments/rovera");

  return (
    <>
      <footer className="bg-[#0b0b0c] text-neutral-200 border-t border-neutral-800 font-sans select-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 pt-16 pb-24 md:pb-12">
          {/* Exact 4-Column Grid as shown in user reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-10">
            {/* Column 1: Dual Brand Identity & Tagline */}
            <div className="space-y-6">
              <div className="space-y-4">
                {/* STTHIRA Emblem & Wordmark */}
                <Link href="/" className="inline-flex items-center gap-2.5 group">
                  <StthiraEmblem className="text-white w-8 h-9 transition-transform group-hover:scale-105" />
                  <span className="font-editorial text-2xl font-bold tracking-[0.16em] uppercase text-white">
                    STTHIRA
                  </span>
                </Link>

                {/* ROVERA Brand Mark */}
                <div className="relative h-8 w-36 select-none">
                  <Image
                    src="/images/rovera-logo-dark.png"
                    alt="ROVERA"
                    fill
                    priority
                    sizes="144px"
                    className="object-contain object-left invert"
                  />
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed max-w-xs font-light">
                XL villa plots in a 3-acre gated community on the Devanahalli–Doddaballapura Road, North Bangalore.
              </p>
            </div>

            {/* Column 2: CONTACT */}
            <div className="space-y-4 text-sm font-light">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#c86a4b] mb-3">
                Contact
              </p>

              <div className="flex gap-3 text-neutral-300 leading-relaxed">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#c86a4b]" />
                <span>
                  Devanahalli, Doddaballapura Main Rd,
                  <br />
                  Kasaba Hobli, Shivapura,
                  <br />
                  Doddaballapur,
                  <br />
                  Karnataka 562163
                </span>
              </div>

              <div className="pt-1">
                <a
                  href="tel:+918049208800"
                  className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c86a4b] shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:info@stthira.com"
                  className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#c86a4b] shrink-0" />
                  <span>info@stthira.com</span>
                </a>
              </div>
            </div>

            {/* Column 3: QUICK LINKS */}
            <div className="flex flex-col">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#c86a4b] mb-4">
                Quick Links
              </p>

              <ul className="space-y-2.5 text-sm font-light text-neutral-300">
                <li>
                  <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/legal/disclaimer" className="hover:text-white transition-colors">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/Pnt9SjxeLpJLzs179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Google Map
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About STTHIRA
                  </Link>
                </li>
              </ul>

              {/* Social Icons row */}
              <div className="flex items-center gap-4 mt-6 text-neutral-400">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 4: PARTNERS */}
            <div className="space-y-3">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#c86a4b] mb-4">
                Partners
              </p>
              <p className="text-xs font-light text-neutral-400">
                Member of
              </p>
              <div className="pt-1">
                <div className="relative w-32 h-12 bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src="/images/credai-bengaluru-logo.png"
                    alt="CREDAI Bengaluru"
                    fill
                    sizes="128px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-neutral-800 text-xs text-neutral-500 font-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p>
              © {currentYear} STTHIRA. All rights reserved. RERA Approved | PRM/KA/RERA/1250/301/PR/200224/006646
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Action Buttons (Whatsapp & Book a Visit as shown in image) */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919606026875?text=Hi,%20I'm%20interested%20in%20ROVERA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-xs font-medium shadow-xl hover:bg-[#20ba59] transition-all hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Whatsapp</span>
        </a>

        {/* Book a Visit Button */}
        <a
          href="#reserve"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white border border-neutral-700 px-4 py-2.5 rounded-full text-xs font-medium shadow-xl hover:bg-black transition-all hover:scale-105"
        >
          <Calendar className="w-4 h-4 text-[#c86a4b]" />
          <span>Book a Visit</span>
        </a>
      </div>
    </>
  );
}
