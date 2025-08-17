import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-10">
          Luxury LRP Cosmetics Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-white text-3xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <motion.span
                className="text-white text-6xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {achievement.count.toLocaleString()}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;