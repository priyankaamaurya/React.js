import React from 'react'
import './hero.css'
const Startup = () => {
  return (
    <div className="hero">

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Content */}  
      <div className="hero-content">
        <p className="sub-title">Startup 3</p>
        <h3>Forget About Code</h3>
        <p className="description">
          Startup Framework gives you complete freedom over your creative process –
          you don’t have to think about any technical aspects. There are no limits
          and absolutely no coding.
        </p>
 
        <button className="btn">Create an Account</button>
      </div>
    </div>  
    )
}

export default Startup