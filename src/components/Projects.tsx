import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Github, ExternalLink, User, ArrowRight, Smartphone, Globe, Brain, Calculator, Mail, CheckSquare } from 'lucide-react'

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
    },
    {
      id: 2,
      title: 'Cooking Cat',
      author: 'Salma Karim & Sara Karim',
      description: 'A colorful and fun website offering dessert, lunch, and breakfast recipes with easy and fast cooking instructions.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Globe,
    },
    {
      id: 3,
      title: 'CS Quiz App',
      author: 'Marwan Mohamed',
      description: 'A quiz platform for computer science topics with customizable questions, image support, and unique quiz IDs.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      icon: Brain,
    },
    {
      id: 4,
      title: 'Interactive Quiz',
      author: 'Mohamed Zaki',
      description: 'An interactive quiz application with multiple-choice questions, timer functionality, and difficulty levels.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Brain,
    },
    {
      id: 5,
      title: 'MailCrafter',
      author: 'Omar Hossam',
      description: 'A web application for crafting and scheduling emails with an intuitive interface and scheduling features.',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: Mail,
    },
    {
      id: 6,
      title: 'Todo App',
      author: 'Farouk Farrag',
      description: 'A comprehensive todo application with task management, notes functionality, and smooth transitions.',
      category: 'Mobile Development',
      technologies: ['Flutter', 'Dart', 'Local Storage'],
      icon: CheckSquare,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative projects created by our talented club members across various technology tracks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group border-0 glass-effect overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-indigo-600/20 to-blue-700/20 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-blue-400 opacity-70" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{project.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects