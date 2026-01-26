import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/gem.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isForceMobile, setIsForceMobile] = useState(false);

  // Store initial viewport width (only once)
  const initialWidth = useRef(window.innerWidth);

  /* ===== Scroll Effect ===== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ===== Force hamburger on even 1px resize ===== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < initialWidth.current) {
        setIsForceMobile(true);
      } else {
        setIsForceMobile(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // run once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ===== Scroll Helpers (UNCHANGED LOGIC) ===== */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToRequirementsSection = () => {
    const element = document.querySelector('.requirements-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToServicesSection = () => {
    const element = document.querySelector('.section.services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToClientSection = () => {
    const element = document.querySelector('.client');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToManagementSection = () => {
    const element = document.querySelector('.management');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isForceMobile ? 'force-mobile' : ''}`}>
      <div className="container">
        <div className="header-content">

          {/* Logo */}
          <div className="logo-container">
            <img
              src={logo}
              alt="S.S. Wagle and Associates (SSWA) Logo"
              className="company-logo"
            />
            <div className="logo-text">
              <h2>S.S. Wagle and Associates (SSWA)</h2>
              <small>
                HR & Manpower Solutions – Placement, Training,
                <br /> Skill Development & Employee Leasing
              </small>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>
              ABOUT US
            </a>

            <a
              href="#management"
              onClick={(e) => {
                e.preventDefault();
                scrollToManagementSection();
              }}
            >
              MANAGEMENT
            </a>

            <a
              href="#industries"
              onClick={(e) => {
                e.preventDefault();
                scrollToServicesSection();
              }}
            >
              INDUSTRIES
            </a>

            <a href="#visa" onClick={() => scrollToSection('visa')}>
              VISA PROCESS
            </a>

            <a href="#jobseekers" onClick={() => scrollToSection('jobseekers')}>
              JOB SEEKERS
            </a>

            {/* <a href="#contact" onClick={() => scrollToSection('contact')}>
              CONTACT US
            </a> */}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a href="tel:+919323401206" className="btn btn-primary">
              Call Now
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
