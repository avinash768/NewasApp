import './App.css';
import Nevbar from './Componants/Nevbar';
import React, { Component } from 'react'
import News from './Componants/News';
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>            
        <Router>
        <Nevbar />
          
        <Switch>
          <Route exact path="/"><News key="general" pageSize={5} country="in" category="general" /></Route>
          <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business" />Business</Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment" />Entertainment</Route>
          <Route exact path="/general"><News key="General" pageSize={5} country="in" category="general" />General</Route>
          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health" />Health</Route>
          <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science" />Science</Route>
          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/>Sports</Route>
          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology" />Technology</Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
