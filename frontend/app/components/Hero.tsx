"use client";
import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "./UI/background-boxes";
import { ArrowDown } from "lucide-react";
import { SectionHeader } from "./sectionHeader";

const scrollToContent = () => {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black z-0">
        
      </div>

      
      <Boxes className="opacity-30 hover:opacity-50 transition-opacity duration-300" />

      

      {/* Foreground Content  */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-6 inline-block"
        >
          <SectionHeader
            title="High cognitive systems"
            center
            mb="4"
            className="text-center" 
          />

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3  }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text font-comic-">iCog</span>
              <span className="text-white"> Labs</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Engineering the Future of Intelligence
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-button px-6 py-3 rounded-md text-lg"
          >
            Explore
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border border-orange-800 hover:border-orange-600 text-white rounded-md transition-all duration-300 text-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Hero;