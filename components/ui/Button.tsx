import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.div
      className={`py-2 px-4 rounded-lg font-semibold transition duration-300 ease-in-out ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;