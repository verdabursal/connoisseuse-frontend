import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "red"
        };
    }

    handleChange = async event => {
        await this.setState({ category: event.target.value });
    };

    render() {
        return(
            <div>
                <form>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className={
                        this.state.category === "red"
                            ? "btn btn-secondary active"
                            : "btn btn-secondary"}>
                        <input type="radio" name="options" id="option1" value="red" autoComplete="off"
                               onChange={event => {this.handleChange(event)}}
                               checked={this.state.category === "red"}/>
                        Red
                    </label>
                    <label className={
                        this.state.category === "white"
                            ? "btn btn-secondary active"
                            : "btn btn-secondary"}>
                        <input type="radio" name="options" id="option2" value="white" autoComplete="off"
                               onChange={event => {this.handleChange(event)}}
                               checked={this.state.category === "white"}/>
                        White
                    </label>
                    <label className={
                        this.state.category === "pink"
                            ? "btn btn-secondary active"
                            : "btn btn-secondary"}>
                        <input type="radio" name="options" id="option3" value="pink" autoComplete="off"
                               onChange={event => {this.handleChange(event)}}
                               checked={this.state.category === "pink"}/>
                        Pink
                    </label>
                    <label className={
                        this.state.category === "bubbly"
                            ? "btn btn-secondary active"
                            : "btn btn-secondary"}>
                        <input type="radio" name="options" id="option4" value="bubbly" autoComplete="off"
                               onChange={event => {this.handleChange(event)}}
                               checked={this.state.category === "bubbly"}/>
                        Bubbly
                    </label>
                    <label className={
                        this.state.category === "sweet"
                            ? "btn btn-secondary active"
                            : "btn btn-secondary"}>
                        <input type="radio" name="options" id="option5" value="sweet" autoComplete="off"
                               onChange={event => {this.handleChange(event)}}
                               checked={this.state.category === "sweet"}/>
                        Sweet
                    </label>
                </div>
                </form>

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