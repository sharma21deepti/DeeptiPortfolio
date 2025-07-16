import React from 'react'
import { portfolioData } from '../data/portfolioData'

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden glass-hover project-card">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 relative z-10 pointer-events-auto">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {!project.client ? 
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                     rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-primary transition-colors"
                    style={{cursor:"pointer"}}
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-secondary transition-colors"
                    
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div> : <p>Client Project  </p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection