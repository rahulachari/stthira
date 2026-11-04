"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage, LANGUAGE_OPTIONS } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  dropUp?: boolean;
  theme?: "dark" | "light";
}

export default function LanguageSwitcher({
  className = "",
  dropUp = true,
  theme = "dark",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLight = theme === "light";

  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button: GitHub-style clean pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className={`flex items-center gap-2 px-3 py-1.5 transition-all rounded font-sans text-xs ${
          isLight
            ? "bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 hover:text-black shadow-xs"
            : "bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white"
        }`}
      >
        <Globe className={`w-3.5 h-3.5 ${isLight ? "text-neutral-600" : "text-neutral-400"}`} />
        <span className="font-medium">{currentOption.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } ${isLight ? "text-neutral-500" : "text-neutral-400"}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          } right-0 w-48 shadow-2xl py-1 z-50 rounded-md border ${
            isLight
              ? "bg-white border-neutral-200 text-neutral-900"
              : "bg-black/95 border-neutral-800 text-white backdrop-blur-xl"
          } animate-fade-in`}
        >
          <div
            className={`px-3 py-1.5 text-[9px] uppercase tracking-widest border-b font-sans ${
              isLight
                ? "text-neutral-500 border-neutral-200 bg-neutral-50/70"
                : "text-neutral-500 border-neutral-900"
            }`}
          >
            Language / భాష / மொழி / भाषा
          </div>
          {LANGUAGE_OPTIONS.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                onClick={() => {
                  setLanguage(opt.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between text-xs transition-colors font-sans ${
                  isSelected
                    ? isLight
                      ? "bg-neutral-100 text-black font-semibold"
                      : "bg-white text-black font-medium"
                    : isLight
                    ? "text-neutral-700 hover:bg-neutral-50 hover:text-black"
                    : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{opt.nativeName}</span>
                  <span
                    className={`text-[10px] ${
                      isSelected
                        ? isLight
                          ? "text-neutral-600"
                          : "text-neutral-600"
                        : isLight
                        ? "text-neutral-400"
                        : "text-neutral-500"
                    }`}
                  >
                    ({opt.name})
                  </span>
                </div>
                {isSelected && (
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-neutral-900" : "text-black"}`} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
