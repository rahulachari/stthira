"use client";

import DitheredFooter from "@/components/ui/dithered-footer";

export default function DitheredFooterAccentDemo() {
  return (
    <div className="flex min-h-screen flex-col justify-end bg-background">
      <DitheredFooter
        brand="STTHIRA"
        brandHref="/"
        tagline="Elite luxury real-estate developments. Timelessly envisioned, thoughtfully built."
        accent="#e9762b"
        copyright={`© ${new Date().getFullYear()} STTHIRA Developments Private Limited`}
        status={{ label: "All statutory systems compliant", href: "/legal/rera" }}
      />
    </div>
  );
}

