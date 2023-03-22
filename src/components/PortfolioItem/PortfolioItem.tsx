import React, { useState } from 'react';
import './PortfolioItem.css';

interface Props {
  title: string;
  mockups: any;
  tech: string[];
  description: string;
}

export const PortfolioItem: React.FC<Props> = ({mockups, title, tech, description}: Props) => {
  const [hoverState, setHoverState] = useState(false);

  const showInfo = () => {
    return (
      <div className="portfolio-item-text-container">
        <h5 className="portfolio-item-text title">{title}</h5>
        <p className="portfolio-item-text technologies">{tech.join(", ")}</p>
        <p className="portfolio-item-text description">{description}</p>
      </div>
    );
  }

  const handleHover = () => {
    setHoverState(true);
  }

  const handleLeave = () => {
    setHoverState(false);
  }

  return (
    <div className="portfolio-item" onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <img src={mockups}></img>
      {hoverState && showInfo()}
    </div>
  );
}