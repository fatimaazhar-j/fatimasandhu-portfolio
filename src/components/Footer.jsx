// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Fatima Azhar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
