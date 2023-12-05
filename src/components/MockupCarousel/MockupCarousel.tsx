import React, { useState, useEffect } from 'react';
import './MockupCarousel.css';
import DesktopMockup from '../../assets/DesktopMockup - Transparent.png';
import LaptopMockup from '../../assets/LaptopMockup - Transparent.png';
import TabletMockup from '../../assets/TabletMockup - Transparent.png';
import MobileMockup from '../../assets/MobileMockup - Transparent.png';
import { DeviceTypes } from '../../util/DeviceTypes';

interface Props {
  screenshots: any;
  device: DeviceTypes;
  name: string;
}

// TODO: animate carousel movement
// TODO: combine device, screenshot images into single image
export const MockupCarousel: React.FC<Props> = ({screenshots, device, name}: Props) => {
  const [result, setResult] = useState((<div></div>));

  useEffect(() => {
    setCarousel();
  }, [device]);


  const setCarousel = () => {
    switch (device) {
      case DeviceTypes.Desktop:
        setResult(
          <div className="mockup-carousel">
              <img className="mockup-image" src={DesktopMockup} alt="desktop computer mockup" />
              <img className="desktop-image screenshot" src={screenshots.desktop} alt={`${name} desktop mockup`} />
          </div>
        );
        break;
      case DeviceTypes.Laptop:
        setResult(
          <div className="mockup-carousel">
              <img className="mockup-image" src={LaptopMockup} alt="laptop computer mockup" />
              <img className="laptop-image screenshot" src={screenshots.laptop} alt={`${name} laptop mockup`} />
          </div>
        );
        break;
      case DeviceTypes.Tablet:
        setResult(
          <div className="mockup-carousel">
            <img className="mockup-image" src={TabletMockup} alt="tablet device mockup" />
             <img className="tablet-image screenshot" src={screenshots.tablet} alt={`${name} tablet mockup`} />
          </div>
        );
        break;
      case DeviceTypes.Mobile:
        setResult(
          <div className="mockup-carousel">
            <img className="mockup-image" src={MobileMockup} alt="mobile device mockup" />
             <img className="mobile-image screenshot" src={screenshots.mobile} alt={`${name} mobile mockup`} />
          </div>
        );
        break;
      }
  }

  return (
    <div className="carousel-wrapper">
      {result}
    </div>
  );
}