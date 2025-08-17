import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
            <motion.div
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact luxury LRP cosmetics
            </motion.h1>
            <motion.div
                className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                }}
            >
                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder="Your Name"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-orange-500 focus:ring focus:ring-orange-200"
                        placeholder="Your Email"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Message</span>
                    <textarea
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-orange-500 focus:ring focus:ring-orange-200"
                        rows={5}
                        placeholder="Your Message"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-orange-600 text-white font-bold py-2 rounded-md hover:bg-orange-500 transition duration-300"
                >
                    Send Message
                </button>
            </motion.form>
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
                <p className="text-gray-700 mb-2">luxury LRP cosmetics</p>
                <p className="text-gray-700 mb-2">123 Luxury Lane,</p>
                <p className="text-gray-700 mb-2">Elegance City, EC 12345</p>
                <p className="text-gray-700 mb-4">Business Hours: Mon-Fri, 9 AM - 6 PM</p>
                <motion.div
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline hover:text-orange-500 transition duration-300"
                >
                    Find us on the map
                </motion.a>
            </div>
        </div>
    );
};

export default Contact;