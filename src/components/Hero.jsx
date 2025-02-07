import { motion } from 'framer-motion';
import { Code2, Laptop, Palette, Server } from 'lucide-react';

function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="text-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <img
                  src="/src/assets/profile.jpg"
                  alt="Siddappa Karagar"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Siddappa Karagar
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Software Engineer | Full-Stack Developer | UI/UX Enthusiast
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Code2 className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Full-Stack</h3>
              <p className="text-gray-300">Building complete solutions from front to back</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Palette className="w-12 h-12 text-purple-400 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-300">Crafting beautiful user experiences</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Server className="w-12 h-12 text-green-400 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">API Integration</h3>
              <p className="text-gray-300">Seamlessly integrating third-party APIs for enhanced system functionality and scalability.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Laptop className="w-12 h-12 text-red-400 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Agile Development</h3>
              <p className="text-gray-300">Leading with modern methodologies</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-16"
          >
            <a 
              href="#about" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Discover More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;