import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essentials Glow Package',
    price: '$99',
    features: [
      'Skin Consultation',
      'Makeup Application',
      'Luxury Product Samples',
      'Exclusive Discounts on Future Purchases',
    ],
  },
  {
    name: 'Radiant Luxe Package',
    price: '$199',
    features: [
      'All Essentials Glow Package Features',
      'Custom Skincare Regimen',
      'Personalized Makeup Tutorial',
      'VIP Access to New Product Launches',
    ],
  },
  {
    name: 'Ultimate Luxury Experience',
    price: '$299',
    features: [
      'All Radiant Luxe Package Features',
      'Private Makeup Session with Expert Artist',
      'Full Product Line Experience',
      'Access to Exclusive Members-Only Events',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing for luxury LRP cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mt-2">{tier.price}</p>
              <ul className="list-disc list-inside mt-4 text-left">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <motion.div
                className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Select Package
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;