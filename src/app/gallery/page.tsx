import { DEVELOPMENTS } from "@/lib/data";
import GalleryView from "@/components/GalleryView";

export const metadata = {
  title: "Architectural Gallery — Monochromatic Luxury Visuals | STTHIRA",
  description:
    "Explore the architectural visual archives of STTHIRA and ROVERA. Monochromatic luxury photography showcasing monolithic geometry, landscape planning, and master-planned terrain.",
};

export default function GalleryPage() {
  const rovera = DEVELOPMENTS[0];
  const allImages = [
    ...rovera.galleryImages,
    { url: "/images/hero-cinematic.jpg", title: "Cinematic Gatehouse Perspective", category: "Architecture" },
    { url: "/images/brand-story.jpg", title: "Sculptural Monolith Cantilever", category: "Architecture" },
    { url: "/images/director-lokesh.jpg", title: "Executive Governance Portrait", category: "Leadership" },
    { url: "/images/footer-dark.jpg", title: "Basalt & Cast-In-Place Concrete Geometry", category: "Details" },
  ];

  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              The Visual Archives
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95] break-words">
              ARCHITECTURAL GALLERY
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              A curated photographic study in monochrome restraint, natural daylight, monumental concrete, and planned landscape integration.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Canvas */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <GalleryView images={allImages} showFilters={true} />
      </section>
    </div>
  );
}

