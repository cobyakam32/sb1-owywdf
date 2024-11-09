import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-black to-purple-900">
      <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SmartStart Solutions
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Empowering Your Professional and Creative Journey, One Smart Start at a Time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link to="services" smooth={true} duration={800}>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-all hover:scale-105">
              Explore Our Services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="services" smooth={true} duration={800}>
          <ChevronDown className="w-8 h-8 text-white cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  );
}