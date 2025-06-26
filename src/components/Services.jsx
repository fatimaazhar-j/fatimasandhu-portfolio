import React from "react";
import { FaPencilRuler, FaCode, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#33004d] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">Services</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          I offer a wide range of design services to bring your ideas to life with clarity, creativity, and user-centric focus.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Service 1 */}
          <div className="bg-[#2e0055] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <FaPencilRuler className="text-3xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-300">
              Creating clean, intuitive interfaces that deliver seamless experiences and engage users effectively.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#2e0055] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <FaCode className="text-3xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-sm text-gray-300">
              Designing responsive and interactive websites that represent brands and drive user interaction.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#2e0055] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition duration-300">
            <FaMobileAlt className="text-3xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
            <p className="text-sm text-gray-300">
              Designing beautiful mobile interfaces that are easy to use and deliver a consistent experience on all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
