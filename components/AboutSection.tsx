import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    bio: 'With over a decade of experience in the cosmetics industry, Sophia has a keen eye for luxury and innovation.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    bio: 'Liam specializes in creating high-quality formulations that embody luxury and performance.',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Marketing Director',
    bio: 'Olivia brings a wealth of experience in luxury brand marketing, ensuring luxury LRP cosmetics stands out in the market.',
    image: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white p-10">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 mb-8">
          At luxury LRP cosmetics, we believe that beauty is an art form that deserves the highest level of craftsmanship. Our journey began with a passion for creating exquisite beauty products that not only enhance natural beauty but also embody luxury. Each product is meticulously crafted using premium ingredients, ensuring a lavish experience for our customers.
        </p>
        
        <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our mission at luxury LRP cosmetics is to empower individuals to express their unique beauty through high-quality, luxurious cosmetics. We strive to innovate and elevate the standards of the cosmetics industry by providing products that not only perform but also inspire confidence and elegance.
        </p>

        <h2 className="text-4xl font-bold text-orange-600 mb-6">Meet Our Team</h2>
        <div className="flex justify-center flex-wrap">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg m-4 p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
              <p className="text-md text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-700 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Values</h2>
        <p className="text-lg text-gray-600 mb-8">
          At luxury LRP cosmetics, we value quality, elegance, and sustainability. We are committed to ethical sourcing and environmentally friendly practices, ensuring our products are not only luxurious but also responsible.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;