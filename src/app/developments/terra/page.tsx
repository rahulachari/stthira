import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  Maximize2,
  Layers,
  Trees,
  CheckCircle2,
} from "lucide-react";
import { DEVELOPMENTS } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "STTHIRA TERRA — Sovereign Eco-Luxury Estates | Nandi Foothills",
  description:
    "STTHIRA TERRA is an upcoming 60+ acre sovereign eco-luxury sanctuary development nestled against ancient granite rock formations in the Nandi Foothills Corridor.",
};

export default function TerraProjectPage() {
  const project = DEVELOPMENTS.find((d) => d.slug === "terra") || DEVELOPMENTS[1];

  return (
    <div className="bg-white text-neutral-900 pt-20">
      {/* 01. FULL-SCREEN CINEMATIC PROJECT HERO */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt="STTHIRA TERRA Eco-Sanctuary Architecture"
            fill
            priority
            quality={95}
            className="object-cover object-center grayscale contrast-115 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-black/60 backdrop-blur-md px-4 py-1.5 mb-6">
            <Trees className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-300 font-sans">
              Parent Developer: STTHIRA • India
            </span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wider font-light text-white my-4 leading-none">
            STTHIRA TERRA
          </h1>

          <p className="font-editorial italic text-xl sm:text-3xl text-neutral-300 max-w-3xl mb-8 leading-snug">
            &ldquo;{project.tagline}&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-neutral-400 font-sans mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>Nandi Foothills Corridor</span>
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
              <span>Register Early Interest</span>
            </a>
            <a
              href="#overview"
              className="inline-flex items-center justify-center border border-white/60 hover:border-white px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <span>Explore Concept Matrix</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. OVERVIEW */}
      <section id="overview" className="py-24 sm:py-32 border-b border-neutral-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                STTHIRA Landmark Initiative
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-[1.05]">
                AN OFF-GRID SANCTUARY <br />
                <span className="italic font-light text-neutral-500">FOR GENERATIONAL PEACE.</span>
              </h2>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>

              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-2 font-sans">
                  Ecological Covenant
                </span>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                  Each half-acre and full-acre parcel is governed by vernacular architectural covenants requiring natural stone masonry, solar microgrids, and a 70% native flora protection buffer.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-100 border border-neutral-200 p-8 sm:p-12 space-y-8">
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                CONCEPTUAL SPECIFICATIONS
              </h3>

              <div className="grid grid-cols-2 gap-6 text-xs font-sans">
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Scale</span>
                  <span className="font-editorial text-2xl text-black font-medium">{project.acres}</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Parcels</span>
                  <span className="font-editorial text-2xl text-black font-medium">{project.plotsCount}</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Protected Nature</span>
                  <span className="font-editorial text-2xl text-black font-medium">70% Ecological</span>
                </div>
                <div className="border-b border-neutral-300 pb-4">
                  <span className="text-neutral-500 uppercase tracking-widest text-[10px] block">Status</span>
                  <span className="font-editorial text-2xl text-black font-medium">Concept Phase</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">Planned Features</span>
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

      {/* 03. ENQUIRY SECTION */}
      <section id="enquiry" className="py-24 sm:py-32 bg-black text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
                STTHIRA Executive Advisory
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-white font-light leading-[1.05]">
                REGISTER YOUR <br />
                <span className="italic font-light text-neutral-400">EARLY INTEREST.</span>
              </h2>

              <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Priority allocation and architectural whitepapers for STTHIRA TERRA will be made available exclusively to registered patrons prior to public announcement.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white text-neutral-900 p-8 sm:p-10 border border-neutral-800">
              <EnquiryForm defaultDevelopment="STTHIRA TERRA" defaultType="General Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
