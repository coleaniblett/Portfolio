import React from 'react';
import './Skills.css';
import { SkillsArray } from "../../util/Skills";
import { Skill } from '../Skill/Skill';

export const Skills: React.FC = () => {

  return (
    <div className="skills" id="skills">
      <h6 className="skills-title hidden">Skills</h6>
      <div className="skills-icon-container">
      {SkillsArray.map(skill => {
        return (
          <Skill name={skill.name} image={skill.icon} />
        );
      })}
      </div>
    </div>
  )
}