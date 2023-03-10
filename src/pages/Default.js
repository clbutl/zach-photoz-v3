import React from "react";
import './default.css'
import { Link } from "react-router-dom";

const DefaultPage = () => {
  

  return (
    <div className="default-page-div">
      <h1>Page Does Not Exist, Yet!</h1>
      <h2>
        Click <Link to='/'>Here</Link> to go Home
      </h2>
    </div>
  )
}

export default DefaultPage;