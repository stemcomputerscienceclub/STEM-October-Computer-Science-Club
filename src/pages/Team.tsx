import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Linkedin, Github, Mail } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Karim Atef',
      role: 'President & Web Development Head',
      avatar: 'KA',
      bio: 'Leading the club with passion for web technologies and innovation.',
      track: 'Web Development',
    },
    {
      name: 'Adam Mohamed',
      role: 'Vice-President & Programming Fundamentals Head',
      avatar: 'AM',
      bio: 'Dedicated to teaching programming fundamentals and fostering growth.',
      track: 'Programming Fundamentals',
    },
    {
      name: 'Mohamed Zaki',
      role: 'Website Manager & Web Development Vice-Head',
      avatar: 'MZ',
      bio: 'Expert in modern web development and user experience design.',
      track: 'Web Development',
    },
    {
      name: 'Ahmed Adel',
      role: 'Machine Learning Head',
      avatar: 'AA',
      bio: 'Passionate about AI and machine learning applications.',
      track: 'Machine Learning',
    },
    {
      name: 'Abdelrahman Ahmed',
      role: 'Machine Learning Vice-Head',
      avatar: 'AB',
      bio: 'Exploring the frontiers of artificial intelligence and data science.',
      track: 'Machine Learning',
    },
    {
      name: 'Mohammed Mostafa',
      role: 'Algorithms & Data Structures Head',
      avatar: 'MM',
      bio: 'Master of algorithms and competitive programming.',
      track: 'Algorithms & DS',
    },
    {
      name: 'Mohammed Alhussien',
      role: 'Algorithms & Data Structures Vice-Head',
      avatar: 'MH',
      bio: 'Dedicated to solving complex algorithmic challenges.',
      track: 'Algorithms & DS',
    },
    {
      name: 'Farouk Farrag',
      role: 'App Development Head',
      avatar: 'FF',
      bio: 'Creating innovative mobile applications with Flutter.',
      track: 'Mobile Development',
    },
    {
      name: 'Amr Shamekh',
      role: 'Content Writing Head',
      avatar: 'AS',
      bio: 'Crafting engaging content and technical documentation.',
      track: 'Content',
    },
    {
      name: 'Omar Sabey',
      role: 'Graphic Design Head',
      avatar: 'OS',
      bio: 'Creating visual identities and design solutions.',
      track: 'Design',
    },
  ]

  const trackColors = {
    'Web Development': 'from-blue-500 to-cyan-500',
    'Programming Fundamentals': 'from-indigo-500 to-purple-500',
    'Machine Learning': 'from-purple-500 to-pink-500',
    'Algorithms & DS': 'from-orange-500 to-red-500',
    'Mobile Development': 'from-green-500 to-emerald-500',
    'Content': 'from-yellow-500 to-orange-500',
    'Design': 'from-pink-500 to-rose-500',
  }

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
              Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Guiding your journey with expertise and dedication. Our passionate team of leaders and instructors
              are here to help you succeed in your coding journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-secondary/20">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="tech-card text-center group h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-4"
                    >
                      <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
                        <AvatarImage src="" alt={member.name} />
                        <AvatarFallback className={`text-lg font-bold bg-gradient-to-br ${trackColors[member.track]} text-white`}>
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-sm text-blue-400 font-medium mb-2">
                      {member.role}
                    </p>

                    <div className="mb-3">
                      <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${trackColors[member.track]} text-white rounded-full`}>
                        {member.track}
                      </span>
                    </div>
                    
                    <p className="text-sm text-white/70 mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm" className="group/btn text-white hover:text-blue-400 hover:bg-blue-500/10">
                        <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn text-white hover:text-blue-400 hover:bg-blue-500/10">
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn text-white hover:text-blue-400 hover:bg-blue-500/10">
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

      {/* Join Team CTA */}
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
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We're always looking for passionate individuals to help lead and mentor our community
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Involved
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team