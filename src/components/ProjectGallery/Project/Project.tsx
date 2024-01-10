import React from 'react';
import './Project.css';

interface Props {
  title: string;
  image: any;
  tech: string[];
  shortDescription: string;
  longDescription: string;
  liveURL: string;
  codeURL: string;
};

export const Project: React.FC<Props> = ({title, tech, shortDescription, longDescription, image, liveURL, codeURL}: Props) => {

  return (
    <div className="card">
      <img className="project-img-top" src={image} alt={title} />
      <div className="project-body">
        <h5 className="project-title">{title}</h5>
        <p className="card-text description">{shortDescription}</p>
      </div>
      <div className="overlay project-overlay">
        <div className="overlay-text">
          <h5 className="project-overlay-title">{title}</h5>
          <p className="card-text tech"><small className="text-muted">{tech.join(' | ')}</small></p>
          <p className="card-text description">{longDescription}</p>
          <div className="button-group">
            {liveURL != "" && <button className="button project-button" onClick={() => window.open(liveURL, '_blank', 'noopener noreferrer')}>Live</button>}
            <button className="button project-button" onClick={() => window.open(codeURL, '_blank', 'noopener noreferrer')}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}