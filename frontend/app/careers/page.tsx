"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUsers } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

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

function InternshipCard() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-xl shadow-sm p-8 overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Background decoration */}
      <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gradient-to-br from-brand-orange/10 to-brand-red/10 rounded-full blur-xl" />

      <motion.div className="lg:w-1/3 relative" variants={fadeInUp}>
        <Image
          src="/images/intern.png"
          width={636}
          height={333}
          alt="Internship Program"
          className="rounded-lg shadow-md relative z-10"
        />
      </motion.div>

      <motion.div className="lg:w-2/3 flex flex-col gap-6 relative z-10" variants={fadeInUp}>
        <h3 className="text-2xl lg:text-3xl font-heading font-bold gradient-text">2024 Batch-2 Internship Program</h3>

        <p className="text-gray-600 leading-relaxed">
          Join our hands-on program to work on innovative AI projects and collaborate with industry experts. We're
          seeking candidates interested in AI, ML, Robotics, Blockchain, and more. Open to undergraduates, graduates,
          and self-taught individuals passionate about technology.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-medium">
            Artificial Intelligence
          </span>
          <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-medium">
            Machine Learning
          </span>
          <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-medium">Robotics</span>
          <span className="px-3 py-1 bg-orange-100 text-brand-orange rounded-full text-sm font-medium">Blockchain</span>
        </div>

        <div className="flex justify-end">
          <Link href="/internship">
            <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Apply Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

function JobCard({ title, location, type, description }: JobCardProps) {
  return (
    <motion.div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 card-hover" variants={fadeInUp}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{type}</span>
      </div>

      <p className="text-gray-500 mb-4">{location}</p>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Posted 2 weeks ago</span>
        <motion.button
          className="text-brand-orange hover:text-brand-red transition-colors flex items-center gap-1 group"
          whileHover={{ x: 5 }}
        >
          <span>View Details</span>
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  )
}

function CareersPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Heading and Input */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-8 leading-tight">
                Join our community to receive updates
              </h1>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-3 bg-white shadow-sm">
                  <AiOutlineMail size={24} className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 border-none outline-none bg-transparent"
                  />
                </div>

                <motion.button
                  className="w-full sm:w-auto button-primary py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Stay Connected
                </motion.button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/career.png"
                width={731}
                height={441}
                alt="Careers at iCog Labs"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Why Join iCog Labs?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and technology in Africa and beyond. We offer a
              collaborative environment where innovation thrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work alongside talented professionals in a supportive environment that encourages creativity and
                innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaBriefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Impactful Work</h3>
              <p className="text-gray-600">
                Contribute to projects that are making a real difference in Africa and around the world through
                cutting-edge AI solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and development with access to resources, mentorship, and opportunities to advance
                your career.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            className="text-4xl font-heading font-bold gradient-text mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Internship Programs
          </motion.h2>

          <div className="space-y-8">
            <InternshipCard />
            <InternshipCard />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role to match your skills and passion.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <JobCard
              title="Senior AI Research Scientist"
              location="Addis Ababa, Ethiopia"
              type="Full-time"
              description="Lead research initiatives in artificial intelligence, focusing on machine learning algorithms and natural language processing applications."
            />

            <JobCard
              title="Robotics Engineer"
              location="Addis Ababa, Ethiopia"
              type="Full-time"
              description="Design, develop, and test robotic systems and components for various applications, including automation and human-robot interaction."
            />

            <JobCard
              title="Blockchain Developer"
              location="Remote"
              type="Full-time"
              description="Develop and implement blockchain solutions, smart contracts, and decentralized applications for various industries."
            />

            <JobCard
              title="UI/UX Designer"
              location="Addis Ababa, Ethiopia"
              type="Full-time"
              description="Create intuitive and engaging user interfaces for AI-powered applications, focusing on user experience and accessibility."
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button className="button-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View All Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage

