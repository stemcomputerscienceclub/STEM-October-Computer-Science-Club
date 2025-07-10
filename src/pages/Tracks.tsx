import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Code,
  Brain,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Star,
  Clock,
  Users,
  ChevronRight,
  Zap,
  Trophy,
  Monitor,
  Wifi,
  Calendar,
  BookOpen,
  LucideIcon
} from 'lucide-react';

// Track interface definition
interface Track {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  duration: string;
  level?: string;
  students?: string;
  rating?: string;
  status: string;
  technologies: string[];
  projects: string[];
  outcomes: string[];
}

const Tracks: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'offline' | 'online' | 'camp'>('offline');

  const trackCategories: {
    offline: { title: string; status: string; icon: LucideIcon; description: string; tracks: Track[] };
    online: { title: string; status: string; icon: LucideIcon; description: string; tracks: Track[] };
    camp: { title: string; status: string; icon: LucideIcon; description: string; tracks: Track[] };
  } = {
    offline: {
      title: "Offline Tracks",
      status: "closed",
      icon: Monitor,
      description: "In-person learning tracks with hands-on sessions",
      tracks: [
        {
          id: 1,
          title: "Machine Learning Track",
          description: "Master ML algorithms, neural networks, and AI applications through hands-on offline sessions.",
          image: "/pages/tracks/Cs machine.webp",
          icon: Brain,
          color: "from-green-500 to-teal-600",
          duration: "20 weeks",
          level: "Intermediate",
          // students: "150+",
          // rating: "4.9",
          status: "closed",
          technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
          projects: ["Image Classification", "NLP Processor", "Recommendation Engine", "Predictive Analytics"],
          outcomes: ["Understand ML algorithms", "Build neural networks", "Work with datasets", "Deploy ML models"]
        },
        {
          id: 2,
          title: "Web Development Track",
          description: "Build modern web applications with React, Node.js, and cutting-edge technologies in offline sessions.",
          image: "/pages/tracks/Cs web dev.webp",
          icon: Code,
          color: "from-blue-500 to-purple-600",
          duration: "20 weeks",
          // level: "Beginner",
          // students: "200+",
          // rating: "4.8",
          status: "closed",
          technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "CSS"],
          projects: ["E-commerce Site", "Social Dashboard", "Chat App", "Portfolio Website"],
          outcomes: ["Build full-stack apps", "Master React", "Deploy applications", "API development"]
        },
        {
          id: 3,
          title: "Generative AI Track",
          description: "Explore generative AI, large language models, and creative AI applications in structured offline learning.",
          image: "/pages/tracks/Cs Gen Ai.webp",
          icon: Zap,
          color: "from-purple-500 to-pink-600",
          duration: "10 weeks",
          // level: "Advanced",
          // students: "80+",
          // rating: "4.7",
          status: "closed",
          technologies: ["OpenAI API", "Hugging Face", "LangChain", "Python", "Transformers", "GPT"],
          projects: ["AI Chatbot", "Content Generator", "Image Creator", "Code Assistant"],
          outcomes: ["Build AI applications", "Work with LLMs", "Create AI tools", "Understand AI ethics"]
        },
        {
          id: 4,
          title: "Quantum Computing Track",
          description: "Dive into quantum computing fundamentals, quantum algorithms, and quantum programming.",
          image: "/pages/tracks/Cs Quantum.webp",
          icon: Cpu,
          color: "from-indigo-500 to-purple-600",
          duration: "8 weeks",
          // level: "Advanced",
          // students: "50+",
          // rating: "4.6",
          status: "closed",
          technologies: ["Qiskit", "Cirq", "Python", "Quantum Gates", "IBM Quantum", "Linear Algebra"],
          projects: ["Quantum Algorithm", "Quantum Cryptography", "Quantum ML", "Quantum Simulation"],
          outcomes: ["Quantum principles", "Quantum algorithms", "Quantum tools", "Quantum applications"]
        },
        {
          id: 5,
          title: "Android App Development Track",
          description: "Create native Android applications using Kotlin and modern Android development practices.",
          image: "/pages/tracks/App dev logo track.webp",
          icon: Smartphone,
          color: "from-green-500 to-blue-600",
          duration: "16 weeks",
          // level: "Intermediate",
          // students: "120+",
          // rating: "4.8",
          status: "closed",
          technologies: ["Kotlin", "Android Studio", "Jetpack Compose", "Firebase", "Room", "Retrofit"],
          projects: ["Social Media App", "E-commerce App", "Fitness Tracker", "News Reader"],
          outcomes: ["Build Android apps", "Master Kotlin", "UI/UX design", "Publish to Play Store"]
        }
      ]
    },
    online: {
      title: "Online Tracks",
      status: "closed",
      icon: Wifi,
      description: "Virtual learning tracks with interactive online sessions",
      tracks: [
        {
          id: 6,
          title: "Machine Learning Track",
          description: "Learn ML algorithms and AI applications through interactive online sessions and virtual labs.",
          image: "/pages/tracks/Cs machine.webp",
          icon: Brain,
          color: "from-green-500 to-teal-600",
          duration: "12 weeks",
          // level: "Intermediate",
          // students: "300+",
          // rating: "4.8",
          status: "closed",
          technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter", "Colab", "Kaggle"],
          projects: ["ML Pipeline", "Deep Learning Model", "Data Analysis", "AI Application"],
          outcomes: ["ML expertise", "Neural networks", "Data science", "AI deployment"]
        },
        {
          id: 7,
          title: "Web Development Track",
          description: "Master full-stack web development through online coding sessions and collaborative projects.",
          image: "/pages/tracks/Cs web dev.webp",
          icon: Code,
          color: "from-blue-500 to-purple-600",
          duration: "12 weeks",
          // level: "Beginner",
          // students: "150+",
          // rating: "4.9",
          status: "closed",
          technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"],
          projects: ["Personal Website", "Web App", "API Service", "Full-stack Project"],
          outcomes: ["Web development", "Frontend skills", "Backend APIs", "Deployment"]
        },
        {
          id: 8,
          title: "Generative AI Track",
          description: "Explore AI creativity and build intelligent applications using generative AI technologies online.",
          image: "/pages/tracks/Cs Gen Ai.webp",
          icon: Zap,
          color: "from-purple-500 to-pink-600",
          duration: "10 weeks",
          // level: "Advanced",
          // students: "200+",
          // rating: "4.7",
          status: "closed",
          technologies: ["GPT API", "DALL-E", "Stable Diffusion", "Python", "Streamlit", "Gradio"],
          projects: ["AI Writer", "Image Generator", "Voice Assistant", "Creative AI Tool"],
          outcomes: ["AI integration", "Creative applications", "API usage", "AI products"]
        },
        {
          id: 9,
          title: "Quantum Computing Track",
          description: "Learn quantum computing concepts and programming through online quantum simulators and cloud platforms.",
          image: "/pages/tracks/Cs Quantum.webp",
          icon: Cpu,
          color: "from-indigo-500 to-purple-600",
          duration: "8 weeks",
          // level: "Advanced",
          // students: "100+",
          // rating: "4.6",
          status: "closed",
          technologies: ["Qiskit", "IBM Quantum", "Quantum Cloud", "Python", "Quantum Circuits", "QAOA"],
          projects: ["Quantum Circuit", "Quantum Game", "Optimization Problem", "Quantum Research"],
          outcomes: ["Quantum programming", "Circuit design", "Quantum algorithms", "Research skills"]
        },
        {
          id: 10,
          title: "Competitive Programming Track",
          description: "Enhance problem-solving skills and algorithmic thinking through competitive programming challenges.",
          image: "/pages/tracks/Cs algorithms.webp",
          icon: Trophy,
          color: "from-yellow-500 to-orange-600",
          duration: "12 weeks",
          // level: "Intermediate",
          // students: "400+",
          // rating: "4.8",
          status: "closed",
          technologies: ["C++", "Python", "Java", "Data Structures", "Algorithms", "STL"],
          projects: ["Contest Solutions", "Algorithm Library", "Problem Setter", "Coding Platform"],
          outcomes: ["Problem solving", "Algorithm design", "Contest performance", "Interview prep"]
        },
        {
          id: 11,
          title: "Programming Fundamentals Track",
          description: "Build strong programming foundations with core concepts, data structures, and problem-solving techniques.",
          image: "/pages/tracks/CS fundamentals.webp",
          icon: Code,
          color: "from-gray-500 to-blue-600",
          duration: "12 weeks",
          // level: "Beginner",
          // students: "600+",
          // rating: "4.9",
          status: "closed",
          technologies: ["Python", "C++", "Data Structures", "OOP", "Algorithms", "Git"],
          projects: ["Calculator App", "Data Manager", "Game Project", "Algorithm Visualizer"],
          outcomes: ["Programming basics", "Logic building", "Code structure", "Best practices"]
        }
      ]
    },
    camp: {
      title: "Camp Tracks",
      status: "coming_soon",
      icon: Calendar,
      description: "Intensive 1-month program with 8 comprehensive sessions",
      tracks: [
        {
          id: 12,
          title: "Machine Learning Camp",
          description: "Intensive 1-month ML bootcamp with 8 comprehensive sessions covering theory to deployment.",
          image: "/pages/tracks/Cs machine.webp",
          icon: Brain,
          color: "from-green-500 to-teal-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["Python", "TensorFlow", "PyTorch", "MLOps", "Docker", "Cloud ML"],
          projects: ["End-to-end ML Project", "Model Deployment", "ML Pipeline", "Production System"],
          outcomes: ["Production ML", "MLOps practices", "Model deployment", "Industry experience"]
        },
        {
          id: 13,
          title: "Web Development Camp",
          description: "Intensive full-stack web development camp with modern technologies and real-world projects.",
          image: "/pages/tracks/Cs web dev.webp",
          icon: Code,
          color: "from-blue-500 to-purple-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
          projects: ["Full-stack App", "E-commerce Platform", "Real-time Features", "Production Deploy"],
          outcomes: ["Full-stack mastery", "Modern frameworks", "Production deployment", "Industry standards"]
        },
        {
          id: 14,
          title: "Generative AI Camp",
          description: "Cutting-edge generative AI camp focusing on LLMs, creative AI, and building AI-powered applications.",
          image: "/pages/tracks/Cs Gen Ai.webp",
          icon: Zap,
          color: "from-purple-500 to-pink-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["OpenAI API", "LangChain", "Vector DBs", "Fine-tuning", "RAG", "AI Agents"],
          projects: ["AI SaaS Product", "Custom AI Model", "AI Agent System", "Production AI App"],
          outcomes: ["AI product development", "LLM integration", "AI entrepreneurship", "Cutting-edge skills"]
        },
        {
          id: 15,
          title: "Quantum Computing Camp",
          description: "Advanced quantum computing intensive covering quantum algorithms, programming, and real applications.",
          image: "/pages/tracks/Cs Quantum.webp",
          icon: Cpu,
          color: "from-indigo-500 to-purple-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["Qiskit", "Cirq", "Quantum Cloud", "NISQ", "Quantum ML", "Research Tools"],
          projects: ["Quantum Research", "NISQ Algorithm", "Quantum Advantage", "Industry Application"],
          outcomes: ["Quantum expertise", "Research skills", "Industry applications", "Quantum advantage"]
        },
        {
          id: 16,
          title: "Android Development Camp",
          description: "Intensive Android development camp with modern Kotlin, Jetpack Compose, and industry best practices.",
          image: "/pages/tracks/App dev logo track.webp",
          icon: Smartphone,
          color: "from-green-500 to-blue-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["Kotlin", "Jetpack Compose", "Architecture", "Testing", "CI/CD", "Play Store"],
          projects: ["Production App", "Architecture Design", "Testing Suite", "App Store Release"],
          outcomes: ["Professional Android dev", "Modern architecture", "Testing expertise", "Production ready"]
        },
        {
          id: 17,
          title: "Programming Fundamentals Camp",
          description: "Accelerated programming fundamentals camp for building strong coding foundations quickly and effectively.",
          image: "/pages/tracks/CS fundamentals.webp",
          icon: Code,
          color: "from-gray-500 to-blue-600",
          duration: "1 month (8 sessions)",
          // level: "Intensive",
          // students: "Coming Soon",
          // rating: "New",
          status: "coming_soon",
          technologies: ["Python", "C++", "DSA", "OOP", "System Design", "Best Practices"],
          projects: ["Algorithm Implementation", "System Design", "Code Review", "Portfolio Projects"],
          outcomes: ["Strong foundations", "Problem solving", "Code quality", "Interview readiness"]
        }
      ]
    }
  };

  const getCurrentTracks = () => {
    return trackCategories[activeTab].tracks;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* SEO Component */}
      <SEO 
        title="Programming Tracks - STEM Computer Science Club"
        description="Explore our comprehensive programming tracks including Web Development, AI/ML, Mobile Development, and more. Master coding skills with structured learning paths and hands-on projects."
        keywords="programming tracks, web development course, AI machine learning training, mobile app development, data science track, cybersecurity course, coding bootcamp tracks"
        image="/imgs/python-hackathon.png"
        url="https://stemcsclub.org/tracks"
      />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Programming Tracks
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto">
              Choose your path and master the technologies that shape the future
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-md">
                <Users className="w-4 h-4 text-primary-600" />
                <span>300+ Students Enrolled</span>
              </div>
              {/* <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-md">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>4.8 Average Rating</span>
              </div> */}
              <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="w-4 h-4 text-green-500" />
                <span>8-20 Week Programs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex bg-secondary-100 dark:bg-secondary-700 rounded-xl p-1">
              {Object.entries(trackCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                const isActive = activeTab === key;
                const isComingSoon = category.status === 'coming_soon';
                const isClosed = category.status === 'closed';
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as 'offline' | 'online' | 'camp')}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white dark:bg-secondary-600 text-primary-600 shadow-sm'
                        : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.title}</span>
                    {isComingSoon && (
                      <span className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                    {isClosed && (
                      <span className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-xs px-2 py-1 rounded-full">
                        Closed
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          {trackCategories[activeTab].description && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-4"
            >
              <p className="text-secondary-600 dark:text-secondary-400">
                {trackCategories[activeTab].description}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {getCurrentTracks().length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-24 h-24 bg-secondary-100 dark:bg-secondary-700 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-12 h-12 text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  No tracks available
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 max-w-md">
                  There are currently no tracks in this category. Check back soon for new learning opportunities!
                </p>
              </motion.div>
            ) : (
              getCurrentTracks().map((track) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.id}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-secondary-100 dark:border-secondary-700"
                  onClick={() => setSelectedTrack(track.id)}
                  {...cardHoverVariants}
                >
                  {/* Track Image */}
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={track.image}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${track.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-white/25 backdrop-blur-lg rounded-2xl p-3.5 shadow-lg border border-white/20">
                        <Icon className="w-full h-full text-white drop-shadow-sm" />
                      </div>
                    </motion.div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      {track.status === 'closed' && (
                        <motion.span 
                          className="bg-red-500/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg border border-red-400/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Closed
                        </motion.span>
                      )}
                      {track.status === 'coming_soon' && (
                        <motion.span 
                          className="bg-emerald-500/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg border border-emerald-400/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Coming Soon
                        </motion.span>
                      )}
                    </div>
                    
                    {/* Rating */}
                    {track.rating && (
                      <motion.div 
                        className="absolute bottom-4 right-4 flex items-center space-x-2 text-white text-sm bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{track.rating}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="p-6 space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {track.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed line-clamp-3">
                        {track.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
                          <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                            <Clock className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          </div>
                          <span className="font-medium">{track.duration}</span>
                        </div>
                        {track.students && (
                          <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400">
                            <div className="w-8 h-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                            </div>
                            <span className="font-medium">{track.students}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-secondary-100 dark:border-secondary-700">
                      {track.level && (
                        <span className="text-xs bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full font-semibold border border-primary-200 dark:border-primary-700">
                          {track.level}
                        </span>
                      )}
                      <motion.div
                        className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-medium text-sm"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })
            )}
          </motion.div>
        </div>
      </section>

      {/* Track Detail Modal */}
      <AnimatePresence>
        {selectedTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const allTracks = [...trackCategories.offline.tracks, ...trackCategories.online.tracks, ...trackCategories.camp.tracks];
                const track = allTracks.find(t => t.id === selectedTrack);
                if (!track) return null;
                const Icon = track.icon;

                return (
                  <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-2xl p-4`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                            {track.title}
                          </h2>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {track.level && `${track.level} • `}{track.duration}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedTrack(null)}
                        className="text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Stats */}
                    <div className={`grid gap-4 ${track.students || track.rating ? 'grid-cols-3' : 'grid-cols-1'}`}>
                      {track.students && (
                        <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-700 rounded-xl">
                          <div className="text-2xl font-bold text-primary-600">{track.students}</div>
                          <div className="text-sm text-secondary-600 dark:text-secondary-400">Students</div>
                        </div>
                      )}
                      {track.rating && (
                        <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-700 rounded-xl">
                          <div className="text-2xl font-bold text-primary-600">{track.rating}</div>
                          <div className="text-sm text-secondary-600 dark:text-secondary-400">Rating</div>
                        </div>
                      )}
                      <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-700 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">{track.projects.length}</div>
                        <div className="text-sm text-secondary-600 dark:text-secondary-400">Projects</div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">About This Track</h3>
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">Technologies You'll Learn</h3>
                      <div className="flex flex-wrap gap-2">
                        {track.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">Projects You'll Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {track.projects.map((project, index) => (
                          <div key={project} className="flex items-center space-x-3 p-3 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
                            <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="text-secondary-700 dark:text-secondary-300">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">What You'll Achieve</h3>
                      <div className="space-y-2">
                        {track.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full" />
                            <span className="text-secondary-600 dark:text-secondary-400">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {track.status === 'closed' ? (
                        <button className="btn-primary flex-1 opacity-50 cursor-not-allowed" disabled>
                          Enrollment Closed
                        </button>
                      ) : track.status === 'coming_soon' ? (
                        <button className="btn-primary flex-1">
                          Notify Me When Available
                        </button>
                      ) : (
                        <button className="btn-primary flex-1">
                          Enroll Now
                        </button>
                      )}
                      <Link to="/workshops" className="btn-secondary flex-1 text-center">
                        View Schedule
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tracks;