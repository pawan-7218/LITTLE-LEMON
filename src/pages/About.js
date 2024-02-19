import React from 'react'
import Header from '../components/Header-Homepage'
import styles from '../components/MyComponent.module.css'
import mario from '../Assests/mario.jpg'
import B from '../Assests/B.jpg'
import './about.css'
const About = () => {
  return (
    <div className={styles.aboutsection}>
      <Header/>
      <main>
      <div className={styles.brandinfo}>
      <h1>Little Lemon</h1>
      <p>Location:Chicago</p>
      <p className={styles.ab}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="ownersimages">
      <div className='owner1'><img src={mario} alt="Owner 1" className="ownerimage" /></div>
      <div className='owner2'><img src={B} alt="Owner 2" className="ownerimage" /></div>
    </div>
      </main>
    
  </div>
  )
}

export default About