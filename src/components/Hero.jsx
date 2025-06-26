import React from "react";
import heroImage from "../assets/image.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#1a0033] to-[#33004d] text-white py-20 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1">
        <p className="text-sm uppercase tracking-wide">Welcome to my world ✨</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Hi, I'm Fatima Azhar</h1>
        <h2 className="text-3xl text-pink-400 mt-2">UI & UX Designer</h2>
        <p className="text-md text-gray-300 mt-4 max-w-md">
          Passionate UI/UX designer. I create intuitive and visually appealing digital experiences.
          I transform ideas into seamless designs that meet user expectations.
        </p>

        <div className="flex space-x-4 mt-6">
          <button className="bg-pink-500 px-4 py-2 rounded-xl hover:bg-pink-600 transition">
            My Projects
          </button>
          <button className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Download CV
          </button>
        </div>

        <div className="flex space-x-4 mt-6 text-xl">
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-behance"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>

      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImage}
          alt="Fatima Azhar UI/UX Designer"
          className="w-64 md:w-80 rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
