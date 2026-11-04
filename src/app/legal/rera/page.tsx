import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, DEVELOPMENTS } from "@/lib/data";

export const metadata = {
  title: "RERA Disclosures & Regulatory Transparency — STTHIRA Developments",
  description:
    "Official Real Estate (Regulation and Development) Act, 2016 disclosures, project registration statuses, and legal transparency by STTHIRA Developments.",
};

export default function ReraDisclosuresPage() {
  const rovera = DEVELOPMENTS[0];

  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
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
            Regulatory Compliance &amp; Disclosure
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            RERA DISCLOSURES &amp; TRANSPARENCY
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            Real Estate (Regulation and Development) Act, 2016 • Karnataka RERA Compliance
          </p>
        </div>
      </section>

      {/* RERA Policy Body */}
      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="bg-neutral-50 border-l-4 border-black p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-black font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Corporate Compliance Statement</span>
          </div>
          <p className="text-neutral-700 text-sm leading-relaxed">
            STTHIRA Developments Private Limited operates in strict and unyielding accordance with the provisions of the <strong>Real Estate (Regulation and Development) Act, 2016 (RERA)</strong>, the Karnataka Real Estate (Regulation and Development) Rules, 2017, and all applicable municipal planning regulations.
          </p>
        </div>

        {/* Project By Project Regulatory Audit Table */}
        <div className="space-y-6">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            PROJECT REGULATORY DOSSIER: ROVERA
          </h2>
          <div className="border border-neutral-200 divide-y divide-neutral-200 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-neutral-100 font-medium text-black">
              <span>Regulatory Parameter</span>
              <span className="sm:col-span-2">Official Verified Status</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Master Brand</span>
              <span className="sm:col-span-2 text-black font-medium">{rovera.brand} ({COMPANY_INFO.legalEntity})</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Development Offering</span>
              <span className="sm:col-span-2 text-black font-medium">{rovera.name}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Development Type</span>
              <span className="sm:col-span-2 text-black">{rovera.category} Luxury Plotted Development</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Location</span>
              <span className="sm:col-span-2 text-black">{rovera.location}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">RERA Registration Status</span>
              <span className="sm:col-span-2 text-black font-semibold">{rovera.reraStatus}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">RERA Registration No.</span>
              <span className="sm:col-span-2 text-neutral-600">
                Statutory dossier submitted to the regulatory authority. Official registration certificate details will be prominently displayed on this page upon formal issuance, in compliance with Section 3 &amp; 11 of the Act.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Statutory Solicitations</span>
              <span className="sm:col-span-2 text-neutral-600">
                No bookings, financial advances, or binding allotments are accepted prior to RERA registration. This portal serves strictly for conceptual architectural review and customer interest registration.
              </span>
            </div>
          </div>
        </div>

        {/* Due Diligence Review Instructions */}
        <div className="space-y-4 border-t border-neutral-200 pt-8">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            HOW BUYERS CAN VERIFY DOCUMENTATION
          </h2>
          <p>
            STTHIRA encourages every prospective landowner to conduct comprehensive due diligence. We maintain a transparent physical and digital legal repository at our Bengaluru corporate headquarters. Prospective patrons are invited to review:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span>30-Year Chain of Title Deeds &amp; Non-Encumbrance Certificates</span>
            </div>
            <div className="p-4 border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span>Revenue Land Conversion Sanctions &amp; Survey Mutation Extracts</span>
            </div>
            <div className="p-4 border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span>Competent Planning Authority Master Layout Sanction Files</span>
            </div>
            <div className="p-4 border border-neutral-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span>Civil Engineering Approvals for Underground Utilities</span>
            </div>
          </div>
        </div>

        {/* RERA Official Portal Link Notice */}
        <div className="p-6 bg-neutral-100 border border-neutral-300 text-xs text-neutral-700 space-y-2">
          <p className="font-medium text-black uppercase tracking-wider">
            Official Regulatory Verification:
          </p>
          <p>
            Prospective buyers can access official statutory filings on the Karnataka Real Estate Regulatory Authority portal at{" "}
            <a
              href="https://rera.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline font-medium hover:text-neutral-600"
            >
              https://rera.karnataka.gov.in
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

