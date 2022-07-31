import React, { Component } from 'react';
import './components/styles/App.css';
import Title from './components/Title';

class App extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <div className="App">
        <Title></Title>
      </div>
    );
    }
}

export default App;
