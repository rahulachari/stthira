import { MapPin, Phone, Mail, MessageSquare, Clock, Globe } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { COMPANY_INFO } from "@/lib/data";

export const metadata = {
  title: "Contact STTHIRA — Corporate Headquarters & Private Concierge",
  description:
    "Contact STTHIRA Developments. Schedule a private site visit to ROVERA, request a confidential callback, or reach our corporate secretariat in Bengaluru.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              Private Client Concierge
            </span>
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95]">
              CONNECT WITH STTHIRA
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              Initiate a confidential conversation with our relationship directors, arrange an escorted site inspection, or visit our corporate headquarters.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Corporate Information & Office Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
                Central Corporate Registry
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-black">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-neutral-500 font-sans mt-1">
                {COMPANY_INFO.legalEntity} • Est. {COMPANY_INFO.foundationYear}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 border-y border-neutral-200 py-8 text-sm font-sans">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-medium text-xs uppercase tracking-wider mb-1">
                    Corporate Headquarters
                  </strong>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-medium text-xs uppercase tracking-wider mb-1">
                    Direct Telephone
                  </strong>
                  <p className="text-neutral-600 font-light">
                    Central Exchange:{" "}
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline text-black">
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                  <p className="text-neutral-600 font-light mt-0.5">
                    Sales Concierge:{" "}
                    <a href={`tel:${COMPANY_INFO.salesPhone}`} className="hover:underline text-black font-medium">
                      {COMPANY_INFO.salesPhone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-medium text-xs uppercase tracking-wider mb-1">
                    Electronic Mail
                  </strong>
                  <p className="text-neutral-600 font-light">
                    Patron Enquiries:{" "}
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-black">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-neutral-600 font-light mt-0.5">
                    Board Secretariat:{" "}
                    <a href={`mailto:${COMPANY_INFO.corporateEmail}`} className="hover:underline text-black">
                      {COMPANY_INFO.corporateEmail}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageSquare className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-medium text-xs uppercase tracking-wider mb-1">
                    Instant WhatsApp Concierge
                  </strong>
                  <p className="text-neutral-600 font-light">
                    Direct executive messaging:{" "}
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-black font-medium"
                    >
                      Connect on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-medium text-xs uppercase tracking-wider mb-1">
                    Concierge Hours
                  </strong>
                  <p className="text-neutral-600 font-light">
                    {COMPANY_INFO.operatingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="border border-neutral-300 bg-neutral-100 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-neutral-500 font-sans">
                <span>Headquarters Location Map</span>
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="relative aspect-[16/9] bg-neutral-900 border border-neutral-300 overflow-hidden">
                <iframe
                  title="STTHIRA Corporate Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.896752003714!2d77.58782337583685!3d12.978434914725354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16719b165215%3A0xe5419409ee61a6b4!2sPrestige%20Trade%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[11px] text-neutral-500 font-sans">
                Located near Bangalore Golf Club &amp; Vidhana Soudha with dedicated valet parking.
              </p>
            </div>
          </div>

          {/* Right Column: Full Interactive Multi-Type Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-sans block mb-2">
                Electronic Transmission
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl uppercase tracking-wider text-black">
                TRANSMIT YOUR DOSSIER
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm font-sans mt-2 font-light">
                Please complete your details. Select whether you require general project particulars, a prioritised executive callback, or an escorted private site inspection.
              </p>
            </div>

            <EnquiryForm defaultDevelopment="ROVERA" />
          </div>
        </div>
      </section>
    </div>
  );
}

