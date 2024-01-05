import React from 'react';
import './Hero.css';
import portrait from '../../assets/images/portrait.png';

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className='portrait-wrapper'>
        <img className="portrait" src={portrait} alt="Cole Niblett" aria-label="Portrait of Cole Niblett" />
      </div>
      <div className="hero-text-wrapper">
        <h3 className="hero-pre-text">Hi, I'm</h3>
        <h1 className="hero-title">Cole Niblett</h1>
        <h5 className="hero-post-text">I build user-focused interfaces for the web</h5>
        <p className="hero-welcome">And if you're reading this, I'm glad you're here.</p>
        <hr></hr>
        <div className="button-wrapper">
        <button className="button hero-button" onClick={() => window.open("https://github.com/coleaniblett", "_blank")}>GitHub</button>
        <button className="button hero-button" onClick={() => window.open("https://www.linkedin.com/in/cole-niblett-9742b9156/", "_blank")}>LinkedIn</button>
        <button className="button hero-button" onClick={() => window.location.href = "mailto:coleaniblett@gmail.com"}>Email</button>
          {/*<a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
  <a href="mailto:your-email@example.com" className="button">Email</a>*/}
        </div>
      </div>
    </div>
  );
}