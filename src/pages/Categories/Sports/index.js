import React from "react";
import './styles.css';
import FillerImage from '../../../assets/filler-home.png'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const Sports = () => {


  return (
    <motion.div
      className="main-sports-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Track */}
      <section className="track-section">
        <div className="sports-div">
          <img className="track-image" src={FillerImage} alt='trackPicture'/>
          <Link to='/sports/track' className="sports-description-div track-description">
            <h1>Track</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Link>
        </div>
      </section>
      
      {/* XC */}
      <section className="xc-section">
        <div className="sports-div">
          <img className="xc-image" src={FillerImage} alt='CrossCountryPicture'/>
          <Link to='/sports/xc' className="sports-description-div xc-description">
            <h1>Cross Country</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Link>
        </div>
      </section>
      
      {/* Football */}
      <section className="football-section">
        <div className="sports-div">
          <img className="football-image" src={FillerImage} alt='footballPicture'/>
          <Link to='/sports/football' className="sports-description-div football-description">
            <h1>Football</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default Sports;