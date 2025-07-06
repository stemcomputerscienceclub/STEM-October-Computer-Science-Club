import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Tracks from './components/Tracks'
import Articles from './components/Articles'
import Projects from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TechStack />
      <About />
      <Tracks />
      <Articles />
      <Projects />
      <Team />
      <Footer />
    </div>
  )
}

export default App