import React, { useState } from 'react'
import { portfolioData } from '../data/portfolioData'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    alert(`Thank you for your message! I'll get back to you soon.\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  <i className="fas fa-envelope mr-2"></i>Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-primary mr-3"></i>
                    <a 
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-slate-300 hover:text-primary transition-colors"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-primary mr-3"></i>
                    <span className="text-slate-300">{portfolioData.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    <span className="text-slate-300">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={portfolioData.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass glass-hover p-3 rounded-full"
                >
                  <i className="fab fa-linkedin text-2xl text-primary"></i>
                </a>
                <a 
                  href={portfolioData.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass glass-hover p-3 rounded-full"
                >
                  <i className="fab fa-github text-2xl text-primary"></i>
                </a>
                <a 
                  href={portfolioData.contact.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass glass-hover p-3 rounded-full"
                >
                  <i className="fas fa-code text-2xl text-primary"></i>
                </a>
                <a 
                  href={`mailto:${portfolioData.contact.email}`}
                  className="glass glass-hover p-3 rounded-full"
                >
                  <i className="fas fa-envelope text-2xl text-primary"></i>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            {/* <div className="glass rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    placeholder="your@email.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    placeholder="Project Discussion" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    placeholder="Tell me about your project..." 
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full glass glass-hover px-6 py-3 rounded-lg font-semibold text-white"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection