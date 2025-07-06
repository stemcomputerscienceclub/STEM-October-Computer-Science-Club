import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-green-400' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-400' },
    { name: 'Flutter', icon: '📱', color: 'from-blue-400 to-purple-400' },
    { name: 'Machine Learning', icon: '🤖', color: 'from-purple-400 to-pink-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-500' },
    { name: 'C++', icon: '⚡', color: 'from-red-400 to-orange-400' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the cutting-edge technologies and frameworks that power our curriculum
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="tech-icon group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-sm font-medium text-center">{tech.name}</div>
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack