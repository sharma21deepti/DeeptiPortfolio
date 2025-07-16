import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMobileMenu()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            <i className="fas fa-code mr-2"></i>Deepti Sharma
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed top-0 right-0 h-full w-64 glass z-50 ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <button onClick={closeMobileMenu} className="text-2xl mb-8 float-right">
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col space-y-6 mt-12">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors text-lg text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors text-lg text-left">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors text-lg text-left">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors text-lg text-left">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors text-lg text-left">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors text-lg text-left">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation