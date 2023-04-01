import React from 'react';
import './App.css';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Links } from '../Links/Links';
import { Portfolio } from '../Portfolio/Portfolio';

/*
  To-Do
    1. Load effect
    2. Add links to Links
    3. Project images
    4. Animation-rotation through project images
    5. Mobile compatibility for web hover function
    6. Footer
    7. Fix mobile view problems
      a. Can't read intro (even worse than desktop)
      b. Intro title not centered
      c. Links have no outer margins
      d. Click activates info-overly on projects, but can't remove it
*/

function App() {
  return (
    <div className="App">
      <Hero />
      <Intro />
      <Portfolio />
      <Links />
    </div>
  );
}

export default App;
