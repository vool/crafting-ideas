import React from 'react';
import Header from './common/Header';
import IdeasContainer from './ideas/IdeasContainer';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const _isLoggedIn = () => {
  const token = window.localStorage.getItem('auth0IdToken');

  if (token) return true;
  else return false;
};

const renderLoggedOut = () => {
  return (
    <div style={appStyle}>
      <Header />
    </div>
  );
};

const renderLoggedIn = () => {
  return (
    <div style={appStyle}>
      <IdeasContainer />
    </div>
  );
};

const App = () => {
  if (_isLoggedIn()) {
    return renderLoggedIn();
  } else {
    return renderLoggedOut();
  }
};

export default App;
