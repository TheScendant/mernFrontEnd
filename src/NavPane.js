import React, { Component } from 'react';
import AlchemyLogo from './media/AlchemyLogo.png';
import './NavPane.css'
class NavPane extends Component {
    render() {
        let accountDiv;
        if (this.props.loggedIn) {
            accountDiv =
                (<div id="Account">
                    <span className="navTab" onClick={() => this.props.doLogout()}>Logout</span>
                </div>);
        }
        return (
            <div id="navBar">
                <div id="AlchemyLogo" >
                    <img src={AlchemyLogo} alt="AlchemyEvents" className="logo twist"/>
                </div>
                <span className="navTab" >Events</span>
                <span className="navTab" >Calendar</span>
                <span className="navTab" >Messages</span>
                {accountDiv}

            </div>
        );
    }
}
export default NavPane;