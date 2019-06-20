import React from 'react';

import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {withRouter} from "react-router-dom";

import * as BottleService from '../services/BottleService';

class MyCollection extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            bottles: []
        }
    }

    async componentDidMount() {
        let bottles = await BottleService.findBottlesOfUser(this.props.username);
        await this.setState({ bottles });
    }

    toggleFavorite = async id => {
        // send request to DB to toggle favorite status of bottle with given id
    };

    pushEditBottle = async id => {
        console.log(this.props);
        this.props.history.push({
            pathname: `/my-collection/edit/${id}`,
            state: {id}
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
                                    <td onClick={this.toggleFavorite(bottle.id)}>
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