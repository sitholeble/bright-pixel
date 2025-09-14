import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = ({ companyInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferred_contact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          preferred_contact: 'email'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      value: companyInfo?.contact?.phone || '+27 82 123 4567',
      href: `tel:${companyInfo?.contact?.phone || '+27 82 123 4567'}`,
      description: 'Mon-Fri 9AM-6PM SAST'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: companyInfo?.contact?.whatsapp || '+27 82 123 4567',
      href: `https://wa.me/${(companyInfo?.contact?.whatsapp || '+27 82 123 4567').replace(/\s/g, '')}`,
      description: 'Quick response guaranteed'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      value: companyInfo?.contact?.email || 'hello@brightpixel.co.za',
      href: `mailto:${companyInfo?.contact?.email || 'hello@brightpixel.co.za'}`,
      description: 'We reply within 24 hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: companyInfo?.location || 'Cape Town, South Africa',
      href: '#',
      description: companyInfo?.service_area || 'Available worldwide'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your project? We'd love to hear from you. Choose your preferred way to get in touch.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={`contact-method ${method.title === 'Location' ? 'disabled' : ''}`}
                  target={method.title === 'WhatsApp' ? '_blank' : undefined}
                  rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                >
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-note">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>✅ Free consultation and project planning</li>
                <li>✅ Transparent pricing with no hidden fees</li>
                <li>✅ Fast turnaround times (2-4 weeks)</li>
                <li>✅ Ongoing support and maintenance</li>
                <li>✅ Mobile-first, modern designs</li>
                <li>✅ SEO optimization included</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 82 123 4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="preferred_contact">Preferred Contact Method</label>
                <select
                  id="preferred_contact"
                  name="preferred_contact"
                  value={formData.preferred_contact}
                  onChange={handleInputChange}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <CheckCircle size={20} />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  <span>Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
