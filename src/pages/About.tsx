import { motion } from 'framer-motion'
import { Target, Users, Award, Lightbulb, Code, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

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
    {
      icon: Code,
      title: 'Cutting-Edge Tech',
      description: 'Learn the latest technologies and frameworks that are shaping the future of software development.',
    },
    {
      icon: Zap,
      title: 'Fast-Track Learning',
      description: 'Accelerate your learning with our structured curriculum and expert-led workshops.',
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
              About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Our Club</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Welcome to the <strong className="text-white">Computer Science Club of STEM High School, 6th of October!</strong> We are a passionate community 
              of students dedicated to exploring the exciting world of computer science and technology. 
              At our club, we strive to foster a love for coding, innovation, and problem-solving, empowering our members 
              to excel in this ever-evolving field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              To create a dynamic learning environment where students can explore, innovate, and excel in computer science 
              through hands-on projects, collaborative learning, and cutting-edge technology education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="tech-card h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding code-pattern">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
                <p className="text-white/70">
                  We encourage creative thinking and innovative solutions to real-world problems.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-white">Collaboration</h3>
                <p className="text-white/70">
                  We believe in the power of teamwork and collaborative learning experiences.
                </p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
                <p className="text-white/70">
                  We strive for excellence in everything we do, from coding to communication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About