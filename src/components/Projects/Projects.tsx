import React from 'react';
import './Projects.css';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import { projectData } from '../../util/ProjectsData';

export const Portfolio: React.FC = () => {
  return (
    <div className="portfolio" id="projects">
      <h6 className="portfolio-title hidden">Projects</h6>
      <div className="projects-container d-flex flex-row">
      {projectData.map((project) => {
        return (
          <div className="project-wrapper" key={project.name}>
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