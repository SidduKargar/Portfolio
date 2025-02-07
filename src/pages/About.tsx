import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to my profile! I'm Siddappa Karagar, a Software Engineer and Full-Stack Developer passionate about designing scalable, high-performance applications that not only meet business needs but also deliver an exceptional user experience. I specialize in building dynamic, responsive, and secure applications using modern technologies, ensuring efficiency, flexibility, and long-term sustainability.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Sets Me Apart?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span className="text-gray-700"><strong>Full-Stack Mastery</strong> – Proficient in C#, Java, JavaScript, Python, and frameworks like Node.js, Express, ASP.NET, React for robust, scalable solutions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span className="text-gray-700"><strong>Seamless UI/UX Design</strong> – Crafting interactive, user-friendly interfaces with Kendo UI, jQuery, AJAX, and cutting-edge JavaScript libraries.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span className="text-gray-700"><strong>Data-Driven Development</strong> – Designing SQL-based reporting tools, database optimizations, and cloud-based storage systems for fast, efficient data processing.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Development Philosophy</h3>
            <p className="text-lg text-gray-700 mb-6">
              I believe great software is a fusion of creativity, logic, and user-centric design. It's not just about writing code—it's about solving real-world challenges in a way that is efficient, scalable, and impactful.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg text-gray-800">
                Whether it's building high-performance applications, optimizing workflows, integrating cloud solutions, or designing intuitive UIs, I am always on the lookout for innovative ways to make technology more accessible, efficient, and user-friendly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;