"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface FaqAccordionProps {
  initialCategory?: string;
  limit?: number;
  showCategoryTabs?: boolean;
  theme?: "dark" | "light";
}

export default function FaqAccordion({
  initialCategory = "All",
  limit,
  showCategoryTabs = true,
  theme = "light",
}: FaqAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0]?.id || ""]);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const isLight = theme === "light";

  const categories = ["All", "STTHIRA", "ROVERA", "Buying Process", "Legal & Verification", "Support & Site Visits"];

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="w-full">
      {/* Category Pills & Search */}
      {showCategoryTabs && (
        <div className="mb-10 space-y-6">
          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? "text-neutral-500" : "text-neutral-400"}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("faq.searchPlaceholder", "Search by topic, legal due diligence, approvals...")}
              className={`w-full pl-10 pr-4 py-2.5 text-xs transition-colors rounded-sm ${
                isLight
                  ? "bg-white border border-neutral-300 text-black placeholder-neutral-500 focus:outline-none focus:border-black shadow-xs"
                  : "bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-white"
              }`}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 transition-all rounded-xs cursor-pointer ${
                  selectedCategory === cat
                    ? isLight
                      ? "bg-black text-white font-medium shadow-xs"
                      : "bg-white text-black font-medium"
                    : isLight
                    ? "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 hover:text-black border border-neutral-200"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion List */}
      <div className={`divide-y border-y ${
        isLight ? "divide-neutral-200 border-neutral-200" : "divide-neutral-800 border-neutral-800"
      }`}>
        {displayedFaqs.length === 0 ? (
          <div className={`py-12 text-center text-sm ${isLight ? "text-neutral-600" : "text-neutral-500"}`}>
            {t("faq.noMatch", "No matching questions found. Contact our advisory team directly.")}
          </div>
        ) : (
          displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                >
                  <span className={`font-editorial text-lg sm:text-2xl uppercase tracking-wide transition-colors ${
                    isLight
                      ? "text-black group-hover:text-neutral-700 font-semibold"
                      : "text-white group-hover:text-neutral-300 font-light"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`p-1 shrink-0 mt-1 transition-colors ${
                    isLight
                      ? "text-neutral-800 group-hover:text-black"
                      : "text-neutral-400 group-hover:text-white"
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-black" />}
                  </span>
                </button>

                {isOpen && (
                  <div className={`mt-4 pr-10 text-sm sm:text-base font-sans leading-relaxed tracking-normal animate-fade-in ${
                    isLight
                      ? "text-neutral-800 font-normal"
                      : "text-neutral-300 font-light"
                  }`}>
                    <p>{faq.answer}</p>
                    <div className={`mt-3 text-[10px] uppercase tracking-widest font-mono ${
                      isLight ? "text-neutral-600 font-medium" : "text-neutral-400"
                    }`}>
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {limit && filteredFaqs.length > limit && (
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors ${
              isLight
                ? "border border-neutral-300 text-neutral-900 hover:border-black hover:text-black"
                : "border border-neutral-700 text-white hover:border-white"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t("faq.viewAll", `View All ${FAQS.length} Questions`)}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
