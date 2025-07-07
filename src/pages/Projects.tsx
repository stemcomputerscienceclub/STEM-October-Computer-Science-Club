import { motion } from 'framer-motion'
import { Github, ExternalLink, User, Calculator, Globe, Brain, Mail, CheckSquare, Smartphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CurrencyConv',
      author: 'Ahmed Shalaby',
      description: 'A Flutter application for currency conversion supporting multiple currencies including USD, EGP, EUR, GBP, and more.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'API Integration'],
      icon: Calculator,
      featured: true,
    },
    {
      id: 2,
      title: 'Cooking Cat',
      author: 'Salma Karim & Sara Karim',
      description: 'A colorful and fun website offering dessert, lunch, and breakfast recipes with easy and fast cooking instructions.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Globe,
      featured: true,
    },
    {
      id: 3,
      title: 'CS Quiz App',
      author: 'Marwan Mohamed',
      description: 'A quiz platform for computer science topics with customizable questions, image support, and unique quiz IDs.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      icon: Brain,
      featured: false,
    },
    {
      id: 4,
      title: 'Interactive Quiz',
      author: 'Mohamed Zaki',
      description: 'An interactive quiz application with multiple-choice questions, timer functionality, and difficulty levels.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Brain,
      featured: false,
    },
    {
      id: 5,
      title: 'MailCrafter',
      author: 'Omar Hossam',
      description: 'A web application for crafting and scheduling emails with an intuitive interface and scheduling features.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Mail,
      featured: false,
    },
    {
      id: 6,
      title: 'Todo App',
      author: 'Farouk Farrag',
      description: 'A comprehensive todo application with task management, notes functionality, and smooth transitions.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'Local Storage'],
      icon: CheckSquare,
      featured: false,
    },
    {
      id: 7,
      title: 'Basic Calculator',
      author: 'Mostafa Abdelhamed',
      description: 'A calculator app that performs various arithmetic operations with support for decimal numbers.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart'],
      icon: Calculator,
      featured: false,
    },
    {
      id: 8,
      title: 'Steps - Panic Attack Helper',
      author: 'Maram Soliman',
      description: 'A mobile app designed to help people deal with panic attacks through scientific steps and guidance.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart'],
      icon: Smartphone,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const regularProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding tech-pattern">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="page-header">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the innovative projects created by our talented club members across various technology tracks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-secondary/20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Spotlight Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="tech-card h-full overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-indigo-600/20 to-blue-700/20 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-blue-400 opacity-70" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-white hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-white/70">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-white/60">
                        <User className="w-4 h-4" />
                        <span>{project.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex-1 group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex-1 group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="tech-card h-full overflow-hidden">
                    <div className="relative h-32 bg-gradient-to-br from-indigo-600/20 to-blue-700/20 flex items-center justify-center">
                      <project.icon className="w-12 h-12 text-blue-400 opacity-70" />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base text-white hover:text-blue-400 transition-colors line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-white/70 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs text-white/60">
                        <User className="w-3 h-3" />
                        <span>{project.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-gray-500/20 text-gray-300 rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex-1 group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                        >
                          <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="flex-1 group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                        >
                          <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects