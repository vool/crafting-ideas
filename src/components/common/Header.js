import React from 'react';
import logo from '../../assets/images/LA.png';

const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const logoStyle = {
  width: '25px',
  height: '25px',
  marginTop: '20px',
  marginBottom: '20px'
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>Crafting Ideas</h1>
      <img style={logoStyle} src={logo} alt="Logo" />
      <span><em>Ideas are fragile; nourish them.</em></span>
      <hr />
    </div>
  );
};

export default Header;
