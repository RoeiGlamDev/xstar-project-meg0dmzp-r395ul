import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Join the luxury LRP cosmetics Family
      </motion.h2>
      <motion.div
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up for exclusive updates on our latest products and luxury beauty tips.
      </motion.p>
      {submitted ? (
        <motion.div
          className="text-lg text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to luxury LRP cosmetics!
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
          />
          <motion.div
            type="submit"
            className="mt-4 md:mt-0 md:ml-4 bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-orange-500 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;