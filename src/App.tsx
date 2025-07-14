import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import MouseFollower from './components/MouseFollower';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Workshops from './pages/Workshops';
import Leaderboard from './pages/Leaderboard';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Projects from './pages/Projects';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projectsData';
import Donation from './pages/Donation';
import Stickers from './pages/Stickers';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/stickers" element={<Stickers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ChatBot />
            <MouseFollower />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;