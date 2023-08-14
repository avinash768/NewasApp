import './App.css';
import Nevbar from './Componants/Nevbar';
import React, { Component } from 'react'
import News from './Componants/News';

export default class App extends Component {
  render() {
    return (
      <div>
            
        <Nevbar />
        <News/>
      </div>
    )
  }
}
