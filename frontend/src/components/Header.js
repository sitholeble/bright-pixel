import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import './Header.css';

const Header = ({ companyInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Bright Pixel</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button
              className="nav-link"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <div className="header-actions">
            {companyInfo?.contact && (
              <div className="contact-info">
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="contact-link"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="contact-link"
                  aria-label="Email us"
                >
                  <Mail size={18} />
                </a>
              </div>
            )}

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {companyInfo?.location && (
          <div className="location-bar">
            <MapPin size={16} />
            <span>{companyInfo.location} • {companyInfo.service_area}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
