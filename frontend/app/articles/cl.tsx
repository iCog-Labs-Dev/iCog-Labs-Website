// app/articles/cl.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "../components/icons/arrow-up-right";
import { useState, useEffect } from "react";

interface Article {
  id: number;
  documentId: string;
  Title: string;
  PublicationDate: string;
  Author?: string;
  Excerpt?: string;
  Slug: string;
  content: string;
  FeaturedImage?: Array<{
    id: number;
    url: string;
    alternativeText?: string;
    formats?: {
      small?: {
        url: string;
      };
      thumbnail?: {
        url: string;
      };
    };
  }> | null;
}

interface ArticleListClientProps {
  articles: Article[];
}

const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export default function ArticleListClient({ articles }: ArticleListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive a category (since Strapi schema doesn't have it)
  const getCategory = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("ai") || lowerTitle.includes("machine learning")) return "Technology";
    if (lowerTitle.includes("sustainab") || lowerTitle.includes("green")) return "Sustainability";
    if (lowerTitle.includes("design") || lowerTitle.includes("ux")) return "Design";
    if (lowerTitle.includes("blockchain") || lowerTitle.includes("innovat")) return "Innovation";
    if (lowerTitle.includes("healthcare") || lowerTitle.includes("diagnos")) return "Healthcare";
    return "General";
  };

  // Estimate read time based on content length
  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Extract image URL from content as a fallback
  const getImageFromContent = (content: string): string | null => {
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = content.match(imageRegex);
    return match ? match[1] : null;
  };

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.Title.toLowerCase().includes(searchQuery.toLowerCase()) || article.Excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || getCategory(article.Title) === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Log filtered articles for debugging
  useEffect(() => {
    console.log("Filtered Articles:", JSON.stringify(filteredArticles, null, 2));
  }, [filteredArticles]);

  return (
    <>
      {/* Filter/Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-5 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {["All", "Technology", "Sustainability", "Design", "Innovation", "Healthcare"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-orange-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center text-gray-400 text-xl">
          No articles found. Try adjusting your search or category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={
                    Array.isArray(article.FeaturedImage) && article.FeaturedImage.length > 0
                      ? strapiApiUrl + (article.FeaturedImage[0].formats?.small?.url || article.FeaturedImage[0].url)
                      : getImageFromContent(article.content) || "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={article.Title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Error";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-orange-600 text-white shadow-md">
                  {getCategory(article.Title)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>
                    {new Date(article.PublicationDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{estimateReadTime(article.content)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {article.Title}
                </h3>
                <p className="text-gray-300 mb-5">{article.Excerpt || "No excerpt available."}</p>
                <a
                  href={`/articles/${article.documentId}`} // Changed from documentId to Slug
                  className="inline-flex items-center text-orange-400 font-medium hover:text-orange-300 transition-colors group-hover:underline"
                >
                  Read article
                  <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-orange-600 text-white">1</button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            2
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            3
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            Next
          </button>
        </nav>
      </motion.div>
    </>
  );
}