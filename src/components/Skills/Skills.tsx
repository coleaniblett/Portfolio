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
      <h6 className="skills-title hidden">Skills</h6>
      <div className="skills-icon-container hidden">
        <div className="icon html5">
          <img src={HTML5} alt="HTML5" />
          <div className="icon-text-container">
            <h5>HTML5</h5>
          </div>
        </div>
        <div className="icon css3">
          <img src={CSS3} alt="CSS3" />
          <div className="icon-text-container">
            <h5>CSS3</h5>
          </div>
        </div>
        <div className="icon bootstrap">
          <img src={Bootstrap} alt="Bootstrap" />
          <div className="icon-text-container">
            <h5>Bootstrap CSS</h5>
          </div>
        </div>
        <div className="icon javascript">
          <img src={JavaScript} alt="JavaScript" />
          <div className="icon-text-container">
            <h5>JavaScript</h5>
          </div>
        </div>
        <div className="icon typescript">
          <img src={TypeScript} alt="TypeScript" />
          <div className="icon-text-container">
            <h5>TypeScript</h5>
          </div>
        </div>
        <div className="icon react">
          <img src={ReactIcon} alt="React" />
          <div className="icon-text-container">
            <h5>React</h5>
          </div>
        </div>
      </div>
    </div>
  );
}