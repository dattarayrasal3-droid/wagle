// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const services = [
//     {
//       image: '/src/assets/pcs.jpg',
//       title: 'Power cables',
//       description: 'Skilled professionals for pharmaceutical manufacturing and R&D.'
//     },
//     {
//       image: '/src/assets/allu.jpg',
//       title: 'Aluminium Processing',
//       description: 'Expert workforce for aluminium processing plants and related industries'
//     },
//     {
//       image: '/src/assets/optic.jpg',
//       title: 'Fibre optic cables',
//       description: 'Manpower solutions for cement manufacturing and processing units'
//     }
//     // Add more as needed
//   ];

//   return (
//     <section id="services" className="section services">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Industries</h2>
//           <p className="section-subtitle">
//             Comprehensive manpower solutions tailored to meet global workforce demands
//           </p>
//         </div>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.image} alt={service.title} className="service-image" />
//               <div className="overlay">
//                 <h3 className="service-title">{service.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from 'react';
import './Services.css';

// ✅ Import images correctly for Vite / Vercel
import pcs from '../assets/pcs.jpg';
import allu from '../assets/allu.jpg';
import optic from '../assets/optic.jpg';

const Services = () => {
  const services = [
    {
      image: pcs,
      title: 'Power Cables',
      description: 'Skilled manpower solutions for power cable manufacturing and related industries.'
    },
    {
      image: allu,
      title: 'Aluminium Processing',
      description: 'Expert workforce for aluminium processing plants and allied manufacturing units.'
    },
    {
      image: optic,
      title: 'Fibre Optic Cables',
      description: 'Specialized manpower support for fibre optic cable manufacturing and operations.'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Industries</h2>
          <p className="section-subtitle">
            Comprehensive manpower solutions tailored to meet industry-specific workforce requirements
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
                loading="lazy"
              />
              <div className="overlay">
                <h3 className="service-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
