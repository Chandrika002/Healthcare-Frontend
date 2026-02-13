import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          We are a dedicated team of healthcare professionals committed to delivering exceptional medical services with compassion and integrity. Our institution combines advanced
          technology with experienced specialists to ensure accurate diagnosis, effective treatment, and personalized patient care. We believe healthcare should be accessible,
           reliable, and centered around the well-being of every individual we serve.
        </p>
        <p>We are trying to improve</p>
        <p>We are more than just a medical institute — we are a community built on care, trust, and excellence.
           Our team of skilled doctors, nurses, and support staff work together to create a safe and welcoming environment for every patient. 
          With a strong focus on innovation and empathy, we strive to improve lives and promote healthier futures.</p>
          <p>Please be with us.</p>
          <p>Best wishes</p>
      </div>
    </div>
  )
}

export default Biography