import React from 'react';
import './Hero.css';
import RedDownArrow from '../../assets/RedDownArrow.png';

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1 className="hero-title hidden">C<span>ol</span>e <span>Ni</span>ble<span>tt</span></h1>
        <h3 className="hero-subtitle hidden">Frontend <span>Developer</span></h3>
      </div>
      <a className="intro-link hidden" href="#intro-title">
        <h3>Learn More</h3>
      </a>
    </div>
  );
}