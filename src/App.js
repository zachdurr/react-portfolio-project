import React, { Component } from 'react';
import './App.css';
import TweetsContainer from './containers/TweetsContainer';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <TweetsContainer />
      </div>
    );
  }
}

export default App;
