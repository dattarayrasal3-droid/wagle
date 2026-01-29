import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About SS WAGLE AND ASSOCIATES (SSWA)</h2>
          <p className="section-subtitle">
            Specialized HR &amp; Manpower Solutions – Placement Services, Training, Skill Development &amp; Employee Leasing
          </p>
        </div>

        <div className="about-grid narrow">
          <div className="about-card card" style={{ 
            backgroundImage: "linear-gradient(135deg, #0b2858ff 0%, #2d59d4ff 100%)",
            }}>

            <h3 style={{color:"white"}}>Mission</h3>
            <p style={{color:"white"}}>
To provide employment and career growth opportunities through professional placement, training, skill development, and manpower solutions for Indian nationals in India and abroad across key industrial sectors.  </p>          </div>
          <div className="about-card card" style={{ 
            backgroundImage: "linear-gradient(135deg, #0b2858ff 0%, #2d59d4ff 100%)",
            }}>
            <h3 style={{color:"white"}}>Vision</h3>
            <p style={{color:"white"}}>
To emerge as a leading global placement organization known for excellence in recruitment, training, and manpower services across industries and international markets.            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card card">
            <h3>Corporate Profile</h3>
            <p>
              Founded in 2007, SS WAGLE AND ASSOCIATES began as a proprietary firm established by Mr. Shrikant Wagle,
              a seasoned engineering professional with over 30 years of experience in manufacturing, planning, and industrial
              engineering in the cable industry, along with more than 17 years of experience in placement services.
              In 2014, the firm transitioned into a partnership to support expanded operations.
            </p>
            <p>
              The company specializes in HR and Manpower Solutions including placement services, training, skill development,
              and employee leasing. These services help clients improve productivity, reduce training time, and lower operational
              costs across industries such as cable manufacturing, pharmaceuticals, engineering, cement, chemicals and automobile.
            </p>
          </div>

          <div className="about-card card">
            <h3>Services &amp; Expertise</h3>
            <ul className="about-list">
              <li>End-to-end placement services for technical, supervisory, and managerial roles</li>
              <li>Training and skill development programs tailored to client requirements</li>
              <li>Employee leasing and manpower outsourcing for flexible workforce planning</li>
              <li>Process-oriented approach to reduce training time and improve productivity</li>
            </ul>
          </div>

          <div className="about-card card">
            <h3>Industries We Serve</h3>
            <p>
              SSWA caters to a wide spectrum of industries with a strong focus on:
            </p>
            <ul className="about-list">
              <li>Cable Manufacturing – Power Cables, Optic Fiber Cables, Overhead Conductors</li>
              <li>Aluminium Processing and allied operations</li>
              <li>Pharmaceuticals and life sciences</li>
              <li>Engineering and capital goods</li>
              <li>Cement, Chemicals, and Automobiles</li>
            </ul>
          </div>
        </div>

        {/* <div className="about-grid narrow">
          <div className="about-card card">
            <h3>Mission</h3>
            <p>
              To provide employment and career enhancement opportunities to Indian nationals in India and abroad.
            </p>
          </div>
          <div className="about-card card">
            <h3>Vision</h3>
            <p>
              To become a Global Leader in placement services.
            </p>
          </div>
        </div> */}

        <div className="about-grid">
          <div className="about-card card">
            <h3>Core Values</h3>
            <ul className="about-list two-col">
              <li><strong>Integrity</strong>: Ethical and transparent dealings with clients and candidates.</li>
              <li><strong>Professionalism</strong>: Process-driven execution with industry expertise.</li>
              <li><strong>Quality</strong>: Focus on the right fit in skills, attitude, and long-term potential.</li>
              <li><strong>Partnership</strong>: Building long-term relationships with clients and job seekers.</li>
              <li><strong>Reliability</strong>: Consistent delivery and adherence to timelines.</li>
              <li><strong>Continuous Improvement</strong>: Upgrading skills, systems, and processes.</li>
            </ul>
          </div>

          <div className="about-card card">
            <h3>Key Strengths</h3>
            <ul className="about-list">
              <li>Deep domain experience in the cable and process industries</li>
              <li>Strong understanding of shop-floor, planning, and industrial engineering functions</li>
              <li>Experience across HR, recruitment, and skill development for diverse sectors</li>
              <li>Personalized engagement with both clients and job seekers</li>
            </ul>
          </div>
        </div>

        <div className="about-cta card">
          <h3>Share Your Profile with SSWA</h3>
          <p>
            Job seekers and professionals can share their resumes with SS WAGLE AND ASSOCIATES (SSWA)
            for suitable career opportunities in India and overseas.
          </p>
          <div className="cta-actions">
            <a
              href="mailto:sswagleassociates@gmail.com?subject=Resume Submission - SSWA&body=Please find my resume attached."
              className="btn btn-primary"
            >
              Email: sswagleassociates@gmail.com
            </a>
            {/* <a
              href="https://www.sswagleassociates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit: www.sswagleassociates.com
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
