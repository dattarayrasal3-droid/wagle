import React from "react";
import "./Visa.css";

import oman1 from "../assets/oman1.jpeg";
import oman2 from "../assets/oman2.jpeg";
import k1 from "../assets/k1.jpeg";
import k2 from "../assets/k2.jpeg";
import u1 from "../assets/u1.jpeg";
import u2 from "../assets/u2.jpeg";

const Visa = () => {
  return (
    <section id="visa" className="section visa">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Visa Process</h2>
          <p className="section-subtitle">
            Country-wise visa process updates and documentation highlights.
          </p>
        </div>

        {/* Oman */}
        <div className="visa-content card">
          <div className="visa-points">
            <div>
              <h3>Visa Process for Oman</h3>
            </div>
          </div>

          <div className="visa-images">
            <img src={oman1} alt="Visa process for Oman - 1" className="visa-image" />
            <img src={oman2} alt="Visa process for Oman - 2" className="visa-image" />
          </div>
        </div>
        <br />

        {/* Kuwait */}
        <div className="visa-content card">
          <div className="visa-points">
            <div>
              <h3>Visa Process for Kuwait</h3>
            </div>
          </div>

          <div className="visa-images">
            <img src={k1} alt="Visa process for Kuwait - 1" className="visa-image" />
            <img src={k2} alt="Visa process for Kuwait - 2" className="visa-image" />
          </div>
        </div>
        <br />

        {/* UAE */}
        <div className="visa-content card">
          <div className="visa-points">
            <div>
              <h3>Visa Process for UAE</h3>
            </div>
          </div>

          <div className="visa-images">
            <img src={u1} alt="Visa process for UAE - 1" className="visa-image" />
            <img src={u2} alt="Visa process for UAE - 2" className="visa-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visa;
