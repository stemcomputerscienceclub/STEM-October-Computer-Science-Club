import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Code,
  Trophy,
  Zap,
  Tag
} from 'lucide-react';
import Navbar from '../components/Header';

interface Workshop {
  id: number;
  title: string;
  description: string;
  image: string; // Main image (for backward compatibility)
  images?: string[]; // Multiple images support
  category: string;
  skills: string[];
  duration: string;
  level: string;
  featured?: boolean;
}

// Hackathon interface is defined below with images support

const workshops: Workshop[] = [
  {
    id: 1,
    title: 'Boba Workshop',
    description:
      'Learn to create beautiful websites using HTML and CSS while enjoying delicious boba tea! This hands-on workshop combines web development fundamentals with a fun, relaxed atmosphere. Perfect for beginners who want to start their coding journey.',
    image: '/imgs/boba-workshop.webp',
    images: [
      '/imgs/pizza2.jpg',
    ],
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'Web Design', 'Responsive Design'],
    duration: '4 hours',
    level: 'Beginner',
    featured: true
  }
];

interface Hackathon {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string; // Main image (for backward compatibility)
  images?: string[]; // Multiple images support
  teamSize: string;
  prize?: string;
  requirements: string;
  featured?: boolean;
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: 'Python Problem Solving Hackathon',
    date: 'January 15, 2025',
    location: 'STEM High School for Boys - 6th of October',
    description:
      'Test your Python skills with six challenging problems! Teams of 3 members will compete to solve algorithmic challenges, data structure problems, and real-world coding scenarios. Perfect for students who want to enhance their problem-solving abilities.',
    image: '/imgs/python-hackathon.png',
    images: [
      '/imgs/Python.png'
    ],
    teamSize: '3 members per team',
    requirements: 'Basic Python knowledge required',
    featured: false
  },
  {
    id: 2,
    title: 'Scrapyard Hackathon',
    date: '15th MARCH',
    location: 'Masters Language School',
    description:
      'Scrapyard is not just a Normal Hackathon, its scrappy theme of stupid inventions means that you can build the scrappiest thing you can imagine, the jankier the better. This is a Free Event with No experience needed. 15th MARCH is Your Moment To Shine!',
    image: '/imgs/scrapyard1.jpg',
    images: [
      '/imgs/scrapyard1.jpg',
      '/imgs/scrapyard2.jpg',
      '/imgs/scrapyard3.jpg'
    ],
    teamSize: 'Individual or Team',
    requirements: 'No experience needed',
    prize: 'Free Event',
    featured: true
  }
];

