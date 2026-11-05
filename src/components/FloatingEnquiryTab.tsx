"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import { MessageSquare } from "lucide-react";

export default function FloatingEnquiryTab() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Assetz-Style Fixed Vertical Tab on Right Viewport Edge */}
      <aside aria-label="Quick Enquiry" className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Open enquiry form"
          className="group flex items-center gap-2 bg-black text-white px-3 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold rotate-180 [writing-mode:vertical-rl] rounded-l-md hover:bg-neutral-800 shadow-2xl transition-all duration-300 border-l border-y border-neutral-700/60 cursor-pointer select-none"
        >
          <span className="group-hover:tracking-[0.3em] transition-all">Enquire Now</span>
          <MessageSquare className="w-3.5 h-3.5 rotate-90 text-neutral-400 group-hover:text-white transition-colors" />
        </button>
      </aside>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName="ROVERA (North Bengaluru)"
      />
    </>
  );
}
