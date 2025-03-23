"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  connections: number[]
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Initialize particles
    function initParticles() {
      const particles: Particle[] = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const vx = (Math.random() - 0.5) * 0.5
        const vy = (Math.random() - 0.5) * 0.5

        // Create connections to other particles (neural network style)
        const connections: number[] = []
        const connectionCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionCount; j++) {
          const connectedTo = Math.floor(Math.random() * particleCount)
          if (connectedTo !== i) {
            connections.push(connectedTo)
          }
        }

        particles.push({
          x,
          y,
          vx,
          vy,
          radius,
          color: `rgba(255, 140, 0, ${Math.random() * 0.5 + 0.2})`,
          connections,
        })
      }

      particlesRef.current = particles
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw connections first (so they appear behind particles)
        particle.connections.forEach((connectedIndex) => {
          if (connectedIndex < particlesRef.current.length) {
            const connectedParticle = particlesRef.current[connectedIndex]
            const dx = connectedParticle.x - particle.x
            const dy = connectedParticle.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Only draw connections within a certain distance
            if (distance < 150) {
              // Calculate opacity based on distance
              const opacity = 1 - distance / 150

              // Draw connection line
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(connectedParticle.x, connectedParticle.y)
              ctx.strokeStyle = `rgba(255, 140, 0, ${opacity * 0.2})`
              ctx.lineWidth = 0.5
              ctx.stroke()

              // Draw moving particles along the connection lines (data flow)
              if (Math.random() > 0.97) {
                const pulsePosition = Math.random()
                const pulseX = particle.x + dx * pulsePosition
                const pulseY = particle.y + dy * pulsePosition

                ctx.beginPath()
                ctx.arc(pulseX, pulseY, 1, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 140, 0, ${opacity * 0.8})`
                ctx.fill()
              }
            }
          }
        })

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Interactive effect with mouse
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
          particle.vx += dx * force * 0.01
          particle.vy += dy * force * 0.01

          // Limit velocity
          const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
          if (speed > 2) {
            particle.vx = (particle.vx / speed) * 2
            particle.vy = (particle.vy / speed) * 2
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-40" />
}

