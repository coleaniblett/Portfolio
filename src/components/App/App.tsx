import React from 'react';
import './App.css';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Links } from '../Links/Links';
import { Portfolio } from '../Portfolio/Portfolio';

/*
  To-Do
    1. Load effect
*/

function App() {
  return (
    <div className="App">
      <Hero />
      <Intro />
      <Links />
      <Portfolio />
    </div>
  );
}

export default App;
