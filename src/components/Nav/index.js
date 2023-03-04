import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import InstagramLogo from '../../assets/Instagram-logo-black.PNG'
// import InstagramLogoColored from '../../assets/Instagram-logo-colored.png'

const NavBar = (switchP) => {
  const [currentHash, changeHash] = useState(document.location.hash)
  const [activeCategories, changeActiveCategories] = useState(false)

  // Changes Page Backend Value Based on Navigation Link Clicked
  // const changePage = (e) => {
  //   if (e.target === undefined) return;
  //   if (e.target.id === "1" || e.target.id === 'nav1') {
  //     changeHash('/')
  //     return;
  //   } else if (e.target.id === 'nav3') {
  //     changeHash('/contact')
  //     return;
  //   } changeHash('/about')
  // }

  // Toggles Category Navigation Visability
  const changeCategoryNav = () => {
    changeActiveCategories(!activeCategories)
  }
  const closeCategoryNav = () => {
    changeActiveCategories(false)
  }
  
  document.addEventListener('click', function() {
    changeHash(document.location.hash)
  })

  const switchPage = () => {
    switchP()
  }

  return (
    
    <nav>
      {/* Main Nav */}
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/'>
          <h2 id="nav1" onClick={switchPage} className={currentHash === '#/' || currentHash === '/' || !currentHash ? "active" : "inactive"}>Home</h2>
        </Link>
        <h2 id="nav2" onClick={changeCategoryNav} className={activeCategories ? "active-categories nav-links" : "inactive-categories nav-links"}>
          Categories
        </h2>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/contact'>
          <h2 id="nav3" onClick={switchPage} className={currentHash === '/contact' || currentHash === '#/contact' ? "active" : "inactive"}>Contact</h2>
        </Link>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/about'>
          <h2 id="nav4" onClick={switchPage} className={currentHash === '/about' || currentHash === '#/about' ? "active" : "inactive"}>About</h2>
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
          <Link onClick={closeCategoryNav} className="nav-links" to='/people'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            People
            </h2>
          </Link>
          <Link onClick={closeCategoryNav} className="nav-links" to='/animals'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Animals
            </h2>
          </Link>
          <Link onClick={closeCategoryNav} className="nav-links" to='/sports'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Sports
            </h2>
          </Link>
          <Link onClick={closeCategoryNav} className="nav-links" to='/street'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Street
            </h2>
          </Link>
          <Link onClick={closeCategoryNav} className="nav-links" to='/cars'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Cars
            </h2>
          </Link>
          <Link onClick={closeCategoryNav} className="nav-links" to='/nature'>
            <h2 className={activeCategories ? "active-drop nav-links" : "hidden-drop nav-links"}>
            Nature
            </h2>
          </Link>
        </div>
      </nav>
  )
}

export default NavBar;