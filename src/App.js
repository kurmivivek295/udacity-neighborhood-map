import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import MapScreen from './screens/MapScreen/MapScreen'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MapScreen} />
      </div>
    );
  }
}

export default App;
