"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaLightbulb, FaRobot, FaBrain, FaEthernet, FaShieldAlt, FaCode } from "react-icons/fa"

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const insightsPerPage = 3

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

  const insights = [
    {
      title: "Transforming AI in Africa",
      description: "Discover how iCog Labs is pioneering AI solutions uniquely tailored for Africa.",
      image:
        "https://media.istockphoto.com/id/1511300770/photo/global-network-and-information-technology-with-an-overlay-city-at-night-for-connectivity-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=rf3RIbpc0TwlRwyHkn3cHi4XGXuze2q7WuFqX0ZyIfA=",
      link: "#",
      category: "News",
      date: "2025-01-20",
    },
    {
      title: "AI Ethics in Practice",
      description: "Explore our commitment to ethical AI and its impact on global industries.",
      image:
        "https://media.istockphoto.com/id/1812733266/photo/ai-and-ethics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgNUtmsw0ghQJulvbenSmt7FMmvpHyZd9xmy_qmHvCY=",
      link: "#",
      category: "Articles",
      date: "2025-01-18",
    },
    {
      title: "Innovations in Robotics",
      description: "Learn about our cutting-edge advancements in robotics and automation.",
      image:
        "https://media.istockphoto.com/id/1193074238/photo/technological-prosthetic-robot-arm-is-tested-by-two-professional-development-engineers-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=58Ug6hCI0Bm_xOlD6LdACVJYF6e8rFoQoeLbAaV2nkM=",
      link: "#",
      category: "Releases",
      date: "2025-01-15",
    },
    {
      title: "Machine Learning Applications",
      description: "Discover how machine learning is shaping the future.",
      image:
        "https://media.istockphoto.com/id/1182697690/photo/beautiful-male-computer-engineer-and-scientists-create-neural-network-at-his-workstation.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2mYUt91zyEEUpE-_KdjiA3tglN6E32Dx7UAigrZBXk=",
      link: "#",
      category: "News",
      date: "2025-01-12",
    },
    {
      title: "Blockchain Advancements",
      description: "Explore the potential of blockchain technology.",
      image:
        "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJMb2NrJTIwJTIwY2hhaW4lMjBBZHZhbmNlbWVudHN8ZW58MHx8MHx8fDA%3D",
      link: "#",
      category: "Articles",
      date: "2025-01-10",
    },
    {
      title: "AGI Research",
      description: "Pioneering advancements in Artificial General Intelligence.",
      image:
        "https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept-neural-network-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1DVbVP4I_GdGnnIjVZpGr7CepQHqjsev4y5IRcMvaA=",
      link: "#",
      category: "Releases",
      date: "2025-01-08",
    },
  ]

  const totalPages = Math.ceil(insights.length / insightsPerPage)
  const displayedInsights = insights.slice((currentPage - 1) * insightsPerPage, currentPage * insightsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Intersection Observer for animations
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-white">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#FE8E03" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F03401" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="50" fill="url(#radialGradient)" className="animate-pulse-slow" />
            </svg>
          </div>
        </div>

        <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between py-16 relative z-10">
          {/* Left Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-2xl mt-12 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            <motion.div variants={fadeInUp} className="relative">
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-orange-100"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Engineering the Future of <span className="gradient-text animate-gradient-shift">Intelligence</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 max-w-lg">
              Pioneering advancements in AI, machine learning, and robotics to shape a smarter, more connected world.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
              <motion.button
                className="button-secondary group flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore</span>
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                className="button-primary mt-4 sm:mt-0 group flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Join Us</span>
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            <motion.a
              variants={fadeInUp}
              href="#latest-insights"
              className="mt-8 inline-flex items-center text-lg text-brand-orange hover:text-brand-red transition-colors"
            >
              <span>Read Our Latest</span>
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right VR Image with floating animation */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="relative z-10">
                <Image src="/VR.png" alt="VR Headset" width={600} height={600} className="w-full max-w-md rounded-lg" />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-3xl opacity-70 animate-pulse-slow" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white" id="about">
        <div className="container-custom">
          {/* Section Heading */}
          <motion.h2
            className="text-4xl font-heading font-bold text-left gradient-text mb-12"
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
              className="bg-gradient-to-br from-brand-red to-brand-orange text-white p-8 rounded-2xl shadow-lg overflow-hidden relative"
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
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                  <FaLightbulb size={24} />
                </div>
                <h3 className="text-3xl font-heading font-bold gradient-text">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
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
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                  <FaRobot size={24} />
                </div>
                <h3 className="text-3xl font-heading font-bold gradient-text">Mission</h3>
              </div>
              <ul className="text-gray-700 leading-relaxed space-y-2">
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

      {/* Our Core Values */}
      <section className="section-padding bg-gray-50" id="values">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
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

      {/* Latest Insights */}
      <section className="section-padding bg-white" id="latest-insights">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold text-center gradient-text mb-12"
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
            {displayedInsights.map((insight, index) => (
              <InsightCard key={index} insight={insight} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === index + 1
                    ? "gradient-bg text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handlePageChange(index + 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {index + 1}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Helper Components
interface CoreValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, description, icon, featured = false }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl card-hover ${featured ? "gradient-bg text-white" : "border border-gray-200 bg-white"}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div
        className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xl ${
          featured ? "bg-white/20 text-white" : "gradient-bg text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${featured ? "text-white" : "text-gray-800"}`}>{title}</h3>
      <p className={featured ? "text-white/90" : "text-gray-600"}>{description}</p>
    </motion.div>
  )
}

const InsightCard = ({ insight, index }: { insight: any; index: number }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden card-hover border border-gray-100"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
    >
      <div className="relative">
        <img src={insight.image || "/placeholder.svg"} alt={insight.title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 gradient-bg text-white text-sm font-medium px-3 py-1 rounded-full">
          {insight.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{insight.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{insight.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{insight.date}</span>
          <Link
            href={insight.link}
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

// Custom hook for intersection observer
function useIntersectionObserver({ threshold = 0.1, root = null, rootMargin = "0px", triggerOnce = true }) {
  const [ref, setRef] = React.useState(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)

        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(entry.target)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(ref)

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, threshold, root, rootMargin, triggerOnce])

  return [setRef, inView]
}

export default Home

