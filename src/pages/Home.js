import React, { Component } from 'react';
import computerMemory from '../images/computer-memory.jpg';

class Index extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h2>Is your computer slow?</h2>
				<p>Often times, when a lot of apps are crashing, it'll be because you're out of RAM, and the computer is using the slower, hard drive as a subsitute! You may ask, how do you fix this? The answer is simple: Get more RAM! If you have more RAM the system won't need to use your slower hard drive because it's out.</p>
        
        <h2>Want to download?</h2>
        <p>First, you'll have to see <a href="http://ismycomputeron.com/" target="_blank" rel="noopener noreferrer">if your computer is on</a>. Once you've confirmed that your computer is on, head over to the Downloads page and see how much RAM you want to download. More RAM means more power as the computer has to keep sending electricity to keep the data in memory, so choose appropiately!</p>
        <p>After you've downloaded the RAM, run <code>Click_to_install.bat</code>. Follow through the instructions listed and agree to the EULA. Then, proceed to restart your computer. Once you're done, you should see your extra RAM!</p>

        <br /><br />

        <div className="center-content">
          <img className="content-image" src={computerMemory} alt="Computer Memory Sticks" />
        </div>
      </div>
    )
  }
}

export default Index;