import React from 'react';
import './Header.css';
import logo from './13-3-8607284.jpg'; // Tuodaan kuva suoraan komponentissa

const Header = ({ title }) => {
  return (
    <header className="header">
      <img src={logo} alt="Header logo" className="header-logo" />
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
