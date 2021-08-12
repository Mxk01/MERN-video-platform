import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Navbar() {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li>
            <Link  to="/upload">Upload</Link>
          </li>
        
        </ul>
      </nav>
    )
}

export default Navbar
