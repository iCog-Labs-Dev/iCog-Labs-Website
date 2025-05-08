"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon } from "./icons/arrow-up-right";
import { BackgroundGradient } from "./UI/background-gradient";

const NEWS_COVERAGE = [
  {
    id: 1,
    outlet: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png",
    date: "April 2023",
    title: "Named Top Startup to Watch",
    excerpt:
      "Recognized for innovative approach in annual tech disruptors list",
    link: "#",
  },
  {
    id: 2,
    outlet: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Forbes_logo.svg/1200px-Forbes_logo.svg.png",
    date: "March 2023",
    title: "30 Under 30 Feature",
    excerpt: "Our product lead honored in prestigious young innovators list",
    link: "#",
  },
  {
    id: 3,
    outlet: "Wired",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wired_logo.svg/1200px-Wired_logo.svg.png",
    date: "February 2023",
    title: "Innovation Deep Dive",
    excerpt: "Technical breakdown of our groundbreaking methodology",
    link: "#",
  },
  {
    id: 4,
    outlet: "The Verge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_Verge_logo.svg/1200px-The_Verge_logo.svg.png",
    date: "January 2023",
    title: "Product Launch Coverage",
    excerpt: "Detailed look at our platform's game-changing features",
    link: "#",
  },
];

export default function NewsCoverage() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-400 filter blur-[100px] dark:blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-400 filter blur-[80px] dark:blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
            <span className="text-orange-500 font-michroma uppercase tracking-widest text-sm">
              Media Coverage
            </span>
            <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 mb-4"
          >
            Featured In Top Publications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Recognized by the most respected voices in technology
          </motion.p>
        </motion.div>

        {/* Enhanced Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {NEWS_COVERAGE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <BackgroundGradient className="rounded-2xl h-full p-[1px]">
                <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-sm">
                  {/* Logo header */}
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <img
                      src={item.logo}
                      alt={item.outlet}
                      className="h-6 object-contain opacity-90 dark:opacity-100"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-indigo-400 transition-colors">
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
                      className="inline-flex items-center text-orange-600 dark:text-indigo-400 font-medium text-sm group-hover:text-orange-400 dark:group-hover:text-indigo-300 transition-colors"
                    >
                      Read full coverage
                      <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Modern decorative footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              As featured in
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
