"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface Article {
  id: number;
  documentId: string;
  Title: string;
  PublicationDate: string;
  Author?: string;
  Excerpt?: string;
  Slug: string;
  content: string;
  FeaturedImage?: {
    id: number;
    url: string;
    alternativeText?: string;
  } | null;
}

interface ArticleListClientProps {
  articles: Article[];
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ArticleListClient({ articles }: ArticleListClientProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">Articles</h1>
      <Link href="/" className="text-brand-orange hover:text-brand-red transition-colors inline-flex items-center mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      {articles.length === 0 ? (
        <p className="text-gray-300">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800"
            >
              {article.FeaturedImage?.url && (
                <div className="relative h-48">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.FeaturedImage.url}`}
                    alt={article.FeaturedImage.alternativeText || article.Title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{article.Title}</h2>
                <p className="text-gray-400 text-sm mb-2">
                  {format(new Date(article.PublicationDate), "MMMM d, yyyy")}
                </p>
                <p className="text-gray-300 line-clamp-3">{article.Excerpt || "No excerpt available."}</p>
                <Link
                  href={`/articles/${article.documentId}`}
                  className="mt-4 inline-block text-brand-orange hover:text-brand-red transition-colors"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}