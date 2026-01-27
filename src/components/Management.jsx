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
      name: 'SHRIKANT WAGLE', 
      role: 'Partner & Founder',
      introduction: 'Mechanical Engineering graduate with postgraduation in Industrial Engineering, 30+ years of experience in the cable manufacturing industry and 17 years in placement services.'
    },
    { 
      image: i2, 
      name: 'PALLAVI WAGLE RASAL', 
      role: 'Partner',
      introduction: 'Finance professional with an MBA and 13+ years of experience in banking and 12+ years in placement services, experienced in finance, treasury, and recruitment operations. '
    },
    { 
      image: i3, 
      name: 'SHIVADATTA WAGLE', 
      role: 'Consultant',
      introduction: '33 years of experience in strategy, marketing, and HR consulting across multiple industries, with a strong focus on organizational growth, talent development, and business transformation.'
    },
    { 
      image: i4, 
      name: 'DATTATRAY RASAL', 
      role: 'Consultant',
      introduction: 'Over 3 decades of Capital Market  Operations experience which includes 15+ years of leadership experience and expertise in recruitment, process automation, and operational risk management.'
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
