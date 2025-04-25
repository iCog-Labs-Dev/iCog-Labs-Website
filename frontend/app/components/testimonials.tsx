"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { QuoteIcon } from "./icons/quote-icon"; // You can use any quote icon

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content:
      "Working with this team transformed our digital presence. Their creative approach and technical expertise delivered results beyond our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, Startup Ventures",
    content:
      "The level of professionalism and attention to detail is unmatched. They understood our vision perfectly and executed flawlessly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager, DesignHub",
    content:
      "Incredible collaboration from start to finish. They became true partners in our product development journey.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, FinTech Solutions",
    content:
      "Technical excellence combined with creative problem-solving. We've seen a 40% improvement in user engagement since launch.",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

 function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Trusted by innovative companies and creative professionals worldwide
          </motion.p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  activeIndex === index ? "ring-2 ring-indigo-500" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-start mb-6">
                  <QuoteIcon className="w-8 h-8 text-indigo-500 opacity-70" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating highlight card for mobile */}
          <div className="lg:hidden mt-8">
            <motion.div
              animate={{
                x: activeIndex * 100,
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className="absolute -top-4 left-0 w-24 h-2 bg-indigo-500 rounded-full"
            />
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index
                      ? "bg-indigo-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection