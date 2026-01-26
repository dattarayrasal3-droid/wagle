import React from 'react';
import './Management.css';
import i1 from '../assets/i1.jpeg';
import i2 from '../assets/i2.jpeg';
import i3 from '../assets/i3.jpeg';
import i4 from '../assets/i4.jpeg';

const Management = () => {
  const teamMembers = [
    { 
      image: i1, 
      name: 'Shrikant Wagle', 
      role: 'Partner & Founder',
      introduction: 'Mechanical Engineer with 30+ years of industry experience and over 17 years in placement services, specializing in operations and manpower planning.'
    },
    { 
      image: i2, 
      name: 'PALLAVI WAGLE RASAL', 
      role: 'Partner',
      introduction: 'Finance professional with an MBA and 13+ years in banking and placement services, experienced in finance, treasury, and recruitment operations.'
    },
    { 
      image: i3, 
      name: 'SHIVADATTA WAGLE', 
      role: 'Consultant',
      introduction: 'IIM Calcutta postgraduate with 20 years of experience in strategy, marketing, and HR consulting across the tourism sector.'
    },
    { 
      image: i4, 
      name: 'DATTATRAY RASAL', 
      role: 'Consultant',
      introduction: 'HR operations consultant with 10+ years of leadership experience in recruitment, process automation, and operational risk management.'
    }
  ];

  return (
    <section className="management">
      <div className="management-container">
        <div className="management-title">
          <h2>Management Team</h2>
        </div>

        <div className="management-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="management-item">
              <div className="management-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="management-image"
                />
              </div>
              <div className="management-content">
                <h3>{member.name}</h3>
                <p className="management-role">{member.role}</p>
                <p className="management-introduction">{member.introduction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
