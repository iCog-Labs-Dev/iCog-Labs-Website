"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaCalendarAlt, FaUser, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import NeuralNetwork from "../Components/NeuralNetwork"
import BrainStructure from "../Components/BrainStructure"
import LogoGears from "../Components/LogoGears"
import FuturisticFooter from "../Components/FuturisticFooter"

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

function ReleasesPage() {
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

      {/* Hero Section */}
      <section className="relative mb-24">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(/images/sofi.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-0" />

        <div className="relative container-custom min-h-[70vh] flex flex-col justify-center py-16 md:py-24 z-10">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-8">
              <Link href="/blogs" className="text-white/80 hover:text-white transition-colors">
                Blogs
              </Link>
              <span className="text-white/80 mx-2">/</span>
              <span className="text-brand-orange font-medium">Releases</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="gradient-text">Sophia</span> the Robot New Vision Processing and Perception Software
              <br />
              by Hanson Robotics
            </motion.h1>

            <motion.div className="flex flex-wrap gap-6 mb-8" variants={fadeInUp}>
              <div className="flex items-center text-white/80">
                <FaCalendarAlt className="mr-2" />
                <span>March 15, 2024</span>
              </div>

              <div className="flex items-center text-white/80">
                <FaUser className="mr-2" />
                <span>by Hanson Robotics</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="#read-more">
                <motion.button
                  className="gradient-bg text-white font-medium px-8 py-3 rounded-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Releases */}
      <section className="py-16 md:py-24 bg-gray-950" id="read-more">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold gradient-text mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Releases
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <ReleaseCard
                img="/images/1.png"
                text="Distributed Computing Power & Storage for Decentralized Networks"
                title="NuNet"
                date="February 28, 2024"
                github="https://github.com/nunet-io"
                website="https://nunet.io"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ReleaseCard
                img="/images/2.png"
                text="AI-Powered Genetic Analysis Tool for Biologists."
                title="Mozi"
                date="February 15, 2024"
                github="https://github.com/mozi-ai"
                website="https://mozi.ai"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ReleaseCard
                img="/images/3.png"
                text="Electric bikes to young delivery workers with credit scoring assistance."
                title="Honda E-Bikes"
                date="January 30, 2024"
                website="https://honda-ebikes.com"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4 md:mb-0">Latest Releases</h2>

            <div className="flex items-center gap-4">
              <span className="text-gray-400">Filter by:</span>
              <select className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-orange">
                <option value="all">All Categories</option>
                <option value="ai">AI</option>
                <option value="robotics">Robotics</option>
                <option value="blockchain">Blockchain</option>
              </select>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <DetailedReleaseCard
              title="SingularityNET Launches New AI Marketplace"
              date="January 20, 2024"
              category="AI"
              description="SingularityNET has unveiled its next-generation AI marketplace, enabling seamless access to a diverse range of AI services through blockchain technology."
              image="/images/1.png"
              version="v2.0.0"
              features={[
                "Improved user interface with dark mode",
                "Enhanced security features",
                "Support for multiple payment methods",
                "New developer API endpoints",
              ]}
            />

            <DetailedReleaseCard
              title="Mozi 2.0: Enhanced Genetic Analysis Platform"
              date="January 10, 2024"
              category="Biotechnology"
              description="The latest version of Mozi introduces advanced features for genetic analysis, including improved visualization tools and integration with leading research databases."
              image="/images/2.png"
              version="v2.0.0"
              features={[
                "Real-time genetic sequence analysis",
                "Integration with CRISPR databases",
                "Advanced visualization tools",
                "Collaborative research environment",
              ]}
            />

            <DetailedReleaseCard
              title="NuNet Expands Global Computing Network"
              date="December 28, 2023"
              category="Blockchain"
              description="NuNet has significantly expanded its decentralized computing network, now spanning over 50 countries and providing enhanced computing resources for AI and scientific research."
              image="/images/1.png"
              version="v1.5.0"
              features={[
                "Expanded node network across 50+ countries",
                "Improved resource allocation algorithms",
                "Enhanced security protocols",
                "New developer documentation",
              ]}
            />
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="gradient-bg text-white font-medium px-8 py-3 rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     </div>
  )
}

interface ReleaseCardProps {
  img: string
  text: string
  title: string
  date: string
  github?: string
  website?: string
}

function ReleaseCard({ img, text, title, date, github, website }: ReleaseCardProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 h-full transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)",
        borderColor: "rgba(254, 142, 3, 0.3)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-heading font-bold gradient-text">{title}</h3>
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">New</span>
        </div>
        <p className="text-gray-300 mb-4">{text}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaGithub size={18} />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface DetailedReleaseCardProps {
  title: string
  date: string
  category: string
  description: string
  image: string
  version: string
  features: string[]
}

function DetailedReleaseCard({
  title,
  date,
  category,
  description,
  image,
  version,
  features,
}: DetailedReleaseCardProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300"
      variants={fadeInUp}
      whileHover={{ boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)", borderColor: "rgba(254, 142, 3, 0.3)" }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-lg text-sm font-mono text-orange-500">
            {version}
          </div>
        </div>

        <div className="md:w-3/4 p-6">
          <div className="flex flex-wrap gap-4 items-center mb-3">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
              {category}
            </span>
            <span className="text-gray-400 text-sm flex items-center">
              <FaCalendarAlt className="mr-2" />
              {date}
            </span>
          </div>

          <h3 className="text-2xl font-bold gradient-text mb-3">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="text-white text-lg mb-2">Key Features:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 group"
            whileHover={{ x: 5 }}
          >
            <span>Read Full Release</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ReleasesPage

