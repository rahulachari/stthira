import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy — Data Protection & Consent | STTHIRA",
  description:
    "STTHIRA Developments Privacy Policy in compliance with India's Digital Personal Data Protection Act, 2023 (DPDP Act).",
};

export default function PrivacyPolicyPage() {
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
            Statutory Compliance Dossier
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            PRIVACY POLICY &amp; DATA GOVERNANCE
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            Effective Date: January 1, 2026 • Last Reviewed: November 2026
          </p>
        </div>
      </section>

      {/* Legal Text Body */}
      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            01. INTRODUCTION &amp; FIDUCIARY COMMITMENT
          </h2>
          <p>
            This Privacy Policy sets out the principles and operational protocols by which <strong>STTHIRA Developments Private Limited</strong> (hereinafter referred to as &ldquo;STTHIRA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, manages, processes, stores, and protects the personal data of patrons, investors, prospective land purchasers, and portal visitors.
          </p>
          <p>
            STTHIRA operates with an unyielding commitment to confidentiality. We treat all client communications and personal data in strict alignment with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India, the Information Technology Act, 2000, and corresponding statutory data fiduciary obligations.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            02. CATEGORIES OF PERSONAL DATA PROCESSED
          </h2>
          <p>When you interact with STTHIRA—whether by submitting an electronic enquiry, requesting an architectural brochure, scheduling a chauffeured site visit to ROVERA, or engaging with our relationship directors—we may collect:</p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Identity &amp; Contact Data:</strong> Full legal name, residential address, telephone/WhatsApp contact details, and electronic mail addresses.</li>
            <li><strong>Real Estate Interest Preferences:</strong> Intended development parcel category, preferred plot dimensions (e.g., Executive, Signature, or Master Estate), investment horizon, and scheduling requirements.</li>
            <li><strong>Technical Telemetry:</strong> Anonymized Internet Protocol (IP) addresses, browser type, device specifications, and page navigation patterns collected through essential performance cookies.</li>
            <li><strong>Statutory Verification Records:</strong> Permanent Account Number (PAN), Aadhaar, or passport documentation where required strictly for KYC compliance prior to statutory property agreements.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            03. PURPOSE &amp; LAWFUL BASIS OF DATA PROCESSING
          </h2>
          <p>We process your personal information strictly for legitimate commercial and regulatory objectives:</p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>Facilitating requested project dossiers, master plans, and price guidelines.</li>
            <li>Coordinating escorted, private on-site inspections of plotted developments.</li>
            <li>Maintaining regulatory compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA) and municipal land sanction registries.</li>
            <li>Transmitting curated editorial publications, architectural monographs, and corporate milestones where explicit consent has been provided.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            04. PROHIBITION OF COMMERCIAL DATA DISCLOSURE
          </h2>
          <p>
            STTHIRA maintains an absolute prohibition on the sale, rental, or unauthorized dissemination of client data. We never monetize customer contact details with third-party advertising syndicates, bulk brokers, or lead aggregators.
          </p>
          <p>
            Disclosures occur exclusively to: (i) our accredited in-house relationship teams; (ii) empanelled tier-one legal advocates performing title execution; and (iii) competent statutory courts or government regulatory bodies where mandated under applicable Indian law.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            05. DATA STORAGE, ENCRYPTION &amp; RETENTION
          </h2>
          <p>
            All electronic data transmissions across STTHIRA web platforms are secured with 256-bit Transport Layer Security (TLS) encryption. Customer dossiers are stored within certified institutional data centers located within the territorial borders of India in compliance with statutory data localization principles. Data is retained only for the duration necessary to satisfy corporate, taxation, and statutory property audit requirements.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            06. DATA PRINCIPAL RIGHTS
          </h2>
          <p>Under the DPDP Act, you retain sovereign rights as a Data Principal, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Right to Access:</strong> Request a comprehensive summary of personal data held by STTHIRA.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated data.</li>
            <li><strong>Right to Erasure:</strong> Request the secure purge of your personal details, subject to statutory record-retention laws.</li>
            <li><strong>Right to Withdraw Consent:</strong> Revoke consent for promotional newsletters or advisory communications at any time.</li>
          </ul>
        </div>

        <div className="space-y-4 border-t border-neutral-200 pt-8">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            07. GRIEVANCE REDRESSAL OFFICER
          </h2>
          <p>
            For any inquiries, requests for data erasure, or grievances under the DPDP Act, please address correspondence to our designated Data Protection &amp; Compliance Officer:
          </p>
          <div className="p-6 bg-neutral-100 border border-neutral-200 text-xs sm:text-sm font-sans space-y-1">
            <p><strong>Compliance Officer:</strong> Legal Secretariat &amp; Grievance Redressal</p>
            <p><strong>Corporate Entity:</strong> {COMPANY_INFO.legalEntity}</p>
            <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
            <p><strong>Direct Email:</strong> legal@stthira.com / corporate@stthira.com</p>
            <p><strong>Phone:</strong> {COMPANY_INFO.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

