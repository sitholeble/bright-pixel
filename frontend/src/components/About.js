import React from 'react';
import { Code, Palette, Smartphone, Search, Heart, Award } from 'lucide-react';
import './About.css';

const About = ({ companyInfo }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Code size={32} />,
      title: 'Modern Development',
      description: 'Built with the latest technologies like React, FastAPI, and modern design principles.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Custom designs that reflect your brand and engage your customers effectively.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile-First',
      description: 'Every website is optimized for mobile devices to reach customers everywhere.'
    },
    {
      icon: <Search size={32} />,
      title: 'SEO Optimized',
      description: 'Built-in SEO features to help your business rank higher in search results.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Why Choose Bright Pixel?</h2>
            <p className="about-intro">
              Hi, I'm <strong>{companyInfo?.about?.founder || 'Blessing Sithole'}</strong>, 
              the founder of Bright Pixel. With {companyInfo?.about?.experience || '5+ years'} 
              in web development and design, I'm passionate about helping small businesses 
              and startups establish their online presence without breaking the bank.
            </p>
            
            <div className="mission-statement">
              <Heart size={24} />
              <div>
                <h3>Our Mission</h3>
                <p>{companyInfo?.about?.mission || 'Making professional web design accessible to small businesses and startups without breaking the bank.'}</p>
              </div>
            </div>

            <div className="specialties">
              <h3>What We Specialize In:</h3>
              <div className="specialty-tags">
                {(companyInfo?.about?.specialties || ['React', 'FastAPI', 'Modern Web Design', 'E-commerce', 'SEO']).map((specialty, index) => (
                  <span key={index} className="specialty-tag">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn btn-primary" onClick={scrollToContact}>
              Let's Work Together
            </button>
          </div>

          <div className="about-features">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <Award size={24} />
                <div>
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
              <div className="stat-item">
                <Code size={24} />
                <div>
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
              </div>
              <div className="stat-item">
                <Heart size={24} />
                <div>
                  <span className="stat-number">Ongoing</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
