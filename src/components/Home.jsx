import React from 'react';

import {BrowserRouter as Router, Link} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        }
    }

    async componentDidMount() {
        console.log(this.props)
    }


    render() {
        if (this.state.username == null) {
            return (
                <div>
                    <h1>Welcome to Connoisseuse!</h1>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="inputUsername"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword"/>
                    </div>
                    <button className="btn btn-primary">Log In</button>&nbsp;
                    <button className="btn btn-secondary">Sign Up</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Hello, {this.state.username}!</h1>
                    <h3>Check out the menu bar to get started.</h3>
                </div>
            )
        }
    }
}

export default Home;