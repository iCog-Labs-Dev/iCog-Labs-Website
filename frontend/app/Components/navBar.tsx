"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa"
import { Menu, MenuItem } from "./ui/navbar-menu" // Assuming the Aeternity Menu component is imported

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null) // For active hover
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // The scroll effect logic can be kept, but we remove the background color change on scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/careers", label: "Careers" },
    { href: "/news", label: "News" },
    { href: "/about-us", label: "About Us" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-transparent`}>
      <div className="container-custom flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/">
          <motion.img
            src="/iCogLogo.png"
            alt="iCog Labs Logo"
            className="w-16 h-16 md:w-20 md:h-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Center: Nav Items with Aceternity UI Styling */}
        <div className="hidden md:block">
          <Menu setActive={setActiveMenu}>
            {navLinks.map(({ href, label }) => (
              <MenuItem key={href} item={label} setActive={setActiveMenu} active={activeMenu}>
                <Link href={href} className={`${pathname === href ? "text-brand-red" : "text-black"}`}>
                  {label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Right: Search Icon */}
        <div className="relative">
          <motion.button
            className="text-black hover:text-brand-orange transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSearch className="text-xl" />
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
