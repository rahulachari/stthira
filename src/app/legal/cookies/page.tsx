import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Cookie Policy — Digital Telemetry & Preferences | STTHIRA",
  description:
    "STTHIRA Developments Cookie Policy and telemetry preferences in compliance with Indian IT Act and DPDP guidelines.",
};

export default function CookiePolicyPage() {
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
            Technical Governance
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-tight">
            COOKIE POLICY
          </h1>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-3 uppercase tracking-wider">
            STTHIRA Developments • Version 2026.1
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 sm:px-8 font-sans text-neutral-800 text-sm sm:text-base leading-relaxed font-light space-y-10">
        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            01. WHAT ARE COOKIES?
          </h2>
          <p>
            Cookies are small cryptographic text files placed on your computer, mobile device, or tablet when you browse web platforms. They facilitate smooth session state, security protocols, and responsive editorial layout rendering.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            02. HOW STTHIRA DEPLOYS COOKIES
          </h2>
          <p>STTHIRA utilizes cookies strictly within two transparent classifications:</p>
          <div className="space-y-4 pl-4 border-l-2 border-black">
            <div>
              <strong className="block text-black uppercase tracking-wider text-xs font-semibold">
                Strictly Essential Cookies:
              </strong>
              <p className="text-neutral-600 text-xs sm:text-sm">
                Required for portal security, form anti-CSRF token verification, and navigation state. These cannot be disabled as the platform cannot function securely without them.
              </p>
            </div>
            <div>
              <strong className="block text-black uppercase tracking-wider text-xs font-semibold">
                Performance &amp; Visual Optimization Cookies:
              </strong>
              <p className="text-neutral-600 text-xs sm:text-sm">
                Used to remember your reduced-motion preferences, cinematic video loop settings, and measure aggregate page-load metrics to optimize Core Web Vitals.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            03. NO INVASIVE BEHAVIORAL TRACKING
          </h2>
          <p>
            STTHIRA does not engage third-party tracking pixels, invasive cross-site ad networks, or data brokers. Your browsing habits on STTHIRA remain entirely private.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-editorial text-2xl uppercase tracking-wider text-black font-medium">
            04. MANAGING PREFERENCES
          </h2>
          <p>
            You can modify your browser settings at any time to block or delete cookies. However, disabling essential cookies may impact certain high-performance architectural animation features on our platform.
          </p>
        </div>
      </section>
    </div>
  );
}

