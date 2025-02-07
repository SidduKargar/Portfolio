import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, ArrowRight } from 'lucide-react';

function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* SSM InfoTech Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Briefcase className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Jan 2023 – Present | SSM InfoTech Solutions, Surat, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">Engineering Achievements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue-400 mr-2 mt-1" />
                        <span>Spearheaded the X-Studio framework overhaul, leading to a 20% boost in responsiveness</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue-400 mr-2 mt-1" />
                        <span>Designed a modular UI for trigger code configurations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-blue-400 mr-2 mt-1" />
                        <span>Built reusable and scalable UI components</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-700/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">Innovation & Leadership</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                        <span>Developed a drag-and-drop UI for 200+ non-technical users</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                        <span>Enhanced front-end performance using modern JavaScript libraries</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-purple-400 mr-2 mt-1" />
                        <span>Optimized user experiences with interactive designs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KodNest */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">Full-Stack Developer Intern</h3>
                    <div className="flex items-center text-gray-400 mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Aug 2022 – Jan 2023 | KodNest, Bengaluru, India</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Key Learnings & Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-1" />
                      <span>Developed dynamic web applications using Core Java, Java Swing, HTML5, and CSS</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-1" />
                      <span>Applied Object-Oriented Programming (OOP) principles</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-1" />
                      <span>Designed and optimized SQL databases</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-green-400 mr-2 mt-1" />
                      <span>Crafted interactive UI components using JavaScript and SQL</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;