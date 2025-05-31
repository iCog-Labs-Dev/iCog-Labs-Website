"use client";

import { motion } from "framer-motion";
import { GearIcon } from "../components/icons/gear-icon";

export default function CTAClient() {
  return (
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <GearIcon className="mx-auto text-orange-500 mb-6" size={48} />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Want to stay updated with our latest insights?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Subscribe to our newsletter for monthly deep dives and exclusive
          content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
}
