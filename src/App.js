import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MenuBar from "./layout/MenuBar";

class App extends React.Component {
  render() {
    return(
        <MenuBar/>
    );
  }
}

export default App;
