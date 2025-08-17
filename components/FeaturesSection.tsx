import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'At luxury LRP cosmetics, we pride ourselves on using only the finest ingredients to ensure each product meets the highest standards of luxury.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our products come in beautifully designed packaging that not only protects but also enhances the luxury experience.',
    icon: <i className="fas fa-box-open text-orange-500"></i>,
  },
  {
    title: 'Personalized Consultation',
    description: 'Experience tailored beauty consultations with our experts to find the perfect products for your unique needs.',
    icon: <i className="fas fa-user-circle text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'luxury LRP cosmetics is committed to sustainability, using eco-friendly materials and practices in our product lines.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Discover the Features of luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-orange-600 ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;