"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Cpu, Globe, Rocket, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FuturisticCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      title: "Artificial Intelligence",
      description: "Next generation neural networks with quantum processing capabilities",
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      stat: "500+ petaflops",
    },
    {
      title: "Machine Learning",
      description: "Advanced algorithms that learn and adapt from data patterns",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      stat: "99.8% accuracy",
    },
    {
      title: "Blockchain",
      description: "Secure, transparent distributed ledger technology",
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      stat: "10K+ transactions/sec",
    },
    {
      title: "AGI Research",
      description: "Pushing boundaries toward artificial general intelligence",
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      stat: "Breakthrough: 2030",
    },
    {
      title: "Robotics",
      description: "Autonomous systems with advanced perception and mobility",
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      stat: "1ms response time",
    },
  ]

  return (
    <section className="w-full py-24 bg-black">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          <span className="gradient-text">Focus</span> Areas
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden bg-black border-orange-800/50 text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] h-full ${
                  hoveredCard === index
                    ? "border-2 transform scale-[1.02] shadow-[0_0_20px_rgba(249,115,22,0.4)] border-orange-600"
                    : "border"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-800 to-orange-400" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-600 to-orange-400" />

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {card.icon}
                    <div
                      className={`h-2 w-2 rounded-full bg-orange-500 ${hoveredCard === index ? "animate-pulse" : ""}`}
                    />
                  </div>
                  <CardTitle className="text-xl mt-4 font-bold text-white">{card.title}</CardTitle>
                  <CardDescription className="text-gray-400">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-mono text-orange-500">{card.stat}</div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-xs text-gray-500">iCOG.LABS</div>
                  <div
                    className={`flex items-center text-orange-500 transition-all duration-100 ${
                      hoveredCard === index ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <span className="mr-1 text-sm">Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardFooter>

                {/* Futuristic background elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-orange-500/20 z-0" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-orange-500/10 z-0" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