const Workshops: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'workshops' | 'hackathons' | 'upcoming'>(
    'workshops'
  );
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);
  
  // State for image carousels
  const [workshopImageIndices, setWorkshopImageIndices] = useState<{[id: number]: number}>({}); 
  const [hackathonImageIndices, setHackathonImageIndices] = useState<{[id: number]: number}>({});
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  
  // Helper function to cycle through images
  const nextImage = (current: number, total: number) => (current + 1) % total;
  const prevImage = (current: number, total: number) => (current - 1 + total) % total;
  
  // Handle image navigation for workshop cards
  const handleWorkshopImageNav = (e: React.MouseEvent, workshopId: number, direction: 'next' | 'prev') => {
    e.stopPropagation(); // Prevent opening the modal when clicking navigation buttons
    
    const workshop = workshops.find(w => w.id === workshopId);
    if (!workshop || !workshop.images || workshop.images.length <= 1) return;
    
    const currentIndex = workshopImageIndices[workshopId] || 0;
    const totalImages = workshop.images.length;
    
    setWorkshopImageIndices({
      ...workshopImageIndices,
      [workshopId]: direction === 'next' ? nextImage(currentIndex, totalImages) : prevImage(currentIndex, totalImages)
    });
  };
  
  // Handle image navigation for hackathon cards
  const handleHackathonImageNav = (e: React.MouseEvent, hackathonId: number, direction: 'next' | 'prev') => {
    e.stopPropagation(); // Prevent opening the modal when clicking navigation buttons
    
    const hackathon = hackathons.find(h => h.id === hackathonId);
    if (!hackathon || !hackathon.images || hackathon.images.length <= 1) return;
    
    const currentIndex = hackathonImageIndices[hackathonId] || 0;
    const totalImages = hackathon.images.length;
    
    setHackathonImageIndices({
      ...hackathonImageIndices,
      [hackathonId]: direction === 'next' ? nextImage(currentIndex, totalImages) : prevImage(currentIndex, totalImages)
    });
  };
  
  // Handle image navigation in the modal
  const handleModalImageNav = (direction: 'next' | 'prev') => {
    if (selectedWorkshop && selectedWorkshop.images) {
      const totalImages = selectedWorkshop.images.length;
      setModalImageIndex(direction === 'next' ? nextImage(modalImageIndex, totalImages) : prevImage(modalImageIndex, totalImages));
    } else if (selectedHackathon && selectedHackathon.images) {
      const totalImages = selectedHackathon.images.length;
      setModalImageIndex(direction === 'next' ? nextImage(modalImageIndex, totalImages) : prevImage(modalImageIndex, totalImages));
    }
  };
  
  // Reset modal image index when opening a new modal
  React.useEffect(() => {
    setModalImageIndex(0);
  }, [selectedWorkshop, selectedHackathon]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Our Workshops & Hackathons
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto">
              Learn, code, and innovate with our hands-on workshops and exciting hackathons
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setActiveSection('workshops')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSection === 'workshops'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700'
                }`}
              >
                <Code className="w-5 h-5 inline mr-2" />
                Workshops
              </button>
              <button
                onClick={() => setActiveSection('hackathons')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSection === 'hackathons'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700'
                }`}
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Hackathons
              </button>
              <button
                onClick={() => setActiveSection('upcoming')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSection === 'upcoming'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-secondary-700'
                }`}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Upcoming
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshops List */}
      {activeSection === 'workshops' && (
        <section className="section-padding bg-white dark:bg-secondary-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Workshops</h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Hands-on learning experiences that combine coding with fun activities
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {workshops.map((w) => (
                <motion.div
                  key={w.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedWorkshop(w)}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Image Carousel */}
                    <img
                      src={w.images ? w.images[workshopImageIndices[w.id] || 0] : w.image}
                      alt={w.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Navigation arrows - only show if multiple images */}
                    {w.images && w.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => handleWorkshopImageNav(e, w.id, 'prev')}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => handleWorkshopImageNav(e, w.id, 'next')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                          {w.images.map((_, index) => (
                            <div 
                              key={index} 
                              className={`w-2 h-2 rounded-full ${(workshopImageIndices[w.id] || 0) === index ? 'bg-white' : 'bg-white/50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {w.category}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">{w.level}</div>
                      <div className="text-xs opacity-90">{w.duration}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-secondary-900 dark:text-white">
                      {w.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                      {w.description}
                    </p>
                    <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                      Skills You'll Learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {w.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Hackathons List */}
      {activeSection === 'hackathons' && (
        <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Exciting Hackathons
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Challenge yourself with competitive programming and innovative projects
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {hackathons.map((h) => (
                <motion.div
                  key={h.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedHackathon(h)}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Image Carousel */}
                    <img
                      src={h.images ? h.images[hackathonImageIndices[h.id] || 0] : h.image}
                      alt={h.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Navigation arrows - only show if multiple images */}
                    {h.images && h.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => handleHackathonImageNav(e, h.id, 'prev')}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => handleHackathonImageNav(e, h.id, 'next')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors z-10"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                          {h.images.map((_, index) => (
                            <div 
                              key={index} 
                              className={`w-2 h-2 rounded-full ${(hackathonImageIndices[h.id] || 0) === index ? 'bg-white' : 'bg-white/50'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {h.prize ?? 'Hackathon'}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">{h.date}</div>
                      <div className="text-sm opacity-90">{h.location}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-secondary-900 dark:text-white">
                      {h.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
                      {h.description}
                    </p>
                    <div className="space-y-3 text-sm text-secondary-600 dark:text-secondary-400">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>
                          <strong>Team Size:</strong> {h.teamSize}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>
                          <strong>Location:</strong> {h.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Tag className="w-4 h-4" />
                        <span>
                          <strong>Requirements:</strong> {h.requirements}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Upcoming */}

      {activeSection === 'upcoming' && (
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Calendar className="w-20 h-20 mx-auto text-primary-600 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Stay Tuned!
              </h2>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
                Amazing workshops and hackathons are coming soon. We're preparing exciting
                events that will challenge your skills and expand your knowledge.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6 text-center"
              >
                <Code className="w-6 h-6 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Coding Workshops</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  Learn new technologies and improve your programming skills
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-6 text-center"
              >
                <Trophy className="w-6 h-6 text-secondary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Competitions</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  Participate in exciting hackathons and coding challenges
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="card p-6 text-center"
              >
                <Users className="w-6 h-6 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Networking</h3>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  Connect with like-minded developers and tech enthusiasts
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Workshop Detail Modal */}
      <AnimatePresence>
        {selectedWorkshop && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWorkshop(null)}
          >
            <motion.div
              className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl p-4">
                      <Code className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                        {selectedWorkshop.title}
                      </h2>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {selectedWorkshop.category} • {selectedWorkshop.level}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedWorkshop(null)}
                    className="text-secondary-400 hover:text-secondary-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {/* Image Carousel */}
                  <img
                    src={selectedWorkshop.images ? selectedWorkshop.images[modalImageIndex] : selectedWorkshop.image}
                    alt={selectedWorkshop.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {selectedWorkshop.images && selectedWorkshop.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => handleModalImageNav('prev')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleModalImageNav('next')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {selectedWorkshop.images.map((_, index) => (
                          <button 
                            key={index} 
                            onClick={() => setModalImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${modalImageIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {selectedWorkshop.description}
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
                    Skills You’ll Learn
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorkshop.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-6 text-sm text-secondary-600 dark:text-secondary-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedWorkshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{selectedWorkshop.level}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hackathon Detail Modal */}
      <AnimatePresence>
        {selectedHackathon && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHackathon(null)}
          >
            <motion.div
              className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl p-4">
                      <Trophy className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                        {selectedHackathon.title}
                      </h2>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {selectedHackathon.date} • {selectedHackathon.location}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedHackathon(null)}
                    className="text-secondary-400 hover:text-secondary-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {/* Image Carousel */}
                  <img
                    src={selectedHackathon.images ? selectedHackathon.images[modalImageIndex] : selectedHackathon.image}
                    alt={selectedHackathon.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {selectedHackathon.images && selectedHackathon.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => handleModalImageNav('prev')}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleModalImageNav('next')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {selectedHackathon.images.map((_, index) => (
                          <button 
                            key={index} 
                            onClick={() => setModalImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${modalImageIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {selectedHackathon.description}
                </p>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-secondary-400">
                    <li>Free participation with no experience required</li>
                    <li>Team-based competition format</li>
                    <li>Prizes and recognition for winners</li>
                    <li>Networking opportunities</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">
                      Details
                    </h3>
                    <div className="space-y-3 text-sm text-secondary-600 dark:text-secondary-400">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedHackathon.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedHackathon.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4" />
                        <span>Team size: {selectedHackathon.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Tag className="w-4 h-4" />
                        <span>{selectedHackathon.requirements}</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card p-6">
                    <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-400">
                      Registration
                    </h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {selectedHackathon.prize ?? 'FREE'}
                      </div>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {selectedHackathon.prize ? '' : 'No registration fee'}
                      </p>
                    </div>
                    <button className="btn-primary w-full mt-4">Register Now</button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Workshops;
