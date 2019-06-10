import React from 'react';

import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mockData from '../mock-data/collection.mock';

class MyCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bottles: []
        }
    }

    async componentDidMount() {
        this.setState({ bottles: mockData })
    }

    render() {
        return(
            <div>
                <h1>My Collection</h1>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>{"Favorite"}</th>
                        <th>{"ID"}</th>
                        <th>{"Category"}</th>
                        <th>{"Type"}</th>
                        <th>{"Year"}</th>
                        <th>{"Region"}</th>
                        <th>{"Label"}</th>
                        <th>{"Description"}</th>
                    </tr>
                    {
                        this.state.bottles.map(
                            bottle =>
                                <tr key={bottle.id}>
                                    <td>{bottle.favorite
                                    ? <i className="fa fa-star"/>
                                        : <FontAwesomeIcon icon={ faStar }/>}</td>
                                    <td>{bottle.id}</td>
                                    <td>{bottle.category}</td>
                                    <td>{bottle.type}</td>
                                    <td>{bottle.year}</td>
                                    <td>{bottle.region}</td>
                                    <td>{bottle.label}</td>
                                    <td>{bottle.description}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyCollection;