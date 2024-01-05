import React from 'react';
import './Skill.css';

interface Props {
  image: any,
  name: string
};

export const Skill: React.FC<Props> = ({image, name}: Props) => {
  return (
      <div className="card skill-card">
          <img className="skill-image" src={image} alt={name} />
          <div className="overlay skill-overlay">
            <div className="skill-title-wrapper">
              <h5 className="skill-title">{name}</h5>
            </div>
          </div>
      </div>
  );
}