import React from 'react'
import Specials from './Specials'
import Testimonials from './Testimonials'
import HeroSection from './Hero-Section'
import styles from '../components/MyComponent.module.css'

const MainHomepage = (props) => {
    
  return (
   <main className={styles.main}>
    <HeroSection/>
   <Specials/>
   <Testimonials/>
   </main>
   
  )
}

export default MainHomepage