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

  const switchPage = () => {
    changeNav(true)
  }

  return (
    <div>
      <header>
        {/* Top Left Logo */}
        <div className="logo-name-div">
          <Link className={currentNav ? "logo-nav" : "logo-nav active-mobile-logo"} to='/'>
            <h1 onClick={switchPage} id="1" >
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

        <div onClick={switchPage} className={currentNav ? 'inactive-mobile-nav' : 'active-mobile-nav'}>
          <NavBar
           clickAction = {switchPage}
          />
        </div>
        
      </header>
    </div>
  )
}


export default Header;