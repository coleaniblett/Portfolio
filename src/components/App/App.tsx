import React, { useEffect, useRef } from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Hero } from '../Hero/Hero';
import { Intro } from '../Intro/Intro';
import { Portfolio } from '../Portfolio/Portfolio';
import { Skills } from '../Skills/Skills';
import { Education } from '../Education/Education';
import { Contact } from '../Contact/Contact';

/*
  TODO:
  - Animation-rotation through project images (cool feature)
  - Fix mobile hover for carousel info (mobile bug)
  - Add effect to skip Hero upon single scroll (cool feature)
  - Find out how to combine mockup and screen images (significant feature quality issue)
*/

function App() {
  const hiddenElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElementsRef.current = hiddenElements;
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
