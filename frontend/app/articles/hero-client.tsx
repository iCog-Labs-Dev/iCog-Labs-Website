"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../components/sectionHeader";

export default function HeroClient() {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <SectionHeader title="Thought Leadership" center mb="6" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-orange-500">Knowledge</span> Repository
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Deep dives, research findings, and innovative perspectives from our
          team of experts
        </p>
      </motion.div>
    </div>
  );
}
