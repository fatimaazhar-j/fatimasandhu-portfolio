import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2e0055] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">Fatima Azhar</h3>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl text-pink-400">
          <a href="#" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaBehance />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaDribbble />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
