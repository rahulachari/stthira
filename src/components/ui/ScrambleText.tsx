"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface ScrambleTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "p";
  className?: string;
  speed?: number; // ms per frame (default: 30)
  scrambleDuration?: number; // Total ms per character reveal (default: 800)
  delay?: number; // ms before starting after coming into viewport (default: 50)
  triggerOnce?: boolean;
  threshold?: number;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#*/\\!?:~-+=<>";

export default function ScrambleText({
  text,
  as: Component = "h2",
  className = "",
  speed = 28,
  scrambleDuration = 700,
  delay = 60,
  triggerOnce = true,
  threshold = 0.2,
}: ScrambleTextProps) {
  const containerRef = useRef<any>(null);
  const [displayText, setDisplayText] = useState<string>(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to trigger scramble when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(el);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  // Scramble animation loop
  useEffect(() => {
    if (!isVisible) return;
    if (triggerOnce && hasAnimated) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    const startTime = Date.now();
    const length = text.length;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / scrambleDuration);

        // Calculate how many characters are locked in from left to right
        const revealedCount = Math.floor(progress * length);

        const scrambled = text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n" || char === "\t" || char === "—" || char === "•" || char === "|") {
              return char;
            }
            if (index < revealedCount) {
              return text[index];
            }
            // Scrambled random character
            const randomIndex = Math.floor(Math.random() * GLYPHS.length);
            return GLYPHS[randomIndex];
          })
          .join("");

        setDisplayText(scrambled);

        if (progress >= 1) {
          clearInterval(intervalId);
          setDisplayText(text);
          setHasAnimated(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isVisible, text, speed, scrambleDuration, delay, triggerOnce, hasAnimated]);

  const Comp = Component as any;

  return (
    <Comp
      ref={containerRef}
      className={className}
      aria-label={text}
    >
      {displayText}
    </Comp>
  );
}
