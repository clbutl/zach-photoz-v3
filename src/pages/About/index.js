import React from "react";
import './styles.css';
import { motion } from 'framer-motion'
import FillerAbout from '../../assets/filler-about.png'

const About = () => {


  return (
    <motion.div 
      className="main-about-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}  
    >

      <div className="about-left-div">
        <img src={FillerAbout} alt='zach-self'/>
      </div>
      <div className="about-right-div">
        <article className="about-top-article">
          <h1>Zach Slone</h1>
          
          <p>
            <span className="about-header-span">Who I Am:</span>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article className="about-bottom-article">
          <p>
            <span className="about-header-span">Who I Work With:</span>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </article>
      </div>

    </motion.div>
  )
}

export default About;