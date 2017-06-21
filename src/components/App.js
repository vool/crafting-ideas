import React, { Component } from 'react';
import logo from '../assets/images/LA.png';
import IdeaList from './ideas/IdeaList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <IdeaList />
      </div>
    );
  }
}

export default App;
