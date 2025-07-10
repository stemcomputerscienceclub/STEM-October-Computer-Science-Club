import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Code, Lightbulb, Rocket, Globe, Crown, Trophy, MapPin, Video, Mail, Phone, Linkedin } from 'lucide-react';
import '../styles/flipCard.css';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Excellence in Programming',
      description: 'We strive for the highest standards in coding practices and software development.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'We believe in the power of teamwork and peer-to-peer knowledge sharing.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We encourage creative thinking and innovative solutions to real-world problems.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We aim to create technology solutions that make a positive impact worldwide.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'ECPC Finalist',
      description: 'Qualified as finalist in Egyptian Collegiate Programming Contest'
    },
    {
      icon: Crown,
      title: 'EISTF Gold Medal',
      description: 'Gold medalist at Egyptian International Science and Technology Fair'
    },
    {
      icon: Trophy,
      title: 'ISEF National First Prize',
      description: 'First place winner at Intel International Science and Engineering Fair - National Level'
    },
    {
      icon: Globe,
      title: 'ISEF Global Award',
      description: 'International recognition at Intel International Science and Engineering Fair - Global Level'
    },
    {
      icon: Target,
      title: 'Arab AI Olympiad - 4th Place',
      description: '4th place achievement in the Arab Artificial Intelligence Olympiad'
    },
    {
      icon: Rocket,
      title: 'AI & IoT Top 10',
      description: 'Top 10 placement in Artificial Intelligence and Internet of Things competition'
    },
    {
      icon: Crown,
      title: 'DECI GEEKs Competition (1st Place)',
      description: 'Issued by Ministry of Communications and Information Technology'
    },
    {
      icon: Users,
      title: 'Community Growth',
      description: 'Reached 500+ active members milestone'
    },
    {
      icon: Code,
      title: 'Open Source Contributions',
      description: '100+ contributions to open source projects'
    }
  ];

  const [activeTab, setActiveTab] = useState('highboard');
  const [activeSeason, setActiveSeason] = useState('2025');

  // Function to handle season change and automatically switch to highboard
  const handleSeasonChange = (season: string) => {
    setActiveSeason(season);
    setActiveTab('highboard'); // Always switch to highboard when changing year
  };

  // Season-based team data structure
  const teamData = {
    '2024': {
      highboardMembers: [
        {
          name: 'Karim Atef',
          role: 'President',
          image: 'imgs/members/kemo.jpg',
          // email: 'ahmed.mohamed@stemcs.club',
          // phone: '+20 123 456 7890',
          // linkedin: 'linkedin.com/in/ahmed-mohamed'
        },
        {
          name: 'Adam Mohamed',
          role: 'Vice-President',
          image: '/imgs/members/Adam.jpeg',
          // email: 'omar.hassan@stemcs.club',
          // linkedin: 'linkedin.com/in/omar-hassan'
        }
      ],

      mentors: [ {
          name: 'Karim Atef',
          role: 'Web Development Head',
          image: '/imgs/members/kemo.jpg',
          // email: 'ahmed.mohamed@stemcs.club',
          // phone: '+20 123 456 7890',
          // linkedin: 'linkedin.com/in/ahmed-mohamed'
        },
        {
          name: 'Adam Mohamed',
          role: 'Programming Fundamentals Head',
          image: '/imgs/members/Adam.jpeg',
          // email: 'omar.hassan@stemcs.club',
          // linkedin: 'linkedin.com/in/omar-hassan'
        },
        {
          name: 'Ahmed Adel',
          role: 'Machine Learning Head',
          image: '/imgs/members/Ahmed Adel.jpg',
          // email: 'sarah.ahmed@mentor.stemcs.club',
          // phone: '+20 100 123 4567',
          // linkedin: 'linkedin.com/in/sarah-ahmed'
        },
        {
          name: 'Abdelrahman Ahmed',
          role: 'Machine Learning Vice-Head',
          image: '/imgs/members/Abdelrahman.jpeg',
          // email: 'khaled.hassan@mentor.stemcs.club'
        },
        {
          name: 'Mohamed Zaki',
          role: 'Web Development Vice-Head',
          image: '/imgs/members/Zaki.jpg',
        
        },
        {
          name: 'Mohamed Mostafa',
          role: 'Algorithms & Data Structures Head',
          image: '/imgs/members/Mohammed-Mostafa.jpeg',
         
        },
        {
          name: 'Mohammed Alhussien',
          role: 'Algorithms & Data Structures Vice-Head',
          image: '/imgs/members/Elhusssien.jpeg',
         
        },
        {
          name: 'Farouk Faragg',
          role: 'App Development Head',
          image: '/imgs/members/Farouk.jpeg',
        
        }
      ],

      graphicDesigners: [
        {
          name: 'Layla Ahmed',
          role: 'UI/UX Designer',
          image: '/imgs/members/Ahmed Adel.jpg',
          email: 'layla.ahmed@stemcs.club',
          phone: '+20 100 234 5678',
          linkedin: 'linkedin.com/in/layla-ahmed'
        },
        {
          name: 'Karim Hassan',
          role: 'Graphic Designer',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'karim.hassan@stemcs.club',
          linkedin: 'linkedin.com/in/karim-hassan'
        }
      ],
      developers: [
      
      ],
      marketers: [
        {
          name: 'Hana Youssef',
          role: 'Digital Marketing Specialist',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'hana.youssef@stemcs.club',
          phone: '+20 100 567 8901',
          linkedin: 'linkedin.com/in/hana-youssef'
        },
        {
          name: 'Amr Salah',
          role: 'Social Media Manager',
          image: '/imgs/members/Moi.jpg',
          email: 'amr.salah@stemcs.club',
          phone: '+20 100 678 9012'
        }
      ]
    },
    '2025': {
      highboardMembers: [
        {
          name: 'Mohamed Ramadan',
          role: 'President',
          image: '/imgs/members/Ahmed Adel.jpg',
          email: 'nadia.farouk@stemcs.club',
          phone: '+20 123 456 7894',
          linkedin: 'linkedin.com/in/nadia-farouk'
        },
        {
          name: 'Yaseen Saad',
          role: 'Vice-President',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'youssef.ibrahim@stemcs.club',
          linkedin: 'linkedin.com/in/youssef-ibrahim'
        },
        {
          name: 'Mohamed Nady',
          role: 'Online coordinator',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'youssef.ibrahim@stemcs.club',
          linkedin: 'linkedin.com/in/youssef-ibrahim'
        },
        {
          name: 'Mohamed Hassan',
          role: 'Computational Coordinator',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'youssef.ibrahim@stemcs.club',
          linkedin: 'linkedin.com/in/youssef-ibrahim'
        }
      ],
      offlineMentors: [
        {
          name: 'Dr. Amira Saleh',
          role: 'Senior AI Engineer',
          image: '/imgs/members/Moi.jpg',
          email: 'amira.saleh@mentor.stemcs.club',
          phone: '+20 100 123 4574',
          linkedin: 'linkedin.com/in/amira-saleh'
        }
      ],
      onlineMentors: [
        {
          name: 'Hassan Ali',
          role: 'Cloud Architect',
          image: '/imgs/members/Zaki.jpg',
          email: 'hassan.ali@mentor.stemcs.club',
          phone: '+20 100 123 4575',
          linkedin: 'linkedin.com/in/hassan-ali'
        }
      ],
      graphicDesigners: [
        {
          name: 'Rana Khaled',
          role: 'Brand Designer',
          image: '/imgs/members/Ahmed Adel.jpg',
          email: 'rana.khaled@stemcs.club',
          phone: '+20 100 234 5679',
          linkedin: 'linkedin.com/in/rana-khaled'
        }
      ],
      developers: [
        {
          name: 'Mostafa Reda',
          role: 'Mobile Developer',
          image: '/imgs/members/Omar-Negm.jpeg',
          email: 'mostafa.reda@stemcs.club',
          phone: '+20 100 345 6790',
          linkedin: 'linkedin.com/in/mostafa-reda'
        }
      ],
      marketers: [
        {
          name: 'Salma Hassan',
          role: 'Content Marketing Lead',
          image: '/imgs/members/Moi.jpg',
          email: 'salma.hassan@stemcs.club',
          phone: '+20 100 567 8902',
          linkedin: 'linkedin.com/in/salma-hassan'
        }
      ]
    }
  };

  // Get current season data with fallback
  const currentSeasonData = teamData[activeSeason as keyof typeof teamData] || teamData['2024'];
  
  // Handle different data structures for different seasons
  let highboardMembers: any[] = [];
  let offlineMentors: any[] = [];
  let onlineMentors: any[] = [];
  let mentors: any[] = [];
  let graphicDesigners: any[] = [];
  let developers: any[] = [];
  let marketers: any[] = [];
  
  if (currentSeasonData) {
    highboardMembers = currentSeasonData.highboardMembers || [];
    graphicDesigners = currentSeasonData.graphicDesigners || [];
    developers = currentSeasonData.developers || [];
    marketers = currentSeasonData.marketers || [];
    
    // For 2024: use combined mentors array
    if (activeSeason === '2024') {
      mentors = (currentSeasonData as any).mentors || [];
    } else {
      // For 2025 and later: use separate offline/online mentors
      offlineMentors = (currentSeasonData as any).offlineMentors || [];
      onlineMentors = (currentSeasonData as any).onlineMentors || [];
    }
  }

  // Combined array for creative team tab
  const allInOneTeam = [...graphicDesigners, ...developers, ...marketers];

  // Available seasons
  const availableSeasons = Object.keys(teamData);

  // Dynamic tabs based on active season
  const tabs = activeSeason === '2024' ? [
    { id: 'highboard', label: 'High Board', icon: MapPin, count: highboardMembers.length },
    { id: 'mentors', label: 'Mentors', icon: Users, count: mentors.length },
    // { id: 'creative', label: 'Creative Team', icon: Users, count: allInOneTeam.length }
  ] : [
    { id: 'highboard', label: 'High Board', icon: MapPin, count: highboardMembers.length },
    { id: 'offline', label: 'Offline Mentors', icon: MapPin, count: offlineMentors.length },
    { id: 'online', label: 'Online Mentors', icon: Video, count: onlineMentors.length },
    { id: 'creative', label: 'Creative Team', icon: Users, count: allInOneTeam.length }
  ];

  // Reusable Member Card Component with Unified Modern Design
  const MemberCard = ({ member, type }: { member: any, type: 'highboard' | 'offline' | 'online' | 'creative' | 'mentors' }) => {
    const handleContactClick = (contactType: string, value: string) => {
      switch (contactType) {
        case 'email':
          window.open(`mailto:${value}`, '_blank');
          break;
        case 'phone':
          window.open(`tel:${value}`, '_blank');
          break;
        case 'linkedin':
          window.open(`https://${value.startsWith('http') ? value.replace(/^https?:\/\//, '') : value}`, '_blank');
          break;
      }
    };

    const getTypeIndicator = () => {
      switch (type) {
        case 'highboard':
          return (
        <div className="">
              <div className=""></div>
            </div>
          );
        case 'mentors':
          return (
            <div className="absolute -top-2 -right-2 z-10">
              {/* <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Mentor
              </div> */}
            </div>
          );
        case 'offline':
          return (
           <div className="">
              <div className=""></div>
            </div>
          );
        case 'online':
          return (
            <div className="">
              <div className=""></div>
            </div>
          );
        case 'creative':
          return (
            <div className="">
              <div className=""></div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <motion.div
        variants={itemVariants}
        className="relative w-full h-80 perspective-1000 group member-card-container"
        whileHover={{ 
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
      >
        {/* Flip Card Container */}
        <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          
          {/* Front Face - Image Only */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
            <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-xl">
              {/* Enhanced Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 gradient-bg"></div>
              
              {/* Profile Image - Full Card */}
              <div className="relative w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover member-image transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=400`;
                  }}
                  loading="lazy"
                />
                
                {/* Enhanced Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary-400/50 via-secondary-500/50 to-primary-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Type Indicator */}
                <div className="absolute top-4 right-4 type-indicator">
                  {getTypeIndicator()}
                </div>
                
                {/* Member Name on Front (Subtle) */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {member.role}
                  </p>
                </div>
                
                {/* Enhanced Hover Hint */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <motion.div 
                    className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/20"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    ✨ Hover for contact details
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back Face - Enhanced Details */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden">
            <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/25 to-secondary-500/25 gradient-bg"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-400/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-6">
                
                {/* Enhanced Name and Position */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{member.name}</h3>
                  <div className="relative">
                    <p className="text-primary-100 font-semibold px-6 py-3 bg-gradient-to-r from-primary-500/40 to-primary-600/40 rounded-full text-sm backdrop-blur-sm border border-white/20 shadow-lg">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
                
                {/* Enhanced Contact Information - Social Media Icons */}
                <motion.div 
                  className="flex items-center justify-center gap-4 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {member.email && (
                    <motion.button 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick('email', member.email)}
                      className="social-icon-button bg-gradient-to-r from-primary-500/90 to-primary-600/90 hover:from-primary-600 hover:to-primary-700 text-white border border-white/30 shadow-lg"
                      title={member.email}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.button>
                  )}
                  
                  {member.phone && (
                    <motion.button 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick('phone', member.phone)}
                      className="social-icon-button bg-gradient-to-r from-green-500/90 to-green-600/90 hover:from-green-600 hover:to-green-700 text-white border border-white/30 shadow-lg"
                      title={member.phone}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.button>
                  )}
                  
                  {member.linkedin && (
                    <motion.button 
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick('linkedin', member.linkedin)}
                      className="social-icon-button bg-gradient-to-r from-blue-600/90 to-blue-700/90 hover:from-blue-700 hover:to-blue-800 text-white border border-white/30 shadow-lg"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            {/* Enhanced Title with Floating Elements */}
            <div className="relative">
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mt-8"
              >
                About STEM CS Club
              </motion.h1>
               </div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto leading-relaxed">
                We are a passionate community of students dedicated to advancing computer science education 
                and fostering innovation through collaborative learning and hands-on projects.
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">300+</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Active Members</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Projects Completed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Awards Won</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Years of Excellence</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Team Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="relative max-w-5xl mx-auto">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src="/imgs/Team.jpeg"
                  alt="STEM CS Club Team"
                  className="w-full rounded-3xl shadow-2xl border-4 border-white/20"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -left-4 top-1/4 bg-white dark:bg-secondary-800 rounded-2xl p-4 shadow-xl border border-white/20 hidden md:block"
                >
                  {/* <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="text-sm font-bold text-secondary-900 dark:text-white">National Champions</div>
                      <div className="text-xs text-secondary-600 dark:text-secondary-400">2023</div>
                    </div>
                  </div> */}
                </motion.div>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary-600" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Mission</h2>
                </div>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  To empower students with cutting-edge programming skills, foster innovation in technology, 
                  and create a supportive community where aspiring developers can learn, grow, and make a 
                  meaningful impact in the world of computer science.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-primary-600" />
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Vision</h2>
                </div>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  To be the leading student-driven technology community that bridges the gap between 
                  academic learning and real-world application, producing the next generation of 
                  innovative software engineers and tech leaders.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/imgs/undraw_code_thinking_re_gka2.svg"
                  alt="Programming"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/imgs/undraw_real_time_collaboration_c62i.svg"
                  alt="Collaboration"
                  className="w-full h-48 object-cover rounded-xl mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our community culture
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative card p-8 text-center group overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      animate={{
                        y: [-20, -40, -20],
                        x: [-10, 10, -10],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${value.color} rounded-full opacity-30`}
                    />
                    <motion.div
                      animate={{
                        y: [-30, -10, -30],
                        x: [10, -5, 10],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className={`absolute bottom-6 left-6 w-1.5 h-1.5 bg-gradient-to-r ${value.color} rounded-full opacity-20`}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced Icon with Multiple Effects */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative mx-auto mb-6"
                    >
                      <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${value.color} p-5 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    {/* Decorative Bottom Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-1 bg-gradient-to-r ${value.color} rounded-full mt-6 mx-auto opacity-20 group-hover:opacity-60 transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Collaborating with leading organizations to enhance learning opportunities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer"
              onClick={() => window.open('https://usaco.guide', '_blank')}
            >
              <div className="relative p-8 bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 group-hover:border-primary-300 dark:group-hover:border-primary-600">
                <img
                  src="/pages/parteners/usacologo.png"
                  alt="USACO Guide"
                  className="h-16 w-auto mx-auto filter group-hover:brightness-110 transition-all duration-300"
                />
                <div className="mt-4 text-center">
                   <h3 className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                     USACO Guide
                   </h3>
                   <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                     Provides us with competitive programming materials and resources
                   </p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer"
              onClick={() => window.open('https://hackclub.com', '_blank')}
            >
              <div className="relative p-8 bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 group-hover:border-primary-300 dark:group-hover:border-primary-600">
                <img
                  src="/pages/parteners/Hackclublogo1.png"
                  alt="Hack Club"
                  className="h-16 w-auto mx-auto filter group-hover:brightness-110 transition-all duration-300"
                />
                <div className="mt-4 text-center">
                   <h3 className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                     Hack Club
                   </h3>
                   <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                     We are the official Hack Club chapter in Egypt
                   </p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Celebrating our milestones and recognitions in the tech community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="relative card p-8 flex items-start space-x-6 group overflow-hidden"
                >
                  {/* Animated Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary-200/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex-shrink-0 relative z-10">
                    {/* Enhanced Icon with Glow Effect */}
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
                      
                      {/* Achievement Badge */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md"
                      >
                        <span className="text-xs font-bold text-white">★</span>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="flex-grow relative z-10">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">
                      {achievement.description}
                    </p>
                    
                    {/* Progress Line Animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership & Mentorship */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Leadership & Mentorship
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Meet our exceptional leaders and mentors who guide our community to excellence
            </p>
          </motion.div>

          {/* Season Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-2 shadow-lg border border-secondary-200 dark:border-secondary-700">
              <div className="flex space-x-2">
                {availableSeasons.map((season) => (
                  <motion.button
                    key={season}
                    onClick={() => handleSeasonChange(season)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeSeason === season
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700'
                    }`}
                  >
                    {activeSeason === season && (
                      <motion.div
                        layoutId="activeSeason"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{season}</span>
                  </motion.button>
                ))}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl font-semibold text-secondary-400 dark:text-secondary-500 border-2 border-dashed border-secondary-300 dark:border-secondary-600 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                  title="Coming Soon"
                >
                  2026
                </motion.button> */}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center space-x-4 px-8 py-4 rounded-2xl font-bold transition-all duration-500 overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-2xl shadow-primary-500/30'
                      : 'bg-white dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Animated Background for Active Tab */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive ? 'hidden' : ''
                  }`}></div>
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Enhanced Icon */}
                    <motion.div
                      whileHover={{ rotate: isActive ? [0, -10, 10, 0] : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300'
                      } transition-colors duration-300`}
                    >
                      <Icon className="w-full h-full" />
                    </motion.div>
                    
                    <span className={`text-lg ${
                      isActive ? 'text-white' : 'group-hover:text-primary-700 dark:group-hover:text-primary-300'
                    } transition-colors duration-300`}>
                      {tab.label}
                    </span>
                    
                    {/* Enhanced Count Badge */}
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className={`text-sm font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 text-white backdrop-blur-sm'
                          : 'bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-primary-800/40 dark:group-hover:to-primary-700/40'
                      }`}
                    >
                      {tab.count}
                    </motion.span>
                  </div>
                  
                  {/* Active Tab Indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Enhanced Content based on active tab */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {activeTab === 'highboard' && (
              <div className="relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {highboardMembers.map((member: any, index: number) => (
                    <motion.div
                      key={`highboard-${index}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <MemberCard member={member} type="highboard" />
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            )}

            {activeTab === 'mentors' && (
              <div className="relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {mentors.map((mentor: any, index: number) => (
                    <motion.div
                      key={`mentor-${index}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <MemberCard member={mentor} type="mentors" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mentors.length * 0.1 + 0.3, duration: 0.6 }}
                  className="mt-16 text-center"
                >
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full border border-primary-200/50 dark:border-primary-700/50">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                      {mentors.length} Mentors Available to Guide You
                    </span>
                    <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'offline' && (
              <div className="relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {offlineMentors.map((mentor: any, index: number) => (
                    <motion.div
                      key={`offline-${index}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <MemberCard member={mentor} type="offline" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: offlineMentors.length * 0.1 + 0.3, duration: 0.6 }}
                  className="mt-16 text-center"
                >
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full border border-primary-200/50 dark:border-primary-700/50">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                      {offlineMentors.length} Offline Mentors Available
                    </span>
                    <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'online' && (
              <div className="relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {onlineMentors.map((mentor: any, index: number) => (
                    <motion.div
                      key={`online-${index}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <MemberCard member={mentor} type="online" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {activeTab === 'creative' && (
              <div className="relative z-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {allInOneTeam.map((member: any, index: number) => (
                    <motion.div
                      key={`creative-${index}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.3
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <MemberCard member={member} type="creative" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
