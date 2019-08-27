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
      <section>
        <nav className="navbar lightblue" role="navigation" aria-label="main navigation">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>


          <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-item">
            <Link to="/" className="navbar-item"><strong>Kasia Wypychewicz</strong></Link>
          </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/about" className="navbar-item">About</Link>
              </div>
              <div className="navbar-item">
                <Link to="/projects" className="navbar-item">Projects</Link>
              </div>
              <div className="navbar-item">
                <Link to="/map" className="navbar-item">Map</Link>
              </div>



            </div>
          </div>
        </nav>
      </section>



    )
  }
}

export default withRouter(NavBar)
