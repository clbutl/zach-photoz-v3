import React from "react";
import './styles.css';
import FillerImage from '../../../assets/filler-home.png'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const People = () => {


  return (
    <motion.div 
      className="main-people-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Seniors */}
      <section className="seniors-section">
        <div className="peoples-div">
          <img className="seniors-image" src={FillerImage} alt='seniorPicture'/>
          <Link to='/people/seniors' className="people-description-div seniors-description">
            <h1>Seniors</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Link>
        </div>
      </section>
      
      {/* Couples */}
      <section className="couples-section">
        <div className="peoples-div">
          <img className="couples-image" src={FillerImage} alt='couplesPicture'/>
          <Link to='/people/couples' className="people-description-div couples-description">
            <h1>Couples</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default People;