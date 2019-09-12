import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div id={props.identifier} className="downloadOption">
      <h2>{props.amountOfRam}</h2>
      <p>{props.ramDescription}</p>
      <a href="../download.bat" download="Click_to_install.bat"><input type="button" value="Download" className="downloadButton"/></a>
    </div>
  )
}

export default Header