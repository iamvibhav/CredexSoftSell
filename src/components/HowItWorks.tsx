import React from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, BarChart3 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    id: 1,
    title: 'Upload License',
    description: 'Simply upload your software license details or certificate through our secure platform.',
    icon: Upload,
    color: 'bg-primary-500 dark:bg-primary-400',
  },
  {
    id: 2,
    title: 'Get Valuation',
    description: 'Our advanced algorithm provides you with the best possible market valuation for your license.',
    icon: BarChart3,
    color: 'bg-secondary-400',
  },
  {
    id: 3,
    title: 'Get Paid',
    description: 'Accept the offer and receive payment directly to your preferred account within 24 hours.',
    icon: DollarSign,
    color: 'bg-accent-400',
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Simple 3-step process to sell your unused software licenses"
          centered
        />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={variants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10" style={{ backgroundColor: step.color.split(' ')[0] }} />
              
              <div className={`${step.color} rounded-full p-3 inline-flex mb-5`}>
                <step.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              
              <div className="absolute bottom-6 right-6 text-4xl font-bold opacity-10 text-gray-900 dark:text-gray-700">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;