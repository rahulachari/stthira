"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDevelopment?: string;
  initialType?: "General Enquiry" | "Request Callback" | "Schedule Site Visit";
}

export default function EnquiryModal({
  isOpen,
  onClose,
  initialDevelopment = "ROVERA",
  initialType = "General Enquiry",
}: EnquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-neutral-950 border border-neutral-800 w-full max-w-2xl z-10 my-8 shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-black">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block">
              STTHIRA Advisory Desk
            </span>
            <h3 className="font-editorial text-2xl text-white font-medium uppercase tracking-wider">
              Begin A Conversation
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inner Form */}
        <div className="p-2 sm:p-4">
          <EnquiryForm
            defaultDevelopment={initialDevelopment}
            defaultType={initialType}
            onSuccess={() => {
              // auto close or allow reading success message
            }}
          />
        </div>
      </div>
    </div>
  );
}

