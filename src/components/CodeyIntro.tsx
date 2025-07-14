import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Code, Sparkles, MessageCircle, Terminal, Laptop, Smile, Brain } from 'lucide-react';

const CodeyIntro: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden relative">

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
                    {/* Mascot image column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex justify-center"
                    >
                        <div className="relative">
                            {/* Main image with glow effect */}
                            <div className="relative w-56 h-56 md:w-72 md:h-72">
                                <img
                                    src="/imgs/official-logo.png"
                                    alt="Codey - STEM CS Club Mascot"
                                    className="w-full h-full object-contain z-20 relative drop-shadow-xl"
                                />
                                <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                            </div>

                            {/* Floating elements around mascot */}
                            <motion.div
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [-5, 5, -5]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-8 -right-6 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg"
                            >
                                <Code className="w-5 h-5 text-blue-500" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [5, -5, 5],
                                    rotate: [5, -5, 5]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute top-10 -left-8 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full shadow-lg"
                            >
                                <Brain className="w-5 h-5 text-purple-500" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [-7, 7, -7],
                                    rotate: [3, -3, 3]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4.5,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-4 left-10 bg-green-100 dark:bg-green-900/50 p-3 rounded-full shadow-lg"
                            >
                                <Terminal className="w-5 h-5 text-green-500" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [8, -8, 8],
                                    rotate: [-7, 7, -7]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5.5,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                                className="absolute bottom-10 -right-10 bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-full shadow-lg"
                            >
                                <Laptop className="w-5 h-5 text-yellow-500" />
                            </motion.div>

                            {/* Chat bubble */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -top-12 right-5 bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-xl max-w-[160px] after:content-[''] after:absolute after:bottom-0 after:right-5 after:w-4 after:h-4 after:bg-white dark:after:bg-slate-700 after:transform after:rotate-45 after:translate-y-2"
                            >
                                <p className="text-sm text-slate-700 dark:text-slate-200 font-medium">Hi! I'm Codey, your coding companion!</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
                            <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                            <span className="text-blue-700 dark:text-blue-300 font-medium">Meet Our Mascot</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                            Meet Codey, Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Coding Companion</span> and Club Mascot
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            Codey is the friendly face of STEM Computer Science Club. Designed to look like the letter "C" for coding, Codey has been helping students learn programming concepts, solve coding challenges, and navigate their computer science journey since 2015.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-md border border-slate-100 dark:border-slate-600">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 mr-3">
                                        <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Always Ready to Help</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Codey powers our chatbot assistant that's available 24/7 to answer questions about coding, club activities, and resources.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-md border border-slate-100 dark:border-slate-600">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 mr-3">
                                        <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Coding Challenges</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Codey creates fun weekly coding challenges that help members practice their skills and learn new programming concepts.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-md border border-slate-100 dark:border-slate-600">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/50 mr-3">
                                        <Terminal className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Project Guidance</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Need help with a project? Codey guides members through project planning, coding best practices, and debugging.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-700 p-5 rounded-xl shadow-md border border-slate-100 dark:border-slate-600">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 mr-3">
                                        <Smile className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Community Mascot</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">
                                    As the face of our club, Codey appears at all events, workshops, and hackathons, fostering a sense of community and belonging.
                                </p>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-slate-600 dark:text-slate-300 mb-6">
                            "Programming isn't about what you know; it's about what you can figure out. I'm here to help you figure it out together!"
                            <footer className="text-slate-500 dark:text-slate-400 text-sm mt-1">— Codey</footer>
                        </blockquote>
                        
                        <div className="flex items-center">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex"
                            >
                                <Link 
                                    to="/stickers" 
                                    className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full text-white font-medium text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Collect Codey Stickers
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CodeyIntro;
