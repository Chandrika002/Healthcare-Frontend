import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className = 'hero container'>
      <div className='banner'>
      <h1>{title}</h1>
      <p>
        We are dedicated to providing high-quality medical services for everyone.
        Our experienced doctors and staff ensure safe and reliable treatment.
        We use modern technology to deliver the best healthcare solutions. 
        Our health and well-being are our top priority.
      </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image"/>
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero

