"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import NeuralNetwork from "../Components/NeuralNetwork"

interface TeamMemberProps { 
  image: string
  name: string
  position: string
}

function TeamMember({ image, name, position }: TeamMemberProps) {
  return (
    <motion.div className="group relative overflow-hidden rounded-lg" whileHover={{ y: -5 }}>
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
      <div className="relative rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <div className="relative h-[440px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="text-lg text-gray-300">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface MissionVisionProps {
  title: string
  text: string
  icon: string
  iconWidth?: number
}

function MissionVision({ title, text, icon, iconWidth = 80 }: MissionVisionProps) {
  return (
    <motion.div
      className="flex flex-col gap-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-75 blur-sm"></div>
          <div className="relative bg-gray-900 p-4 rounded-full">
            <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={iconWidth}
              height={iconWidth}
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="text-3xl font-medium text-white tracking-wide">{title}</h3>
      </div>
      <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">{text}</p>
    </motion.div>
  )
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <NeuralNetwork />
      </div>

      {/* What is iCog Labs Section */}
      <section className="container mx-auto py-20 px-4 md:px-6 relative">
        <Spotlight className="-top-40 left-0" fill="orange" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 opacity-75 blur-md"></div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800">
                  <Image
                    src="/images/about-us1.png"
                    alt="About iCog Labs"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                <TextGenerateEffect words="What is iCog Labs?" />
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                We are a team of visionary software professionals, dedicated to advancing the frontier of artificial
                intelligence research and applications.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="mt-4">Read more</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 relative">
        <BackgroundBeams className="absolute inset-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <MissionVision
            icon="/images/bright.png"
            title="Vision"
            text="A breakthrough in the capability of AI systems to learn, think, and create much more progressive innovations for a better living for people living in Africa and Worldwide."
          />

          <MissionVision
            icon="/images/mission.png"
            title="Mission"
            text="To develop cutting-edge AI technologies that address real-world challenges and improve the quality of life for people in Africa and around the world."
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember image="/images/Getnet-Assefa 1.png" name="Getnet Assefa" position="CEO of iCog Labs" />

            <TeamMember
              image="/images/optimized-betin-skylum 1.png"
              name="Betelhem Dessie"
              position="CEO of iCog Acc"
            />

            <TeamMember
              image="/images/photo_2024-10-30_10-06-32 1.png"
              name="Hruy Tsegaye"
              position="CEO of Mindplex"
            />
          </div>
        </motion.div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Our Focus Areas</h3>

          <HoverEffect
            items={[
              {
                title: "Artificial Intelligence",
                description: "Developing cutting-edge AI solutions for real-world problems",
                link: "#",
              },
              {
                title: "Robotics",
                description: "Building advanced robotic systems with human-like capabilities",
                link: "#",
              },
              {
                title: "Machine Learning",
                description: "Creating systems that learn and improve from experience",
                link: "#",
              },
              {
                title: "Blockchain",
                description: "Implementing decentralized solutions for various applications",
                link: "#",
              },
            ]}
          />
        </div>
      </section>
    </main>
  )
}

