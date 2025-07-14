import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, ArrowRight, Sparkles, MessageSquare, Bot, Code, BookOpen } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  tag: string;
  tagColor: string;
}

interface CodeyNewsProps {
  variant: 'home' | 'about';
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Codey Gets a Fresh New Look!',
    date: 'July 10, 2025',
    summary: 'Our beloved mascot Codey has been given a modern redesign while keeping the friendly personality you know and love.',
    tag: 'Club News',
    tagColor: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'New AI Assistance Features',
    date: 'June 28, 2025',
    summary: 'Codey now comes equipped with enhanced AI capabilities to help members with coding problems and project brainstorming.',
    tag: 'Technology',
    tagColor: 'bg-purple-500'
  },
  {
    id: '3',
    title: 'Summer Coding Camp Registration Open',
    date: 'June 15, 2025',
    summary: 'Join Codey at Camp Make this summer! Registration is now open for our intensive coding bootcamp experience.',
    tag: 'Events',
    tagColor: 'bg-green-500'
  },
  {
    id: '4',
    title: 'Codey\'s Python Challenge Series',
    date: 'May 22, 2025',
    summary: 'Test your skills with Codey\'s weekly Python challenges! Solve puzzles and earn points toward the leaderboard.',
    tag: 'Learning',
    tagColor: 'bg-yellow-500'
  }
];

const CodeyNews: React.FC<CodeyNewsProps> = ({ variant }) => {
  const isHome = variant === 'home';
  
  return (
    <section className={`py-20 ${isHome ? 'bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800' : 'bg-white dark:bg-slate-800'} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple-300 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-green-300 blur-3xl"></div>
        
        {/* Code snippets decoration */}
        <div className="absolute top-20 right-20 text-xs opacity-20 font-mono transform rotate-6">
          {`function codeyHelps() {`}
          <br />
          {`  return "Helping students learn";`}
          <br />
          {`}`}
        </div>
        <div className="absolute bottom-40 left-40 text-xs opacity-20 font-mono transform -rotate-3">
          {`class STEM_CSC {`}
          <br />
          {`  mascot = "Codey";`}
          <br />
          {`  founded = 2015;`}
          <br />
          {`}`}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900 mr-3">
                <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Latest Updates</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
            >
              News from Codey
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl"
            >
              Stay updated with the latest happenings, events, and announcements from your favorite coding mascot.
            </motion.p>
          </div>
          
          {isHome && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 md:w-56 md:h-56">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <img 
                      src="/imgs/codey-news.png" 
                      alt="Codey" 
                      className="w-full h-full object-contain z-10 relative"
                    />
                    <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                  </div>
                </div>
                
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 5
                  }}
                  className="absolute -top-3 -right-3 transform rotate-12"
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
                
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-2 -left-2 bg-blue-100 dark:bg-blue-900 rounded-full p-2"
                >
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {isHome ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 dark:border-slate-600"
              >
                <div className={`h-2 ${news.tagColor}`}></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {news.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${news.tagColor}`}>
                      {news.tag}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium group-hover:underline">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-5 inset-y-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-4 top-1 transform -translate-x-1/2 w-7 h-7 rounded-full border-4 border-white dark:border-slate-800 bg-blue-600 z-10"></div>
                <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-600">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${news.tagColor}`}>
                      {news.tag}
                    </span>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {news.summary}
                  </p>
                  <div className="flex justify-end">
                    <button className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      Read full story
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg">
                <Bot className="w-5 h-5 mr-2" />
                View all Codey updates
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CodeyNews;
