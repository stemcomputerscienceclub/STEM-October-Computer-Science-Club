import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-8"
          >
            <BookOpen className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Articles</span>
          </motion.h1>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-secondary-800 dark:text-secondary-200">
              Coming Soon
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              We're working hard to bring you amazing articles about programming, tutorials, and tech insights. 
              Stay tuned for exciting content from our community!
            </p>
          </motion.div>

          {/* Timeline */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white dark:bg-secondary-800 rounded-full px-6 py-3 shadow-lg"
          >
            <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-secondary-700 dark:text-secondary-300 font-medium">
              Expected Launch: Q2 2024
            </span>
          </motion.div> */}

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: 'Tutorials',
                description: 'Step-by-step programming guides'
              },
              {
                title: 'Tech Insights',
                description: 'Latest trends and technologies'
              },
              {
                title: 'Community Stories',
                description: 'Member experiences and projects'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;