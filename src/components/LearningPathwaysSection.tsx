import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Smartphone, Cpu, Code, Zap, Database, Clock, Users, ChevronRight, BookOpen } from 'lucide-react';

const LearningPathwaysSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Learning Pathways</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Learning Tracks
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our specialized learning paths designed to help you master specific skills and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Track 1: Machine Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-green-500 to-teal-600`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white mr-4`}>
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Machine Learning Track</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Master ML algorithms, neural networks, and AI applications through hands-on sessions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">PyTorch</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>20 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>150+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track 2: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-blue-500 to-purple-600`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mr-4`}>
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Development Track</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Build modern web applications with React, Node.js, and cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">MongoDB</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>20 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>200+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track 3: Generative AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-purple-500 to-pink-600`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mr-4`}>
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Generative AI Track</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Explore generative AI, large language models, and creative AI applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">OpenAI API</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">LangChain</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Python</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>10 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>80+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track 4: Mobile Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-green-500 to-blue-600`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white mr-4`}>
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mobile App Development</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Create native mobile applications using modern frameworks and development practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Kotlin</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Flutter</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Firebase</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>16 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>120+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track 5: Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-indigo-500 to-purple-600`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-4`}>
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quantum Computing</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Dive into quantum computing fundamentals, algorithms, and quantum programming.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Qiskit</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Cirq</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Python</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>8 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>50+ students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Track 6: Data Science */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group"
          >
            <div className={`h-3 bg-gradient-to-r from-blue-500 to-teal-500`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white mr-4`}>
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Science</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Learn data analysis, visualization, and advanced statistical techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Pandas</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">NumPy</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded text-xs">Matplotlib</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>14 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>100+ students</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathwaysSection;
