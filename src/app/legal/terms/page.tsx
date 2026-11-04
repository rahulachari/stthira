import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Terms & Conditions — Platform Usage & Covenants | STTHIRA",
  description:
    "Official terms and conditions governing the access and use of the STTHIRA luxury real-estate corporate website and digital dossiers.",
};

export default function TermsPage() {
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
            Legal Terms &amp; Conditions
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            TERMS &amp; CONDITIONS OF USE
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            Effective Date: January 2026 • Jurisdiction: Bengaluru, Karnataka, India
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            01. ACCEPTANCE OF COVENANTS
          </h2>
          <p>
            By accessing, browsing, or utilizing the digital platform operated by <strong>STTHIRA Developments Private Limited</strong> (&ldquo;STTHIRA&rdquo;), you acknowledge and agree to be bound by these Terms and Conditions. If you do not consent to these provisions, you are advised to refrain from accessing this portal.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            02. INTELLECTUAL PROPERTY &amp; ARCHITECTURAL ASSETS
          </h2>
          <p>
            All architectural visualisations, renderings, master-plan zoning graphics, photographic plates, typographic compositions, editorial essays, and brand assets displayed on this portal are the exclusive intellectual property of STTHIRA. Unauthorized reproduction, modification, distribution, or commercial exploitation of any asset without prior written authorization from the Board of Directors is strictly prohibited and subject to civil and criminal remedies under the Copyright Act, 1957.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            03. NATURE OF DIGITAL CONTENT
          </h2>
          <p>
            Content presented across this digital portal is designed exclusively for general conceptual orientation. Nothing herein shall constitute a binding offer, contractual warranty, formal allotment, or legal commitment by STTHIRA. Definitive terms and obligations shall be governed exclusively by executed formal Sale and Development Agreements executed under statutory laws.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            04. USER CONDUCT &amp; COMMUNICATION INTEGRITY
          </h2>
          <p>
            Users warrant that all information submitted through enquiry forms, callback requests, and site visit portals is genuine, lawful, and accurate. The submission of false information or automated scraping of content is strictly barred.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            05. GOVERNING LAW &amp; EXCLUSIVE JURISDICTION
          </h2>
          <p>
            These terms are governed by the laws of the Republic of India. Any disputes arising out of the access or use of this website shall be subject to the exclusive jurisdiction of the competent courts of law situated in <strong>Bengaluru, Karnataka, India</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

