"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; // Assuming InfiniteMovingCards is in a separate file
import { insights } from "../data";

const InsightsSection = () => {
  const movingCardsItems = insights.map((insight) => ({
    quote: insight.description,
    title: insight.category || "Insight",
    name: insight.title,
  }));

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 text-white">
          Latest Insights
        </h2>

        <InfiniteMovingCards items={movingCardsItems} />
      </div>
    </section>
  );
};

export default InsightsSection;