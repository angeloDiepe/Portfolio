import React from 'react';
import Nav from '../../components/Nav/Nav.js'
import Intro from '../../components/Intro/Intro.js'
import About from '../../components/About/About.js'
import Skills from '../../components/Skills/Skills.js'
import './App.css';

function App() {
  return (
    <div className="container">
      <Nav/>
      <Intro/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
