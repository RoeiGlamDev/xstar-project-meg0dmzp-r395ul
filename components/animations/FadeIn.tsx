import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInAnimation = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInAnimation}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={`transition-transform duration-300 ${className`}}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPWebsite: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen p-8">
      <header className="text-center mb-12">
        <FadeIn>
          <h1 className="text-4xl font-bold">Welcome to Luxury LRP Cosmetics</h1>
          <p className="mt-4 text-lg">Elevate your beauty routine with our premium products.</p>
        </FadeIn>
      </header>
      <main>
        <section className="mb-12">
          <FadeIn>
            <h2 className="text-3xl font-semibold">Our Collection</h2>
            <p className="mt-2">Explore our exquisite range of luxurious cosmetics designed for the discerning beauty enthusiast.</p>
          </FadeIn>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Lipstick', 'Foundation', 'Eyeshadow'].map((product, index) => (
            <FadeIn key={index} className="shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-medium">{product}</h3>
                <p className="mt-2">Indulge in our high-quality {product} that promises to enhance your natural beauty.</p>
                <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </FadeIn>
          ))}
        </section>
      </main>
      <footer className="text-center mt-12">
        <FadeIn>
          <p className="text-sm">© 2023 Luxury LRP Cosmetics. All rights reserved.</p>
        </FadeIn>
      </footer>
    </div>
  );
};

export default LuxuryLRPWebsite;