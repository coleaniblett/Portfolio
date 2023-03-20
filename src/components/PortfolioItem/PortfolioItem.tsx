import React from 'react';
import './PortfolioItem.css';

interface Props {
  title: string;
  mockups: any;
  tech: string[];
  description: string;
}

export const PortfolioItem: React.FC<Props> = ({mockups, title, tech, description}: Props) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {tech.map(technology => (<li>{technology}</li>))}
      </ul>
      <p>{description}</p>
      <img src={mockups}></img>
    </div>
  );
}