import './Header.css';
import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Header: React.FC = () => {
  return (
    <header className="header">
        <p className="title">
          Cole Niblett
        </p>
        <div>
          <DropdownMenu />
        </div>
    </header>
  );
}