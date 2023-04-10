import React, { useState } from 'react';
import './PortfolioItem.css';
import { MockupCarousel } from '../MockupCarousel/MockupCarousel';
import { CarouselControls } from '../CarouselControls/CarouselControls';
import { DeviceTypes } from '../../util/DeviceTypes';

interface Props {
  title: string;
  screenshots: any;
  tech: string[];
  description: string;
  liveURL: string;
  codeURL: string;
}

export const PortfolioItem: React.FC<Props> = ({title, tech, description, screenshots, liveURL, codeURL}: Props) => {
  const [device, setDevice] = useState<DeviceTypes>(DeviceTypes.Desktop);

  const handleLeftClick: () => void = () => {
    if (device === DeviceTypes.Desktop) {
      setDevice(DeviceTypes.Mobile);
    } else {
      setDevice(prev => prev - 1);
    }
  }

  const handleRightClick: () => void = () => {
    if (device === DeviceTypes.Mobile) {
      setDevice(DeviceTypes.Desktop);
    } else {
      setDevice(prev => prev + 1);
    }
  }

  return (
    <div className="portfolio-item">
      <div className="hover-area">
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