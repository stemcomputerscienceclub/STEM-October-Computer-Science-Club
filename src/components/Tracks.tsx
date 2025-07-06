import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight, Code, Smartphone, Brain, Database, BookOpen } from 'lucide-react'

const Tracks = () => {
  const tracks = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Dive into the dynamic world of web development and discover the art of creating captivating digital experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      projects: 4,
      articles: 0,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Transform your app dreams into reality as you delve into the world of Dart and Flutter.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      projects: 6,
      articles: 1,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Dive into the fascinating realm of machine learning, where data-driven insights shape the future.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      projects: 2,
      articles: 2,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Algorithms & DS',
      description: 'Unleash your inner problem-solving genius and delve into the intricate world of algorithms.',
      technologies: ['C++', 'Python', 'Data Structures'],
      projects: 10,
      articles: 3,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: BookOpen,
      title: 'Programming Fundamentals',
      description: 'Embark on an exciting journey into the world of programming with Python fundamentals.',
      technologies: ['Python', 'Logic', 'Problem Solving'],
      projects: 1,
      articles: 0,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="tracks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your Path to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our specialized tracks designed to elevate your skills and prepare you for the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group border-0 glass-effect">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <track.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {track.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {track.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Projects: {track.projects}</span>
                    <span>Articles: {track.articles}</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full group/btn">
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
  )
}

export default Tracks