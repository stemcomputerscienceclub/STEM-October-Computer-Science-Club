import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react'

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
      image: '📊',
    },
    {
      id: 2,
      title: 'Numpy and Pandas: Essential Tools for Machine Learning',
      date: 'Sunday, July 9, 2023',
      author: 'Ahmed Shalaby',
      excerpt: 'Numpy and Pandas are indispensable tools in machine learning. Numpy is a fundamental package for scientific computing.',
      category: 'Machine Learning',
      readTime: '7 min read',
      image: '🐼',
    },
    {
      id: 3,
      title: 'Cross-Platform Showdown: Flutter vs. The Rest',
      date: 'Wednesday, July 5, 2023',
      author: 'Ahmed Gamal',
      excerpt: 'In recent years, the tech industry has witnessed a surge in cross-platform frameworks. Among the leading players, Flutter brings unique strengths.',
      category: 'Mobile Development',
      readTime: '6 min read',
      image: '📱',
    },
  ]

  return (
    <section id="articles" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the depths of computer science knowledge through insightful articles and tutorials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover group border-0 glass-effect overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-6xl opacity-70">{article.image}</span>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  <Button variant="ghost" className="w-full group/btn">
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
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
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles