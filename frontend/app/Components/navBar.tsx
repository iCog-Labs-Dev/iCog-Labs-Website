// Navbar.tsx
"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuItem } from "../Components/ui/navbar-menu"; // Import Menu & MenuItem components

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // Active item tracking
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "Careers", href: "/careers" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <nav className="p-4 bg-gray-800 w-full"> {/* Changed background to dark gray */}
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <img src="/iCogLogo.png" alt="iCog Labs Logo" className="w-20 h-20" />

        {/* Desktop Navigation with Menu & MenuItem */}
        <Menu setActive={setActiveMenu}>
          {menuItems.map(({ href, label }) => (
            <MenuItem key={label} setActive={setActiveMenu} active={activeMenu} item={label}>
              <Link
                href={href}
                className={`text-lg font-semibold ${
                  pathname === href ? "text-orange-600 underline" : "text-gray-300 hover:text-orange-600" // Adjusted text colors
                }`}
              >
                {label}
              </Link>
              {/* Dropdown content example */}
              {activeMenu === label && (
                <div className="grid grid-cols-1 gap-2">
                  <Link href="/sub-page-1">Sub Page 1</Link>
                  <Link href="/sub-page-2">Sub Page 2</Link>
                  <Link href="/sub-page-3">Sub Page 3</Link>
                </div>
              )}
            </MenuItem>
          ))}
        </Menu>

        {/* Search Bar */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-700 border border-gray-600 p-2 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none text-white" // Adjusted search bar styles
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />} {/* Adjusted icon colors */}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <ul className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 shadow-lg rounded-lg p-4 space-y-4`}> {/* Adjusted mobile menu background */}
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block text-lg font-semibold ${
                pathname === href ? "text-orange-600 underline" : "text-gray-300 hover:text-orange-600" // Adjusted text colors
              }`}
              onClick={() => setIsOpen(false)} // Close menu on selection
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;