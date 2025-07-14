import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Search, X, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Define the type for sticker objects
interface Sticker {
  id: string;
  title: string;
  image: string;
  description: string;
  year: string;
  category: string;
}

const Stickers: React.FC = () => {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSticker, setSelectedSticker] = useState<Sticker | null>(null);

  // Categories for filtering
  const categories = ['all', 'mascot', 'events', 'programming', 'club', 'special edition'];

  // Sample sticker data (replace with your actual stickers)
  const stickers: Sticker[] = [
    {
      id: 'codey-classic',
      title: 'Codey Classic',
      image: '/imgs/Stickers/codey-classic.png',
      description: 'The original Codey mascot sticker, perfect for laptops and notebooks.',
      year: '2023',
      category: 'mascot'
    },
    {
      id: 'stem-cs-logo',
      title: 'STEM CS Logo',
      image: '/imgs/Stickers/cs-logo.png',
      description: 'Our official club logo sticker with the iconic STEM CS design.',
      year: '2023',
      category: 'club'
    },
    {
      id: 'python-hackathon',
      title: 'Python Challenge',
      image: '/imgs/python-hackathon.png',
      description: 'Commemorative sticker from our annual Python Programming Challenge.',
      year: '2023',
      category: 'events'
    },
    {
      id: 'codey-laptop',
      title: 'Codey & Laptop',
      image: '/imgs/Stickers/codey-laptop.png',
      description: 'Codey with a laptop, showing off programming skills.',
      year: '2024',
      category: 'mascot'
    },
    {
      id: 'javascript-lover',
      title: 'JavaScript Lover',
      image: '/imgs/Stickers/javascript.png',
      description: 'For those who love JavaScript and its ecosystem.',
      year: '2024',
      category: 'programming'
    },
    {
      id: 'debug-mode',
      title: 'Debug Mode',
      image: '/imgs/Stickers/debug-mode.png',
      description: 'When you\'re in the debugging trenches - perfect for your debug moments.',
      year: '2024',
      category: 'programming'
    },
    {
      id: 'react-fan',
      title: 'React Fan',
      image: '/imgs/Stickers/react.png',
      description: 'Show your love for React with this component-based sticker.',
      year: '2023',
      category: 'programming'
    },
    {
      id: 'scrapyard-hackathon',
      title: 'Scrapyard Hackathon',
      image: '/imgs/scrapyard1.jpg',
      description: 'Limited edition sticker from our Scrapyard Sustainability Hackathon.',
      year: '2024',
      category: 'events'
    },
    {
      id: 'robot-friend',
      title: 'Robot Friend',
      image: '/imgs/Stickers/robot.png',
      description: 'Codey\'s robot friend from the AI and robotics division.',
      year: '2024',
      category: 'mascot'
    },
    {
      id: 'anniversary-special',
      title: '10 Years of Code',
      image: '/imgs/Stickers/anniversary.png',
      description: 'Special edition sticker celebrating 10 years of our CS club.',
      year: '2025',
      category: 'special edition'
    },
    {
      id: 'holographic-logo',
      title: 'Holographic Logo',
      image: '/imgs/Stickers/holographic.png',
      description: 'Limited edition holographic club logo sticker - only 100 made.',
      year: '2025',
      category: 'special edition'
    },
    {
      id: 'ai-researcher',
      title: 'AI Researcher',
      image: '/imgs/Stickers/ai-researcher.png',
      description: 'For members of our AI research track.',
      year: '2024',
      category: 'programming'
    }
  ];

  // Filter stickers based on search query and active category
  const filteredStickers = stickers.filter(sticker => {
    const matchesSearch = sticker.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         sticker.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || sticker.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle sticker click to show details
  const handleStickerClick = (sticker: Sticker) => {
    setSelectedSticker(sticker);
  };

  // Close sticker detail view
  const closeDetail = () => {
    setSelectedSticker(null);
  };

  // Animation variants for stickers
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* SEO */}
      <SEO
        title="STEM CS Club Stickers Collection"
        description="Explore our collection of exclusive STEM Computer Science Club stickers. Limited editions, club events, mascots, and programming-themed stickers."
        keywords="STEM CS stickers, programming stickers, Codey stickers, computer science stickers, coding stickers"
        image="/imgs/Stickers/codey-classic.png"
        url="https://stemcsclub.org/stickers"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Codey */}
        <Link to="/about" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 group">
          <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
          <span>Back to Codey</span>
        </Link>

        {selectedSticker ? (
          <StickerDetail sticker={selectedSticker} onClose={closeDetail} />
        ) : (
          <>
            {/* Hero section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sticker</span> Collection
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Exclusive stickers for STEM Computer Science Club members and events. Collect them all!
              </p>
            </motion.div>

            {/* Search and filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search stickers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      title="Clear search"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Stickers grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {filteredStickers.length > 0 ? (
                filteredStickers.map((sticker) => (
                  <motion.div
                    key={sticker.id}
                    variants={itemVariants}
                    onClick={() => handleStickerClick(sticker)}
                    className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  >
                    <div className="h-40 overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-4">
                      <img
                        src={sticker.image}
                        alt={sticker.title}
                        className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{sticker.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400">{sticker.year}</span>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                          {sticker.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400 text-lg">
                    No stickers found. Try a different search term or category.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}

        {/* How to get stickers section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            How to Get Our Stickers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                1. Join the Club
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                All new members receive a welcome pack with our core stickers collection.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                2. Attend Events
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Special edition stickers are distributed at workshops, hackathons, and competitions.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                3. Complete Challenges
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Earn exclusive stickers by completing coding challenges and contributing to club projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Sticker detail component
const StickerDetail: React.FC<{ sticker: Sticker; onClose: () => void }> = ({ sticker, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-slate-100 dark:bg-slate-700 p-8 flex items-center justify-center">
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={sticker.image}
            alt={sticker.title}
            className="max-h-80 object-contain"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {sticker.title}
              </h2>
              <div className="flex items-center mt-1">
                <span className="text-sm text-slate-500 dark:text-slate-400 mr-3">
                  {sticker.year}
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  {sticker.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close sticker details"
              title="Close sticker details"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {sticker.description}
          </p>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              <Download className="w-5 h-5" />
              Download Digital Version
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white py-3 rounded-lg font-medium transition-colors">
              <Share2 className="w-5 h-5" />
              Share Sticker
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">How to get this sticker:</h3>
            <p className="text-slate-600 dark:text-slate-300">
              {sticker.category === 'special edition'
                ? 'Limited edition sticker available at special events only.'
                : sticker.category === 'events'
                ? 'Available to all participants of this specific event.'
                : 'Available in our welcome pack and at club meetings.'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stickers;
