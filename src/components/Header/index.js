import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Header = () => {
  const [currentHash, changeHash] = useState(document.location.hash)
  const [activeCategories, changeActiveCategories] = useState(false)

  const changePage = (e) => {
    if (e.target.id === "1") {
      changeHash('/')
      return;
    } else if (e.target.id === '3') {
      changeHash('/contact')
      return;
    } changeHash('/about')
  }

  const changeCategoryNav = () => {
    changeActiveCategories(!activeCategories)
  }
//  className={activeCategories ? "category-header" : "normal-header"}
  return (
    <header>
      <div className="logo-name-div">
        <Link className="logo-nav" to='/'>
          <h1 id="1" onClick={changePage}>ZACH PHOTOZ</h1>
        </Link>
      </div>
      <nav>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/'>
          <h2 id="1" onClick={changePage} className={currentHash === '#/' || currentHash === '/' || !currentHash ? "active" : "inactive"}>Home</h2>
        </Link>
        <h2 onClick={changeCategoryNav} className={activeCategories ? "active-categories nav-links" : "inactive-categories nav-links"}>
          Categories
        </h2>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/contact'>
          <h2 id="3" onClick={changePage} className={currentHash === '/contact' || currentHash === '#/contact' ? "active" : "inactive"}>Contact</h2>
        </Link>
        <Link className={activeCategories ? "hidden nav-links" : "not-hidden nav-links"} to='/about'>
          <h2 id="4" onClick={changePage} className={currentHash === '/about' || currentHash === '#/about' ? "active" : "inactive"}>About</h2>
        </Link>




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
      </nav>
    </header>
  )
}

export default Header;