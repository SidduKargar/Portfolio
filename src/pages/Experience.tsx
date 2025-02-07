import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>

          <div className="space-y-12">
            {/* SSM InfoTech Solutions */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900">Software Engineer</h3>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Jan 2023 – Present | SSM InfoTech Solutions, Surat, India</span>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">My Biggest Wins</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-blue-600 mb-2">Engineering Powerful Features & Debugging Complexities</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Spearheaded the X-Studio framework overhaul, leading to a 20% boost in responsiveness</li>
                    <li>Designed a modular UI for trigger code configurations</li>
                    <li>Built reusable and scalable UI components</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-600 mb-2">Empowering Non-Tech Users with Low-Code/No-Code Magic</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Developed a drag-and-drop UI for 200+ non-technical users</li>
                    <li>Enhanced front-end performance using modern JavaScript libraries</li>
                    <li>Optimized user experiences with interactive designs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KodNest */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900">Full-Stack Developer Intern</h3>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Aug 2022 – Jan 2023 | KodNest, Bengaluru, India</span>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-4">What I Built & Learned</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed dynamic web applications using Core Java, Java Swing, HTML5, and CSS</li>
                <li>Applied Object-Oriented Programming (OOP) principles</li>
                <li>Designed and optimized SQL databases</li>
                <li>Crafted interactive UI components using JavaScript and SQL</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;