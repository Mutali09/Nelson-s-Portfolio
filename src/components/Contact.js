import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'nelson@example.com',
      link: 'mailto:nelson@example.com',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/nelson',
      link: 'https://github.com/nelson',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/nelson',
      link: 'https://linkedin.com/in/nelson',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <div className="section-padding pt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
                Send me a message
              </h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
                  Other ways to reach me
                </h2>
                <p className="text-secondary-600 mb-6">
                  Prefer to connect through other channels? Here are some alternative ways 
                  to get in touch with me.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg border border-secondary-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className={`p-3 rounded-full ${method.color}`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-secondary-800 group-hover:text-primary-600 transition-colors duration-200">
                        {method.title}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-800 mb-3">
                  💡 Quick Response
                </h3>
                <p className="text-primary-700 text-sm">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out through multiple channels.
                </p>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                  🚀 Let's Build Something
                </h3>
                <p className="text-secondary-700 text-sm">
                  Whether it's a new project, collaboration opportunity, or just a 
                  friendly chat about tech, I'm excited to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 