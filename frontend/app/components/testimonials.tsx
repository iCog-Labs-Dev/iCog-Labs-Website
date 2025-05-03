"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { QuoteIcon } from "./icons/quote-icon";
import { BackgroundGradient } from "./UI/background-gradient";

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

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content: "Working with this team transformed our digital presence. Their creative approach and technical expertise delivered results beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, Startup Ventures",
    content: "The level of professionalism and attention to detail is unmatched. They understood our vision perfectly and executed flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager, DesignHub",
    content: "Incredible collaboration from start to finish. They became true partners in our product development journey.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, FinTech Solutions",
    content: "Technical excellence combined with creative problem-solving. We've seen a 40% improvement in user engagement since launch.",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];  

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Gear icon in top right corner */}
      <div className="absolute top-8 right-8 opacity-10">
        <GearIcon 
          className="text-orange-500 animate-spin-slow" 
          size={120}
        />
      </div>
      <div className="absolute top-10 left-8 opacity-10">
        <GearIcon 
          className="text-orange-500 animate-spin-slow" 
          size={120}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
            <span className="text-orange-500 font-mono uppercase tracking-widest text-sm">
              Client Experiences
            </span>
            <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Trusted By Innovators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Join hundreds of satisfied clients who've transformed their vision into reality
          </motion.p>
        </div>

        {/* Rest of your component remains the same */}
        {/* Testimonial Cards */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setActiveIndex(index)}
                className="relative h-full"
              >
                <BackgroundGradient 
                  className="rounded-3xl p-[2px] h-full"
                  gradientClassName="from-orange-500 via-amber-500 to-yellow-500"
                >
                  <div
                    className={`relative h-full bg-gray-900 rounded-3xl p-8 transition-all duration-300 border border-gray-800 ${
                      activeIndex === index ? "scale-[1.02] shadow-lg" : "shadow-md"
                    }`}
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <QuoteIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-300 mb-8 mt-4">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-800 shadow-md"
                        />
                        {activeIndex === index && (
                          <motion.div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-gray-800"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>

          
          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="px-4"
              >
                <BackgroundGradient 
                  className="rounded-3xl p-[2px]"
                  gradientClassName="from-orange-500 via-amber-500 to-yellow-500"
                >
                  <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                      <QuoteIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-300 mb-8 mt-4">
                      {testimonials[activeIndex].content}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-800 shadow-md mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-orange-500 w-6"
                      : "bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 shadow-lg z-10 border border-gray-700"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 shadow-lg z-10 border border-gray-700"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default TestimonialsSection;