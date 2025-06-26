import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#1a0033] text-white py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10">
          Let's work together! Fill out the form and I’ll get back to you as soon as possible.
        </p>

        <form className="bg-[#2e0055] p-8 rounded-2xl shadow-lg space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-lg bg-[#1a0033] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-[#1a0033] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject of your message"
              className="w-full px-4 py-2 rounded-lg bg-[#1a0033] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 rounded-lg bg-[#1a0033] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition px-6 py-2 rounded-xl text-white font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
