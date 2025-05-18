"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUsers, FaMapMarkerAlt } from "react-icons/fa"
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
      className="flex flex-col lg:flex-row items-center gap-8 bg-gray-900 rounded-xl shadow-sm p-8 overflow-hidden relative border border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      whileHover={{ borderColor: "rgba(254, 142, 3, 0.3)", boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)" }}
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

        <p className="text-gray-300 leading-relaxed">
          Join our hands-on program to work on innovative AI projects and collaborate with industry experts. We're
          seeking candidates interested in AI, ML, Robotics, Blockchain, and more. Open to undergraduates, graduates,
          and self-taught individuals passionate about technology.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Artificial Intelligence
          </span>
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Machine Learning
          </span>
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">Robotics</span>
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            Blockchain
          </span>
        </div>

        <div className="flex justify-end">
          <Link href="/internship">
            <motion.button
              className="gradient-bg text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <FaArrowRight />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

interface JobCardProps {
  title: string
  location: string
  type: string
  description: string
  skills: string[]
  salary?: string
}

function JobCard({ title, location, type, description, skills, salary }: JobCardProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-800 transition-all duration-300"
      variants={fadeInUp}
      whileHover={{
        y: -5,
        borderColor: "rgba(254, 142, 3, 0.3)",
        boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)",
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">{type}</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center text-gray-400 text-sm">
          <FaMapMarkerAlt className="mr-1 text-orange-500" />
          <span>{location}</span>
        </div>

        {salary && (
          <div className="flex items-center text-gray-400 text-sm">
            <FaBriefcase className="mr-1 text-orange-500" />
            <span>{salary}</span>
          </div>
        )}
      </div>

      <p className="text-gray-300 mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm uppercase text-gray-500 mb-2">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Posted 2 weeks ago</span>
        <motion.button
          className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 group"
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
    <div className="pt-24 pb-16 bg-black min-h-screen">
     

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative z-10">
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
                <div className="flex items-center w-full sm:w-auto border border-gray-800 rounded-lg px-4 py-3 bg-gray-900 shadow-sm">
                  <AiOutlineMail size={24} className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 border-none outline-none bg-transparent text-white"
                  />
                </div>

                <motion.button
                  className="w-full sm:w-auto gradient-bg text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Stay Connected</span>
                  <FaArrowRight />
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
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-75 blur-md"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/career.png"
                    width={731}
                    height={441}
                    alt="Careers at iCog Labs"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-gray-950 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Why Join iCog Labs?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and technology in Africa and beyond. We offer a
              collaborative environment where innovation thrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(254, 142, 3, 0.3)",
                boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)",
              }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Collaborative Culture</h3>
              <p className="text-gray-300">
                Work alongside talented professionals in a supportive environment that encourages creativity and
                innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(254, 142, 3, 0.3)",
                boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)",
              }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaBriefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Impactful Work</h3>
              <p className="text-gray-300">
                Contribute to projects that are making a real difference in Africa and around the world through
                cutting-edge AI solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(254, 142, 3, 0.3)",
                boxShadow: "0 10px 25px -5px rgba(254, 142, 3, 0.2)",
              }}
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Growth Opportunities</h3>
              <p className="text-gray-300">
                Continuous learning and development with access to resources, mentorship, and opportunities to advance
                your career.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-16 md:py-24 bg-black relative z-10">
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
      <section className="py-16 md:py-24 bg-gray-950 relative z-10">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
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
              skills={["Machine Learning", "NLP", "Python", "TensorFlow", "Research"]}
              salary="Competitive"
            />

            <JobCard
              title="Robotics Engineer"
              location="Addis Ababa, Ethiopia"
              type="Full-time"
              description="Design, develop, and test robotic systems and components for various applications, including automation and human-robot interaction."
              skills={["Robotics", "ROS", "C++", "Computer Vision", "Control Systems"]}
              salary="Competitive"
            />

            <JobCard
              title="Blockchain Developer"
              location="Remote"
              type="Full-time"
              description="Develop and implement blockchain solutions, smart contracts, and decentralized applications for various industries."
              skills={["Blockchain", "Solidity", "Web3.js", "Smart Contracts", "DApps"]}
              salary="Competitive"
            />

            <JobCard
              title="UI/UX Designer"
              location="Addis Ababa, Ethiopia"
              type="Full-time"
              description="Create intuitive and engaging user interfaces for AI-powered applications, focusing on user experience and accessibility."
              skills={["UI/UX", "Figma", "Adobe XD", "Prototyping", "User Research"]}
              salary="Competitive"
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="gradient-bg text-white font-medium px-8 py-3 rounded-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All Positions
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     </div>
  )
}

export default CareersPage

