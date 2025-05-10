import axios from "axios";
import ArticleListClient from "./cl";

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

async function fetchArticles(): Promise<Article[]> {
  const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";

  try {
    const response = await axios.get(`${strapiApiUrl}/api/articles?publicationState=live&populate=FeaturedImage`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
      },
    });

    const articles = response.data.data || [];
    console.log("Fetched Articles:", JSON.stringify(articles, null, 2));
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ArticlesPage() {
  const articles = await fetchArticles();

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="container-custom mx-auto px-4">
        <ArticleListClient articles={articles} />
      </div>
    </div>
  );
}