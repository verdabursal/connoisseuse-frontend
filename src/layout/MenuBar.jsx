import React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "../components/Home";
import MyCollection from "../components/MyCollection";
import Add from "../components/Add";
import Settings from "../components/Settings";
import EditBottle from "../components/EditBottle";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        }
    }

    render() {
        if (this.state.username == null) {
            return (
                <div>
                    <h1 className="text-center">Welcome to Connoisseuse!</h1>
                    <Router>
                        <Link to="/login">Log In</Link><br/>
                        <Link to="/signup">Sign Up</Link><br/>

                        <div>
                            <Route
                                path="/login"
                                exact
                                component={LogIn}/>
                            <Route
                                path="/signup"
                                exact
                                component={SignUp}/>
                        </div>
                    </Router>
                </div>
            )
        } else {
            return (
                <Router>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2">
                                <Link to="/">Home</Link><br/>
                                <Link to="/my-collection">My Collection</Link><br/>
                                <Link to="/add">Add</Link><br/>
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="col-10">
                                <Route
                                    path="/"
                                    exact
                                    component={Home}/>
                                <Route
                                    path="/my-collection"
                                    exact
                                    component={MyCollection}/>
                                <Route
                                    path="/add"
                                    exact
                                    component={Add}/>
                                <Route
                                    path="/settings"
                                    exact
                                    component={Settings}/>
                                <Route
                                    path="/my-collection/edit/:id"
                                    exact
                                    component={EditBottle}/>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}

export default MenuBar;