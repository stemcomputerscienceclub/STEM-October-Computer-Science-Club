import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Karim Atef',
      role: 'President & Web Development Head',
      avatar: 'KA',
      bio: 'Leading the club with passion for web technologies and innovation.',
    },
    {
      name: 'Adam Mohamed',
      role: 'Vice-President & Programming Fundamentals Head',
      avatar: 'AM',
      bio: 'Dedicated to teaching programming fundamentals and fostering growth.',
    },
    {
      name: 'Mohamed Zaki',
      role: 'Website Manager & Web Development Vice-Head',
      avatar: 'MZ',
      bio: 'Expert in modern web development and user experience design.',
    },
    {
      name: 'Ahmed Adel',
      role: 'Machine Learning Head',
      avatar: 'AA',
      bio: 'Passionate about AI and machine learning applications.',
    },
    {
      name: 'Abdelrahman Ahmed',
      role: 'Machine Learning Vice-Head',
      avatar: 'AB',
      bio: 'Exploring the frontiers of artificial intelligence and data science.',
    },
    {
      name: 'Mohammed Mostafa',
      role: 'Algorithms & Data Structures Head',
      avatar: 'MM',
      bio: 'Master of algorithms and competitive programming.',
    },
    {
      name: 'Mohammed Alhussien',
      role: 'Algorithms & Data Structures Vice-Head',
      avatar: 'MH',
      bio: 'Dedicated to solving complex algorithmic challenges.',
    },
    {
      name: 'Farouk Farrag',
      role: 'App Development Head',
      avatar: 'FF',
      bio: 'Creating innovative mobile applications with Flutter.',
    },
  ]

  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guiding your journey with expertise and dedication. Our passionate team of leaders and instructors
            are here to help you succeed in your coding journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover group border-0 glass-effect text-center">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4"
                  >
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="group/btn">
                      <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <Mail className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team