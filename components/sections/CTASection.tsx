import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onButtonClick }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-20">
      <motion.div
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience the Elegance of Luxury LRP Cosmetics
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 text-center max-w-md mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Indulge in our high-end cosmetic products, designed to elevate your beauty routine. Discover luxurious textures and vibrant colors that embody sophistication and elegance.
      </motion.p>
      <motion.div
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        onClick={onButtonClick}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Shop Now
      </motion.button>
      <motion.div
        className="text-sm text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Join the luxury LRP cosmetics family and transform your beauty journey today.
      </motion.p>
    </section>
  );
};

export default CTASection;