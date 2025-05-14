"use client"

import { motion } from "framer-motion"
import NeuralNetwork from "./NeuralNetwork"
import BrainStructure from "./BrainStructure"
import LogoGears from "./LogoGears"
import { ArrowDown } from "lucide-react"

export default function FuturisticHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Brain Structure */}
      <BrainStructure />

      {/* Logo Gears */}
      <LogoGears />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-brand-orange to-brand-red bg-clip-text text-transparent">iCog</span>
            <span className="text-white"> Labs</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Engineering the Future of Intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(254, 142, 3, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg text-white font-medium px-8 py-3 rounded-lg transition-all"
          >
            Explore
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-white border border-white/30 font-medium px-8 py-3 rounded-lg transition-all hover:bg-white/10"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        >
          <ArrowDown className="text-white/70 h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}

