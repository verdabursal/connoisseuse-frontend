import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import MenuBar from './layout/MenuBar';
import Main from './components/Main';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
  }

  render() {
    if (this.state.username == null) {
      return (
          <div>
            <h1 className="text-center">Welcome to Connoisseuse!</h1>

            <Router>
              <Route
                  path="/"
                  exact
                  component={Main}/>
              <Route
                  path="/login"
                  exact
                  component={LogIn}/>
              <Route
                  path="/signup"
                  exact
                  component={SignUp}/>
            </Router>

          </div>
      )
    } else {
      return (
          <MenuBar/>
      );
    }
  }
}

export default App;
