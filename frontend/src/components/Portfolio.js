import React from 'react';
import { ExternalLink, Code, Globe, Smartphone } from 'lucide-react';
import './Portfolio.css';

const Portfolio = ({ portfolio }) => {
  const getClientTypeIcon = (clientType) => {
    switch (clientType) {
      case 'small_business':
        return <Globe size={16} />;
      case 'startup':
        return <Code size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  const getClientTypeLabel = (clientType) => {
    switch (clientType) {
      case 'small_business':
        return 'Small Business';
      case 'startup':
        return 'Startup';
      default:
        return 'Business';
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Work</h2>
          <p>Take a look at some of the websites we've created for our clients. Each project is tailored to meet specific business needs and goals.</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="portfolio-image">
                <div className="image-placeholder">
                  <Smartphone size={48} />
                  <span>Website Preview</span>
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <button className="btn btn-primary">
                      View Live Site
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-header">
                  <h3>{item.title}</h3>
                  <div className="client-type">
                    {getClientTypeIcon(item.client_type)}
                    <span>{getClientTypeLabel(item.client_type)}</span>
                  </div>
                </div>
                
                <p className="portfolio-description">{item.description}</p>
                
                <div className="technologies">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {item.live_url && (
                  <a 
                    href={item.live_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="portfolio-link"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <div className="cta-content">
            <h3>Ready to See Your Website Here?</h3>
            <p>Let's create something amazing together. Get in touch to discuss your project and see how we can help bring your vision to life.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
