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
            Hello and welcome to my website! I'm Zach Slone, a passionate photographer based in Galion, Ohio, currently pursuing an art degree with a minor in photography at Bluffton University. I take pictures for the Track and Field and Cross Country teams, which are used on <a target="_blank" rel="noreferrer" href="https://www.blufftonbeavers.com/sports/mtrack/index">Men's Track & Field - Bluffton University</a>, allowing me to combine my love for sports and photography.
            <p>
            To me, photography is more than just taking pictures - it's about capturing moments, emotions, and telling a story through images. My ultimate goal as a photographer is to create images that not only look beautiful but also bring out the personality of my clients. 
            </p>
          
          </p>
        </article>
      </div>

    </motion.div>
  )
}

export default About;