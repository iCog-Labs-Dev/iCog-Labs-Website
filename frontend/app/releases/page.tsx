"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa"
import { Card } from "../Components/Card"

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
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/sofi.png)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />

        <div className="relative container-custom min-h-[70vh] flex flex-col justify-center py-16 md:py-24">
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
                <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Releases */}
      <section className="py-16 md:py-24 bg-white" id="read-more">
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
              <Card
                img="/images/1.png"
                text="Distributed Computing Power & Storage for Decentralized Networks"
                title="NuNet"
                date="February 28, 2024"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                img="/images/2.png"
                text="AI-Powered Genetic Analysis Tool for Biologists."
                title="Mozi"
                date="February 15, 2024"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card
                img="/images/3.png"
                text="Electric bikes to young delivery workers with credit scoring assistance."
                title="Honda E-Bikes"
                date="January 30, 2024"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              <span className="text-gray-600">Filter by:</span>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange">
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
            <ReleaseCard
              title="SingularityNET Launches New AI Marketplace"
              date="January 20, 2024"
              category="AI"
              description="SingularityNET has unveiled its next-generation AI marketplace, enabling seamless access to a diverse range of AI services through blockchain technology."
              image="/images/1.png"
            />

            <ReleaseCard
              title="Mozi 2.0: Enhanced Genetic Analysis Platform"
              date="January 10, 2024"
              category="Biotechnology"
              description="The latest version of Mozi introduces advanced features for genetic analysis, including improved visualization tools and integration with leading research databases."
              image="/images/2.png"
            />

            <ReleaseCard
              title="NuNet Expands Global Computing Network"
              date="December 28, 2023"
              category="Blockchain"
              description="NuNet has significantly expanded its decentralized computing network, now spanning over 50 countries and providing enhanced computing resources for AI and scientific research."
              image="/images/1.png"
            />
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Load More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface ReleaseCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

function ReleaseCard({ title, date, category, description, image }: ReleaseCardProps) {
  return (
    <motion.div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row" variants={fadeInUp}>
      <div className="md:w-1/4 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-3/4 p-6">
        <div className="flex flex-wrap gap-4 items-center mb-3">
          <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-medium">{category}</span>
          <span className="text-gray-500 text-sm flex items-center">
            <FaCalendarAlt className="mr-2" />
            {date}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <motion.button
          className="text-brand-orange hover:text-brand-red transition-colors flex items-center gap-1 group"
          whileHover={{ x: 5 }}
        >
          <span>Read Full Release</span>
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ReleasesPage

