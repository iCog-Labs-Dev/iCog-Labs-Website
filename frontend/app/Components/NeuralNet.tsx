"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number[]
  isInteractive?: boolean
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = null
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 40
    const interactiveNodeCount = 10 // Number of nodes that will follow the mouse
    const connectionDistance = 150
    const maxConnections = 5

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        connections: [],
        isInteractive: i < interactiveNodeCount, // First few nodes will be interactive
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance && nodes[i].connections.length < maxConnections) {
            nodes[i].connections.push(j)
          }
        }
      }
    }

    // Animation
    let animationFrameId: number
    let pulseTime = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      pulseTime += 0.01

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // If node is interactive and mouse is over canvas, move towards mouse
        if (node.isInteractive && mouseRef.current) {
          const dx = mouseRef.current.x - node.x
          const dy = mouseRef.current.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only move if not too close to mouse
          if (distance > 50) {
            const angle = Math.atan2(dy, dx)
            const strength = 0.2 * (1 - Math.min(1, distance / 300))
            node.vx += Math.cos(angle) * strength
            node.vy += Math.sin(angle) * strength
          }

          // Add some damping to prevent excessive speed
          node.vx *= 0.98
          node.vy *= 0.98
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1

        // Draw connections
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]
          const dx = connectedNode.x - node.x
          const dy = connectedNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw if still in range
          if (distance < connectionDistance * 1.5) {
            const opacity = 1 - distance / (connectionDistance * 1.5)

            // Create gradient for connection
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)
            gradient.addColorStop(0, `rgba(249, 115, 22, ${opacity * 0.5})`)
            gradient.addColorStop(1, `rgba(249, 115, 22, ${opacity * 0.1})`)

            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()

            // Draw pulse effect along the connection
            const pulsePosition = (Math.sin(pulseTime * 2 + i * 0.1) + 1) / 2
            const pulseX = node.x + dx * pulsePosition
            const pulseY = node.y + dy * pulsePosition

            ctx.beginPath()
            ctx.fillStyle = `rgba(249, 115, 22, ${opacity * 0.8})`
            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        // Draw node with different color if interactive
        ctx.beginPath()
        ctx.fillStyle = node.isInteractive
          ? `rgba(249, 115, 22, ${0.5 + Math.sin(pulseTime + i) * 0.2})`
          : `rgba(249, 115, 22, ${0.3 + Math.sin(pulseTime + i) * 0.2})`
        ctx.arc(node.x, node.y, node.radius * (node.isInteractive ? 1.5 : 1), 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />
}

