import React from 'react';
import { ArrowRight, Star, Globe, Users, Zap } from 'lucide-react';
import './Hero.css';

const Hero = ({ companyInfo }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Star size={16} />
              <span>Professional Web Design Services</span>
            </div>
            
            <h1>
              {companyInfo?.tagline || 'Affordable, professional websites for small businesses and startups'}
            </h1>
            
            <p className="hero-description">
              Transform your business with a stunning, modern website that converts visitors into customers. 
              We specialize in creating affordable, professional websites that help small businesses and startups 
              establish their online presence and grow their brand.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <Globe size={24} />
                <div>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Websites Built</span>
                </div>
              </div>
              <div className="stat">
                <Users size={24} />
                <div>
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="stat">
                <Zap size={24} />
                <div>
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get Your Website
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary" onClick={scrollToPortfolio}>
                View Our Work
              </button>
            </div>

            {companyInfo?.location && (
              <div className="hero-location">
                <span>📍 Based in {companyInfo.location}</span>
                <span>🌍 {companyInfo.service_area}</span>
              </div>
            )}
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-header"></div>
                <div className="card-content">
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-header"></div>
                <div className="card-content">
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-header"></div>
                <div className="card-content">
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
