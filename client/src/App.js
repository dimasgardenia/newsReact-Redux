//local
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import store from './store/'

//Component
import SidebarConnect from './components/Sidebar'
import MainContent from './components/MainContent'

class App extends Component {

  render() {
    return (
      <Provider store= { store }>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SidebarConnect />
        <Route exact path='/' render={()=> <h1>HOME</h1>}/>
        <Route path='/:title/:index' component={MainContent}
        />
      </div>
    </Provider>
    );
  }
}

export default App;
