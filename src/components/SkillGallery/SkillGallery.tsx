import React from 'react';
import './SkillGallery.css';
import { SkillsArray } from "../../util/Skills";
import { Skill } from './Skill/Skill';

export const Skills: React.FC = () => {

  return (
    <div className="skills" id="skills">
      <h6 className="skills-title hidden">Skills</h6>
      <div className="flex-display">
      {SkillsArray.map(skill => {
        return (
          <div className="card-wrapper" key={skill.name}>
            <Skill 
              name={skill.name} 
              image={skill.icon} 
            />
          </div>
        );
      })}
      </div>
    </div>
  )
}