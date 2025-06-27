import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-purple-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Website Development</h3>
          <p className="text-gray-300">Responsive websites built with modern tech stacks to ensure fast performance and seamless user experiences.</p>
        </div>
        <div className="bg-purple-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
          <p className="text-gray-300">Beautiful and user-friendly designs tailored to your brand and audience for maximum engagement.</p>
        </div>
        <div className="bg-purple-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Web Maintenance</h3>
          <p className="text-gray-300">Ongoing updates, security, and optimization so your website always runs smoothly and stays current.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
