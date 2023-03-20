import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1>C<span>ol</span>e <span>Ni</span>ble<span>tt</span></h1>
        <h3>Frontend <span>Developer</span></h3>
      </div>
    </div>
  );
}