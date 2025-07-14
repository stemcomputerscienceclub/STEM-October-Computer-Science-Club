import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Globe, Smartphone, Cpu, Database, Code, Star, ExternalLink, Github, Eye, Heart, ChevronDown, SortAsc, SortDesc, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { projects, Project } from '../data/projectsData';

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [showFilters, setShowFilters] = useState(false);
  const [showGitHubStats, setShowGitHubStats] = useState(false);

  // Categories and technologies for filtering
  const categories = useMemo(() => {
    // Get unique categories from projects
    const uniqueCategoriesMap: Record<string, boolean> = {};
    projects.forEach(project => {
      uniqueCategoriesMap[project.category] = true;
    });
    const uniqueCategories = Object.keys(uniqueCategoriesMap);
    
    // Create the categories array with 'all' first
    return [
      { value: 'all', label: 'All Categories' },
      ...uniqueCategories.map(category => ({
        value: category,
        label: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') + 's'
      }))
    ];
  }, []);

  // Difficulty levels for filtering
  const difficultyLevels = useMemo(() => {
    // Get unique difficulty levels from projects
    const difficultyMap: Record<string, boolean> = {};
    projects.forEach(project => {
      difficultyMap[project.difficulty] = true;
    });
    const uniqueDifficulties = Object.keys(difficultyMap);
    
    // Create the difficulty levels array with 'all' first
    return [
      { value: 'all', label: 'All Levels' },
      ...uniqueDifficulties.map(difficulty => ({
        value: difficulty,
        label: difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
      }))
    ];
  }, []);

  const technologies = useMemo(() => {
    // Get unique technologies from all projects
    const techMap: Record<string, boolean> = { all: true };
    
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techMap[tech] = true;
      });
    });
    
    return Object.keys(techMap);
  }, []);

  // Filtering and sorting logic
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      const matchesTech = selectedTech === 'all' || 
                         project.technologies.some(tech => tech.toLowerCase() === selectedTech.toLowerCase());
      
      const matchesDifficulty = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesTech && matchesDifficulty;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'likes':
          comparison = a.likes - b.likes;
          break;
        case 'views':
          comparison = a.views - b.views;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [projects, searchQuery, selectedCategory, selectedTech, selectedDifficulty, sortBy, sortOrder]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'website':
      case 'web-app':
        return Globe;
      case 'mobile-app':
        return Smartphone;
      case 'desktop-app':
        return Code;
      case 'iot':
        return Cpu;
      case 'ai-ml':
        return Database;
      default:
        return Code;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    // Normalize the difficulty to handle case inconsistencies
    const normalizedDifficulty = difficulty.toLowerCase();
    
    switch (normalizedDifficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <SEO 
        title="Projects - STEM Computer Science Club"
        description="Explore innovative projects created by our club members. From web applications to AI solutions, discover the cutting-edge technology solutions built by our community."
        keywords="STEM projects, student projects, web development, mobile apps, AI projects, programming projects, computer science, innovation, technology"
        image="/imgs/projects-hero.png"
        url="https://stemcsclub.org/projects"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8"
            >
              <Code className="w-5 h-5 text-blue-300 mr-3" />
              <span className="text-blue-300 font-medium">Student Innovation Showcase</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Our Projects
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions, creative applications, and groundbreaking projects built by our talented community members
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, technologies, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors font-medium"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  aria-label="Sort projects by"
                >
                  <option value="date">Date</option>
                  <option value="likes">Likes</option>
                  <option value="views">Views</option>
                  <option value="title">Title</option>
                </select>
                
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl mb-8"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  aria-label="Filter by category"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Technology
                </label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  aria-label="Filter by technology"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>
                      {tech === 'all' ? 'All Technologies' : tech}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  aria-label="Filter by difficulty level"
                >
                  {difficultyLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedTech('all');
                    setSelectedDifficulty('all');
                    setSortBy('date');
                    setSortOrder('desc');
                  }}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
              
              {/* GitHub Stats Toggle */}
              <div className="lg:col-span-3 border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <div className="mr-3">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Show GitHub Activity</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Display recent commit activity and contributor stats</p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={showGitHubStats} 
                        onChange={() => setShowGitHubStats(!showGitHubStats)} 
                        className="sr-only" 
                      />
                      <div className={`w-10 h-6 rounded-full transition-colors ${showGitHubStats ? 'bg-blue-600' : 'bg-slate-400'}`}></div>
                      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform transform ${showGitHubStats ? 'translate-x-4' : ''}`}></div>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600 dark:text-slate-400">
              Showing <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredAndSortedProjects.length}</span> 
              {filteredAndSortedProjects.length === 1 ? ' project' : ' projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAndSortedProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                >
                  {/* Project Image */}
                  <Link to={`/projects/${project.id}`} className="block relative h-52 overflow-hidden">
                    <img
                      src={project.image || '/imgs/projects-hero.png'}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    
                    {/* Category Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <CategoryIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                      </div>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3 h-3 mr-1" /> Featured
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Header */}
                    <Link to={`/projects/${project.id}`} className="block hover:opacity-80 transition-opacity">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Heart className="w-4 h-4 mr-1" />
                          <span className="text-sm">{project.likes}</span>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Eye className="w-4 h-4 mr-1" />
                          <span className="text-sm">{project.views}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-slate-500 dark:text-slate-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.completionTime}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-md text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={project.authorImage}
                          alt={project.author}
                          className="w-8 h-8 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{project.author}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {new Date(project.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Team Size Indicator */}
                      {project.members && project.members.length > 1 && (
                        <div className="flex -space-x-2">
                          {project.members.slice(0, 2).map((member, idx) => (
                            <img
                              key={member.id}
                              src={member.image}
                              alt={member.name}
                              className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800"
                            />
                          ))}
                          {project.members.length > 2 && (
                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs border-2 border-white dark:border-slate-800">
                              +{project.members.length - 2}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Testimonial Preview (if available) */}
                    {project.testimonials && project.testimonials.length > 0 && (
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-3 mb-4">
                        <blockquote className="italic text-slate-600 dark:text-slate-400 text-xs line-clamp-2">
                          "{project.testimonials[0].text.substring(0, 100)}..."
                        </blockquote>
                      </div>
                    )}

                    {/* GitHub Integration & Stats */}
                    {project.githubUrl && showGitHubStats && (
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                        <h4 className="font-medium text-sm mb-2 text-slate-700 dark:text-slate-300">GitHub Activity</h4>
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center text-green-600 dark:text-green-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                            <span>4 commits this week</span>
                          </div>
                          <div className="flex items-center text-blue-600 dark:text-blue-400">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                            <span>2 contributors</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* We removed the duplicate difficulty badge here */}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/projects/${project.id}`}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                      >
                        View Details
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
                        aria-label="View Code on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results */}
          {filteredAndSortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Try adjusting your search criteria or clear the filters to see all projects.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTech('all');
                  setSelectedDifficulty('all');
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Join CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Want to Build Your Own Project?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Join our club to learn new skills, collaborate with other students, and add impressive projects to your portfolio.
            </p>
            <Link 
              to="/join"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Join the CS Club
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
