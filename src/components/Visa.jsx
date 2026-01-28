// import React from "react";
// import "./Visa.css";

// import oman1 from "../assets/oman1.jpeg";
// import oman2 from "../assets/oman2.jpeg";
// import k1 from "../assets/k1.jpeg";
// import k2 from "../assets/k2.jpeg";
// import u1 from "../assets/u1.jpeg";
// import u2 from "../assets/u2.jpeg";

// const Visa = () => {
//   return (
//     <section id="visa" className="section visa">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Visa Process</h2>
//           <p className="section-subtitle">
//             Country-wise visa process updates and documentation highlights.
//           </p>
//         </div>

//         {/* Oman */}
//         <div className="visa-content card">
//           <div className="visa-points">
//             <div>
//               <h3>VISA PROCESS FOR OMAN</h3>
//             </div>
//           </div>

//           <div className="visa-images">
//             <img src={oman1} alt="Visa process for Oman - 1" className="visa-image" />
//             <img src={oman2} alt="Visa process for Oman - 2" className="visa-image" />
//           </div>
//         </div>
//         <br />

//         {/* Kuwait */}
//         <div className="visa-content card">
//           <div className="visa-points">
//             <div>
//               <h3>VISA PROCESS FOR KUWAIT</h3>
//             </div>
//           </div>

//           <div className="visa-images">
//             <img src={k1} alt="Visa process for Kuwait - 1" className="visa-image" />
//             <img src={k2} alt="Visa process for Kuwait - 2" className="visa-image" />
//           </div>
//         </div>
//         <br />

//         {/* UAE */}
//         <div className="visa-content card">
//           <div className="visa-points">
//             <div>
//               <h3>VISA PROCESS FOR UAE</h3>
//             </div>
//           </div>

//           <div className="visa-images">
//             <img src={u1} alt="Visa process for UAE - 1" className="visa-image" />
//             <img src={u2} alt="Visa process for UAE - 2" className="visa-image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Visa;
// new one

// import React, { useState } from "react";
// import "./Visa.css";

// import oman1 from "../assets/oman1.jpeg";
// import oman2 from "../assets/oman2.jpeg";
// import k1 from "../assets/k1.jpeg";
// import k2 from "../assets/k2.jpeg";
// import u1 from "../assets/u1.jpeg";
// import u2 from "../assets/u2.jpeg";

// const Visa = () => {
//   const [showOman, setShowOman] = useState(false);
//   const [showKuwait, setShowKuwait] = useState(false);
//   const [showUae, setShowUae] = useState(false);

//   const handleToggle = (country) => {
//     if (country === "oman") setShowOman((prev) => !prev);
//     if (country === "kuwait") setShowKuwait((prev) => !prev);
//     if (country === "uae") setShowUae((prev) => !prev);
//   };

//   return (
//     <section id="visa" className="section visa">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Visa Process</h2>
//           <p className="section-subtitle">
//             Country-wise visa process updates and documentation highlights.
//           </p>
//         </div>

//         {/* <div className="letsgo"> */}

//           <div className="visa-content card">
//             <div className="visa-points">
//               <div>
//                 <h3>VISA PROCESS FOR OMAN</h3>
//               </div>
//             </div>

//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => handleToggle("oman")}
//             >
//               Visa Process for Oman
//             </button>

//             {showOman && (
//               <div className="visa-images">
//                 <img src={oman1} alt="Visa process for Oman - 1" className="visa-image" />
//                 <img src={oman2} alt="Visa process for Oman - 2" className="visa-image" />
//               </div>
//             )}
//           </div>

//           <br />

//           <div className="visa-content card">
//             <div className="visa-points">
//               <div>
//                 <h3>VISA PROCESS FOR KUWAIT</h3>
//               </div>
//             </div>

//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={() => handleToggle("kuwait")}
//             >
//               Visa Process for Kuwait
//             </button>

