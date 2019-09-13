import React, { Component } from 'react';

class Index extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h2>Is your computer slow?</h2>
				<p>Often times, when a lot of apps are crashing, it'll be because you're out of RAM!</p>
        
        <h2>Want to download?</h2>
        <p>First, you'll have to see <a href="http://ismycomputeron.com/" target="_blank" rel="noopener noreferrer">if your computer is on</a>. Once you've confirmed that your computer is on, head over to the Downloads page and see how much RAM you want to download. More RAM means more power as the computer has to keep sending electricity to keep the data in memory, so choose appropiately!</p>
      </div>
    )
  }
}

export default Index;