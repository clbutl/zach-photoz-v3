import React from "react";
import './styles.css';
import FillerImage from '../../assets/filler-home.png'

const Sports = () => {


  return (
    <div className="main-sports-div">
      {/* Track */}
      <section className="track-section">
        <div className="sports-div">
          <img className="track-image" src={FillerImage} alt='trackPicture'/>
          <div className="sports-description-div track-description">
            <h1>Track</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      
      {/* XC */}
      <section className="xc-section">
        <div className="sports-div">
          <img className="xc-image" src={FillerImage} alt='CrossCountryPicture'/>
          <div className="sports-description-div xc-description">
            <h1>Cross Country</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
      
      {/* Football */}
      <section className="football-section">
        <div className="sports-div">
          <img className="football-image" src={FillerImage} alt='footballPicture'/>
          <div className="sports-description-div football-description">
            <h1>Football</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sports;