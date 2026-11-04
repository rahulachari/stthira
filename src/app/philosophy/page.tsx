import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import { PHILOSOPHY_PILLARS } from "@/lib/data";

export const metadata = {
  title: "Our Philosophy — Refined in Thought. Bold in Vision. | STTHIRA",
  description:
    "Explore the eight foundational pillars of STTHIRA: Vision, Precision, Planning, Architecture, Nature, Trust, Community, and Legacy.",
};

export default function PhilosophyPage() {
  const images = [
    "/images/brand-story.jpg",
    "/images/entrance-structure.jpg",
    "/images/aerial-view.jpg",
    "/images/modern-architecture.jpg",
    "/images/landscape-nature.jpg",
    "/images/masterplan-visual.jpg",
    "/images/lifestyle-amenities.jpg",
    "/images/hero-cinematic.jpg",
  ];

  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Editorial Hero Header */}
      <section className="bg-black text-white py-24 sm:py-36 relative overflow-hidden border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans">
              <Compass className="w-4 h-4 text-white" />
              <span>The Architectural Treatise</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95] break-words">
              REFINED IN THOUGHT. <br />
              <span className="italic font-light text-neutral-400">BOLD IN VISION.</span>
            </h1>

            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              An architectural philosophy inspired by the permanence of stone, the discipline of geometry, and the solemn fiduciary duty owed to the land.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Essays */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-32">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const isReversed = idx % 2 === 1;
            const imgUrl = images[idx % images.length];

            return (
              <div
                key={pillar.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden shadow-xl ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={pillar.title}
                    fill
                    className="object-cover object-center grayscale contrast-120 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 text-xs font-mono">
                    Pillar {pillar.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="font-editorial text-5xl sm:text-6xl text-neutral-300 font-light block leading-none">
                    {pillar.number}
                  </span>

                  <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-wider text-black font-light leading-tight">
                    {pillar.title}
                  </h2>

                  <p className="font-editorial italic text-neutral-600 text-xl leading-relaxed">
                    &ldquo;{pillar.subtitle}&rdquo;
                  </p>

                  <p className="font-sans text-neutral-700 text-base leading-relaxed font-light">
                    {pillar.body}
                  </p>

                  <blockquote className="border-l-2 border-black pl-4 py-1 text-xs sm:text-sm font-sans italic text-neutral-500">
                    {pillar.quote}
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-neutral-950 text-white border-t border-neutral-900 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
            Living the Philosophy
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl uppercase tracking-tight font-light leading-tight">
            WITNESS THE ETHOS AT ROVERA
          </h2>
          <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light max-w-lg mx-auto">
            See how these principles are translated into 42+ acres of master-planned luxury plotted living.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/developments/rovera"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Explore ROVERA</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

