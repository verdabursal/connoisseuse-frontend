import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        }
    }


    render() {
        return(
            <div>
                <h1>Hello, {this.state.username}!</h1>
                <h3>Check out the menu bar to get started.</h3>
            </div>
        )
    }
}

export default Home;