import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white dark:from-gray-900 dark:to-gray-900 -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(51, 102, 255, 0.15) 2px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Hero Text */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Turn Unused Software
              <span className="text-primary-500"> Licenses</span> Into Cash
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              SoftSell helps businesses and individuals sell their unused software licenses for the best prices on the market. Fast, secure, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#contact" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                Learn How
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <img 
                src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software license marketplace dashboard on computer screen" 
                className="rounded-lg shadow-xl w-full"
              />
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-success-500 flex items-center justify-center text-white font-bold">$</div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Average Return</p>
                    <p className="text-lg font-bold text-success-500">70% of Original Price</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;