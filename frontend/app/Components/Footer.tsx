import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer>
      
      {/* Join Our Team Section  */}
      <div
        className="bg-white py-10"
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
<div className="relative bg-gray-100 p-6 rounded-tr-lg">
  {/* Decorative Image Positioned in the Right Corner */}
  <img 
    src="/cornerImage.png" 
    alt="Decorative Image" 
    className="absolute right-0 bottom-10 h-48 w-auto max-w-sm object-contain"
/>

  <div className="container mx-auto px-6 max-w-screen-lg">
    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      {/* Left: Logo & Motto */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/iCogLogo.png" alt="iCog Labs Logo" className="w-32 mb-2" />
        <p className="text-sm text-gray-600">Engineering the Future of</p>
        <span className="text-orange-500 font-semibold">Intelligence</span>
      </div>

      {/* Center: Partners */}
      <div className="flex flex-col items-center">
        <h4 className="font-semibold mb-2">Partners</h4>
        <div className="bg-purple-950 p-2 rounded-lg">
          <img src="/SingularityLogo.png" alt="SingularityNET" className="w-36" />
        </div>
      </div>

      {/* Right: Subscription */}
      <div className="flex flex-col items-center md:items-end">
        <h4 className="font-semibold mb-2">Subscribe to Our Blogs</h4>
        <form className="flex w-full max-w-sm">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none"
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
    <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-6 pt-4 text-center md:text-left">
      {/* Left: Copyright */}
      <p className="text-sm text-gray-600">©2024 iCog Labs. All rights reserved.</p>

      {/* Center: Location */}
      <p className="text-sm text-gray-600 mt-2 md:mt-0">Addis Ababa, Ethiopia</p>

      {/* Right: Social Media */}
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <p className="text-sm text-gray-600">Follow Us On</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-orange-500"><AiOutlineTwitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-orange-500"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-orange-500"><FaLinkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-orange-500"><FaYoutube size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-orange-500"><FaGithub size={20} /></a>
        </div>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
