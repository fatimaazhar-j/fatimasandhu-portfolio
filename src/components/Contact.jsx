import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-pink-600 to-purple-800 text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        I’d love to hear from you! Send me a message and I’ll get back to you as soon as possible.
      </p>
      <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6 text-black">
        <input className="rounded-full px-6 py-4" type="text" placeholder="Your Name" required />
        <input className="rounded-full px-6 py-4" type="email" placeholder="Your Email" required />
        <textarea className="rounded-2xl px-6 py-4" rows="5" placeholder="Your Message" required></textarea>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
