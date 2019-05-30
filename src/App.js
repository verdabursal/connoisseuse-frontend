import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import MyCollection from './components/MyCollection';
import Favorites from './components/Favorites';
import Add from './components/Add';
import Settings from './components/Settings';

class App extends React.Component {
  render() {
    return(
        <Router>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/my-collection">My Collection</Link>&nbsp;
            <Link to="/favorites">Favorites</Link>&nbsp;
            <Link to="/add">Add</Link>&nbsp;
            <Link to="/settings">Settings</Link>

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
        </Router>
    );
  }
}

export default App;
