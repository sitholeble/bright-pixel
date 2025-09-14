import React from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Headphones } from 'lucide-react';
import './Services.css';

const Services = ({ packages }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPackageIcon = (packageName) => {
    switch (packageName.toLowerCase()) {
      case 'starter website':
        return <Zap size={24} />;
      case 'professional website':
        return <Star size={24} />;
      case 'e-commerce website':
        return <Shield size={24} />;
      default:
        return <Star size={24} />;
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services & Pricing</h2>
          <p>Choose the perfect package for your business needs. All packages include modern design, mobile optimization, and ongoing support.</p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="package-header">
                <div className="package-icon">
                  {getPackageIcon(pkg.name)}
                </div>
                <h3>{pkg.name}</h3>
                <p className="package-description">{pkg.description}</p>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                </div>
              </div>

              <div className="package-features">
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="services-guarantee">
          <div className="guarantee-content">
            <Headphones size={32} />
            <div>
              <h3>Our Guarantee</h3>
              <p>We're committed to your success. If you're not satisfied with your website within 30 days, we'll work with you to make it right or provide a full refund.</p>
            </div>
          </div>
        </div>

        <div className="additional-services">
          <h3>Additional Services</h3>
          <div className="services-list">
            <div className="service-item">
              <div className="service-icon">
                <Zap size={24} />
              </div>
              <div>
                <h4>Website Maintenance</h4>
                <p>Keep your website updated, secure, and running smoothly</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Shield size={24} />
              </div>
              <div>
                <h4>SEO Optimization</h4>
                <p>Improve your search engine rankings and drive more traffic</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Star size={24} />
              </div>
              <div>
                <h4>Brand Design</h4>
                <p>Complete brand identity including logo and marketing materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
