import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight, Share2 } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/lib/data";

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | STTHIRA" };

  return {
    title: `${article.title} | STTHIRA Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = JOURNAL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="bg-white text-neutral-900 pt-24">
      {/* Article Header */}
      <section className="bg-black text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="space-y-6">
            <span className="inline-block bg-white text-black px-3 py-1 text-[10px] uppercase tracking-widest font-sans font-medium">
              {article.category}
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl font-light uppercase tracking-tight leading-[1.05]">
              {article.title}
            </h1>

            <p className="font-editorial italic text-neutral-300 text-lg sm:text-2xl leading-relaxed">
              &ldquo;{article.excerpt}&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-neutral-800 text-xs font-sans text-neutral-400">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-300" />
                <span>{article.author}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-300" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-300" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 -mt-12 relative z-10">
        <div className="relative aspect-[16/9] bg-neutral-900 border border-neutral-300 shadow-2xl overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover object-center grayscale contrast-115"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <div className="prose prose-lg prose-neutral max-w-none space-y-8 font-sans text-neutral-800 font-light text-base sm:text-lg leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Corporate Editorial Note */}
        <div className="mt-16 p-8 bg-neutral-50 border border-neutral-200 space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-sans block">
            STTHIRA Research &amp; Legal Standard
          </span>
          <p className="text-xs text-neutral-600 font-sans leading-relaxed">
            This article is published as intellectual capital for prospective land investors and luxury homeowners. For specific regulatory or legal consultations regarding ROVERA or STTHIRA developments, contact our corporate legal secretariat.
          </p>
        </div>
      </div>

      {/* Related Publications */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border-b border-neutral-200 pb-6 mb-12 flex items-center justify-between">
            <h3 className="font-editorial text-3xl uppercase tracking-wider text-black">
              RELATED PUBLICATIONS
            </h3>
            <Link
              href="/journal"
              className="text-xs uppercase tracking-[0.2em] font-medium text-black hover:text-neutral-600"
            >
              All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <div
                key={item.slug}
                className="bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-sans block mb-2">
                    {item.category} • {item.readTime}
                  </span>
                  <h4 className="font-editorial text-xl uppercase tracking-wide text-black mb-3">
                    <Link href={`/journal/${item.slug}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-neutral-600 text-xs font-sans leading-relaxed font-light line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-100">
                  <Link
                    href={`/journal/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-medium text-black hover:text-neutral-600"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

