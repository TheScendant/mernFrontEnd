import React, { Component } from 'react';
import './App.css';
import NavPane from './NavPane';
import Login from './Login';
import AlchemyLogo from './media/AlchemyLogo.png';

class App extends Component {

  constructor() {
    super();
    this.state = {loading: false, loggedIn: false}
  }

  doPost(){
    return fetch("/api/hayden").then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.warn(jsonData);
      this.setState({
        loading: this.state.loading,
        loggedIn: true
      })
    });
  }
  
  render() {
    let header;
    //if (this.state.loggedIn) {
      header = (
          <NavPane/>
      );
    //}
    return (
      <div className="page">
          {header}
          <img src={AlchemyLogo} alt="AlchemyEvents"/>
          <Login doPost={this.doPost.bind(this)}/>
      </div>
    );
  }
}

export default App;
