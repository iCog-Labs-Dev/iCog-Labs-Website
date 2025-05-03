"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "./icons/arrow-up-right";

const NEWS_COVERAGE = [
  {
    id: 1,
    outlet: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png",
    date: "April 2023",
    title: "Named Top Startup to Watch",
    excerpt: "Recognized for innovative approach in annual tech disruptors list",
    link: "#"
  },
  {
    id: 2,
    outlet: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Forbes_logo.svg/1200px-Forbes_logo.svg.png",
    date: "March 2023",
    title: "30 Under 30 Feature",
    excerpt: "Our product lead honored in prestigious young innovators list",
    link: "#"
  },
  {
    id: 3,
    outlet: "Wired",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wired_logo.svg/1200px-Wired_logo.svg.png",
    date: "February 2023",
    title: "Innovation Deep Dive",
    excerpt: "Technical breakdown of our groundbreaking methodology",
    link: "#"
  },
  {
    id: 4,
    outlet: "The Verge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_Verge_logo.svg/1200px-The_Verge_logo.svg.png",
    date: "January 2023",
    title: "Product Launch Coverage",
    excerpt: "Detailed look at our platform's game-changing features",
    link: "#"
  }
];

export  default function NewsCoverage() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header with accent element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 mb-4">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
              MEDIA COVERAGE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Featured In Top Publications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognized by the most respected voices in technology
          </p>
        </motion.div>

        {/* Modern card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {NEWS_COVERAGE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full flex flex-col border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/20">
                {/* Logo header */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <img
                    src={item.logo}
                    alt={item.outlet}
                    className="h-6 object-contain opacity-90"
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {item.excerpt}
                  </p>
                </div>
                
                {/* Footer */}
                <div className="px-6 pb-6">
                  <a 
                    href={item.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm group"
                  >
                    Read full coverage
                    <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                
                {/* Hover accent */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
            <div className="h-px w-8 bg-gray-200 dark:bg-gray-700"></div>
            <span className="text-sm">As featured in</span>
            <div className="h-px w-8 bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}