import React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "../components/Home";
import MyCollection from "../components/MyCollection";
import Add from "../components/Add";
import Settings from "../components/Settings";
import EditBottle from "../components/EditBottle";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        }
    }

    setUsername = async username => {
        this.setState({ username });
    };

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <Link to="/home">Home</Link><br/>
                            <Link to="/my-collection">My Collection</Link><br/>
                            <Link to="/add">Add</Link><br/>
                            <Link to="/settings">Settings</Link>
                        </div>

                        <div className="col-10">
                            <Route
                                path="/home"
                                render={() =>
                                    <Home username={this.state.username} setUsername={this.setUsername}/>}
                            />
                            <Route
                                path="/edit/:id"
                                exact
                                component={EditBottle}
                            />
                            <Route
                                path="/my-collection"
                                render={() =>
                                    <MyCollection username={this.state.username}/>}
                            />
                            <Route
                                path="/add"
                                render={() =>
                                    <Add username={this.state.username}/>}
                            />
                            <Route
                                path="/settings"
                                render={() =>
                                    <Settings username={this.state.username}/>}
                            />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default MenuBar;