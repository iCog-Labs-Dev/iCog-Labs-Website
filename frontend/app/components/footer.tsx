"use client";

import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function GearIcon({ className, size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.055.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 1 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 pt-16 pb-8">
      {/* Gear background element */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <GearIcon 
          className="text-orange-500 animate-spin-slow" 
          size={250}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left-aligned logo section - made larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0 md:w-1/3"
          >
            <img 
              src="/iCogLogo.png" 
              alt="iCog Labs Logo" 
              className="h-16 mb-4" // Increased logo size
            />
            <p className="text-gray-400 text-lg max-w-xs"> {/* Increased text size */}
              Engineering the Future of <span className="text-orange-400 font-medium">Intelligence</span>
            </p>
          </motion.div>

          {/* Right-aligned content */}
          <div className="md:w-2/3 flex flex-col">
            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-gray-300 font-medium mb-4 text-lg">Connect With Us</h3>
              <div className="flex space-x-6">
                {[FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    className="text-gray-500 hover:text-orange-400 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-6 h-6" /> {/* Increased icon size */}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-gray-800"
            >
              <p className="text-gray-500 text-sm text-left">
                © {new Date().getFullYear()} iCog Labs. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}