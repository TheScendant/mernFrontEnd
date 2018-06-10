import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    render() {
        return (
          <div className="loginContents">
            <input type="text"/>
            <input type="password"/>
            <button className="doPostButton" onClick={() => this.props.doPost()}></button>
          </div>
        );
      }
}
export default Login;