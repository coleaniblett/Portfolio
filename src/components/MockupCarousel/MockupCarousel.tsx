import React from 'react';
import './MockupCarousel.css';
import DesktopMockup from '../../assets/DesktopMockup - Transparent.png';

interface Props {
  desktopImage: any;
}

enum Mockup {
  "Desktop",
  "Laptop",
  "Tablet",
  "Mobile"
}

export const MockupCarousel: React.FC<Props> = ({desktopImage}: Props) => {
  return (
    <div>
      <img className="mockup-image" src={DesktopMockup}></img>
      <img className="desktop-image" src={desktopImage} />
    </div>
  );
}