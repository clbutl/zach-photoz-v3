import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Header = () => {
  

  return (
    <header>
      <div className="logo-name-div">
        <h1>ZACH PHOTOZ</h1>
      </div>
      <nav>
        <Link className="nav-links">
          <h2>Home</h2>
        </Link>
        <h2 className="nav-links">
          Categories
        </h2>
        <Link className="nav-links">
          <h2>Contact</h2>
        </Link>
        <Link className="nav-links">
          <h2>About</h2>
        </Link>
      </nav>
    </header>
  )
}

export default Header;