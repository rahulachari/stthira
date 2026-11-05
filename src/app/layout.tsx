import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";
import CinematicOpeningReveal from "@/components/CinematicOpeningReveal";
import FloatingEnquiryTab from "@/components/FloatingEnquiryTab";
import ScrollToHeroSling from "@/components/ScrollToHeroSling";
import { LanguageProvider } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stthira.com"),
  title: {
    default: "STTHIRA — Elite Luxury Real Estate & Plotted Developments | Building a Legacy",
    template: "%s | STTHIRA Luxury Real Estate",
  },
  description:
    "STTHIRA is an international-standard luxury real-estate development enterprise in India (Est. 2026). Curating generational plotted living communities including ROVERA. Thoughtfully built. Timelessly envisioned.",
  keywords: [
    "STTHIRA",
    "STTHIRA Developments",
    "ROVERA",
    "Luxury Plotted Development India",
    "Bengaluru Luxury Plots",
    "Lokesh Mudhaliar",
    "Architectural Real Estate",
    "High-Net-Worth Residential Land",
    "Master-Planned Communities",
    "Gated Plotted Enclave",
  ],
  authors: [{ name: "STTHIRA Developments Private Limited" }],
  creator: "STTHIRA",
  publisher: "STTHIRA",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/images/stthira-logo-white.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stthira.com",
    title: "STTHIRA — Building a Legacy. Shaping Tomorrow.",
    description: "International-standard luxury plotted developments in India. Thoughtfully built. Timelessly envisioned.",
    siteName: "STTHIRA",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1600,
        height: 900,
        alt: "STTHIRA Monumental Entrance Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STTHIRA — Luxury Real Estate Development",
    description: "Thoughtfully built. Timelessly envisioned. Discover ROVERA and the STTHIRA portfolio.",
    images: ["/images/hero-cinematic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "STTHIRA Developments",
    alternateName: "STTHIRA",
    url: "https://stthira.com",
    logo: "https://stthira.com/images/hero-cinematic.jpg",
    description:
      "Elite luxury real-estate development company in India specializing in institutional-grade plotted residential communities.",
    foundingDate: "2026",
    founder: {
      "@type": "Person",
      name: COMPANY_INFO.director,
      jobTitle: COMPANY_INFO.directorTitle,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 14, Prestige Trade Tower, Palace Road, High Grounds",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased selection:bg-black selection:text-white overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full w-full max-w-full flex flex-col bg-white text-neutral-900 font-sans-clean overflow-x-hidden">
        <LanguageProvider>
          <CinematicOpeningReveal>
            <SmoothScroll>
              <Header />
              <FloatingEnquiryTab />
              <ScrollToHeroSling />
              <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
              <Footer />
              <CookieBanner />
            </SmoothScroll>
          </CinematicOpeningReveal>
        </LanguageProvider>
      </body>
    </html>
  );
}
