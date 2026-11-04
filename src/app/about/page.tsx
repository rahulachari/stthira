import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Shield, Award, Landmark, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, LEADERSHIP_INFO } from "@/lib/data";
import PartnershipBanner from "@/components/PartnershipBanner";
import StthiraEmblem from "@/components/StthiraEmblem";

export const metadata = {
  title: "About STTHIRA — Corporate Heritage & Development Philosophy",
  description: "Learn about STTHIRA, India's elite luxury real-estate master developer established in 2026. Discover our vision, leadership, and institutional standards.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Editorial Header */}
      <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/brand-story.jpg"
            alt="STTHIRA Architecture Background"
            fill
            className="object-cover object-center grayscale contrast-125"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans">
              <StthiraEmblem className="text-white w-4 h-5" />
              <span>Corporate Profile • Est. 2026</span>
            </div>
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95]">
              ARCHITECTURAL <br />
              <span className="italic font-light text-neutral-400">PERMANENCE.</span>
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              STTHIRA is an elite luxury real-estate development enterprise operating in India, curating institutional-grade plotted living communities defined by legal purity and timeless architectural restraint.
            </p>
          </div>
        </div>
      </section>

      {/* 01 & 02: ABOUT THE COMPANY & OUR STORY */}
      <section className="py-24 sm:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                The Origin
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight font-light leading-tight">
                OUR STORY &amp; FOUNDATION
              </h2>
              <div className="w-12 h-0.5 bg-black" />
              <p className="font-editorial italic text-neutral-600 text-xl leading-relaxed">
                &ldquo;We saw an Indian real-estate landscape saturated with short-lived architectural gimmicks. We founded STTHIRA to restore reverence for the earth and the timeless power of sovereign land ownership.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 font-sans text-neutral-700 text-base leading-relaxed font-light">
              <p>
                Established in 2026, <strong>STTHIRA</strong> emerged from a clear recognition: discerning high-net-worth families, investors, and architectural visionaries in India were increasingly disillusioned with commodity apartments and chaotic, unstandardized plotted subdivisions.
              </p>
              <p>
                The purchase of land in India has historically been fraught with legal ambiguities, inadequate underground civil infrastructure, and a complete absence of architectural cohesion. STTHIRA was conceived as the institutional remedy to this market failure.
              </p>
              <p>
                Under the strategic governance of its Board of Directors, Lokesh Mudhaliar, STTHIRA introduced an unapologetic commitment to three foundational benchmarks: exhaustive 30-year forensic title due diligence, 100% underground high-capacity utilities, and modern minimalist architecture executed in honest concrete and natural stone.
              </p>
              <p>
                Today, STTHIRA serves as the master corporate brand, stewarding an expanding development portfolio anchored by our premiere luxury plotted development, <strong>ROVERA</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 & 04: VISION & MISSION */}
      <section id="vision" className="py-24 sm:py-32 bg-neutral-950 text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="bg-black border border-neutral-800 p-8 sm:p-14 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans">
                  The North Star
                </span>
                <Landmark className="w-5 h-5 text-neutral-400" />
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-white font-light">
                OUR VISION
              </h3>
              <p className="font-editorial text-2xl sm:text-3xl text-neutral-300 italic leading-snug">
                &ldquo;To shape meaningful spaces through thoughtful development, architectural integrity and a commitment to enduring value.&rdquo;
              </p>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                We envision a future where luxury real-estate communities in India outlive speculative fashion, standing across generations as self-sustaining architectural landmarks that honor their natural terrain.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-black border border-neutral-800 p-8 sm:p-14 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans">
                  Operational Standard
                </span>
                <Award className="w-5 h-5 text-neutral-400" />
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-white font-light">
                OUR MISSION
              </h3>
              <p className="font-editorial text-2xl sm:text-3xl text-neutral-300 italic leading-snug">
                &ldquo;To approach every development with clarity, responsibility and attention to detail, creating spaces designed around the aspirations of modern living.&rdquo;
              </p>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                We fulfill this by subjecting every land parcel to forensic legal auditing, executing infrastructure to international standards, and fostering communities united by an appreciation for understated luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05: CORE VALUES */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              Corporate Governance
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-none">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-neutral-200 space-y-4 bg-neutral-50">
              <span className="font-mono text-xs text-neutral-500 block">01 / INTEGRITY</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Fiduciary Transparency
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                No hidden covenants, zero encumbrances, and complete disclosure of statutory and RERA filings. We treat our patrons as long-term co-stewards of the land.
              </p>
            </div>

            <div className="p-8 border border-neutral-200 space-y-4 bg-neutral-50">
              <span className="font-mono text-xs text-neutral-500 block">02 / RESTRAINT</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Architectural Discipline
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                We resist transient trends in favor of timeless geometry, raw materials, natural daylight, and proportions that will command admiration fifty years hence.
              </p>
            </div>

            <div className="p-8 border border-neutral-200 space-y-4 bg-neutral-50">
              <span className="font-mono text-xs text-neutral-500 block">03 / STEWARDSHIP</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">
                Ecological Reverence
              </h3>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                Preserving native tree canopies, replenishing aquifers through comprehensive rainwater systems, and dedicating nearly half of our master plans to unpaved nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06, 07 & 08: APPROACH TO LAND & QUALITY */}
      <section className="py-24 sm:py-32 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden shadow-xl">
              <Image
                src="/images/landscape-nature.jpg"
                alt="STTHIRA Landscape Approach"
                fill
                className="object-cover object-center grayscale contrast-120"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                Engineering Methodology
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                OUR APPROACH TO LAND DEVELOPMENT
              </h2>
              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                Land development at STTHIRA begins long before physical earth is turned. Our multi-disciplinary team of civil engineers, hydrological consultants, and urban planners conduct comprehensive micro-topography studies to engineer gravity-assisted storm drainage and avoid surface erosion.
              </p>

              <div className="space-y-3 pt-2 font-sans text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Sub-surface high-density polyethylene (HDPE) piping with 100-year lifespans</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Dedicated telecommunications ducting enabling redundant gigabit fiber to every plot</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Cast-in-place concrete curbing with integrated rainwater percolation catchpits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09: LEADERSHIP PREVIEW (Photo Removed, Text & Mandate Focus) */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-800 shadow-xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans block">
                Board Governance
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-white font-medium">
                {LEADERSHIP_INFO.director}
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-sans">
                {LEADERSHIP_INFO.title} • {COMPANY_INFO.name}
              </p>
              <div className="pt-3 border-t border-neutral-900 text-xs font-sans text-neutral-300 space-y-2">
                <div>Corporate Standard: <span className="text-white">Forensic Title Purity</span></div>
                <div>Foundation Year: <span className="text-white">2026</span></div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                Governance &amp; Strategy
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                LEADERSHIP &amp; BOARD OF DIRECTORS
              </h2>
              <h3 className="font-editorial text-xl sm:text-2xl text-neutral-700 uppercase">
                {LEADERSHIP_INFO.director} — {LEADERSHIP_INFO.title}
              </h3>
              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                {LEADERSHIP_INFO.bio[0]}
              </p>
              <div className="pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-black hover:text-neutral-600 hover:border-neutral-400 transition-colors"
                >
                  <span>View Complete Leadership Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ALLIANCE: STTHIRA | AKSHARA */}
      <div id="alliance">
        <PartnershipBanner />
      </div>

      {/* 10: PORTFOLIO CTA */}
      <section className="py-24 sm:py-32 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
            The Living Portfolio
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-tight">
            DISCOVER OUR PLOTTED DEVELOPMENTS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl mx-auto">
            Experience ROVERA, our premier 42+ acre master-planned luxury plotted enclave in North Bengaluru.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/developments/rovera"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Explore ROVERA</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-neutral-700 px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] text-white hover:border-white transition-colors"
            >
              <span>Request Private Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

