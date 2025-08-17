import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required, onChange }) => {const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
    if (required && newValue.trim() === '') {
      setError('This field is required.');} else {
      setError(null);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {setIsFocused(false);
    if (required && value.trim() === '') {
      setError('This field is required.');}
  };

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-white text-lg font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        className={w-full py-3 px-4 rounded-md border-2 border-orange-500 focus:border-white focus:ring-2 focus:ring-orange-300 transition-all duration-300 ${error ? 'border-red-500' : ''}}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        aria-invalid={!!error}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </motion.div>
  );
};

export default Input;