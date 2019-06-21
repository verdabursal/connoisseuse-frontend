import React from 'react';

import * as BottleService from '../services/BottleService';
import * as VarietyService from '../services/VarietyService';
import * as CountryService from '../services/CountryService';
import * as RegionService from '../services/RegionService';

import _ from "lodash";

import {withRouter} from "react-router-dom";

class EditBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottle: {
                id: props.location.state.id,
                variety: {
                    varietyName: '',
                    category: 'red'
                },
                year: 0,
                region: {
                    name: '',
                    country: {
                        name: ''
                    }
                },
                label: '',
                description: '',
                favorite: false
            },
            varieties: {
                red: [],
                white: [],
                pink: [],
                bubbly: [],
                sweet: []
            },
            countries: [],
            selectedRegions: []
        }
    }

    async componentDidMount() {
        this.props.history.push(`/edit/${this.state.bottle.id}`);
        let bottle = await BottleService.findBottleById(this.state.bottle.id);

        let red = await VarietyService.fetchVarietiesOfCategory('red');
        let white = await VarietyService.fetchVarietiesOfCategory('white');
        let pink = await VarietyService.fetchVarietiesOfCategory('pink');
        let bubbly = await VarietyService.fetchVarietiesOfCategory('bubbly');
        let sweet = await VarietyService.fetchVarietiesOfCategory('sweet');

        let varieties = {red, white, pink, bubbly, sweet};

        let countries = await CountryService.fetchAllCountries();
        let selectedRegions = await RegionService.fetchRegionsInCountry(bottle.region.country.name);

        await this.setState({bottle, varieties, countries, selectedRegions});
    }

    toggleFavorite = async () => {
        await this.updateForm('favorite', !this.state.bottle.favorite);
    };

    updateForm = async (field, value) => {
        let updates = {};
        updates[field] = value;
        let bottle = _.assign({}, this.state.bottle, updates);
        await this.setState({ bottle });
    };

    updateCategory = async category => {
        let varietyName = this.state.varieties[category][0].varietyName;
        let variety = {varietyName, category};
        let updates = {variety};
        let bottle = _.assign({}, this.state.bottle, updates);
        await this.setState({bottle});
    };

    updateVariety = async varietyName => {
        let updates = {varietyName};
        let variety = _.assign({}, this.state.bottle.variety, updates);
        let updates2 = {variety};
        let bottle = _.assign({}, this.state.bottle, updates2);
        await this.setState({bottle});
    };

    updateCountry = async countryName => {
        let selectedRegions = await RegionService.fetchRegionsInCountry(countryName);
        let name = selectedRegions[0].name;
        let region = {
            name,
            country: {
                name: countryName
            }
        };
        let updates = {region};
        let bottle = _.assign({}, this.state.bottle, updates);

        await this.setState({bottle, selectedRegions});
    };

    updateRegion = async regionName => {
        let updates = {
            name: regionName
        };
        let region = _.assign({}, this.state.bottle.region, updates);
        let updates2 = {region};
        let bottle = _.assign({}, this.state.bottle, updates2);
        await this.setState({bottle});
    };

    deleteBottle = async () => {
        await BottleService.deleteBottle(this.state.bottle.id);
        this.props.history.push('/my-collection');
    };

    // reload this page with information from database
    cancelChanges = async () => {
        await this.componentDidMount();
    };

    // save changes to database but don't reload page
    saveChanges = async () => {
        await BottleService.updateBottle(this.state.bottle.variety.varietyName,
            this.state.bottle.region.name, this.state.bottle.region.country.name,
            this.state.bottle);
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

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="checkFavorite"
                           checked={this.state.bottle.favorite} onChange={this.toggleFavorite}/>
                    <label className="form-check-label" htmlFor="checkFavorite">Favorite</label>
                </div>

                <div className="form-group">
                    <label htmlFor="editCategory">Category</label>
                    <select className="form-control" id="editCategory" value={this.state.bottle.variety.category}
                            onChange={(event) => this.updateCategory(event.target.value)}>
                        <option value="red">red</option>
                        <option value="white">white</option>
                        <option value="pink">pink</option>
                        <option value="bubbly">bubbly</option>
                        <option value="sweet">sweet</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editVariety">Variety</label>
                    <select className="form-control" id="editVariety" value={this.state.bottle.variety.varietyName}
                            onChange={(event) => this.updateVariety(event.target.value)}>
                        {this.state.varieties[this.state.bottle.variety.category].map(
                            variety => (
                                <option value={variety.varietyName}>{variety.varietyName}</option>
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
                    <label htmlFor="editCountry">Country</label>
                    <select className="form-control" id="editCountry" value={this.state.bottle.region.country.name}
                            onChange={(event) => this.updateCountry(event.target.value)}>
                        {this.state.countries.map(
                            country => (
                                <option value={country.name}>{country.name}</option>
                            )
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="editRegion">Region</label>
                    <select className="form-control" id="editRegion" value={this.state.bottle.region.name}
                            onChange={(event) => this.updateRegion(event.target.value)}>
                        {this.state.selectedRegions.map(
                            region => (
                                <option value={region.name}>{region.name}</option>
                            )
                        )}
                    </select>
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

export default withRouter(EditBottle);