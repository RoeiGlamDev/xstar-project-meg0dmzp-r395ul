import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-orange-600">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
      </motion.div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-600 text-center">Why Choose luxury LRP cosmetics?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">Premium Quality</h3>
            <p className="mt-2 text-gray-700">Experience our meticulously crafted products that embody luxury and sophistication.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">Exclusive Formulations</h3>
            <p className="mt-2 text-gray-700">Indulge in our exclusive range of cosmetics designed to enhance your natural beauty.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600">Sustainable Luxury</h3>
            <p className="mt-2 text-gray-700">Our commitment to sustainability ensures that luxury and responsibility go hand in hand.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Hero title="Welcome to luxury LRP cosmetics" subtitle="Elevate Your Beauty Experience" />
      <Features />
    </div>
  );
};

export default HomePage;