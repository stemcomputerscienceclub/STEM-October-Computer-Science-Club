import { motion } from 'framer-motion'
import { Calendar, User, ExternalLink, BookOpen, Code, Brain, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Dynamic Programming: Unlocking Efficient Solutions in Computer Science',
      date: 'Tuesday, July 18, 2023',
      author: 'Ahmed Gamal',
      excerpt: 'Dynamic Programming has emerged as a game-changer in computer science. Its impacts on algorithm design is huge as we will know in this article.',
      category: 'Algorithms',
      readTime: '5 min read',
      icon: Code,
      featured: true,
    },
    {
      id: 2,
      title: 'Numpy and Pandas: Essential Tools for Machine Learning',
      date: 'Sunday, July 9, 2023',
      author: 'Ahmed Shalaby',
      excerpt: 'Numpy and Pandas are indispensable tools in machine learning. Numpy is a fundamental package for scientific computing.',
      category: 'Machine Learning',
      readTime: '7 min read',
      icon: Brain,
      featured: true,
    },
    {
      id: 3,
      title: 'Cross-Platform Showdown: Flutter vs. The Rest',
      date: 'Wednesday, July 5, 2023',
      author: 'Ahmed Gamal',
      excerpt: 'In recent years, the tech industry has witnessed a surge in cross-platform frameworks. Among the leading players, Flutter brings unique strengths.',
      category: 'Mobile Development',
      readTime: '6 min read',
      icon: BookOpen,
      featured: false,
    },
    {
      id: 4,
      title: 'Binary Search vs Linear Search: A Comprehensive Guide',
      date: 'Sunday, July 2, 2023',
      author: 'Ahmed Gamal',
      excerpt: 'We discuss the fundamental differences between Binary Search and Linear Search algorithms and their practical applications.',
      category: 'Algorithms',
      readTime: '4 min read',
      icon: Code,
      featured: false,
    },
    {
      id: 5,
      title: 'How ChatGPT Can Help with Your Studies',
      date: 'Friday, May 12, 2023',
      author: 'Ahmed Gamal',
      excerpt: 'This article explores how ChatGPT can be a valuable tool to enhance your learning experience and academic performance.',
      category: 'AI Tools',
      readTime: '8 min read',
      icon: Brain,
      featured: false,
    },
    {
      id: 6,
      title: 'Add To Your Knowledge in Algorithms',
      date: 'Friday, May 12, 2023',
      author: 'Ahmed Shalaby',
      excerpt: 'Explore various types of algorithms that can help in solving challenging problems in the Computer Science field.',
      category: 'Algorithms',
      readTime: '6 min read',
      icon: Code,
      featured: false,
    },
  ]

  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

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
              Latest <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Articles</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Exploring the depths of computer science knowledge through insightful articles and tutorials
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-secondary/20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="tech-card h-full overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 flex items-center justify-center">
                      <article.icon className="w-16 h-16 text-blue-400 opacity-70" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-xs text-white/60">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-white/70">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                      >
                        Read Article
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="tech-card h-full overflow-hidden">
                    <div className="relative h-32 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 flex items-center justify-center">
                      <article.icon className="w-12 h-12 text-blue-400 opacity-70" />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base text-white hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-white/70 text-sm">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full group/btn text-white hover:text-blue-400 hover:bg-blue-500/10"
                      >
                        Read More
                        <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                      </Button>
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

export default Articles