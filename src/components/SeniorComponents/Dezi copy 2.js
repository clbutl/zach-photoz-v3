import React from "react";
import './styles.css';

import MainPic from '../../assets/MainSeniors/dezi-main.jpg'

const DeziSenior2 = () => {


  return (
    <div className="individual-seniors">
      <div className="individual-senior-img-div">
        <img src={MainPic} alt="dezi-main"/>
        <h1>Dezi</h1>
      </div>
    </div>
  )
}

export default DeziSenior2;