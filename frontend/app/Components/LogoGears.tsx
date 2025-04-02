"use client"

import { useEffect, useState } from "react"
import { Settings } from "lucide-react"

type Gear = {
  id: number
  size: number
  top: number
  left: number
  opacity: number
  rotationSpeed: number
  rotation: number
}

export default function BackgroundGears() {
  const [gears, setGears] = useState<Gear[]>([])

  useEffect(() => {
    // Generate gears with minimal overlap
    const numberOfGears = 10
    const newGears: Gear[] = []

    // Create a grid-based placement to reduce overlaps
    const createGear = (id: number) => {
      // Size between 40px and 100px
      const size = Math.floor(Math.random() * 150) + 40

      // Position with some spacing consideration
      let top, left
      let attempts = 0
      let validPosition = false

      while (!validPosition && attempts < 20) {
        top = Math.random() * 100
        left = Math.random() * 100

        // Check for severe overlaps only
        validPosition = true
        for (const existingGear of newGears) {
          const dx = Math.abs(left - existingGear.left)
          const dy = Math.abs(top - existingGear.top)
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only avoid severe overlaps (centers very close)
          if (distance < Math.max(size, existingGear.size) / 200) {
            validPosition = false
            break
          }
        }

        attempts++
      }

      return {
        id,
        size,
        top,
        left,
        opacity: Math.random() * 0.25 + 0.05, // Random opacity between 0.05 and 0.2
        rotationSpeed: Math.random() * 65 + 5, // Random rotation speed
        rotation: Math.random() * 360, // Initial random rotation
      }
    }

    // Generate gears
    for (let i = 0; i < numberOfGears; i++) {
      newGears.push(createGear(i))
    }

    setGears(newGears)

    // Animation loop for rotation
    let animationFrameId: number
    let lastTime = 0

    const animate = (time: number) => {
      if (!lastTime) lastTime = time
      const deltaTime = (time - lastTime) / 1000 // Convert to seconds
      lastTime = time

      setGears((prevGears) =>
        prevGears.map((gear) => ({
          ...gear,
          rotation: (gear.rotation + gear.rotationSpeed * deltaTime) % 360,
        })),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Add some fixed gears in corners to ensure visibility
    setGears((prevGears) => [
      ...prevGears,
      {
        id: numberOfGears,
        size: 80,
        top: 10,
        left: 10,
        opacity: 0.12,
        rotationSpeed: 8,
        rotation: 45,
      },
      {
        id: numberOfGears + 1,
        size: 100,
        top: 85,
        left: 90,
        opacity: 0.15,
        rotationSpeed: 6,
        rotation: 120,
      },
      {
        id: numberOfGears + 2,
        size: 70,
        top: 15,
        left: 85,
        opacity: 0.1,
        rotationSpeed: 10,
        rotation: 200,
      },
      {
        id: numberOfGears + 3,
        size: 190,
        top: 80,
        left: 15,
        opacity: 0.63,
        rotationSpeed: 7,
        rotation: 270,
      },
    ])

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {gears.map((gear) => (
        <div
          key={gear.id}
          className="absolute"
          style={{
            top: `${gear.top}%`,
            left: `${gear.left}%`,
            transform: `translate(-50%, -50%) rotate(${gear.rotation}deg)`,
            opacity: gear.opacity,
            transition: "opacity 0.3s ease",
          }}
        >
          <Settings
            className="text-orange-500"
            style={{
              width: `${gear.size}px`,
              height: `${gear.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

