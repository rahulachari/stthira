"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES, JournalArticle } from "@/lib/data";

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Real Estate",
    "Luxury Living",
    "Architecture",
    "Land Development",
    "Investment Insights",
    "Lifestyle",
    "Buying Guides",
  ];

  const filtered = JOURNAL_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === "All" || article.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-white text-neutral-900 pt-24">
      {/* Header */}
      <section className="bg-black text-white py-24 sm:py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-sans block">
              Architectural &amp; Real Estate Discourse
            </span>
            <h1 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight leading-[0.95] break-words">
              JOURNAL &amp; INSIGHTS
            </h1>
            <p className="font-sans text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              Essays on luxury plotted living, modern architectural minimalism, legal due diligence, and capital preservation in Indian real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search essays, legal guides, architecture..."
                className="w-full bg-white border border-neutral-300 pl-10 pr-4 py-2.5 text-xs text-black placeholder-neutral-500 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="text-xs uppercase tracking-widest text-neutral-500 font-sans">
              Showing {filtered.length} of {JOURNAL_ARTICLES.length} Publications
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 transition-all ${
                  selectedCategory === cat
                    ? "bg-black text-white font-medium"
                    : "bg-white text-neutral-600 hover:text-black border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        {filtered.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <BookOpen className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="font-editorial text-2xl uppercase tracking-wider text-neutral-700">
              No matching publications found
            </h3>
            <p className="text-xs text-neutral-500 font-sans">
              Try adjusting your search criteria or view all articles.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-neutral-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[9px] uppercase tracking-widest font-sans">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-neutral-500 mb-3 font-sans">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="font-editorial text-2xl text-black font-medium leading-snug uppercase group-hover:text-neutral-700 transition-colors">
                      <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="mt-3 text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans">
                    By {article.author}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-black group-hover:text-neutral-600 transition-colors"
                  >
                    <span>Read Treatise</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

