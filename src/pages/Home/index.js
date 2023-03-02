import React from "react";
import './styles.css';

// Filler Image For Elements
import FillerHome from '../../assets/filler-home.png'

const Home = () => {


  return (
    <div className="main-home-div">
      {/* People & Animals */}
      <section>
        <article className="left-a">
          <img src={FillerHome} alt="people"/>
          <figcaption>PEOPLE</figcaption>
        </article>
        <article className="right-a">
          <img src={FillerHome} alt="animals"/>
          <figcaption>ANIMALS</figcaption>
        </article>
      </section>
      {/* Sports & Street */}
      <section>
        <article className="left-a">
          <img src={FillerHome} alt="sports"/>
          <figcaption>SPORTS</figcaption>
        </article>
        <article className="right-a">
          <img src={FillerHome} alt="street"/>
          <figcaption>STREET</figcaption>
        </article>
      </section>
      {/* Cars & Nature */}
      <section>
        <article className="left-a">
          <img src={FillerHome} alt="cars"/>
          <figcaption>CARS</figcaption>
        </article>
        <article className="right-a">
          <img src={FillerHome} alt="nature"/>
          <figcaption>NATURE</figcaption>
        </article>
      </section>
    </div>
  )
}

export default Home;