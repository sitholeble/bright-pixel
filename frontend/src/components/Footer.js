import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = ({ companyInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Bright Pixel</h3>
              <p>Affordable, professional websites for small businesses and startups.</p>
            </div>
            
            {companyInfo?.location && (
              <div className="footer-location">
                <MapPin size={16} />
                <span>{companyInfo.location} • {companyInfo.service_area}</span>
              </div>
            )}
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Website Design</li>
              <li>E-commerce Development</li>
              <li>SEO Optimization</li>
              <li>Website Maintenance</li>
              <li>Brand Design</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              {companyInfo?.contact?.phone && (
                <div className="contact-item">
                  <Phone size={16} />
                  <a href={`tel:${companyInfo.contact.phone}`}>
                    {companyInfo.contact.phone}
                  </a>
                </div>
              )}
              
              {companyInfo?.contact?.whatsapp && (
                <div className="contact-item">
                  <MessageCircle size={16} />
                  <a 
                    href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              )}
              
              {companyInfo?.contact?.email && (
                <div className="contact-item">
                  <Mail size={16} />
                  <a href={`mailto:${companyInfo.contact.email}`}>
                    {companyInfo.contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Bright Pixel. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <button 
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
