"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaSearch } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <motion.li key={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={href}
                  className={`text-base font-medium relative ${
                    pathname === href ? "text-brand-red" : "text-gray-700 hover:text-brand-orange"
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-red"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <motion.button
              className="text-gray-600 hover:text-brand-orange transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch className="text-xl" />
            </motion.button>

            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  className="absolute right-0 top-10 w-64"
                  initial={{ opacity: 0, y: 10, width: 0 }}
                  animate={{ opacity: 1, y: 0, width: 256 }}
                  exit={{ opacity: 0, y: 10, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-white border border-gray-200 p-2 pl-10 rounded-lg shadow-md focus:ring-2 focus:ring-brand-orange focus:outline-none"
                      autoFocus
                    />
                    <FaSearch className="absolute top-3 left-3 text-gray-400" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <motion.span
              className="w-6 h-0.5 bg-gray-800 block"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 bg-gray-800 block"
              animate={isOpen ? { width: 0 } : { width: 4 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-800 block"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom bg-white shadow-lg rounded-b-lg py-4">
              <ul className="space-y-4">
                {navLinks.map(({ href, label }) => (
                  <motion.li
                    key={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link
                      href={href}
                      className={`block text-lg font-medium ${
                        pathname === href ? "gradient-text" : "text-gray-700 hover:text-brand-orange"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Search */}
              <motion.div
                className="mt-4 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 border border-gray-200 p-3 pl-10 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none"
                />
                <FaSearch className="absolute top-3.5 left-3 text-gray-400" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

