import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions — STTHIRA & ROVERA",
  description:
    "Comprehensive answers regarding STTHIRA corporate governance, ROVERA luxury plotted living, land approvals, RERA compliance, and site visits.",
};

export default function FaqPage() {
  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              Transparency &amp; Diligence
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95] break-words">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              Verified information on corporate identity, land tenure, architectural guidelines, infrastructure, and statutory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Container */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-6 sm:px-8">
        <FaqAccordion showCategoryTabs={true} theme="light" />

        {/* Advisory Concierge Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-neutral-950 text-white border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-1">
              Need Personal Assistance?
            </span>
            <h3 className="font-editorial text-3xl uppercase tracking-wider text-white">
              Speak With A Senior Relationship Manager
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-2 font-light">
              Our legal and relationship advisory desks are available for one-on-one document walkthroughs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors shrink-0"
          >
            <span>Contact Concierge</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

