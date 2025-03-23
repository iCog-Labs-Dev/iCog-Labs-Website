"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
  }
}

export default function FuturisticTeam() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Getnet Assefa",
      role: "CEO of iCog Labs",
      image: "/images/Getnet-Assefa 1.png",
      bio: "Founder and CEO of iCog Labs, leading AI research and development in Ethiopia.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Betelhem Dessie",
      role: "CEO of iCog Acc",
      image: "/images/optimized-betin-skylum 1.png",
      bio: "Leading the iCog Acc initiative to empower the next generation of tech innovators.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Hruy Tsegaye",
      role: "CEO of Mindplex",
      image: "/images/photo_2024-10-30_10-06-32 1.png",
      bio: "Driving innovation at Mindplex, connecting AI and human creativity.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="w-full py-24 bg-gray-950">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          <span className="gradient-text">Leadership</span> Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-black border border-orange-800/30 transition-all duration-300 group">
                {/* Glowing border effect on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 ${
                    activeId === member.id ? "opacity-100" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-orange to-brand-red opacity-30 blur-md" />
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative p-6 z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>

                  {/* Bio with reveal animation */}
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                    <p className="text-gray-400 mb-4">{member.bio}</p>

                    {/* Social links */}
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          <FaTwitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Futuristic elements */}
                <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-orange-500 group-hover:animate-pulse" />
                <div className="absolute bottom-3 left-3 h-1 w-10 bg-gradient-to-r from-brand-orange to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

