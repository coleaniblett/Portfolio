import './Navbar.css';
import React from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <p className="logo">
        <a className="logo-anchor" href="#start">Cole Niblett</a>
      </p>
      <ul className="full-menu">
        <li><a href="#start">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
      </ul>
      <DropdownMenu />
    </nav>
  );
}