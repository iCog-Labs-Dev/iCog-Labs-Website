// app/internships/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "../components/icons/arrow-right";
import { SectionHeader } from "../components/sectionHeader";
import { GearIcon } from "../components/icons/gear-icon";


export default function InternshipsPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-orange-500/10 filter blur-[120px]"></div>
          <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-orange-500/10 filter blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <SectionHeader 
              title="2025 Batch -1 Internship Program" 
              center 
              mb="6"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-orange-500">iCog Labs</span> AI Internship
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Premier program designed to train and develop exceptional talent through extensive hands-on experience in cutting-edge technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Focus Areas</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Artificial Intelligence / AGI",
                "Machine Learning",
                "Advanced Computer Science",
                "Computational Linguistics / LLM",
                "Computational Biology",
                "Robotics & Embodiment",
                "Blockchain",
                "DevOps / SysAdmin",
                "Web & Mobile Development",
                "Emerging Technologies"
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <h3 className="font-medium text-white">{area}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility & Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <GearIcon className="text-orange-500" size={20} />
                Eligibility
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Open to undergraduates, graduates, and self-taught individuals
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Passion for AI and related technologies required
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Highly qualified candidates may receive full-time offers
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Highlight all relevant skills and experiences
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Commitment
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Minimum 10 hours per week in-person commitment
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Ethiopian citizens must be residing in Ethiopia
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  Open to applicants across Africa and Asia
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                  International talent encouraged to apply
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Application Form</h2>
            <p className="text-gray-400 mb-8">Complete all required fields to apply for the internship program</p>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Alternate Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Date of Birth (GC) *</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Gender *</label>
                  <select
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Country *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">City of Residence *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Education Level *</label>
                <select
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select your education level</option>
                  <option value="self-taught">Self Taught</option>
                  <option value="highschool">Highschool</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="bachelors">BA/BSC</option>
                  <option value="masters">MA/MSC</option>
                  <option value="phd">PHD</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Have you taken any online or in-person courses in the listed areas? *
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input type="radio" name="courses" value="yes" required className="text-orange-500" />
                    <span className="ml-2 text-gray-300">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="courses" value="no" className="text-orange-500" />
                    <span className="ml-2 text-gray-300">No</span>
                  </label>
                </div>
              </div>

              {/* Commitment */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Promised hours of commitment per Week *
                </label>
                <input
                  type="number"
                  min="10"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Minimum 10 hours"
                />
              </div>

              {/* GitHub */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">GitHub Account *</label>
                <input
                  type="url"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              {/* How did you hear */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  How did you first hear about iCog Labs? *
                </label>
                <select
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="hackindia">HackIndia</option>
                  <option value="telegram">Telegram</option>
                  <option value="techevent">Tech Event</option>
                  <option value="website">Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Briefly explain why you should get this opportunity *
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">CV/Resume *</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-700 hover:border-orange-500 transition-colors rounded-lg cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pt-1 text-sm text-gray-400">Upload your resume (Max 10MB)</p>
                    </div>
                    <input 
                      type="file" 
                      className="opacity-0" 
                      accept=".pdf,.doc,.docx" 
                      required 
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              Questions About the Internship Program?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contact our HR team at <span className="text-orange-400">internships@icoglabs.com</span>
            </p>
            <a
              href="mailto:internships@icoglabs.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-600 text-orange-400 hover:bg-orange-900/30 font-medium rounded-lg transition-colors duration-300"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}