import React from 'react';
import Login from '../auth/Login';
import logo from '../../assets/images/LA.png';

const headerStyle = {
  position: 'absolute',
  width: '50%',
  height: '400px',
  top: '50%',
  marginTop: '-200px',
  padding: '20px',
  background: 'white',
  boxShadow: '2px 2px 5px 0px rgba(100,100,100,1)',
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
      <Login />
    </div>
  );
};

export default Header;
