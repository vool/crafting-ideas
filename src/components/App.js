import React, { Component } from 'react';
import logo from '../assets/images/LA.png';
import IdeasContainer from './ideas/IdeasContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <IdeasContainer />
      </div>
    );
  }
}

export default App;
