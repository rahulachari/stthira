"use client";

import { useState } from "react";
import { User, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface EnquiryFormProps {
  defaultDevelopment?: string;
  defaultType?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function EnquiryForm({
  defaultDevelopment = "ROVERA (North Bengaluru)",
  defaultType,
  onSuccess,
  className = "",
}: EnquiryFormProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setErrorMsg("Please enter your contact number.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setErrorMsg("Please accept the communication consent to proceed.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name || "Prospective Buyer",
          phone: phone.trim(),
          email: email.trim() || undefined,
          interestedDevelopment: defaultDevelopment,
          privacyConsent: consent,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        const msg = `Hello STTHIRA, I would like to enquire about ${defaultDevelopment || "STTHIRA Developments"}.\nName: ${name || "Prospective Buyer"}\nPhone: ${phone.trim()}${email.trim() ? `\nEmail: ${email.trim()}` : ""}`;
        const waLink = `https://wa.me/917013485016?text=${encodeURIComponent(msg)}`;
        window.open(waLink, "_blank");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please check your information.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-white text-neutral-900 border border-neutral-200 rounded-lg p-8 sm:p-10 text-center space-y-4 shadow-sm ${className}`}>
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">
          {t("form.successTitle", "Enquiry Registered Successfully")}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
          {t(
            "form.successSub",
            "Thank you for your interest in STTHIRA. Our senior relationship manager will connect with you shortly."
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setPhone("");
            setEmail("");
          }}
          className="text-xs uppercase tracking-widest font-semibold border-b border-black pb-1 hover:text-neutral-600 transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white text-neutral-900 border border-neutral-200 rounded-lg p-6 sm:p-10 shadow-sm ${className}`}>
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-sans block mb-1">
          {t("form.badge", "Direct Concierge Advisory")}
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
          {t("form.enquiry", "Enquire Now")}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Instant callback &amp; site visit arrangement for {defaultDevelopment}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Field 1: Name */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <User className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("form.fullname", "Name")}
            className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Field 2: Contact No * */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <Phone className="w-4 h-4" />
          </span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("form.phone", "Contact No *")}
            className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Field 3: Email */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("form.email", "Email")}
            className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black transition-all"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1 flex items-start gap-2.5">
          <input
            type="checkbox"
            id="inlineConsent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-black border-neutral-300 rounded focus:ring-black cursor-pointer"
          />
          <label
            htmlFor="inlineConsent"
            className="text-[11px] leading-snug text-neutral-500 cursor-pointer select-none"
          >
            {t(
              "form.consent",
              "I agree to be contacted through SMS, RCS, Email, Phone and other communication channels for knowing further details."
            )}
          </label>
        </div>

        {/* Big Solid Black Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-black text-white py-4 px-6 rounded font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t("form.submitting", "Submitting...")}</span>
            </>
          ) : (
            <span>{t("form.submit", "SUBMIT")}</span>
          )}
        </button>
      </form>
    </div>
  );
}
