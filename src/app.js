import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'




import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Places from './components/Places'
import Contact from './components/Contact'
import About from './components/About'



const App = () => {
  return (

      <main className="has-navbar-fixed-top">
        <NavBar />
      <Home />




      </main>

  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
