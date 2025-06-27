import React from "react";


const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400">A personal portfolio website showcasing my skills and projects.</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">E-commerce Store</h3>
            <p className="text-gray-400">A responsive online shop with secure payment integration and product management.</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Blog Platform</h3>
            <p className="text-gray-400">A dynamic blog platform with post categories, comments, and user authentication.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
