import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import MenuBar from './layout/MenuBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
  }

  setUsername = async username => {
    this.setState({ username })
  };

  render() {
    return (
        <MenuBar username={this.state.username} setUsername={this.setUsername}/>
    );
  }
}

export default App;
