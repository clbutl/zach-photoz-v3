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
              As you embark on your senior year, you're stepping into a time of life that you'll always cherish. That's why your senior pictures should be more than just photos; they should be a reflection of your unique personality and capture the essence of this important year.
              <br/>
              I'm dedicated to helping your pictures stand out and represent who you truly are. Let's work together to create images that you'll love and look back on with joy for years to come.            
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
              As a couple, you're embarking on a journey together that will be filled with unforgettable moments. Whether you're just starting out or you've been together for years, your love story is unique and deserves to be captured in a way that reflects who you are as a couple.
              <br/>
              I'm dedicated to creating images that not only document your love but also capture the essence of your relationship. I'll work with you to create photos that are a true reflection of your love for one another.
            </p>
          </Link>
        </div>
      </section>
    </motion.div>
  )
}

export default People;