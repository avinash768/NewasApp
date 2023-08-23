import './App.css';
import Nevbar from './Componants/Nevbar';
import React, { Component } from 'react'
import News from './Componants/News';
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }

setProgress = (progress)=>{
  this.setState({progress: progress})
}


  render() {
    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Router>
          <Nevbar />

          <Switch>
            <Route exact path="/"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="General" /></Route>
            <Route exact path="/business"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="Business" />Business</Route>
            <Route exact path="/entertainment"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />Entertainment</Route>
            <Route exact path="/general"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} country="in" category="General" />General</Route>
            <Route exact path="/health"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="Health" />Health</Route>
            <Route exact path="/science"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="Science" />Science</Route>
            <Route exact path="/sports"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="Sports" />Sports</Route>
            <Route exact path="/technology"><News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="Technology" />Technology</Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
