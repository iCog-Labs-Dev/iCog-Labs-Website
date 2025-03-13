"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTwitter, FaArrowRight } from "react-icons/fa"

const Footer: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Join Our Team Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl font-heading font-bold gradient-text mb-6" variants={fadeInUp}>
              Join Our Team
            </motion.h2>

            <motion.p className="mb-8 text-lg text-gray-600" variants={fadeInUp}>
              Explore exciting career and internship opportunities with iCog Labs. Join us in shaping the future of
              artificial intelligence.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative inline-block">
              <motion.button
                className="button-primary group flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>See Open Roles</span>
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 -top-6 -left-6 w-16 h-16 rounded-full bg-orange-100"
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

              <motion.div
                className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-full bg-red-100"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Section */}
      <div className="bg-gray-900 text-white pt-16 pb-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FE8E03"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.3,81.3,26.6,73.6,39.2C65.9,51.7,56.1,63.5,43.4,70.8C30.7,78.1,15.3,80.9,0.4,80.3C-14.6,79.7,-29.2,75.7,-42.2,68.4C-55.2,61.1,-66.7,50.4,-74.4,37.2C-82.1,24,-86,8.3,-83.9,-6.2C-81.8,-20.7,-73.7,-34,-63.8,-44.9C-53.8,-55.8,-41.9,-64.3,-29.3,-72C-16.7,-79.7,-3.3,-86.7,9.2,-85.1C21.7,-83.5,30.5,-83.5,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Left: Logo & Motto */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/iCogLogo.png" alt="iCog Labs Logo" width={120} height={120} className="mb-4" />
              <p className="text-gray-400">Engineering the Future of</p>
              <span className="gradient-text font-semibold text-lg">Intelligence</span>
            </motion.div>

            {/* Center: Partners */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-4">Partners</h4>
              <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Image src="/SingularityLogo.png" alt="SingularityNET" width={160} height={60} />
              </div>
            </motion.div>

            {/* Right: Subscription */}
            <motion.div
              className="flex flex-col items-center md:items-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-4">Subscribe to Our Blogs</h4>
              <form className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-gray-800 border border-gray-700 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-orange text-white"
                />
                <button
                  type="submit"
                  className="gradient-bg px-6 py-3 rounded-r-lg hover:brightness-110 transition-all duration-200 flex items-center"
                >
                  <span>Subscribe</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <FooterLinkColumn
              title="Company"
              links={[
                { label: "About Us", href: "/about-us" },
                { label: "Careers", href: "/careers" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ]}
            />

            <FooterLinkColumn
              title="Focus Areas"
              links={[
                { label: "AI Solutions", href: "/focus-areas#ai" },
                { label: "Machine Learning", href: "/focus-areas#ml" },
                { label: "Robotics", href: "/focus-areas#robotics" },
                { label: "Blockchain", href: "/focus-areas#blockchain" },
              ]}
            />

            <FooterLinkColumn
              title="Resources"
              links={[
                { label: "Blog", href: "/blog" },
                { label: "Research Papers", href: "/research" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Documentation", href: "/docs" },
              ]}
            />

            <FooterLinkColumn
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Accessibility", href: "/accessibility" },
              ]}
            />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Left: Copyright */}
            <p className="text-sm text-gray-400">©2024 iCog Labs. All rights reserved.</p>

            {/* Center: Location */}
            <p className="text-sm text-gray-400 mt-2 md:mt-0">Addis Ababa, Ethiopia</p>

            {/* Right: Social Media */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-sm text-gray-400">Follow Us On</p>
              <div className="flex space-x-4">
                <SocialIcon icon={<FaTwitter />} href="#" />
                <SocialIcon icon={<FaInstagram />} href="#" />
                <SocialIcon icon={<FaLinkedin />} href="#" />
                <SocialIcon icon={<FaYoutube />} href="#" />
                <SocialIcon icon={<FaGithub />} href="#" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

// Helper Components
interface FooterLinkColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h5 className="font-semibold text-lg mb-4">{title}</h5>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-400 hover:text-brand-orange transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  return (
    <motion.a
      href={href}
      className="text-gray-400 hover:text-brand-orange transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  )
}

export default Footer

