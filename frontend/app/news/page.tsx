"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ImageCard, Card } from "../Components/Card"
import { FaFilter } from "react-icons/fa"

function NewsPage() {
  const [filter, setFilter] = useState("popular-topics")

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

  return (
    <div className="pt-24 pb-16">
      <motion.div className="container-custom" initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div className="flex flex-col md:flex-row justify-between items-center mb-8" variants={fadeInUp}>
          <div className="flex items-center gap-2 text-lg">
            <span className="text-gray-500">Blogs</span>
            <span>/</span>
            <span className="gradient-text font-medium">News</span>
          </div>

          <div className="relative mt-4 md:mt-0">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              <FaFilter className="text-brand-orange" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-gray-700 pr-8"
              >
                <option value="popular-topics">Popular Topics</option>
                <option value="ethical-ai">Ethical AI</option>
                <option value="ai-conferences">AI Conferences</option>
                <option value="latest">Latest</option>
                <option value="ai-partnerships">AI Partnerships</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Featured News Section */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16" variants={fadeInUp}>
          <div className="lg:col-span-3">
            <ImageCard
              img="/images/two.png"
              date="January 12, 2024"
              primary={true}
              title="iCog Labs Partners with Huawei to Advance AI Research in Africa"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">
            <Card
              text="Explore groundbreaking AI developments as iCog Labs hosts its annual conference in Addis Ababa, bringing together global innovators."
              title="iCog Labs Hosts Annual AI Conference in Addis Ababa"
              date="January 8, 2024"
            />
            <ImageCard
              img="/images/two.png"
              date="January 5, 2024"
              primary={false}
              title="iCog Labs Presents Breakthroughs at Global AI for Good Summit"
            />
          </div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Card
              title="Healthcare AI Solutions"
              text="Distributed Computing Power & Storage for Decentralized Networks"
              date="December 28, 2023"
              img="/images/health.png"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              text="iCog Labs has introduced an AI Ethics Initiative focused on promoting responsible, transparent, and fair AI development. This effort aims to reduce bias, respect privacy, and ensure AI serves society ethically. Collaborating with global and local partners, iCog Labs is setting a new standard for ethical AI"
              title="iCog Labs Launches AI Ethics Initiative for Responsible Development"
              date="December 21, 2023"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              title="Technology Partnerships"
              text="Distributed Computing Power & Storage for Decentralized Networks"
              date="December 15, 2023"
              img="/images/tech.png"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              text="iCog Labs has introduced an AI Ethics Initiative focused on promoting responsible, transparent, and fair AI development. This effort aims to reduce bias, respect privacy, and ensure AI serves society ethically. Collaborating with global and local partners, iCog Labs is setting a new standard for ethical AI"
              title="New Research Paper Published on Machine Learning Applications"
              date="December 10, 2023"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              title="AI in Education"
              text="Exploring how artificial intelligence is transforming educational systems across Africa with personalized learning experiences."
              date="December 5, 2023"
              img="/images/health.png"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              text="iCog Labs has partnered with leading universities to establish AI research centers that will foster innovation and develop the next generation of AI talent in Ethiopia."
              title="iCog Labs Establishes AI Research Centers at Ethiopian Universities"
              date="November 28, 2023"
            />
          </motion.div>
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
                    : "bg-white border border-gray-200 text-gray-700 hover:border-brand-orange"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {page}
              </motion.button>
            ))}
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-700 hover:border-brand-orange"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NewsPage

