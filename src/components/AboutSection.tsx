import React from 'react'
import { portfolioData } from '../data/portfolioData'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Hey there! I'm Deepti Sharma — a frontend developer who loves turning ideas into sleek, responsive, and fast web apps.
With 2 years of experience working on real-world projects, I've built everything from productivity dashboards to SAAS platforms to real-time messaging apps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-24 items-center ">
          <div className="animate-fade-in">
            <img 
              src="public/assets/deepti.jpg" 
              alt="Professional developer workspace" 
             className="rounded-xl shadow-2xl w-80 h-auto mx-auto md:ml-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 glass-hover">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                <i className="fas fa-user-graduate mr-2"></i>Background
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {portfolioData.education.degree} from {portfolioData.education.institution} with a CGPA of {portfolioData.education.cgpa}. Currently working as a Software Development Engineer at Innobit Systems.
              </p>
            </div>
            
                        
            <div className="glass rounded-xl p-6 glass-hover">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                <i className="fas fa-target mr-2"></i>Goals
              </h3>
              <p className="text-slate-300 leading-relaxed">
               Keep leveling up as a full-stack dev, build cool and meaningful stuff. I'm also diving into AI — because let’s be real, it's the future and it builds things crazy fast. Planning to Learn LLMs, GenAI, and to blend it all into smarter web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection