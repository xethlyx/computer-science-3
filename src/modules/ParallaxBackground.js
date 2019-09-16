import React from 'react';
import logo from '../images/vignette.png';

import './ParallaxBackground.css';

const ParallaxBackground = (props) => {
  return (
    <div className="parallax-module-container">
      <div className="parallax-container"></div>
      <img className="parallax-logo" src={logo} alt="" />
      <div className="main-header">
        <h1>Out of RAM?</h1>
        <h3>We offer free RAM download solutions all year!</h3>
      </div>

      <a id="content"></a>
    </div>
  )
}

export default ParallaxBackground