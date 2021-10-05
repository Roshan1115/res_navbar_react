import React from 'react'
import './app.css'
import Navbar from './components/navbar'
import {Switch, Route} from 'react-router-dom'

const Home = ()=> {
  return(
    <>
    <Navbar />
    <section className="hero-section">
        <p>Welcome to</p>
        <h1>Roshan's site. This is Home page</h1>
      </section>
    </>
  )
}
const About = ()=> {
  return(
    <>
    <Navbar />
    <section className="hero-section">
        <p>Welcome to</p>
        <h1>Roshan's site. This is About page</h1>
      </section>
    </>
  )
}
const Services = ()=> {
  return(
    <>
    <Navbar />
    <section className="hero-section">
        <p>Welcome to</p>
        <h1>Roshan's site. This is Services page</h1>
      </section>
    </>
  )
}
const Contact = ()=> {
  return(
    <>
    <Navbar />
    <section className="hero-section">
        <p>Welcome to</p>
        <h1>Roshan's site. This is Contact page</h1>
      </section>
    </>
  )
}

const App = ()=> {
  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      
      <Route exact path="/about">
        <About/>
      </Route>

      <Route exact path="/services">
        <Services/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>
    </Switch>
  )
}

export default App;