import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { LEADERSHIP_INFO, COMPANY_INFO } from "@/lib/data";
import PartnershipBanner from "@/components/PartnershipBanner";
import StthiraEmblem from "@/components/StthiraEmblem";

export const metadata = {
  title: "Leadership & Board of Directors — STTHIRA",
  description:
    "Meet Lokesh Mudhaliar, Board of Directors at STTHIRA. Learn about our corporate governance and capital stewardship in Indian luxury real estate.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              Corporate Governance &amp; Stewardship
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95] break-words">
              LEADERSHIP &amp; BOARD
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              Guided by strategic foresight, uncompromising fiduciary integrity, and an enduring commitment to architectural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Feature: Lokesh Mudhaliar (Name & Fiduciary Credentials - Photo Removed Per Request) */}
      <section className="py-24 sm:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Architectural Monogram & Credentials Card */}
            <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <StthiraEmblem className="text-white w-4 h-5" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans">
                    Board Governance
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">Est. 2026</span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-sans block mb-1">
                  Executive Director
                </span>
                <h3 className="font-editorial text-3xl sm:text-5xl uppercase tracking-wider text-white font-medium">
                  {LEADERSHIP_INFO.director}
                </h3>
                <p className="text-xs uppercase tracking-widest text-neutral-300 font-sans mt-2">
                  {LEADERSHIP_INFO.title} • {LEADERSHIP_INFO.company}
                </p>
              </div>

              <div className="py-4 border-y border-neutral-900 space-y-3 text-xs font-sans text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Board Mandate:</span>
                  <span className="text-white">Capital &amp; Land Stewardship</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Legal Audit:</span>
                  <span className="text-white">Forensic 30-Year Title Search</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Corporate HQ:</span>
                  <span className="text-white">Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <p className="text-neutral-400 text-xs font-sans leading-relaxed font-light italic">
                Leading STTHIRA&apos;s institutional development strategy, statutory RERA compliance, and international architectural aesthetics.
              </p>
            </div>

            {/* Profile Narrative & Leadership Message */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
                  Official Profile
                </span>
                <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
                  {LEADERSHIP_INFO.director}
                </h2>
                <h3 className="font-editorial text-xl sm:text-2xl text-neutral-600 uppercase mt-2">
                  {LEADERSHIP_INFO.title}, {COMPANY_INFO.name}
                </h3>
              </div>

              {/* Leadership Message Quote */}
              <div className="bg-neutral-50 border-l-4 border-black p-6 sm:p-8 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">
                  Leadership Message
                </span>
                <blockquote className="font-editorial italic text-xl sm:text-2xl text-black leading-relaxed">
                  &ldquo;{LEADERSHIP_INFO.quote}&rdquo;
                </blockquote>
              </div>

              {/* Biography */}
              <div className="space-y-4 font-sans text-neutral-700 text-base leading-relaxed font-light">
                {LEADERSHIP_INFO.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Governance Standards */}
              <div className="pt-6 border-t border-neutral-200">
                <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-sans mb-4">
                  Institutional Governance Commitments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-neutral-800">
                  {LEADERSHIP_INFO.governanceCommitments.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 bg-neutral-50 border border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCE: STTHIRA | AKSHARA */}
      <PartnershipBanner />

      {/* Corporate Stewardship Principles */}
      <section className="py-24 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              Board Oversight
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              THE PILLARS OF GOVERNANCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 p-8 space-y-4">
              <ShieldCheck className="w-8 h-8 text-black stroke-[1.2]" />
              <h4 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Fiduciary Responsibility
              </h4>
              <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Every rupee committed by our patrons is safeguarded through statutory escrow governance, dedicated project accounts, and independent financial auditing.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4">
              <ShieldCheck className="w-8 h-8 text-black stroke-[1.2]" />
              <h4 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Zero Legal Ambiguity
              </h4>
              <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                We refuse to acquire or develop parcels with encumbrances, litigation, or compromised genealogical lineages. Complete title search dossiers are made available.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4">
              <ShieldCheck className="w-8 h-8 text-black stroke-[1.2]" />
              <h4 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Generational Longevity
              </h4>
              <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Master plans are structured with an irrevocable maintenance endowment fund, guaranteeing perpetual upkeep of arterial roads, landscaping, and clubhouse assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Contact CTA */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
            Direct Corporate Access
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight font-light leading-tight">
            CONNECT WITH THE STTHIRA BOARD
          </h2>
          <p className="font-sans text-neutral-400 text-sm font-light leading-relaxed max-w-lg mx-auto">
            For institutional partnerships, strategic land collaborations, or high-value acquisitions, contact our corporate secretariat.
          </p>
          <div className="pt-4">
            <Link
              href="/contact?subject=board"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Contact Corporate Secretariat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

