import React from 'react';
import './CarouselControls.css';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';

interface Props {
  handleLeftClick: () => void,
  handleRightClick: () => void
}

export const CarouselControls: React.FC<Props> = ({handleLeftClick, handleRightClick}: Props) => {
  return (
    <div className="carousel-controls">
      <button className="left-button" onClick={handleLeftClick}><img src={LeftArrow} /></button>
      <button className="right-button" onClick={handleRightClick}><img src={RightArrow} /></button>
    </div>
  );
}