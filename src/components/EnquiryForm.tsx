"use client";

import { useState, useEffect } from "react";
import { Check, Loader2, ArrowRight, Calendar, PhoneCall, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface EnquiryFormProps {
  defaultDevelopment?: string;
  defaultType?: "General Enquiry" | "Request Callback" | "Schedule Site Visit";
  onSuccess?: () => void;
  className?: string;
}

export default function EnquiryForm({
  defaultDevelopment = "ROVERA",
  defaultType = "General Enquiry",
  onSuccess,
  className = "",
}: EnquiryFormProps) {
  const { t } = useLanguage();
  const [enquiryType, setEnquiryType] = useState<"General Enquiry" | "Request Callback" | "Schedule Site Visit">(defaultType);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interestedDevelopment, setInterestedDevelopment] = useState(defaultDevelopment);
  const [visitDate, setVisitDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [enquiryId, setEnquiryId] = useState("");
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) {
      setErrorMessage("Please accept the privacy policy to submit your enquiry.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          interestedDevelopment,
          enquiryType,
          visitDate: enquiryType === "Schedule Site Visit" ? visitDate : undefined,
          preferredTime: enquiryType !== "General Enquiry" ? preferredTime : undefined,
          message,
          privacyConsent,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setEnquiryId(data.enquiryId || "CONFIRMED");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission failed. Please check your information.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to connect to STTHIRA servers. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-neutral-950 text-white border border-neutral-800 p-6 sm:p-10 ${className}`}>
      {/* Type Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 border-b border-neutral-800 pb-6 mb-8 text-xs uppercase tracking-widest font-sans">
        <button
          type="button"
          onClick={() => setEnquiryType("General Enquiry")}
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            enquiryType === "General Enquiry"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <Send className="w-3.5 h-3.5 hidden sm:inline" />
          <span>{t("form.enquiry", "Enquiry")}</span>
        </button>
        <button
          type="button"
          onClick={() => setEnquiryType("Request Callback")}
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            enquiryType === "Request Callback"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 hidden sm:inline" />
          <span>{t("form.callback", "Callback")}</span>
        </button>
        <button
          type="button"
          onClick={() => setEnquiryType("Schedule Site Visit")}
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            enquiryType === "Schedule Site Visit"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 hidden sm:inline" />
          <span>{t("form.sitevisit", "Site Visit")}</span>
        </button>
      </div>

      {status === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 border border-white mx-auto flex items-center justify-center bg-white/5">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-wide">
            {t("form.successTitle", "Your Request Has Been Received")}
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto font-sans leading-relaxed">
            {t(
              "form.successSub",
              "Thank you for your interest in STTHIRA. An executive relationship manager has been assigned to your dossier and will reach out to schedule your private consultation."
            )}{" "}
            (Ref: <span className="text-white font-mono">{enquiryId}</span>)
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFullName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
              className="text-xs uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-neutral-400 transition-colors cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-3 bg-red-950/40 border border-red-900/60 text-xs text-red-200">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                {t("form.fullname", "Full Legal Name *")}
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Vikramaditya Singhania"
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                {t("form.email", "Email Address *")}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="corporate.email@domain.com"
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                {t("form.phone", "Contact Phone / WhatsApp *")}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98XXX XXXXX"
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Interested Development */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                {t("form.dev", "Development of Interest")}
              </label>
              <select
                value={interestedDevelopment}
                onChange={(e) => setInterestedDevelopment(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="ROVERA">ROVERA — Luxury Plotted Living (North Bengaluru)</option>
                <option value="TERRA">STTHIRA TERRA — Eco-Sanctuary (Nandi Foothills)</option>
                <option value="AKSHARA">AKSHARA — Strategic Land Alliance</option>
                <option value="STTHIRA General Portfolio">STTHIRA — General Corporate Portfolio</option>
              </select>
            </div>
          </div>

          {/* Conditional Site Visit Date & Time Pickers */}
          {enquiryType === "Schedule Site Visit" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-neutral-900/60 border border-neutral-800">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                  Preferred Visit Date *
                </label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  min={minDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Morning">Morning (10:00 AM – 1:00 PM)</option>
                  <option value="Afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Sunset">Sunset Walkthrough (4:00 PM – 6:30 PM)</option>
                </select>
              </div>
            </div>
          )}

          {/* Message / Special Requirements */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              {t("form.notes", "Private Consultation Notes")}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Specify requirements: plot dimensions (1500 / 2400 / 4000+ sq ft), chauffeured pickup, or investment horizon..."
              className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded-none bg-neutral-900 border-neutral-700 text-white focus:ring-0 focus:ring-offset-0 cursor-pointer"
            />
            <label htmlFor="privacyConsent" className="text-xs text-neutral-400 font-sans leading-relaxed cursor-pointer">
              {t("form.consent", "I authorize STTHIRA and its relationship team to contact me via phone, email, or WhatsApp.")}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t("form.submitting", "Registering Request...")}</span>
              </>
            ) : (
              <>
                <span>{t("form.submit", "Submit Formal Enquiry")}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
