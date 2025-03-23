"use client"

import type React from "react"
import FuturisticHero from "./FuturisticHero"
import FuturisticCards from "./FuturisticCards"
import FuturisticTeam from "./FuturisticTeam"
import { motion } from "framer-motion"
import { FaArrowRight, FaLightbulb, FaRobot, FaBrain, FaEthernet, FaShieldAlt } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

const Home: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <FuturisticHero />

      {/* Welcome Section */}
      <section className="py-24 bg-gray-950">
        <div className="container-custom">
          {/* Section Heading */}
          <motion.h2
            className="text-4xl font-heading font-bold text-center gradient-text mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome to iCogLabs
          </motion.h2>

          {/* Responsive Grid for Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* First Card */}
            <motion.div
              className="gradient-bg text-white p-8 rounded-2xl shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-xl" />
              <h2 className="text-5xl font-bold mb-2">10+ Years</h2>
              <p className="text-xl">of Experience</p>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="bg-gradient-to-br from-brand-orange to-brand-red text-white p-8 rounded-2xl shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-xl" />
              <p className="text-lg leading-relaxed">
                At iCog Labs, we advance AI research and software development daily while staying committed to a grand
                vision of transformative innovation for Africa and beyond.
              </p>
            </motion.div>
          </div>

          {/* Responsive Grid for Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                  <FaLightbulb size={24} />
                </div>
                <h3 className="text-3xl font-heading font-bold gradient-text">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To lead AI innovation globally, driving breakthroughs that enhance intelligence beyond human capability,
                while improving lives across Africa and contributing to the continent's transformation.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                  <FaRobot size={24} />
                </div>
                <h3 className="text-3xl font-heading font-bold gradient-text">Mission</h3>
              </div>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span>Build a cutting-edge computer science sector in Ethiopia and Africa using AI.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span>Develop African AI pioneers to lead the continent into the Technological Singularity.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <FuturisticCards />

      {/* Our Core Values */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              At iCog Labs, we advance AI research and development, driving innovation in robotics, machine learning,
              and more, to transform industries and improve lives globally.
            </p>
          </motion.div>

          {/* Responsive Grid Layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CoreValueCard
              title="AI Solutions"
              description="Innovative AI solutions for real-world challenges."
              icon={<FaBrain />}
            />
            <CoreValueCard
              title="Machine Learning"
              description="Cutting-edge machine learning applications."
              icon={<FaCode />}
            />
            <CoreValueCard
              title="Blockchain"
              description="Secure and efficient blockchain solutions."
              icon={<FaEthernet />}
            />
            <CoreValueCard
              title="Artificial General Intelligence"
              description="Pioneering advancements in AGI research."
              icon={<FaBrain />}
            />
            <CoreValueCard
              title="AI Ethics"
              description="Promoting ethical AI development and usage."
              icon={<FaShieldAlt />}
            />
            <CoreValueCard
              title="Robotics"
              description="Robotics integrates AI and engineering to create autonomous machines, revolutionizing industries with precision and efficiency."
              icon={<FaRobot />}
              featured
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <FuturisticTeam />

      {/* Latest Insights */}
      <section className="py-24 bg-gray-950">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold text-center gradient-text mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Insights
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <InsightCard
              title="Transforming AI in Africa"
              description="Discover how iCog Labs is pioneering AI solutions uniquely tailored for Africa."
              image="/images/1.png"
              category="News"
              date="March 15, 2024"
            />
            <InsightCard
              title="AI Ethics in Practice"
              description="Explore our commitment to ethical AI and its impact on global industries."
              image="/images/2.png"
              category="Articles"
              date="March 10, 2024"
            />
            <InsightCard
              title="Innovations in Robotics"
              description="Learn about our cutting-edge advancements in robotics and automation."
              image="/images/3.png"
              category="Releases"
              date="March 5, 2024"
            />
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/news">
              <motion.button
                className="button-primary flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Insights</span>
                <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Helper Components
interface CoreValueCardProps {
  title: string
  description: string
  icon: React.ReactNode
  featured?: boolean
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, description, icon, featured = false }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl transition-all duration-300 ${
        featured ? "gradient-bg text-white" : "border border-gray-800 bg-gray-900 hover:border-orange-800/50"
      }`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{
        y: -5,
        boxShadow: featured ? "0 10px 25px -5px rgba(254, 142, 3, 0.3)" : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xl ${
          featured ? "bg-white/20 text-white" : "gradient-bg text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${featured ? "text-white" : "text-white"}`}>{title}</h3>
      <p className={featured ? "text-white/90" : "text-gray-400"}>{description}</p>
    </motion.div>
  )
}

const FaCode = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-6 h-6">
      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
    </svg>
  )
}

interface InsightCardProps {
  title: string
  description: string
  image: string
  category: string
  date: string
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description, image, category, date }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 gradient-bg text-white text-sm font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{date}</span>
          <Link
            href="#"
            className="text-brand-orange font-medium hover:text-brand-red transition-colors flex items-center"
          >
            <span>Read More</span>
            <FaArrowRight className="ml-1 text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

