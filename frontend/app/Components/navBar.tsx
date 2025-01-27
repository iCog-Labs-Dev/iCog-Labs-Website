import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-100 to-white">
      {/* Logo */}
      <img
        src="/iCogLogo.png"
        alt="iCog Labs Logo"
        className="w-20 h-20"
      />
      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-800 underline underline-offset-4 decoration-orange-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/focus-areas"  
            className="text-lg font-semibold text-gray-600 hover:text-orange-600 underline-offset-4"
          >
            Focus Areas
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className="text-lg font-semibold text-gray-600 hover:text-orange-600 underline-offset-4"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="text-lg font-semibold text-gray-600 hover:text-orange-600 underline-offset-4"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="text-lg font-semibold text-gray-600 hover:text-orange-600 underline-offset-4"
          >
            About Us
          </Link>
        </li>
      </ul>
      {/* Search Bar */}
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gradient-to-r from-orange-100 to-white border border-gray-300 p-2 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
      </div>
    </nav>
  );
};

export default Navbar;
