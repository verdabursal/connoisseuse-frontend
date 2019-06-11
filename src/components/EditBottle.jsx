import React from 'react';

import { Link } from "react-router-dom";

import mockData from '../mock-data/collection.mock';
import mockVarieties from '../mock-data/varieties.mock';

import _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";

class EditBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottle: {
                id: props.location.state.id,
                category: '',
                variety: '',
                year: 0,
                region: '',
                label: '',
                description: '',
                favorite: false
            },
            redVarieties: [],
            whiteVarieties: [],
            pinkVarieties: [],
            bubblyVarieties: [],
            sweetVarieties: [],
            selectedVarieties: []
        }
    }

    async componentDidMount() {
        let bottle = _.find(mockData, ['id', this.state.bottle.id]);
        let variety = _.find(mockVarieties, ['variety', bottle.variety]);
        bottle = _.assign({}, bottle, { category: variety.category });
        this.setState({ bottle });

        let redVarieties = _.filter(mockVarieties, ['category', "red"]);
        let whiteVarieties = _.filter(mockVarieties, ['category', "white"]);
        let pinkVarieties = _.filter(mockVarieties, ['category', "pink"]);
        let bubblyVarieties = _.filter(mockVarieties, ['category', "bubbly"]);
        let sweetVarieties = _.filter(mockVarieties, ['category', "sweet"]);
        let selectedVarieties = [];
        switch (variety.category) {
            case "red":
                selectedVarieties = redVarieties;
                break;
            case "white":
                selectedVarieties = whiteVarieties;
                break;
            case "pink":
                selectedVarieties = pinkVarieties;
                break;
            case "bubbly":
                selectedVarieties = bubblyVarieties;
                break;
            case "sweet":
                selectedVarieties = sweetVarieties;
                break;
        }

        this.setState({
            redVarieties, whiteVarieties, pinkVarieties, bubblyVarieties, sweetVarieties, selectedVarieties
        });
    }

    render() {
        return (
            <div>

                <button className="btn btn-outline-dark">
                    <i className="fa fa-arrow-left"/>
                    <span> Back</span>
                </button><br/><br/>

                <label>Bottle {this.state.bottle.id}</label><br/>

                <label>Favorite {this.state.bottle.favorite
                    ? <i className="fa fa-star"/>
                    : <FontAwesomeIcon icon={ faStar }/>}</label><br/>

                <div className="form-group">
                    <label htmlFor="editCategory">Category</label>
                    <select className="form-control" id="editCategory" value={this.state.bottle.category}>
                        <option value="red">red</option>
                        <option value="white">white</option>
                        <option value="pink">pink</option>
                        <option value="bubbly">bubbly</option>
                        <option value="sweet">sweet</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editVariety">Variety</label>
                    <select className="form-control" id="editVariety" value={this.state.bottle.variety}>
                        {this.state.selectedVarieties.map(
                            variety => (
                                <option value={variety.variety}>{variety.variety}</option>
                            )
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editYear">Year</label>
                    <input type="number" className="form-control" id="editYear" value={this.state.bottle.year}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editRegion">Region</label>
                    <input type="text" className="form-control" id="editRegion" value={this.state.bottle.region}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editLabel">Label</label>
                    <input type="text" className="form-control" id="editLabel" value={this.state.bottle.label}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editDescription">Description</label>
                    <textarea className="form-control" id="editDescription" value={this.state.bottle.description}
                              placeholder="e.g. oaky, buttery, smooth"/>
                </div>

                <button className="btn btn-secondary">
                    <i className="fa fa-undo"/>
                    <span> Cancel</span>
                </button>&nbsp;

                <button className="btn btn-danger">
                    <span>Delete </span>
                    <i className="fa fa-times"/>
                </button>&nbsp;

                <button className="btn btn-primary">
                    <span>Save </span>
                    <i className="fa fa-check"/>
                </button>

            </div>
        )
    }
}

export default EditBottle;