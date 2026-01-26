import React from 'react';
import './Services.css';
import oilImage from '../assets/oil.jpg';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Pharmaceuticals',
      description: 'Skilled professionals for pharmaceutical manufacturing and R&D.'
    },
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop',

      title: 'Aluminium Processing',
      description: 'Expert workforce for aluminium processing plants and related industries'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Cable Manufacturing',
      description: 'Specializing in Power Cables, Optic Fiber Cables, and Overhead Conductors.'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Documentation Support',
      description: 'Complete assistance with visa processing, work permits, and all necessary documentation for international employment.'
    },
    {
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
      title: 'Automobile',
      description: 'Recruitment for the automobile manufacturing and assembly sector.'
    },
    {
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Cement',
      description: 'Manpower solutions for cement manufacturing and processing units'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Industries</h2>
          <p className="section-subtitle">
            Comprehensive manpower solutions tailored to meet global workforce demands
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card fade-in-up">
              <div className="service-icon">
                <img src={service.image} alt={service.title} className="service-photo" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to Start Your Global Career?</h3>
          <p>Contact us today to explore opportunities worldwide</p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="https://wa.me/919323401206" className="btn btn-whatsapp">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
