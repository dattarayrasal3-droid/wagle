import React from 'react';
import './Clients.css';

// Placeholder images - replace with actual client images
import indianClientImage from '../assets/ind.jpeg'; // You can replace this with actual Indian clients image
import overseasClientImage from '../assets/os.jpeg'; // You can replace this with actual overseas clients image

const Clients = () => {
  return (
    <section className="client">
      <div className="client-container">
        <h1 style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",

        }}> Our clients </h1>
        <br>
        </br>
        <br></br>
        <div className="client-flex">
          {/* Indian Clients */}
          <div className="client-card">
            <h2 className="client-heading">Indian Clients</h2>
            <div className="client-image-wrapper">
              <img style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              marginLeft: '-0.3vw',
              marginTop: '-0.1vw',
            }}
                src={indianClientImage} 
                alt="Indian Clients" 
                className="client-image"
              />
            </div>
          </div>

          {/* Overseas Client */}
          <div className="client-card">
            <h2 className="client-heading">Overseas Clients</h2>
            <div className="client-image-wrapper" >
              <img 
                src={overseasClientImage} 
                alt="Overseas Client" 
                className="client-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
