import React from "react";
import "./styles.css"
import FillerImage from '../../../assets/filler-home.png'

const Animals = () => {


  return (
    <div className="main-animals-div">
      {/* Top Animals Section */}
      <section className="animals-top-section">
        <div className="animals-description-div">
          <h1>Animals</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="animals-image-div">
          <img src={FillerImage} alt="mainAnimalPicture"/>
        </div>
      </section>
      {/* Top Animals Section */}
      <section>

      </section>
    </div>
  )
}

export default Animals;