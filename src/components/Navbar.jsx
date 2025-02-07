import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            SK
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }>About</NavLink>
            <NavLink to="/experience" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }>Experience</NavLink>
            <NavLink to="/skills" className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
            }>Skills</NavLink>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/siddukargar" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://linkedin.com/in/siddappa-karagar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <NavLink to="/" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`
            }>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`
            }>About</NavLink>
            <NavLink to="/experience" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`
            }>Experience</NavLink>
            <NavLink to="/skills" className={({ isActive }) => 
              `block px-3 py-2 ${isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`
            }>Skills</NavLink>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://linkedin.com/in/siddappa-karagar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;