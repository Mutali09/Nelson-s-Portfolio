import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Palette } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900">
              Hi, I'm{' '}
              <span className="gradient-text">Nelson</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary-700">
              Frontend Developer
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              I build clean, functional web apps using React.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/projects" className="btn-primary group">
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link to="/contact" className="btn-secondary group">
              Contact Me
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Skills Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 animate-slide-up">
            <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="p-3 bg-primary-100 rounded-full">
                <Code size={24} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-secondary-700">React</h3>
              <p className="text-sm text-secondary-600 text-center">Modern UI development</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="p-3 bg-blue-100 rounded-full">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-secondary-700">JavaScript</h3>
              <p className="text-sm text-secondary-600 text-center">Dynamic functionality</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="p-3 bg-green-100 rounded-full">
                <Palette size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-secondary-700">Tailwind CSS</h3>
              <p className="text-sm text-secondary-600 text-center">Beautiful styling</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-secondary-300 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-secondary-500 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 