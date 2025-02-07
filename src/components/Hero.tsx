import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Laptop, Palette, Server } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Siddappa Karagar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Software Engineer | Full-Stack Developer | UI/UX Enthusiast | Cloud & API Integration | Agile & DevOps Practitioner
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Code2 className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Full-Stack</h3>
              <p className="text-gray-600 text-sm">Development</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Palette className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">UI/UX</h3>
              <p className="text-gray-600 text-sm">Design</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Server className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Cloud</h3>
              <p className="text-gray-600 text-sm">Integration</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <Laptop className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Agile</h3>
              <p className="text-gray-600 text-sm">Development</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;