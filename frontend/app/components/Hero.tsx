"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "./UI/background-boxes";
import { ArrowDown } from "lucide-react"; 

const scrollToContent = () => {
  document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black/70">
    
      {/* Animated Background Boxes */}
      <Boxes />

      {/* Optional soft radial mask effect */}
      <div className="absolute inset-0 w-full h-full z-10 [mask-image:radial-gradient(transparent,black)] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
            <span className="text-orange-500 font-mono uppercase tracking-widest text-sm">
              High Cognitive Systems
            </span>
            <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text">iCog</span>
              <span className="text-white"> Labs</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Engineering the Future of Intelligence
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
        onClick={scrollToContent}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-orange-500 text-sm mb-2">Discover More</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ArrowDown className="h-5 w-5 text-orange-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;