import React from 'react'
import Button from './Button'
const HeroSection = () => {
  return (
    <div>
    <div>
      <h1>Your Brand Name</h1>
      <p>Location: Your Location</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <Button innerText="Book A Table"/>
    </div>
    <div>
      <img src="restaurant-image.jpg" alt="Restaurant" />
    </div>
  </div>
  )
}

export default HeroSection