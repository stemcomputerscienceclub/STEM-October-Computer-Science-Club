import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Bell, Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import { useUpdates, Update } from '../contexts/UpdatesContext';

// For testing - uncomment this to use the static update
const STATIC_UPDATE: Update = {
  id: 'static-update-2025-07-15',
  title: '🔥 Summer Hackathon Registration Open',
  content: 'Registration for our annual summer hackathon is now open! Join us for a weekend of coding, collaboration, and prizes.',
  date: '2025-07-15',
  type: 'warning',
  link: {
    url: '/workshops',
    text: 'Register Now'
  }
};

// Define the props for the Toast component
interface ToastProps {
    autoCloseTime?: number; // Time in ms before auto-closing, 0 to disable
}

// Toast component with a reasonable timeout
const UpdateToast: React.FC<ToastProps> = ({ autoCloseTime = 7000 }) => { 
    const { latestUpdate, hasSeenLatestUpdate, markLatestUpdateAsSeen } = useUpdates();
    const [isVisible, setIsVisible] = useState<boolean>(false); // Start invisible for delay
    const [currentUpdate, setCurrentUpdate] = useState<Update | null>(STATIC_UPDATE); // Use static update for testing
    
    // Force visibility with delay
    useEffect(() => {
        // Force delay then show
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 5000); // 2 second delay
        
        // Set up auto-close timer
        if (autoCloseTime > 0) {
            const closeTimer = setTimeout(() => {
                setIsVisible(false);
            }, autoCloseTime + 2000); // Account for the delay
            
            return () => {
                clearTimeout(showTimer);
                clearTimeout(closeTimer);
            };
        }
        
        return () => clearTimeout(showTimer);
    }, [autoCloseTime]);

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
                    initial={{ opacity: 0, y: -80, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 70, 
                        damping: 12,
                        mass: 0.8,
                        duration: 0.5
                    }}
                    className="fixed top-24 right-0 left-0 z-[999] mx-auto max-w-md px-4"
                >
                    {/* Simple toast with clean design */}
                    <motion.div 
                        className={`rounded-lg shadow-xl border-2 border-blue-400 ${getBackgroundColor(currentUpdate.type)} p-5 bg-white dark:bg-slate-800`}
                        initial={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        animate={{ 
                            boxShadow: "0 20px 30px -5px rgba(59, 130, 246, 0.4)",
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                            duration: 0.8,
                            scale: {
                                times: [0, 0.5, 1],
                                duration: 1.5,
                                repeat: 1,
                                ease: "easeInOut"
                            }
                        }}
                    >
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UpdateToast;
