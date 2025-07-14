import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Bell, Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useUpdates, Update } from '../contexts/UpdatesContext';

const Updates: React.FC = () => {
  const { updates } = useUpdates();

  // Get the appropriate icon based on update type
  const getIcon = (type: Update['type']) => {
    switch (type) {
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Bell className="w-5 h-5 text-blue-400" />;
    }
  };

  // Get the appropriate background color based on update type
  const getBackgroundColor = (type: Update['type']) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* SEO */}
      <SEO
        title="Club Updates - STEM CS Club"
        description="Stay up-to-date with the latest news, events, and announcements from STEM Computer Science Club."
        keywords="STEM CS Club updates, club news, CS events, computer science announcements"
        image="/imgs/official-logo.png"
        url="https://stemcsclub.org/updates"
      />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 group">
          <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Updates</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay up-to-date with the latest news, events, and announcements from our Computer Science Club.
          </p>
        </motion.div>

        {/* Updates list */}
        <div className="space-y-6">
          {updates.length > 0 ? (
            updates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-lg shadow-md border p-5 ${getBackgroundColor(update.type)}`}
              >
                <div className="flex">
                  <div className="mr-4 mt-1">
                    {getIcon(update.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {update.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      {update.content}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(update.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      {update.link && (
                        <Link 
                          to={update.link.url} 
                          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {update.link.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No updates available at this time.
              </p>
            </div>
          )}
        </div>

        {/* Subscribe section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Subscribe to our newsletter to receive notifications about club events, workshops, and opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Updates;
