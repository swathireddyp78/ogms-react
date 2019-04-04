import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {NotificationContainer} from "react-notifications";
import HeaderOgms from './components/HeaderOgms';

class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div className="App">
      <HeaderOgms />
        <Routes />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;