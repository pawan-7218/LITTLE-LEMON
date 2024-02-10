import React from 'react'

const About = () => {
  return (
    <div className="about-section">
    <div className="brand-info">
      <h1>Brand Name</h1>
      <p>Location: Your Location</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="owners-images">
      <img src="owner1.jpg" alt="Owner 1" className="owner-image" />
      <img src="owner2.jpg" alt="Owner 2" className="owner-image" />
    </div>
  </div>
  )
}

export default About