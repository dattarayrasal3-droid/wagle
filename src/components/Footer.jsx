import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SS WAGLE AND ASSOCIATES (SSWA)</h3>
            <p>
              HR and Manpower Solutions specializing in placement services, training, skill development,
              and employee leasing for leading industries in India and overseas.
            </p>
            <div className="social-links">
              <a href="tel:+919323401206">
                <span>📞</span> Call
              </a>
              <a href="mailto:sswagleassociates@gmail.com">
                <span>📧</span> Email
              </a>
              <a
                href="https://www.linkedin.com/in/shrikant-wagle-25b48425"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>in</span> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li><a href="#management">MANAGEMENT TEAM</a></li>
              <li><a href="#industries">INDUSTRIES</a></li>
              <li><a href="#jobseekers">JOB SEEKERS</a></li>
              <li><a href="#contact">CONTACT US</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>HR &amp; Manpower Solutions</li>
              <li>Placement Services</li>
              <li>Training &amp; Skill Development</li>
              <li>Employee Leasing</li>
              <li>Consulting &amp; Advisory</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><strong>📍 Registered Office:</strong></p>
              <p>
                6, Naina, Dattapada Road, Behind SBI,
                Borivali (E), Mumbai – 400 066, Maharashtra, India
              </p>
              <p><strong>📍 Corporate Office:</strong></p>
              <p>
                A001/A, Shanti Dwar, Shantivan,
                Near National Park, Borivali (E), Mumbai – 400 066,  Maharashtra, India
              </p>
              <p><strong>📞 Mobile:</strong></p>
              <p>+91 9323401206</p>
              <p><strong>📧 Email:</strong></p>
              <p>sswagleassociates@gmail.com</p>
              <p><strong>🌐 Website:</strong></p>
              <p>www.sswagleassociates.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} SS WAGLE AND ASSOCIATES (SSWA). All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
