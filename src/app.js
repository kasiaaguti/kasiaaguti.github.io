import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'


import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Places from './components/Places'




const App = () => {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        <Route path="/map" component={Places} />

        </Switch>
      </main>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
