import React from 'react';
import './Header.css';
import logo from './13-3-8607284.jpg'; // Tuodaan kuva suoraan komponentissa

const Header = () => {
  return (
    <Header className="header">
      <img src={logo} alt="Header logo" className="header-logo" />
      <h1 className="header-title">Hello there</h1>
    </Header>
  );
};

export default Header;
