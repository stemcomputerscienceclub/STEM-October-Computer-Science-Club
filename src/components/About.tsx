import { motion } from 'framer-motion'
import { Target, Users, Award, Lightbulb } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Exciting Projects',
      description: 'Get ready to embark on thrilling coding projects that challenge your problem-solving skills and ignite your imagination.',
    },
    {
      icon: Award,
      title: 'Competitions & Hackathons',
      description: 'Join us in various coding competitions and hackathons, where you\'ll showcase your talents and collaborate with teammates.',
    },
    {
      icon: Users,
      title: 'One-to-One Mentorships',
      description: 'Our club values comprehensive learning opportunities with personalized guidance and tailored feedback.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Foster creativity and innovation through hands-on workshops and collaborative learning experiences.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Our Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Welcome to the <strong>Computer Science Club of STEM High School, 6th of October!</strong> We are a passionate community 
            of students dedicated to exploring the exciting world of computer science and technology. 
            At our club, we strive to foster a love for coding, innovation, and problem-solving, empowering our members 
            to excel in this ever-evolving field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8 card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden glass-effect"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">📸</span>
                </div>
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About