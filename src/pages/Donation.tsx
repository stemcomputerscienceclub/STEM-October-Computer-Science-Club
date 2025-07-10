import React from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Users, Target } from 'lucide-react';

const Donation: React.FC = () => {
  const handleDonate = () => {
    window.open('https://hcb.hackclub.com/donations/start/stem-computer-science-club', '_blank');
  };

  const impactStats = [
    {
      icon: Users,
      number: '150+',
      label: 'Students Reached',
      description: 'Active members in our programming community'
    },
    {
      icon: Target,
      number: '25+',
      label: 'Projects Completed',
      description: 'Real-world applications built by our members'
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Impact Focused',
      description: 'Every dollar goes directly to student programs'
    }
  ];

  const donationTiers = [
    {
      amount: '$25',
      title: 'Supporter',
      description: 'Helps fund workshop materials and resources for one student',
      benefits: ['Workshop materials', 'Programming resources', 'Community access']
    },
    {
      amount: '$50',
      title: 'Advocate',
      description: 'Sponsors a complete programming track for a student',
      benefits: ['Full track access', 'Mentorship program', 'Project hosting', 'Certificate']
    },
    {
      amount: '$100',
      title: 'Champion',
      description: 'Funds equipment and advanced workshops for multiple students',
      benefits: ['Hardware access', 'Advanced workshops', 'Competition entry', 'Industry connections']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Support Our Mission</span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto">
              Help us empower the next generation of programmers and innovators. Your donation directly supports student learning, workshops, and real-world project development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDonate}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Donate Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              Our Impact
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              See how your contributions make a difference in our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2 text-secondary-800 dark:text-secondary-200">
                    {stat.label}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
              Ways to Contribute
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Choose a donation level that works for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {tier.amount}
                  </h3>
                  <h4 className="text-xl font-semibold mb-3 text-secondary-800 dark:text-secondary-200">
                    {tier.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {tier.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-secondary-700 dark:text-secondary-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDonate}
                  className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Choose This Level
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in building the future of technology education. Every contribution counts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDonate}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Today
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Donation;