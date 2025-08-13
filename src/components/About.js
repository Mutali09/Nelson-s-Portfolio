import React from 'react';
import { Code, Globe, Heart, Coffee, BookOpen, Users } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Git', icon: '📝', color: 'bg-orange-100 text-orange-600' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600' },
    { name: 'TypeScript', icon: '🔵', color: 'bg-blue-100 text-blue-600' },
  ];

  const interests = [
    { icon: <Code size={20} />, text: 'Clean, maintainable code' },
    { icon: <Globe size={20} />, text: 'User experience design' },
    { icon: <Heart size={20} />, text: 'Problem-solving' },
    { icon: <Coffee size={20} />, text: 'Continuous learning' },
  ];

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">
                Who I Am
              </h2>
              
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  I'm Nelson, a passionate frontend developer who loves turning ideas into 
                  beautiful, functional web applications. With a keen eye for design and a 
                  love for clean code, I strive to create user experiences that are both 
                  visually appealing and highly functional.
                </p>
                
                <p>
                  My journey in web development started with a curiosity about how things 
                  work on the internet, and it has evolved into a passion for building 
                  applications that solve real-world problems. I believe in writing code 
                  that's not just functional, but also maintainable and scalable.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>

              {/* Interests */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                  What I'm Passionate About
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-2 text-secondary-600">
                      <span className="text-primary-600">{interest.icon}</span>
                      <span className="text-sm">{interest.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack & Skills */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
                  Tech Stack
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${tech.color}`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-secondary-800 mb-4">
                  Experience Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 rounded-full mt-1">
                      <BookOpen size={16} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-800">Self-Taught Developer</h4>
                      <p className="text-sm text-secondary-600">
                        Continuously learning and improving through personal projects and online resources
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-full mt-1">
                      <Users size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-800">Community Contributor</h4>
                      <p className="text-sm text-secondary-600">
                        Active in developer communities and open-source projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  🎯 Fun Fact
                </h3>
                <p className="text-primary-700">
                  I believe the best code is the code that never needs to be written twice. 
                  That's why I focus on creating reusable components and clean architecture!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 