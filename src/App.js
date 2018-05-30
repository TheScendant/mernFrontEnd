import React, { Component } from 'react';
import './App.css';
import NavPane from './NavPane';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <header>
        </header>
        <p>
          Welcome To MERN
          <NavPane/>
          <Login />
        </p>
      </div>
    );
  }
}

export default App;
