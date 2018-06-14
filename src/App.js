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
      const responseObject = JSON.parse(jsonData);
      this.setState({
        loading: this.state.loading,
        loggedIn: responseObject.loggedIn
      });
    });
  }

  render() {
    let mainElement = this.state.loggedIn ? <Login doPost={this.doPost.bind(this)}/> : <EventPage/>;
    return (
      <div className="page">
          <NavPane/>
          {mainElement}
      </div>
    );
  }
}

export default App;
