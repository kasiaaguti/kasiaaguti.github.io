import React from 'react'
import { Link, withRouter } from 'react-router-dom'


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
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (


        <nav className="navbar cream navbar is-fixed-top">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item"><strong>Kasia Wypychewicz</strong></Link>

          <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
    <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end cream">
            <div className="navbar-item">
              <Link to="/about" className="navbar-item">About</Link>
            </div>
            <div className="navbar-item">
              <Link to="/projects" className="navbar-item">Projects</Link>
            </div>
            <div className="navbar-item">
              <Link to="/map" className="navbar-item">Photogrtaphy</Link>
          </div>
              <div className="navbar-item">
                <Link to="/contact" className="navbar-item">Contact</Link>
            </div>
                <a  href="https://github.com/kasiaaguti/" id="github-icon" target="_blank"></a>
                <a  href="https://www.linkedin.com/in/kasia-wypychewicz/" id="liknedin-icon" target="_blank"></a>




          </div>
        </div>
        </nav>




    )
  }
}

export default withRouter(NavBar)