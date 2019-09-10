import React, { Component } from 'react';
import RamOption from '../modules/RamOption'

class Index extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h2>Download</h2>
				<p>We offer the highest quality RAM available on the market!</p>
        <br /><br />
        <div className="ram-container">
          <RamOption amountOfRam="2GB DDR3" ramDescription="Enough to get you up and running Windows 10 S!"/>
          <RamOption amountOfRam="4GB DDR3" ramDescription="This quality RAM allows simple web browsing!"/>
          <RamOption amountOfRam="8GB DDR3" ramDescription="Enough to open quite a few tabs in Chrome."/>
          <RamOption amountOfRam="8GB DDR4" ramDescription="CPU not compatiable with DDR3? Obtain some of this quality DDR4!"/>
          <RamOption amountOfRam="16GB DDR4" ramDescription="Need to play games and edit videos? Download this package!"/>
        </div>
      </div>
    )
  }
}

export default Index;