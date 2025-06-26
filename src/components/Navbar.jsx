import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#1a0033] to-[#33004d] text-white">
      <h1 className="text-2xl font-bold">🌟</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-purple-300">Home</a></li>
        <li><a href="#" className="hover:text-purple-300">Services</a></li>
        <li><a href="#" className="hover:text-purple-300">My Projects</a></li>
        <li><a href="#" className="hover:text-purple-300">Reviews</a></li>
        <li><a href="#" className="hover:text-purple-300">Contact</a></li>
      </ul>
      <button className="bg-purple-600 px-4 py-2 rounded-xl text-white hover:bg-purple-700 transition">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
