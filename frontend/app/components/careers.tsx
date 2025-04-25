"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "./icons/arrow-right"; // Reuse your icon component

export  default function InternshipSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
              Career Pathways
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Launch Your Career <br />
              Through Our <span className="text-indigo-600 dark:text-indigo-400">Internship Program</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We believe exceptional talent emerges through hands-on experience. 
              Our internship program is designed to be your launchpad into the tech industry.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Real Project Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Work on live projects that impact our business and clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mentorship & Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn from industry experts with regular 1:1 guidance sessions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Pathway to Full-Time</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Top performers receive full-time employment offers upon completion.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/internship-application" // Link to your existing form
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 group"
            >
              Apply for Internship
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          {/* Visual element */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Internship Tracks</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Choose your specialization and grow with purpose
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technical Development</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Engineering, Data Science, DevOps</p>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Product & Design</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">UX/UI, Product Management</p>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Business Operations</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Marketing, Sales, People Ops</p>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <span className="inline-block text-xs font-medium text-gray-500 dark:text-gray-400">
                    Rolling applications · 3-6 month programs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}