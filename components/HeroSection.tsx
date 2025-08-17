import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "luxury LRP cosmetics", 
  subtitle = "Elevate your beauty experience with our exquisite range of high-end cosmetics, meticulously crafted for the discerning individual.", 
  ctaText = "Shop Now", 
  ctaLink = "#shop" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <motion.div 
        className="relative z-10 text-center p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white mb-8">
          {subtitle}
        </p>
        <motion.div 
          href={ctaLink} 
          className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <span className="text-white text-sm">As seen in Vogue, Elle & Harper's Bazaar</span>
      </div>
    </section>
  );
};

export default HeroSection;