import React from 'react';

import * as UserService from '../services/UserService';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            //setUsername: props.setUsername,
            formUsername: "",
            formPassword: ""
        }
    }

    setFormUsername = async event => {
        await this.setState({ formUsername: event.target.value });
        console.log("set username: ");
        console.log(this.state.formUsername);
    };

    setFormPassword = async event => {
        await this.setState({ formPassword: event.target.value });
        console.log("set password: ");
        console.log(this.state.formPassword);
    };

    logIn = async () => {
        let auth =
            await UserService.authUser({
                user_id: 1,
                user_username: this.state.formUsername,
                user_password: this.state.formPassword
        });

        if (auth === true) {
            await this.setState({ username: this.state.formUsername });
            // await this.setUsername(this.state.formUsername);
        } else {
            console.log("could not set username successfully");
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