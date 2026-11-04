import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Trees,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Phone,
  ArrowRight,
  Compass,
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import Rovera3DLogo from "@/components/Rovera3DLogo";

export const metadata = {
  title: "ROVERA by STTHIRA — Luxury Plotted Living | North Bengaluru",
  description:
    "ROVERA is the inaugural 42+ acre luxury plotted development by STTHIRA in North Bengaluru. Featuring underground utilities, 45% conserved nature, and 186 exclusive villa plots.",
};

export default function RoveraProjectPage() {
  const rovera = DEVELOPMENTS[0];

  return (
    <div className="bg-white text-neutral-900 pt-20">
      {/* 01. CLEAN & PROPER CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white py-16 sm:py-24">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src={rovera.heroImage}
            alt="ROVERA Plotted Development Monumental Architecture"
            fill
            priority
            quality={95}
            className="object-cover object-center grayscale contrast-110 brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center">
          {/* Subtle Project Inception Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/60 backdrop-blur-md px-4 py-1.5 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-sans">
              STTHIRA Inaugural Project • North Bengaluru
            </span>
          </div>

          {/* Official 3D Animated Cheetah & ROVERA Logo (Only One ROVERA Mark) */}
          <h1 className="sr-only">ROVERA — Luxury Plotted Living by STTHIRA</h1>
          <div className="my-1 sm:my-3">
            <Rovera3DLogo size="xl" />
          </div>

          {/* Clear, Simple Tagline */}
          <p className="font-editorial italic text-lg sm:text-2xl text-neutral-200 max-w-2xl mb-6 leading-snug">
            &ldquo;An expression of thoughtfully planned luxury plotted living.&rdquo;
          </p>

          {/* Key Facts Pill — Instant clarity for every visitor */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs uppercase tracking-widest text-neutral-300 font-sans mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>North Bengaluru</span>
            </span>
            <span>•</span>
            <span>42+ Acres Enclave</span>
            <span>•</span>
            <span>186 Villa Plots</span>
            <span>•</span>
            <span className="text-white font-medium">18 Mins from Airport</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <span>Schedule Site Visit</span>
            </a>
            <a
              href="#plots"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/60 hover:border-white px-8 py-3.5 font-sans text-xs uppercase tracking-[0.25em] text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <span>View Plot Sizes</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. STICKY IN-PAGE NAV — Clean 5 section jumps */}
      <nav className="sticky top-[68px] sm:top-[76px] z-40 bg-black/95 backdrop-blur-md border-b border-neutral-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] uppercase tracking-widest font-sans text-neutral-400">
          <div className="flex items-center space-x-8">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#plots" className="hover:text-white transition-colors">Plot Sizes</a>
            <a href="#masterplan" className="hover:text-white transition-colors">Master Plan</a>
            <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
          </div>
          <a href="#enquiry" className="text-white font-medium hover:underline">
            <span>Book Private Visit</span>
          </a>
        </div>
      </nav>

      {/* 03. PROJECT OVERVIEW AT A GLANCE — Clear, honest, next-level standard */}
      <section id="overview" className="py-20 sm:py-28 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                The Project In Brief
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                GROUNDED IN QUALITY. <br />
                <span className="italic font-light text-neutral-500">BUILT TO LAST.</span>
              </h2>

              <p className="font-sans text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                <strong>ROVERA</strong> is the inaugural plotted living development by <strong>STTHIRA</strong>, a forward-looking Indian real-estate development firm founded in 2026 under the leadership of <strong>Lokesh Mudhaliar (Board of Directors)</strong>.
              </p>

              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                As our flagship project, ROVERA reflects our commitment to &ldquo;next-level working&rdquo;: 100% legal title purity verified over 30 years, complete underground electricity and fiber grids with zero overhead wires, 50-foot wide tree-lined boulevards, and generous 45% conserved green spaces.
              </p>

              {/* Direct Concierge Contact */}
              <div className="pt-2 flex items-center gap-4 text-xs font-sans">
                <a
                  href="tel:+919845077123"
                  className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-black px-4 py-2.5 transition-colors border border-neutral-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Concierge: +91 98450 77123</span>
                </a>
              </div>
            </div>

            {/* Right 4 Key Stat Cards */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Total Land Area</span>
                <span className="font-editorial text-3xl text-black font-medium block">42+ Acres</span>
                <p className="text-xs text-neutral-600 font-sans font-light">Master-planned gated enclave in North Bengaluru</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Plot Availability</span>
                <span className="font-editorial text-3xl text-black font-medium block">186 Plots</span>
                <p className="text-xs text-neutral-600 font-sans font-light">Curated residential plots open for Phase 1 enquiry</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Open Green Space</span>
                <span className="font-editorial text-3xl text-black font-medium block">45% Conserved</span>
                <p className="text-xs text-neutral-600 font-sans font-light">Dedicated parks, tree-lined boulevards &amp; water bodies</p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Civil Infrastructure</span>
                <span className="font-editorial text-3xl text-black font-medium block">100% Underground</span>
                <p className="text-xs text-neutral-600 font-sans font-light">Zero overhead cables, pre-laid water &amp; fiber points</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PLOT SIZES (WHAT SIZES ARE AVAILABLE?) */}
      <section id="plots" className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              Plot Configurations
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              AVAILABLE PLOT SIZES
            </h2>
            <p className="font-sans text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Every parcel features individual underground power, water, and optical fiber terminations ready for connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rovera.plotSizes.slice(0, 3).map((plot, idx) => (
              <div
                key={plot.name}
                className="bg-white border border-neutral-200 p-8 space-y-6 flex flex-col justify-between hover:border-black transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans block mb-1">
                    Option 0{idx + 1}
                  </span>
                  <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">
                    {plot.name}
                  </h3>

                  <div className="py-4 border-y border-neutral-100 my-4 space-y-2">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-neutral-500">Dimensions:</span>
                      <span className="text-black font-medium">{plot.dimension}</span>
                    </div>
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-neutral-500">Total Area:</span>
                      <span className="text-black font-semibold text-sm">{plot.areaSqFt}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-xs font-sans leading-relaxed font-light">
                    {plot.idealFor}
                  </p>
                </div>

                <a
                  href="#enquiry"
                  className="w-full text-center py-3 bg-black text-white hover:bg-neutral-800 font-sans text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  Enquire About This Size
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. MASTER PLAN & ARCHITECTURE PREVIEW */}
      <section id="masterplan" className="py-20 sm:py-28 bg-black text-white border-b border-neutral-900 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-2">
              Master Plan Layout
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight font-light leading-none">
              MASTER PLAN MATRIX
            </h2>
            <p className="text-neutral-400 text-sm font-sans mt-3 font-light leading-relaxed">
              Designed with 50-foot main avenues, gentle road curves framing tree vistas, and independent residential cul-de-sacs.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full bg-neutral-900 border border-neutral-800 overflow-hidden group">
            <Image
              src="/images/aerial-view.jpg"
              alt="ROVERA Master Plan Aerial Layout"
              fill
              className="object-cover object-center grayscale contrast-125 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans block">
                  Master Layout Perspective
                </span>
                <p className="font-editorial text-xl sm:text-2xl text-white uppercase tracking-wider">
                  Central Bioswales &amp; 50-Ft Avenues
                </p>
              </div>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 text-xs uppercase tracking-widest font-sans font-medium hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span>Request High-Res Plan</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 06. KEY AMENITIES (4 CORE PILLARS) */}
      <section id="amenities" className="py-20 sm:py-28 bg-white border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              Enclave Lifestyle
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              CURATED AMENITIES
            </h2>
            <p className="font-sans text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Quiet refinement focused on wellness, nature, and community tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-neutral-200 p-6 space-y-3 bg-neutral-50">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Clubhouse</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">The Monolith Club</h3>
              <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                20,000 sq.ft concrete &amp; glass pavilion with resident lounge, library, and concierge.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3 bg-neutral-50">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Wellness</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">Aura Lap Pool</h3>
              <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                25-meter heated swimming pool surrounded by flamed black granite decking and cabanas.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3 bg-neutral-50">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Nature</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">The Forest Spine</h3>
              <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                3+ acres of conserved woodland with 400+ mature indigenous trees and stone walking paths.
              </p>
            </div>

            <div className="border border-neutral-200 p-6 space-y-3 bg-neutral-50">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">Sports</span>
              <h3 className="font-editorial text-2xl uppercase tracking-wide text-black">Zenith Sports Arena</h3>
              <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                Championship synthetic tennis court, professional padel court, and half basketball court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. LOCATION & CONNECTIVITY */}
      <section id="location" className="py-20 sm:py-28 bg-neutral-100 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              North Bengaluru Growth Corridor
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-black font-light leading-none">
              STRATEGIC CONNECTIVITY
            </h2>
            <p className="font-sans text-neutral-600 text-sm mt-3 font-light leading-relaxed">
              Effortless connectivity to Kempegowda International Airport and key technology corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rovera.connectivity.map((item) => (
              <div
                key={item.destination}
                className="bg-white border border-neutral-200 p-6 space-y-2 hover:border-black transition-colors"
              >
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans">
                    {item.distance}
                  </span>
                  <span className="font-editorial text-2xl text-black font-medium">
                    {item.time}
                  </span>
                </div>
                <h4 className="font-editorial text-lg uppercase tracking-wider text-black">
                  {item.destination}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. TRANSPARENT LEGAL & RERA STATEMENT */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="border-l-4 border-black pl-6 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-sans">
                Statutory Transparency
              </span>
            </div>
            <h3 className="font-editorial text-xl uppercase tracking-wider text-black">
              STATUTORY APPROVALS &amp; RERA DISCLOSURE
            </h3>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
              ROVERA by STTHIRA is currently completing statutory project approvals with local municipal authorities in North Bengaluru. Planning files and cadastral survey boundaries are open for inspection at our corporate office for registered prospective buyers. In accordance with RERA, formal allotment and agreements will proceed immediately upon registration certificate issuance.
            </p>
          </div>
        </div>
      </section>

      {/* 09. SCHEDULE PRIVATE SITE VISIT (DIRECT ENQUIRY) */}
      <section id="enquiry" className="py-20 sm:py-28 bg-neutral-900 text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
                ROVERA Relationship Desk
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-white font-light leading-tight">
                SCHEDULE YOUR <br />
                <span className="italic font-light text-neutral-400">PRIVATE SITE VISIT.</span>
              </h2>

              <p className="font-sans text-neutral-300 text-sm leading-relaxed font-light">
                Experience the expansive scale, mature tree canopy, and civil engineering progress of ROVERA firsthand. Chauffeured transportation can be arranged from the airport or your residence.
              </p>

              <div className="p-6 bg-black border border-neutral-800 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-sans">
                  Direct Project Concierge
                </span>
                <p className="font-editorial text-2xl text-white font-medium">
                  +91 98450 77123
                </p>
                <p className="text-xs text-neutral-400 font-sans">
                  Monday to Sunday: 09:30 AM – 06:30 PM IST
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-neutral-900 p-8 sm:p-10 border border-neutral-800">
              <EnquiryForm defaultDevelopment="ROVERA" defaultType="Schedule Site Visit" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
