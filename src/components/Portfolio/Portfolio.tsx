import React from 'react';
import './Portfolio.css';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import DCRAMockups from '../../assets/DCRAMockups.png';
import { projects } from '../../util/Projects.js';

export const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <h6>Projects</h6>
      <div className="projects-container d-flex flex-row">
      {projects.map((project) => {
        return <PortfolioItem 
        mockups={project.image}
        screenshots={project.screenshots} 
        title={project.name} 
        tech={project.technologies} 
        description={project.description}
        mockupType={project.type} 
        liveURL={project.liveURL}
        codeURL={project.codeURL}/>
      })}
    </div>
    </div>
  );
}