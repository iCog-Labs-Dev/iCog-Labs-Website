import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      {/* Join Our Team Section */}
      <div
        className="bg-white py-16"
        style={{ height: '85vh', borderBottomLeftRadius: '50px' }}
      >
        <div className="container mx-auto px-8 text-center h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Join Our Team</h2>
          <p className="mb-8 text-lg text-gray-600">
            Explore exciting career and internship opportunities with iCog Labs.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white px-10 py-3 rounded-full text-lg hover:bg-gray-100 transition duration-200"
            >
              See Open Roles
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="rounded-l-md bg-gray-100 p-4 flex flex-col justify-between"
        
      >
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <img
              src="/iCogLogo.png"
              alt="iCog Labs Logo"
              className="w-32 mb-2"
            />
            <p className="text-sm text-gray-600">
              Engineering the Future of <span className="text-orange-500">Intelligence</span>
            </p>
          </div>

          {/* Partners */}
          <h4 className="font-semibold mb-2">Partners</h4>
          <div className="text-center bg-purple-950">
            
            <img
              src="/SingularityLogo.png"
              alt="SingularityNET"
              className="w-32"
              
            />
          </div>

          {/* Subscribe to Blogs */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Subscribe to Our Blogs</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t pt-4">
          {/* Left: Copyright */}
          <div className="text-sm text-gray-600">
            <p>©2024 iCog Labs. All rights reserved.</p>
          </div>

          {/* Center: Location */}
          <div className="text-sm text-gray-600 text-center">
            <p>Addis Ababa, Ethiopia</p>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-600">Follow Us On</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <AiOutlineTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
