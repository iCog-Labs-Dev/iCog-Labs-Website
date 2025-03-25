"use client";

import { useEffect, useState } from "react";
import { Settings } from "lucide-react";

interface Gear {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  rotation: number;
  color: string;
}

export default function LogoGears() {
  const [gears, setGears] = useState<Gear[]>([]);
  const [rotationDirection, setRotationDirection] = useState(0); 
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const newGears: Gear[] = [
      { id: 1, size: 120, top: 50, left: 30, opacity: 0.8, rotation: 0, color: "#FE8E03" },
      { id: 2, size: 90, top: 30, left: 60, opacity: 0.7, rotation: 0, color: "#F03401" },
      { id: 3, size: 70, top: 70, left: 70, opacity: 0.6, rotation: 0, color: "#FE8E03" },
    ];
    setGears(newGears);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 1 : -1; // Scroll direction detection
      setRotationDirection(direction);
      setIsScrolling(true);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const stopScrollTimeout = () => {
      setTimeout(() => {
        setIsScrolling(false); // Stop the rotation when scrolling stops
      }, 200);
    };

    window.addEventListener("scroll", stopScrollTimeout);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", stopScrollTimeout);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (isScrolling) {
        setGears((prevGears) =>
          prevGears.map((gear) => ({
            ...gear,
            rotation: (gear.rotation + rotationDirection * 3) % 360, // Rotation speed
          }))
        );
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationDirection, isScrolling]);

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
  );
}
