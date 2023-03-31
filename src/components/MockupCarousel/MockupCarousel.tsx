import React from 'react';
import './MockupCarousel.css';
import DesktopMockup from '../../assets/DesktopMockup - Transparent.png';
import LaptopMockup from '../../assets/LaptopMockup - Transparent.png';
import TabletMockup from '../../assets/TabletMockup - Transparent.png';
import MobileMockup from '../../assets/MobileMockup - Transparent.png';

interface Props {
  screenshots: any;
  device: Mockup;
}

enum Mockup {
  "Desktop",
  "Laptop",
  "Tablet",
  "Mobile"
}

export const MockupCarousel: React.FC<Props> = ({screenshots, device}: Props) => {
  let result;

  switch (device) {
  case Mockup.Desktop:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={DesktopMockup}></img>
        <img className="desktop-image screenshot" src={screenshots.desktop} />
      </div>
    );
    break;
  case Mockup.Laptop:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={LaptopMockup}></img>
         <img className="laptop-image screenshot" src={screenshots.laptop} />
      </div>
    );
    break;
  case Mockup.Tablet:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={TabletMockup}></img>
         <img className="tablet-image screenshot" src={screenshots.tablet} />
      </div>
    );
    break;
  case Mockup.Mobile:
    result = (
      <div className="mockup-carousel">
        <img className="mockup-image" src={MobileMockup}></img>
         <img className="mobile-image screenshot" src={screenshots.mobile} />
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