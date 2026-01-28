// src/components/Requirements.jsx
import React, { useState } from "react";
import "./Requirements.css";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg"; // ✅ NEW

const Requirements = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const openPreview = (src) => {
    setPreviewSrc(src);
  };

  const closePreview = () => {
    setPreviewSrc(null);
  };

  return (
    <section id="requirements" className="requirements-section">
      <div className="requirements-container">
        {/* Header */}
        <div className="requirements-header">
          <h2>Recruitment Process & Gallery</h2>
        </div>

        {/* ====================== IMAGE GRID ====================== */}
        <div className="requirements-grid">

          {/* ---- Card 1 ---- */}
          <div className="requirement-card">
            <button
              className="requirement-image-wrapper"
              onClick={() => openPreview(photo1)}
              type="button"
            >
              <img src={photo1} alt="Requirement 1" className="requirement-image" />
            </button>
            <h3>Candidate form filling</h3>
            <p>
            Ensuring accurate information and smooth recruitment for overseas and domestic manpower requirements.
            </p>
          </div>

          {/* ---- Card 2 ---- */}
          <div className="requirement-card">
            <button
              className="requirement-image-wrapper"
              onClick={() => openPreview(photo2)}
              type="button"
            >
              <img src={photo2} alt="Requirement 2" className="requirement-image" />
            </button>
            <h3>Candidate Interview
            </h3>
            <p>
            Personal Interview Session
            Shortlisting candidates through structured evaluation.
            </p>
          </div>

          {/* ---- Card 3 (NEW) ---- */}
          <div className="requirement-card">
            <button
              className="requirement-image-wrapper"
              onClick={() => openPreview(photo3)}
              type="button"
            >
              <img src={photo3} alt="Requirement 3" className="requirement-image" />
            </button>
            <h3>Interview Team</h3>
            <p>
            Our Interview Team – Ensuring the Right Talent for the Right Opportunity.
            </p>
          </div>

        </div>

        {/* ====================== SUMMARY SECTION ====================== */}
        <div className="requirements-summary">
          <h3>Recruitment Process</h3>
          <p>Our recruitment process is driven by strong referrals and an extensive 
            candidate network across India and the Gulf, supported by a large databank
             that enables near-zero sourcing time. Candidates are thoroughly screened 
             through personal interviews before being presented to clients, with 
             interviews conducted in person, via video, or teleconference. We manage 
             offer acceptance, medical testing, and onboarding efficiently, typically 
             within 6–8 weeks. With deep understanding of manufacturing roles and job 
             requirements, we align candidates closely with client expectations, ensure 
             long-term commitment, and achieve a selection success rate of over 70%. 
             Our operations are technology-driven, using advanced business process 
             tools for effective recruitment.</p>
        </div>

      </div>

      {/* ====================== IMAGE PREVIEW MODAL ====================== */}
      {previewSrc && (
        <div className="image-preview-backdrop" onClick={closePreview}>
          <div
            className="image-preview-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-preview-close"
              onClick={closePreview}
              type="button"
            >
              ✕
            </button>

            <img src={previewSrc} alt="Preview" className="image-preview-img" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Requirements;
