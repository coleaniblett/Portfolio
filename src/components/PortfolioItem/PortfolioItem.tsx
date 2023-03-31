import React, { useState } from 'react';
import './PortfolioItem.css';
import { MockupCarousel } from '../MockupCarousel/MockupCarousel';

interface Props {
  title: string;
  mockups: any;
  screenImage: any;
  tech: string[];
  description: string;
  mockupType: string;
  liveURL: string | undefined;
  codeURL: string;
}

export const PortfolioItem: React.FC<Props> = ({mockups, title, tech, description, screenImage, mockupType, liveURL, codeURL}: Props) => {
  const [hoverState, setHoverState] = useState(false);

  const showInfo = () => {
    return (
      <div className="portfolio-item-text-container">
        <h5 className="portfolio-item-text title">{title}</h5>
        <p className="portfolio-item-text technologies">{tech.join(", ")}</p>
        <p className="portfolio-item-text description">{description}</p>
        {liveURL != undefined && <a className="live-link portfolio-link" href={liveURL}>Live Site</a>}
        <a className="code-link portfolio-link" href={codeURL}>Code</a>
      </div>
    );
  }

  const handleHover = () => {
    setHoverState(true);
  }

  const handleLeave = () => {
    setHoverState(false);
  }

  const getDesktopImage = () => {
    return (
      <img className="desktop-image" src={screenImage} />
    );
  }

  return (
    <div className="portfolio-item" onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <MockupCarousel desktopImage={screenImage} />
      {/*<img className="mockup-image" src={mockups}></img>*/}
      {hoverState && showInfo()}
      {/*{mockupType === "desktop" && getDesktopImage()}*/}
    </div>
  );
}