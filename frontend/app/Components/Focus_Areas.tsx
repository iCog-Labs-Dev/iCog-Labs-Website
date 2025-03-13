"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FocusAreas: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const categories = ["AI Solution", "Machine Learning", "Blockchain", "AGI", "Robotics", "AI Ethics"]

  const focusData = [
    {
      title: "Artificial Solution (AI)",
      description:
        "Our AI research aims to build intelligent systems that can learn, adapt, and solve real-world problems, pushing the boundaries of automation and intelligence.",
      images: [
        "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp",
        "https://media.istockphoto.com/id/1530802302/photo/focus-hand-of-businessman-show-virtual-graphic-data-connect-with-ai-using-ai-to-sucess.webp",
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60",
      ],
      category: "AI Solution",
    },
    {
      title: "Blockchain Innovation",
      description:
        "Exploring the potential of blockchain technology to revolutionize industries by enhancing transparency, security, and efficiency.",
      images: [
        "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60",
        "https://media.istockphoto.com/id/963145218/photo/blockchain-financial-technology-concept-network-encrypted-chain-of-blocks-earth.webp",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=400&auto=format&fit=crop&q=60",
      ],
      category: "Blockchain",
    },
    {
      title: "Machine Learning",
      description:
        "Machine learning is the use of mathematics and statistics to make computers learn from patterns without being explicitly programmed.",
      images: [
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/1957022961/photo/digital-brain-hologram-hud-artificial-intelligence-ai-machine-deep-learning-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZKCU30lp8F1dIrgNHaYt_2IWaO4qtXTAmR49Dvh1Kw=",
        "https://plus.unsplash.com/premium_photo-1682002216109-25c53aa594ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TUx8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/2084953049/photo/neural-network-nodes-deep-learning-artificial-intelligence-machine-learning-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=kySkpXxwGqj4vuZi3UkHtDioMVvUgXDDvGzrkgonU9Q=",
      ],
      category: "Machine Learning",
    },
    {
      title: "AGI",
      description:
        "Artificial General Intelligence (AGI) is a hypothetical AI system that possesses the capacity surpassing the living human beings.",
      images: [
        "https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept-neural-network-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1DVbVP4I_GdGnnIjVZpGr7CepQHqjsev4y5IRcMvaA=",
        "https://media.istockphoto.com/id/2168674934/photo/agi-artificial-general-intelligence-text-on-cpu-digital-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EZICFOVwPeXdXJJEqmkkN6atQze8AKlSczyxPFU92Bw=",
        "https://media.istockphoto.com/id/2165287575/photo/agi-artificial-general-intelligence-text-on-black-digital-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KqyWDgo4mXl42uakcJ63zfS1rmVH2ZPc1uXVP3AzFjA=",
        "https://media.istockphoto.com/id/2159943659/photo/ai-powered-humanoid-robot-with-glass-visor-typing-on-futuristic-touch-keyboard-humanoid-robot.webp?a=1&b=1&s=612x612&w=0&k=20&c=6yW6JQSJWAx76Id9qwFlTlZ1EAe7yoLxaGpRUPQE2xk=",
      ],
      category: "AGI",
    },
    {
      title: "Robotics",
      description:
        "Robotics is the engineering discipline dealing with the design, construction, operation, and maintenance of robots that simplify mechanical work done by humans in various aspects of life.",
      images: [
        "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uk9CT1RJQ1N8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Uk9CT1RJQ1N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJPQk9USUNTfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJPQk9USUNTfGVufDB8fDB8fHww",
      ],
      category: "Robotics",
    },
    {
      title: "AI Ethics",
      description:
        "Every technology can be harmful without proper laws to manage unauthorized use. AI requires legal frameworks to achieve desired goals while preventing misuse.",
      images: [
        "https://media.istockphoto.com/id/1812733266/photo/ai-and-ethics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgNUtmsw0ghQJulvbenSmt7FMmvpHyZd9xmy_qmHvCY=",
        "https://media.istockphoto.com/id/2163506576/photo/ai-laws-and-regulations-concept-hand-typing-on-laptop-with-digital-icons-representing.webp?a=1&b=1&s=612x612&w=0&k=20&c=XW8odp5UaHdt1tqWunC4OOHSqtf91n-tLKOO_wx-oMk=",
        "https://media.istockphoto.com/id/2075197848/photo/ai-and-law.webp?a=1&b=1&s=612x612&w=0&k=20&c=CAE6ZEjPLe5rC6ZBaEkPDa61fMcg2iRkhiZ1vK6Onek=",
        "https://media.istockphoto.com/id/959737582/photo/man-concerned-by-implications-of-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=5FMq4m1WLtfwOg4l0-9GILZ9EB3VW0wL45qILfuaj08=",
      ],
      category: "AI Ethics",
    },
  ]

  const filteredData = activeCategory ? focusData.filter((item) => item.category === activeCategory) : focusData

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
            Driving Innovation Across AI & Emerging Technologies
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pioneering advancements in AI, ML, AGI, Blockchain, Robotics, and AI Ethics to shape the future of
            technology.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category === activeCategory ? null : category)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-bg text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-brand-orange"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="space-y-12" initial="hidden" animate="visible" variants={containerVariants}>
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
              variants={itemVariants}
              layoutId={`card-container-${index}`}
              onClick={() => setSelectedItem(selectedItem === index ? null : index)}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 p-3 bg-gray-50">
                  {item.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="h-40 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${item.title} image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                  <motion.div layoutId={`card-title-${index}`}>
                    <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">{item.title}</h3>
                  </motion.div>
                  <motion.p className="text-gray-600 mb-6 leading-relaxed">{item.description}</motion.p>
                  <motion.span className="inline-block px-4 py-1 rounded-full gradient-bg text-white text-sm font-medium">
                    {item.category}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              layoutId={`card-container-${selectedItem}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <motion.h3
                  className="text-3xl font-heading font-bold mb-6 gradient-text"
                  layoutId={`card-title-${selectedItem}`}
                >
                  {filteredData[selectedItem].title}
                </motion.h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{filteredData[selectedItem].description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {filteredData[selectedItem].images.map((image, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden h-60">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${filteredData[selectedItem].title} image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <motion.button
                    className="button-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FocusAreas

