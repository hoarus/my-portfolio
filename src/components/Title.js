import React, { Component } from 'react';
import './styles/Title.css';
import headshot from './images/headshot.jpg';




class Title extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <header>
      <h1 className="name">Sam Hoare</h1>
      <img src= {headshot} className="headshot"/>
        <h2 className="role-title">Web Development Enthusiast</h2>
    </header>
    );
    }
}

export default Title;