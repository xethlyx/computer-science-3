import React, { Component } from 'react';

class Index extends Component {
  state = {
    video : false
  };

  showVideo = () => {
    if (this.state.video) {
      this.setState({
        video: false
      });
    } else {
      this.setState({
        video: true
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
				<p>Do you have problems with your instant RAM download? Simply contact us at <a href="mailto:example@example.com">example@example.com</a>. We'll have matters resolved within 9000 hours.
        <br /><br /><a href="#video" onClick={this.showVideo}>Learn More</a><br /><br />
        { this.state.video && 
          <iframe title="youtube video" width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }
        </p>
      </div>
    )
  }
}

export default Index;