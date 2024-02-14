import React from 'react'
import Header from '../components/Header-Homepage'
import MainHomepage from '../components/MainHomepage'
import Footer from '../components/Footer'
import styles from '../components/MyComponent.module.css'
const Homepage = () => {
  
  return (
    <div className={styles.container}>
     <Header className="header"/>
     <MainHomepage className="main"/>

     <Footer className="footer"/>
</div>
    
   
  )
}

export default Homepage