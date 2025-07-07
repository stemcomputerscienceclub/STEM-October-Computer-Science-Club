import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Mail, MapPin, Linkedin, Facebook, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Tracks', href: '/tracks' },
    ],
    'Resources': [
      { name: 'Articles', href: '/articles' },
      { name: 'Projects', href: '/projects' },
      { name: 'Team', href: '/team' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/stem-computer-science-club/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100094026166056', label: 'Facebook' },
    { icon: Github, href: 'https://github.com/stemcsclub', label: 'GitHub' },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/imgs/official-logo.png" 
                  alt="STEM CS Club Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">STEM CS Club</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your life's algorithm through the STEM Computer Science club. 
              Join our dynamic community and elevate your skills through cutting-edge tracks.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
              Apply Now
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:csse@stemegypt.edu.eg" className="hover:text-blue-400 transition-colors">
                  csse@stemegypt.edu.eg
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Cosmic Village, 6th October, Egypt</span>
              </div>
            </div>
            
            <div className="flex justify-start md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>© {currentYear} STEM Computer Science Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer