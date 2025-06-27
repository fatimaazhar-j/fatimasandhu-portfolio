import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-purple-800 to-pink-600 text-white fixed w-full z-10">
      <div className="text-2xl font-bold">Fatima Azhar</div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
        <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
        <li><a href="#reviews" className="hover:text-yellow-300">Reviews</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
