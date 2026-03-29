import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            The Medical Center of the University of Chittagong, 
            located near the Law Faculty Building, offers free medical service and 
            free pathological examinations to students, teachers and staffs of 
            the University and also family members of the teachers and staffs. 
            The Center provides service round the clock, seven days a week, with
             doctors working in different shifts. The Center also has eleven doctors and four ambulances. 
            The Center has in its premises a temporary arrangement for 6 bed accommodation.
          </p>
        </div>
        <div className="banner">
          <img
            src={imageUrl}
            alt="hero"
            className="animated-image"
            style={{ width: "350px", height: "auto" }}
          />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;