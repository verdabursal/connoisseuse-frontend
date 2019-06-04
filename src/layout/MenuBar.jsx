import React from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "../components/Home";
import MyCollection from "../components/MyCollection";
import Favorites from "../components/Favorites";
import Add from "../components/Add";
import Settings from "../components/Settings";

class MenuBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Link to="/">Home</Link><br/>
                        <Link to="/my-collection">My Collection</Link><br/>
                        <Link to="/favorites">Favorites</Link><br/>
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
                            path="/favorites"
                            exact
                            component={Favorites}/>
                        <Route
                            path="/add"
                            exact
                            component={Add}/>
                        <Route
                            path="/settings"
                            exact
                            component={Settings}/>
                    </div>
                </div>
                </div>
            </Router>
        )
    }
}

export default MenuBar;