import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Globe } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern React patterns and responsive design.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveDemo: 'https://ecommerce-platform-demo.vercel.app',
      github: 'https://github.com/Mutali09/Ecommerce-Platform',
      featured: true
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A simple React todo application with a modern UI design. Features clean interface, task management, and responsive design for seamless user experience.',
      image: '✅',
      technologies: ['React 18', 'CSS3', 'JavaScript ES6+'],
      category: 'frontend',
      liveDemo: 'https://to-do-app-seven-gray.vercel.app',
      github: 'https://github.com/Mutali09/To-Do-App',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current weather conditions, forecasts, and interactive maps. Features location-based weather data and customizable widgets.',
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      category: 'frontend',
      liveDemo: 'https://weather-dashboard-demo.com',
      github: 'https://github.com/nelson/weather-app',
      featured: false
    },
    {
      id: 4,
      title: 'Gym Website',
      description: 'A modern gym website built with React JSX and Vite. Features smooth scroll effects, responsive design, and interactive components for showcasing gym services and membership options.',
      image: '💪',
      technologies: ['React JSX', 'Vite', 'CSS3', 'JavaScript ES6+'],
      category: 'frontend',
      liveDemo: 'webstack-portfolio-project-psi.vercel.app',
      github: 'https://github.com/Mutali09/Webstack---Portfolio-Project.git',
      featured: false
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, and group chat functionality. Built with modern web technologies for seamless communication.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveDemo: 'https://chat-app-demo.com',
      github: 'https://github.com/nelson/chat-app',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one represents a learning experience 
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/50 backdrop-blur-sm rounded-lg p-1 border border-white/20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-white/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`card group ${project.featured ? 'ring-2 ring-primary-200' : ''}`}>
              {/* Project Image */}
              <div className="p-8 text-center bg-gradient-to-br from-secondary-50 to-white border-b border-secondary-100">
                <div className="text-6xl mb-4">{project.image}</div>
                {project.featured && (
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2 py-1 rounded-full">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 group/link"
                  >
                    <Eye size={16} />
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 group/link"
                  >
                    <Github size={16} />
                    <span>Code</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life!
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Globe size={20} />
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 