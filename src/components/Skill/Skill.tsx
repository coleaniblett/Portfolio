import React from 'react';

interface Props {
  image: any,
  name: string
};

export const Skill: React.FC<Props> = ({image, name}: Props) => {
  return (
    <div>
      <div className="skills-icon-container hidden">
        <div className="icon hidden">
          <img src={image} alt={name} />
          <div className="icon-text-container">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}