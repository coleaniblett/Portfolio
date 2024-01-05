import React from 'react';
import './ProjectGallery.css';
import { Project } from './Project/Project';
import { projectData } from '../../util/ProjectsData';

export const Portfolio: React.FC = () => {
  return (
    <div className="project-gallery" id="projects">
      <h6 className="section-heading">Projects</h6>
      <div className="flex-display">
      {projectData.map((project) => {
        return (
          <div className="card-wrapper" key={project.name}>
            <Project
              image={project.image} 
              title={project.name} 
              tech={project.technologies} 
              shortDescription={project.shortDescription} 
              longDescription={project.longDescription}
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