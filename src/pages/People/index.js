import React from "react";
import './styles.css';
import FillerImage from '../../assets/filler-home.png'

const People = () => {


  return (
    <div className="main-people-div">
      {/* Seniors */}
      <section className="seniors-section">
        <div className="peoples-div">
          <img className="seniors-image" src={FillerImage} alt='seniorPicture'/>
          <div className="people-description-div seniors-description">
            <h1>Seniors</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      
      {/* Couples */}
      <section className="couples-section">
        <div className="peoples-div">
          <img className="couples-image" src={FillerImage} alt='couplesPicture'/>
          <div className="people-description-div couples-description">
            <h1>Couples</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default People;