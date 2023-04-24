import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Portfolio } from '../Portfolio/Portfolio';
import { Skills } from '../Skills/Skills';
import { Education } from '../Education/Education';
import { Links } from '../Links/Links';

/*
  TODO:
  - Load effect
  - Animation-rotation through project images
  - Fix mobile hover for carousel buttons
  - Education section
  - Hover-over effect for skill icons
  - Add effect to skip Hero upon single scroll
  - Fix glow effect for low res screens
  - Scroll effect
  - Rename sections
  - Fix problem with navbar and mockup images
  - Find out how to combine mockup and screen images
*/

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <Portfolio />
      <Skills />
      <Education />
      <Links />
    </div>
  );
}

export default App;
