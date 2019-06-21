import React from 'react';

import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {withRouter} from "react-router-dom";

import * as BottleService from '../services/BottleService';

class MyCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bottles: []
        }
    }

    async componentDidMount() {
        let bottles = await BottleService.findBottlesOfUser(this.props.username);
        await this.setState({ bottles });
    }

    pushEditBottle = async id => {
        this.props.history.push({
            pathname: `/edit/${id}`,
            state: {id, username: this.props.username}
        });
    };

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
                        <th>{"Variety"}</th>
                        <th>{"Year"}</th>
                        <th>{"Region"}</th>
                        <th>{"Label"}</th>
                        <th>{"Description"}</th>
                    </tr>
                    {
                        this.state.bottles.length >= 1
                            ? this.state.bottles.map(
                            bottle =>
                                <tr key={bottle.id}>
                                    <td>
                                        {bottle.favorite
                                            ? <i className="fa fa-star"/>
                                            : <FontAwesomeIcon icon={faStar}/>}</td>
                                    <td>{bottle.id}</td>
                                    <td>{bottle.variety.category}</td>
                                    <td>{bottle.variety.varietyName}</td>
                                    <td>{bottle.year}</td>
                                    <td>{bottle.region.name}</td>
                                    <td>{bottle.label}</td>
                                    <td>{bottle.description}</td>
                                    <td>
                                        <button className="btn"
                                                onClick={() => this.pushEditBottle(bottle.id)}>
                                            <span><i className="fa fa-pencil"/></span>
                                        </button>
                                    </td>
                                </tr>
                            )
                            : ""
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(MyCollection);