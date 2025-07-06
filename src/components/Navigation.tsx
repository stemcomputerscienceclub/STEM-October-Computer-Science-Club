import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tracks = [
    { name: 'Web Development', href: '#web-dev' },
    { name: 'Mobile Development', href: '#mobile-dev' },
    { name: 'Machine Learning', href: '#ml' },
    { name: 'Algorithms & DS', href: '#algorithms' },
    { name: 'Programming Fundamentals', href: '#fundamentals' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <span className="text-xl font-bold gradient-text">STEM CS Club</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            
            {/* Tracks Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('tracks')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Tracks</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'tracks' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-lg shadow-xl border border-white/10 overflow-hidden"
                  >
                    {tracks.map((track, index) => (
                      <motion.a
                        key={track.name}
                        href={track.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-white/10 transition-colors"
                      >
                        {track.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#articles" className="text-foreground hover:text-primary transition-colors">
              Articles
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="gradient" size="lg">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-effect rounded-lg mt-2 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <div className="space-y-2">
                  <span className="block text-sm font-semibold text-muted-foreground">Tracks</span>
                  {tracks.map((track) => (
                    <a
                      key={track.name}
                      href={track.href}
                      className="block pl-4 text-foreground hover:text-primary transition-colors"
                    >
                      {track.name}
                    </a>
                  ))}
                </div>
                <a href="#articles" className="block text-foreground hover:text-primary transition-colors">
                  Articles
                </a>
                <a href="#projects" className="block text-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#team" className="block text-foreground hover:text-primary transition-colors">
                  Team
                </a>
                <Button variant="gradient" className="w-full">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation