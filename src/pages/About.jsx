import { motion } from 'framer-motion';
import { Code, Database, Layout, Cloud, GitBranch, Users } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Full-Stack Mastery",
      description: "Proficient in multiple languages and frameworks for robust solutions"
    },
    {
      icon: <Layout className="w-8 h-8 text-purple-500" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces"
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Data-Driven Development",
      description: "Building efficient database solutions and optimizations"
    },
    {
      icon: <Cloud className="w-8 h-8 text-red-500" />,
      title: "Cloud Integration",
      description: "Expert in cloud services and API integrations"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-yellow-500" />,
      title: "Version Control",
      description: "Proficient in Git and collaborative development"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Team Leadership",
      description: "Experienced in leading and mentoring development teams"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-48 h-48 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <img
                src="/src/assets/profile.jpg"
                alt="Siddappa Karagar"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-xl"
              />
            </motion.div>
            
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-gray-800 p-8 rounded-2xl shadow-xl">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Welcome to my profile! I'm Siddappa Karagar, a Software Engineer and Full-Stack Developer passionate about designing scalable, high-performance applications that not only meet business needs but also deliver an exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="bg-gray-700/50 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">My Development Philosophy</h3>
          <p className="text-lg text-gray-100">
            I believe great software is a fusion of creativity, logic, and user-centric design. It's not just about writing code—it's about solving real-world challenges in a way that is efficient, scalable, and impactful.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;