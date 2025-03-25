"use client";

import React from "react";
import { AnimatedTestimonials } from "../Components/ui/animated-testemonials";
import { useState } from "react";
import { insights } from "../data";

const InsightsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const insightsPerPage = 3;

  const totalPages = Math.ceil(insights.length / insightsPerPage);
  const displayedInsights = insights.slice(
    (currentPage - 1) * insightsPerPage,
    currentPage * insightsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const testimonials = displayedInsights.map((insight) => ({
    quote: insight.description,
    designation: insight.category || "Insight",
    name: insight.title,
    src: insight.image,
  }));

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black"> {/* Changed bg-gray-100 to gradient */}
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 text-white"> {/* changed text color */}
          Latest Insights
        </h2>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

        <div className="mt-8 flex justify-center space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;