"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar"; // Assuming FloatingNav is in FloatingNav.tsx

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // For active hover
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // The scroll effect logic can be kept, but we remove the background color change on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/careers", label: "Careers" },
    { href: "/articles", label: "Articles" }, // Changed "News" to "Articles"
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-transparent`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/">
          <motion.img
            src="/iCogLogo.png"
            alt="iCog Labs Logo"
            className="w-16 h-16 md:w-20 md:h-20 ml-2 mt-2" // Added margin-left and margin-top
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Center: Nav Items with FloatingNav Component */}
        <div className="hidden md:block">
          <FloatingNav
            navItems={navLinks.map(({ href, label }) => ({
              link: href,
              name: label,
            }))}
          />
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
