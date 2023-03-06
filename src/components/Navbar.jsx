import React from 'react'
import "../css/navbar.css";
import {Link} from "react-router-dom"


//
function Navbar() {
  return (
    <div className='navbar-container'>
    <div className="wrapper">
    <nav>
        <h2><Link to="/" className='logo'>H. F. B. C</Link></h2>
        <ul className='nav-links'>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/donate" className='donate-button'>Donate</Link></li>
        </ul>
      </nav>
    </div>
    
    </div>
  )
}

export default Navbar