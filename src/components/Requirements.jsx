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
        {/* <div className="requirements-summary">
          <h3>Summary of Requirements</h3>
          <p>Before proceeding, please ensure you:</p>

          <ul>
            <li>Meet the minimum eligibility criteria.</li>
            <li>Have valid identification and supporting documents.</li>
            <li>Provide correct contact information for communication.</li>
            <li>Understand the process, timeline, and any applicable requirements.</li>
          </ul>

          <p>
            Preparing these items beforehand ensures a smooth and efficient experience.
          </p>
        </div> */}

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
