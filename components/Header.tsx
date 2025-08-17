import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div 
          className="text-orange-500 font-bold text-2xl cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo} alt="luxury LRP cosmetics" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div 
            href="#home" 
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.div 
            href="#collections" 
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Collections
          </motion.a>
          <motion.div 
            href="#about" 
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div 
            href="#contact" 
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0}}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col items-center p-4">
            <motion.div 
              href="#home" 
              className="text-gray-800 hover:text-orange-500 transition duration-300 my-2"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.div 
              href="#collections" 
              className="text-gray-800 hover:text-orange-500 transition duration-300 my-2"
              whileHover={{ scale: 1.05 }}
            >
              Collections
            </motion.a>
            <motion.div 
              href="#about" 
              className="text-gray-800 hover:text-orange-500 transition duration-300 my-2"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div 
              href="#contact" 
              className="text-gray-800 hover:text-orange-500 transition duration-300 my-2"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;