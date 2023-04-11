import React from 'react';
import './Skills.css';
import HTML5 from '../../assets/SkillIcons/HTML5.png';
import CSS3 from '../../assets/SkillIcons/CSS3.png';
import Bootstrap from '../../assets/SkillIcons/Bootstrap.png';
import JavaScript from '../../assets/SkillIcons/JavaScript.png';
import TypeScript from '../../assets/SkillIcons/TypeScript.png';
import ReactIcon from '../../assets/SkillIcons/ReactIcon.png';

export const Skills: React.FC = () => {
  return (
    <div className="skills" id="skills">
      <h6>Skills</h6>
      <div className="skills-icon-container">
        <div className="icon html5">
          <img src={HTML5} alt="HTML5" />
        </div>
        <div className="icon css3">
          <img src={CSS3} alt="CSS3" />
        </div>
        <div className="icon bootstrap">
          <img src={Bootstrap} alt="Bootstrap" />
        </div>
        <div className="icon javascript">
          <img src={JavaScript} alt="JavaScript" />
        </div>
        <div className="icon typescript">
          <img src={TypeScript} alt="TypeScript" />
        </div>
        <div className="icon react">
          <img src={ReactIcon} alt="React" />
        </div>
      </div>
    </div>
  );
}