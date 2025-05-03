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
    image: "https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=8rcZn4Dbs7qAE4jn8C2_NrED5R_XWJCJMWMFCJYYvpU=",
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

function GearIcon({ className, size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.055.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 1 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z" />
    </svg>
  );
}

function ArticleShowcase() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-orange-500/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-orange-500/10 filter blur-[120px]"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
            <span className="text-orange-500 font-mono uppercase tracking-widest text-sm">
              Thought Leadership
            </span>
            <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Latest Insights
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Cutting-edge perspectives and innovative thinking from our team
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured Article (Left) */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 group relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
              <img 
                src={COMPANY_ARTICLES[0].image} 
                alt={COMPANY_ARTICLES[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-orange-600 text-white mb-3 shadow-md">
                  {COMPANY_ARTICLES[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {COMPANY_ARTICLES[0].title}
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {COMPANY_ARTICLES[0].excerpt}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                {COMPANY_ARTICLES[0].date} · {COMPANY_ARTICLES[0].readTime}
              </span>
              <a 
                href={COMPANY_ARTICLES[0].link} 
                className="flex items-center text-orange-400 font-medium hover:text-orange-300 transition-colors group-hover:underline"
              >
                Read article
                <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.article>

          {/* Article List (Right) */}
          <div className="lg:col-span-2 space-y-8">
            {COMPANY_ARTICLES.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex gap-6 hover:bg-gray-900/50 p-3 rounded-xl transition-colors border border-gray-800">
                  <div className="flex-shrink-0 relative overflow-hidden rounded-xl w-32 h-32 shadow-md">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="py-1">
                    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-orange-900/50 text-orange-300 mb-2 shadow-sm">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-400 space-x-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <a 
                      href={article.link}
                      className="mt-2 inline-flex items-center text-sm text-orange-400 hover:underline transition-colors"
                    >
                      Read more
                      <ArrowUpRightIcon className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4 text-center"
            >
              <a 
                href="#" 
                className="inline-flex items-center px-5 py-2.5 border border-gray-700 rounded-full text-gray-300 hover:bg-gray-800 transition-colors hover:shadow-sm hover:border-orange-500"
              >
                View all articles
                <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleShowcase;