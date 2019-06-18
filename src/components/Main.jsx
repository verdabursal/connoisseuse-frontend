import React from 'react';

import {BrowserRouter as Router, Link} from "react-router-dom";

const Main = (props) =>
    <div>
        <Router>
            <h3 className="text-center">
                <br/>
                <Link to="/login">Log In</Link>
            </h3>
            <h3 className="text-center">
                <br/>
                <Link to="/signup">Sign Up</Link>
            </h3>
        </Router>
    </div>;

export default Main;