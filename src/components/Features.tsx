import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const features = [
  {
    id: 1,
    title: 'Top Market Value',
    description: 'Our industry connections and proprietary algorithm ensure you get the highest possible value for your licenses.',
    icon: TrendingUp,
    color: 'text-primary-500 dark:text-primary-400',
    bg: 'bg-primary-100 dark:bg-primary-900/30',
  },
  {
    id: 2,
    title: 'Secure Transactions',
    description: 'Bank-level encryption and secure verification processes protect your information at every step.',
    icon: ShieldCheck,
    color: 'text-secondary-400 dark:text-secondary-400',
    bg: 'bg-secondary-100 dark:bg-secondary-900/30',
  },
  {
    id: 3,
    title: 'Fast Processing',
    description: 'From valuation to payment, our streamlined process typically takes less than 24 hours to complete.',
    icon: Clock,
    color: 'text-accent-400 dark:text-accent-400',
    bg: 'bg-accent-100 dark:bg-accent-900/30',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    description: 'Our team of experts is available to assist you through every step of the selling process.',
    icon: HeartHandshake,
    color: 'text-success-500 dark:text-success-500',
    bg: 'bg-green-100 dark:bg-green-900/30',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We offer the best experience for selling your unused software licenses"
          centered
        />

        <motion.div
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="relative"
              variants={itemVariants}
            >
              <div className="group h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className={`${feature.bg} rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;