"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function BrainStructure() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Subtle floating animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      // Subtle floating movement
      const translateY = Math.sin(time) * 10
      const translateX = Math.sin(time * 0.8) * 5

      container.style.transform = `translate(${translateX}px, ${translateY}px)`

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="relative w-[800px] h-[800px] opacity-20">
        <Image src="/images/brain-circuit.png" alt="Brain Circuit" fill className="object-contain" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 mix-blend-overlay" />
      </div>
    </div>
  )
}

