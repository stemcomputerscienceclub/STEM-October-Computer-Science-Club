import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Code, Terminal, Database, Server, Monitor, Lightbulb, Brain, Cloud, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

interface ResourceLink {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'book' | 'tool';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface TrackLevel {
  title: string;
  description: string;
  skills: string[];
  projects: string[];
  resources: ResourceLink[];
  estimatedHours: number;
}

interface LearningTrack {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  levels: {
    beginner: TrackLevel;
    intermediate: TrackLevel;
    advanced: TrackLevel;
  };
}

const LearningPaths: React.FC = () => {
  const tracks: LearningTrack[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Learn to build modern, responsive websites and web applications',
      icon: Monitor,
      color: 'bg-blue-600',
      levels: {
        beginner: {
          title: 'Web Fundamentals',
          description: 'Build a strong foundation in HTML, CSS, and basic JavaScript',
          skills: ['HTML5 semantic markup', 'CSS layouts and styling', 'JavaScript basics', 'Responsive design', 'Basic DOM manipulation'],
          projects: ['Personal portfolio site', 'Interactive landing page', 'Simple calculator'],
          resources: [
            { title: 'MDN Web Docs: HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML', type: 'article', difficulty: 'beginner' },
            { title: 'CSS Crash Course', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', type: 'video', difficulty: 'beginner' },
            { title: 'JavaScript for Beginners', url: 'https://www.codecademy.com/learn/introduction-to-javascript', type: 'course', difficulty: 'beginner' },
          ],
          estimatedHours: 40
        },
        intermediate: {
          title: 'Modern Frontend Development',
          description: 'Master React and modern JavaScript to build interactive applications',
          skills: ['React components & hooks', 'State management', 'API integration', 'CSS frameworks (Tailwind CSS)', 'Build tools (webpack, Vite)'],
          projects: ['Todo application with React', 'Weather dashboard with API', 'E-commerce product page'],
          resources: [
            { title: 'React Official Documentation', url: 'https://reactjs.org/docs/getting-started.html', type: 'article', difficulty: 'intermediate' },
            { title: 'Modern JavaScript Course', url: 'https://www.udemy.com/course/modern-javascript/', type: 'course', difficulty: 'intermediate' },
            { title: 'Tailwind CSS From Scratch', url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ', type: 'video', difficulty: 'intermediate' },
          ],
          estimatedHours: 60
        },
        advanced: {
          title: 'Full Stack Mastery',
          description: 'Complete the stack with backend development and deployment',
          skills: ['Node.js & Express', 'Database design', 'Authentication', 'Server deployment', 'Performance optimization', 'Testing'],
          projects: ['Full stack social media app', 'Real-time chat application', 'E-commerce platform with payment processing'],
          resources: [
            { title: 'Node.js API Masterclass', url: 'https://www.udemy.com/course/nodejs-api-masterclass/', type: 'course', difficulty: 'advanced' },
            { title: 'MongoDB University', url: 'https://university.mongodb.com/', type: 'course', difficulty: 'advanced' },
            { title: 'Testing JavaScript Applications', url: 'https://testingjavascript.com/', type: 'course', difficulty: 'advanced' },
          ],
          estimatedHours: 100
        }
      }
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications',
      icon: Code,
      color: 'bg-green-600',
      levels: {
        beginner: {
          title: 'Mobile Development Basics',
          description: 'Learn fundamentals of mobile development and cross-platform options',
          skills: ['JavaScript/TypeScript fundamentals', 'React basics', 'UI/UX for mobile', 'App lifecycle', 'Basic state management'],
          projects: ['To-do list app', 'Weather app', 'Simple note-taking app'],
          resources: [
            { title: 'React Native Documentation', url: 'https://reactnative.dev/docs/getting-started', type: 'article', difficulty: 'beginner' },
            { title: 'React Native Crash Course', url: 'https://www.youtube.com/watch?v=Hf4MJH0jDb4', type: 'video', difficulty: 'beginner' },
            { title: 'Mobile UI Design Fundamentals', url: 'https://www.udemy.com/course/ui-design-for-beginners/', type: 'course', difficulty: 'beginner' },
          ],
          estimatedHours: 40
        },
        intermediate: {
          title: 'Interactive Mobile Apps',
          description: 'Build feature-rich apps with navigation, data persistence, and API integration',
          skills: ['Navigation systems', 'API integration', 'Local storage', 'Camera & location', 'Notifications', 'Styling libraries'],
          projects: ['Social media clone', 'Food delivery app UI', 'Fitness tracking app'],
          resources: [
            { title: 'React Navigation', url: 'https://reactnavigation.org/docs/getting-started', type: 'article', difficulty: 'intermediate' },
            { title: 'State Management in React Native', url: 'https://www.youtube.com/watch?v=6EDTpkNUV7c', type: 'video', difficulty: 'intermediate' },
            { title: 'Building React Native Apps', url: 'https://www.udemy.com/course/react-native-the-practical-guide/', type: 'course', difficulty: 'intermediate' },
          ],
          estimatedHours: 60
        },
        advanced: {
          title: 'Production-Ready Mobile Apps',
          description: 'Create professional apps with advanced features and prepare for app store submission',
          skills: ['Performance optimization', 'Testing on multiple devices', 'App store publishing', 'CI/CD for mobile', 'Analytics integration', 'Payment processing'],
          projects: ['Full-featured e-commerce app', 'Real-time messaging app', 'App with offline support and sync'],
          resources: [
            { title: 'Advanced React Native Patterns', url: 'https://reactnativeacademy.io/', type: 'course', difficulty: 'advanced' },
            { title: 'Mobile App Testing Strategies', url: 'https://www.youtube.com/watch?v=8ZUQ8UPdZSw', type: 'video', difficulty: 'advanced' },
            { title: 'Publish to App Stores Guide', url: 'https://www.joshmorony.com/the-step-by-step-guide-to-publishing-an-ionic-app/', type: 'article', difficulty: 'advanced' },
          ],
          estimatedHours: 80
        }
      }
    },
    {
      id: 'data-science',
      title: 'Data Science & Machine Learning',
      description: 'Analyze data, build models, and create AI-powered applications',
      icon: Brain,
      color: 'bg-purple-600',
      levels: {
        beginner: {
          title: 'Data Analysis Fundamentals',
          description: 'Learn Python and basic data analysis techniques',
          skills: ['Python programming', 'Data manipulation with pandas', 'Data visualization', 'Statistical concepts', 'Jupyter notebooks'],
          projects: ['Data cleaning and analysis project', 'Interactive dashboard', 'Exploratory data analysis report'],
          resources: [
            { title: 'Python for Everybody', url: 'https://www.py4e.com/', type: 'course', difficulty: 'beginner' },
            { title: 'Pandas Tutorial', url: 'https://pandas.pydata.org/docs/getting_started/index.html', type: 'article', difficulty: 'beginner' },
            { title: 'Data Visualization with Python', url: 'https://www.youtube.com/watch?v=a9UrKTVEeZA', type: 'video', difficulty: 'beginner' },
          ],
          estimatedHours: 50
        },
        intermediate: {
          title: 'Machine Learning Essentials',
          description: 'Build and evaluate machine learning models',
          skills: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Feature engineering', 'scikit-learn', 'Machine learning workflow'],
          projects: ['Predictive model for housing prices', 'Customer segmentation', 'Sentiment analysis'],
          resources: [
            { title: 'Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'course', difficulty: 'intermediate' },
            { title: 'Hands-On Machine Learning', url: 'https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646', type: 'book', difficulty: 'intermediate' },
            { title: 'Feature Engineering Techniques', url: 'https://www.kaggle.com/learn/feature-engineering', type: 'course', difficulty: 'intermediate' },
          ],
          estimatedHours: 80
        },
        advanced: {
          title: 'Deep Learning & AI Applications',
          description: 'Build neural networks and deploy AI-powered applications',
          skills: ['Deep learning', 'Neural networks', 'Computer vision', 'Natural language processing', 'Model deployment', 'TensorFlow & PyTorch'],
          projects: ['Image classification system', 'Natural language processing application', 'Recommendation system'],
          resources: [
            { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', type: 'course', difficulty: 'advanced' },
            { title: 'Practical Deep Learning for Coders', url: 'https://course.fast.ai/', type: 'course', difficulty: 'advanced' },
            { title: 'MLOps: Model Management', url: 'https://neptune.ai/blog/mlops-model-management', type: 'article', difficulty: 'advanced' },
          ],
          estimatedHours: 120
        }
      }
    },
    {
      id: 'game-dev',
      title: 'Game Development',
      description: 'Design and develop games for web, mobile, and desktop platforms',
      icon: Terminal,
      color: 'bg-red-600',
      levels: {
        beginner: {
          title: 'Game Development Fundamentals',
          description: 'Learn the basics of game design and development',
          skills: ['Game design principles', 'JavaScript for games', 'HTML5 Canvas', 'Basic animation', 'Game physics'],
          projects: ['Simple arcade game', 'Interactive story game', '2D platformer'],
          resources: [
            { title: 'JavaScript Game Development Course', url: 'https://www.udemy.com/course/javascript-game-development-course-for-beginners/', type: 'course', difficulty: 'beginner' },
            { title: 'Game Development with HTML5 Canvas', url: 'https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript', type: 'article', difficulty: 'beginner' },
            { title: 'Game Design Fundamentals', url: 'https://www.youtube.com/watch?v=G8AT01tuyrk', type: 'video', difficulty: 'beginner' },
          ],
          estimatedHours: 50
        },
        intermediate: {
          title: '2D Game Development',
          description: 'Build more complex games with game engines',
          skills: ['Game engines (Phaser, Unity)', 'Sprite animation', 'Game state management', 'Sound integration', 'Collision detection', 'Level design'],
          projects: ['Side-scrolling adventure game', 'Tower defense game', 'Puzzle game with levels'],
          resources: [
            { title: 'Phaser 3 Tutorial', url: 'https://phaser.io/tutorials/making-your-first-phaser-3-game', type: 'article', difficulty: 'intermediate' },
            { title: 'Unity 2D Game Development', url: 'https://www.udemy.com/course/unitycourse/', type: 'course', difficulty: 'intermediate' },
            { title: 'Game Development Patterns', url: 'https://gameprogrammingpatterns.com/', type: 'book', difficulty: 'intermediate' },
          ],
          estimatedHours: 80
        },
        advanced: {
          title: '3D Game Development',
          description: 'Create immersive 3D games with advanced mechanics',
          skills: ['3D modeling basics', '3D game engines (Unity, Unreal)', 'Lighting and rendering', 'Character animation', 'Game AI', 'Optimization techniques'],
          projects: ['First-person exploration game', 'Third-person adventure game', 'Multiplayer game prototype'],
          resources: [
            { title: 'Complete C# Unity Game Developer 3D', url: 'https://www.udemy.com/course/unitycourse2/', type: 'course', difficulty: 'advanced' },
            { title: 'Advanced Unity Game Development', url: 'https://www.youtube.com/playlist?list=PLW-9djkTD1VT7ua7X_sMGCUUlPh0URG0i', type: 'video', difficulty: 'advanced' },
            { title: 'Game Engine Architecture', url: 'https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459', type: 'book', difficulty: 'advanced' },
          ],
          estimatedHours: 150
        }
      }
    },
  ];

  // Animation variants for smooth transitions
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
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <SEO
        title="Learning Paths | STEM Computer Science Club"
        description="Structured learning roadmaps for different programming disciplines. Explore beginner to advanced tracks in web development, mobile apps, data science, and more."
        keywords="learning paths, programming roadmap, coding curriculum, web development, mobile apps, data science, game development, STEM"
        url="https://stemcsclub.org/learning-paths"
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Learning Paths
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Structured roadmaps to guide your journey from beginner to expert in various programming disciplines
          </motion.p>
        </div>
      </section>

      {/* Tracks Overview */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-slate-200 dark:border-slate-700"
                >
                  <div className={`w-14 h-14 ${track.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{track.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{track.description}</p>
                  <a href={`#${track.id}`} className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    Explore Path <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Track Sections */}
      {tracks.map((track) => (
        <section id={track.id} key={track.id} className="py-20 px-6">
          <div className="container mx-auto">
            <div className="flex items-center mb-10">
              <div className={`w-14 h-14 ${track.color} rounded-xl flex items-center justify-center mr-4`}>
                {React.createElement(track.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{track.title}</h2>
            </div>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl">{track.description}</p>
            
            <div className="space-y-20">
              {/* Beginner Level */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Beginner: {track.levels.beginner.title}</h3>
                  <span className="ml-auto bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 py-1 px-3 rounded-full text-sm">
                    ~{track.levels.beginner.estimatedHours} hours
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{track.levels.beginner.description}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Skills You'll Learn</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.beginner.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Projects</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.beginner.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Recommended Resources</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {track.levels.beginner.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start p-4 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <div className="mr-3 mt-1">
                          {resource.type === 'video' && <Monitor className="w-5 h-5 text-red-500" />}
                          {resource.type === 'article' && <Book className="w-5 h-5 text-blue-500" />}
                          {resource.type === 'course' && <Lightbulb className="w-5 h-5 text-yellow-500" />}
                          {resource.type === 'book' && <Book className="w-5 h-5 text-green-500" />}
                          {resource.type === 'tool' && <Terminal className="w-5 h-5 text-purple-500" />}
                        </div>
                        <div>
                          <span className="block font-medium text-slate-800 dark:text-white">{resource.title}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">{resource.type}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Intermediate Level */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Intermediate: {track.levels.intermediate.title}</h3>
                  <span className="ml-auto bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 py-1 px-3 rounded-full text-sm">
                    ~{track.levels.intermediate.estimatedHours} hours
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{track.levels.intermediate.description}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Skills You'll Learn</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.intermediate.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Projects</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.intermediate.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Recommended Resources</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {track.levels.intermediate.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start p-4 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <div className="mr-3 mt-1">
                          {resource.type === 'video' && <Monitor className="w-5 h-5 text-red-500" />}
                          {resource.type === 'article' && <Book className="w-5 h-5 text-blue-500" />}
                          {resource.type === 'course' && <Lightbulb className="w-5 h-5 text-yellow-500" />}
                          {resource.type === 'book' && <Book className="w-5 h-5 text-green-500" />}
                          {resource.type === 'tool' && <Terminal className="w-5 h-5 text-purple-500" />}
                        </div>
                        <div>
                          <span className="block font-medium text-slate-800 dark:text-white">{resource.title}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">{resource.type}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Advanced Level */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Advanced: {track.levels.advanced.title}</h3>
                  <span className="ml-auto bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 py-1 px-3 rounded-full text-sm">
                    ~{track.levels.advanced.estimatedHours} hours
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{track.levels.advanced.description}</p>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Skills You'll Learn</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.advanced.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Projects</h4>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                      {track.levels.advanced.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-xl mb-4 text-slate-800 dark:text-white">Recommended Resources</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {track.levels.advanced.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start p-4 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <div className="mr-3 mt-1">
                          {resource.type === 'video' && <Monitor className="w-5 h-5 text-red-500" />}
                          {resource.type === 'article' && <Book className="w-5 h-5 text-blue-500" />}
                          {resource.type === 'course' && <Lightbulb className="w-5 h-5 text-yellow-500" />}
                          {resource.type === 'book' && <Book className="w-5 h-5 text-green-500" />}
                          {resource.type === 'tool' && <Terminal className="w-5 h-5 text-purple-500" />}
                        </div>
                        <div>
                          <span className="block font-medium text-slate-800 dark:text-white">{resource.title}</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">{resource.type}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Get Started CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-900">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
          >
            Join our community of passionate learners and start building your skills today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/join" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Join Our Club
            </Link>
            <a 
              href="https://github.com/stemcomputerscienceclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-6 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg transition-all"
            >
              View Our Projects
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;
