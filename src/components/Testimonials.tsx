import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechVantage Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    stars: 5,
    text: 'SoftSell exceeded our expectations. We had over 200 unused enterprise licenses after downsizing, and they helped us recover nearly 75% of our initial investment. The process was incredibly smooth, and the valuation was fair and transparent.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Nexus Innovations',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    stars: 5,
    text: 'After switching our design team to a new software platform, we had 50+ unused creative suite licenses. SoftSell made the selling process painless and secure. Their team guided us through verification, and payment was in our account within hours of accepting the offer.',
  },
];

const renderStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => (
    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
  ));
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Customer Testimonials"
          subtitle="Don't just take our word for it - hear from our satisfied customers"
          centered
        />

        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;