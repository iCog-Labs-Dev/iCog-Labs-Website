"use client";

import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Join Our Team Section */}
      <div className="bg-white dark:bg-gray-950 py-20 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore exciting career and internship opportunities with us.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              See Open Roles
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 relative">
        <div className="container mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Logo Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <img 
                src="/iCogLogo.png" 
                alt="Company Logo" 
                className="h-10 mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Engineering the Future of <span className="text-indigo-600 dark:text-indigo-400 font-medium">Intelligence</span>
              </p>
              <div className="flex space-x-4">
                {[FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {['Company', 'Resources', 'Legal'].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <li key={j}>
                      <a 
                        href="#" 
                        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {title} Link {j + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>
    </footer>
  );
}