import React from 'react'
// import { Link } from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'

import Places from './Places'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Home from './Home'


class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)

  }


  toggleNavbar() {
    console.log(this.props)
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (



              <nav className="navbar cream navbar is-fixed-top">

                <div className="navbar-brand">
                    <a  href="#contact" id="logo" target="_blank"></a>



                <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
                <div className="navbar-end cream">


                  <div className="navbar-item">
                    <a className="navbar-item" href="#contact">Contact </a>
                </div>


                  <div className="navbar-item">
                    <a className="navbar-item" href="#projects">Projects</a>
                  </div>

                  <div className="navbar-item">
                    <a className="navbar-item" href="#about">About</a>
                  </div>

                  <div className="navbar-item">
                    <a className="navbar-item" href="#places">
            Travel Photos</a>
                </div>


                      <a  href="https://github.com/kasiaaguti/" id="github-icon" target="_blank"></a>
                      <a  href="https://www.linkedin.com/in/kasia-wypychewicz/" id="liknedin-icon" target="_blank"></a>




                </div>
              </div>
              </nav>







    )
  }
}

export default NavBar


/* <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
      <div className="navbar-end cream">
        <div className="navbar-item"> <a href="#places">
Places </a>
        </div> */
