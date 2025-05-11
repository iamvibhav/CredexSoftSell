import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="relative">
                <Hexagon size={32} className="text-primary-500 transform group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                <Hexagon size={32} className="text-primary-500/30 absolute top-0 left-0 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
              </div>
              <div className="ml-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">Soft</span>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">Sell</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
            <Button href="#contact" variant="primary" size="sm">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#how-it-works"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={toggleMenu}
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="pt-2">
                <Button href="#contact" variant="primary" size="sm" fullWidth onClick={toggleMenu}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar