import React from "react";
import "./styles.css"
import "../../subcat.css"
import FillerImage from '../../../../assets/filler-home.png'

const Track = () => {


  return (
    <div className="main-subcat-div">
      {/* Top Animals Section */}
      <section className="subcat-top-section">
        <div className="subcat-description-div">
          <h1>Track & Field</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="subcat-image-div">
          <img src={FillerImage} alt="mainAnimalPicture"/>
        </div>
      </section>
      {/* Top Animals Section */}
      <section className="subcat-middle-section">
        <div>
          
        </div>
        <div>
          
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}

export default Track;