import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Offices</h2>
          <p className="section-subtitle">
            Visit SS WAGLE AND ASSOCIATES (SSWA) at our Registered and Corporate Offices in Borivali (E), Mumbai.
          </p>
        </div>

        {/* <div className="location-content"> */}
          {/* <div className="location-content" style={{display:"flex",flexDirection:"row"}}> */}

            <div className='coco'>
              
              <div className="location-card coco">
                <div className="location-icon">
                  <span>📍</span>
                </div>
                <h3>Registered Office</h3>
                <div className="address-details">
                  <p><strong>SS WAGLE AND ASSOCIATES (SSWA)</strong></p>
                  <p>6, Naina, Dattapada Road, Behind SBI,</p>
                  <p>Borivali (E), Mumbai – 400 066, Maharashtra, India</p>
                </div>
              </div>

              <br />

            
              <div className="location-card coco">
                <div className="location-icon">
                  <span>🏢</span>
                </div>
                <h3>Corporate Office</h3>
                <div className="address-details">
                  <p>A001/A, Shanti Dwar, Shantivan,</p>
                  <p>Near National Park, Borivali (E),</p>
                  <p>Mumbai – 400 066, Maharashtra, India</p>
                </div>
              </div>

              <br />

        
              <div className="location-card coco">
                <div className="location-icon">
                  <span>🌍</span>
                </div>
                <h3>Why SSWA?</h3>
                <div className="location-benefits">
                  <p>• 30+ years of experience in manufacturing, planning, and industrial engineering</p>
                  <p>• 17+ years of experience in HR and placement services</p>
                  <p>• Strong focus on cable manufacturing, pharmaceuticals, engineering, cement, chemicals, and automobiles</p>
                  <p>• Process-driven approach to improve productivity and reduce training time</p>
                </div>
              </div>
            </div>

            <br />
            <br />


            <div className="maps">

              <div className="map-container">
              {/* <iframe
                src="https://www.google.com/maps?q=Borivali%20East,%20Mumbai%20400066&output=embed"
                // src="https://maps.app.goo.gl/3EjD5xHBb13ZcMLm6?g_st=aw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SS WAGLE AND ASSOCIATES (SSWA) - Office Location"
              ></iframe>

              <div className="map-overlay">
                <div className="map-content">
                  <h3>Borivali (E), Mumbai – 400 066</h3>
                  <p>
                    SSWA operates from Borivali (East), Mumbai, strategically located with convenient access
                    for clients and candidates across the city and beyond.
                  </p>
                  <div className="map-actions">
                    <a
                      href="https://maps.app.goo.gl/3EjD5xHBb13ZcMLm6?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on Google Maps
                    </a>
                    <a
                      href="tel:+919323401206"
                      className="btn btn-whatsapp"
                    >
                      Call SSWA
                    </a>
                  </div>
                </div>
              </div> */}


              {/* here */}
              <iframe
                src="https://www.google.com/maps?q=Borivali%20East,%20Mumbai%20400066&output=embed"
                // src="https://maps.app.goo.gl/3EjD5xHBb13ZcMLm6?g_st=aw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SS WAGLE AND ASSOCIATES (SSWA) - Office Location"
              ></iframe>

              <div className="map-overlay">
                <div className="map-content">
                  <h4>📍 Corporate office, Borivali (E), Mumbai – 400 066</h4>
                  <p>
                    SSWA operates from Borivali (East), Mumbai, strategically located with convenient access
                    for clients and candidates across the city and beyond.
                  </p>
                  <div className="map-actions">
                    <a
                      href="https://maps.app.goo.gl/Mo7CAUbBqz1Ub1tE7?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on Google Maps
                    </a>
                    <a
                      href="tel:+919323401206"
                      className="btn btn-whatsapp"
                    >
                      Call SSWA
                    </a>
                  </div>
                </div>
              </div>

              {/* end */}
              </div>
              <div style={{width:"5vw"}}></div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Borivali%20East,%20Mumbai%20400066&output=embed"
                  // src="https://maps.app.goo.gl/3EjD5xHBb13ZcMLm6?g_st=aw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SS WAGLE AND ASSOCIATES (SSWA) - Office Location"
                ></iframe>

                <div className="map-overlay">
                  <div className="map-content">
                    <h4>📍 Rigestered office, Borivali (E), Mumbai – 400 066</h4>
                    <p>
                      SSWA operates from Borivali (East), Mumbai, strategically located with convenient access
                      for clients and candidates across the city and beyond.
                    </p>
                    <div className="map-actions">
                      <a
                        href="https://maps.app.goo.gl/3EjD5xHBb13ZcMLm6?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View on Google Maps
                      </a>
                      <a
                        href="tel:+919323401206"
                        className="btn btn-whatsapp"
                      >
                        Call SSWA
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Location;
