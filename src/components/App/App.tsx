import React, { useEffect, useRef } from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Hero } from '../Hero/Hero';
import { Welcome } from '../Welcome/Welcome';
import { Portfolio } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import { Education } from '../Education/Education';
import { Contact } from '../Contact/Contact';

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
    <div className="App" id="start">
      <Navbar />
      <Hero />
      <Welcome />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
