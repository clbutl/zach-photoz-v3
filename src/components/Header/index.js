import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Header = () => {
  const [currentHash, changeHash] = useState(document.location.hash)

  const changePage = (e) => {
    if (e.target.id === "1") {
      changeHash('/')
      return;
    } else if (e.target.id === '3') {
      changeHash('/contact')
      return;
    } changeHash('/about')
  }

  return (
    <header>
      <div className="logo-name-div">
        <Link className="logo-nav" to='/'>
          <h1 id="1" onClick={changePage}>ZACH PHOTOZ</h1>
        </Link>
      </div>
      <nav>
        <Link className="nav-links" to='/'>
          <h2 id="1" onClick={changePage} className={currentHash === '#/' || currentHash === '/' || !currentHash ? "active" : "inactive"}>Home</h2>
        </Link>
        <h2 className="inactive nav-links">
          Categories
        </h2>
        <Link className="nav-links" to='/contact'>
          <h2 id="3" onClick={changePage} className={currentHash === '/contact' || currentHash === '#/contact' ? "active" : "inactive"}>Contact</h2>
        </Link>
        <Link className="nav-links" to='/about'>
          <h2 id="4" onClick={changePage} className={currentHash === '/about' || currentHash === '#/about' ? "active" : "inactive"}>About</h2>
        </Link>
      </nav>
    </header>
  )
}

export default Header;