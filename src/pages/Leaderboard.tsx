import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Star, TrendingUp, Users, Code, Zap, Target, Crown, Award, ChevronUp, ChevronDown, Filter, Search } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('overall');
  const [timeframe, setTimeframe] = useState('all-time');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'overall', name: 'Overall', icon: Trophy },
    { id: 'coding', name: 'Coding Challenges', icon: Code },
    { id: 'projects', name: 'Projects', icon: Target },
    { id: 'hackathons', name: 'Hackathons', icon: Zap },
    { id: 'workshops', name: 'Workshop Attendance', icon: Users }
  ];

  const timeframes = [
    { id: 'all-time', name: 'All Time' },
    { id: 'this-year', name: 'This Year' },
    { id: 'this-month', name: 'This Month' },
    { id: 'this-week', name: 'This Week' }
  ];

  const leaderboardData = {
    overall: [
      {
        id: 1,
        rank: 1,
        name: 'Ahmed Mohamed',
        avatar: '/imgs/members/ahmed.jpg',
        points: 2850,
        level: 'Expert',
        badges: ['🏆', '🥇', '💻', '🚀'],
        streak: 45,
        projects: 12,
        contributions: 89,
        change: 'up',
        specialty: 'Full-Stack Development'
      },
      {
        id: 2,
        rank: 2,
        name: 'Fatima Ali',
        avatar: '/imgs/members/fatima.jpg',
        points: 2720,
        level: 'Expert',
        badges: ['🥈', '📱', '🎨', '⚡'],
        streak: 38,
        projects: 10,
        contributions: 76,
        change: 'up',
        specialty: 'Mobile Development'
      },
      {
        id: 3,
        rank: 3,
        name: 'Omar Hassan',
        avatar: '/imgs/members/omar.jpg',
        points: 2650,
        level: 'Advanced',
        badges: ['🥉', '🤖', '📊', '🔬'],
        streak: 32,
        projects: 8,
        contributions: 65,
        change: 'down',
        specialty: 'AI/ML Engineering'
      },
      {
        id: 4,
        rank: 4,
        name: 'Sara Ahmed',
        avatar: '/imgs/members/sara.jpg',
        points: 2480,
        level: 'Advanced',
        badges: ['🛡️', '🔐', '🕵️', '💎'],
        streak: 28,
        projects: 7,
        contributions: 58,
        change: 'up',
        specialty: 'Cybersecurity'
      },
      {
        id: 5,
        rank: 5,
        name: 'Youssef Mahmoud',
        avatar: '/imgs/members/youssef.jpg',
        points: 2350,
        level: 'Advanced',
        badges: ['🎮', '🎯', '🎨', '🔥'],
        streak: 25,
        projects: 9,
        contributions: 52,
        change: 'same',
        specialty: 'Game Development'
      },
      {
        id: 6,
        rank: 6,
        name: 'Nour Ibrahim',
        avatar: '/imgs/members/nour.jpg',
        points: 2180,
        level: 'Intermediate',
        badges: ['📊', '📈', '🧮', '💡'],
        streak: 22,
        projects: 6,
        contributions: 45,
        change: 'up',
        specialty: 'Data Science'
      },
      {
        id: 7,
        rank: 7,
        name: 'Karim Mostafa',
        avatar: '/imgs/members/karim.jpg',
        points: 2050,
        level: 'Intermediate',
        badges: ['☁️', '⚙️', '🔧', '🌐'],
        streak: 19,
        projects: 5,
        contributions: 41,
        change: 'down',
        specialty: 'DevOps & Cloud'
      },
      {
        id: 8,
        rank: 8,
        name: 'Menna Tarek',
        avatar: '/imgs/members/menna.jpg',
        points: 1920,
        level: 'Intermediate',
        badges: ['🎨', '💻', '📱', '✨'],
        streak: 16,
        projects: 8,
        contributions: 38,
        change: 'up',
        specialty: 'UI/UX Design'
      },
      {
        id: 9,
        rank: 9,
        name: 'Hassan Ali',
        avatar: '/imgs/members/hassan.jpg',
        points: 1850,
        level: 'Intermediate',
        badges: ['🌐', '💻', '📊', '🔍'],
        streak: 14,
        projects: 4,
        contributions: 35,
        change: 'same',
        specialty: 'Web Development'
      },
      {
        id: 10,
        rank: 10,
        name: 'Aya Mahmoud',
        avatar: '/imgs/members/aya.jpg',
        points: 1720,
        level: 'Beginner',
        badges: ['🌟', '📚', '💪', '🎯'],
        streak: 12,
        projects: 3,
        contributions: 28,
        change: 'up',
        specialty: 'Frontend Development'
      }
    ]
  };

  const achievements = [
    {
      title: 'Code Master',
      description: 'Completed 100+ coding challenges',
      icon: '🏆',
      rarity: 'legendary',
      holders: 3
    },
    {
      title: 'Project Pioneer',
      description: 'Created 10+ successful projects',
      icon: '🚀',
      rarity: 'epic',
      holders: 8
    },
    {
      title: 'Hackathon Hero',
      description: 'Won 3+ hackathons',
      icon: '⚡',
      rarity: 'rare',
      holders: 15
    },
    {
      title: 'Community Champion',
      description: 'Helped 50+ members',
      icon: '🤝',
      rarity: 'uncommon',
      holders: 25
    }
  ];

  const currentData = leaderboardData[selectedCategory as keyof typeof leaderboardData] || leaderboardData.overall;
  
  const filteredData = currentData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-secondary-600 dark:text-secondary-400">#{rank}</span>;
    }
  };

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up': return <ChevronUp className="w-4 h-4 text-green-500" />;
      case 'down': return <ChevronDown className="w-4 h-4 text-red-500" />;
      default: return <div className="w-4 h-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'from-purple-500 to-pink-500';
      case 'Advanced': return 'from-blue-500 to-cyan-500';
      case 'Intermediate': return 'from-green-500 to-emerald-500';
      case 'Beginner': return 'from-orange-500 to-yellow-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'epic': return 'from-purple-500 to-pink-500';
      case 'rare': return 'from-blue-500 to-cyan-500';
      case 'uncommon': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Trophy className="w-12 h-12 text-yellow-500" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                Leaderboard
              </h1>
              <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
            <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto">
              Compete, learn, and climb the ranks in our programming community
            </p>
            
            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {filteredData.slice(0, 3).map((member, index) => {
                const positions = [1, 0, 2]; // Center, Left, Right for 1st, 2nd, 3rd
                const heights = ['h-32', 'h-24', 'h-20'];
                const order = positions[index];
                
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`order-${order} flex flex-col items-center`}
                  >
                    <div className={`w-20 h-20 rounded-full overflow-hidden border-4 ${
                      member.rank === 1 ? 'border-yellow-400' :
                      member.rank === 2 ? 'border-gray-400' :
                      'border-amber-600'
                    } mb-4`}>
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=80`;
                        }}
                      />
                    </div>
                    <div className={`${heights[index]} w-full bg-gradient-to-t ${
                      member.rank === 1 ? 'from-yellow-400 to-yellow-500' :
                      member.rank === 2 ? 'from-gray-400 to-gray-500' :
                      'from-amber-600 to-amber-700'
                    } rounded-t-lg flex flex-col items-center justify-center text-white`}>
                      <div className="text-2xl mb-1">{getRankIcon(member.rank)}</div>
                      <div className="text-sm font-semibold text-center px-2">{member.name}</div>
                      <div className="text-xs opacity-90">{member.points} pts</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeframe and Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Timeframe</h3>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {timeframes.map((tf) => (
                    <option key={tf.id} value={tf.id}>{tf.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Leaderboard */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Leaderboard List */}
            <div className="lg:col-span-3">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    Rankings ({filteredData.length})
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-secondary-600 dark:text-secondary-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Updated daily</span>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {filteredData.map((member) => (
                    <motion.div
                      key={member.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.01, y: -2 }}
                      className="flex items-center space-x-4 p-4 bg-white dark:bg-secondary-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
                    >
                      {/* Rank */}
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(member.rank)}
                      </div>

                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=48`;
                            }}
                          />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${getLevelColor(member.level)} rounded-full flex items-center justify-center text-xs font-bold text-white`}>
                          {member.level[0]}
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {member.name}
                          </h3>
                          <div className="flex space-x-1">
                            {member.badges.map((badge, index) => (
                              <span key={index} className="text-sm">{badge}</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                          {member.specialty}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex items-center space-x-6 text-sm text-secondary-600 dark:text-secondary-400">
                        <div className="text-center">
                          <div className="font-semibold text-secondary-900 dark:text-white">{member.projects}</div>
                          <div>Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-secondary-900 dark:text-white">{member.streak}</div>
                          <div>Streak</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-secondary-900 dark:text-white">{member.contributions}</div>
                          <div>Contributions</div>
                        </div>
                      </div>

                      {/* Points and Change */}
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {member.points.toLocaleString()}
                          </span>
                          {getChangeIcon(member.change)}
                        </div>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400">points</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {filteredData.length === 0 && (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-secondary-400 dark:text-secondary-500 mx-auto mb-4" />
                    <p className="text-lg text-secondary-600 dark:text-secondary-400">No members found</p>
                    <p className="text-sm text-secondary-500 dark:text-secondary-500">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Achievements</span>
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.title} className="group">
                      <div className={`p-3 bg-gradient-to-r ${getRarityColor(achievement.rarity)} rounded-lg text-white`}>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg">{achievement.icon}</span>
                          <span className="font-semibold text-sm">{achievement.title}</span>
                        </div>
                        <p className="text-xs opacity-90 mb-2">{achievement.description}</p>
                        <div className="text-xs opacity-75">
                          {achievement.holders} members earned this
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Total Members', value: '150+', icon: Users, color: 'text-blue-600' },
                    { label: 'Active This Week', value: '89', icon: TrendingUp, color: 'text-green-600' },
                    { label: 'Projects Created', value: '234', icon: Target, color: 'text-purple-600' },
                    { label: 'Challenges Solved', value: '1.2k', icon: Code, color: 'text-orange-600' }
                  ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className={`w-4 h-4 ${stat.color}`} />
                          <span className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</span>
                        </div>
                        <span className="font-semibold text-secondary-900 dark:text-white">{stat.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Level Guide */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Level Guide</h3>
                <div className="space-y-3">
                  {[
                    { level: 'Beginner', points: '0-500', color: getLevelColor('Beginner') },
                    { level: 'Intermediate', points: '500-1500', color: getLevelColor('Intermediate') },
                    { level: 'Advanced', points: '1500-2500', color: getLevelColor('Advanced') },
                    { level: 'Expert', points: '2500+', color: getLevelColor('Expert') }
                  ].map((level) => (
                    <div key={level.level} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 bg-gradient-to-r ${level.color} rounded-full`} />
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-secondary-900 dark:text-white">{level.level}</div>
                        <div className="text-xs text-secondary-500 dark:text-secondary-400">{level.points} points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;