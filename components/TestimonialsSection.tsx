import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Samantha R.',
    image: '/images/testimonial1.jpg',
    content: 'Luxury LRP cosmetics transformed my skincare routine! The quality is unmatched, and my skin has never felt better.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica L.',
    image: '/images/testimonial2.jpg',
    content: 'I adore the luxurious feel of the products. The orange packaging is so elegant and the results are phenomenal!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia K.',
    image: '/images/testimonial3.jpg',
    content: 'From the moment I tried luxury LRP cosmetics, I was hooked. The hydration serum is a game changer!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <span key={index} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;