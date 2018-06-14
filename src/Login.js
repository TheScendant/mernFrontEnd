import React, { Component } from 'react';
import './Login.css';
import AlchemyLogo from './media/AlchemyLogo.png';
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      if (this.validateForm()) {
        this.props.doPost(this.state.username, this.state.password);
      } else {
        console.warn("Invalid form");
      }
    }

    render() {
        return (
          <div className="loginContents">
          <img src={AlchemyLogo} alt="AlchemyEvents"/>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input id="username" type="text" onChange={this.handleChange}/>
            <input id="password" type="password" onChange={this.handleChange}/>
            <input className="doPostButton" type="submit"/>
          </form>
          </div>
        );
      }
}
export default Login;