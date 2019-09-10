import React, { Component } from 'react';
import './App.css';

import ParallaxBackground from './modules/ParallaxBackground';
import Header from './modules/Header';

import Home from './pages/Home';
import Download from './pages/Download';
import Contact from './pages/Contact';
import About from './pages/About'

class App extends Component {
  state = {
    currentPage : "Home",
    headerDocked : true,
    previousPage : "Home",
    animCounter : 1
  };

  Components = {
    Home : Home,
    Download : Download,
    Contact : Contact,
    About : About
  }

  handleChangePage = (e) => {
    if (this.state.currentPage !== e.currentTarget.id) {
      this.setState({
        previousPage : this.state.currentPage,
        currentPage : e.currentTarget.id,
        animCounter : this.state.animCounter + 1
      })
    }
  }

  componentDidMount() {
    document.getElementById("root").addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.getElementById("root").removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = document.getElementById("navbar").offsetTop

    if (window.innerHeight - scrollTop !== 52) {
      if (this.state.headerDocked !== false ) {
        this.setState({
          headerDocked: false
        });
      }
    } else {
      if (this.state.headerDocked !== true) {
        this.setState({
          headerDocked: true
        });
      }
    }
  }

  handleTransitionVisibility = (content) => {
    var currentAnimClass = "anim-" + content + "-" + (this.state.animCounter % 2 + 1)

    if ((this.state.previousPage === this.state.currentPage) && (content === "old")) {
      return("content hidden " + content + "-content " + currentAnimClass)
    } else {
      return("content " + content + "-content " + currentAnimClass)
    }
  }

  render() {
    var CurrentPageComponent = this.Components[this.state.currentPage]
    var PreviousPageComponent = this.Components[this.state.previousPage]

    return(
      <div className="App">
        <ParallaxBackground />
        <Header handleChangePage={this.handleChangePage} currentPage={this.state.currentPage} docked={this.state.headerDocked}/>
        <div className="content-container">
          <div className={this.handleTransitionVisibility("current")}>
            <CurrentPageComponent />
          </div>
          <div unselectable="on" className={this.handleTransitionVisibility("old")}>
            <PreviousPageComponent />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
