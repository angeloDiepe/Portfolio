import React from 'react';
import Nav from '../../components/Nav/Nav.js'
import Intro from '../../components/Intro/Intro.js'
import About from '../../components/About/About.js'
import Skills from '../../components/Skills/Skills.js'
import Portfolio from '../../components/Portfolio/Portfolio.js'
import Contact from '../../components/Contact/Contact.js'
import './App.css';

function App() {
  return (
    <div id="app">
      <Nav/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>                                                                                                                                                                                                                                                                                                                                                                                                            
    </div>
  );
}

export default App;
