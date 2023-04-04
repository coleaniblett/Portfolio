import React from 'react';
import './Links.css';
import LinkedIn from '../../assets/LinkedIn.png';
import GitHub from '../../assets/GitHub.png';
import Email from '../../assets/Email.png';

export const Links: React.FC = () => {
  return (
    <div className="links">
      <div className="contact-icon LinkedIn-icon">
        <a href="https://linkedin.com/coleaniblett"><img src={LinkedIn} alt="LinkedIn icon" /></a>
      </div>
      <div className="contact-icon GitHub-icon">
        <a href="https://github.com/coleaniblett"><img src={GitHub} alt="GitHub icon" /></a>
      </div>
      <div className="contact-icon">
        <a href="mailto:coleaniblett@gmail.com"><img src={Email} alt="Email icon" /></a>
      </div>
    </div>
  );
}