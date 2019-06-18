import React from 'react';

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
        console.log("set username: ");
        console.log(this.state.formUsername);
    };

    setFormPassword = async event => {
        await this.setState({ formPassword: event.target.value });
        console.log("set password: ");
        console.log(this.state.formPassword);
    };

    logIn = async () => {

    };

    signUp = async () => {

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