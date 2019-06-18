import React from 'react';

import * as UserService from '../services/UserService';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            formUsername: "",
            formPassword: ""
        }
    }

    setFormUsername = async event => {
        await this.setState({ formUsername: event.target.value });
    };

    setFormPassword = async event => {
        await this.setState({ formPassword: event.target.value });
    };

    logIn = async () => {
        let auth = null;

        try {
            auth =
                await UserService.authUser({
                    id: 1,
                    username: this.state.formUsername,
                    password: this.state.formPassword
                });
        } catch (err) {
            auth = null;
        }

        if (auth != null) {
            await this.setState({ username: this.state.formUsername });
            await this.props.setUsername(this.state.formUsername);
        } else {
            console.log("could not set username successfully");
            console.log("username: " + this.state.formUsername);
            console.log("password: " + this.state.formPassword);
        }
    };

    signUp = async () => {
        let auth = await UserService.createUser({
            id: 1,
            username: this.state.formUsername,
            password: this.state.formPassword
        });

        if (auth != null) {
            await this.setState({ username: this.state.formUsername });
            await this.props.setUsername(this.state.formUsername);
        } else {
            console.log("could not create new user successfully; returned user was null");
        }
    };

    render() {
        if (this.state.username == null) {
            return (
                <div>
                    <h1>Welcome to Connoisseuse!</h1>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="inputUsername"
                        onChange={event => this.setFormUsername(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword"
                        onChange={event => this.setFormPassword(event)}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.logIn}>
                        Log In
                    </button>&nbsp;
                    <button className="btn btn-secondary" onClick={this.signUp}>
                        Sign Up
                    </button>
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