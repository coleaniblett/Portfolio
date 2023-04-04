import React from 'react';
import './MockupCarousel.css';
import DesktopMockup from '../../assets/DesktopMockup - Transparent.png';
import LaptopMockup from '../../assets/LaptopMockup - Transparent.png';
import TabletMockup from '../../assets/TabletMockup - Transparent.png';
import MobileMockup from '../../assets/MobileMockup - Transparent.png';

interface Props {
  screenshots: any;
  device: Mockup;
  name: string;
}

enum Mockup {
  "Desktop",
  "Laptop",
  "Tablet",
  "Mobile"
}

export const MockupCarousel: React.FC<Props> = ({screenshots, device, name}: Props) => {
  let result;

  switch (device) {
  case Mockup.Desktop:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={DesktopMockup} alt="desktop computer mockup" />
        <img className="desktop-image screenshot" src={screenshots.desktop} alt={`${name} desktop mockup`} />
      </div>
    );
    break;
  case Mockup.Laptop:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={LaptopMockup} alt="laptop computer mockup" />
         <img className="laptop-image screenshot" src={screenshots.laptop} alt={`${name} laptop mockup`} />
      </div>
    );
    break;
  case Mockup.Tablet:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={TabletMockup} alt="tablet device mockup" />
         <img className="tablet-image screenshot" src={screenshots.tablet} alt={`${name} tablet mockup`} />
      </div>
    );
    break;
  case Mockup.Mobile:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={MobileMockup} alt="mobile device mockup" />
         <img className="mobile-image screenshot" src={screenshots.mobile} alt={`${name} mobile mockup`} />
      </div>
    );
    break;
  }

  return (
    <div className="carousel-wrapper">
      {result}
    </div>
  );
}