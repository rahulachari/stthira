"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("stthira_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("stthira_cookie_consent", "all");
    setShow(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("stthira_cookie_consent", "essential");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-black/95 border border-neutral-800 p-6 shadow-2xl backdrop-blur-md text-white">
      <div className="flex items-start gap-3 mb-3">
        <ShieldCheck className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
            Privacy & Architectural Cookies
          </h4>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-1">
            STTHIRA uses essential cookies and anonymized telemetry to ensure optimal performance, security, and responsive editorial presentation under the Digital Personal Data Protection Act.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-neutral-900 gap-3 text-[11px] uppercase tracking-wider font-sans">
        <Link
          href="/legal/cookies"
          className="text-neutral-400 hover:text-white underline"
        >
          Preferences
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={acceptEssential}
            className="px-3 py-1.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-1.5 bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

