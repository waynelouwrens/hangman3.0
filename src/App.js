import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './component/Keyboard'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Hangman</h1>
          <Keyboard />
      </div>
    );
  }
}

export default App;
