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
  - Load effect
  - Animation-rotation through project images
  - Fix mobile hover for carousel buttons
  - Hover-over effect for skill icons
  - Add effect to skip Hero upon single scroll
  - Scroll effect
  - Find out how to combine mockup and screen images
  - Optimize Education section
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
      console.log(entry);
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
