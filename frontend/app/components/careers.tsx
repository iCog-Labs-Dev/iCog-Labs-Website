"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "./icons/arrow-right";
import { SectionHeader } from "./sectionHeader";
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
export default function InternshipSection() {
  return (
    <section className="py-20 relative bg-gray-950 overflow-hidden">
      <div className="absolute top-10 left-8 opacity-10 ">
        <GearIcon 
          className="text-orange-500 animate-spin-slow" 
          size={120}
        />
      </div>
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      
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
            <SectionHeader 
  title="Career Pathways" 
  mb="4"
/>
            <h2 className="text-4xl font-bold text-white mb-6">
              Launch Your Career <br />
              Through Our <span className="text-orange-400">Internship Program</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We believe exceptional talent emerges through hands-on experience. 
              Our internship program is designed to be your launchpad into the tech industry.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-orange-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Real Project Experience</h3>
                  <p className="text-gray-400">
                    Work on live projects that impact our business and clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-orange-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Mentorship & Growth</h3>
                  <p className="text-gray-400">
                    Learn from industry experts with regular 1:1 guidance sessions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-orange-900/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Pathway to Full-Time</h3>
                  <p className="text-gray-400">
                    Top performers receive full-time employment offers upon completion.
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/internship-application"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-lg transition-colors duration-300 group"
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
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-800">
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
                  <h3 className="text-2xl font-bold text-white mb-2">Internship Tracks</h3>
                  <p className="text-gray-300 mb-6">
                    Choose your specialization and grow with purpose
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <h4 className="font-semibold text-white">Technical Development</h4>
                    <p className="text-sm text-gray-400 mt-1">Engineering, Data Science, DevOps</p>
                  </div>
                  
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <h4 className="font-semibold text-white">Product & Design</h4>
                    <p className="text-sm text-gray-400 mt-1">UX/UI, Product Management</p>
                  </div>
                  
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <h4 className="font-semibold text-white">Business Operations</h4>
                    <p className="text-sm text-gray-400 mt-1">Marketing, Sales, People Ops</p>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <span className="inline-block text-xs font-medium text-gray-500">
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