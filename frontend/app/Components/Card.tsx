"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

interface CardProps {
  img?: string
  text: string
  title: string
  date?: string
  link?: string
}

function Card({ img, text, title, date, link = "#" }: CardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden card-hover max-w-md h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {img && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={img || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-heading font-bold mb-3 gradient-text line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{text}</p>
        <div className="flex justify-between items-center mt-auto">
          {date ? (
            <span className="text-sm text-gray-500">{date}</span>
          ) : (
            <span className="invisible">placeholder</span>
          )}
          <Link
            href={link}
            className="text-brand-orange hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <span>Read more</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

interface ImageCardProps {
  img: string
  title: string
  date: string
  primary?: boolean
  link?: string
}

function ImageCard({ img, title, date, primary = false, link = "#" }: ImageCardProps) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden card-hover"
      style={{
        minHeight: primary ? "600px" : "350px",
        width: "100%",
      }}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">{date}</span>
          <Link
            href={link}
            className="text-white hover:text-brand-orange transition-colors flex items-center gap-1 group"
          >
            <span>Read more</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export { Card, ImageCard }

