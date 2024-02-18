import React from 'react'
import Button from './Button'
import restra from '../Assests/restauranfood.jpg'
import styles from '../components/MyComponent.module.css'
const HeroSection = () => {
  const pa = {
    font:{maxWidth:'300px'}
  }
  return (
    <div className={styles.hero}>
    <div>
      <h1 className={styles.titles}>Little Lemon</h1>
      <h3 className={styles.subtitles}>Location: Chicago</h3>
      <p className={styles.para} style={pa.font}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam.</p>
      <Button path='/reservation' innerText="Book A Table"/>
    </div>
    <div>
      <img src={restra} alt="Restaurant" />
    </div>
  </div>
  )
}

export default HeroSection