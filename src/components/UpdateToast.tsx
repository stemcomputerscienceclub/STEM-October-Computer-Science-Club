import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Bell, Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { useUpdates, Update } from '../contexts/UpdatesContext';

// Define the props for the Toast component
interface ToastProps {
  autoCloseTime?: number; // Time in ms before auto-closing, 0 to disable
}

const UpdateToast: React.FC<ToastProps> = ({ autoCloseTime = 5000 }) => {
  const { latestUpdate, hasSeenLatestUpdate, markLatestUpdateAsSeen } = useUpdates();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentUpdate, setCurrentUpdate] = useState<Update | null>(null);

  useEffect(() => {
    // Only show the toast if there's an update and the user hasn't seen it yet
    if (latestUpdate && !hasSeenLatestUpdate) {
      setCurrentUpdate(latestUpdate);
      setIsVisible(true);
      
      // Auto close after specified time if autoCloseTime > 0
      if (autoCloseTime > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseTime);
        
        return () => clearTimeout(timer);
      }
    }
  }, [latestUpdate, hasSeenLatestUpdate, autoCloseTime]);

  // Close the toast
  const handleClose = () => {
    setIsVisible(false);
    markLatestUpdateAsSeen();
  };

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

  if (!currentUpdate) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-0 left-0 z-50 mx-auto max-w-md px-4"
        >
          <div className={`rounded-lg shadow-lg border ${getBackgroundColor(currentUpdate.type)} p-4`}>
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {getIcon(currentUpdate.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {currentUpdate.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                    {currentUpdate.content}
                  </p>
                  {currentUpdate.link && (
                    <Link 
                      to={currentUpdate.link.url} 
                      className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      onClick={handleClose}
                    >
                      {currentUpdate.link.text}
                    </Link>
                  )}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span>{new Date(currentUpdate.date).toLocaleDateString()}</span>
                    <Link to="/updates" className="hover:underline" onClick={handleClose}>
                      View all updates
                    </Link>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-4"
                aria-label="Close update notification"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateToast;
