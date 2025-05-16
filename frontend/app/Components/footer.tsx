"use client";

import { FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

import Image from 'next/image';

function GearIcon({ className, size = 24 }) {
  return (
    <div 
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/gear.svg" 
        alt="Gear icon"
        width={size}
        height={size}
        className="w-full h-full" 
      />
    </div>
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
              className="h-17 w-17 brightness-120 contrast-120"   
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