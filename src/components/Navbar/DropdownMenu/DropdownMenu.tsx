import React, { useState } from 'react';
import './DropdownMenu.css';
import { Menu } from '@mui/icons-material';

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button className="menu-button" onClick={toggleMenu}>
        <Menu />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#start">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      )}
    </div>
  );
}