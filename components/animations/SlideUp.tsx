import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpAnimation}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Luxury LRP Cosmetics</h2>
      <p className="text-gray-700 mb-2">
        Discover the elegance and sophistication of luxury LRP cosmetics, where beauty meets innovation.
      </p>
      <p className="text-gray-700 mb-4">
        Our exquisite range of products is designed for those who appreciate the finer things in life.
      </p>
      <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300">
        Explore Our Collection
      </button>
      <div className="mt-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SlideUp;