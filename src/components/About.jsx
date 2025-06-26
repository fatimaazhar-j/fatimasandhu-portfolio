import React from "react";

const About = () => {
  return (
    <section className="bg-[#1a0033] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">About me</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Welcome to my portfolio 👋 I'm <span className="text-white font-semibold">Sara Howari</span>, a passionate 
          <span className="text-pink-400 font-medium"> UI/UX designer</span> with a love for creating clean, intuitive, and visually stunning digital experiences.
          I specialize in transforming ideas into seamless, user-centered designs that exceed expectations.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#2e0055] p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">🎨 UI/UX Design</h3>
            <p className="text-gray-300 text-sm">
              Crafting aesthetically pleasing interfaces that enhance user engagement and usability.
            </p>
          </div>
          <div className="bg-[#2e0055] p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">🧠 Design Thinking</h3>
            <p className="text-gray-300 text-sm">
              Using human-centered design principles to solve problems with empathy and innovation.
            </p>
          </div>
          <div className="bg-[#2e0055] p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">📱 Responsive Design</h3>
            <p className="text-gray-300 text-sm">
              Ensuring seamless experience across all devices and screen sizes with pixel-perfect design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
