import React from 'react'
import { portfolioData } from '../data/portfolioData'

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Work Experience</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My professional journey in software development and key contributions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="relative pl-16 pb-12">
                  <div className="absolute left-6 top-6 w-6 h-6 bg-primary rounded-full border-4 border-dark"></div>
                  <div className="glass rounded-xl p-6 glass-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{exp.position}</h3>
                        <p className="text-lg text-secondary">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300">{exp.duration}</p>
                        <p className="text-slate-400">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <i className="fas fa-check-circle text-primary mt-1 mr-2 flex-shrink-0"></i>
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection