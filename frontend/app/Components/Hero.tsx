"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NeuralNetwork from "./NeuralNet";
import LogoGears from "./LogoGears";
import { ArrowDown } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const scrollToContent = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black to-gray-900">
      {/* Neural Network Background */}
      {isClient && (
        <div className="absolute inset-0 z-10">
          <NeuralNetwork className="w-full h-full opacity-90 blur-md" />
        </div>
      )}

      {/* Logo Gears */}
      <div className="absolute inset-0 z-20">
        <div className="relative w-full h-full">
          <LogoGears className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 h-1/2" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
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
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
              iCog
            </span>
            <span className="text-white"> Labs</span>
          </h1>
        </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          <TextGenerateEffect
            words="Engineering the Future of Intelligence"
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            duration={0.7}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] text-lg"
          >
            Explore
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border border-orange-800 hover:border-orange-600 text-white rounded-md transition-all duration-300 text-lg"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
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

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero
