import React from 'react';
import './Portfolio.css';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import DCRAMockups from '../../assets/DCRAMockups.png';
import { projects } from '../../util/Projects.js';

export const Portfolio: React.FC = () => {
  return (
    <div className="portfolio d-flex flex-row">
      {projects.map((project) => {
        return <PortfolioItem 
        mockups={project.image}
        screenImage={project.screenImage} 
        title={project.name} 
        tech={project.technologies} 
        description={project.description}
        mockupType={project.type} />
      })}
    </div>
  );
}