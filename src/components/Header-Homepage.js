import React from 'react'
import Navbar from './Navbar'
import Logo from '../Assests/Logo.svg'
import styles from '../components/MyComponent.module.css'
const Header = (props) => {
 
  return (
    
    <header className={`${styles.header}`}>
    <div >
      <img width={250} src={Logo} alt="Food App Logo"/>
    </div>
    <Navbar/>
    </header>
    
  )
}

export default Header