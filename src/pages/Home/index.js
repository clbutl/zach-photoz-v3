import React from "react";
import './styles.css';
import { motion } from 'framer-motion'

// Filler Image For Elements
import FillerHome from '../../assets/filler-home.png'
import { Link } from "react-router-dom";

const Home = () => {
  const fadeIn = {
    caption: {
      opacity: 1,
      transition: {
        delay: .1,
        duration: .4
      }
    },
    image: {
      opacity: 1,
      transition: {
        delay: .4,
        duration: .3
      }
    },
    imageHoverStart: {
      opacity: .75,
      transition: {
        delay: 0,
        duration: .3
      }
    }
  }

  return (
    <motion.div 
      className="main-home-div"
      exit={{opacity: 0}}  
    >
      {/* People & Animals */}
      <section>
        <Link to='/people' className="article left-a">
          <motion.img className="article-img" whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="people"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            PEOPLE
          </motion.figcaption>
        </Link>
        <Link to='animals' className="article right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="animals"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            ANIMALS
          </motion.figcaption>
        </Link>
      </section>
      {/* Sports & Street */}
      <section>
        <Link to='sports' className="article left-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="sports"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            SPORTS
          </motion.figcaption>
        </Link>
        <Link to='street' className="article right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="street"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            STREET
          </motion.figcaption>
        </Link>
      </section>
      {/* Cars & Nature */}
      <section>
        <Link to='cars' className="article left-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="cars"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            CARS
          </motion.figcaption>
        </Link>
        <Link to='nature' className="article right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="nature"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            NATURE
          </motion.figcaption>
        </Link>
      </section>
    </motion.div>
  )
}

export default Home;