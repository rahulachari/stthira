import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  Maximize2,
  Layers,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import GalleryView from "@/components/GalleryView";
import FaqAccordion from "@/components/FaqAccordion";
import EnquiryForm from "@/components/EnquiryForm";
import StthiraEmblem from "@/components/StthiraEmblem";

export const metadata = {
  title: "AKSHARA MEADOWS — Strategic Alliance with STTHIRA | Plotted Living",
  description:
    "AKSHARA MEADOWS is a 38+ acre master-planned luxury plotted development curated jointly by AKSHARA and STTHIRA in East Bengaluru. Featuring 100% underground infrastructure, 42% green cover, and pristine title purity.",
};

export default function AksharaMeadowsPage() {
  const project = DEVELOPMENTS.find((d) => d.slug === "akshara-meadows") || DEVELOPMENTS[2];

  return (
    <div className="bg-white text-neutral-900 pt-20">
      {/* 01. FULL-SCREEN CINEMATIC PROJECT HERO */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt="AKSHARA MEADOWS Strategic Plotted Development"
            fill
            priority
            quality={95}
            className="object-cover object-center grayscale contrast-110 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/60 backdrop-blur-md px-4 py-1.5 mb-4">
            <Handshake className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-300 font-sans">
              Strategic Land Alliance: STTHIRA | AKSHARA
            </span>
          </div>

          {/* Official AKSHARA Brand Emblem */}
          <div className="relative w-32 sm:w-44 md:w-52 aspect-square mb-3 select-none drop-shadow-2xl">
            <Image
              src="/images/akshara-logo.jpg"
              alt="AKSHARA Official Logo"
              fill
              priority
              className="object-contain rounded-2xl border border-white/15 shadow-2xl"
            />
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wider font-light text-white my-2 leading-none">
            AKSHARA MEADOWS
          </h1>

          <p className="font-editorial italic text-xl sm:text-3xl text-neutral-300 max-w-3xl mb-8 leading-snug">
            &ldquo;{project.tagline}&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-neutral-400 font-sans mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>East Bengaluru Corridor</span>
            </span>
            <span>•</span>
            <span>{project.acres}</span>
            <span>•</span>
            <span>{project.plotsCount}</span>
            <span>•</span>
            <span className="text-white font-medium">{project.statusBadge}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors shadow-xl"
            >
              <span>Schedule Private Walkthrough</span>
            </a>
            <a
              href="#parcels"
              className="inline-flex items-center justify-center border border-white/60 hover:border-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <span>Explore Master Parcels</span>
            </a>
          </div>
        </div>

        {/* Sticky-Style In-Page Jump Anchor Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-neutral-800 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] uppercase tracking-widest font-sans text-neutral-400">
            <div className="flex items-center space-x-6">
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <a href="#alliance" className="hover:text-white transition-colors">Alliance</a>
              <a href="#parcels" className="hover:text-white transition-colors">Parcels</a>
              <a href="#amenities" className="hover:text-white transition-colors">Clubhouse &amp; Nature</a>
              <a href="#connectivity" className="hover:text-white transition-colors">Connectivity</a>
              <a href="#legal" className="hover:text-white transition-colors">Legal Disclosures</a>
            </div>
            <a href="#enquiry" className="text-white font-medium hover:underline">
              <span>Reserve Dossier</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. OVERVIEW & STRATEGIC ALLIANCE */}
      <section id="overview" className="py-24 sm:py-32 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                Master Development Overview
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-[1.05]">
                SOVEREIGN LIVING. <br />
                <span className="italic font-light text-neutral-500">CURATED COLLABORATION.</span>
              </h2>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>

              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-sans">
                  Alliance Governance
                </span>
                
                {/* Official Co-Branding Display */}
                <div className="flex items-center gap-3 py-2.5 my-2">
                  <div className="flex items-center gap-1.5">
                    <StthiraEmblem className="text-black w-5 h-6 shrink-0" />
                    <span className="font-editorial text-base font-semibold tracking-wider text-black">STTHIRA</span>
                  </div>
                  <span className="text-neutral-300 font-light text-base">×</span>
                  <div className="relative h-6 w-28 shrink-0">
                    <Image
                      src="/images/akshara-horizontal-dark.png"
                      alt="AKSHARA"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                  A high-conviction alliance where AKSHARA brings generational regional land acquisition expertise, and STTHIRA deploys institutional master planning, forensic legal diligence, and uncompromising engineering guidelines.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-100 border border-neutral-200 p-8 sm:p-12 space-y-8">
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                PROJECT METRICS &amp; SANCTIONS
              </h3>

              <div className="grid grid-cols-2 gap-6 text-xs font-sans">
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Land Enclave</span>
                  <span className="font-editorial text-2xl text-black font-medium">{project.acres}</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Master Inventory</span>
                  <span className="font-editorial text-2xl text-black font-medium">{project.plotsCount}</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Green Open Cover</span>
                  <span className="font-editorial text-2xl text-black font-medium">42% Conserved</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Title Verification</span>
                  <span className="font-editorial text-2xl text-black font-medium">30-Year Forensic</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Highlights</span>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. PLOT CONFIGURATIONS */}
      <section id="parcels" className="py-24 sm:py-32 bg-black text-white border-b border-neutral-900 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-neutral-800 pb-10 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-2">
              Spatial Zoning
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
              PLOT PARCEL CONFIGURATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.plotSizes.map((plot, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-neutral-800 p-8 space-y-4 hover:border-neutral-600 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-sans block">
                  Category {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                  {plot.name}
                </h3>
                <div className="py-3 border-y border-neutral-800 text-xs font-sans space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Dimensions</span>
                    <span className="text-white font-medium">{plot.dimension}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Total Area</span>
                    <span className="text-white font-medium">{plot.areaSqFt}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed font-light">
                  {plot.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. AMENITIES */}
      <section id="amenities" className="py-24 sm:py-32 bg-white border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-neutral-200 pb-10 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
              Leisure &amp; Wellness
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-none">
              CURATED ENCLAVE AMENITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.amenities.map((item, i) => (
              <div key={i} className="border border-neutral-200 p-8 space-y-3 bg-neutral-50 hover:bg-white hover:border-black transition-all">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">
                  {item.category}
                </span>
                <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-600 font-sans leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CONNECTIVITY */}
      <section id="connectivity" className="py-24 sm:py-32 bg-neutral-950 text-white border-b border-neutral-900 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-neutral-800 pb-10 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-2">
              Location Advantages
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
              STRATEGIC CONNECTIVITY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.connectivity.map((conn, i) => (
              <div key={i} className="bg-black border border-neutral-800 p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg text-white uppercase tracking-wider">{conn.destination}</h4>
                  <span className="text-xs text-neutral-500 font-sans">{conn.distance}</span>
                </div>
                <div className="text-right">
                  <span className="font-editorial text-2xl text-white font-medium">{conn.time}</span>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-400 block font-sans">Drive Time</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. RERA & LEGAL DISCLOSURE */}
      <section id="legal" className="py-16 bg-neutral-100 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-6 text-neutral-600 text-xs font-sans space-y-4">
          <div className="flex items-center gap-2 text-neutral-800 font-medium">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="uppercase tracking-widest text-[11px]">RERA &amp; Alliance Disclosure</span>
          </div>
          <p className="leading-relaxed font-light">
            {project.reraDisclaimer}
          </p>
          <p className="leading-relaxed font-light text-[11px] text-neutral-500">
            {project.masterPlanNote}
          </p>
        </div>
      </section>

      {/* 07. ENQUIRY SECTION */}
      <section id="enquiry" className="py-24 sm:py-32 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                AKSHARA MEADOWS Relationship Desk
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-[1.05]">
                RESERVE YOUR <br />
                <span className="italic font-light text-neutral-500">PRIVATE DOSSIER.</span>
              </h2>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                Consult with our dedicated advisory team regarding plot allocations, cadastral survey boundaries, and private site walkthrough arrangements.
              </p>

              <div className="p-6 bg-neutral-100 border border-neutral-200 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block font-sans">
                  Joint Advisory Concierge
                </span>
                <p className="font-editorial text-2xl text-black font-medium">
                  +91 98450 77123
                </p>
                <p className="text-xs text-neutral-600 font-sans">
                  Monday to Sunday: 09:30 AM – 06:30 PM IST
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm defaultDevelopment="AKSHARA MEADOWS" defaultType="General Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
