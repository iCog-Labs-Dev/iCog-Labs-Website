// app/articles/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "../components/icons/arrow-up-right";

import { SectionHeader } from "../components/sectionHeader";
import { GearIcon } from "../components/icons/gear-icon";

const ALL_ARTICLES = [
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
      },
  {
    id: 5,
    title: "Neural Networks in Healthcare Diagnostics",
    excerpt: "Revolutionizing medical diagnosis through deep learning applications in imaging analysis.",
    category: "Healthcare",
    date: "January 18, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  
];

export default function ArticlesPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden border-b border-gray-800">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-orange-500/10 filter blur-[120px]"></div>
          <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader 
              title="Thought Leadership" 
              center 
              mb="6"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-500">Knowledge</span> Repository
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deep dives, research findings, and innovative perspectives from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter/Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-5 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                <button className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">
                  All
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">
                  Technology
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">
                  Design
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">
                  Innovation
                </button>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_ARTICLES.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-orange-600 text-white shadow-md">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-5">{article.excerpt}</p>
                  <a
                    href={article.link}
                    className="inline-flex items-center text-orange-400 font-medium hover:text-orange-300 transition-colors group-hover:underline"
                  >
                    Read article
                    <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-orange-600 text-white">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Next
              </button>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <GearIcon className="mx-auto text-orange-500 mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to stay updated with our latest insights?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for monthly deep dives and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}