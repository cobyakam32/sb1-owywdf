import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            SmartStart Solutions is your partner in personal and business growth. We are a versatile team specializing in professional writing, graphic design, web development, and data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-xl text-center"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To provide high-quality, tailored solutions that equip our clients with the tools they need to succeed in an ever-evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-xl text-center"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Team</h3>
            <p className="text-gray-400">
              A diverse group of experts passionate about delivering excellence in every project we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-8 rounded-xl text-center"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To be the catalyst for success in our clients' professional and creative endeavors, providing the Smart Start they deserve.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}