//             {showKuwait && (
//               <div className="visa-images">
//                 <img src={k1} alt="Visa process for Kuwait - 1" className="visa-image" />
//                 <img src={k2} alt="Visa process for Kuwait - 2" className="visa-image" />
//               </div>
//             )}
//           </div>

//           <br />

//           <div className="visa-content card">
//           <div className="visa-points">
//             <div>
//               <h3>VISA PROCESS FOR UAE</h3>
//             </div>
//           </div>

//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={() => handleToggle("uae")}
//           >
//             Visa Process for UAE
//           </button>

//           {showUae && (
//             <div className="visa-images">
//               <img src={u1} alt="Visa process for UAE - 1" className="visa-image" />
//               <img src={u2} alt="Visa process for UAE - 2" className="visa-image" />
//             </div>
//           )}
//           </div>

//         {/* </div> */}
//       </div>
//     </section>
//   );
// };

// export default Visa;


import React, { useState } from "react";
import "./Visa.css";

import oman1 from "../assets/oman1.jpeg";
import oman2 from "../assets/oman2.jpeg";
import k1 from "../assets/k1.jpeg";
import k2 from "../assets/k2.jpeg";
import u1 from "../assets/u1.jpeg";
import u2 from "../assets/u2.jpeg";

const Visa = () => {
  const [showOman, setShowOman] = useState(false);
  const [showKuwait, setShowKuwait] = useState(false);
  const [showUae, setShowUae] = useState(false);

  const handleToggle = (country) => {
    if (country === "oman") setShowOman((prev) => !prev);
    if (country === "kuwait") setShowKuwait((prev) => !prev);
    if (country === "uae") setShowUae((prev) => !prev);
  };

  return (
    <section id="visa" className="section visa">
      <div className="container">
        <div className="section-header" >
          <h2 className="section-title">Visa Process</h2>
          <p className="section-subtitle">
            Country-wise visa process updates and documentation highlights.
          </p>
        </div>

        {/* OMAN */}
        <div className="visa-content card">
          <div className="visa-points">
            <h3>VISA PROCESS FOR OMAN</h3>
          </div>
          {/* <br /> */}

          <div className="visa-button-wrapper">
            <button
              type="button"
              className="btn btn-primary visa-btn"
              onClick={() => handleToggle("oman")}
            >
              Visa Process for Oman
            </button>
          </div>

          {showOman && (
            <div className="visa-images">
              <img src={oman1} alt="Visa process for Oman - 1" className="visa-image" />
              <img src={oman2} alt="Visa process for Oman - 2" className="visa-image" />
            </div>
          )}
        </div>

        {/* KUWAIT */}
        <div className="visa-content card">
          <div className="visa-points">
            <h3>VISA PROCESS FOR KUWAIT</h3>
          </div>
          {/* <br /> */}

          <div className="visa-button-wrapper">
            <button
              type="button"
              className="btn btn-primary visa-btn"
              onClick={() => handleToggle("kuwait")}
            >
              Visa Process for Kuwait
            </button>
          </div>

          {showKuwait && (
            <div className="visa-images">
              <img src={k1} alt="Visa process for Kuwait - 1" className="visa-image" />
              <img src={k2} alt="Visa process for Kuwait - 2" className="visa-image" />
            </div>
          )}
        </div>

        {/* UAE */}
        <div className="visa-content card">
          <div className="visa-points">
            <h3>VISA PROCESS FOR UAE</h3>
          </div>
          {/* <br /> */}

          <div className="visa-button-wrapper">
            <button
              type="button"
              className="btn btn-primary visa-btn"
              onClick={() => handleToggle("uae")}
            >
              Visa Process for UAE
            </button>
          </div>

          {showUae && (
            <div className="visa-images">
              <img src={u1} alt="Visa process for UAE - 1" className="visa-image" />
              <img src={u2} alt="Visa process for UAE - 2" className="visa-image" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Visa;
