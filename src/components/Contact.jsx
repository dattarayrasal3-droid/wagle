import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Enquiry from ${formData.name} via SSWA website`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoUrl = `mailto:sswagleassociates@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact S.S. Wagle and Associates (SSWA)</h2>
          <p className="section-subtitle">
            Reach out for HR and manpower solutions, placement services, training, and employee leasing support.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📞</span>
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+919323401206" className="contact-link">
                09323401206
              </a>
            </div>
            
            <div className="contact-card card">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <h3>Email</h3>
              <p>Share your requirements or resume</p>
              <a href="mailto:sswagleassociates@gmail.com" className="contact-link">
                sswagleassociates@gmail.com
              </a>
            </div>
            
            <div className="contact-card card">
              <div className="contact-icon">
                <span>🌐</span>
              </div>
              <h3>Online Presence</h3>
              <p>Connect with SSWA online</p>
              <a
                href="https://www.sswagleassociates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                www.sswagleassociates.com
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/shrikant-wagle-25b48425"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn – Shri Shrikant S. Wagle
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div id="jobseekers" className="contact-form card">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and our team will get back to you.</p>
              
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your mobile number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Share your HR, manpower, or placement requirement"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  Send Email to SSWA
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Partner with SSWA for HR &amp; Manpower Solutions</h3>
            <p>
              Whether you are an organization looking for the right talent or a professional seeking career
              opportunities, S.S. Wagle and Associates (SSWA) is here to support you.
            </p>
            <div className="cta-buttons">
              <a href="tel:+919323401206" className="btn btn-primary btn-large">
                Call SSWA
              </a>
              <a href="mailto:sswagleassociates@gmail.com" className="btn btn-whatsapp btn-large">
                Email SSWA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
