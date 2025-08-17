import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface AboutProps {
  history: string;
  values: string[];
  team: TeamMember[];
}

const About: React.FC<AboutProps> = ({ history, values, team }) => {
  return (
    <div className="bg-white text-gray-800">
      <header className="py-12 text-center">
        <motion.div
          className="text-5xl font-bold text-orange-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>

      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-orange-600">Our History</h2>
          <p className="mt-4 text-lg leading-relaxed">
            {history}
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-orange-600">Our Values</h2>
          <ul className="mt-4 list-disc list-inside">
            {values.map((value, index) => (
              <li key={index} className="text-lg leading-relaxed">
                {value}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-orange-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {team.map((member, index) => (
              <div key={index} className="p-4 border border-orange-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="mt-2 text-xl font-bold text-orange-600">{member.name}</h3>
                <p className="text-lg">{member.position}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;