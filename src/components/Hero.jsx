import React from "react";
import avatar from "../assets/profileimage.png"; // replace with your image file name

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-700 text-white pt-24"
    >
      <h2 className="text-xl mb-2">WELCOME TO MY WORLD ✨</h2>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Fatima Azhar</h1>
      <h3 className="text-4xl font-semibold text-pink-300 mb-6">Web Developer</h3>
      <p className="max-w-xl mb-8 text-lg text-gray-200">
        Passionate Web Developer. I create intuitive and visually appealing digital experiences. I transform ideas into stunning websites that meet users’ expectations.
      </p>
      <div className="flex space-x-6 mb-8">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full">My Projects</button>
        <button className="border border-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full">Download CV</button>
      </div>
      <img src={avatar} alt="Fatima Avatar" className="w-56 h-56 rounded-full border-4 border-pink-300 shadow-2xl" />
    </section>
  );
};

export default Hero;
