"use client";

import { useState, useEffect } from "react";
import { Check, Loader2, ArrowRight, Calendar, PhoneCall, Send } from "lucide-react";

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
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all ${
            enquiryType === "General Enquiry"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <Send className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Enquiry</span>
        </button>
        <button
          type="button"
          onClick={() => setEnquiryType("Request Callback")}
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all ${
            enquiryType === "Request Callback"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Callback</span>
        </button>
        <button
          type="button"
          onClick={() => setEnquiryType("Schedule Site Visit")}
          className={`py-3 px-2 flex items-center justify-center gap-1.5 transition-all ${
            enquiryType === "Schedule Site Visit"
              ? "bg-white text-black font-medium"
              : "text-neutral-400 hover:text-white bg-neutral-900/50"
          }`}
        >
          <Calendar className="w-3.5 h-3.5 hidden sm:inline" />
          <span>Site Visit</span>
        </button>
      </div>

      {status === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 border border-white mx-auto flex items-center justify-center bg-white/5">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-wide">
            Your Request Has Been Received
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Thank you for your interest in STTHIRA. An executive relationship manager has been assigned to your dossier (Ref:{" "}
            <span className="text-white font-mono">{enquiryId}</span>) and will reach out to schedule your private consultation.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus("idle");
                setFullName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
              className="text-xs uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-neutral-400 transition-colors"
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
                Full Legal Name *
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
                Email Address *
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
                Contact Phone / WhatsApp *
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
                Development of Interest
              </label>
              <select
                value={interestedDevelopment}
                onChange={(e) => setInterestedDevelopment(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="ROVERA">ROVERA — Luxury Plotted Living (Bengaluru)</option>
                <option value="TERRA">TERRA — Eco-Sanctuary Estates (Nandi Foothills)</option>
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
                  <option value="">Select Time Window</option>
                  <option value="Morning (10:00 AM – 12:00 PM)">Morning (10:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (01:00 PM – 03:00 PM)">Afternoon (01:00 PM – 03:00 PM)</option>
                  <option value="Late Afternoon (04:00 PM – 06:00 PM)">Late Afternoon (04:00 PM – 06:00 PM)</option>
                </select>
              </div>
            </div>
          )}

          {/* Conditional Callback Slot */}
          {enquiryType === "Request Callback" && (
            <div className="p-4 bg-neutral-900/60 border border-neutral-800">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
                Convenient Callback Hours
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="Anytime during business hours (9:30 AM – 6:30 PM)">Anytime during business hours</option>
                <option value="Morning (9:30 AM – 12:00 PM)">Morning (9:30 AM – 12:00 PM)</option>
                <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                <option value="Evening (4:00 PM – 6:30 PM)">Evening (4:00 PM – 6:30 PM)</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Specific Inquiries or Requirements
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Inquiring regarding plot dimensions, vastu orientation, or scheduling a chauffeured site inspection..."
              className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="privacyConsent"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded-none accent-white bg-neutral-900 border-neutral-700"
            />
            <label htmlFor="privacyConsent" className="text-xs text-neutral-400 font-sans leading-relaxed">
              I authorize STTHIRA Developments and its accredited relationship partners to contact me via phone, email, or WhatsApp regarding project updates, architectural documentation, and scheduled viewings. I have read and agree to the{" "}
              <a href="/legal/privacy-policy" target="_blank" className="text-white underline hover:text-neutral-300">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-black font-sans text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting To Advisory Desk...</span>
              </>
            ) : (
              <>
                <span>
                  {enquiryType === "General Enquiry" && "Submit Formal Enquiry"}
                  {enquiryType === "Request Callback" && "Request Priority Callback"}
                  {enquiryType === "Schedule Site Visit" && "Confirm Site Visit Dossier"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
