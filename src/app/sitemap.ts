import { MetadataRoute } from "next";
import { DEVELOPMENTS, JOURNAL_ARTICLES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stthira.com";

  const staticPages = [
    "",
    "/about",
    "/developments",
    "/philosophy",
    "/leadership",
    "/journal",
    "/gallery",
    "/faq",
    "/contact",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/disclaimer",
    "/legal/cookies",
    "/legal/project-disclaimer",
    "/legal/rera",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/developments") ? 0.9 : 0.8,
  }));

  const devPages = DEVELOPMENTS.map((dev) => ({
    url: `${baseUrl}/developments/${dev.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const journalPages = JOURNAL_ARTICLES.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...devPages, ...journalPages];
}

