import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message || !formData.reason) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Add form submission logic here (e.g., API call)

    setSuccess(true);
    setFormData({ name: '', email: '', message: '', reason: '' });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">Contact luxury LRP cosmetics</h2>
      <p className="text-lg text-gray-700 mb-6">
        We would love to hear from you! Please fill out the form below for any inquiries related to luxury LRP cosmetics.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Your message has been sent successfully!</p>}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-200"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reason" className="text-gray-600">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-200"
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Order Status">Order Status</option>
            <option value="Feedback">Feedback</option>
            <option value="Collaboration">Collaboration</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-600">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 border border-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-200"
            rows={4}
          />
        </div>
        <motion.div
          type="submit"
          className="bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-orange-600 mb-2">Business Information</h3>
        <p className="text-gray-700">Address: 123 Luxury St, Glamour City, GL 12345</p>
        <p className="text-gray-700">Email: contact@luxurylrpcosmetics.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default ContactSection;