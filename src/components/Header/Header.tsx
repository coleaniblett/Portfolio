import './Header.css';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Header: React.FC = () => {
  return (
    <header className="header">
        <p className="title">
          Cole Niblett
        </p>
        <div className="nav">
          <ul className="full-menu">
            <li><a href="#intro-title">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <DropdownMenu />
        </div>
    </header>
  );
}