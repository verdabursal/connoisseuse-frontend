import React from 'react';

import * as BottleService from '../services/BottleService';
import * as VarietyService from '../services/VarietyService';
import * as CountryService from '../services/CountryService';
import * as RegionService from '../services/RegionService';

import redWineGlass from '../images/red_wine_glass.png';
import whiteWineGlass from '../images/white_wine_glass.jpg';
import pinkWineGlass from '../images/pink_wine_glass.png';
import bubblyWineGlass from '../images/bubbly_wine_glass.jpg';
import sweetWineGlass from '../images/sweet_wine_glass.png';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "red",
            redVarieties: [],
            whiteVarieties: [],
            pinkVarieties: [],
            bubblyVarieties: [],
            sweetVarieties: [],
            selectedVarieties: [],
            countries: [],
            selectedRegions: [],
            variety: "",
            year: 0,
            country: "",
            region: "",
            label: "",
            sweetness: 50,
            dryness: 50,
            tartness: 50,
            description: ""
        };
    }

    async componentDidMount() {
        let redVarieties = await VarietyService.fetchVarietiesOfCategory("red");
        let whiteVarieties = await VarietyService.fetchVarietiesOfCategory("white");
        let pinkVarieties = await VarietyService.fetchVarietiesOfCategory("pink");
        let bubblyVarieties = await VarietyService.fetchVarietiesOfCategory("bubbly");
        let sweetVarieties = await VarietyService.fetchVarietiesOfCategory("sweet");
        let selectedVarieties = redVarieties;
        let variety = selectedVarieties[0];

        let countries = await CountryService.fetchAllCountries();
        let country = countries[0];
        let selectedRegions = await RegionService.fetchRegionsInCountry(country.name);
        let region = selectedRegions[0];

        this.setState({
            redVarieties, whiteVarieties, pinkVarieties, bubblyVarieties, sweetVarieties, selectedVarieties,
            variety, countries, country, selectedRegions, region
        })
    }

    setCategory = async category => {
        let selectedVarieties = [];
        if (category === "red") {
            selectedVarieties = this.state.redVarieties;
        } else if (category === "white") {
            selectedVarieties = this.state.whiteVarieties;
        } else if (category === "pink") {
            selectedVarieties = this.state.pinkVarieties;
        } else if (category === "bubbly") {
            selectedVarieties = this.state.bubblyVarieties;
        } else if (category === "sweet") {
            selectedVarieties = this.state.sweetVarieties;
        }
        let variety = selectedVarieties[0];
        await this.setState({category, selectedVarieties, variety})
    };

    setVariety = async variety => {
        await this.setState({variety});
    };

    setCountry = async country => {
        let selectedRegions = await RegionService.fetchRegionsInCountry(country);
        await this.setState({country, selectedRegions});
    };

    setRegion = async region => {
        await this.setState({region})
    };

    updateForm = async (field, value) => {
        let updates = {};
        updates[field] = value;
        this.setState(updates);
    };

    addBottle = async () => {
        console.log("this.state.variety: " + this.state.variety);
        console.log("this.props.username: " + this.props.username);

        await BottleService.createBottle({
                id: 1,
                variety: null,
                region: this.state.region,
                year: this.state.year,
                label: this.state.label,
                sweetness: this.state.sweetness,
                dryness: this.state.dryness,
                tartness: this.state.tartness,
                description: this.state.description,
                favorite: false,
                user: null
            },
            this.state.variety, this.props.username);
        //this.props.history.push("/my-collection");
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="card-deck">
                    <div className={this.state.category === "red"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {
                             this.setCategory("red")
                         }}>
                        <img src={redWineGlass} className="card-img-top"
                             alt="red wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Red</h5>
                            <p className="card-text">e.g. Merlot, Pinot Noir</p>
                        </div>
                    </div>
                    <div className={this.state.category === "white"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {
                             this.setCategory("white")
                         }}>
                        <img src={whiteWineGlass} className="card-img-top"
                             alt="white wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">White</h5>
                            <p className="card-text">e.g. Chardonnay, Pinot Gris</p>
                        </div>
                    </div>
                    <div className={this.state.category === "pink"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {
                             this.setCategory("pink")
                         }}>
                        <img src={pinkWineGlass} className="card-img-top"
                             alt="pink wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Pink</h5>
                            <p className="card-text">e.g. Rose, White Zinfandel</p>
                        </div>
                    </div>
                    <div className={this.state.category === "bubbly"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {
                             this.setCategory("bubbly")
                         }}>
                        <img src={bubblyWineGlass} className="card-img-top"
                             alt="bubbly wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Bubbly</h5>
                            <p className="card-text">e.g. Champagne, Sparkling Red</p>
                        </div>
                    </div>
                    <div className={this.state.category === "sweet"
                        ? "card border-dark bg-light mb-3"
                        : "card border-light bg-light mb-3"}
                         onClick={() => {
                             this.setCategory("sweet")
                         }}>
                        <img src={sweetWineGlass} className="card-img-top"
                             alt="sweet wine glass"/>
                        <div className="card-body">
                            <h5 className="card-title">Sweet</h5>
                            <p className="card-text">e.g. Port, Ice Wine</p>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputType">Type</label>
                    <select className="form-control" onChange={event => this.setVariety(event.target.value)}>
                        {this.state.selectedVarieties.map(
                            variety =>
                                <option id={variety.varietyName} value={variety.varietyName}>
                                    {variety.varietyName}
                                </option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="inputYear">Year</label>
                    <input type="number" className="form-control" id="inputYear" placeholder="e.g. 2017"
                           onChange={event => this.updateForm("year", event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="selectCountry">Country</label>
                    <select className="form-control" onChange={event => this.setCountry(event.target.value)}>
                        {this.state.countries.map(
                            country =>
                                <option id={country.name} value={country.name}>
                                    {country.name}
                                </option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="selectRegion">Region</label>
                    <select className="form-control" onChange={event => this.setRegion(event.target.value)}>
                        {this.state.selectedRegions.map(
                            region =>
                                <option id={region.name} value={region.name}>
                                    {region.name}
                                </option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="inputLabel">Label</label>
                    <input type="text" className="form-control" id="inputLabel"
                           placeholder="e.g. Vigneto di Verdi"
                           onChange={event => this.updateForm("label", event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="sweetnessRange">Sweetness</label>
                    <input type="range" className="form-control-range" id="sweetnessRange"
                           onChange={event => this.updateForm("sweetness", event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="drynessRange">Dryness</label>
                    <input type="range" className="form-control-range" id="drynessRange"
                           onChange={event => this.updateForm("dryness", event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="tartnessRange">Tartness</label>
                    <input type="range" className="form-control-range" id="tartnessRange"
                           onChange={event => this.updateForm("tartness", event.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDescription">Description (optional)</label>
                    <textarea className="form-control" id="inputDescription" placeholder="e.g. oaky, buttery, smooth"
                              onChange={event => this.updateForm("description", event.target.value)}/>
                </div>

                <h3 className="text-center">
                    <button className="btn btn-primary mb-3" onClick={this.addBottle}>
                        Add Bottle to My Collection
                    </button>
                </h3>

            </div>
        )
    }
}

export default Add;