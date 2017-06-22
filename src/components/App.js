import React from 'react';
import Header from './common/Header';
import IdeasContainer from './ideas/IdeasContainer';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const App = () => {
  return (
    <div style={appStyle}>
      <Header />
      <IdeasContainer />
    </div>
  );
};

export default App;
