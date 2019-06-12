import React from 'react';

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
                variety: '',
                year: 0,
                region: '',
                label: '',
                description: '',
                favorite: false
            },
            category: 'red',
            varieties: {
                red: [],
                white: [],
                pink: [],
                bubbly: [],
                sweet: []
            }
        }
    }

    async componentDidMount() {
        let bottle = await _.find(mockData, ['id', this.state.bottle.id]);
        let variety = await _.find(mockVarieties, ['variety', bottle.variety]);
        let category = variety.category;

        let red = await _.filter(mockVarieties, ['category', "red"]);
        let white = await _.filter(mockVarieties, ['category', "white"]);
        let pink = await _.filter(mockVarieties, ['category', "pink"]);
        let bubbly = await _.filter(mockVarieties, ['category', "bubbly"]);
        let sweet = await _.filter(mockVarieties, ['category', "sweet"]);
        let varieties = {red, white, pink, bubbly, sweet};

        this.setState({bottle, category, varieties});
    }

    toggleFavorite = async () => {
        this.updateForm('favorite', !this.state.bottle.favorite);
    };

    handleCategoryChange = async event => {
        let category = event.target.value;
        this.setState({ category });
        this.updateForm('variety', this.state.varieties[category]);
    };

    updateForm = async (field, value) => {
        let updates = {};
        updates[field] = value;
        let bottle = _.assign({}, this.state.bottle, updates);
        this.setState({ bottle });
    };

    deleteBottle = async () => {
        // send request to DB
    };

    // reload this page with information from database
    cancelChanges = async () => {
        this.componentDidMount();
    };

    // save changes to database but don't reload page
    saveChanges = async () => {
        // send request to DB
    };

    // return to My Collection without saving any unsaved changes
    goBackToCollection = async () => {
        this.props.history.push('/my-collection');
    };

    render() {
        return (
            <div>
                <button className="btn btn-outline-dark" onClick={this.goBackToCollection}>
                    <i className="fa fa-arrow-left"/>
                    <span> Return to My Collection</span>
                </button>

                <br/><br/>

                <label>Bottle {this.state.bottle.id}</label><br/>

                <label onClick={this.toggleFavorite}>Favorite
                    {this.state.bottle.favorite
                    ? <i className="fa fa-star"/>
                    : <FontAwesomeIcon icon={faStar}/>}</label><br/>

                <div className="form-group">
                    <label htmlFor="editCategory">Category</label>
                    <select className="form-control" id="editCategory" value={this.state.category}
                            onChange={(event) => this.handleCategoryChange(event)}>
                        <option value="red">red</option>
                        <option value="white">white</option>
                        <option value="pink">pink</option>
                        <option value="bubbly">bubbly</option>
                        <option value="sweet">sweet</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editVariety">Variety</label>
                    <select className="form-control" id="editVariety" value={this.state.bottle.variety}
                            onChange={(event) => this.updateForm('variety', event.target.value)}>
                        {this.state.varieties[this.state.category].map(
                            variety => (
                                <option value={variety.variety}>{variety.variety}</option>
                            )
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editYear">Year</label>
                    <input type="number" className="form-control" id="editYear" value={this.state.bottle.year}
                           onChange={(event) => this.updateForm('year', event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editRegion">Region</label>
                    <input type="text" className="form-control" id="editRegion" value={this.state.bottle.region}
                           onChange={(event) => this.updateForm('region', event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editLabel">Label</label>
                    <input type="text" className="form-control" id="editLabel" value={this.state.bottle.label}
                           onChange={(event) => this.updateForm('label', event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="editDescription">Description</label>
                    <textarea className="form-control" id="editDescription" value={this.state.bottle.description}
                              placeholder="e.g. oaky, buttery, smooth"
                              onChange={(event) => this.updateForm('description', event.target.value)}/>
                </div>

                <button className="btn btn-danger" onClick={this.deleteBottle}>
                    <span>Delete this bottle</span>
                </button>

                <br/><br/>

                <button className="btn btn-secondary" onClick={this.cancelChanges}>
                    <i className="fa fa-undo"/>
                    <span> Cancel</span>
                </button>
                &nbsp;

                <button className="btn btn-primary" onClick={this.saveChanges}>
                    <span>Save </span>
                    <i className="fa fa-check"/>
                </button>

                <br/><br/>

                <button className="btn btn-outline-dark" onClick={this.goBackToCollection}>
                    <i className="fa fa-arrow-left"/>
                    <span> Return to My Collection</span>
                </button>

            </div>
        )
    }
}

export default EditBottle;