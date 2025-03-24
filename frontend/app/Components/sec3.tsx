"use client";

import { AnimatedTestimonials } from "../Components/ui/animated-testemonials"; // Adjust the import path if needed
import React, { useState } from "react";
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

  // Map displayedInsights to match the 'Testimonial' type structure
  const testimonials = displayedInsights.map((insight) => ({
    quote: insight.description, // Map 'description' as the quote
    designation: insight.category || "Insight", // Use 'category' or a default designation
    name: insight.title, // Title mapped as the name of the testimonial
    src: insight.image, // Map 'image' as the testimonial image
  }));

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Latest Insights
        </h2>

        {/* Pass the transformed testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

        {/* Pagination buttons */}
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
