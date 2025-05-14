"use client"

import { useEffect, useState } from "react"
import { Settings } from "lucide-react"

interface Gear {
  id: number
  size: number
  top: number
  left: number
  opacity: number
  rotationSpeed: number
  rotation: number
  color: string
}

export default function LogoGears() {
  const [gears, setGears] = useState<Gear[]>([])

  useEffect(() => {
    // Create 3 non-overlapping gears
    const newGears: Gear[] = [
      {
        id: 1,
        size: 120,
        top: 50,
        left: 30,
        opacity: 0.8,
        rotationSpeed: 5,
        rotation: 0,
        color: "#FE8E03",
      },
      {
        id: 2,
        size: 90,
        top: 30,
        left: 60,
        opacity: 0.7,
        rotationSpeed: -8,
        rotation: 45,
        color: "#F03401",
      },
      {
        id: 3,
        size: 70,
        top: 70,
        left: 70,
        opacity: 0.6,
        rotationSpeed: 12,
        rotation: 90,
        color: "#FE8E03",
      },
    ]

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
            filter: "drop-shadow(0 0 10px rgba(254, 142, 3, 0.5))",
          }}
        >
          <Settings
            style={{
              width: `${gear.size}px`,
              height: `${gear.size}px`,
              color: gear.color,
            }}
          />
        </div>
      ))}
    </div>
  )
}

