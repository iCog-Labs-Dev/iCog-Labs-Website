"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRightIcon } from "./icons/arrow-right"; // Custom icon component

const NEWS_COVERAGE = [
  {
    id: 1,
    outlet: "CNN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1200px-CNN.svg.png",
    date: "June 15, 2023",
    title: "How Our Company Is Revolutionizing The Tech Industry",
    excerpt: "An in-depth look at our innovative approach that's changing the game...",
    link: "#",
  },
  {
    id: 2,
    outlet: "BBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BBC_News_2022.svg/1024px-BBC_News_2022.svg.png",
    date: "May 28, 2023",
    title: "Our CEO Featured in BBC's Future of Technology Special",
    excerpt: "Exclusive interview discussing the next decade of technological advancement...",
    link: "#",
  },
  {
    id: 3,
    outlet: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png",
    date: "April 10, 2023",
    title: "Our Startup Named One of TechCrunch's Disruptors to Watch",
    excerpt: "Annual list highlights companies poised to make significant industry impact...",
    link: "#",
  },
  {
    id: 4,
    outlet: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Forbes_logo.svg/1200px-Forbes_logo.svg.png",
    date: "March 22, 2023",
    title: "Forbes 30 Under 30 Features Our Product Lead",
    excerpt: "Young innovator recognized for groundbreaking work in AI integration...",
    link: "#",
  },
  {
    id: 5,
    outlet: "The New York Times",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.png/1200px-The_New_York_Times_logo.png",
    date: "February 18, 2023",
    title: "How Our Technology Is Solving Real-World Problems",
    excerpt: "Case studies demonstrate practical applications across multiple industries...",
    link: "#",
  },
  {
    id: 6,
    outlet: "Wired",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wired_logo.svg/1200px-Wired_logo.svg.png",
    date: "January 5, 2023",
    title: "The Science Behind Our Breakthrough Innovation",
    excerpt: "Technical deep dive into what makes our solution uniquely effective...",
    link: "#",
  },
];

 function NewsCoverage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured In
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by leading publications worldwide
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_COVERAGE.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={item.logo}
                    alt={item.outlet}
                    className="h-8 object-contain mr-3"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.excerpt}
                </p>
                <motion.a
                  href={item.link}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group"
                  whileHover={{ x: 5 }}
                >
                  Read full story
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
              
              {/* Animated hover effect */}
              <motion.div
                className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{
                  width: hoveredCard === item.id ? "100%" : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Logos Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative flex overflow-x-hidden">
            <div className="py-8 animate-marquee whitespace-nowrap">
              {NEWS_COVERAGE.map((item) => (
                <div key={`marquee-${item.id}`} className="inline-block mx-8">
                  <img
                    src={item.logo}
                    alt={item.outlet}
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
              {NEWS_COVERAGE.map((item) => (
                <div key={`marquee2-${item.id}`} className="inline-block mx-8">
                  <img
                    src={item.logo}
                    alt={item.outlet}
                    className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsCoverage