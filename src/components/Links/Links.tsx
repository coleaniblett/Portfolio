import React from 'react';
import './Links.css';
import LinkedIn from '../../assets/LinkedIn.png';
import GitHub from '../../assets/GitHub.png';
import Email from '../../assets/Email.png';

export const Links: React.FC = () => {
  return (
    <div className="links">
      <div className="contact-icon LinkedIn-icon">
        <img src={LinkedIn}></img>
      </div>
      <div className="contact-icon GitHub-icon">
        <img src={GitHub}></img>
      </div>
      <div className="contact-icon">
        <img src={Email}></img>
      </div>
    </div>
  );
}