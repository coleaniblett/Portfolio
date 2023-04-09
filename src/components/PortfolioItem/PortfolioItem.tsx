import React, { useState } from 'react';
import './PortfolioItem.css';
import { MockupCarousel } from '../MockupCarousel/MockupCarousel';
import { CarouselControls } from '../CarouselControls/CarouselControls';

interface Props {
  title: string;
  mockups: any;
  screenshots: any;
  tech: string[];
  description: string;
  mockupType: string;
  liveURL: string | undefined;
  codeURL: string;
}

enum Mockup {
  "Desktop",
  "Laptop",
  "Tablet",
  "Mobile"
}

export const PortfolioItem: React.FC<Props> = ({mockups, title, tech, description, screenshots, mockupType, liveURL, codeURL}: Props) => {
  const [hoverState, setHoverState] = useState(false);
  const [device, setDevice] = useState(Mockup.Desktop);

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

  const toggleInfo = () => {
    setHoverState(!hoverState);
  }

  const handleLeftClick = () => {
    if (device === Mockup.Desktop) {
      setDevice(Mockup.Mobile);
    } else {
      setDevice(prev => prev - 1);
    }
  }

  const handleRightClick = () => {
    if (device === Mockup.Mobile) {
      setDevice(Mockup.Desktop);
    } else {
      setDevice(prev => prev + 1);
    }
  }

  return (
    <div className="portfolio-item">
      <div className="hover-area" onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={toggleInfo}>
        <MockupCarousel screenshots={screenshots} device={device} name={title} />
        <div className="portfolio-item-text-container">
          <h5 className="portfolio-item-text title">{title}</h5>
          <p className="portfolio-item-text technologies">{tech.join(", ")}</p>
          <p className="portfolio-item-text description">{description}</p>
          {liveURL != undefined && <a className="live-link portfolio-link" href={liveURL}>Live Site</a>}
          <a className="code-link portfolio-link" href={codeURL}>Code</a>
        </div>
      </div>
      <CarouselControls handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
    </div>
  );
}