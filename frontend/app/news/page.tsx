"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaFilter, FaArrowRight, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import NeuralNetwork from "../Components/NeuralNetwork"
import BrainStructure from "../Components/BrainStructure"
import LogoGears from "../Components/LogoGears"
import FuturisticFooter from "../Components/FuturisticFooter"

function NewsPage() {
  const [filter, setFilter] = useState("popular-topics")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "ai", name: "AI" },
    { id: "robotics", name: "Robotics" },
    { id: "blockchain", name: "Blockchain" },
    { id: "ethics", name: "AI Ethics" },
    { id: "partnerships", name: "Partnerships" },
  ]

  const newsItems = [
    {
      id: 1,
      title: "iCog Labs Partners with Huawei to Advance AI Research in Africa",
      category: "partnerships",
      date: "January 12, 2024",
      author: "iCog Labs",
      image: "/images/two.png",
      excerpt:
        "A groundbreaking partnership between iCog Labs and Huawei aims to accelerate AI research and development across Africa.",
      featured: true,
    },
    {
      id: 2,
      title: "iCog Labs Hosts Annual AI Conference in Addis Ababa",
      category: "ai",
      date: "January 8, 2024",
      author: "iCog Labs",
      image: "/images/1.png",
      excerpt:
        "Explore groundbreaking AI developments as iCog Labs hosts its annual conference in Addis Ababa, bringing together global innovators.",
    },
    {
      id: 3,
      title: "iCog Labs Presents Breakthroughs at Global AI for Good Summit",
      category: "ai",
      date: "January 5, 2024",
      author: "iCog Labs",
      image: "/images/two.png",
      excerpt:
        "iCog Labs showcased its latest AI innovations focused on social impact at the prestigious Global AI for Good Summit.",
    },
    {
      id: 4,
      title: "Healthcare AI Solutions Developed by iCog Labs",
      category: "ai",
      date: "December 28, 2023",
      author: "iCog Labs",
      image: "/images/health.png",
      excerpt:
        "New AI-powered diagnostic tools developed by iCog Labs are helping improve healthcare access across rural Ethiopia.",
    },
    {
      id: 5,
      title: "iCog Labs Launches AI Ethics Initiative for Responsible Development",
      category: "ethics",
      date: "December 21, 2023",
      author: "iCog Labs",
      image: "/images/3.png",
      excerpt:
        "iCog Labs has introduced an AI Ethics Initiative focused on promoting responsible, transparent, and fair AI development.",
    },
    {
      id: 6,
      title: "Technology Partnerships Expand iCog Labs' Global Reach",
      category: "partnerships",
      date: "December 15, 2023",
      author: "iCog Labs",
      image: "/images/tech.png",
      excerpt:
        "Strategic partnerships with leading tech companies are helping iCog Labs expand its influence in the global AI landscape.",
    },
  ]

  const filteredNews =
    activeCategory === "all" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  const searchResults = searchQuery
    ? filteredNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredNews

  const featuredNews = newsItems.find((item) => item.featured)

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-30">
        <NeuralNetwork />
      </div>
      <div className="fixed inset-0 z-0">
        <BrainStructure />
      </div>
      <div className="fixed inset-0 z-0">
        <LogoGears />
      </div>

      <motion.div
        className="container-custom relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="flex flex-col md:flex-row justify-between items-center mb-12" variants={fadeInUp}>
          <div className="flex items-center gap-2 text-lg">
            <span className="text-gray-400">Blogs</span>
            <span className="text-gray-500">/</span>
            <span className="gradient-text font-medium">News</span>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-gray-900 border border-gray-800 rounded-full p-2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <FaSearch />
            </motion.button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 250, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
                <FaFilter className="text-brand-orange" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-gray-300 pr-8"
                >
                  <option value="popular-topics">Popular Topics</option>
                  <option value="ethical-ai">Ethical AI</option>
                  <option value="ai-conferences">AI Conferences</option>
                  <option value="latest">Latest</option>
                  <option value="ai-partnerships">AI Partnerships</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className="flex flex-wrap gap-2 mb-12 justify-center" variants={fadeInUp}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "gradient-bg text-white"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-orange-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured News Section */}
        {!searchQuery && activeCategory === "all" && featuredNews && (
          <motion.div className="mb-16" variants={fadeInUp}>
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

              <Image
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full">Featured</span>
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {featuredNews.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-2" />
                    {featuredNews.author}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredNews.title}</h2>

                <p className="text-gray-300 mb-6 max-w-3xl">{featuredNews.excerpt}</p>

                <Link href={`/news/${featuredNews.id}`}>
                  <motion.button
                    className="gradient-bg text-white px-6 py-3 rounded-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Article
                    <FaArrowRight />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Link href={`/news/${item.id}`}>
                  <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-full transition-all duration-300 hover:border-orange-800/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                        {categories.find((cat) => cat.id === item.category)?.name}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{item.excerpt}</p>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="text-orange-500 flex items-center gap-1 group">
                          Read More
                          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-400 text-lg">No news articles found matching your search.</p>
            </div>
          )}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <motion.button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  page === 1
                    ? "gradient-bg text-white"
                    : "bg-gray-900 border border-gray-800 text-gray-400 hover:border-orange-800"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {page}
              </motion.button>
            ))}
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 border border-gray-800 text-gray-400 hover:border-orange-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
     </div>
  )
}

export default NewsPage

