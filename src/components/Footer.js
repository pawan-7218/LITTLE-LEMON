import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="brand-logo">
      <img src="brand-logo.png" alt="Brand Logo" />
    </div>
    <nav className="doormat-navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div className="contact-info">
      <p>123 Main Street, City</p>
      <p>Email: info@example.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
    <div className="social-media-links">
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  </footer>
  )
}

export default Footer