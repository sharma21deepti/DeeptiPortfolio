import React, { useState, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    "Software Development Engineer",
    "Full Stack Developer", 
    "React Specialist",
    "TypeScript Enthusiast",
    "Problem Solver"
  ]

  useEffect(() => {
    const speed = isDeleting ? 50 : 100
    const currentFullText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      } else {
        setCurrentText(
          isDeleting 
            ? currentFullText.substring(0, currentText.length - 1)
            : currentFullText.substring(0, currentText.length + 1)
        )
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  const downloadResume = () => {

   const resumeUrl = 'public/assets/Deepti_Sharma_SDE(1).pdf';
    const a = document.createElement('a')
    a.href = resumeUrl
    a.download = 'Deepti_Sharma_Resume.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(resumeUrl)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern developer workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm <span className="gradient-text">Deepti</span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 h-16">
            <span className="typing-animation">{currentText}</span>
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-300">
            {portfolioData.personal.summary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <button 
              onClick={downloadResume}
              className="glass glass-hover px-8 py-3 rounded-full font-semibold"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-primary"></i>
      </div>
    </section>
  )
}

export default HeroSection