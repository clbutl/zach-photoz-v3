import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Nav";
import './styles.css';

const Header = () => {
  const [currentNav, changeNav] = useState(true)
  document.title = 'Zach Photoz'


  // Toggles Mobile Navigation
  const navigationChange = () => {
    changeNav(!currentNav)
  }
  
  return (
    <div>
      <header>
        {/* Top Left Logo */}
        <div className="logo-name-div">
          <Link className="logo-nav" to='/'>
            <h1 id="1" >
              ZACH PHOTOZ
            </h1>
          </Link>
        </div>
    
  
        <div className='desktop-nav'>
          <NavBar/>
        </div>
      
        {/* Mobile Dropdown */}
        <div className="navigation-dropdown hide-drop" onClick={navigationChange}>
          <div id={currentNav ? '' : 'nav-dropdown-1'}></div>
          <div id={currentNav ? '' : 'nav-dropdown-2'}></div>
          <div id={currentNav ? '' : 'nav-dropdown-3'}></div>
        </div>

        <div className="mobile-menu">
          <p>hji</p>
        </div>
        
      </header>
    </div>
  )
}

export default Header;