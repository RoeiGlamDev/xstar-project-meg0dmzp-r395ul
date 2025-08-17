import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyInfo: {
    address: string;
    email: string;
    phone: string;
  };
}

const Footer: React.FC<FooterProps> = ({ companyInfo }) => {
  return (
    <footer className="bg-white text-orange-500 py-8">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">luxury LRP cosmetics</h2>
            <p className="mt-2 text-sm">Elevate your beauty with our luxurious cosmetics.</p>
            <p className="mt-2 text-sm">{companyInfo.address}</p>
            <p className="mt-1 text-sm">Email: {companyInfo.email}</p>
            <p className="mt-1 text-sm">Phone: {companyInfo.phone}</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <ul className="list-none flex flex-col md:flex-row">
              <li className="mr-6">
                <a href="/about" className="hover:text-orange-600 transition-colors duration-300">About Us</a>
              </li>
              <li className="mr-6">
                <a href="/products" className="hover:text-orange-600 transition-colors duration-300">Products</a>
              </li>
              <li className="mr-6">
                <a href="/blog" className="hover:text-orange-600 transition-colors duration-300">Blog</a>
              </li>
              <li className="mr-6">
                <a href="/contact" className="hover:text-orange-600 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a href="https://www.instagram.com/luxuryLRPcosmetics" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-orange-600 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/luxuryLRPcosmetics" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-orange-600 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/luxuryLRPcosmetics" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-center mt-4 text-sm">&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;