import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Mutali09',
      color: 'hover:text-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/nelson-mutali',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:nelsonsimiyu9@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="text-2xl font-bold gradient-text">
                Nelson
              </Link>
              <p className="text-secondary-300 max-w-sm">
                Frontend developer passionate about creating beautiful, functional web applications 
                that make a difference in people's lives.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-secondary-800 rounded-lg transition-all duration-200 ${social.color} hover:bg-secondary-700`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-2 text-secondary-300">
                <p>Ready to start a project?</p>
                <p>Let's discuss how we can work together!</p>
                <a
                  href="/contact"
                  className="inline-block mt-3 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-secondary-400 text-sm">
                <span>© {currentYear} Nelson. All rights reserved.</span>
                <span>•</span>
                <span>Made with</span>
                <Heart size={14} className="text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <div className="text-secondary-400 text-sm">
                <p>Designed & Built by Nelson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 