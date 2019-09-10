import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div id={props.identifier} className="downloadOption">
      <h2>{props.amountOfRam}</h2>
      <p>{props.ramDescription}</p>
      <input type="button" value="Download" className="downloadButton"/>
    </div>
  )
}

export default Header