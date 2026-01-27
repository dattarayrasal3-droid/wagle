import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              HR &amp; Manpower Solutions
              <span className="highlight"> for Industry Leaders</span>
            </h1>
            <p className="hero-subtitle">
              SS Wagle and Associates (SSWA) specializes in placement services, training, skill development,
              and employee leasing for sectors such as cable manufacturing, pharmaceuticals, engineering, cement,
              chemicals, and automobiles.
            </p>
            <div className="hero-actions">
              <a href="#jobseekers" className="btn btn-primary btn-large">
                Job Seekers – Submit Resume
              </a>
              <a href="#contact" className="btn btn-whatsapp btn-large">
                Connect with SSWA
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>30+</h3>
              <p>Years in Manufacturing &amp; Industrial Engineering</p>
            </div>
            <div className="stat-item">
              <h3>17+</h3>
              <p>Years in Placement &amp; HR Services</p>
            </div>
            <div className="stat-item">
              <h3>Multi-Sector</h3>
              <p>Cables, Pharma, Engineering, Cement and chemicals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
