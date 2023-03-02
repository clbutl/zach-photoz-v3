import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import InstagramLogo from '../../assets/Instagram-logo-black.PNG'
// import InstagramLogoColored from '../../assets/Instagram-logo-colored.png'

const NavBar = (props) => {
  const [currentHash, changeHash] = useState(document.location.hash)
  const [activeCategories, changeActiveCategories] = useState(false)
  // const [currentNav, changeNav] = useState(true)

  // Changes Page Backend Value Based on Navigation Link Clicked
  const changePage = (e) => {
    if (e.target.id === "1" || e.target.id === 'nav1') {
      changeHash('/')
      return;
    } else if (e.target.id === 'nav3') {
      changeHash('/contact')
      return;
    } changeHash('/about')
  }

  // Toggles Category Navigation Visability
  const changeCategoryNav = () => {
    changeActiveCategories(!activeCategories)
  }

  // Toggles Mobile Navigation
  // const navigationChange = () => {
  //   changeNav(!currentNav)
  // }

  document.addEventListener('click', function() {
    changeHash(document.location.hash)
  })

  return (
    
    <nav>
      {/* Main Nav */}
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/'>
          <h2 id="nav1" onClick={changePage} className={currentHash === '#/' || currentHash === '/' || !currentHash ? "active" : "inactive"}>Home</h2>
        </Link>
        <h2 id="nav2" onClick={changeCategoryNav} className={activeCategories ? "active-categories nav-links" : "inactive-categories nav-links"}>
          Categories
        </h2>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/contact'>
          <h2 id="nav3" onClick={changePage} className={currentHash === '/contact' || currentHash === '#/contact' ? "active" : "inactive"}>Contact</h2>
        </Link>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/about'>
          <h2 id="nav4" onClick={changePage} className={currentHash === '/about' || currentHash === '#/about' ? "active" : "inactive"}>About</h2>
        </Link>
        <Link 
          target='_blank' 
          className={activeCategories ? "hidden nav-links" : "not-hidden nav-links instagram-logo"}
          onClick={() => {
            window.open('https://www.instagram.com/zach__photoz/', '_blank')
          }}
        >
          <img className="instagram-link" height="24px" src={InstagramLogo} alt="instagram"/>
        </Link>



        {/* Categories */}
        <div className={activeCategories ? "active-dropdown-div" : "dropdown-div"}>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            People
          </h2>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Animals
          </h2>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Sports
          </h2>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Street
          </h2>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Cars
          </h2>
          <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Nature
          </h2>
        </div>
      </nav>
  )
}

export default NavBar;