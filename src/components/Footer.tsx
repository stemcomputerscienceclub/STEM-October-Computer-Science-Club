import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Code2, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/stemcomputerscienceclub', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/stem-computer-science-club/?viewAsMember=true', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100094026166056', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/stem_computer_science_club/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:csse@stemegypt.edu.eg', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Workshops', path: '/workshops' },
  ];

  const resources: Array<{ name: string; href?: string; path?: string }> = [
    { name: 'Leaderboard', href: 'https://leaderboard-seven-pi.vercel.app/' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <footer className="bg-secondary-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/imgs/official-logo.png"
                alt="STEM CS Club"
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">STEM CS Club</h3>
                <p className="text-sm text-secondary-400">Programming Community</p>
              </div>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Empowering students with cutting-edge programming skills and fostering innovation 
              in computer science through hands-on learning and collaborative projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-secondary-800 hover:bg-primary-600 rounded-lg transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  {resource.href ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {resource.name}
                    </a>
                  ) : resource.path ? (
                    <Link
                      to={resource.path}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {resource.name}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-secondary-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>STEM High School for Boys - 6th of October</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-secondary-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href="mailto:csse@stemegypt.edu.eg"
                  className="hover:text-primary-400 transition-colors"
                >
                  csse@stemegypt.edu.eg
                </a>
              </div>
              {/* <div className="flex items-center space-x-3 text-sm text-secondary-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+20 XXX XXX XXXX</span>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-secondary-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-secondary-400">
              <Code2 className="w-4 h-4" />
              <span>
                © {currentYear} STEM CS Club. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-secondary-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;