"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { format } from "date-fns";
import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

import { FaArrowLeft } from "react-icons/fa";
import React from "react";

interface FeaturedImage {
  id: number;
  url: string;
  alternativeText?: string;
}

interface Article {
  id: number;
  documentId: string;
  Title: string;
  PublicationDate: string;
  Author?: string;
  Excerpt?: string;
  Slug: string;
  content: string;
  FeaturedImage?: FeaturedImage[] | null;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cleanContent, setCleanContent] = useState<string>("");

  const fetchArticle = async (id: string) => {
    // Remove any trailing spaces from the URL
    const strapiApiUrl = (
      process.env.backend_URI || "https://strapi-backend-rgg9.onrender.com"
    ).trim();
    const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

    try {
      setIsLoading(true);
      const response = await axios.get(
        `${strapiApiUrl}/api/articles/${id}?populate=FeaturedImage`,
       
      );

      const fetchedArticle = response.data.data?.attributes || null;
      if (!fetchedArticle) {
        setError("Article not found");
        return;
      }
      // Handle FeaturedImage for Strapi v4+ (with data/attributes)
      let featuredImages: FeaturedImage[] | null = null;
      if (fetchedArticle.FeaturedImage && fetchedArticle.FeaturedImage.data) {
        featuredImages = fetchedArticle.FeaturedImage.data.map((img: any) => ({
          id: img.id,
          url:
            img.attributes?.formats?.medium?.url || img.attributes?.url || "",
          alternativeText: img.attributes?.alternativeText || "",
        }));
      }
      setArticle({
        id: response.data.data.id,
        documentId: fetchedArticle.documentId || "",
        Title: fetchedArticle.Title,
        PublicationDate: fetchedArticle.PublicationDate,
        Author: fetchedArticle.Author,
        Excerpt: fetchedArticle.Excerpt,
        Slug: fetchedArticle.Slug,
        content: fetchedArticle.content,
        FeaturedImage: featuredImages,
      });
    } catch (err: any) {
      console.error("Error fetching article:", err);
      setError(
        err.response?.status === 404
          ? "Article not found"
          : "Failed to load article. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Process content (Markdown or HTML)
  const processContent = async (content: string) => {
    try {
      // Try parsing as Markdown
      const htmlContent = await marked(content, {
        gfm: true,
        breaks: true,
      });
      const sanitized = DOMPurify.sanitize(htmlContent, {
        ADD_ATTR: ["target", "rel", "src"],
        ADD_TAGS: ["img"],
      });
      console.log("Processed HTML:", sanitized); // Debug processed HTML
      return sanitized;
    } catch (err) {
      console.error("Error parsing Markdown, trying raw HTML:", err);
      // Fallback to raw HTML if Markdown parsing fails
      const sanitized = DOMPurify.sanitize(content, {
        ADD_ATTR: ["target", "rel", "src"],
        ADD_TAGS: ["img"],
      });
      return sanitized;
    }
  };

  useEffect(() => {
    // Safely access params.id
    if (id) {
      fetchArticle(id);
    } else {
      setError("Invalid article ID");
      setIsLoading(false);
    }
  }, [id]); // Dependency on params.id is safe here

  useEffect(() => {
    if (article?.content) {
      processContent(article.content).then((html) => setCleanContent(html));
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-black">
        <div className="fixed inset-0 z-0 opacity-30"></div>
        <div className="fixed inset-0 z-0"></div>
        <div className="fixed inset-0 z-0"></div>
        <motion.div
          className="text-white text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-black">
        <div className="fixed inset-0 z-0 opacity-30"></div>
        <div className="fixed inset-0 z-0"></div>
        <div className="fixed inset-0 z-0"></div>
        <motion.div
          className="bg-gray-900 rounded-xl shadow-md p-12 max-w-2xl w-full text-center border border-gray-800 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            {error || "Article Not Found"}
          </h2>
          <p className="text-gray-300 mb-6">
            The article you’re looking for doesn’t exist or couldn’t be loaded.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/articles">
              <motion.button
                className="gradient-bg text-white font-medium px-6 py-3 rounded-lg transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Articles
              </motion.button>
            </Link>
            {error && (
              <motion.button
                className="bg-gray-800 text-white font-medium px-6 py-3 rounded-lg border border-gray-700 transition-all"
                onClick={() => fetchArticle(id)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Retry
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="fixed inset-0 z-0 opacity-30"></div>
      <div className="fixed inset-0 z-0">\ </div>
      <div className="fixed inset-0 z-0"></div>

      <div className="container-custom mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Link
            href="/articles"
            className="text-brand-orange hover:text-brand-red transition-colors inline-flex items-center mb-6"
            aria-label="Back to articles list"
          >
            <FaArrowLeft className="mr-2" />
            Back to Articles
          </Link>

          <motion.article
            className="bg-gray-900 rounded-lg shadow-md p-6 md:p-8 border border-gray-800"
            variants={fadeInUp}
          >
            {article.FeaturedImage && article.FeaturedImage.length > 0 && (
              <motion.div
                className="relative h-64 md:h-96 mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={`${article.FeaturedImage[0].url}`}
                  alt={
                    article.FeaturedImage[0].alternativeText || article.Title
                  }
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </motion.div>
            )}

            <motion.h1
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
              variants={fadeInUp}
            >
              {article.Title}
            </motion.h1>
            <motion.p
              className="text-gray-400 text-sm mb-2"
              variants={fadeInUp}
            >
              Published on{" "}
              {article.PublicationDate &&
              !isNaN(new Date(article.PublicationDate).getTime())
                ? format(new Date(article.PublicationDate), "MMMM d, yyyy")
                : "Unknown date"}
            </motion.p>
            {article.Author && (
              <motion.p
                className="text-gray-400 text-sm mb-4"
                variants={fadeInUp}
              >
                By {article.Author}
              </motion.p>
            )}
            {article.Excerpt && (
              <motion.p
                className="text-gray-300 italic mb-6"
                variants={fadeInUp}
              >
                {article.Excerpt}
              </motion.p>
            )}
            <motion.div
              id="article-content"
              className="prose prose-invert max-w-none text-gray-300 prose-img:rounded-lg prose-img:max-w-full prose-a:text-brand-orange prose-a:hover:text-brand-red prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:pl-4 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
              variants={fadeInUp}
            />
          </motion.article>
        </motion.div>
      </div>
    </div>
  );
}
