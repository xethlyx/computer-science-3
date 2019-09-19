import React, { Component } from 'react';

class Index extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <h2>Enterprise</h2>
				<p>Looking for solutions for your entire organization? We offer ways to download RAM on all connected machines at once, remotely. Contact us at our contact link to request an enterprise solution, with the form below.</p>
        <form className="contact">
          <input type="text" id="name" placeholder="What is your name/company?" autoComplete="off"/>
          <input type="text" id="contact-back" placeholder="How should we contact you?" autoComplete="off"/>
          <textarea id="message" placeholder="Your message here"></textarea>
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Index;