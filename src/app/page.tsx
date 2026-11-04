"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Building2, Trees, Compass } from "lucide-react";
import CinematicHero from "@/components/CinematicHero";
import PhilosophyInteractive from "@/components/PhilosophyInteractive";
import FaqAccordion from "@/components/FaqAccordion";
import GalleryView from "@/components/GalleryView";
import EnquiryForm from "@/components/EnquiryForm";
import PartnershipBanner from "@/components/PartnershipBanner";
import DevelopmentsSection from "@/components/DevelopmentsSection";
import StthiraEmblem from "@/components/StthiraEmblem";
import { DEVELOPMENTS, LEADERSHIP_INFO, JOURNAL_ARTICLES } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const rovera = DEVELOPMENTS[0];
  const featuredArticles = JOURNAL_ARTICLES.slice(0, 3);
  const galleryPreview = rovera.galleryImages.slice(0, 6);
  const { t } = useLanguage();

  return (
    <div className="bg-white text-neutral-900">
      {/* 01. CINEMATIC HERO */}
      <CinematicHero />

      {/* 02. BRAND INTRODUCTION */}
      <section id="intro" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans">
                <span className="w-6 h-px bg-neutral-400" />
                <span>{t("intro.badge", "The STTHIRA Ethos")}</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-[1.05]">
                {t("intro.headline", "BEYOND DEVELOPMENT. A VISION OF LIVING.")}
              </h2>

              <p className="font-sans text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
                {t(
                  "intro.text1",
                  "STTHIRA was founded with a singular conviction: that luxury in the 21st century is not measured by decorative excess, but by the quiet permanence of land, architectural restraint, and uncompromising fiduciary integrity."
                )}
              </p>

              <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">
                {t(
                  "intro.text2",
                  "Operating as an elite corporate master developer in India, STTHIRA conceives master-planned plotted communities where each residential parcel is engineered to institutional standards. We eliminate the unpredictability of land ownership through forensic legal due diligence, advanced underground utility grids, and monumental entrance architecture designed to endure for centuries."
                )}
              </p>

              <div className="pt-4 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-8">
                <div>
                  <span className="font-editorial text-2xl sm:text-5xl text-black font-light block">
                    {t("stats.yearVal", "2026")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-sans block leading-tight">
                    {t("stats.yearLabel", "Foundation Year")}
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-neutral-300" />
                <div>
                  <span className="font-editorial text-2xl sm:text-5xl text-black font-light block">
                    {t("stats.titleVal", "100%")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-sans block leading-tight">
                    {t("stats.titleLabel", "Clear Title Audit")}
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-neutral-300" />
                <div>
                  <span className="font-editorial text-2xl sm:text-5xl text-black font-light block">
                    {t("stats.greenVal", "45%")}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 font-sans block leading-tight">
                    {t("stats.greenLabel", "Preserved Green Space")}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-black hover:text-neutral-600 hover:border-neutral-400 transition-colors"
                >
                  <span>{t("intro.explore", "Explore STTHIRA Corporate Profile")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Editorial Image */}
            <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-square bg-neutral-100 overflow-hidden border border-neutral-200 shadow-xl">
              <Image
                src="/images/brand-story.jpg"
                alt="STTHIRA Architectural Monolith"
                fill
                className="object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 block mb-1">
                  Brand Archive Series 01
                </span>
                <p className="font-editorial text-xl uppercase tracking-wider font-medium">
                  Architectural Permanence & Monolithic Geometry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. OUR DEVELOPMENTS: ROVERA • STTHIRA • AKSHARA */}
      <DevelopmentsSection />

      {/* 04. OUR PHILOSOPHY (Interactive 8 Pillars) */}
      <PhilosophyInteractive />

      {/* 05. THE STTHIRA DIFFERENCE */}
      <section className="py-24 sm:py-32 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-3 font-sans">
              Structural Excellence
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-none">
              THE STTHIRA DIFFERENCE
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-sans mt-4 leading-relaxed font-light">
              We engineer plotted communities as institutional assets. Here is how our standards diverge from standard commercial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-black stroke-[1.2]" />
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                Forensic Title Purity
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light">
                A 30-year unencumbered legal audit conducted by senior tier-one advocates. Absolute transparency in statutory approvals and cadastral survey matching.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="w-8 h-8 text-black stroke-[1.2]" />
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                100% Underground Grid
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light">
                Zero overhead power cables or telecommunication wires. High-grade dual plumbing, storm drainage, and optical fiber conduits laid beneath grade.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Trees className="w-8 h-8 text-black stroke-[1.2]" />
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                Native Biophilic Canopy
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light">
                Over 45% of total acreage preserved for indigenous trees, sensory pocket parks, and permeable stone promenade pavements that recharge groundwater.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <Compass className="w-8 h-8 text-black stroke-[1.2]" />
              <h3 className="font-editorial text-2xl uppercase tracking-wider text-black">
                Architectural Guidelines
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light">
                Comprehensive structural covenants ensure uniform luxury aesthetics, setback discipline, and harmonious intergenerational neighborhood value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. LEADERSHIP PROFILE: LOKESH MUDHALIAR */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Leadership Portrait */}
            <div className="lg:col-span-5 bg-neutral-950 p-8 sm:p-10 border border-neutral-800 text-white space-y-6">
              <div className="relative aspect-[3/4] w-full bg-neutral-900 border border-neutral-800 overflow-hidden">
                <Image
                  src="/images/director-lokesh.jpg"
                  alt={`${LEADERSHIP_INFO.director} — ${LEADERSHIP_INFO.title}`}
                  fill
                  className="object-cover object-top grayscale contrast-110"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-editorial text-2xl uppercase tracking-wider text-white">
                  {t("leadership.name", LEADERSHIP_INFO.director)}
                </h3>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-neutral-400">
                  {t("leadership.directors", LEADERSHIP_INFO.title)} • STTHIRA
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Corporate Entity:</span>
                  <span className="text-white">STTHIRA Developments Pvt Ltd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Jurisdiction:</span>
                  <span className="text-white">Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <p className="text-neutral-400 text-xs font-sans leading-relaxed font-light italic">
                Leading STTHIRA&apos;s institutional land acquisitions, statutory RERA compliance, and international architectural aesthetics.
              </p>
            </div>

            {/* Leadership Message & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans">
                <span className="w-6 h-px bg-neutral-400" />
                <span>{t("leadership.badge", "Board Governance")}</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight text-black font-light leading-tight">
                {t("leadership.title", "LEADERSHIP & STEWARDSHIP")}
              </h2>

              <blockquote className="border-l-2 border-black pl-6 py-2 my-4 text-neutral-800 font-editorial text-xl sm:text-2xl italic leading-relaxed">
                &ldquo;{t("leadership.quote", LEADERSHIP_INFO.quote)}&rdquo;
              </blockquote>

              <div className="space-y-4 text-neutral-600 font-sans text-sm leading-relaxed font-light">
                <p>{LEADERSHIP_INFO.bio[0]}</p>
                <p>{LEADERSHIP_INFO.bio[1]}</p>
              </div>

              {/* Fiduciary Pillars */}
              <div className="pt-2">
                <h5 className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-sans mb-3">
                  Executive Governance Commitments
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-700">
                  {LEADERSHIP_INFO.governanceCommitments.map((gov) => (
                    <div key={gov} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{gov}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-800 transition-colors"
                >
                  <span>{t("leadership.viewGovernance", "Read Corporate Profile")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PARTNERSHIP: STTHIRA | ROVERA | AKSHARA */}
      <PartnershipBanner />

      {/* 07. ARCHITECTURAL GALLERY PREVIEW */}
      <section className="py-24 sm:py-32 bg-black text-white border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-10 mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 block mb-2 font-sans">
                Visual Curation
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
                ARCHITECTURAL ARCHIVES
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors"
            >
              <span>View Full Gallery ({rovera.galleryImages.length} Plates)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <GalleryView images={galleryPreview} showFilters={false} />
        </div>
      </section>

      {/* 08. MONUMENTAL BRAND STATEMENT */}
      <section className="py-32 sm:py-40 bg-neutral-950 text-white relative overflow-hidden flex items-center justify-center text-center border-b border-neutral-900">
        <div className="absolute inset-0 opacity-10 bg-subtle-pattern-dark pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-sans block">
            The STTHIRA Manifesto
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[1.05]">
            &ldquo;THE FUTURE IS BUILT <br />
            <span className="italic text-neutral-400 font-light">ON THE VISION OF TODAY.&rdquo;</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm font-sans font-light leading-relaxed">
            Every plot curated by STTHIRA is an enduring testament to architectural discipline, spatial clarity, and intergenerational permanence.
          </p>
        </div>
      </section>

      {/* 09. JOURNAL & EDITORIAL ARTICLES */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-10 mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-2 font-sans">
                {t("journal.badge", "Intellectual Capital")}
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-none">
                {t("journal.title", "JOURNAL & INSIGHTS")}
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black hover:text-neutral-600 transition-colors"
            >
              <span>{t("journal.viewAll", "Explore All Publications")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-black transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-sans">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500 mb-3 font-sans">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-editorial text-xl sm:text-2xl text-black font-medium leading-snug uppercase group-hover:text-neutral-700 transition-colors">
                      <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="mt-3 text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-black group-hover:text-neutral-600 transition-colors"
                  >
                    <span>{t("journal.readMore", "Read Treatise")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 sm:py-32 bg-black text-white border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="border-b border-neutral-800 pb-10 mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 block mb-2 font-sans">
              {t("faq.badge", "Clarity & Verification")}
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight font-light leading-none">
              {t("faq.title", "FREQUENTLY ASKED QUESTIONS")}
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-3 font-light">
              {t(
                "faq.sub",
                "Clear answers regarding STTHIRA corporate governance, ROVERA plotted living, and legal diligence."
              )}
            </p>
          </div>

          <FaqAccordion limit={6} showCategoryTabs={true} theme="dark" />
        </div>
      </section>

      {/* 11. ENQUIRY SECTION */}
      <section id="enquiry" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block">
                {t("form.badge", "Private Advisory Concierge")}
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl uppercase tracking-tight text-black font-light leading-[1.05]">
                {t("form.headline", "LET'S BEGIN A CONVERSATION.")}
              </h2>

              <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                {t(
                  "form.subDesc",
                  "Whether you seek private consultation regarding ROVERA plot configurations, wish to schedule a chauffeured site walkthrough, or are evaluating corporate partnership opportunities with STTHIRA, our relationship directors are at your service."
                )}
              </p>

              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-4">
                <div className="flex items-center gap-3">
                  <StthiraEmblem className="text-black w-6 h-7 shrink-0" />
                  <div>
                    <span className="font-editorial text-lg uppercase text-black font-medium block">
                      Direct Advisory Line
                    </span>
                    <span className="text-xs font-mono text-neutral-500">+91 80 4567 8900</span>
                  </div>
                </div>
                <p className="text-neutral-500 text-xs font-sans leading-relaxed">
                  Confidential document reviews and plot allotment priority registrations conducted under non-disclosure.
                </p>
              </div>
            </div>

            {/* Right Form Component */}
            <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-8 sm:p-12 shadow-sm">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
