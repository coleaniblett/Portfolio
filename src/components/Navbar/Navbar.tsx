import './Navbar.css';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
}