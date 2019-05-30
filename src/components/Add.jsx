import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };
    }

    render() {
        return(
            <div>
                <button type="button" className="btn btn-outline-dark">Red</button>
                <button type="button" className="btn btn-outline-dark">White</button>
                <button type="button" className="btn btn-outline-dark">Pink</button>
                <button type="button" className="btn btn-outline-dark">Bubbly</button>
                <button type="button" className="btn btn-outline-dark">Sweet</button>

                <div className="form-group">
                    <label htmlFor="inputType">Type</label>
                    <input type="text" className="form-control" id="inputType" placeholder="Merlot"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputYear">Year</label>
                    <input type="number" className="form-control" id="inputYear" placeholder="2017"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputRegion">Region</label>
                    <input type="text" className="form-control" id="inputRegion" placeholder="France"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputLabel">Label</label>
                    <input type="text" className="form-control" id="inputLabel" placeholder="Cotes du Rhone"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDescription">Description</label>
                    <textarea className="form-control" id="inputDescription"/>
                </div>

            </div>
        )
    }
}

export default Add;