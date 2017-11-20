//local
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'
import store from './store/Index'

//Component
import SidebarConnect from './components/Sidebar'

class App extends Component {

  render() {
    return (
      <Provider store= { store }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SidebarConnect />
      </div>
    </Provider>
    );
  }
}

export default App;
