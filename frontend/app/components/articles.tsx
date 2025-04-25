"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "./icons/arrow-up-right"; // Custom icon

const COMPANY_ARTICLES = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt: "Exploring how our AI solutions are transforming enterprise workflows with unprecedented efficiency gains.",
    category: "Technology",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Sustainable Tech: Building Greener Digital Solutions",
    excerpt: "How we're reducing the carbon footprint of digital infrastructure through innovative engineering.",
    category: "Sustainability",
    date: "April 28, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "UX Design Trends That Will Dominate 2024",
    excerpt: "Our design team predicts the most impactful user experience innovations coming next year.",
    category: "Design",
    date: "March 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    excerpt: "How we're implementing blockchain technology to solve actual business problems across industries.",
    category: "Innovation",
    date: "February 22, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    link: "#"
  }
];

 function ArticleShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header with slanted effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-500/10 -z-10 -rotate-12 rounded-xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-indigo-600 dark:text-indigo-400">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Thought leadership and innovative perspectives from our team
          </p>
        </motion.div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured article (left) */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 group"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
              <img 
                src={COMPANY_ARTICLES[0].image} 
                alt={COMPANY_ARTICLES[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-600 text-white mb-2">
                  {COMPANY_ARTICLES[0].category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {COMPANY_ARTICLES[0].title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
              {COMPANY_ARTICLES[0].excerpt}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {COMPANY_ARTICLES[0].date} · {COMPANY_ARTICLES[0].readTime}
              </span>
              <a 
                href={COMPANY_ARTICLES[0].link} 
                className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                Read article
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.article>

          {/* Article list (right) */}
          <div className="lg:col-span-2 space-y-8">
            {COMPANY_ARTICLES.slice(1).map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 relative overflow-hidden rounded-xl w-32 h-32">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* View all button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View all articles
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleShowcase