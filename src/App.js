import React, { Component } from 'react';
import './App.css';
import NavPane from './NavPane';
import Login from './Login';
import EventPage from './EventPage';

class App extends Component {

  constructor() {
    super();
    this.state = {loading: false, loggedIn: false}
  }

  doPost(username, password){
    const creds = {username: username, password: password};
    const postReq = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),

    }
    return fetch("/api/hayden", postReq).then((response) => {
      return response.json();
    }).then((jsonData) => {
      //const responseObject = JSON.parse(jsonData);
      const responseObject = jsonData;
      this.setState({
        loading: this.state.loading,
        loggedIn: responseObject.loggedIn
      });
    });
  }

  doLogout() {
    console.warn("So you wanna logout eh?")
    this.setState({
      loading: this.state.loading,
      loggedIn: false
    });
    console.warn(this.state);
  }

  render() {
    let mainElement = this.state.loggedIn ? <EventPage/> : <Login doPost={this.doPost.bind(this)}/>;
    return (
      <div className="page">
          <NavPane doLogout={this.doLogout.bind(this)} loggedIn={this.state.loggedIn}/>
          {mainElement}
      </div>
    );
  }
}

export default App;
