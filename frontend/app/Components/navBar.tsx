// Navbar.tsx
"use client"
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gradient-to-r from-orange-100 to-white w-full">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <img src="/iCogLogo.png" alt="iCog Labs Logo" className="w-20 h-20" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/focus-areas', label: 'Focus Areas' },
            { href: '/careers', label: 'Careers' },
            { href: '/blogs', label: 'Blogs' },
            { href: '/about-us', label: 'About Us' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-lg font-semibold ${
                  pathname === href ? 'text-orange-600 underline' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar (Aligned Right) */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gradient-to-r from-orange-100 to-white border border-gray-300 p-2 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-gray-800" /> : <FaBars className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg p-4 space-y-4`}>
        {[
          { href: '/', label: 'Home' },
          { href: '/focus-areas', label: 'Focus Areas' },
          { href: '/careers', label: 'Careers' },
          { href: '/blogs', label: 'Blogs' },
          { href: '/about-us', label: 'About Us' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block text-lg font-semibold ${pathname === href ? 'text-orange-600 underline' : 'text-gray-600 hover:text-orange-600'}`}
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
