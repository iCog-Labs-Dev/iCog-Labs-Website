import axios from "axios";
import ArticleListClient from "./cl";

import HeroClient from "./hero-client";
import CTAClient from "./cta-client";

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
      small?: { url: string };
      thumbnail?: { url: string };
    };
  }> | null;
}

async function fetchArticles(): Promise<Article[]> {
  const strapiApiUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

  try {
    const response = await axios.get(
      `${strapiApiUrl}/api/articles?populate=FeaturedImage`,
      
    );
    const articles = response.data.data || [];
    // Map Strapi v4+ response to Article[]
    return articles.map((item: any) => {
      const attrs = item.attributes;
      let featuredImages = null;
      if (attrs.FeaturedImage && attrs.FeaturedImage.data) {
        featuredImages = Array.isArray(attrs.FeaturedImage.data)
          ? attrs.FeaturedImage.data.map((img: any) => ({
              id: img.id,
              url:
                img.attributes?.formats?.small?.url ||
                img.attributes?.url ||
                "",
              alternativeText: img.attributes?.alternativeText || "",
              formats: img.attributes?.formats || {},
            }))
          : [];
      } else {
        featuredImages = [];
      }
      return {
        id: item.id,
        documentId: attrs.documentId || "",
        Title: attrs.Title,
        PublicationDate: attrs.PublicationDate,
        Author: attrs.Author,
        Excerpt: attrs.Excerpt,
        Slug: attrs.Slug,
        content: attrs.content,
        FeaturedImage: featuredImages,
      };
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ArticlesPage() {
  const articles = await fetchArticles();

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-orange-500/10 filter blur-[120px]"></div>
          <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[150px]"></div>
        </div>
        <HeroClient />
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ArticleListClient articles={articles} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <CTAClient />
      </section>
    </div>
  );
}
