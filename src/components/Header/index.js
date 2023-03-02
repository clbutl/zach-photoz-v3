import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Header = () => {
  const currentPath = document.location.pathname

  return (
    <header>
      <div className="logo-name-div">
        <h1>ZACH PHOTOZ</h1>
      </div>
      <nav>
        <Link className="nav-links">
          <h2 className={currentPath === '/' ? "active" : "inactive"}>Home</h2>
        </Link>
        <h2 className="inactive nav-links">
          Categories
        </h2>
        <Link className="nav-links">
          <h2 className={currentPath === '/contact' ? "active" : "inactive"}>Contact</h2>
        </Link>
        <Link className="nav-links">
          <h2 className={currentPath === '/about' ? "active" : "inactive"}>About</h2>
        </Link>
      </nav>
    </header>
  )
}

export default Header;