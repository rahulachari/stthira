import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Website Disclaimer — STTHIRA Developments",
  description:
    "Official corporate website disclaimer for STTHIRA Developments Private Limited.",
};

export default function WebsiteDisclaimerPage() {
  return (
    <div className="bg-white text-neutral-900 pt-24">
      <section className="bg-black text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Main Platform</span>
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block mb-2">
            Legal Disclosures
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            WEBSITE DISCLAIMER
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            STTHIRA Developments Private Limited • Established 2026
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            CONCEPTUAL REPRESENTATIONS &amp; ARTISTIC VISUALISATIONS
          </h2>
          <p>
            The photographic renders, drone visualisations, walkthrough videos, landscape schematics, architectural sketches, floor plans, and layout designs portrayed across this website are artistic impressions created for conceptual illustration purposes.
          </p>
          <p>
            They do not constitute a legal guarantee or representation of final built reality. Actual finishes, dimensions, plant species, road widths, landscaping elevations, and amenities are subject to engineering adjustments and final sanction by competent statutory development authorities.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            NO FINANCIAL OR INVESTMENT ADVICE
          </h2>
          <p>
            Nothing published on this website, including editorial essays, capital compounding analyses, market reports, or price guidance, constitutes financial, tax, or investment advice. Real estate values and land appreciation are subject to macroeconomic cycles, demographic shifts, and regional infrastructure developments. Potential land purchasers and investors are strongly advised to perform independent due diligence with certified legal and financial advisors.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            LIMITATION OF LIABILITY
          </h2>
          <p>
            Under no circumstances shall STTHIRA, its Board of Directors, executive officers, employees, or accredited marketing partners be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from reliance on the informational content published on this portal.
          </p>
        </div>
      </section>
    </div>
  );
}

