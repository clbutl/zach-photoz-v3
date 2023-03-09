import React from "react";
import './styles.css';

import MainPic from '../../assets/MainSeniors/dezi-main.jpg'
import { Link } from "react-router-dom";

const DeziSenior = () => {


  return (
    <div className="individual-seniors">
      <Link to='/people/seniors/dezi' className="seniors-link">
        <div className="individual-senior-img-div">
          <img src={MainPic} alt="dezi-main"/>
          <h1>Dezi</h1>
        </div>
      </Link>
    </div>
  )
}

export default DeziSenior;