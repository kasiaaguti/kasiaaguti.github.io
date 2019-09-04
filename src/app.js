import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'




import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Places from './components/Places'
import Contact from './components/Contact'



const App = () => {
  return (

      <main>
        <NavBar />
      <Home />




      </main>

  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
