import React, { useEffect, Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Globe, BookOpen, Trophy, UserPlus, Terminal, Cpu, Database, GitBranch, Braces, FileCode, Zap, Target, Lightbulb, School, Rocket, Users2, Award, Lightbulb as Innovation, BookOpenCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { useScrollCounter } from '../hooks/useScrollCounter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load the 3D background for better performance and to avoid build issues
const CS3DBackground = lazy(() => import('../components/CS3DBackground'));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  // GSAP Horizontal Scroll Animation
  // GSAP Horizontal Scroll Animation
  useEffect(() => {
    const techTrack = document.getElementById('tech-track');
    const techSection = document.getElementById('tech-section');

    if (techTrack && techSection) {
      // Calculate the full scroll distance
      const trackWidth = techTrack.scrollWidth;
      const containerWidth = techSection.offsetWidth;
      const fullScrollDistance = trackWidth - containerWidth;

      // Create the horizontal scroll animation with slower movement
      const tween = gsap.to(techTrack, {
        x: -fullScrollDistance,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: techSection,
        start: "center center",
        end: "+=700%", // Significantly increased to make scrolling much slower
        scrub: 1.5, // Increased smoothing for better feel
        pin: true,
        animation: tween,
        invalidateOnRefresh: true
      });
    }

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Programming Tracks',
      description: 'Master web development, mobile apps, AI/ML, and more with structured learning paths.',
      bgColor: 'bg-blue-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a vibrant community of passionate programmers and tech enthusiasts.',
      bgColor: 'bg-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Workshops & Events',
      description: 'Participate in hands-on workshops, hackathons, and coding competitions.',
      bgColor: 'bg-blue-600'
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Track your progress and compete with peers on our interactive leaderboard.',
      bgColor: 'bg-blue-600'
    }
  ];

  const stats = [
    { number: 10, suffix: '+', label: 'Years of Community Growth', icon: Globe, bgColor: 'bg-blue-600' },
    { number: 50, suffix: '+', label: 'Technologies Mastered', icon: Code, bgColor: 'bg-slate-700' },
    { number: 100, suffix: '+', label: 'Projects Built', icon: Terminal, bgColor: 'bg-blue-800' },
    { number: 500, suffix: '+', label: 'Mentorship Sessions Held', icon: UserPlus, bgColor: 'bg-slate-600' }
  ];

  // Stats component with scroll counter
  const StatCard: React.FC<{ stat: typeof stats[0], index: number }> = ({ stat, index }) => {
    const { count, elementRef } = useScrollCounter({
      end: stat.number,
      duration: 3000 + index * 200,
      threshold: 0.1
    });
    const Icon = stat.icon;

    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="text-center group overflow-protect"
      >
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${stat.bgColor} p-4 group-hover:scale-110 transition-transform duration-300 border border-blue-400/40 stats-icon-micro`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 stats-micro">
          {count}{stat.suffix}
        </div>
        <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 stats-micro overflow-protect">
          {stat.label}
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
    <div className="min-h-screen">
      {/* SEO Component */}
      <SEO
        title="STEM Computer Science Club - Empowering Future Programmers & Innovators"
        description="Join our vibrant community of passionate developers. Master programming tracks, participate in workshops, and unlock your potential in computer science and technology innovation."
        keywords="STEM computer science club, programming community, web development, AI machine learning, coding bootcamp, tech workshops, software engineering, hackathon, programming tracks, computer science education"
        image="/imgs/official-logo.png"
        url="https://stemcsclub.org/"
      />        {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        {/* 3D Background with Suspense for lazy loading */}
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/50 to-indigo-900/50" />}>
          <CS3DBackground />
        </Suspense>

        {/* Content overlay with enhanced glassmorphism */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />

        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-indigo-900/30 dark:from-blue-900/50 dark:via-transparent dark:to-indigo-900/50" />

        {/* Enhanced Glassmorphism Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=""
          >
            {/* Code-Inspired Title */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Professional Terminal Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="inline-flex items-center px-8 py-4 bg-white/98 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-300/60 dark:border-slate-600/50 rounded-2xl mb-4 shadow-2xl shadow-slate-500/15 dark:shadow-blue-400/20 terminal-responsive"
              >
                <div className="flex terminal-spacing">
                  <div className="terminal-dots bg-red-500 rounded-full shadow-sm"></div>
                  <div className="terminal-dots bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="terminal-dots bg-green-500 rounded-full shadow-sm"></div>
                </div>
                <div className="flex items-center space-x-3 overflow-hidden min-w-0 flex-1">
                  <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-mono text-base font-medium terminal-text truncate">
                    ~/stem-cs-club
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-mono text-base font-semibold terminal-text">
                    $
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-blue-600 dark:text-blue-400 font-mono text-base terminal-text terminal-hide-long truncate"
                  >
                    echo "Welcome to STEM CS Club"
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-blue-600 dark:text-blue-400 font-mono terminal-text terminal-show-short truncate hidden"
                  >
                    echo "Welcome"
                  </motion.span>
                </div>
              </motion.div>

              {/* Professional Main Heading */}
              <div className="space-y-8">
                <motion.h1
                  className="hero-title-responsive text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none overflow-protect"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                    className="block text-blue-700 dark:text-blue-400 mb-2"
                  >
                    STEM
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                    className="block text-slate-800 dark:text-white mb-2 relative"
                  >
                    Computer Science Club

                    {/* Subtle underline accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                      className="h-1 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 mt-4 mx-auto"
                    />
                  </motion.span>
                </motion.h1>

                {/* Enhanced Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <p className="hero-subtitle-responsive text-xl md:text-2xl lg:text-3xl text-slate-800 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium overflow-protect">
                    Empowering the next generation of
                    <span className="text-blue-700 dark:text-blue-400 font-semibold"> programmers </span>
                    and
                    <span className="text-indigo-700 dark:text-indigo-400 font-semibold"> innovators</span>
                  </p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="hero-subtitle-responsive text-lg md:text-xl text-slate-700 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed overflow-protect"
                  >
                    Join our community of passionate developers and unlock your potential in computer science, programming, and technology innovation.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/tracks"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 border border-blue-600/30 backdrop-blur-sm overflow-hidden btn-responsive"
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Code className="mr-3 h-6 w-6 relative z-10 btn-icon-responsive" />
                  <span className="text-lg relative z-10">Explore Tracks</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10 btn-icon-responsive" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/about"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white/95 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-400 dark:border-slate-600 text-slate-800 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden btn-responsive"
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <BookOpen className="mr-3 h-6 w-6 relative z-10 btn-icon-responsive" />
                  <span className="text-lg relative z-10">Learn More</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10 btn-icon-responsive" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8 grid-responsive"
            >
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-secondary-400 dark:border-secondary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 dark:bg-secondary-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Our Foundation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="h-full w-full foundation-pattern" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Our Foundation
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed"
            >
              Where Excellence Meets Innovation in Computer Science Education
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* School Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="/imgs/media5.JPG"
                  alt="STEM 6 October High School for Boys - Campus"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 left-6 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Excellence in Education</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              {/* School Title */}
              <div className="space-y-4">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  STEM High School for Boys -

                  <span className="block text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mt-2">
                    6th of October
                  </span>
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 border border-blue-500/20 dark:border-blue-400/20 rounded-xl"
                >
                  <School className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Established Excellence</span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science Club</span> represents the pinnacle of technological education and innovation at STEM High School for Boys -
                  6th of October. We are a dynamic community of passionate students dedicated to advancing our expertise in programming, software development, and cutting-edge technology.
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Through collaborative projects, competitive programming, and hands-on workshops, our club serves as a catalyst for <span className="font-semibold text-indigo-600 dark:text-indigo-400">student innovation</span>, fostering an environment where creativity meets technical excellence and preparing the next generation of technology leaders.
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Rocket, label: 'Innovation Hub', color: 'text-blue-600 dark:text-blue-400' },
                  { icon: Users2, label: 'Collaboration', color: 'text-indigo-600 dark:text-indigo-400' },
                  { icon: Award, label: 'Excellence', color: 'text-purple-600 dark:text-purple-400' },
                  { icon: Innovation, label: 'Growth', color: 'text-green-600 dark:text-green-400' }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-600/30 hover:shadow-lg transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <span className={`font-semibold ${feature.color}`}>{feature.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="pt-6"
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    <span className="relative z-10 flex items-center">
                      <BookOpenCheck className="w-5 h-5 mr-2" />
                      Discover Our Journey
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-3"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                </Link>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 text-center">
                  Learn more about our club's mission, activities, and impact
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mastered Technologies Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden" id="tech-section">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full mb-8"
            >
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-300 mr-3" />
              <span className="text-blue-600 dark:text-blue-300 font-medium">Technologies We Master</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Our Tech Arsenal
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From cutting-edge frameworks to powerful databases, we've mastered the tools that shape the future of technology
            </p>
          </motion.div>

          {/* Horizontal Scrolling Tech Container */}
          <div className="tech-scroll-container relative h-96 overflow-hidden">
            <div className="tech-track flex items-center space-x-8 h-full" id="tech-track">
              {/* First set of technologies */}              {/* Frontend Technologies */}
              <div className="tech-item flex-shrink-0 w-64 h-80 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                <p className="text-center text-sm">Core Language</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">TypeScript</h3>
                <p className="text-center text-sm">Type Safety</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Git</h3>
                <p className="text-slate-400 text-center text-sm">Version Control</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-black/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12 filter invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Express.js</h3>
                <p className="text-slate-400 text-center text-sm">Node.js Framework</p>
              </div>

              {/* Database Technologies */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SQL</h3>
                <p className="text-slate-400 text-center text-sm">Database Language</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SB</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Supabase</h3>
                <p className="text-slate-400 text-center text-sm">Backend as a Service</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Firebase</h3>
                <p className="text-slate-400 text-center text-sm">Google Cloud</p>
              </div>

              {/* Backend Frameworks */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" alt="Laravel" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Laravel</h3>
                <p className="text-slate-400 text-center text-sm">PHP Framework</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-12 h-12 filter invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flask</h3>
                <p className="text-slate-400 text-center text-sm">Python Framework</p>
              </div>

              {/* Mobile Development */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Kotlin</h3>
                <p className="text-slate-400 text-center text-sm">Android Development</p>
              </div>

              {/* Machine Learning Libraries */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">NP</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">NumPy</h3>
                <p className="text-slate-400 text-center text-sm">Scientific Computing</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SP</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SciPy</h3>
                <p className="text-slate-400 text-center text-sm">Scientific Library</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">MPL</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Matplotlib</h3>
                <p className="text-slate-400 text-center text-sm">Data Visualization</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SB</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Seaborn</h3>
                <p className="text-slate-400 text-center text-sm">Statistical Plots</p>
              </div>

              {/* Deployment Platforms */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-black/20 to-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">▲</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vercel</h3>
                <p className="text-slate-400 text-center text-sm">Deployment Platform</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">R</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Render</h3>
                <p className="text-slate-400 text-center text-sm">Cloud Hosting</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RP</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Replit</h3>
                <p className="text-slate-400 text-center text-sm">Online IDE</p>
              </div>

              {/* Frontend Libraries */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SV</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Svelte</h3>
                <p className="text-slate-400 text-center text-sm">Frontend Framework</p>
              </div>

              {/* Automation & AI Tools */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">n8n</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">n8n</h3>
                <p className="text-slate-400 text-center text-sm">Workflow Automation</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-gray-500/20 to-black/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">𝕏</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Grok</h3>
                <p className="text-slate-400 text-center text-sm">AI Assistant</p>
              </div>

              {/* Quantum Computing */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Q</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Qiskit</h3>
                <p className="text-slate-400 text-center text-sm">Quantum Computing</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">⟩</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quantum</h3>
                <p className="text-slate-400 text-center text-sm">Future Computing</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">React</h3>
                <p className="text-slate-400 text-center text-sm">Modern UI Library</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-black/20 to-slate-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 filter invert" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Next.js</h3>
                <p className="text-slate-400 text-center text-sm">React Framework</p>
              </div>

              {/* Backend Technologies */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-lime-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Node.js</h3>
                <p className="text-slate-400 text-center text-sm">JavaScript Runtime</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
                </div>                  <h3 className="text-xl font-bold text-white mb-2">Python</h3>
                <p className="text-slate-400 text-center text-sm">AI & Backend</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Java</h3>
                <p className="text-slate-400 text-center text-sm">Enterprise Language</p>
              </div>                <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">C++</h3>
                <p className="text-slate-400 text-center text-sm">Competitive Programming</p>
              </div>

              {/* Databases */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PostgreSQL</h3>
                <p className="text-slate-400 text-center text-sm">Advanced Database</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MongoDB</h3>
                <p className="text-slate-400 text-center text-sm">NoSQL Database</p>
              </div>

              {/* AI/ML Technologies */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TensorFlow</h3>
                <p className="text-slate-400 text-center text-sm">ML Framework</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PyTorch</h3>
                <p className="text-slate-400 text-center text-sm">Deep Learning</p>
              </div>

              {/* Mobile Development */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flutter</h3>
                <p className="text-slate-400 text-center text-sm">Cross-Platform</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">React Native</h3>
                <p className="text-slate-400 text-center text-sm">Mobile Framework</p>
              </div>

              {/* Web Fundamentals */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">HTML5</h3>
                <p className="text-slate-400 text-center text-sm">Web Structure</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CSS3</h3>
                <p className="text-slate-400 text-center text-sm">Web Styling</p>
              </div>

              {/* PHP Backend Stack */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PHP</h3>
                <p className="text-slate-400 text-center text-sm">Server-Side Language</p>
              </div>

              {/* Programming Fundamentals - C */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">C</h3>
                <p className="text-slate-400 text-center text-sm">System Programming</p>
              </div>

              {/* Programming Fundamentals - C# */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">C#</h3>
                <p className="text-slate-400 text-center text-sm">.NET Framework</p>
              </div>

              {/* AI Development & Generative AI */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">OpenAI</h3>
                <p className="text-slate-400 text-center text-sm">Generative AI</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">LC</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LangChain</h3>
                <p className="text-slate-400 text-center text-sm">AI Agents</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">HF</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hugging Face</h3>
                <p className="text-slate-400 text-center text-sm">ML Models</p>
              </div>

              {/* Data Science & ML Libraries */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PD</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pandas</h3>
                <p className="text-slate-400 text-center text-sm">Data Analysis</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SK</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Scikit-learn</h3>
                <p className="text-slate-400 text-center text-sm">Machine Learning</p>
              </div>
              {/* Computational Science */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">∫</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">MATLAB</h3>
                <p className="text-slate-400 text-center text-sm">Computational Science</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">∑</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Jupyter</h3>
                <p className="text-slate-400 text-center text-sm">Scientific Computing</p>
              </div>

              {/* More Quantum Computing */}
              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Q⟩</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cirq</h3>
                <p className="text-slate-400 text-center text-sm">Quantum Circuits</p>
              </div>

              <div className="tech-item flex-shrink-0 w-64 h-80 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IBM</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IBM Quantum</h3>
                <p className="text-slate-400 text-center text-sm">Quantum Cloud</p>
              </div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-4">Scroll to explore our technology stack</p>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400"
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm">Keep scrolling to continue</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 dots-pattern" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full mb-6"
            >
              <Terminal className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Platform Features</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose STEM CS Club?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover what makes our programming community the perfect place to grow your skills
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 relative overflow-hidden text-center"
                >
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} p-4 group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lightbulb className="w-12 h-12" />
              </motion.div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who are already building amazing projects and advancing their programming skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tracks"
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Get Started Today
              </Link>
              <Link
                to="/workshops"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Upcoming Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;