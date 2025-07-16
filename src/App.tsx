import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="min-h-screen bg-dark text-slate-100 font-inter">
      <ScrollIndicator progress={scrollProgress} />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">
              <i className="fas fa-code mr-2"></i>Deepti Sharma
            </div>
            <p className="text-slate-300 mb-6">
              Software Development Engineer passionate about creating innovative solutions.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/deepti-sharma" 
                 className="text-slate-300 hover:text-primary transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/deepti21aug" 
                 className="text-slate-300 hover:text-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://leetcode.com/deepti21aug" 
                 className="text-slate-300 hover:text-primary transition-colors">
                <i className="fas fa-code text-xl"></i>
              </a>
              <a href="mailto:deepti21aug@gmail.com" 
                 className="text-slate-300 hover:text-primary transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <p className="text-slate-500">
              © 2024 Deepti Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App