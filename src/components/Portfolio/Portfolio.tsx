import React from 'react';
import './Portfolio.css';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import DCRAMockups from '../../assets/DCRAMockups.png';

export const Portfolio: React.FC = () => {
  const placeHolderItem = {
    title: "Placeholder Title",
    technologies: ["Tech1", "Tech2", "Tech3"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }

  return (
    <div className="portfolio">
      <PortfolioItem 
        mockups={DCRAMockups} 
        title={placeHolderItem.title} 
        tech={placeHolderItem.technologies} 
        description={placeHolderItem.description}
      />
      <PortfolioItem 
        mockups={DCRAMockups} 
        title={placeHolderItem.title} 
        tech={placeHolderItem.technologies} 
        description={placeHolderItem.description}
      />
      <PortfolioItem 
        mockups={DCRAMockups} 
        title={placeHolderItem.title} 
        tech={placeHolderItem.technologies} 
        description={placeHolderItem.description}
      />
    </div>
  );
}