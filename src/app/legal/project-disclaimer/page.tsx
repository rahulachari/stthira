import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO, DEVELOPMENTS } from "@/lib/data";

export const metadata = {
  title: "Project Disclaimer — ROVERA & Developments Portfolio | STTHIRA",
  description:
    "Statutory project disclaimer regarding ROVERA and plotted developments offered by STTHIRA Developments Private Limited.",
};

export default function ProjectDisclaimerPage() {
  const rovera = DEVELOPMENTS[0];

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
            Development Governance
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            PROJECT &amp; MARKETING DISCLAIMER
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            STTHIRA Plotted Developments Portfolio • ROVERA Showcase
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            01. CORPORATE BRAND &amp; PROJECT HIERARCHY
          </h2>
          <p>
            <strong>STTHIRA</strong> ({COMPANY_INFO.legalEntity}) is the primary master development corporate identity. <strong>ROVERA</strong> is an individual luxury plotted development offering executed under the ownership and development parentage of STTHIRA. All communications, marketing dockets, agreements, and corporate governance originate from STTHIRA.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            02. STATUTORY SANCTIONS &amp; SPECIFICATIONS
          </h2>
          <p>
            The project specifications, amenities, road widths, landscaping installations, clubhouse facilities, and plot configurations described for ROVERA reflect the approved master plan and conceptual architectural master guidelines.
          </p>
          <p>
            STTHIRA reserves the statutory prerogative to effect reasonable alterations or modifications as may be directed by statutory competent authorities or architectural consultants during ongoing execution.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            03. NO UNAPPROVED COMMERCIAL SOLICITATION
          </h2>
          <p>
            In unyielding adherence to the Real Estate (Regulation and Development) Act, 2016, no binding property allotments, bookings, or financial consideration will be invited or accepted for any project phase prior to the formal receipt and digital publication of the corresponding RERA registration certificate.
          </p>
          <p>
            This website functions strictly as an architectural portfolio and informational platform for prospective buyers, investors, and corporate partners.
          </p>
        </div>
      </section>
    </div>
  );
}

