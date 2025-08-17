import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: 'Essentials',
        price: '$49',
        features: [
            'Luxury Skin Care Set',
            '3D Hydrating Serum',
            'Moisturizing Cream',
            'Free shipping on orders over $100'
        ]
    },
    {
        name: 'Deluxe',
        price: '$99',
        features: [
            'Essentials Package',
            'Luxury Eye Treatment',
            'Revitalizing Face Mask',
            'Exclusive access to new product launches'
        ]
    },
    {
        name: 'Premium',
        price: '$149',
        features: [
            'Deluxe Package',
            'Personalized Skin Consultation',
            'Luxury Gift Box',
            'Complimentary samples with every order'
        ]
    }
];

const FAQ = [
    {
        question: 'What is the return policy?',
        answer: 'At luxury LRP cosmetics, we offer a 30-day satisfaction guarantee. If you are not completely satisfied, you may return your products within 30 days for a full refund.'
    },
    {
        question: 'How do I choose the right products for my skin type?',
        answer: 'Our personalized skin consultation service will help you identify the best products tailored to your unique skin needs. Simply book an appointment on our website.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to select countries. Please check our shipping policy for more details.'
    }
];

const PricingPage: React.FC = () => {
    return (
        <div className="bg-white text-orange-600 p-8">
            <motion.div 
                className="text-4xl font-bold text-center mb-8" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Pricing Plans for luxury LRP cosmetics
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                    <motion.div 
                        key={plan.name} 
                        className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                        <p className="text-xl font-bold mb-4">{plan.price}</p>
                        <ul className="list-disc pl-5 mb-4">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="text-orange-600">{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                            Choose Plan
                        </button>
                    </motion.div>
                ))}
            </div>
            <motion.div 
                className="text-3xl font-bold text-center mt-10 mb-6" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
                {FAQ.map((item, index) => (
                    <div key={index} className="p-4 bg-orange-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;