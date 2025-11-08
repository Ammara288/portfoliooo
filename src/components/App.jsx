import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'


function App() {
  return (
    <div >
      <Navbar />
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact/>
    <Footer />
 
    </div>
  )
}

export default App

