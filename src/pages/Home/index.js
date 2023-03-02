import React from "react";
import './styles.css';
import { motion } from 'framer-motion'

// Filler Image For Elements
import FillerHome from '../../assets/filler-home.png'

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
        <article className="left-a">
          <motion.img className="article-img" whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="people"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>
            PEOPLE
          </motion.figcaption>
        </article>
        <article className="right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="animals"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>ANIMALS</motion.figcaption>
        </article>
      </section>
      {/* Sports & Street */}
      <section>
        <article className="left-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="sports"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>SPORTS</motion.figcaption>
        </article>
        <article className="right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="street"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>STREET</motion.figcaption>
        </article>
      </section>
      {/* Cars & Nature */}
      <section>
        <article className="left-a" to='/cars'>
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="cars"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>CARS</motion.figcaption>
        </article>
        <article className="right-a">
          <motion.img className="article-img" onHoverEnd={fadeIn.imageHoverEnd} whileHover={fadeIn.imageHoverStart} initial={{opacity: 0}} animate={fadeIn.image} src={FillerHome} alt="nature"/>
          <motion.figcaption initial={{opacity: 0}} animate={fadeIn.caption}>NATURE</motion.figcaption>
        </article>
      </section>
    </motion.div>
  )
}

export default Home;