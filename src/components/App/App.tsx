import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { Hero } from '../Hero/Hero';
import { Portfolio } from '../ProjectGallery/ProjectGallery';
import { Skills } from '../SkillGallery/SkillGallery';
import { Education } from '../Education/Education';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className="App" id="start">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
