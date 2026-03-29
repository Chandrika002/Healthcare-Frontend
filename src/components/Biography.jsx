import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            The center is dedicated to ensuring reliable healthcare support, 
            emergency response, and continuous medical service for the university community.
 
          </p>
          <p>

          </p>
          <p>We are all in 2026!</p>
          <p>Creative endeavor for ensuring sound health for studetns.</p>
          <p>
            The mission of the Chittagong University Medical Center,
             Bangladesh, is to provide accessible, quality healthcare services to students, 
             teachers, staff, and their families. It aims to ensure prompt medical care, 
             promote health awareness, and support a safe campus environment through 
             continuous service, skilled doctors, and essential medical facilities.

          </p>
          <p>Copyright: all rights reserved by CU medical center.</p>

        </div>
      </div>
    </>
  );
};

export default Biography;