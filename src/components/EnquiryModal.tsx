"use client";

import { useState, useEffect } from "react";
import { X, User, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
  initialDevelopment?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  projectName,
  initialDevelopment,
}: EnquiryModalProps) {
  const activeProject = projectName || initialDevelopment || "ROVERA (North Bengaluru)";
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setStatus("idle");
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactNo.trim()) {
      setErrorMsg("Please enter your contact number.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setErrorMsg("Please agree to the contact consent to proceed.");
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
          phone: contactNo,
          email: email || undefined,
          interestedDevelopment: activeProject,
          privacyConsent: consent,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        const msg = `Hello STTHIRA, I would like to enquire about ${activeProject}.\nName: ${name || "Prospective Buyer"}\nPhone: ${contactNo}${email ? `\nEmail: ${email}` : ""}`;
        const waLink = `https://wa.me/917013485016?text=${encodeURIComponent(msg)}`;
        setWhatsappUrl(waLink);
        window.open(waLink, "_blank");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Submission could not be completed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Blurred Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Assetz-Style Clean White Modal Container */}
      <div className="relative bg-white text-neutral-900 rounded-lg shadow-2xl w-full max-w-md p-6 sm:p-8 z-10 my-8 border border-neutral-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-1 text-neutral-400 hover:text-black transition-colors rounded-full hover:bg-neutral-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">
              Redirecting to WhatsApp...
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Thank you for your enquiry. We are opening WhatsApp to connect directly with our relationship desk.
            </p>
            <div className="pt-3 space-y-2">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1E3A8A] text-white py-3 px-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#0F2744] transition-colors rounded block text-center shadow-sm"
                >
                  Continue to WhatsApp &rarr;
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-neutral-100 text-neutral-700 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                Enquire Now
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Direct advisory for {activeProject}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                {errorMsg}
              </div>
            )}

            {/* 3 Clean Fields Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full pl-10 pr-3 py-3 bg-white border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>

              {/* Field 2: Contact No * */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  type="tel"
                  required
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  placeholder="Contact No *"
                  className="w-full pl-10 pr-3 py-3 bg-white border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>

              {/* Field 3: Email */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-3 bg-white border border-neutral-300 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="modalConsent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-black border-neutral-300 rounded focus:ring-black cursor-pointer"
                />
                <label
                  htmlFor="modalConsent"
                  className="text-[11px] leading-snug text-neutral-500 cursor-pointer select-none"
                >
                  I agree to be contacted through SMS, RCS, Email, Phone and other communication channels for knowing further details.
                </label>
              </div>

              {/* Big Solid Black Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-black text-white py-3.5 px-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>SUBMIT</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
