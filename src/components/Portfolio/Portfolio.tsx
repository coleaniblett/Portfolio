import React from 'react';
import './Portfolio.css';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import { projects } from '../../util/Projects';

export const Portfolio: React.FC = () => {
  return (
    <div className="portfolio" id="projects">
      <h6 className="portfolio-title hidden">Projects</h6>
      <div className="projects-container d-flex flex-row">
      {projects.map((project) => {
        return (
          <div className="project-wrapper hidden" key={project.name}>
            <PortfolioItem 
              screenshots={project.screenshots} 
              title={project.name} 
              tech={project.technologies} 
              description={project.description} 
              liveURL={project.liveURL}
              codeURL={project.codeURL}
            />
          </div>
        )
      })}
      </div>
    </div>
  );
}