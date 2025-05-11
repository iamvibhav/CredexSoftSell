import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const licenseTypes = [
  { value: '', label: 'Select License Type' },
  { value: 'enterprise', label: 'Enterprise Software' },
  { value: 'creative', label: 'Creative Suite' },
  { value: 'productivity', label: 'Productivity Tools' },
  { value: 'development', label: 'Development Tools' },
  { value: 'security', label: 'Security Software' },
  { value: 'other', label: 'Other' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
        
        // Reset form submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Get a Free Quote"
            subtitle="Reach out to us to get a valuation for your unused software licenses"
            centered
          />

          <motion.div
            className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your request has been received. One of our license specialists will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.company 
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                    {errors.company && <p className="mt-1 text-sm text-error-500">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type <span className="text-error-500">*</span>
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.licenseType 
                          ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    >
                      {licenseTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && <p className="mt-1 text-sm text-error-500">{errors.licenseType}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-error-500 focus:ring-error-500 focus:border-error-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500 focus:border-primary-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Please provide details about your software licenses (quantity, type, purchase date, etc.)"
                  />
                  {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get a Quote'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;