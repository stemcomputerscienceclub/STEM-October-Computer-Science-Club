import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Brain, Database, BookOpen, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Tracks = () => {
  const tracks = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Dive into the dynamic world of web development and discover the art of creating captivating digital experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      projects: 4,
      articles: 0,
      color: 'from-blue-500 to-cyan-500',
      instructors: ['Karim Atef', 'Mohamed Zaki'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Transform your app dreams into reality as you delve into the world of Dart and Flutter.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS'],
      projects: 6,
      articles: 1,
      color: 'from-green-500 to-emerald-500',
      instructors: ['Farouk Farrag'],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Dive into the fascinating realm of machine learning, where data-driven insights shape the future.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'],
      projects: 2,
      articles: 2,
      color: 'from-purple-500 to-pink-500',
      instructors: ['Ahmed Adel', 'Abdelrahman Ahmed'],
    },
    {
      icon: Database,
      title: 'Algorithms & Data Structures',
      description: 'Unleash your inner problem-solving genius and delve into the intricate world of algorithms.',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms'],
      projects: 10,
      articles: 3,
      color: 'from-orange-500 to-red-500',
      instructors: ['Mohammed Mostafa', 'Mohammed Alhussien'],
    },
    {
      icon: BookOpen,
      title: 'Programming Fundamentals',
      description: 'Embark on an exciting journey into the world of programming with Python fundamentals.',
      technologies: ['Python', 'Logic', 'Problem Solving', 'OOP'],
      projects: 1,
      articles: 0,
      color: 'from-indigo-500 to-purple-500',
      instructors: ['Adam Mohamed'],
    },
  ]

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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Tracks</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose from our specialized tracks designed to elevate your skills and prepare you for the future of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="section-padding bg-secondary/20">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="tech-card h-full group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <track.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {track.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {track.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Instructors */}
                    <div>
                      <h4 className="text-sm font-medium text-white/80 mb-2">Instructors:</h4>
                      <div className="flex items-center space-x-2 text-sm text-white/70">
                        <Users className="w-4 h-4" />
                        <span>{track.instructors.join(', ')}</span>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex justify-between text-sm text-white/60">
                      <span>Projects: {track.projects}</span>
                      <span>Articles: {track.articles}</span>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                    >
                      Explore Track
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding code-pattern">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Choose Your Path?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join one of our tracks and start building your future in technology
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Tracks