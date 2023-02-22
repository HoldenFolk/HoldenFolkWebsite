import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'



const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      { /* <Experience/>
      <ThisSite/> */ } 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App